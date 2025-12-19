import { ID } from "react-native-appwrite";
import { databases, storage, appwriteConfig } from "./appwrite";
import dummyData from "./data";

async function uploadImageToStorage(imageUrl: string) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const file = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        {
            name: imageUrl.split("/").pop() || `image-${Date.now()}.jpg`,
            type: blob.type || "image/png" || "image/jpeg" || "image/jpg",
            size: blob.size,
            uri: imageUrl,
        }
    );

    return storage.getFileViewURL(appwriteConfig.bucketId, file.$id);
}

async function reseedMenuImages() {
    const menus = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.menuCollectionId
    );

    for (const menu of menus.documents) {
        const source = dummyData.menu.find(
            (m) => m.name === menu.name
        );

        if (!source) continue;

        try {
            const uploadedImage = await uploadImageToStorage(source.image_url);

            await databases.updateDocument(
                appwriteConfig.databaseId,
                appwriteConfig.menuCollectionId,
                menu.$id,
                { image_url: uploadedImage }
            );

            console.log(`✅ Updated image for ${menu.name}`);
        } catch (err) {
            console.error(`❌ Failed image for ${menu.name}`, err);
        }
    }

    console.log("🎉 Image reseeding complete");
}

export default reseedMenuImages;

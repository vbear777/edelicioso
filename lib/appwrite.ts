import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform: "com.hans.edelicioso",
    databaseId: '69393ebe002ee4949eb4',
    userCollectionId: 'user',
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({ email, password, name}: CreateUserParams) => {
    try {
        const newAccount = await account.create({userId: ID.unique(), email, password, name})
        if (!newAccount) throw Error;

        await signIn({ email, password});

        const avatarUrl = avatars.getInitialsURL(name);

        return await databases.createDocument({
            databaseId: appwriteConfig.databaseId,
            collectionId: appwriteConfig.userCollectionId,
            documentId: ID.unique(),
            data: { email, name, accountId: newAccount.$id, avatar: avatarUrl
            }}
        );
    } catch(e) {
        throw new Error(e as string);
    }
}

export const signIn = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession({email, password});
    } catch (e) {
        throw new Error(e as string);
    }
    
}
import { CreateUserParams, GetMenuParams, MenuItem, SignInParams, Category } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query, Storage, Models } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform: "com.hans.edelicioso",
    databaseId: '69393ebe002ee4949eb4',
    bucketId: '693cccbf003277abd358',
    userCollectionId: 'user',
    categoriesCollectionId: 'categories',
    menuCollectionId: 'menu',
    customizationsCollectionId: 'customizations',
    menuCustomizationsCollectionId: 'menu_customizations'
};

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
const avatars = new Avatars(client);


//REGISTER USER
export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create({
            userId: ID.unique(),
            email,
            password,
            name,
        });

        if (!newAccount) throw new Error("Failed to create account.");

        // Auto-login after register
        await signIn({ email, password });

        const avatarUrl = avatars.getInitialsURL(name);

        // make user document for database
        return await databases.createDocument({
            databaseId: appwriteConfig.databaseId,
            collectionId: appwriteConfig.userCollectionId,
            documentId: ID.unique(),
            data: {
                email,
                name,
                accountId: newAccount.$id,
                avatar: avatarUrl,
            },
        });
    } catch (err: any) {
        // show erro from appwrite 
        throw new Error(err?.message || "Failed to create user.");
    }
};


//SIGN IN SCREEN
export const signIn = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession({
            email,
            password,
        });

        return session;
    } catch (err: any) {
        throw new Error(err?.message || "Failed to sign in.");
    }
};

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get().catch(() => null);

        if (!currentAccount) {
            throw new Error("No current account found");
        }

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        const user = currentUser.documents?.[0];

        if (!user) {
            throw new Error("User document not found");
        }

        return {
            account: currentAccount,
            user: user,
        };

    } catch (err: any) {
        const message = err?.message || "Failed to fetch current user";
        console.log("getCurrentUser Error:", message);
        throw new Error(message);
    }
};

// get menu
export const getMenu = async ({
    category,
    query,
    limit,
}: GetMenuParams): Promise<MenuItem[]> => {
    try {
        const queries: string[] = [];

        if (category) queries.push(Query.equal("categories", category));
        if (query) queries.push(Query.search("name", query));
        if (limit) queries.push(Query.limit(limit));

        const menus = await databases.listDocuments<MenuItem>(
            appwriteConfig.databaseId,
            appwriteConfig.menuCollectionId,
            queries
        );

        return menus.documents;
    } catch (err) {
        throw new Error(
            err instanceof Error ? err.message : "Failed to fetch menu"
        );
    }
};


//get categories
export const getCategories = async (): Promise<Category[]> => {
    try {
        const categories = await databases.listDocuments<Category>(
            appwriteConfig.databaseId,
            appwriteConfig.categoriesCollectionId
        );

        return categories.documents;
    } catch (err) {
        throw new Error(
            err instanceof Error ? err.message : "Failed to fetch categories"
        );
    }
};
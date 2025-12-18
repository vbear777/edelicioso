import useAppwrite from "@/lib/useAppwrite";
import { View, Text, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCategories, getMenu } from "@/lib/appwrite";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

const Search = () => {
    const { category, query } = useLocalSearchParams<{query: string; category: string}>()

    const { data, refetch, loading } = useAppwrite({
        fn: getMenu, 
        params: {
            category,
            query,
            limit: 6,
        }
    });

    const { data: categories } = useAppwrite({ fn: getCategories });

    useEffect(() => {
        refetch({ category, query, limit: 6})
    }, [category, query]);

    console.log("DATA LENGTH:", data?.length);
    return (
        <SafeAreaView className="bg-white h-full ">
            <FlatList data={data} renderItem={({ item, index }) => {
                return (
                    <View className="flex-1 max-w-[48%]">
                        <Text>Menu Card</Text>
                    </View>
                )                
            }} />
        </SafeAreaView>
    )
}

export default Search;
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { images } from "@/constants";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
    const params = useLocalSearchParams<{ query?: string }>();
    const [query, setQuery] = useState(params.query);

    const debouncedSearch = useDebouncedCallback(
        (text: string) => router.setParams({ query, text }),
        500
    )

    const handleSearch = (text: string) => {
        setQuery(text);
        debouncedSearch(text);
    }

    return (
        <View className="relative flex flex-row items-center justify-center w-full bg-white shadow-md shadow-black/10 rounded-full  font-quicksand-medium text-midnight-100 gap-5"> 
            <TextInput 
                className="flex-1 p-5 "
                placeholder="Type here to search for pizza, pasta..."
                value={query}
                onChangeText={handleSearch}
                placeholderTextColor="#a0a0a0" 
            />

            <TouchableOpacity className="pr-5 " onPress={() => console.log('Search pressed')}>
                <Image
                    source={images.search}
                    className="size-6"
                    resizeMode="contain" 
                />
            </TouchableOpacity>
        </View>
    );
}

export default SearchBar;  
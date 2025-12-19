import { Category } from "@/type";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import cn from "clsx";

const Filter = ({ categories }: { categories?: Category[] }) => {
    const router = useRouter();
    const searchParams = useLocalSearchParams();

    const categoryParam =
        typeof searchParams.category === "string"
            ? searchParams.category
            : "";

    const [active, setActive] = useState(categoryParam);

    const filterData = [
        { $id: "all", name: "All" },
        ...(categories ?? []),
    ];

    const handlePress = (id: string) => {
        setActive(id);
        router.setParams({
            category: id === "all" ? undefined : id,
        });
    };

    return (
        <FlatList
            data={filterData}
            horizontal
            keyExtractor={(item) => item.$id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => handlePress(item.$id)}
                    className={cn(
                        "px-7 py-2 rounded-full",
                        active === item.$id
                            ? "bg-golden"
                            : "bg-gray-100"
                    )}
                >
                    <Text
                        className={cn(
                            "text-sm",
                            active === item.$id
                                ? "text-white"
                                : "text-black"
                        )}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
};

export default Filter;



/*

import { Category } from "@/type";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

const Filter = ({ categories }: { categories: Category[] }) => {
    const searchParams = useLocalSearchParams();
    const [active, setIsActive] = useState(searchParams.category || '');

    const handlePress = (id: string) => {};

    const filterData: (Category | { $id: string; name: string })[] = categories
        ? [{ $id: 'all', name: 'All' }, ...categories]
        : [{ $id: 'all', name: 'All' }];

    return (
        <FlatList 
            data={filterData}
            keyExtractor={(item) => item.$id} 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-x-2 pb-3"
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
        >

        </FlatList>
    );
}

 
export default Filter;
*/
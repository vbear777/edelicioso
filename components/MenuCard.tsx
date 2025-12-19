import { View, Text, TouchableOpacity, Image } from "react-native";
import { MenuItem } from "@/type";
import { appwriteConfig } from "@/lib/appwrite";

const MenuCard = ({ item: { image_url, name, price } }: { item: MenuItem }) => {
    return (
        <TouchableOpacity className="relative py-9 px-3.5 pt-24 flex items-center justify-end bg-white shadow-md shadow-black/30 rounded-3xl">
            <Image
                source={{ uri: image_url }}
                className="size-32 absolute -top-10"
                resizeMode="contain"
            />
            <Text className="text-center text-lg font-quicksand-bold text-midnight mb-2" numberOfLines={2}>
                {name}
            </Text>
            <Text className="text-center text-lg font-quicksand-semibold text-golden mb-4">
                ${price.toFixed(2)}
            </Text>
            <TouchableOpacity onPress={() => {}} className="bg-golden py-1 px-2 rounded-lg">
                <Text className="text-lg font-cinzel text-white">Add to Cart +</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default MenuCard;
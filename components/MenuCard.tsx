import { View, Text, TouchableOpacity, Image } from "react-native";
import { MenuItem } from "@/type";
import { appwriteConfig } from "@/lib/appwrite";

const MenuCard = ({ item: { image_url, name, price } }: { item: MenuItem }) => {
    return (
        <TouchableOpacity className="relative">
            <Image
                source={{ uri: image_url }}
                className="size-32 absolute -top-10"
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

export default MenuCard;
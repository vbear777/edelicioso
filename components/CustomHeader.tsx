import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { CustomHeaderProps } from "@/type";
import {images} from "@/constants";

const CustomHeader = ({ title }: CustomHeaderProps) => {
    const router = useRouter();

    return (
        <View className="w-full flex flex-row items-center justify-between mb-10">
            <TouchableOpacity onPress={() => router.back()}>
                <Image
                    source={images.arrowBack}
                    className="size-5"
                    resizeMode="contain"
                />
            </TouchableOpacity>

            {title && <Text className="text-lg font-quicksand-bold text-midnight">{title}</Text>}

            <Image source={images.search} className="size-5" resizeMode="contain" />
        </View>
    );
};

export default CustomHeader;
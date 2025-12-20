import { images } from "@/constants";
import { useCartStore } from "../store/cart.store";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

const CartButton = () => {
    const { getTotalItems } = useCartStore();
    const totalItems = getTotalItems();
    return (
        <TouchableOpacity className="flex items-center justify-center size-10 rounded-full bg-midnight" onPress={() => router.push('/cart')}>
            <Image source={images.bag} className="size-5" resizeMode="contain" />

            {totalItems > 0 && (
                <View className="absolute -top-2 -right-1 flex items-center justify-center size-5 bg-golden rounded-full">
                    <Text className="text-xs font-quicksand-bold text-white">{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default CartButton
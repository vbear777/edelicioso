import { View, Text } from "react-native";
import { CustomInputProps } from "@/type";

const CustomInput = ({ 
    placeholder = 'Enter text', 
    value, 
    onChangeText, 
    label, 
    secureTextEntry = false,
    keyboardType = "default"
}: CustomInputProps) => {
    return (
        <View className="w-full">
            <Text className="text-base text-start w-full font-quicksand-medium text-gray-500 pl-2">{label}</Text>
        </View>
    )
}

export default CustomInput;
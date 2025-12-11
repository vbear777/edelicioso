import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <Text>SignIn</Text>
            <Button title="Sign In" onPress={() => router.push("/sign-up")} />


            <CustomInput 
                placeholder="Enter your email"
                value={''}
                onChangeText={(text) => {}}
                label="Email"
                keyboardType="email-address"
            />
            <CustomButton />
        </View>
    )
}

export default SignIn;
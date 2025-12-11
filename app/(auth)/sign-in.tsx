import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput 
                placeholder="Enter your email"
                value={''}
                onChangeText={(text) => {}}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput 
                placeholder="Enter your password"
                value={''}
                onChangeText={(text) => {}}
                label="Password"
                secureTextEntry={true}
            />
            <CustomButton 
                title="Sign In"
            />

            <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="text-lg font-quicksand text-gray">
                    Don't have an account?
                </Text>
                <Link href="/(auth)/sign-up" className="text-lg text-golden font-quicksand-bold !important">
                    Sign Up
                </Link>
            </View>
        </View>
    )
}

export default SignIn;
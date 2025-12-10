import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Dimensions, ImageBackground } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { images } from "@/constants";

export default function AuthLayout() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
                <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25}}>
                    <ImageBackground source={images.loginGraphic} className="size-full rounded-b-lg" resizeMode="stretch" />
                </View>
            </ScrollView>
            <Slot />
        </KeyboardAvoidingView>
    )
}
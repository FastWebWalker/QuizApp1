import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors"; // Assuming you have a Colors file

export default function StackLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        headerTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="questions"
        options={{
          title: "Questions",
        }}
      />
      <Stack.Screen
        name="score"
        options={{
          title: "Score",
        }}
      />
    </Stack>
  );
}

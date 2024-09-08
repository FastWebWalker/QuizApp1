import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // Import type for navigation
import { Link } from "expo-router";
import tw from "twrnc";

export type RootStackParamList = {
  Splash: undefined;
  questions: undefined;
};

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Splash"
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

export default function Splash({ navigation }: Props) {
  return (
    <View style={tw`flex-1 flex items-center justify-center`}>
      <Image
        source={require("../../assets/images/quiz_3874176.png")}
        style={tw.style(`h-3.5/8 mb-4`, { aspectRatio: 1 })}
      />

      <Text style={tw`text-2xl text-center mb-10`}>Instructions</Text>
      <View
        style={tw`bg-purple-500 p-2 rounded h-30 w-80 items-center justify-center`}>
        <Text style={tw`text-white text-lg`}>Each Quiz Has Four Options </Text>
        <Text style={tw`text-white text-lg`}>
          Progress will be shown at top
        </Text>
        <Text style={tw`text-white text-lg`}>
          Score would be shown at the end
        </Text>
      </View>
      <Link style={tw`bg-purple-500 mt-10 rounded px-6 py-2`} href={'/questions'}>
        <Text style={tw`text-white text-lg`}>Start</Text>
      </Link>
    </View>
  );
}

// <Text>Splash</Text>
//     <Link href="/questions" style={tw`bg-orange-400`}>
//       <Text style={tw`text-purple-600 font-medium text-2xl`}>GO TO QUESTION</Text>
//     </Link>

//  <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import tw from "twrnc";

const Score = () => {
  const route = useRoute();
  const { score } = route.params;
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 items-center`}>
      <Image
        source={require("../../assets/images/image1.jpg")}
        style={tw.style(`w-100 h-103 mb-4`, { aspectRatio: 1 })}
      />
      <Text style={tw`text-2xl mb-4`}>Your Score is {score} points</Text>

      <Pressable
        style={tw`bg-purple-500 px-6 py-2 rounded`}
        onPress={() => navigation.navigate("questions")}>
        <Text style={tw`text-white text-lg`}>Play Again</Text>
      </Pressable>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({});

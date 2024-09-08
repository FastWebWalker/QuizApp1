import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";
import reactQuestions from "@/config/questions";
import { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(false);
  const navigation = useNavigation();

  const handleNextQuestion = () => {
    console.log(score);
    if (currentQuestionIndex === reactQuestions.length - 1) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedOption(null);
      setIsCorrect(null);
      navigation.navigate("score", { score });
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleOptionPress = (pressedOption: string) => {
    setSelectedOption(pressedOption);
    if (pressedOption === reactQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 10);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <View style={tw`flex mt-6 mt-25  items-center`}>
      <View style={tw`flex-row`}>
        <View style={tw`flex-0.8`}>
          <Progress.Bar
            progress={(currentQuestionIndex + 1) / reactQuestions.length}
            width={null}
            height={20}
            color={"#8A2BE2"}
            style={tw`mb-4`}
          />
        </View>
      </View>

      <Text style={tw`text-2xl mb-4 w-80 text-center`}>
        {reactQuestions[currentQuestionIndex].question}
      </Text>
      {reactQuestions[currentQuestionIndex].options.map((option) => (
        <Pressable
          onPress={() => handleOptionPress(option)}
          style={tw` border border-purple-500 p-4 my-2 rounded-md ${
            selectedOption === option
              ? isCorrect
                ? "bg-green-200 border-green-500"
                : "bg-red-200 border-red-700"
              : "border-purple-500"
          }`}
          key={option}
          disabled={selectedOption ? true : null}>
          <Text style={tw`w-80 text-lg`}>{option}</Text>
        </Pressable>
      ))}

      <Pressable
        style={tw`bg-purple-500 p-4 rounded-md mt-6`}
        onPress={handleNextQuestion}
        disabled={!selectedOption}>
        <Text style={tw`w-80 text-white text-lg text-center font-bold`}>
          {currentQuestionIndex === reactQuestions.length - 1
            ? "Finish"
            : "Next"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

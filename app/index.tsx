import { useRouter } from "expo-router";
import {
	Dimensions,
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const router = useRouter();

	return (
		<SafeAreaView>
			<View className="bg-[rgb(0,0,0)]">
				<ImageBackground
					style={styles.backgroungImage}
					source={require("@/assets/images/backOnboarding.png")}
				></ImageBackground>
				<View className="h-[40%] flex-col justify-between items-center p-4 ">
					<Text className="text-[rgba(249,249,249,1)] font-bold text-5xl text-center w-[90%] mt-[-15%] -tracking-widest leading-snug">
						Fall in Love with Coffee in Blissful Delight!
					</Text>
					<Text className="text-[rgba(249,249,249,.5)] text-center text-lg mt-[-15%] w-[90%]">
						Welcome to our cozy coffee corner, where every cup is a delightful
						for you.
					</Text>
					<Pressable
						onPress={() => router.navigate("/home")}
						className="flex justify-center items-center h-[4em] w-[24em] rounded-2xl bg-[#c67c4E]"
					>
						<Text className="text-[rgba(249,249,249,1)] text-xl">
							Get Started
						</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	backgroungImage: {
		height: (60 / 100) * height,
		resizeMode: "cover",
	},
});

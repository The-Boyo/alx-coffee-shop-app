import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function Home() {
	return (
		<SafeAreaView className="flex-col flex-1 items-center bg-[#E3E3E3]">
			<View className="h-[280px] w-full bg-black  pt-10 px-8">
				<Text className="my-custom-faded-text text-xl">Location</Text>
				<Text className="my-custom-white text-2xl align-center">
					Bilzen, Tanjungbalai <AntDesign name="down" size={10} />
				</Text>
				<TextInput
					className="my-custom-faded-text rounded-xl mt-10 h-[3.5em] w-[17em] text-xl p-4 bg-[#313131]"
					placeholder="Search Coffee"
				>
					<FontAwesome5 name="search" size={25} />
				</TextInput>
				<Pressable className="h-[4.3em] w-[4.3em] rounded-xl bg-[#C67C4E] absolute right-4 top-[130px]"></Pressable>
				{/* <Pressable className="h-[3.5em] w-[2em] rounded-lg bg-red-500"></Pressable> */}
			</View>
		</SafeAreaView>
	);
}

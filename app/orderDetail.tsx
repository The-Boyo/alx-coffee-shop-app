import { AntDesign, Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderDetail() {
	return (
		<SafeAreaView className="p-2">
			<View className="flex-row justify-between items-center h-[70px] px-5">
				<AntDesign name='left' size={24} color='black' />
				<Text className="text-xl font-bold" >Detail</Text>
				<Feather name="heart" size={24} color="black" />
			</View>
		</SafeAreaView>
	);
}

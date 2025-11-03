import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Image, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Delivery() {
	const riderImage = require('../assets/images/Profile-pic.jpg')

	return (
		<SafeAreaView className="h-full">
			<View className="flex h-full bg-blue-400 justify-center items-center">
				<Text className="text-red-500 text-lg font-semibold">Delivery Page</Text>
			</View>
			<View className="flex-col absolute bottom-0 w-full h-[46%] bg-white rounded-t-3xl py-6 px-8">
				<Pressable className="self-center h-2 w-14 bg-slate-300 rounded-2xl mb-5"></Pressable>
				<Text className="self-center text-xl font-bold">10 minutes left</Text>
				<View className="self-center flex-row mb-7">
					<Text className="text-md opacity-35">Delivery to</Text>
					<Text className="text-md font-bold"> Eliud Metto</Text>
				</View>
				<View className="flex-row justify-between mb-4">
					<View className="h-2 w-24 bg-green-400 rounded-lg"></View>
					<View className="h-2 w-24 bg-green-400 rounded-lg"></View>
					<View className="h-2 w-24 bg-green-400 rounded-lg"></View>
					<View className="h-2 w-24 bg-slate-300 rounded-lg"></View>
				</View>
				<View className="flex-row border-[1px] border-slate-200 rounded-lg p-3 mb-7">
					<View className="flex justify-center items-center border-[1px] border-slate-200 rounded-2xl p-4 mr-5">
					<MaterialIcons name="delivery-dining" size={32} color="#C67C4E" />
					</View>
					<View className="w-3/4">
						<Text className="font-bold text-lg">Delivered your order</Text>
						<Text className="opacity-40">We will deliver your goods to you in the shortest time possible.</Text>
					</View>
				</View>
					<View className="flex-row items-center">
						<Image source={riderImage} resizeMode="cover" className="h-[60px] w-[60px] rounded-xl mr-5" />
						<View>
							<Text className="font-bold text-lg">Moses Nandwa</Text>
							<Text className="opacity-40">Personal Courier</Text>
						</View>
						<View className="border-[1px] border-slate-200 rounded-xl absolute right-0 p-3">
							<Feather name="phone-call" size={24} color="black" />
						</View>
					</View>
			</View>
		</SafeAreaView>

	);
}

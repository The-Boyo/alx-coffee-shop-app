import { AntDesign, Feather, Foundation } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderDetails () {
	const [deliveryMode, setDeliveryMode] = useState<'deliver' | 'pick-up'>('deliver');

	const router = useRouter()

	const renderAddress =() => {
		if(deliveryMode === 'deliver') {
		return <View>
			<Text className="text-xl font-bold mb-3">Deliver Address</Text>
			<View>
				<Text className="text-lg font-bold">Eliud Metto</Text>
				<Text className="text-md opacity-40 mb-4">The Metto Villa No.44, Kitisuru rd, Kitisuru.</Text>
				<View className="flex-row">
					<View className="flex-row items-center justify-center p-1 w-[10em] border-[rgba(0,0,0,0.3)] border-[2px] border-solid rounded-2xl mr-5 opacity-75">
						<Feather className="mr-1" name="edit" size={16} color="black" />
						<Text>Edit Address</Text>
					</View>
					<View className="flex-row items-center justify-center p-1 w-[8em] border-[rgba(0,0,0,0.3)] border-[2px] border-solid rounded-2xl opacity-75">
						<Foundation className="mr-1" name="clipboard-notes" size={16} color="black" />
						<Text>Add Note</Text>
					</View>
				</View>
			</View>
		</View>
		}

		return <Text>Pick Up</Text>
	}

	return <SafeAreaView className="p-2">
		<View className="px-7 pt-3">
		<View className='flex-row p-3 mb-6 items-center'>
			<AntDesign className="" name='left' size={24} color='black' onPress={()=> router.back()} />
			<Text className="absolute left-[50%] text-xl font-bold">Order</Text>
		</View>
		<View className="flex-row bg-gray-200 h-[3.5em] py-1 px-1 rounded-xl mb-7">
			<Pressable onPress={()=> setDeliveryMode('deliver')} className={`w-[50%] rounded-xl flex justify-center items-center ${deliveryMode === 'deliver' ? 'bg-[#C67C4E]':''}`}>
				<Text className={`text-xl ${deliveryMode === 'deliver'? 'text-white font-bold': ''}`}>Deliver</Text>
			</Pressable>
			<Pressable onPress={()=> setDeliveryMode('pick-up')} className={`w-[50%] rounded-xl flex justify-center items-center ${deliveryMode === 'pick-up' ? 'bg-[#C67C4E]':''}`}>
				<Text className={`text-xl ${deliveryMode === 'pick-up'? 'text-white font-bold': ''}`}>Pick Up</Text>
			</Pressable>
		</View>
		{renderAddress()}
		<View className="w-full h-[1px] bg-[rgba(0,0,0,0.3)] mt-6"></View>
		</View>
	</SafeAreaView>
}
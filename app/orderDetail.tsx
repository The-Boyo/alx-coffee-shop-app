import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderDetails () {
	const [deliveryMode, setDeliveryMode] = useState<'deliver' | 'pick-up'>('deliver');

	const router = useRouter()

	return <SafeAreaView className="p-2">
		<View className="px-7 pt-3">
		<View className='flex-row p-3 mb-6 items-center'>
			<AntDesign className="" name='left' size={24} color='black' onPress={()=> router.back()} />
			<Text className="absolute left-[50%] text-xl font-bold">Order</Text>
		</View>
		<View className="flex-row bg-gray-200 h-[3.5em] py-1 px-1 rounded-xl">
			<Pressable onPress={()=> setDeliveryMode('deliver')} className={`w-[50%] rounded-xl flex justify-center items-center ${deliveryMode === 'deliver' ? 'bg-[#C67C4E]':''}`}>
				<Text className={`text-xl ${deliveryMode === 'deliver'? 'text-white font-bold': ''}`}>Deliver</Text>
			</Pressable>
			<Pressable onPress={()=> setDeliveryMode('pick-up')} className={`w-[50%] rounded-xl flex justify-center items-center ${deliveryMode === 'pick-up' ? 'bg-[#C67C4E]':''}`}>
				<Text className={`text-xl ${deliveryMode === 'pick-up'? 'text-white font-bold': ''}`}>Pick Up</Text>
			</Pressable>
		</View>
		</View>
	</SafeAreaView>
}
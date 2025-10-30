import { AntDesign, Feather, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Coffee, coffees } from "./home";

export default function OrderDetails () {
	const [deliveryMode, setDeliveryMode] = useState<'deliver' | 'pick-up'>('deliver');
	const [theCoffee, setTheCoffee] = useState<Coffee | undefined>(undefined)

	const [coffeeOrderCount, setOrderCount] = useState(1);

	const router = useRouter();

	const {id} = useLocalSearchParams();

	//The Discount
	const discountPrice = 1.0;
	const originalPrice = 2.0; 

	useEffect(()=> {
		const gottenCoffee = coffees.find((coffee: Coffee)=> coffee.id === Number(id))
		setTheCoffee(gottenCoffee)
	}, [theCoffee, id])

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

		return <View>
			<Text className="text-xl font-bold mb-3">Pick Up Address</Text>
			<View className="mb-3">
				<Text className="text-lg font-bold">Java House, Sarit</Text>
				<Text className="opacity-40">Sarit Centre, Westlands, Nairobi.</Text>
			</View>
			<View>
				<Text className="text-lg font-bold">Business Note</Text>
				<Text className="opacity-40">You can use the drive through for a quick grab and go. Thank you!</Text>
			</View>
		</View>
	}

	const renderImage = () => {
		if(!theCoffee) return null;

		let imageSource;

		switch (id) {
			case "2":
				imageSource = require("../assets/images/flatwhite.png");
				break;
			case "4":
				imageSource = require("../assets/images/panna.png");
				break;
			default:
				imageSource = require("../assets/images/mocha.png");
				break;
		}

		return <Image source={imageSource} resizeMode="cover" className="h-[75px] w-[75px] rounded-lg"/>
	}

	const renderCoffeeDetails = () => {
			if(theCoffee) {
				return <View className="flex-row items-center">
					{renderImage()}
					<View className="ml-4">
						<Text className="text-xl font-bold mb-1">{theCoffee.name}</Text>
						<Text className="opacity-40">{theCoffee.type}</Text>
					</View>
					<View className="absolute right-0 flex-row justify-around min-w-[6em] w-[30%]">
						<Pressable className="h-[27px] w-[27px] bg-white rounded-full flex justify-center items-center" onPress={()=> {
							if(coffeeOrderCount <= 1) return
								setOrderCount(coffeeOrderCount - 1)
						}}>
							<AntDesign name="minus" size={16} color="black" />
						</Pressable>
						<Text className="font-bold text-lg">{coffeeOrderCount}</Text>
						<Pressable className="h-[27px] w-[27px] bg-white rounded-full flex justify-center items-center" onPress={()=> {
							if(coffeeOrderCount >= 20) return
							setOrderCount(coffeeOrderCount + 1)
						}}>
							<AntDesign name="plus" size={16} color="black" />
						</Pressable>
					</View>
				</View>
			}
		}

	return <SafeAreaView className="min-h-screen h-full">
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
		<View className="py-3 mb-4">
			{renderCoffeeDetails()}
		</View>
		<View className="w-full h-[3px] bg-[#C67C4E] mb-6 opacity-15"></View>
		<View className="flex-row items-center bg-white h-16 w-full rounded-2xl px-4 mb-5">
			<MaterialCommunityIcons name="coffee-maker-check" size={24} color="#C67C4E" className="mr-4" />
			<Text className="font-bold text-lg">1 Discount is Applies</Text>
			<AntDesign name="right" size={20} color="black" className="absolute right-7" />
		</View>
		<View className="mb-6">
			<Text className="font-bold text-xl mb-4">Payment Summary</Text>
			<View className="flex-row justify-between mb-3">
				<Text className="text-lg">Price</Text>
				<Text className="text-lg font-bold">{theCoffee?.price}</Text>
			</View>
			<View className="flex-row">
				<Text className="text-lg">Delivery Fee</Text>
				<Text className="text-lg absolute right-14 line-through">${originalPrice}.0</Text>
				<Text className="text-lg font-bold absolute right-0">${discountPrice}.0</Text>
			</View>
		</View>
		</View>
	</SafeAreaView>
}
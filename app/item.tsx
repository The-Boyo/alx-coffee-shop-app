import { AntDesign, Feather, FontAwesome, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Fragment, useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Coffee, coffees } from "./home";

export default function ItemDetails() {
	
	const router = useRouter();
	const {id} = useLocalSearchParams();
	
	
	const [item, setItem] = useState<Coffee | undefined>(undefined);

	useEffect(()=> {
		const gottenItem = coffees.find((coffee:Coffee)=> coffee.id === Number(id))
		setItem(gottenItem)
	}, [id, item])
	

	const renderImage = () => {
		if (!item) return null;

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

		return (
			<Image
				source={imageSource}
				className="w-full h-full rounded-xl"
				resizeMode="cover"
			/>
		);
	}

	const renderItem = () => {
		if(!item) return null

		return (
		<Fragment key={item.id}>
			<View className="px-7">

			<View className="w-full h-[250px] mb-5">
				{renderImage()}
			</View>
			<Text className="text-2xl font-extrabold">{item.name}</Text>
			<View className="py-2 flex-row justify-between items-center mb-3">
				<Text className="font-extralight opacity-35">{item.type}</Text>
				<View className="w-[60%] flex-row justify-around">
					<MaterialIcons name="delivery-dining" size={24} color="#C67C4E" />
					<Fontisto name="coffeescript" size={24} color="#C67C4E" />
					<Fontisto name="coffeescript" size={24} color="#C67C4E" />
				</View>
			</View>
			<View className="flex-row justify-start items-center mb-5">
				<FontAwesome className="mr-3" name="star" size={24} color="rgba(251, 190, 33, 1)" />
				<Text className="mr-1 text-xl font-bold">{item.rating}</Text>
				<Text className="opacity-40">({item.NumberofRatings})</Text>
			</View>
			<View className="h-[2px] w-[85%] bg-black opacity-30 self-center mb-5"></View>
			<View className="mb-5">
				<Text className="text-xl font-bold mb-2">Description</Text>
				<Text className="opacity-40">{item.description}</Text>
			</View>
			<View>
				<Text className="text-xl font-bold mb-5">Size</Text>
				<View className="flex-row justify-between">
					<View className={`h-[3.5em] w-[7.5em] flex items-center justify-center border-2 border-solid rounded-2xl bg-white ${item.size === 'Small'? 'border-[#C67C4E]': 'border-[rgba(0,0,0,0.2)]'} `}>
						<Text className={`text-lg font-bold ${item.size === 'Small' ? 'text-[#C67C4E]': ''}`}>S</Text>
					</View>
					<View className={`h-[3.5em] w-[7.5em] flex items-center justify-center border-2 border-solid rounded-2xl bg-white ${item.size === 'Medium'? 'border-[#C67C4E]': 'border-[rgba(0,0,0,0.2)]'}`}>
						<Text className={`text-lg font-bold ${item.size === 'Medium' ? 'text-[#C67C4E]': ''}`}>M</Text>
					</View>
					<View className={`h-[3.5em] w-[7.5em] flex items-center justify-center border-2 border-solid rounded-2xl bg-white ${item.size === 'Large'? 'border-[#C67C4E]': 'border-[rgba(0,0,0,0.2)]'}`}>
						<Text className={`text-lg font-bold ${item.size === 'Large' ? 'text-[#C67C4E]': ''}`}>L</Text>
					</View>
				</View>
			</View>
			</View>
			<View className="flex-row justify-between pt-7 px-8 w-full h-[21%] absolute bottom-0 bg-white rounded-t-3xl">
				<View>
					<Text className="text-xl opacity-40 font-semibold mb-1">Price</Text>
					<Text className="text-2xl text-[#C67C4E] font-extrabold">{item.price}</Text>
				</View>
				<Pressable onPress={()=> router.push({
					pathname:'/orderDetail',
					params: {id: item.id}
				})} className="bg-[#C67C4E] h-[4.5em] w-[17em] rounded-3xl flex justify-center items-center">
					<Text className="text-white text-xl font-bold">Buy Now</Text>
				</Pressable>
			</View>
		</Fragment>
		)
	}

	return (
		<SafeAreaView className=" flex-col h-full">
			<View className="flex-row justify-between items-center h-[70px] px-7">
				<AntDesign name='left' size={24} color='black' onPress={()=> router.back()} />
				<Text className="text-xl font-bold" >Detail</Text>
				<Feather name="heart" size={24} color="black" />
			</View>
			{renderItem()}
		</SafeAreaView>
	);
}

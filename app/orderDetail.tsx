import { AntDesign, Feather, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Fragment, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Coffee, coffees } from "./home";

export default function OrderDetail() {
	const router = useRouter();
	const {id} = useLocalSearchParams();


	const [item, setItem] = useState<Coffee | undefined>(undefined);

	useEffect(()=> {
		const gottenItem = coffees.find((coffee:Coffee)=> coffee.id === Number(id))
		setItem(gottenItem)
	}, [id])
	

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
			<View className="w-full h-[250px] mb-5">
				{renderImage()}
			</View>
			<Text className="text-2xl font-extrabold">{item.name}</Text>
			<View className="py-2 flex-row justify-between items-center">
				<Text className="font-extralight opacity-35">{item.type}</Text>
				<View className="w-[60%] flex-row justify-around">
					<MaterialIcons name="delivery-dining" size={24} color="#C67C4E" />
					<Fontisto name="coffeescript" size={24} color="#C67C4E" />
					<Fontisto name="coffeescript" size={24} color="#C67C4E" />
				</View>
			</View>
		</Fragment>
		)
	}

	return (
		<SafeAreaView className="py-2 px-7">
			<View className="flex-row justify-between items-center h-[70px] px-5">
				<AntDesign name='left' size={24} color='black' onPress={()=> router.back()} />
				<Text className="text-xl font-bold" >Detail</Text>
				<Feather name="heart" size={24} color="black" />
			</View>
			{renderItem()}
		</SafeAreaView>
	);
}

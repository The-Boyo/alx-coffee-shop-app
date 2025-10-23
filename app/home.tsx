import {
	FlatList,
	Image,
	ImageSourcePropType,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
	AntDesign,
	Entypo,
	Feather,
	FontAwesome5,
	Foundation,
	MaterialCommunityIcons,
	Octicons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export interface Coffee {
	image: ImageSourcePropType;
	id: number;
	name: string;
	type: string;
	rating: number;
	NumberofRatings: number;
	size: "Small" | "Medium" | "Large";
	description: string;
	price: string;
}

export const coffees: Coffee[] = [
	{
		image: require("../assets/images/mocha.png"),
		id: 1,
		name: "Caffe Mocha",
		type: "Deep Foam",
		rating: 4.8,
		NumberofRatings: 100,
		size: "Small",
		description:
			"a double shot of mocha is exactly 150ml of tea spoon with an exotice well brewed test of Ethiopian coffee brewed along the Nile.",
		price: "$ 4.53",
	},
	{
		image: require("../assets/images/flatwhite.png"),
		id: 2,
		name: "Flat White",
		type: "Espresso",
		rating: 4.8,
		NumberofRatings: 150,
		size: "Large",
		description:
			"a double shot of mocha is exactly 150ml of tea spoon with an exotice well brewed test of Ethiopian coffee brewed along the Nile.",
		price: "$ 3.53",
	},
	{
		image: require("../assets/images/mocha.png"),
		id: 3,
		name: "Mocha Fusi",
		type: "Ice/Hot",
		rating: 4.8,
		NumberofRatings: 70,
		size: "Large",
		description:
			"a double shot of mocha is exactly 150ml of tea spoon with an exotice well brewed test of Ethiopian coffee brewed along the Nile.",
		price: "$ 7.53",
	},
	{
		image: require("../assets/images/panna.png"),
		id: 4,
		name: "Caffe Panna",
		type: "Deep Foam",
		rating: 4.8,
		NumberofRatings: 170,
		size: "Medium",
		description:
			"a double shot of mocha is exactly 150ml of tea spoon with an exotice well brewed test of Ethiopian coffee brewed along the Nile.",
		price: "$ 5.53",
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState("home");
	const [coffee, setCoffee] = useState("all");

	const router = useRouter();

	return (
		<SafeAreaView className="flex-col flex-1 items-center bg-[#E3E3E3]">
			<View className="h-[280px] w-full bg-black  pt-10 px-8">
				<Text className="my-custom-faded-text text-xl">Location</Text>
				<Text className="my-custom-white text-2xl align-center">
					Baba dogo, Nairobi <AntDesign name="down" size={10} />
				</Text>
				<TextInput
					className="my-custom-faded-text rounded-xl mt-10 h-[3.5em] w-[17em] text-xl p-4 bg-[#313131]"
					placeholder="Search Coffee"
				>
					<FontAwesome5 name="search" size={25} />
				</TextInput>
				<Pressable className="h-[4.3em] w-[4.3em] rounded-xl bg-[#C67C4E] absolute right-4 top-[130px] flex-col justify-center items-center">
					<MaterialCommunityIcons
						name="swap-horizontal"
						size={30}
						color="white"
					/>
					{/* <Ionicons name="search-outline" size={18} color="white" />
					<Ionicons name="search-outline" size={18} color="white" /> */}
				</Pressable>
			</View>
			<Image
				source={require("@/assets/images/Banner.png")}
				className="h-[150px] w-[85%] relative top-[-60px] rounded-xl"
			></Image>
			<View className="w-full top-[-30px] px-5">
				<ScrollView className="h-[40px]">
					<View className="flex flex-row justify-between">
						<Text
							className={`text-lg text-center rounded-lg py-1 px-3 ${coffee === "all" ? "bg-[#C67C4E] text-white" : ""}`}
							onPress={() => setCoffee("all")}
						>
							All Coffee
						</Text>
						<Text
							className={`text-lg text-center rounded-lg py-1 px-3 ${coffee === "machiato" ? "bg-[#C67C4E] text-white" : ""}`}
							onPress={() => setCoffee("machiato")}
						>
							Machiato
						</Text>
						<Text
							className={`text-lg text-center rounded-lg py-1 px-3 ${coffee === "latte" ? "bg-[#C67C4E] text-white" : ""}`}
							onPress={() => setCoffee("latte")}
						>
							Latte
						</Text>
						<Text
							className={`text-lg text-center rounded-lg py-1 px-3 ${coffee === "americano" ? "bg-[#C67C4E] text-white" : ""}`}
							onPress={() => setCoffee("americano")}
						>
							Americano
						</Text>
					</View>
				</ScrollView>
				<FlatList
					className="h-[320px]"
					data={coffees}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2}
					renderItem={({ item }: { item: Coffee }) => (
						<View className="h-[260px] w-[48%] flex mx-1 my-3 bg-[#faf8f8] rounded-xl p-3">
							<Image
								source={item.image}
								className="h-[145px] w-full rounded-xl mb-2"
							/>
							<Text className="self-start text-xl font-bold">{item.name}</Text>
							<Text className="text-sm opacity-60 mb-2">{item.type}</Text>
							<View className="flex flex-row justify-between items-center">
								<Text className="self-start text-xl font-bold">
									{item.price}
								</Text>
								<Pressable
									onPress={() =>
										router.push({
											pathname: "/orderDetail",
											params: { id: item.id },
										})
									}
									className="h-[2.7em] w-[2.7em] rounded-xl bg-[#C67C4E] flex items-center justify-center"
								>
									<Entypo name="plus" size={18} color="#fff" />
								</Pressable>
							</View>
						</View>
					)}
				/>
			</View>
			<View className="flex items-center w-full h-[16%] absolute bottom-0 py-6 px-3 bg-white rounded-t-2xl">
				<View className="flex-row justify-around w-full h-[50%]">
					<View className="flex-col items-center justify-around">
						<Foundation
							name="home"
							size={28}
							color={activeTab === "home" ? "#C67C4E" : "black"}
							onPress={() => setActiveTab("home")}
						/>
						<View
							className={`h-1.5 w-3 rounded-md bg-[#C67C4E] ${activeTab === "home" ? "visible" : "invisible"}`}
						></View>
					</View>
					<View className="flex-col items-center justify-around">
						<Feather
							name="heart"
							size={24}
							color={activeTab === "heart" ? "#C67C4E" : "black"}
							onPress={() => setActiveTab("heart")}
						/>
						<View
							className={`h-1.5 w-3 rounded-md bg-[#C67C4E] ${activeTab === "heart" ? "visible" : "invisible"}`}
						></View>
					</View>
					<View className="flex-col items-center justify-around">
						<SimpleLineIcons
							name="handbag"
							size={24}
							color={activeTab === "handbag" ? "#C67C4E" : "black"}
							onPress={() => setActiveTab("handbag")}
						/>
						<View
							className={`h-1.5 w-3 rounded-md bg-[#C67C4E] ${activeTab === "handbag" ? "visible" : "invisible"}`}
						></View>
					</View>
					<View className="flex-col items-center justify-around">
						<Octicons
							name="bell"
							size={24}
							color={activeTab === "bell" ? "#C67C4E" : "black"}
							onPress={() => setActiveTab("bell")}
						/>
						<View
							className={`h-1.5 w-3 rounded-md bg-[#C67C4E] ${activeTab === "bell" ? "visible" : "invisible"}`}
						></View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

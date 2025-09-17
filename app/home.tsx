import {
	FlatList,
	Image,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Coffee {
	image: string;
	id: number;
	name: string;
	type: string;
	rating: number;
	NumberofRatings: number;
	size: "Small" | "Medium" | "Large";
	description: string;
	price: string;
}

const coffees: Coffee[] = [
	{
		image: "mocha",
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
		image: "flatwhite",
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
		image: "mocha",
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
		image: "panna",
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
	const router = useRouter();

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
			</View>
			<Image
				source={require("@/assets/images/Banner.png")}
				className="h-[150px] w-[85%] relative top-[-60px] rounded-xl"
			></Image>
			<View className="w-full top-[-30px] px-5">
				<ScrollView className="h-[40px]">
					<View className="flex flex-row justify-between">
						<Text className="text-lg text-center">All Coffee</Text>
						<Text className="text-lg text-center">Machiato</Text>
						<Text className="text-lg text-center">Latte</Text>
						<Text className="text-lg text-center">Americano</Text>
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
								source={require(`@/assets/images/panna.png`)}
								alt={`${item.name} photo`}
								className="h-[145px] w-full rounded-xl mb-2"
							/>
							<Text className="self-start text-xl font-bold">{item.name}</Text>
							<Text className="text-sm opacity-60 mb-2">{item.type}</Text>
							<View className="flex flex-row justify-between items-center">
								<Text className="self-start text-xl font-bold">
									{item.price}
								</Text>
								<Pressable
									onPress={() => router.navigate("/orderDetail")}
									className="h-[2.7em] w-[2.7em] rounded-xl bg-[#C67C4E] flex items-center justify-center"
								>
									<Entypo name="plus" size={18} color="#fff" />
								</Pressable>
							</View>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

import { Stack } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" options={{ title: "Onboarding" }} />
				<Stack.Screen name="home" options={{ title: "Home" }} />
				<Stack.Screen name="item" options={{ title: "Item" }} />
				<Stack.Screen name="delivery" options={{ title: "Delivery" }} />
			</Stack>
		</SafeAreaProvider>
	);
}

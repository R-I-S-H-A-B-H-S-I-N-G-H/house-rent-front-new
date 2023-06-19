import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
	const [fontLoaded] = useFonts({
		"Sofia-Black": require("./assets/fonts/SofiaSans-Black.ttf"),
		"Sofia-Bold": require("./assets/fonts/SofiaSans-Bold.ttf"),
		"Sofia-Medium": require("./assets/fonts/SofiaSans-Medium.ttf"),
		"Sofia-Regular": require("./assets/fonts/SofiaSans-Regular.ttf"),
		"Sofia-Light": require("./assets/fonts/SofiaSans-Light.ttf"),
	});

	if (!fontLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<AppNavigation />
		</SafeAreaProvider>
	);
}

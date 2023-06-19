import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackNavigator } from "./ScreenRoutes";

function AppNavigation(props) {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}

export default AppNavigation;

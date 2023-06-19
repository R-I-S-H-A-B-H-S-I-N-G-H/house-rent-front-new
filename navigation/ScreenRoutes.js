import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createSharedElementStackNavigator();

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false,
				cardStyleInterpolator: ({ current }) => ({
					cardStyle: { opacity: current.progress },
				}),
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen
				name="DetailScreen"
				component={DetailScreen}
				options={{ gestureEnabled: false }}
				sharedElements={(route, otherRoute, showing) => {
					// Your code
					const { item } = route.params;

					//   return [`${item.id}.img`, `${item.id}.category`, `${item.id}.name`, `${item.id}.address`]
					return [
						{
							id: `${item.id}.img`,
							animation: "move",
							resize: "clip",
							align: "center-top",
						},
						{
							id: `${item.id}.category`,
							animation: "fade",
							resize: "clip",
							align: "left-center",
						},
						{
							id: `${item.id}.name`,
							animation: "fade",
							resize: "clip",
							align: "left-center",
						},
						{
							id: `${item.id}.address`,
							animation: "fade",
							resize: "clip",
							align: "left-center",
						},
					];
				}}
			/>
		</Stack.Navigator>
	);
};

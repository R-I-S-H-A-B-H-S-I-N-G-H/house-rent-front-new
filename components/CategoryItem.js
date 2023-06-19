import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../utils/Styles";

const SIZE_ICON_CONTAINER = 60;

function CategoryItem(props) {
	const { item } = props;
	return (
		<View style={styles.categoryContainer}>
			<View style={styles.iconContainer}>
				<FontAwesome name={item.iconName} size={26} color={item.iconColor} />
			</View>
			<Text style={styles.categoryName}>{item.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	categoryContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginRight: 24,
	},
	iconContainer: {
		width: SIZE_ICON_CONTAINER,
		height: SIZE_ICON_CONTAINER,
		borderRadius: SIZE_ICON_CONTAINER / 2,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		borderColor: colors.greyLight,
	},
	categoryName: {
		fontFamily: "Sofia-Medium",
		fontSize: 14,
		color: colors.black,
	},
});

export default CategoryItem;

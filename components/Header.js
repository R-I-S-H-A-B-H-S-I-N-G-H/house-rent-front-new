import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../utils/Styles";

function Header({ onInput = () => {} }) {
	return (
		<View style={styles.headerContainer}>
			{/* Current Location */}
			<View style={styles.topHeaderContainer}>
				<View>
					<Text
						style={{
							fontFamily: "Sofia-Medium",
							color: colors.greyDark,
							fontSize: 14,
						}}
					>
						Your Location
					</Text>
					<Text
						style={{
							fontFamily: "Sofia-Bold",
							color: colors.black,
							fontSize: 24,
						}}
					>
						India, Delhi
					</Text>
				</View>
				<View>
					<FontAwesome name="bell" size={26} color={colors.greyDark} />
					<View
						style={{
							width: 16,
							height: 16,
							borderRadius: 16 / 2,
							backgroundColor: colors.redError,
							position: "absolute",
							right: 0,
							top: 0,
							alignItems: "center",
							justifyContent: "center",
							borderWidth: 2,
							borderColor: "white",
						}}
					>
						<Text
							style={{
								fontFamily: "Sofia-Regular",
								color: "white",
								fontSize: 10,
							}}
						>
							2
						</Text>
					</View>
				</View>
			</View>
			{/* Search */}
			<View style={{ marginTop: 12 }}>
				<View
					style={{
						height: 38,
						borderRadius: 5,
						backgroundColor: colors.greyLight,
						alignItems: "center",
						paddingHorizontal: 12,
						flexDirection: "row",
					}}
				>
					<FontAwesome name="search" color={colors.greyDark} size={16} />
					<TextInput
						onChange={onInput}
						placeholder="Search"
						style={{ marginLeft: 10, flex: 1 }}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: "white",
	},
	topHeaderContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default Header;

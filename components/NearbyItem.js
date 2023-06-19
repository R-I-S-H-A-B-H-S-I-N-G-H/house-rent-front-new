import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { colors } from "../utils/Styles";

function NearbyItem(props) {
	const { item, navigation } = props;
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate("DetailScreen", { item });
			}}
			style={{
				flexDirection: "row",
				padding: 8,
				borderWidth: 1,
				borderColor: colors.greyLight,
				borderRadius: 8,
			}}
		>
			<SharedElement id={`${item.id}.img`}>
				<Image
					source={{ uri: item.images[0] }}
					style={{ width: 100, height: 100, borderRadius: 10 }}
				/>
			</SharedElement>
			<View style={{ marginLeft: 10, flex: 1 }}>
				<SharedElement id={`${item.id}.category`}>
					<Text
						style={{
							fontFamily: "Sofia-Medium",
							color: colors.redDark,
							fontSize: 14,
						}}
					>
						{item.category}
					</Text>
				</SharedElement>
				<SharedElement id={`${item.id}.name`}>
					<Text
						style={{
							fontFamily: "Sofia-Medium",
							color: colors.black,
							fontSize: 16,
							marginTop: 8,
						}}
					>
						{item.houseName}
					</Text>
				</SharedElement>
				<SharedElement id={`${item.id}.address`}>
					<Text
						style={{
							fontFamily: "Sofia-Medium",
							color: colors.greyDark,
							fontSize: 14,
							marginTop: 6,
						}}
					>
						{item.address}
					</Text>
				</SharedElement>
				<View
					style={{
						marginTop: 6,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flexDirection: "row" }}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Ionicons name="bed" color={colors.redDark} size={14} />
							<Text
								style={{
									fontFamily: "Sofia-Regular",
									fontSize: 14,
									color: colors.greyDark,
									marginLeft: 3,
								}}
							>
								{item.info.bed}
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginLeft: 8,
							}}
						>
							<FontAwesome name="bath" color={colors.redDark} size={14} />
							<Text
								style={{
									fontFamily: "Sofia-Regular",
									fontSize: 14,
									color: colors.greyDark,
									marginLeft: 3,
								}}
							>
								{item.info.bed}
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row", alignItems: "flex-end" }}>
						<Text
							style={{
								fontFamily: "Sofia-Bold",
								color: colors.black,
								fontSize: 16,
							}}
						>
							₹{item.monthlyCost.total}
						</Text>
						<Text
							style={{
								fontFamily: "Sofia-Medium",
								color: colors.greyDark,
								fontSize: 14,
							}}
						>
							/m
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default NearbyItem;

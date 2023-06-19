import React from "react";
import { View, ScrollView } from "react-native";
import { CategoryList } from "../utils/CategoryList";
import { colors } from "../utils/Styles";
import CategoryItem from "./CategoryItem";

const CategoryWidget = (props) => {
	return (
		<View style={{ marginTop: 18 }}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{CategoryList.map((item, index) => {
					return <CategoryItem key={index} item={item} />;
				})}
			</ScrollView>
			<View
				style={{
					width: "100%",
					borderWidth: 1,
					marginTop: 16,
					borderColor: colors.greyLight,
				}}
			/>
		</View>
	);
};

export default CategoryWidget;

import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryWidget from "../components/CategoryWidget";
// Components
import Header from "../components/Header";
import NearbyWidget from "../components/NearbyWidget";

const HomeScreen = (props) => {
	const [searchText, setSearchText] = useState("");
	const [houseList, setHouseList] = useState([]);
	useEffect(() => {
		fetch("https://houserent.cyclic.app/house/list").then((ele) =>
			ele.json().then((res) => {
				console.log("API RES : ", res);
				setHouseList(res);
			}),
		);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header
					onInput={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				{/* <CategoryWidget /> */}
				<NearbyWidget houseList={houseList} searchText={searchText} />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "column",
		padding: 18,
	},
});

export default HomeScreen;

import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: screenWidth - 20,
    height: 200,
    borderRadius: 10,
  },
});

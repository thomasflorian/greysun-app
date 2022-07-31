import { StyleSheet } from "react-native";
import { Theme } from "styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontFamily: Theme.font.bold,
    textAlign: "center",
  }
});
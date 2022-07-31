// React imports
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
// Font + Icon imports
import * as Font from "expo-font";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// Import screens (temp?)
import HomeScreen from "screens/Home";
import ProfileScreen from "screens/Profile";
import { Layout } from "constant";

export default function App() {
  // State variables
  const [ready, setReady] = useState(false);

  // Load fonts
  useEffect(() => {
    Promise.all([
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
      }),
    ])
      .then(() => {
        setReady(true);
      })
      .catch((error) => {
        // TODO: Catch Error
      });
  }, []);

  console.log("Reload");

  // Wait for application to load before rendering
  let body = <View />;
  if (ready) {
    body = (
      <ProfileScreen />
    );
  }

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      {body}
      <StatusBar style="auto" />
    </View>
  );
}

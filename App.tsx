// React imports
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Font + Icon imports
import * as Font from "expo-font";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";


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

  // Wait for application to load before rendering
  let body = <View />;
  if (ready) {
    body = (
      <View>
        <Text style={{textAlign: "center"}}> Text is here! </Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      {body}
      <StatusBar style="auto" />
    </View>
  );
}

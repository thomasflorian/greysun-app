import React from "react";
import { Text, View } from "react-native";

import styles from "./HomeScreen.styles";


const HomeScreen: React.FC = () => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen!</Text>
        </View>
    );
  };
  
  
  export default HomeScreen;
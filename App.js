import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ImageProvider } from "./src/contexts/ImageContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import PreviewPhoto from './src/screens/PreviewPhoto'
import Success from './src/screens/Success'
import SplashScreen from "./src/screens/Splash";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ImageProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Preview" component={PreviewPhoto} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
};

export default App;

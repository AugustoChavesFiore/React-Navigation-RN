import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Provider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Counter"
              component={CounterScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="counter"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="login"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

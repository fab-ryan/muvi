import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import MyList from "../screens/myList";
import Search from "../screens/search";
import Profile from "../screens/profile";
import * as icons from "@expo/vector-icons";

function MainNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "#f2b917",
        tabBarActiveTintColor: "#f2b917",
        tabBarActiveBackgroundColor: "#202022",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#202022",
          borderTopColor: "rgba(255,255,255,0.1)",
          shadowRadius: 5,
        },
        tabBarHideOnKeyboard: true,
      }}
      sceneContainerStyle={{ backgroundColor: "#202022" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <icons.Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <icons.Feather name="folder" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <icons.Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <icons.Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainNavigator;

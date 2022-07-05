import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Film from "../screens/home/film";
import Featured from "../screens/home/feature";
import Origin from "../screens/home/origins";
import Series from "../screens/home/series";
import Bookmark from "../screens/home/bookmarks";
import search from "../screens/search";
import { Dimensions } from "react-native";
const Tab = createMaterialTopTabNavigator();

function SearchNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        headerTintColor: "#f2b917",
        tabBarActiveTintColor: "#f2b917",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#202022",
        tabBarStyle: { backgroundColor: "#202022" },
        tabBarIndicatorStyle: {
          backgroundColor: "#f2b917",
          height: 4,
          width: 40,
          borderRadius: 9,
          marginHorizontal: 47,
        },
        swipeEnabled: false,
      }}
      initialLayout={{ width: Dimensions.get("window").width }}
      sceneContainerStyle={{ backgroundColor: "#27262a" }}
    >
      <Tab.Screen name="allResults" component={search} />
      <Tab.Screen name="series" component={search} />
      <Tab.Screen name="film" component={search} />
      <Tab.Screen name="origin" component={search} />
    </Tab.Navigator>
  );
}
export default SearchNavigation;

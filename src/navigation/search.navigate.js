import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import search from "../screens/search";
import SeriesSearch from "../screens/search/series";
import MovieSearch from "../screens/search/movie";
import SearchResults from "../screens/search/searchResults";
import { Dimensions } from "react-native";
const Tab = createMaterialTopTabNavigator();

function SearchNavigation(props) {
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
          width: 30,
          borderRadius: 9,
          marginHorizontal: 47,
        },
        tabBarLabelStyle: { textTransform: "none" },
        swipeEnabled: true,
      }}
      initialLayout={{ width: Dimensions.get("window").width }}
      sceneContainerStyle={{ backgroundColor: "#27262a" }}
    >
      <Tab.Screen name="allResults" options={{ title: "All Results" }}>
        {() => (
          <SearchResults searchText={props.searchText} props={props.props} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Series">
        {() => (
          <SeriesSearch searchText={props.searchText} props={props.props} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Film">
        {() => (
          <MovieSearch searchText={props.searchText} props={props.props} />
        )}
      </Tab.Screen>
      {/* <Tab.Screen name="origin" component={search} /> */}
    </Tab.Navigator>
  );
}
export default SearchNavigation;

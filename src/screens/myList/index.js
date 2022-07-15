import { View, Text, ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { getAllMyList } from "../../redux/actions";
import { useEffect, useState, useCallback } from "react";
import { AddedList } from "../../components";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function MyList(props) {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    props.getAllMyList(props.userData.uid);
  }, [refreshing]);
  const data = props.details;
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginTop: 19,
            marginHorizontal: 20,
          }}
        >
          My List
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(36,39,43,255)",
          marginTop: 13,
        }}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="transparent"
              colors={["transparent"]}
              // size={90}
            />
          }
        >
          <Text>Today</Text>
          {data ? (
            data?.map((item, idx) => {
              return (
                <AddedList
                  key={idx}
                  image={
                    item.movieDetail?.poster_path
                      ? item.movieDetail?.backdrop_path
                      : item.movieDetail?.poster_path
                  }
                  title={item.movieDetail?.title}
                  descrption={item.movieDetail?.overview}
                  onPress={() =>
                    props.navigation.navigate("Details", {
                      movieId: item.movieDetail.id,
                    })
                  }
                />
              );
            })
          ) : (
            <Text>No Data</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const mapToState = ({ details, login }) => ({
  details: details.allMyList,
  userData: login.userData,
});
export default connect(mapToState, { getAllMyList: getAllMyList })(MyList);

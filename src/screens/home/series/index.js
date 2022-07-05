import { View, Text, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { getAllTvSeries } from "../../../redux/actions";
import SeriesComponent from "../../../components/series";
import { useEffect } from "react";
function Series(props) {
  const dispatch = useDispatch();
  const { series, isLoaded } = useSelector((state) => state.tvseries);
  console.log(series);
  useEffect(() => {
    dispatch(getAllTvSeries());
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#26272b" }}>
      <Text
        style={{
          fontSize: scale(15),
          color: "#fff",
          fontWeight: "600",
          marginVertical: verticalScale(10),
          marginLeft: scale(15),
        }}
      >
        Trending series
      </Text>
      {/* {series_loading && <SeriesSkeleton />} */}
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {isLoaded ? (
          series.results.map((serie, index) => {
            return (
              <SeriesComponent
                key={index}
                seriesImage={serie.poster_path}
                seriesTitle={serie.original_name}
                seriesDate={serie.overview}
              />
            );
          })
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </View>
  );
}

export default Series;

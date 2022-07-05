import { View, Text, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilm } from "../../../redux/actions";
import SeriesComponent from "../../../components/series";
import { useEffect } from "react";
function Film(props) {
  const dispatch = useDispatch();
  const { film, isLoaded } = useSelector((state) => state.film);
  useEffect(() => {
    dispatch(getAllFilm());
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
          film.results.map((serie, index) => {
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

export default Film;

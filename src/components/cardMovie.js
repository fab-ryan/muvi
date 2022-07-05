import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const CardMovie = (props) => {
  const num = new Number(props.rate);
  return (
    <TouchableOpacity style={styles.main} onPress={props.onPress}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${props.image}` }}
        style={styles.bgImage}
      >
        <View style={styles.rateContainer}>
          <Text style={{ fontWeight: "bold" }}>{num.toPrecision(2)}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 250,
    height: 200,
    flex: 1,
    paddingHorizontal: 6,
    borderRadius: 9,
  },
  bgImage: {
    borderRadius: 9,
    width: "100%",
    height: 150,
    overflow: "hidden",
  },
  rateContainer: {
    backgroundColor: "#f2b917",
    width: 30,
    height: 20,
    marginTop: 10,
    marginRight: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 5,
  },
});

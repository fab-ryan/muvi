import { Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "../../utils/slides";
import { Button } from "../../components/button";
const OnBoardScreen = (props) => {
  const rendeItem = ({ item }) => {
    return (
      <View
        style={[{ width: "100%", height: "100%", backgroundColor: "white" }]}
      >
        <ImageBackground
          source={item.image}
          style={{ width: "101%", height: "100%" }}
        >
          <View style={{ backgroundColor: "rgba(0,0,0,0.7)", flex: 1 }}>
            <View style={styles.containerStyle}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.getStarted}>
              <Button
                title="Get Started"
                onPress={() => 
                  props.navigation.navigate("IntroLogin")
                }
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const NextButton = () => {
    return <Text style={styles.nextButton}>Next</Text>;
  };
  const DoneButton = () => {
    return <Text style={styles.nextButton}>Done</Text>;
  };
  return (
    <SafeAreaView style={styles.main}>
      <AppIntroSlider
        renderDoneButton={DoneButton}
        renderItem={rendeItem}
        data={slides}
        activeDotStyle={{
          backgroundColor: "#f0b802",
          borderRadius: 2,
          width: 24,
          height: 3,
          bottom: "100%",
          right: "800%",
        }}
        dotStyle={{
          backgroundColor: "#fff0bf",
          borderRadius: 2,
          width: 10,
          height: 3,
          bottom: "100%",
          right: "800%",
        }}
        showNextButton={false}
        showDoneButton={false}
      />
    </SafeAreaView>
  );
};
export default OnBoardScreen;

import { View, Text } from "react-native";
import { MaterialIndicator } from "react-native-indicators";
function PreLoader() {
  return (
    <View style={{ flex: 1 }}>
      <MaterialIndicator color="white" size={50} />
    </View>
  );
}
export default PreLoader;

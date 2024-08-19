import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./components/Caritem/styles";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

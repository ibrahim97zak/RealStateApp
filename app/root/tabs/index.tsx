import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Home Screen
      </Text>
      <Link href="/sign-in">
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Sign in
        </Text>
      </Link>
      <Link href="/root/tabs/explor">
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Explor
        </Text>
      </Link>
      <Link href="/root/tabs/profile">
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Profile
        </Text>
      </Link>
      <Link href="/root/properties/1">
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Property
        </Text>
      </Link>
      <Text style={{ marginTop: 20 }}>This is the main screen content!</Text>
    </View>
  );
}

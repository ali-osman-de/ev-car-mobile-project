import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Privacy")}
        style={styles.button}
      >
        <Ionicons name="lock-closed-outline" size={24} color="#333" />
        <Text style={styles.buttonText}>Gizlilik Politikası</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Content")}
        style={styles.button}
      >
        <Ionicons name="settings-outline" size={24} color="#333" />
        <Text style={styles.buttonText}>İçerik Ayarları</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
});

export default Settings;

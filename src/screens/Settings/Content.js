import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Content = () => {
  const handleOption1 = () => {
    alert("İçerik Filtreleme Açıldı");
  };

  const handleOption2 = () => {
    alert("Bildirim Ayarları Güncellendi");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İçerik Ayarları</Text>

      <TouchableOpacity style={styles.button} onPress={handleOption1}>
        <Text style={styles.buttonText}>İçerik Filtreleme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOption2}>
        <Text style={styles.buttonText}>Bildirim Ayarları</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default Content;

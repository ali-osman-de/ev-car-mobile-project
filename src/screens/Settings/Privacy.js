import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Privacy = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Gizlilik Politikası</Text>

        <Text style={styles.paragraph}>
          Uygulamamızı kullanırken gizliliğiniz bizim için önemlidir. Bu politika, hangi bilgileri topladığımızı ve bu bilgileri nasıl kullandığımızı açıklar.
        </Text>

        <Text style={styles.heading}>1. Toplanan Bilgiler</Text>
        <Text style={styles.paragraph}>
          Uygulama üzerinden ad, e-posta adresi ve konum bilgisi gibi kişisel veriler toplanabilir.
        </Text>

        <Text style={styles.heading}>2. Bilgi Kullanımı</Text>
        <Text style={styles.paragraph}>
          Toplanan veriler yalnızca hizmet kalitesini artırmak ve kullanıcı deneyimini geliştirmek için kullanılır.
        </Text>

        <Text style={styles.heading}>3. Güvenlik</Text>
        <Text style={styles.paragraph}>
          Bilgilerinizin güvenliği bizim için önemlidir. Verileriniz şifreli sistemlerde saklanmaktadır.
        </Text>

        <Text style={styles.heading}>4. İletişim</Text>
        <Text style={styles.paragraph}>
          Gizlilik politikası ile ilgili sorularınız için bize ulaşabilirsiniz: destek@uygulama.com
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    alignSelf: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 5,
    color: "#444",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    textAlign: "justify",
  },
});

export default Privacy;

import React from "react";
import { StatusBar, Image, TouchableOpacity } from "react-native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

// Placeholder görsel URL'i
const placeholderImage = "https://cdn.webrazzi.com/uploads/2021/04/hopi-843.png";

export default function HomeScreen() {
  const { t } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Görsel ve başlık */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: placeholderImage }} style={styles.image} />
        <Text style={styles.title}>{t("home.title")}</Text>
      </View>

      {/* Açıklama */}
      <Text style={styles.description}>{t("home.description")}</Text>

      {/* Dil değiştirme butonları */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleChangeLanguage("tr")}
        >
          <Text>{t("home.button.tr")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleChangeLanguage("en")}
        >
          <Text>{t("home.button.en")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleChangeLanguage("ar")}
        >
          <Text>{t("home.button.ar")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleChangeLanguage("es")}
        >
          <Text>{t("home.button.es")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  languageButton: {
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
});

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      {/* <Text style={styles.title}>{t("settings.title")}</Text>
      <Text style={styles.description}>{t("settings.description")}</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 16,
  },
});

import { useEffect, useState } from "react";
import HomeScreen from "./src/screens/home/HomeScreen";
import SettingsScreen from "./src/screens/settings/SettingsScreen";
import { addResources } from "./i18n";
import expoLanguageDetector from "./plugins/expoLanguageDetector";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3001/localization/" + expoLanguageDetector.detect())
      .then((response) => response.json())
      .then((data) => {
        addResources(data.localizations);
      });
  }, []);

  return (
    <>
      <HomeScreen />
      <SettingsScreen />
    </>
  );
};

export default App;

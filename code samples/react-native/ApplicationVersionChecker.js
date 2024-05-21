import { useEffect, useState } from 'react';
import api from '../api/api'; 
import { APP_VERSION } from '../config/Version';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCheckAppVersion = () => {
  const [latestVersion, setLatestVersion] = useState(null);
  const [currentVersion, setCurrentVersion] = useState(null);

  useEffect(() => {

    
    // Get the current app version
    const version = APP_VERSION
    setCurrentVersion(version);


    // Fetch the latest version from the backend
    const fetchLatestVersion = async () => {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            'Authorization': `Bearer ${token}`,
          },
        };
      
        try {
          const response = await api.get('/app-config/version', config);
          setLatestVersion(response.data);
      } catch (error) {
          console.error("Error fetching app version:", error);
      }
    };

    fetchLatestVersion();
  }, []);

  const isAppUpdated = () => {
    if (!latestVersion || !currentVersion) return true;  // Default to true if we don't have the info
    return latestVersion === currentVersion;
  };

  return { isAppUpdated, currentVersion, latestVersion };
};

export default useCheckAppVersion;

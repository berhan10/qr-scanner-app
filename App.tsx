import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useColorScheme} from 'nativewind';

import Navigation from '@/navigation';

function App(): JSX.Element {
  const {colorScheme} = useColorScheme();
  useEffect(() => {
    StatusBar.setBarStyle(
      colorScheme === 'light' ? 'light-content' : 'dark-content',
    );
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(
        colorScheme === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)',
      );
      StatusBar.setTranslucent(true);
    }
  }, [colorScheme]);

  return <Navigation />;
}

export default App;

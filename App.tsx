import React from 'react';
import { Toaster } from 'react-native-customizable-toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import RootNavigation from './src/navigations';

function App() {
  return (
    <GestureHandlerRootView>
      <RootNavigation />
      <Toaster />
    </GestureHandlerRootView>
  )
}

export default App;

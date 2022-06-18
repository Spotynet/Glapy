import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Unauthorized from './src/navigation/Unauthorized';

const App = () => {
  return (
    <NavigationContainer>
      <Unauthorized />
    </NavigationContainer>
  );
};

export default App;

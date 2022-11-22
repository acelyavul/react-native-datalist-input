/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DatalistInput from '@avul/react-native-datalist-input';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.titleStyle}>DEMO</Text>
      <DatalistInput
        containerStyle={styles.containerStyle}
        value={value}
        onChangeText={text => setValue(text)}
        data={['Javascript', 'JAVA', 'Python', 'C#', 'C++', 'R', 'PHP', 'Go']}
        style={styles.inputStyle}
        placeholder="Enter a language"
        placeholderTextColor="#cdcdcd"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
     alignItems: 'center',
     backgroundColor: '#2c2c2c',
    justifyContent: 'center',
  },
  containerStyle : {
    width: '80%',
  },
  inputStyle: {
    color: '#cdcdcd',
  },
  titleStyle: {
    color: '#cdcdcd',
    fontSize: 18,
    marginBottom: 15,
  },
});

export default App;

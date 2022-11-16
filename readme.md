# React Native Datalist Input

This package provides React Native TextInput component that contains a drop down menu to pick a possible option based on the current input.

## Installation

Using NPM:

```
npm i react-native-datalist-input
```

Using Yarn:

```
yarn add react-native-datalist-input
```

## Demo

https://user-images.githubusercontent.com/88436030/202266915-9b07e9ce-3bb1-4255-8dd2-ba20e86da53b.mp4

## Usage

```javascript
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DatalistInput from '@avol/react-native/datalist-input';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <DatalistInput
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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#cdcdcd',
  },
});

export default App;
```

## Available Props

| Prop Name           | Type            |
| ------------------- | --------------- |
| value               | String          |
| onChangeText        | Function        |
| data                | Array           |
| containerStyle      | Array or Object |
| style               | Array or Object |
| menuStyle           | Array or Object |
| menuItemStyle       | Array or Object |
| ... TextInput props |                 |

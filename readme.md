# React Native Datalist Input

This package provides React Native TextInput component that contains a drop down menu to pick a possible option based on the current input.

## Installation

Using NPM:

```
npm i @avul/react-native-datalist-input react-native-get-random-values
```

Using Yarn:

```
yarn add @avul/react-native-datalist-input react-native-get-random-values
```

## Demo

https://user-images.githubusercontent.com/88436030/202266915-9b07e9ce-3bb1-4255-8dd2-ba20e86da53b.mp4

## Usage

```javascript
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
  containerStyle: {
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
```

## Available Props

| Prop                | Type            | Description                                                                                    |
| ------------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| value               | String          | Required for controlled components. Value of the text input.                                   |
| onChangeText        | Function        | Required for controlled components. Callback that is called when the textinput's text changes. |
| data                | Array           | Required for controlled components. Array of values to be listed. Please see example.          |
| containerStyle      | Array or Object | Optional. Styling of view element.                                                             |
| style               | Array or Object | Optional. Styling of textinput element.                                                        |
| menuStyle           | Array or Object | Optional. Styling of view element that contains datalist                                       |
| menuItemStyle       | Array or Object | Optional. Styling of text element that belongs to datalist                                     |
| ... TextInput props |                 | Optional. Please see [documentation](https://reactnative.dev/docs/textinput) for more details. |

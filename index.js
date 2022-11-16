import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import 'react-native-get-random-values';

const DatalistInput = ({
  value: passedValue,
  onChangeText: passedOnChangeText,
  data = [],
  containerStyle = {},
  style: inputStyle,
  menuStyle: customMenuStyle,
  menuItemStyle = {},
  ...props
}) => {
  const [value, setValue] = useState(passedValue);
  const [menuVisible, setMenuVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = text => {
    return data?.filter(
      val => val?.toLowerCase()?.indexOf(text?.toLowerCase()) > -1,
    );
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TextInput
        style={[styles.inputStyle, inputStyle]}
        value={value}
        onChangeText={text => {
          passedOnChangeText && passedOnChangeText(text);

          if (text && text.length > 0) {
            setFilteredData(filterData(text));
            setMenuVisible(true);
          } else {
            setMenuVisible(false);
          }

          setValue(text);
        }}
        {...props}
      />

      {menuVisible &&
        Boolean(filteredData.length) &&
        filteredData.map(title =>
          React.cloneElement(
            <TouchableOpacity
              key={uuid()}
              style={[styles.menuStyle, customMenuStyle]}
              onPress={() => {
                setValue(title);
                setMenuVisible(false);
              }}>
              <Text style={[styles.menuItemStyle, menuItemStyle]}>{title}</Text>
            </TouchableOpacity>,
          ),
        )}
    </View>
  );
};

export default DatalistInput;

DatalistInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.array,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  menuItemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  menuStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  containerStyle: {
    minWidth: '90%',
  },
  menuStyle: {
    backgroundColor: '#cdcdcd',
    padding: 10,
  },
  menuItemStyle: {
    color: '#2c2c2c',
  },
  inputStyle: {
    borderColor: '#cdcdcd',
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
  },
});

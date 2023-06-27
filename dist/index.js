"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uuid = require("uuid");
require("react-native-get-random-values");
var _excluded = ["value", "onChangeText", "data", "containerStyle", "style", "menuStyle", "menuItemStyle"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DatalistInput = function DatalistInput(_ref) {
  var passedValue = _ref.value,
    passedOnChangeText = _ref.onChangeText,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,
    inputStyle = _ref.style,
    customMenuStyle = _ref.menuStyle,
    _ref$menuItemStyle = _ref.menuItemStyle,
    menuItemStyle = _ref$menuItemStyle === void 0 ? {} : _ref$menuItemStyle,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(passedValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    menuVisible = _useState4[0],
    setMenuVisible = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredData = _useState6[0],
    setFilteredData = _useState6[1];
  var filterData = function filterData(text) {
    return data === null || data === void 0 ? void 0 : data.filter(function (val) {
      var _val$toLowerCase;
      return (val === null || val === void 0 ? void 0 : (_val$toLowerCase = val.toLowerCase()) === null || _val$toLowerCase === void 0 ? void 0 : _val$toLowerCase.indexOf(text === null || text === void 0 ? void 0 : text.toLowerCase())) > -1;
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: containerStyle !== null && containerStyle !== void 0 ? containerStyle : styles.containerStyle
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, _extends({
    style: [styles.inputStyle, inputStyle],
    value: value,
    onChangeText: function onChangeText(text) {
      passedOnChangeText && passedOnChangeText(text);
      if (text && text.length > 0) {
        setFilteredData(filterData(text));
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
      setValue(text);
    }
  }, props)), menuVisible && Boolean(filteredData.length) && filteredData.map(function (title) {
    return /*#__PURE__*/_react["default"].cloneElement( /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      key: (0, _uuid.v4)(),
      style: [styles.menuStyle, customMenuStyle],
      onPress: function onPress() {
        setValue(title);
        setMenuVisible(false);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: [styles.menuItemStyle, menuItemStyle]
    }, title)));
  }));
};
var _default = DatalistInput;
exports["default"] = _default;
DatalistInput.propTypes = {
  value: _propTypes["default"].string,
  onChangeText: _propTypes["default"].func,
  data: _propTypes["default"].array,
  containerStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  menuItemStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  menuStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array])
};
var styles = _reactNative.StyleSheet.create({
  containerStyle: {
    minWidth: '90%'
  },
  menuStyle: {
    backgroundColor: '#cdcdcd',
    padding: 10
  },
  menuItemStyle: {
    color: '#2c2c2c'
  },
  inputStyle: {
    borderColor: '#cdcdcd',
    borderWidth: 1,
    fontSize: 16,
    padding: 10
  }
});
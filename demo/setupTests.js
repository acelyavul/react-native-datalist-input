const { jest } = require('@jest/globals');

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   Reanimated.default.call = () => {};
//   return Reanimated;
// });

// jest.mock('react-native-keyboard-aware-scroll-view', () => {
//   const KeyboardAwareScrollView = ({ children }) => children;
//   return { KeyboardAwareScrollView };
// });

// jest.mock('@react-navigation/native', () => {
//   const actualNav = jest.requireActual('@react-navigation/native');
//   return {
//     ...actualNav,
//     useNavigation: () => ({
//       navigate: jest.fn(),
//     }),
//   };
// });

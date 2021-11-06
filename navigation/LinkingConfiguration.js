/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

const linking = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "Home",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "Profile",
            },
          },
        },
      },
    },
  },
};

export default linking;

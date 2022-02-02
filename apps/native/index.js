import { registerRootComponent } from "expo";
import { activateKeepAwake } from "expo-keep-awake";

if (__DEV__) {
  activateKeepAwake();
}

import App from "./App";

registerRootComponent(App);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import PushNotification from "react-native-push-notification";

AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/navegacao';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Navegacao);

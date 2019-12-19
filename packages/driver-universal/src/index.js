import { isWeex, isWeb, isKraken, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import createDOMDriver from './dom';
import * as DriverMiniApp from 'driver-miniapp';
import * as DriverWeex from 'driver-weex';
import createKrakenDriver from 'driver-kraken';

let currentDriver;
if (isWeex) {
  currentDriver = DriverWeex;
} else if (isWeb) {
  currentDriver = createDOMDriver();
} else if (isKraken) {
  currentDriver = createKrakenDriver();
} else if (isMiniApp || isWeChatMiniProgram) {
  currentDriver = DriverMiniApp;
} else {
  throw new Error('Your environment was not supported by driver-universal.');
}

export default currentDriver;

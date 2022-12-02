import NativeModule, { Spec as NativeSpec } from './NativeRtmPedometer';
import NativeModuleManager, {
  Spec as EventSpec,
} from './NativePedometerManager';

console.log('NativeModule', NativeModule);
console.log('NativeModuleManager', NativeModuleManager);
export default {
  NativeEvent: NativeModule as NativeSpec,
  NativeModule: NativeModuleManager as EventSpec,
};

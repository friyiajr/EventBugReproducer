import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  add(a: number, b: number): number;
}

const NativeModule = TurboModuleRegistry.getEnforcing<Spec>(
  'RtmPedometerManager'
);

export default NativeModule;

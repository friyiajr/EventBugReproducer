import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  addListener: (eventType: string) => void;
  removeListeners: (count: number) => void;
}

const NativeModule = TurboModuleRegistry.getEnforcing<Spec>('RtmPedometer');

export default NativeModule;

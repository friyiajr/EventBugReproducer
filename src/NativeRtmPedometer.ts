import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type {
  DirectEventHandler,
  Int32,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  add(a: number, b: number): number;
  randomEvent: DirectEventHandler<{ data: Int32 }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RtmPedometer');

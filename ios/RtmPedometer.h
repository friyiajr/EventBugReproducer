#import <React/RCTEventEmitter.h>
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRtmPedometerSpec.h"
@interface RtmPedometer : RCTEventEmitter <NativeRtmPedometerSpec>
#else
#import <React/RCTBridgeModule.h>
@interface RtmPedometer : RCTEventEmitter <RCTBridgeModule>
#endif
@end

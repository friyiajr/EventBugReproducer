
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRtmPedometerSpec.h"

@interface RtmPedometer : NSObject <NativeRtmPedometerSpec> {
    RCTResponseSenderBlock cb;
    NSNumber *val;
}
#else
#import <React/RCTBridgeModule.h>

@interface RtmPedometer : NSObject <RCTBridgeModule>
#endif

@end

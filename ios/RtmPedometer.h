#import <React/RCTEventEmitter.h>
#import "RNRtmPedometerSpec.h"

@interface RtmPedometerManager : NSObject <NativePedometerManagerSpec>
@end

@interface RtmPedometer : RCTEventEmitter <NativeRtmPedometerSpec>
@end




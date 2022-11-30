#import "RtmPedometer.h"

@implementation RtmPedometer
RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSArray<NSString *> *)supportedEvents 
{
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 10 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
        [self sendEventWithName:@"Hello" body:@"Hello World"];
    });
    return @[@"Hello"];
}


// - (NSNumber *)multiply:(double)a b:(double)b {
//     NSNumber *result = @(a * b);

//     return result;
// }

// - (NSNumber *)add:(double)a b:(double)b {
//     NSNumber *result = @(a + b);

//     return result;
// }

// - (void)sendData:(NSTimer *)timer
// {
//     NSNumber *val = (NSNumber *)timer.userInfo;
//     val = @([val doubleValue] + 1);
//     cb(@[val]);
// }

// - (void)registerEventCallback:(RCTResponseSenderBlock)cb {
//     self->cb = cb;
    
//     val = @1;
    
//     [NSTimer scheduledTimerWithTimeInterval:2.0
//                                          target:self
//                                        selector:@selector(sendData:)
//                                        userInfo:val
//                                         repeats:NO];
// }

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRtmPedometerSpecJSI>(params);
}
#endif

@end

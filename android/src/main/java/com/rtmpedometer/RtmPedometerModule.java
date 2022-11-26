package com.rtmpedometer;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = RtmPedometerModule.NAME)
public class RtmPedometerModule extends NativeRtmPedometerSpec {
  public static final String NAME = "RtmPedometer";

  public RtmPedometerModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @Override
  public double multiply(double a, double b) {
    return a * b;
  }

  @Override
  public double add(double a, double b) {
    return a + b;
  }
}

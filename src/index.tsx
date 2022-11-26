const RtmPedometer = require('./NativeRtmPedometer').default;

export function multiply(a: number, b: number): number {
  return RtmPedometer.multiply(a, b);
}

export function add(a: number, b: number): number {
  return RtmPedometer.add(a, b);
}

export function registerCallback(cb: (num: number) => void): void {
  RtmPedometer.registerCallback(cb);
}

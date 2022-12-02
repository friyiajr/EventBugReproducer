import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  NativeEventEmitter,
  Button,
} from 'react-native';
import NativePedometer from 'react-native-rtm-pedometer';

export default function App() {
  const { add } = NativePedometer.NativeModule;
  // console.log('NativePedometer.NativeModule', NativePedometer);
  // React.useEffect(() => {
  //   const _emitter = new NativeEventEmitter(NativePedometer.NativeEvent);

  //   _emitter.addListener('Hello', (message: string) => {
  //     console.log('This is: ', message);
  //   });
  //   return () => {
  //     _emitter.removeAllListeners('Hello');
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button
        title="ADD NUMS"
        onPress={() => {
          const number = add(1, 2);
          console.log(number);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

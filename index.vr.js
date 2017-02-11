import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';


class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('white-world.png')}/>
        <Text
          style={{
            fontSize: 0.5,
            layoutOrigin: [0.5, 0.5],            
            transform: [{translate: [0, 0, -3]}],
          }}>
          Hello, Virtual World
        </Text>
        {/* <Image
          source={asset('code.png')}
          style={{
            width: 10,
            height: 10,
            padding: 0.02,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -10]}],
          }}/> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

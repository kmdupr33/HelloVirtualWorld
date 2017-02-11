import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
  VrButton
} from 'react-vr';

import { H1,
  H2,
  CodeImage,
  transformFromDirection
} from './elements';


class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano style={{position: 'absolute'}}
          source={asset('white-world.png')}/>
        <View style={{
          layoutOrigin: [0.5, 0.5],
          transform: transformFromDirection('front'),
          flexDirection: 'column',
          position: 'absolute',
          alignItems: 'center'
        }}>
          <H1>
            Hello, Virtual World
          </H1>
          <H2>
            An Introduction to ReactVR //
          </H2>
        </View>
        <VrButton
          style={{layoutOrigin: [0.5, 0.5], position: 'absolute', transform: transformFromDirection('right')}}
          onClick={() => console.log('hello')}>
          <H1>Background</H1>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

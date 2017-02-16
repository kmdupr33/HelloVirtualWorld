import React from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
  VrButton,
} from 'react-vr'

import { H1,
  H2,
  CodeImage,
  transformFromDirection
} from './elements'

import Switcher from './slide-switcher'

const AbsolutePano = (props) => {
  return <Pano
      source={props.source}
      style={{position: 'absolute'}}/>
}

const IntroComponent = (props) => {
  return (
    <View>
      <AbsolutePano
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
        style={[styles.button, {transform: transformFromDirection('right')}]}
        onClick={() => props.switcher.switchRoute({ name: 'background' })}>
        <H1>Out of the woodwork // </H1>
      </VrButton>
      <VrButton
        style={[styles.button, {transform: transformFromDirection('behind')}]}
        onClick={() => props.switcher.switchRoute({ name: 'underTheHood'})}>
        <H1>Under The Hood //</H1>
      </VrButton>
    </View>
  );
}

const Background = (props) => {
  return (
    <View>
      <AbsolutePano
        source={asset('wood-work.jpg')}/>
      <H1 style={{position: 'absolute'}} direction='right'>
        Out of the Woodwork
      </H1>
      <Image
        style={{transform: [{translate: [0,0, 700]}, {rotateY: 180}], width: 780, height: 260, layoutOrigin: [0.5, 0.5]}}
        source={asset('caramel.png')}/>
      <Image
        style={{transform: [{translate: [-700,200,0]}, {rotateY: 90}], width: 344, height: 626, layoutOrigin: [0.5, 0.5]}}
        source={asset('react-vr-stack.png')}
        />
      <VrButton
        style={[styles.button, {transform: transformFromDirection('front'), layoutOrigin: [0.5, 0.5]}]}
        onClick={()=> props.switcher.switchRoute({name: 'introduction'})}>
        <H1>Now, where were we...</H1>
      </VrButton>
    </View>
  );
}

const UnderTheHood = (props) => {
  return <AbsolutePano source={asset('under-the-hood.jpg')}/>
}

class WelcomeToVR extends React.Component {
  render() {
    return (<Switcher
      initialRoute={{ name: 'introduction'}}
      worldForRoute={(route, switcher) => {
        switch (route.name) {
          case 'introduction':
            console.log('rendering intro world');
            return <IntroComponent switcher={switcher}/>
          case 'background':
            console.log('renering background world');
            return <Background switcher={switcher}/>
          case 'underTheHood':
            return <UnderTheHood/>
          default:
            return <H1>I don't recognize this route. Check your switch statement</H1>
        }
      }}/>)
  }
};

const styles = StyleSheet.create({
  button: {layoutOrigin: [0.5, 0.5], position: 'absolute'}
})

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

import React from 'react';
import { Image, Text, asset } from 'react-vr';

export const CodeImage = (props) => {
  return <Image
    source={asset(props.file)}
    style={{
      width: 10,
      height: 10,
      layoutOrigin: [0.5, 0.5],
      transform: [{translate: [0, 0, -10]}],
    }}/>
}

export const transformFromDirection = (direction) => {
  switch (direction) {
    case 'left':
      return [{translate: [-3, 0, 0]}, {rotateY: 90}]
    case 'right':
      return [{translate: [3, 0, 0]}, {rotateY: -90}]
    case 'behind':
      return [{translate: [0, 0, 3]}, {rotateY: -180}]
    case 'front':
      return [{translate: [0, 0, -3]}]
    default:
      return []
  }
}

export const H1 = (props) => {
  return <Text
    style={{
      ...props.style,
      fontSize: 0.5,      
      transform: transformFromDirection(props.direction),
    }}>
    {props.children}
  </Text>
}

export const H2 = (props) => {
  return <Text
    style={{
      ...props.style,
      fontSize: 0.3,
      transform: transformFromDirection(props.direction)
    }}>
    {props.children}
  </Text>
}

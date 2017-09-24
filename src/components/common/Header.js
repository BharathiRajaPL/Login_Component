//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
<View style={viewStyle}>
  <Text style={textStyle}>{props.headerText}</Text></View>
);
};
const styles = {
viewStyle: {
  backgroundColor: '#007aff',

  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 15,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.9
},
  textStyle: {
    fontSize: 40,
    color: 'white'
  }
};

//make component available to device
export { Header };

import React from 'react'
import { View } from 'react-native'

export default class extends React.Component {
  static navigationOptions = {
    header: null,
  };

  a = () => {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} />
    )
  }
}

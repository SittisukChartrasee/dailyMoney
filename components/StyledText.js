import React from 'react'
import PropsType from 'prop-types'
import { Text } from 'react-native'

export default class MonoText extends React.Component {
  static propTypes = {
    style: PropsType.any.isRequired,
  }

  a = () => {}

  render() {
    return (
      <Text
        {...this.props}
        style={[
          this.props.style,
          { fontFamily: 'space-mono' },
        ]}
      />
    )
  }
}

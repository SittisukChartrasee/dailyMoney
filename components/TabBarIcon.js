import React from 'react'
import PropsType from 'prop-types'
import { Icon } from 'expo'

import Colors from '../constants/Colors'

export default class TabBarIcon extends React.Component {
  static propTypes = {
    name: PropsType.any.isRequired,
    focused: PropsType.any.isRequired,
  }

  a = () => {}

  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}

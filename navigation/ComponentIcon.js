import React from 'react'
import PropsType from 'prop-types'
import { Platform } from 'react-native'
import TabBarIcon from '../components/TabBarIcon'

export const HomeStackIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
    }
  />
)
HomeStackIcon.propTypes = {
  focused: PropsType.any.isRequired,
}

export const LinksStackIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
  />
)
LinksStackIcon.propTypes = {
  focused: PropsType.any.isRequired,
}

export const SettingsStackIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
  />
)
SettingsStackIcon.propTypes = {
  focused: PropsType.any.isRequired,
}

export const MoneyStackIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
    }
  />
)
MoneyStackIcon.propTypes = {
  focused: PropsType.any.isRequired,
}

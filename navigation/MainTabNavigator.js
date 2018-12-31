import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MoneyScreen from '../screens/MoneyScreen'
import {
  HomeStackIcon,
  LinksStackIcon,
  SettingsStackIcon,
  MoneyStackIcon,
} from './ComponentIcon'


const HomeStack = createStackNavigator({
  Home: HomeScreen,
})
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: HomeStackIcon,
}

const LinksStack = createStackNavigator({
  Home: LinksScreen,
})
LinksStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: LinksStackIcon,
}

const SettingsStack = createStackNavigator({
  Home: SettingsScreen,
})
SettingsStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: SettingsStackIcon,
}

const MoneyStack = createStackNavigator({
  Moneys: MoneyScreen,
})
MoneyStack.navigationOptions = {
  tabBarLabel: 'Money',
  tabBarIcon: MoneyStackIcon,
}

export default createBottomTabNavigator({
  // HomeStack,
  // LinksStack,
  MoneyStack,
  // SettingsStack,
})

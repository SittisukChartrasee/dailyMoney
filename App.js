import React from 'react'
import PropsType from 'prop-types'
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native'
import {
  AppLoading, Asset, Font, Icon,
} from 'expo'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './navigation/AppNavigator'
import { store, persistor } from './redux/store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default class App extends React.Component {
  static propTypes = {
    skipLoadingScreen: PropsType.func,
  }

  static defaultProps = {
    skipLoadingScreen: () => console.log('skipLoadingScreen'),
  }

  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    /* eslint-disable global-require */
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </View>
    )
  }
}

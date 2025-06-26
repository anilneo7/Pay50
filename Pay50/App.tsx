import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import MainComponent from './src/MainComponent'
import store from './src/redux/store/Store'

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

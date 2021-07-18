import React , {Component} from 'react';
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import  HomeScreen from "./Screens/HomeScreen";
import SearchScreen from './Screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const navigation=useNavigation();
const route=useRoute();

const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();
class  DictionaryApp extends Component{
render(){
  return(
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
        <Text style={StyleSheet.text}>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}
}
const styles=StyleSheet.create({
  text:{
    color:'white',
    backgroundColor:'black',
    fontSize:20,
    width:100,
    height:100,
    borderWidth:10,
    borderRadius:10
  }
})
export default DictionaryApp;
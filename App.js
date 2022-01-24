import * as React from 'react';
import {View,Text,TouchableOpacity,Textinput,Image} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import readStory from './screens/readStory';
import storyWritingScreen from './screens/storyWritingScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
   }
}

const TabNavigator = createBottomTabNavigator({
  readStory: {screen: readStory},
  storyWritingScreen: {screen: storyWritingScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      
      routeName
    //const routeName = navigation.routeName;
     const routeName = navigation.state.routeName;
      //const routeName = navigation.state;
      //const routeName = state.routeName.navigation;
       
    
      if(routeName === "storyWritingScreen"){
        return(
          <Image
         // source={require("assets/write.png")}
         // source={require("./write.png")}
         source={require("./assets/write.png")}
         // source={require("write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "readStory"){
        return(
          <Image
          // source={require("./read.png")}
          // source={require("read.png")}
          // source={require("./assets")}
           source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
});

const AppContainer =  createAppContainer(TabNavigator);
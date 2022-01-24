import * as React from 'react';
import {View,TextInput,TouchableOpacity,StyleSheet,Text} from 'react-native';


export default class storyWritingScreen extends React.Component{
  render(){
    return(
      <View>
      <Text style={styles.title}> Story Hub</Text>
      <TextInput
      style={styles.textinput}
      placeholder="Book Title"
      />
      <TextInput
      style={styles.textinput}
      placeholder="Author"
      />
      <TextInput
      style={styles.storyinput}
      placeholder="Story"
      />
      <TouchableOpacity style={styles.submit}><Text>Submit</Text></TouchableOpacity>
      
      </View>
      
        )
  }
} 
const styles=StyleSheet.create({
title:{
  backgroundColor:'lightgreen',
  fontSize:32,
  marginLeft:100,
  width:150
},
textinput:{
  margin:10,
  borderWidth:2
},
storyinput:{
  height:100,
  borderWidth:2,
  margin:10

},
submit:{
backgroundColor:'orange',
margin:20,
alignItems:'center',
width:50,
marginLeft:150
}
})

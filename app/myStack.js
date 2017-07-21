import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,ListView,FlatList,Alert,Header,TextInput,Button,ScrollView}from 'react-native';
import styles from './style';

export default class myStack extends Component {
  
   state = {
      text: '',
      textList:[]
   }

  onPressAdd(){
    this.setState({ textList:[...this.state.textList,this.state.text] })
  }
  onPressDelete(){
  Alert.alert(
  'Make sure you want delete ?',
  'It will delete from bottom you want to delete ?',
  [
    {text: 'OK', onPress: () => this.setState({
      textList:[...this.state.textList.slice(0,this.state.textList.indexOf(this.state.textList))]
    })},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    
  ],
)
  }
 onPressOk(){
    Alert.alert(
  'Successful to delete',
)   
 }
 handleText(input) {
      this.setState({ text: input })
   }

  render() {
    return (
      <View style={styles.background}>  
        <TextInput id="inputValue" style={styles.input} onChangeText={(text) => this.handleText(text)}/>
        <View style={{marginTop:20,flexDirection:'row'}}>
      <Button style={styles.button}   title="Add"  onPress={()=>this.onPressAdd()}  />
      <Button  style={styles.button}  title="Delete"  onPress={() => this.onPressDelete()}/>
      </View>
      <ScrollView >
        <FlatList style={styles.Text}
          data={this.state.textList}
          renderItem={({item}) => <Text style={{textAlign:'center'}}>{item}</Text>}/>
      </ScrollView>
       </View>
    );
  }
}


AppRegistry.registerComponent('myStack', () => myStack);

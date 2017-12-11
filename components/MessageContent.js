import React from 'react';
import { ScrollView, StyleSheet, View, Button, Text, TextInput, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import RequestHandler from '../data/RequestHandler'
import Colors from '../styles/Colors'

export default class MessageContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {


    }

  }

  componentDidMount() {
  }


  render() {
let message = this.props.message;
console.log("from message content",message)

    return (
      <View style={styles.container}>
       

          <Text style={styles.loginButton}>Log ind</Text>
          <Button title="back" onPress={()=>this.props.goBack()}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldShort: {
    borderBottomWidth: 1,
    borderColor: Colors.secondaryColor,
    padding: 5,
    marginBottom: 2,
    color: Colors.secondaryColor,
    fontSize: 18,
    width: '80%'



  },
  loginButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',

    
    
  },

  btnWrapper:{
    marginRight:40,
    marginLeft:40,
    marginTop:30,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor: Colors.secondaryColor,
    borderRadius:10,
    borderWidth: 1,
    width: '70%'
    
  }
 




});


/*
      <TaskList/>
*/
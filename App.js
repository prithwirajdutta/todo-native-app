import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ScrollView,TextInput } from 'react-native';

export default class App extends Component {
  state={
    todos:[],
    ctodo:''
  }
  // handleChange = (e) => {
  //   this.setState({
  //     ctodo:e.target.value
  //   });
  // }
  onPress = () => {
    let c = this.state.todos.slice();
    c.push(this.state.ctodo);
    this.setState({
      todos:c,
      ctodo:''
    });
  } 
  deletetodo = (i) => {
    let d = this.state.todos.slice();
    d.splice(i,1);
    this.setState({
        todos:d
    });
  }
  render() {
    let b = this.state.todos.map((e,i) => {
      return(
      <View  key={i} style={styles.box}>
      <Text style={styles.scrolltext}>{e}</Text>
      <TouchableOpacity style={styles.del} onPress={() => this.deletetodo(i)}><Text style={styles.delbtn}>x</Text></TouchableOpacity>
      </View>
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertitle}>Notes</Text>
        </View>
        <ScrollView style={styles.scroll}>
         {b}
        </ScrollView>
        <View><Text>{this.state.todos.length===0 ? 'no todos yet' : 'you have todos'}</Text></View>
        <TextInput value={this.state.ctodo} style={styles.entry} placeholder='>Enter Notes' onChangeText={(ctodo)=>this.setState({ctodo})}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
          <Text style={styles.btntxt}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor:'#E91E63',
    height:80,
    alignItems:'center',
    justifyContent:'center'
  },
  headertitle:{
    color:'white',
    fontSize:20
    
  },
  scroll:{
    flex:1,
    
  },

  scrolltext:{
    width:100,
    fontSize:30,
    
  },
  entry:{
    backgroundColor:'#212121',
    height:60,
    color:'white'
  },
  btn:{
    backgroundColor:'#E91E63',
    position:'absolute',
    zindex:10,
    right:10,
    bottom:80,
    width:80,
    height:80,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  btntxt:{
    color:'white',
    fontSize:30
  },
  del:{
    backgroundColor:'#03A9F4',
  },
  box:{
    flex:1,
    flexDirection:'row'
  },
  delbtn:{
   
    padding:5,
    paddingHorizontal:20,
    color:'white'
  }
});

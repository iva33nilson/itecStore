import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from './src/Title/'



export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
     };
     this.salvarNome = this.salvarNome.bind(this);
  }
//monatdo em tela
async componentDidMount(){
  await AsyncStorage.getItem('nome').then((value)=> {
    this.setState({nome: value});
  })
}

//atualizado
async componentDidUpdate(_, prevState){
  const nome = this.state.nome;
  if(prevState !== nome){
    await AsyncStorage.setItem('nome',nome);
  }

}




salvarNome(){
  this.setState({
    nome: this.state.input
  });
  alert('salvo com sucesso!');
  Keyboard.dismiss();

}

  render(){
    return (
      
      <View style={styles.container}>
        <Title/>
        <Text style={styles.Form}>{this.state.nome}</Text>
          <View style={styles.FormContent}>
           <View style={styles.Form}>
           <Text style={styles.FormLabel}>Nome</Text>
            <TextInput style={styles.TextInput}  placeholder="Nome" value={this.state.input} onChangeText={(text)=> this.setState({input: text})} />
            <Text style={styles.FormLabel}>Usuario</Text>
            <TextInput style={styles.TextInput}  placeholder="Usuario"/>
            <Text style={styles.FormLabel}>Senha</Text>
            <TextInput secureTextEntry={true} style={styles.TextInput} placeholder="Senha"/>
            <TouchableOpacity style={styles.ButtonCalc} onPress={this.salvarNome} ><Text style={styles.ButtonTextc}>Criar Conta</Text></TouchableOpacity>
            <TouchableOpacity style={styles.ButtonCalcc}><Text style={styles.ButtonTextc}>Já tenho Usuario</Text></TouchableOpacity>
           </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FormContent:{
    width:"100%",
    height:"100vh",
    color:"#7D0DFF",
    fontSize:18,
    fontWeight:"bold",
    backgroundColor: "#FFF",
    alignItems:"center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:30,
},
Form:{
    alignItems:"center",
    width:"100%",
    height:"auto",
    marginTop:30,
    padding:30,
},
FormLabel:{
    color:"#60D3DB",
    fontSize:18,
    paddingLeft:20,
    fontWeight:"bold",
},
TextInput:{
    width:"90%",
    borderRadius:50,
    backgroundColor:"#ccd6e6",
    height:40,
    margin:12,
    paddingLeft:12,

},
ButtonCalc:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"60%",
    backgroundColor:"#7D0DFF",
    paddingTop:8,
    paddingBottom:8,
    marginLeft:12,
    marginTop:30,
    
},
ButtonText:{
    fontSize:16,
    color:"#60D3DB",
    borderRadius:50,
    fontWeight:"bold",
},
ButtonCalcc:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"40%",
    backgroundColor:"#7D0DFF",
    paddingTop:8,
    paddingBottom:8,
    marginLeft:12,
    marginTop:30,
    
},
ButtonTextc:{
    fontSize:16,
    color:"#60D3DB",
    borderRadius:50,
    fontWeight:"bold",
},

});

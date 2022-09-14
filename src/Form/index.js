import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native-web";

export default function Form(){
    return(
        <View style={styles.FormContent}>
           <View style={styles.Form}>
           <Text style={styles.FormLabel}>Nome</Text>
            <TextInput style={styles.TextInput}  placeholder="Nome"/>
            <Text style={styles.FormLabel}>Usuario</Text>
            <TextInput style={styles.TextInput}  placeholder="Usuario"/>
            <Text style={styles.FormLabel}>Senha</Text>
            <TextInput secureTextEntry={true} style={styles.TextInput} placeholder="Senha"/>
            <TouchableOpacity style={styles.ButtonCalc}><Text style={styles.ButtonTextc}>Criar Conta</Text></TouchableOpacity>
            <TouchableOpacity style={styles.ButtonCalcc}><Text style={styles.ButtonTextc}>Já tenho Usuario</Text></TouchableOpacity>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
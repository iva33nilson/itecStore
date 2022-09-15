import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

class Filmes extends Component{
    render(){
        return(
            <View>
                <View style={styles.card}>
                    <Text style={styles.title}>{this.props.data.nome}</Text>
                    <Image
                    source={{ uri: this.props.data.foto}}
                    style={styles.capa}
                    />
                </View>
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoText}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 5,

    },
    title: {
        fontSize: 18,
        padding: 15,
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    botao: {
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoText: {
        textAlign: 'center',
        color: '#fff',
    }

})

export default Filmes;
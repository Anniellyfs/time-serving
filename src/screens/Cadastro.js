import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importe Picker corretamente

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoConta, setTipoConta] = useState('administrador');

    const handleCadastro = () => {
        // Lógica de cadastro aqui
    };

    const tiposConta = [
        { label: 'Administrador', value: 'administrador' },
        { label: 'Voluntário', value: 'voluntario' },
    ];

    return (

        <View style={styles.container}>
            <Image source={require('../../assets/images/icon1.png')}
                style={{ width: 150, height: 150, margin: 20 }} />
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
            />
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                secureTextEntry
            />
            <View style={[styles.input, {
                marginBottom: 5,
                justifyContent: 'center',
                alignItems: 'center',
            }]}>
                <Picker
                    selectedValue={tipoConta}
                    style={{ height: 40, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setTipoConta(itemValue)}
                >
                    {tiposConta.map((item, index) => (
                        <Picker.Item key={index} label={item.label} value={item.value} />
                    ))}
                </Picker>
            </View>

            <TouchableOpacity style={[styles.button, { marginTop: 40 }]} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Cadastro;

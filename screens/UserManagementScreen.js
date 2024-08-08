import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function UserManagementScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    if (!email || !password || !profile) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setUsers([...users, { id: Date.now().toString(), email, profile }]);
    setEmail('');
    setPassword('');
    setProfile('');
  };

  const handleEditUser = (id) => {
    const newEmail = prompt('Digite o novo e-mail do usuário:');
    const newProfile = prompt('Digite o novo perfil do usuário:');
    if (newEmail && newProfile) {
      setUsers(users.map(user =>
        user.id === id ? { ...user, email: newEmail, profile: newProfile } : user
      ));
    }
  };

  const handleRemoveUser = (id) => {
    Alert.alert('Confirmar', 'Tem certeza que deseja remover este usuário?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => setUsers(users.filter(user => user.id !== id)),
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.email} - {item.profile}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleEditUser(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveUser(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuários</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder="Perfil"
        value={profile}
        onChangeText={setProfile}
      />
      
      <Button title="Adicionar Usuário" onPress={handleAddUser} />
      
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
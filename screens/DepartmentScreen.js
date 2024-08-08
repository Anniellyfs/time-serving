import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function DepartmentScreen() {
  const [departmentName, setDepartmentName] = useState('');
  const [departments, setDepartments] = useState([]);

  const handleAddDepartment = () => {
    if (!departmentName) {
      Alert.alert('Erro', 'Por favor, insira um nome para o departamento');
      return;
    }

    setDepartments([...departments, { id: Date.now().toString(), name: departmentName }]);
    setDepartmentName('');
  };

  const handleEditDepartment = (id) => {
    const newName = prompt('Digite o novo nome do departamento:');
    if (newName) {
      setDepartments(departments.map(dept => dept.id === id ? { ...dept, name: newName } : dept));
    }
  };

  const handleRemoveDepartment = (id) => {
    Alert.alert('Confirmar', 'Tem certeza que deseja remover este departamento?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => setDepartments(departments.filter(dept => dept.id !== id)),
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleEditDepartment(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveDepartment(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Departamentos</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Departamento"
        value={departmentName}
        onChangeText={setDepartmentName}
      />
      
      <Button title="Adicionar Departamento" onPress={handleAddDepartment} />
      
      <FlatList
        data={departments}
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
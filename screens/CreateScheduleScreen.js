import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

export default function CreateScheduleScreen() {
  const [eventName, setEventName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [selectedVolunteers, setSelectedVolunteers] = useState([]);
  const [departments, setDepartments] = useState([
    { label: 'Música', value: 'music' },
    { label: 'Crianças', value: 'children' },
    { label: 'Recepção', value: 'ushering' },
  ]);
  const [volunteers, setVolunteers] = useState([
    { label: 'João Silva', value: 'joao_silva' },
    { label: 'Maria Oliveira', value: 'maria_oliveira' },
    { label: 'Pedro Santos', value: 'pedro_santos' },
  ]);

  const handleCreateSchedule = () => {
    if (!eventName || !selectedDepartment || !selectedDate || !selectedTime || selectedVolunteers.length === 0) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    Alert.alert('Sucesso', `Escala criada para ${eventName}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Nova Escala</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Evento"
        value={eventName}
        onChangeText={setEventName}
      />
      
      <DropDownPicker
        items={departments}
        defaultValue={selectedDepartment}
        placeholder="Selecione o Departamento"
        containerStyle={styles.dropdown}
        style={styles.dropdownStyle}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownContainer}
        onChangeItem={(item) => setSelectedDepartment(item.value)}
      />
      
      <Text style={styles.label}>Selecionar Data</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
        }}
        locale={'pt-br'}
        style={styles.calendar}
        theme={{
          textDayFontFamily: 'Arial',
          textMonthFontFamily: 'Arial',
          textDayHeaderFontFamily: 'Arial',
        }}
      />
      
      <Text style={styles.label}>Hora</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        value={selectedTime}
        onChangeText={setSelectedTime}
      />
      
      <Text style={styles.label}>Selecionar Voluntários</Text>
      <Picker
        selectedValue={selectedVolunteers}
        style={styles.picker}
        multiple={true}
        onValueChange={(itemValue, itemIndex) => {
          if (selectedVolunteers.includes(itemValue)) {
            setSelectedVolunteers(selectedVolunteers.filter(val => val !== itemValue));
          } else {
            setSelectedVolunteers([...selectedVolunteers, itemValue]);
          }
        }}
      >
        {volunteers.map((volunteer) => (
          <Picker.Item key={volunteer.value} label={volunteer.label} value={volunteer.value} />
        ))}
      </Picker>
      
      <Button title="Criar Escala" onPress={handleCreateSchedule} />
    </ScrollView>
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    height: 40,
    marginBottom: 15,
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownContainer: {
    backgroundColor: '#fafafa',
  },
  calendar: {
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
});
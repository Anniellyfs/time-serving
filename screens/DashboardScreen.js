import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const schedules = [
  {
    id: '1',
    time: '10:00 AM',
    event: 'Sunday Service',
    profile: 'Volunteer',
  },
  {
    id: '2',
    time: '12:00 PM',
    event: 'Choir Practice',
    profile: 'Leader',
  },
  {
    id: '3',
    time: '02:00 PM',
    event: 'Youth Meeting',
    profile: 'Administrator',
  },
];

export default function DashboardScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aqui você pode buscar as escalas do dia do seu backend
    setData(schedules);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.event}>{item.event}</Text>
      <Text style={styles.profile}>{item.profile}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escalas do Dia</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  event: {
    fontSize: 16,
  },
  profile: {
    fontSize: 14,
    color: '#777',
  },
});

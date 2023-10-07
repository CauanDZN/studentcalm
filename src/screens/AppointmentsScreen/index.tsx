import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AppointmentsScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, newDate) => {
    setShowDatePicker(false);
    if (newDate !== undefined) {
      setSelectedDate(newDate);
    }
  };

  const getCurrentTime = () => {
    const currentDateTime = new Date();
    const currentTime = currentDateTime.toLocaleTimeString();
    setSelectedTime(currentTime);
  };

  const handleAppointmentBooking = () => {
    // Implemente a lógica para agendar a consulta com a data e hora selecionadas
    // Por enquanto, apenas simularemos o agendamento
    if (selectedDate && selectedTime) {
      setIsAppointmentScheduled(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Marque sua consulta:</Text>
      <TouchableOpacity onPress={getCurrentTime} style={styles.button}>
        <Text style={styles.buttonText}>Obter Hora Atual</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.button}>
        <Text style={styles.buttonText}>Selecionar Data</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={selectedTime}
        onChangeText={(text) => setSelectedTime(text)}
      />
      <TouchableOpacity onPress={handleAppointmentBooking} style={styles.button}>
        <Text style={styles.buttonText}>Agendar Consulta</Text>
      </TouchableOpacity>

      {isAppointmentScheduled && (
        <View style={styles.confirmation}>
          <Text style={styles.confirmationText}>Consulta agendada com sucesso!</Text>
          <Text>Data: {selectedDate.toDateString()}</Text>
          <Text>Horário: {selectedTime}</Text>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  datePicker: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  confirmation: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  confirmationText: {
    fontWeight: 'bold',
  },
});

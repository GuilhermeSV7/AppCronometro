import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TimerDisplay from '../components/TimerDisplay';

const HomeScreen = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Atualiza com tempo definido em Segundos
      }, 10);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <TimerDisplay time={time} />
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? "Pausar" : "Iniciar"} onPress={isRunning ? pauseTimer : startTimer} />
        <Button title="Reiniciar" onPress={resetTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: 200,
  },
});

export default HomeScreen;

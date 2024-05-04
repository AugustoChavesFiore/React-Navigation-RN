
import { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { Text, Button } from 'react-native-paper'

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

  return (
    <View style={styles.container}>
        <Text style={styles.textTitle} >Counter Screen</Text>
        <View style={styles.container} >
            <Text>Contador: {counter}</Text>
            <Button style={styles.button} mode={'contained'} onPress={increment}>Increment</Button>
            <Button style={styles.button} mode={'contained'} onPress={decrement}>Decrement</Button>
            <Button style={styles.button} mode={'contained'} onPress={reset}>Reset</Button>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    button: {
        margin: 10,
    },
    textTitle: {
        fontSize: 24,
        marginVertical: 20
    }
  });
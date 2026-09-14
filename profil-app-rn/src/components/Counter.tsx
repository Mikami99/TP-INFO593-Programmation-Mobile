import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      {count >= 10 && (
        <Text style={styles.message}>Tu es un pro du clic !</Text>
      )}
      <View style={styles.buttons}>
        <Button title="Incrémenter" onPress={() => setCount(count + 1)} />
        <Button
          title="Réinitialiser"
          onPress={() => setCount(0)}
          disabled={count === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', margin: 24 },
  count: { fontSize: 32, color: '#fff', marginBottom: 8 },
  message: { color: '#38bdf8', marginBottom: 12 },
  buttons: { flexDirection: 'row', gap: 12 },
});

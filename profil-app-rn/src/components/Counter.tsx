import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { theme } from './theme';

export default function VisitCounter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Visites</Text>
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
  container: { alignItems: 'center', margin: theme.spacing.lg },
  label: { fontSize: 14, color: theme.colors.textSecondary, marginBottom: 4 },
  count: { fontSize: 32, color: theme.colors.textPrimary, marginBottom: theme.spacing.sm },
  message: { color: theme.colors.accent, marginBottom: theme.spacing.md },
  buttons: { flexDirection: 'row', gap: theme.spacing.sm },
});

import { View, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

type ProfileCardProps = {
  nom: string;
  prenom: string;
  age: number;
  telephone?: string;
  email: string;
};

export default function ProfileCard({ nom, prenom, age, telephone, email }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Mon profil</Text>
      <Text style={styles.line}>{prenom} {nom}</Text>
      <Text style={styles.line}>{age} ans</Text>
      {telephone ? <Text style={styles.line}>{telephone}</Text> : null}
      <Text style={styles.line}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    margin: theme.spacing.md,
    borderRadius: theme.radius,
    backgroundColor: theme.colors.card,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  line: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginVertical: 4,
  },
});

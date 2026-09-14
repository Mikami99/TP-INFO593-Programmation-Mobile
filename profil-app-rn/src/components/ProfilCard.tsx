import { View, Text, StyleSheet } from 'react-native';

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
    padding: 24,
    margin: 16,
    borderRadius: 12,
    backgroundColor: '#1e293b',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  line: {
    fontSize: 16,
    color: '#e2e8f0',
    marginVertical: 4,
  },
});
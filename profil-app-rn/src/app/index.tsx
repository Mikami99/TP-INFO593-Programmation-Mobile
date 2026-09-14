import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Counter from '../components/Counter';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ProfileCard
          nom="RAJAONAH"
          prenom="Mickael"
          age={25}
          telephone="+261 34 00 000 00"
          email="mikami@example.com"
        />
        <Counter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
});

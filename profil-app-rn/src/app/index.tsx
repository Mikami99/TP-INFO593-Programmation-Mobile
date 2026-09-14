import { SafeAreaView, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfilCard';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard
        nom="RAJAONAH"
        prenom="Mickaël"
        age={25}
        email="mickael.rajaonah@esti.mg"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

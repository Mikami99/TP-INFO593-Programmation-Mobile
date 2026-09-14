import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import VisitCounter from '../components/Counter';
import { theme } from '../components/theme';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ProfileCard
          nom="RAJAONAH"
          prenom="Mickaël"
          age={70}
          telephone = "+261 34 00 000 00"
          email="mikami@example.com"
        />
        <SkillsList
          competences={['React Native', 'Flutter', 'TypeScript', 'Dart', 'Git']}
        />
        <VisitCounter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
});

import { View, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

type SkillsListProps = {
  competences: string[];
};

export default function SkillsList({ competences }: SkillsListProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Compétences</Text>
      <View style={styles.tags}>
        {competences.map((c) => (
          <View key={c} style={styles.tag}>
            <Text style={styles.tagText}>{c}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.lg,
    margin: theme.spacing.md,
    borderRadius: theme.radius,
    backgroundColor: theme.colors.card,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  tag: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  tagText: {
    color: theme.colors.background,
    fontWeight: '600',
  },
});

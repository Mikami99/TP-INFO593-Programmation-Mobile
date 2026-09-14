import 'package:flutter/material.dart';
import 'theme.dart';
import 'profile_card.dart';
import 'skills_list.dart';
import 'counter_widget.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: AppTheme.background,
        body: Center(
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: const [
                ProfileCard(
                  nom: 'RAJAONAH',
                  prenom: 'Mickaël',
                  age: 70,
                  telephone: null,
                  email: 'mikami@example.com',
                ),
                SkillsList(
                  competences: ['React Native', 'Flutter', 'TypeScript', 'Dart', 'Git'],
                ),
                VisitCounter(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

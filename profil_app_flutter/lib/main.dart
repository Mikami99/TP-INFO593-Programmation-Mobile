import 'package:flutter/material.dart';
import 'profile_card.dart';
import 'counter_widget.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: const Color(0xFF0F172A),
        body: Center(
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: const [
                ProfileCard(
                  nom: 'RAJAONAH',
                  prenom: 'Mickaël',
                  age: 25,
                  telephone: null,
                  email: 'mikami@example.com',
                ),
                CounterWidget(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';

class ProfileCard extends StatelessWidget {
  final String nom;
  final String prenom;
  final int age;
  final String? telephone;
  final String email;

  const ProfileCard({
    super.key,
    required this.nom,
    required this.prenom,
    required this.age,
    this.telephone,
    required this.email,
  });

  static const _lineStyle = TextStyle(fontSize: 16, color: Color(0xFFE2E8F0));

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      margin: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text(
            'Mon profil',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 16),
          Text('$prenom $nom', style: _lineStyle),
          Text('$age ans', style: _lineStyle),
          if (telephone != null) Text(telephone!, style: _lineStyle),
          Text(email, style: _lineStyle),
        ],
      ),
    );
  }
}

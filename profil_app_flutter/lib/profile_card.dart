import 'package:flutter/material.dart';
import 'theme.dart';

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

  static const _lineStyle = TextStyle(fontSize: 16, color: AppTheme.textSecondary);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingLg),
      margin: const EdgeInsets.all(AppTheme.spacingMd),
      decoration: BoxDecoration(
        color: AppTheme.card,
        borderRadius: BorderRadius.circular(AppTheme.radius),
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
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: AppTheme.spacingMd),
          Text('$prenom $nom', style: _lineStyle),
          Text('$age ans', style: _lineStyle),
          if (telephone != null) Text(telephone!, style: _lineStyle),
          Text(email, style: _lineStyle),
        ],
      ),
    );
  }
}

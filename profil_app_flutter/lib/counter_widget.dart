import 'package:flutter/material.dart';
import 'theme.dart';

class VisitCounter extends StatefulWidget {
  const VisitCounter({super.key});

  @override
  State<VisitCounter> createState() => _VisitCounterState();
}

class _VisitCounterState extends State<VisitCounter> {
  int _count = 0;

  void _increment() => setState(() => _count++);
  void _reset() => setState(() => _count = 0);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Text(
          'Visites',
          style: TextStyle(fontSize: 14, color: AppTheme.textSecondary),
        ),
        const SizedBox(height: 4),
        Text(
          '$_count',
          style: const TextStyle(fontSize: 32, color: AppTheme.textPrimary),
        ),
        if (_count >= 10)
          const Text(
            'Tu es un pro du clic !',
            style: TextStyle(color: AppTheme.accent),
          ),
        const SizedBox(height: AppTheme.spacingMd),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            ElevatedButton(
              onPressed: _increment,
              child: const Text('Incrémenter'),
            ),
            const SizedBox(width: AppTheme.spacingSm),
            ElevatedButton(
              onPressed: _count == 0 ? null : _reset,
              child: const Text('Réinitialiser'),
            ),
          ],
        ),
      ],
    );
  }
}

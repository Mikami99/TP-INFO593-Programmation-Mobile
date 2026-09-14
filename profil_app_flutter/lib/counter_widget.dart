import 'package:flutter/material.dart';

class CounterWidget extends StatefulWidget {
  const CounterWidget({super.key});

  @override
  State<CounterWidget> createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  void _increment() => setState(() => _count++);
  void _reset() => setState(() => _count = 0);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          '$_count',
          style: const TextStyle(fontSize: 32, color: Colors.white),
        ),
        if (_count >= 10)
          const Text(
            'Tu es un pro du clic !',
            style: TextStyle(color: Color(0xFF38BDF8)),
          ),
        const SizedBox(height: 12),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            ElevatedButton(
              onPressed: _increment,
              child: const Text('Incrémenter'),
            ),
            const SizedBox(width: 12),
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

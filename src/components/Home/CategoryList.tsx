
import { useState } from 'react';
import {
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Colors } from '@/constants/theme';

const categories = [
  { id: '1', name: 'All Toys', emoji: '🧸' },
  { id: '2', name: 'Puzzles', emoji: '🧩' },
  { id: '3', name: 'Board Games', emoji: '🎲' },
  { id: '4', name: 'Learning', emoji: '📚' },
  { id: '5', name: 'Building', emoji: '🧱' },
  { id: '6', name: 'Outdoor', emoji: '⚽' },
];

export default function CategoryList() {
  const [selected, setSelected] = useState('1');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop by Category</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {categories.map((category) => {
          const isSelected = selected === category.id;

          return (
            <Pressable
              key={category.id}
              onPress={() => setSelected(category.id)}
              style={[
                styles.category,
                isSelected && styles.selectedCategory,
              ]}
            >
              <Text style={styles.emoji}>{category.emoji}</Text>

              <Text
                style={[
                  styles.categoryName,
                  isSelected && styles.selectedText,
                ]}
              >
                {category.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },

  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.light.navy,
  },

  list: {
    gap: 12,
    paddingRight: 16,
  },

  category: {
    minWidth: 88,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#F5F6F8',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  selectedCategory: {
    backgroundColor: Colors.light.lime,
    borderColor: Colors.light.lime,
  },

  emoji: {
    fontSize: 28,
  },

  categoryName: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.light.navy,
  },

  selectedText: {
    color: Colors.light.navy,
    fontWeight: '800',
  },
});

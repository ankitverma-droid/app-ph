
import { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SymbolView } from 'expo-symbols';

import { Colors } from '@/constants/theme';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (!search.trim()) return;

    // Search screen/navigation will be connected later.
    console.log('Searching for:', search.trim());
  };

  return (
    <View style={styles.container}>
      <SymbolView
        name="magnifyingglass"
        size={20}
        tintColor={Colors.light.textSecondary}
      />

      <TextInput
        style={styles.input}
        placeholder="Search products..."
        placeholderTextColor={Colors.light.textSecondary}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />

      {search.length > 0 && (
        <Pressable onPress={() => setSearch('')}>
          <SymbolView
            name="xmark.circle.fill"
            size={18}
            tintColor={Colors.light.textSecondary}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 24,
    paddingHorizontal: 16,
    gap: 10,
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: Colors.light.text,
  },
});

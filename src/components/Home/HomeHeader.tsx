
import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { Colors } from '@/constants/theme';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/playhaus-logo.png')}
        style={styles.logo}
        contentFit="contain"
      />

      <Pressable
        style={styles.cartButton}
        onPress={() => {
          // Cart navigation will be added later.
        }}
      >
        <SymbolView
          name="bag"
          size={23}
          tintColor={Colors.light.navy}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 64,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 260,
    height: 38,
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { Image } from 'expo-image';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Colors } from '@/constants/theme';

type ProductCardProps = {
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
  onPress?: () => void;
};

function formatPrice(price: number) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  imageUrl,
  onPress,
}: ProductCardProps) {
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        {discount > 0 && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              -{discount}%
            </Text>
          </View>
        )}

        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            contentFit="contain"
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>
              Product image
            </Text>
          </View>
        )}
      </View>

      <View style={styles.details}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>
            {formatPrice(price)}
          </Text>

          {originalPrice && originalPrice > price && (
            <Text style={styles.originalPrice}>
              {formatPrice(originalPrice)}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 165,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    overflow: 'hidden',
  },

  imageContainer: {
    height: 155,
    backgroundColor: '#FFF8EB',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '90%',
    height: '90%',
  },

  imagePlaceholder: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderText: {
    color: '#929292',
    fontSize: 12,
  },

  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: Colors.light.navy,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 12,
  },

  discountText: {
    color: Colors.light.lime,
    fontSize: 11,
    fontWeight: '800',
  },

  details: {
    padding: 11,
    gap: 8,
  },

  name: {
    color: Colors.light.navy,
    fontSize: 13,
    fontWeight: '600',
    minHeight: 36,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexWrap: 'wrap',
  },

  price: {
    color: Colors.light.navy,
    fontSize: 15,
    fontWeight: '800',
  },

  originalPrice: {
    color: '#858585',
    fontSize: 11,
    textDecorationLine: 'line-through',
  },
});

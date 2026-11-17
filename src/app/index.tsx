
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



import { Colors } from '@/constants/theme';
import HomeHeader from '@/components/Home/HomeHeader';
import SearchBar from '@/components/Home/SearchBar';
import CampaignBanner from '@/components/Home/CampaignBanner';
import CategoryList from '@/components/Home/CategoryList';
import ProductCard from '@/components/Home/ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Educational Puzzle Game',
    price: 699,
    originalPrice: 899,
  },
  {
    id: '2',
    name: 'Fun Family Board Game',
    price: 899,
    originalPrice: 1199,
  },
  {
    id: '3',
    name: 'Kids Learning Toy',
    price: 499,
    originalPrice: 599,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeHeader />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />

        <CampaignBanner />

        <CategoryList />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.heading}>
              Explore our products
            </Text>

            <Text style={styles.viewAll}>
              View All
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          >
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                onPress={() => {
                  console.log('Selected product:', product.id);
                }}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  content: {
    padding: 16,
    gap: 24,
    paddingBottom: 40,
  },

  section: {
    gap: 16,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.light.navy,
  },

  viewAll: {
    fontSize: 13,
    fontWeight: '700',
    color: '#68738A',
  },

  productList: {
    gap: 12,
    paddingRight: 16,
  },
});


import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function CampaignBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.tag}>PLAY • LEARN • GROW</Text>

        <Text style={styles.heading}>
          Kheloge toh{'\n'}Khiloge!
        </Text>

        <Text style={styles.description}>
          Discover toys that make learning fun.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log('Explore products clicked');
          }}
        >
          <Text style={styles.buttonText}>
            Explore Products
          </Text>
        </Pressable>
      </View>

      <View style={styles.decoration}>
        <Text style={styles.emoji}>🧩</Text>
        <Text style={styles.emoji}>🎲</Text>
        <Text style={styles.emoji}>🧸</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 220,
    backgroundColor: '#FFF0DA',
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    gap: 10,
  },

  tag: {
    color: '#091A49',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  heading: {
    color: '#091A49',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },

  description: {
    color: '#343B52',
    fontSize: 13,
    maxWidth: 210,
  },

  button: {
    backgroundColor: '#B5E51D',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 5,
  },

  buttonText: {
    color: '#091A49',
    fontWeight: '800',
    fontSize: 13,
  },

  decoration: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginLeft: 8,
  },

  emoji: {
    fontSize: 36,
  },
});

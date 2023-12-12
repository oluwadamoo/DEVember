import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = [...Array(24)].map((val, index) => index + 1);
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container}>

        <FlatList
          data={days}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          numColumns={2}
          renderItem={({ item }) =>
            <DayListItem day={item} />
          }
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10
  },

});

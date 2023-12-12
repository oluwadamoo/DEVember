import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import DayListItem from '@components/core/DayListItem';


const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
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

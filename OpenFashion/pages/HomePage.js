import React from 'react';
import { View, Text , StyleSheet, SafeAreaView} from 'react-native';


const HomePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Navbar}>
                <Image source={require('../')} />

            </View>

            <View style={styles.Header}>

            </View>

            <View style={styles.Layout}>
            <View style={styles.Card}></View>
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Navbar:{
        flexDirection: "row"

    }
});

export default HomePage;
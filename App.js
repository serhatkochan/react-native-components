import {
    Button, StyleSheet, Text, View, SafeAreaView, Image,
    TouchableWithoutFeedback, TouchableHighlight,
    ScrollView
} from 'react-native';
import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    const SerhatComponent = () => {
        return (
            <View style={styles.serhatComponent}>
                <Text>serhatkochan</Text>
            </View>
        )
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>serhatkochan</Text>
                    <Image source={require('./assets/menu.png')} style={styles.menu} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.button}>Bana Tıkla</Text>
                    <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
                        <Text style={styles.touchableViewText}>Tıklanabilir View, {count}</Text>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight
                        onPress={() => setCount(count + 1)}
                        activeOpacity={0.9}
                        underlayColor=''
                    >
                        <Text style={styles.touchableViewText}>Tıklanabilir View, {count}</Text>
                    </TouchableHighlight>

                </View>
            </SafeAreaView>
            <ScrollView
                style={{flex: 1}}
                stickyHeaderIndices={[0]}
                maximumZoomScale={3}
                disableIntervalMomentum={true}
                scrollIndicatorInsets={{top: 200}}
            >
                <View style={{backgroundColor: '#a07f7f'}}>
                    <Text>Burası sabit kalacak</Text>
                </View>
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
                <SerhatComponent />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    logo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    },
    menu: {
        width: 25,
        height: 25
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: 'darkorange',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    touchableViewText: {
        padding: 20,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 50
    },
    serhatComponent: {
        backgroundColor: 'lime',
        padding: 20,
        marginBottom: 10
    }
});

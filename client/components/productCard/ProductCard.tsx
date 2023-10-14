import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
    item: Project
}

export default function ProductCard({item}: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: item.imageUrl}}
                style={{flex: 1, flexGrow: 1, height: 120, width: 120, borderRadius: 10}}
                resizeMode='contain'
            />
            <View style={styles.textView}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.amount} {item.currency}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
        borderRadius: 8,
        padding: 8,
        margin: 8,
        width: "80%",
        flexDirection: "row",
    },
    textView: {
        flex: 1,
    },
    name: {
        textAlign: 'right',
        fontSize: 18,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.65)'
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontWeight: '600',
        color: 'rgba(115,80,175,0.65)'
    }
})
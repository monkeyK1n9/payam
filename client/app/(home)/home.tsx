import React from 'react'
import { FlatList } from 'react-native'
import ProductCard from '../../components/productCard/ProductCard'

type Props = {}

export default function Home({}: Props) {
    return (
        <FlatList
            data={[]}
            renderItem={({item, index}) => {
                return (
                    <ProductCard item={item} />
                )
            }}
            keyExtractor={(item: Project) => item.name}
        />
    )
}
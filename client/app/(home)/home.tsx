import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native'
import ProductCard from '../../components/productCard/ProductCard'
import { gql, useQuery } from '@apollo/client';
// import { GET_PRODUCTS_BY_LIMIT_AND_OFFSET } from '../../queries/products';

const GET_PRODUCTS_BY_LIMIT_AND_OFFSET = gql`
    query getAll($limit: SearchLimit, $offset: SearchOffset) {
        getProducts {
            amount
            currency
            imageUrl
            name
        }
        getProductsByLimitAndOffset(limit: $limit, offset: $offset) {
            name
            imageUrl
            currency
            amount
        }
    }
`;

export default function Home() {
    const flatListRef = useRef<FlatList>(null);

    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const [newLimit, setNewLimit] = useState<number>(50);
    const {loading, data, error} = useQuery(GET_PRODUCTS_BY_LIMIT_AND_OFFSET,
        {
            variables: { limit: {limit: newLimit}, offset: {offset: 0} }
        }
    );

    const onRefresh =() => {
        setIsRefreshing(true);
        setNewLimit(50);
    }

    const onEndDrag = async () => {
      
        setNewLimit(prev => prev + 50);
        flatListRef?.current?.scrollToIndex({
            index: data?.getProductsByLimitAndOffset.length - 3
        })
    }

    if (error) return null;

    if (!loading && isRefreshing) {
        return (
            <ActivityIndicator
                color="#13017C"
                size={50}
                animating
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // jusityContent: "space-around",
                    flexWrap: "wrap",
                    alignContent: "center",
                }}
            />
        )
    }


    return (
        <FlatList
            ref={flatListRef}
            data={data?.getProductsByLimitAndOffset}
            renderItem={({item}) => {
                return (
                    <ProductCard item={item} />
                )
            }}
            keyExtractor={(item: Project) => item.name}
            initialScrollIndex={0}  
            onScrollToIndexFailed={info => {
                const wait = new Promise(resolve => {
                    setTimeout(resolve, 2000)
                });
                wait.then(() => {
                    flatListRef.current?.scrollToIndex({ index: info.highestMeasuredFrameIndex });
                });
            }}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing && loading}
                    onRefresh={onRefresh}
                />
            }
            contentContainerStyle={{alignSelf: 'stretch', paddingHorizontal: 16, alignItems: 'center'}}
            onEndReached={onEndDrag}
        />
    )
}
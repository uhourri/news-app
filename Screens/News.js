import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import NewsCard from '../Components/NewsCard'

import newsAPI from '../apis/News'


const News = ({navigation}) => {

    const [news, setNews] = useState([])

    useEffect(()=>{
        getNewsFromAPI()
    },[])

    const newsResponse = async() => {
        const response = await newsAPI.get('top-headlines?country=ma&apiKey=6cbcbe1269a8452facc92a20f15ee1ac')
        //console.log(response.data)
    }

    function getNewsFromAPI(){
        newsAPI.get('top-headlines?country=ma&apiKey=6cbcbe1269a8452facc92a20f15ee1ac')
        .then(function(response){
            setNews(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    if(!news){
        return null
    }
    
    return (
        <View>
            <FlatList data={news.articles} 
                keyExtractor={(item, index) => 'key'+index}
                renderItem={({item}) => {
                    return <NewsCard item = {item} />
                }}
            />
        </View>
    )
}

export default News
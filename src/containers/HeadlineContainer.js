import React, { useState, useEffect } from 'react'
import HeadlineList from '../components/HeadlineList'
import TopicSearch from '../components/TopicSearch'


const HeadlineContainer = () => {

    const defaultTopic = 'UK';

    const [headlines, setHeadlines] = useState([]);
    const [headlineTopic, setHeadlineTopic] = useState("")

    const getHeadlines = query => {
        if (!query) {
            query = defaultTopic;
        }
        const url = `https://content.guardianapis.com/search?q=${query}&format=json&api-key=test`;
        setHeadlineTopic(query);
        fetch(url)
        .then(response => response.json())
        .then(data => setHeadlines(data.response.results));
    }

    useEffect(() => {
        getHeadlines()
    }, [])

    const searchTopic = (newTopic) => {
        getHeadlines(newTopic);
    }


    return (
        <div>
            <h1>Guardian Headlines</h1>
            <TopicSearch onTopicSearchSubmit={topic => searchTopic(topic)}/>
            <h2>Top Searches for {headlineTopic}</h2>
            <HeadlineList headlines={headlines} />
        </div>
    )
}

export default HeadlineContainer

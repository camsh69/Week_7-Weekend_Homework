import React, { useState, useEffect } from 'react'
import HeadlineList from '../components/HeadlineList'
import TopicSearch from '../components/TopicSearch'
import './HeadlineContainer.css'


const HeadlineContainer = () => {

    const defaultTopic = 'UK';

    const [headlines, setHeadlines] = useState([]);
    const [headlineTopic, setHeadlineTopic] = useState("")

    const getHeadlines = topic => {
        const query = topic ? topic : defaultTopic;
        const url = `https://content.guardianapis.com/search?q=${query}&format=json&api-key=test`;
        setHeadlineTopic(query);
        fetch(url)
        .then(response => response.json())
        .then(data => setHeadlines(data.response.results));
    }

    useEffect(() => getHeadlines(), []);

    return (
        <section className='main-container'>
            <h1>Guardian Headlines</h1>
            <div className='search'>
            <TopicSearch onTopicSearchSubmit={newTopic => getHeadlines(newTopic)}/>
            </div>
            <hr></hr>
            <h2>Top Searches for <span className='capitalize'>{headlineTopic}:</span></h2>
            <div className='results'>
            <HeadlineList headlines={headlines} onHeadlineClick={url => window.open(url)}/>
            </div>
        </section>
    )
}

export default HeadlineContainer

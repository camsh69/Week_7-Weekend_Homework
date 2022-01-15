import React, { useState, useEffect } from 'react'
import HeadlineList from '../components/HeadlineList'
import ReadLAterList from '../components/ReadLAterList'
import TopicSearch from '../components/TopicSearch'
import icon from '../img/guardian-icon.jpeg'
import './HeadlineContainer.css'


const HeadlineContainer = () => {

    const defaultTopic = 'UK';

    const [headlines, setHeadlines] = useState([]);

    const [headlineTopic, setHeadlineTopic] = useState("");

    const[readLater, setReadLater] = useState([]);

    const getHeadlines = topic => {

        const query = topic ? topic : defaultTopic;
        const url = `https://content.guardianapis.com/search?q=${query}&format=json&api-key=test`;

        setHeadlineTopic(query);

        fetch(url)
        .then(response => response.json())
        .then(data => setHeadlines(data.response.results));
    }

    useEffect(() => getHeadlines(), []);

    const addToReadLater = addHeadline => {

        if (!readLater.includes(addHeadline)){
        const updatedReadLater = [...readLater, addHeadline];
        setReadLater(updatedReadLater);
        }
    }

    return (
        <section className='main-container'>

            <div className='header'>
                <img src={icon} alt='Guardian logo'/>
            </div>

            <h1>Guardian Headlines</h1>

            <div className='search'>
                <TopicSearch onTopicSearchSubmit={newTopic => getHeadlines(newTopic)}/>
            </div>

            <hr/>

            <h2>Top 10 Search Results for <span className='capitalize'>{headlineTopic}:</span></h2>

            <div className = 'results'>
                <HeadlineList headlines={headlines} onHeadlineClick={url => window.open(url)} headlineAdd={headline => addToReadLater(headline)}/>
            </div>

            <h2>Read Later:</h2>

            <div className = 'results'>
                <ReadLAterList readLater={readLater} onHeadlineClick={url => window.open(url)} />
            </div>

        </section>
    )
}

export default HeadlineContainer

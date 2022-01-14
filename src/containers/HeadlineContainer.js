import React, { useState, useEffect } from 'react'
import HeadlineList from '../components/HeadlineList'
import TopicSearch from '../components/TopicSearch'


const HeadlineContainer = () => {

    const [headlines, setHeadlines] = useState([]);

    const getHeadlines = () => {
        fetch('https://content.guardianapis.com/search?q=uk&format=json&api-key=test')
        .then(response => response.json())
        .then(data => setHeadlines(data.response.results));
    }

    useEffect(() => {
        getHeadlines()
    }, [])

    return (
        <div>
            <h1>HeadlineContainer</h1>
            <TopicSearch/>
            <HeadlineList headlines={headlines}/>
        </div>
    )
}

export default HeadlineContainer

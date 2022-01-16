import React, { useState, useEffect } from 'react'
import HeadlineList from '../components/HeadlineList'
import ReadLaterList from '../components/ReadLaterList'
import TopicSearch from '../components/TopicSearch'
import { Chart } from "react-google-charts";
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

    const addToReadLater = headline => {

        if (!readLater.includes(headline)){
        const updatedReadLater = [...readLater, headline];
        setReadLater(updatedReadLater);
        }
    }

    const removeFromReadLAter = headline => {
        const updatedReadLater = readLater.filter(item => item !== headline);
        setReadLater(updatedReadLater);
    }

    const parseData = () => {
        const sections = headlines.map(section => section.sectionName);

        const uniqueItemsArray = [...sections].sort()
        .filter((item, position, array) => !position || item != array[position -1]);
        
        const count = (array, value) => array.filter(item => (item === value)).length;

        const countArray = [];
        for (let i = 0; i < uniqueItemsArray.length; i++){
            let num = count(sections, uniqueItemsArray[i]);
            countArray.push(num);
        }

        const combinedArray = [];
        for (let i = 0; i < uniqueItemsArray.length; i++) {
                combinedArray.push(Array(uniqueItemsArray[i], countArray[i]))
        }

        combinedArray.unshift(["Section", "Number of articles"]);

        return combinedArray;
    }

    
    const data = parseData();

    
    // [
    //     ["Subject", "Number of articles"],
    //     ["Politics", 4],
    //     ["World News", 2],
    //     ["UK News", 3],
    //     ["Environment", 1],
    //   ];

      const options = {
        title: "Headline by News Section",
        pieHole: 0,
        is3D: false
      };

    return (
        <>
        <section className='main-container'>
            <div className='app-container'>
                <div className='header'>
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
                    <ReadLaterList readLater={readLater} onHeadlineClick={url => window.open(url)}  headlineRemove={headline => removeFromReadLAter(headline)}/>
                </div>
            </div>

        

        <div className='chart'>
                <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            />
        </div>
        </section>
        </>
    )
}

export default HeadlineContainer;

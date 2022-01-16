import React, { useState, useEffect } from 'react'
import HeadlineList from '../components/HeadlineList'
import ReadLaterList from '../components/ReadLaterList'
import TopicSearch from '../components/TopicSearch'
import { Chart } from "react-google-charts";
import ChartOptions from '../components/ChartOptions';
import './HeadlineContainer.css'


const HeadlineContainer = ({defaultTopic, chartTableColumns, chartTitle}) => {

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

    const parseSectionData = () => {
        
        const sections = headlines.map(section => section.sectionName);

        const uniqueItemsArray = [...sections].sort()
        .filter((item, position, array) => !position || item !== array[position -1]);
        
        const count = (array, value) => array.filter(item => (item === value)).length;

        const countArray = [];
        for (let i = 0; i < uniqueItemsArray.length; i++){
            let num = count(sections, uniqueItemsArray[i]);
            countArray.push(num);
        }

        const combinedArray = [];
        for (let i = 0; i < uniqueItemsArray.length; i++) {
                combinedArray.push([uniqueItemsArray[i], countArray[i]])
        }

        combinedArray.unshift(chartTableColumns);

        return combinedArray;
    }

    const chartData = parseSectionData();

    const [pieHole, setPieHole] = useState(0);

    const [is3D, setIs3D] = useState(false);

    const updatePieHole = pieHole => pieHole ? setPieHole(0.4) : setPieHole(0);
    
    const updateIs3D = is3D => is3D ? setIs3D(true) : setIs3D(false);

    const chartOptions = {
        title: chartTitle,
        pieHole: pieHole,
        is3D: is3D
    };

    return (
        
        <section className='main-container'>

            <div className='app-container'>
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

            <div className='chart-container'>
                <div className="chartButtons">
                    <ChartOptions selectDonut={value => updatePieHole(value)} select3D={value => updateIs3D(value)}/>
                </div> 
                    <Chart chartType="PieChart" data={chartData} width="100%" height="400px" options={chartOptions}/>
            </div>

        </section>
        
    )
}

export default HeadlineContainer;

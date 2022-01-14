import React, { useState } from 'react'

const TopicSearch = ({onTopicSearchSubmit}) =>  {

    const [topic, setTopic] = useState("");

    const handleTopicChange = (event) =>
        setTopic(event.target.value);

    const handleSearch = (event) => {
        event.preventDefault();

        const trimmedTopic = topic.trim();
        if(!trimmedTopic) {
            return
        }

        const topicToSearch = trimmedTopic.toLowerCase()
        .split(' ')
        .map((string) => string.charAt(0).toUpperCase() + string.substring(1))
        .join(' ');
        
        onTopicSearchSubmit(topicToSearch)

        setTopic("");
    }

    return (
        <form onSubmit = {handleSearch}>
            <input 
            type = 'text'
            placeholder= 'Enter topic'
            value = {topic}
            onChange = {handleTopicChange}
            />
            <input
            type = "submit"
            value = "Search"
            />
        </form>
    )
}

export default TopicSearch;

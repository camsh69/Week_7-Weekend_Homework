import React, { useState } from 'react'

const TopicSearch = ({onTopicSearchSubmit}) =>  {

    const [topic, setTopic] = useState("");
    
    const handleTopicChange = event => setTopic(event.target.value);

    const handleSearch = event => {

        event.preventDefault();

        const topicToSearch = topic.trim();
        if(!topicToSearch) {return}

        onTopicSearchSubmit(topicToSearch);

        setTopic("");
    }

    return (
        <form onSubmit={handleSearch}>
            <input type='text' placeholder='Enter topic' value={topic} onChange={handleTopicChange} autoFocus/>
            <input className='searchBtn' type="submit" value="Search"/>
        </form>
    )
}

export default TopicSearch;

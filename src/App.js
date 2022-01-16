import React from "react";
import HeadlineContainer from './containers/HeadlineContainer'

function App() {

  const defaultTopic = 'UK';
  const chartTableColumns = ["Section", "Number of articles"]
  const chartTitle = "Headline by News Section"

  return (
    
   <HeadlineContainer defaultTopic={defaultTopic} chartTableColumns={chartTableColumns} chartTitle={chartTitle}/>
  );
}

export default App;

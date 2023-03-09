import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Feed from "./containers/Feed"
import Header from "./containers/Header"
import _ from "lodash"
import React, {useState, useEffect} from "react"

function App() {
const [rssItems, setRssItems] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    if (!isLoaded)
        loadRss(setRssItems, setIsLoaded);
});

const fallBack = <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                     Site under construction
                 </header>

return (
    <div>
      <Header items={rssItems} isLoaded={isLoaded}/>
      {renderFeed(rssItems, fallBack)}
    </div>
  );
}

async function loadRss(setRssItems, setIsLoaded) {
    const serverUrl = "http://localhost:8080/rssFeed";

    const response = await axios.get(serverUrl, {
                                 headers: { 'Access-Control-Allow-Origin' : 'http://localhost:8080',
                                            'Access-Control-Allow-Methods':'GET'
                                            },
                                           }).then((result) => {
                                           setRssItems(result.data)
                                           setIsLoaded(true)
                                           return result;
                                           }).catch((e) => console.log(e));

    const data = await response.data
    return data;
}

function renderFeed(rssItems, fallBack) {
    return _.isEmpty(rssItems) ? fallBack : <Feed items={rssItems}/>
}

export default App;

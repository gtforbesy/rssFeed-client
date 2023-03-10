import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Feed from "./containers/Feed"
import Header from "./containers/Header"
import _ from "lodash"
import React, {Component} from "react"

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rssItems: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        if (!this.state.isLoaded)
            this.loadRss();
    }

    render() {
    const rssItems = this.state.rssItems;
    const fallBack = <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                         Site under construction
                     </header>

        return (
                <div key="root-div">
                    {_.isEmpty(rssItems) ? <></> : <Header items={rssItems}/>}
                    {_.isEmpty(rssItems) ? fallBack : <Feed items={rssItems}/>}
                </div>
        );
    }

   loadRss = async () => {
        const serverUrl = "http://localhost:8080/rssFeed";

        const response = await axios.get(serverUrl, {
                                     headers: { 'Access-Control-Allow-Origin' : 'http://localhost:8080',
                                                'Access-Control-Allow-Methods':'GET'
                                                },
                                               }).then((result) => {
                                               this.setState({isLoaded: true, rssItems: result.data});
                                               return result;
                                               }).catch((e) => console.log(e));
    }
}

export default App;

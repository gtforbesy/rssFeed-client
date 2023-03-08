import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
getRss();

const fallBack = <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                     Site under construction
                 </header>



  return (
    <div className="App">
        {fallBack}
    </div>
  );
}

async function getRss() {
try {
    const serverUrl = "http://localhost:8080/rssFeed";
    let rssGet = await axios.get(serverUrl, {
    headers: { 'Access-Control-Allow-Origin' : 'http://localhost:8080',
                'Access-Control-Allow-Methods':'GET',
//                "Content-Type": "application/json",
                },
    responseType: "json"});

    console.log(rssGet.data)
    } catch(e) {
    console.log(e)}
}

export default App;

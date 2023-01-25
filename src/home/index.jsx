import {useState} from "react";
import { getJoke } from "../Utils/fetch";
function Home() {
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const [loading, setLoading] = useState(false);


    const generateJoke = () => {
        setLoading(true)
        getJoke()
        .then((result) => {
            return result.json();
        })
        .then((result)=>{
            setSetup(<h1>{result.setup}</h1>)
            return result
        })
        .then((result)=>{
            setPunchline(result.punchline)
            return result
        })
        .finally(()=> {
            setLoading(false)
        })
        .catch((error)=>{
            alert('Something wrong happened')
        })
    }

    
    return (
        <>
            <div className="text-align-center">
                <button className="btn btn-primary" onClick={generateJoke} disabled={loading}>
                    Generate Joke
                </button>
                <br />
                <br />
                <h2>{setup} {punchline}</h2>


            </div>
        </>
    );
}

export default Home;
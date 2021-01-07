import React,{useEffect,useState} from 'react'
import CardPeople from '../components/CardPeople';

export default function People() {

     const [people , setPeople] = useState([])
     const [loader,setLoader] = useState(true);
     const [details,setDetails] =useState('');

     const handleClick = (url) => {
         console.log("msg")
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
     }

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            setLoader(false);
            setPeople(data.results);
        });
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                {
                    loader ? 'Loading..' : people.map(person => (
                        <CardPeople key={person.title} handleClick={handleClick} {...person}/>
                    ))
                }
               
            </div>
            <div className="col">
            {
                details && Object.entries(details).map(([key,value]) => {
                    console.log(value)
                    return <div>
                        <p>
                            {key},
                            {value}
                        </p>
                    </div>
                })
            
            } 
                </div>
            </div>
        </div>
    )
}

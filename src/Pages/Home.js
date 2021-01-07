import React,{useEffect,useState} from 'react'
import Card from '../components/Card';

export default function Home() {

     const [films , setFilms] = useState([])
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
        fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(data => {
            setLoader(false);
            setFilms(data.results);
        });
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                {
                    loader ? 'Loading..' : films.map(film => (
                        <Card key={film.title} handleClick={handleClick} {...film}/>
                    ))
                }
               
            </div>
            <div className="col">
            {
                details && Object.entries(details).map(([key,value]) => {
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

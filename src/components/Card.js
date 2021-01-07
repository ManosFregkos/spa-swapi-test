import React from 'react'

export default function Card(props) {


    return (

        <div onClick={() => props.handleClick(props.url)}>
        <div className="card" style={{width: "25rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{props.tile}</h5>
        <p className="card-text">{props.episode_id}</p>
        <p className="card-text">{props.opening_crawl}</p>
        <p className="card-text">{props.director}</p>
        <p className="card-text">{props.producer}</p>
        <p className="card-text">{props.created}</p>
        <p className="card-text">{props.edited}</p>
        <p className="card-text">{props.release_date}</p>
        <p className="card-text">{props.url}</p>
        <button onClick={() => props.handleClick(props.url)} className="btn btn-primary">Details</button>
            </div>
            </div>
        </div>
    )
}

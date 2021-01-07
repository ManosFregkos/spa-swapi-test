import React from 'react'

export default function Card(props) {


    return (

        <div>
        <div className="card" style={{width: "25rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.height}</p>
        <p className="card-text">{props.mess}</p>
        <p className="card-text">{props.skin_color}</p>
        <p className="card-text">{props.eye_color}</p>
        <p className="card-text">{props.birth_year}</p>
        <p className="card-text">{props.gender}</p>
        <p className="card-text">{props.created}</p>
        <p className="card-text">{props.edited}</p>
        <p className="card-text">{props.url}</p>
        <button onClick={() => props.handleClick(props.url)} className="btn btn-primary">Details</button>
            </div>
            </div>
        </div>
    )
}
import React from 'react'

export default function Card(props) {


    return (
        <div onClick={() => props.handleClick(props.url)}>
            {props.tile}
            {props.episode_id}
            {props.opening_crawl}
            {props.director}
            {props.producer}
            {props.created}
            {props.edited}
            {props.release_date}
            {props.url}
        </div>
    )
}

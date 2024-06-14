import React from "react";

export default function Card(props){

  return (
    <div className="card">
      <img className="card-image"src={props.img}/>
      <div className="ratings">
        <img src="./public/images/star.png"/>
        <p>{props.ratings} {props.reviewCount} {props.country}</p>
      </div>
      <p>{props.details}</p>
      <p>{props.amount}</p>
    </div>
  )
}
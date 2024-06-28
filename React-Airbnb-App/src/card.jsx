import React from "react";

export default function Card(props){

    let badgeText
    if(props.openSpots===0){
        badgeText = "SOLDOUT"
    } else if(props.location==="Online"){
      badgeText = "ONLINE"
    }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
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
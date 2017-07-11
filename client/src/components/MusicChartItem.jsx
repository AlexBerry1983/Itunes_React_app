import React from 'react'
//chart postion, title and artist
export const MusicChartItem = (props) => {
  return (
    <div className="songItem">
      <img className="img" src={props.image}/>
      <ul> 
        <li>Title: {props.title}</li>
        <li>Artist: {props.artist}</li>
        <li>Chart Position: {props.chartPosition}</li>
      </ul>
    </div>
  )
}

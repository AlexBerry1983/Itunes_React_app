import React from 'react'
import {MusicChartItem} from './MusicChartItem'

class MusicChartList extends React.Component {

  render(){
    const musicToRender = this.props.chartMusicData.map((song, index) =>{
      console.log(song['im:image']);
      return<MusicChartItem key={index}
        title={song['im:collection']['im:name'].label}
        artist={song['im:artist'].label}
        chartPosition={song.category.attributes['im:id']}
        image={song['im:image'][2].label}/>
    })
    return (
      <div>
        <h1>Top 20 Chart Tunes July 2017</h1>
        {musicToRender}
      </div>
    )
  }
}

export default MusicChartList

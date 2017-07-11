import React from 'react'
import {MusicChartItem} from './MusicChartItem'

class MusicChartList extends React.Component {

  render(){
    const musicToRender = this.props.chartMusicData.map((song, index) =>{
      console.log(song);
      return<MusicChartItem key={index} title={song['im:collection']['im:name'].label} artist={song['im:artist'].label} chartPosition={song.category.attributes['im:id']} />
    })
    return (
      <div>
        {musicToRender}
      </div>
    )
  }
}

export default MusicChartList

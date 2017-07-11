import React from 'react'
import {MusicChartItem} from './MusicChartItem'

class MusicChartList extends React.Component {

  render(){
    return (
      <div>
        <h2>This is the music list</h2>
        <MusicChartItem />
      </div>
    )
  }
}

export default MusicChartList

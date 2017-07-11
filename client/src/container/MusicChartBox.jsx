import React from 'react'
import MusicChartList from '../components/MusicChartList'

class MusicChartBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      chartMusicData: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return

      const jsonString = request.responseText
      const data = JSON.parse(jsonString)

      this.setState({chartMusicData: data.feed.entry})
    }
    request.send()
  }

  render(){
    return (
      <div>
        <MusicChartList chartMusicData={this.state.chartMusicData}/>
      </div>
    )
  }
}

export default MusicChartBox

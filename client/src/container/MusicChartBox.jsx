import React from 'react'
import MusicChartList from '../components/MusicChartList'

class MusicChartBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      ChartMusicData: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return

      const jsonString = request.responseText
      const MusicData = JSON.parse(jsonString)

      this.setState({ChartMusicData: MusicData})
      console.log(MusicData);
    }
    request.send()
  }

  render(){
    return (
      <div>
        <h1>Music list goes here</h1>
        <MusicChartList />
      </div>
    )
  }
}

export default MusicChartBox

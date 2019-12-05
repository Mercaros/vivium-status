import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import './Timer.css';
import axios from "axios";

class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            percentage: 80,
            timerStart: false,
            data: null,
            gameFinished: false
        }
    }
    componentDidMount() {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`https://vivium.azurewebsites.net/attempts/start`)
          .then(res => {
            this.setState({ timerStart: true });
          })
          console.log(this.state.data, "changed")
      }
    

      gameStatus(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`https://vivium.azurewebsites.net/attempts/current`)
        .then(res => {
            this.setState({gameInprogress: res.data})
        })
      }
    


    render() {
        const {timerStart} = this.state;
        if (!timerStart) {
            return <div>Loading data from server...</div>
        }
        if(gameInprogress){
            timerStart = false;
        }
        console.log(this.state.data, "changed")
        return <div className="Timer">       
            <Countdown date={Date.now() + 3600000} 
            autoStart={this.state.timerStart}
            intervalDelay={0}
            precision={3}
            renderer={renderer}/>
        </div>
    }
}
//Ajax call
const Ajax = () => <span>Ajax call</span>;


const renderer = ({minutes, seconds, milliseconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Ajax />;
    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}:{milliseconds}</span>;
    }
  };


export default Timer;

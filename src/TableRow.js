import React from 'react'
import { ProgressBar } from 'react-bootstrap';


export default class TableRow extends React.Component{

    state={
        hover: false
    }

    // componentDidMount() {
    //     setTimeout(this.setState({hover: true}), 1000)
    //   }

    render(){


        const progress = Math.round((this.props.recovered/this.props.confirmed)*100)
        const progressInstance = <ProgressBar now={progress} label={`${progress}%`} />;

        return(

            <tr>
                <td style={{color: "#fff"}}>{this.props.location}</td>
                <td style={{color: "#65DD9B"}}>{this.props.confirmed.toLocaleString()}</td>
                <td style={{color: "#F65164"}}>{this.props.deaths.toLocaleString()}</td>
                <td style={{color: "#449BE2"}} onMouseEnter={()=>this.setState({hover: true})} onMouseLeave={()=>this.setState({hover: false})}>{!this.state.hover? this.props.recovered.toLocaleString(): progressInstance}</td>
                <td style={{color: "#F8F53F"}}>{this.props.active.toLocaleString()}</td>
             </tr>
        )
    }
}
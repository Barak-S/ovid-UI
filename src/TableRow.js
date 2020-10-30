import React from 'react'
import { ProgressBar } from 'react-bootstrap';


export default class TableRow extends React.Component{

    state={
        hoverRecovered: true,
        hoverDeaths: true,
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ hoverRecovered: !this.state.hoverRecovered,  hoverDeaths: !this.state.hoverDeaths }) }, 1500)
    }

    render(){
        
        const recovered = Math.round((this.props.recovered/this.props.confirmed)*100)
        const progressRecovered = <ProgressBar now={recovered} label={`${recovered}%`} />

        const deaths = Math.round((this.props.deaths/this.props.confirmed)*100)
        const progressDeaths = <ProgressBar now={deaths} variant="danger" label={`${deaths}%`} />

        return(

            <tr>
                <td style={{color: "#fff"}}>{this.props.location}</td>
                <td style={{color: "#65DD9B"}}>{this.props.confirmed.toLocaleString()}</td>
                <td style={{color: "#F65164"}} onMouseEnter={()=>this.setState({hoverDeaths: true})} onMouseLeave={()=>this.setState({hoverDeaths: false})}>{!this.state.hoverDeaths? this.props.deaths.toLocaleString(): progressDeaths}</td>
                <td style={{color: "#449BE2"}} onMouseEnter={()=>this.setState({hoverRecovered: true})} onMouseLeave={()=>this.setState({hoverRecovered: false})}>{!this.state.hoverRecovered? this.props.recovered.toLocaleString(): progressRecovered}</td>
                <td style={{color: "#F8F53F"}}>{this.props.active.toLocaleString()}</td>
             </tr>
        )
    }
}


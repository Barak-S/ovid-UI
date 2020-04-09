import React from 'react'
import Table from 'react-bootstrap/Table';
import { Form, Container } from 'react-bootstrap';


export default class CountryStatFinder extends React.Component{

    state={
        searchTerm: '',
        countryData: [],
        filteredData: [],

    }


    handleChange(e){
        this.setState({
            searchTerm: e.target.value
        },()=>this.filterCountries())
    }

    getWorldStatistics(){
        let confirmed=0
        let recovered=0
        let active=0
        let deaths=0
        this.state.countryData.map(cs=>{
            confirmed += cs.confirmed
            recovered += cs.recovered
            active += cs.active
            deaths += cs.deaths
        })
        return[confirmed,deaths,recovered,active]
        // console.log(confirmed,recovered,active,deaths)
    }


    handleCountryClick(e){
        console.log(e)
    }


    handleRegionClick(e){
        // console.log(e.target.parentNode.children[0])
        let region = e.target.parentNode.children[0].innerHTML
        switch(region){
            case "USA":
                console.log("us")
                break;
            case "World":
                console.log("world")
                break;
            case "Europe":
                console.log("europe")
                break;
            case "Asia":
                console.log("asia")
                break;
            case "Africa":
                console.log("africa")
                break;
            case "Latin America":
                console.log("La")
                break;
            case "China":
                console.log("china")
                break;
            case "Canada":
                console.log("Canada")
                break;
            case "Oceana":
                console.log("Oceana")
                break;
            case "South America":
                console.log("South America")
                break;
            case "North America":
                console.log("North America")
                break;
            case "Middle East":
                console.log("Middle East")
                break;
                default:
        }

    }

    componentDidMount(){
        fetch('https://covid2019-api.herokuapp.com/v2/current')
        .then(resp=>resp.json())
        .then(data=>this.setState({
            countryData: data.data,
            filteredData: data.data
        },()=>this.getWorldStatistics()))

        // .then(fetch(`https://covid2019-api.herokuapp.com/v2/total`).then(resp=>resp.json()).then(data=>console.log(data)))
    }
    // ^^ 2 fetches in componentDidMount to https://covid2019-api.herokuapp.com/v2/total and create total box

    
    filterCountries(){
        this.setState({
            filteredData: this.state.countryData.filter(c=>c.location.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        })
    }

    mapCountries(){
        return(
            this.state.filteredData.map(c=>{
                return(
                    <tr key={c.location} onClick={()=>this.handleCountryClick(c.location)}>
                        <td style={{color: "#fff"}}>{c.location}</td>
                        <td style={{color: "#65DD9B"}}>{c.confirmed.toLocaleString()}</td>
                        <td style={{color: "#F65164"}}>{c.deaths.toLocaleString()}</td>
                        <td style={{color: "#449BE2"}}>{c.recovered.toLocaleString()}</td>
                        <td style={{color: "#F8F53F"}}>{c.active.toLocaleString()}</td>
                    </tr>
                )
            })
        )
    }

    render(){

        // console.log(this.state.countryData[0])

        return(
            <div style={{ width: '100%' }}>
                <div style={{ marginLeft: '6%', marginRight: '6%', paddingTop: 44 }}>

                    <Form.Control placeholder="Search by Country" style={{width: "45%",borderRadius: 40, borderColor: "#F65164", fontSize: 16, backgroundColor: '#343A40', color: '#fff' }} onChange={(e)=>this.handleChange(e)}/>

                    <div style={{ paddingTop:8 }} className="table">
                    
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Confirmed</th>
                                    <th>Deaths</th>
                                    <th>Recovered</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.mapCountries()}
                            </tbody>
                        </Table>
                        {/* <Table striped hover>
                            <thead>
                                <tr>
                                    <th>Region</th>
                                    <th>Confirmed</th>
                                    <th>Deaths</th>
                                    <th>Recovered</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>World</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>USA</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Europe</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Asia</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Africa</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Latin America</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>China</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Canada</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Oceana</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>South America</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>North America</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Middle East</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table> */}
                    </div>
                </div>
            </div>
        )
    }
}
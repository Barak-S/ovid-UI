import React from 'react'
import Table from 'react-bootstrap/Table';
import { Form, Container } from 'react-bootstrap';
import TR from './TableRow'


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
        // take an arg??
        // 1- function that takes country data and returns an array depending on the tr name.
        // 2- getWorldStats funtion will map the array returned from the above function 
        // 3- and return a confirmed,recovered, active and deaths array
        // 4- when tr's are rendered they will call handleRegionClick() and pass in its tr name [1] when will then call [2]getWorldStats
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
                    <TR key={c.location} location={c.location} confirmed={c.confirmed} deaths={c.deaths} recovered={c.recovered} active={c.active}></TR>
                )
            })
        )
    }

    sortCountries(e){
        let value = e.target.innerHTML
        let sortedArray = this.state.filteredData
        if (value === "Country"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.location.localeCompare(b.location))
            })
        } else if (value === "Confirmed"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.confirmed > b.confirmed ? 1 : -1)
            })
        } else if (value === "Deaths"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.deaths > b.deaths ? 1 : -1)
            })
        } else if (value === "Recovered"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.recovered > b.recovered ? 1 : -1)
            })
        } else if (value === "Active"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.active > b.active ? 1 : -1)
            })
        }
        
    }

    render(){

        // console.log(this.state.countryData[0])

        return(
            <div style={{ width: '100%' }}>
                <div style={{ marginLeft: '6%', marginRight: '6%', paddingTop: 44 }}>

                    <Form.Control placeholder="Search by Country" style={{width: "45%",borderRadius: 40, borderColor: "#e95f5f", fontSize: 16, backgroundColor: '#343A40', color: '#fff' }} onChange={(e)=>this.handleChange(e)}/>

                    <div style={{ paddingTop:8 }} className="table">
                    
                        <Table striped hover responsive variant="dark">
                            <thead>
                                <tr>
                                    <th onClick={(e)=>this.sortCountries(e)}>Country</th>
                                    <th onClick={(e)=>this.sortCountries(e)}>Confirmed</th>
                                    <th onClick={(e)=>this.sortCountries(e)}>Deaths</th>
                                    <th onClick={(e)=>this.sortCountries(e)}>Recovered</th>
                                    <th onClick={(e)=>this.sortCountries(e)}>Active</th>
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
                                    
                                </tr>

                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>USA</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Europe</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Asia</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Africa</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Latin America</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>China</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Canada</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Oceana</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>South America</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>North America</td>
                                    
                                </tr>
                                <tr onClick={(e)=>this.handleRegionClick(e)}>
                                    <td>Middle East</td>
                                    
                                </tr>
                            </tbody>
                        </Table> */}
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';


export default class CountryStatFinder extends React.Component{

    state={
        searchTerm: '',
        location: '',
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        active: 0,
        lastUpdate: '',
        countryData: [],
        filteredData: []
    }


    handleChange(e){
        this.setState({
            searchTerm: e.target.value
        },()=>this.filterCountries())
    }


    handleCountryClick(e){
        console.log(e)
    }

    componentDidMount(){
        fetch('https://covid2019-api.herokuapp.com/v2/current')
        .then(resp=>resp.json())
        .then(data=>this.setState({
            countryData: data.data,
            filteredData: data.data
        }))
    }

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
                        <td style={{color: "#fff"}}>{c.confirmed.toLocaleString()}</td>
                        <td style={{color: "#fff"}}>{c.deaths.toLocaleString()}</td>
                        <td style={{color: "#fff"}}>{c.recovered.toLocaleString()}</td>
                        <td style={{color: "#fff"}}>{c.active.toLocaleString()}</td>
                    </tr>
                )
            })
        )
    }

    render(){

        return(
            <div style={{ width: '100%' }}>
                <div style={{ marginLeft: '6%', marginRight: '6%', paddingTop: 44 }}>

                    <Form.Control placeholder="Search by Country" style={{width: "45%",borderRadius: 40, borderColor: "#e95f5f", fontSize: 16 }} onChange={(e)=>this.handleChange(e)}/>

                    <div style={{ paddingTop:8 }} className="table">
                        <Table striped bordered hover>
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
                    </div>
                </div>
            </div>
        )
    }
}
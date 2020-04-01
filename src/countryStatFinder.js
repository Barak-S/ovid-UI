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

    //data.data
    //data.dt
    // http://covid2019-api.herokuapp.com/v2/current ===> to make a tale for all countries

    handleChange(e){
        this.setState({
            searchTerm: e.target.value
        },()=>this.filterCountries())
    }


    // handleSubmit(e){
    //     e.preventDefault()
    //     fetch(`https://covid2019-api.herokuapp.com/v2/country/${this.state.searchTerm}`)
    //     .then(resp=>resp.json())
    //     .then(data=>this.setState({
    //         location: data.data.location,
    //         confirmed: data.data.confirmed,
    //         deaths: data.data.deaths,
    //         recovered: data.data.recovered,
    //         active: data.data.active,
    //         lastUpdate: data.dt
    //     }))
    // }

    componentDidMount(){
        fetch('http://covid2019-api.herokuapp.com/v2/current')
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
                    <tr key={c.location}>
                        <td>{c.location}</td>
                        <td>{c.confirmed}</td>
                        <td>{c.deaths}</td>
                        <td>{c.recovered}</td>
                        <td>{c.active}</td>
                    </tr>
                )
            })
        )
    }

    render(){

        return(
            <div style={{ width: '50%' }}>
                <div style={{ marginLeft: '7%', paddingTop: 44 }}>

                    <Form.Control placeholder="Search by Country" style={{width: "45%",borderRadius: 40, borderColor: "#013C71", fontSize: 16 }} onChange={(e)=>this.handleChange(e)}/>

                    <div style={{ paddingTop:8 }}>
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
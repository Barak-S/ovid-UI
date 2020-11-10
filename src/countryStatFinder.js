import React from 'react'
import Table from 'react-bootstrap/Table';
import { Form, Col } from 'react-bootstrap';
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
                filteredData: sortedArray.sort((a, b) => a.confirmed < b.confirmed ? 1 : -1)
            })
        } else if (value === "Deaths"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.deaths < b.deaths ? 1 : -1)
            })
        } else if (value === "Recovered"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.recovered < b.recovered ? 1 : -1)
            })
        } else if (value === "Active"){
            this.setState({
                filteredData: sortedArray.sort((a, b) => a.active < b.active ? 1 : -1)
            })
        }
        
    }

    render(){

        return(
                <Col xs={12} sm={12} md={9} lg={9} className="table-col" >
                    <Form inline style={{margin: 15}}>
                        <Form.Control placeholder="Search by Country" style={{ borderRadius: 40, borderColor: "#e95f5f", fontSize: 16, backgroundColor: '#343A40', color: '#fff' }} onChange={(e)=>this.handleChange(e)}/>
                    </Form>
                    <hr/>
                    <div style={{ paddingTop:8 }} className="table">
                    
                        <Table striped hover responsive variant="dark">
                            <thead>
                                <tr style={{cursor: "pointer"}}>
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
                    </div>
            </Col>
        )
    }
}
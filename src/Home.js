import React from 'react'
import CountryStatFinder from './countryStatFinder'
import News from './News'
import { Row } from 'react-bootstrap';
import './App.css';


export default class Home extends React.Component{

    state={
        articles: []
    }
    
    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d2577e63c08c4437bd69a7b1b66d7c7f`)
        .then(resp=>resp.json())
        .then(data=>this.setState({
            articles: data.articles
        }))
    }


    render(){
        return(
            <Row>
                <CountryStatFinder></CountryStatFinder>
                {/* <News></News> */}
            </Row>
        )

    }
}
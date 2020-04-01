import React from 'react'
import { Card } from 'react-bootstrap';


export default class News extends React.Component{

    state={
        articles: []
    }
    
    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=d2577e63c08c4437bd69a7b1b66d7c7f')
        .then(resp=>resp.json())
        .then(data=>this.setState({
            articles: data.articles
        }))
    }

    mapArticles(){
        return(
            this.state.articles.map(a=>{
                return(
                    <Card key={a.source.id} style={{ width: '38rem', marginBottom: 10.5 }}>
                        <Card.Img variant="top" src={a.urlToImage} style={{padding:15}} />
                        <Card.Body>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text>
                                {a.author}
                            </Card.Text>
                            <Card.Link href="#"onClick={()=> window.open(a.url, "_blank")}>{a.url}</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    

    render(){

        console.log(this.state.articles)

        return(
            <div style={{width: '50%'}}>
                <div style={{float: 'right', marginTop:44, marginBottom:44, paddingRight: '7%'}}>
                    <h3>News</h3>
                    {this.mapArticles()}
                </div>
            </div>
        )

    }


}
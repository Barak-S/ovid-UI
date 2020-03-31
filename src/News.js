import React from 'react'
import { Card } from 'react-bootstrap';


export default class News extends React.Component{

    state={
        articles: []
    }
    
    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?' +'country=us&' +'apiKey=d2577e63c08c4437bd69a7b1b66d7c7f')
        .then(resp=>resp.json())
        .then(data=>this.setState({
            articles: data.articles
        }))
    }

    mapArticles(){
        return(
            this.state.articles.map(a=>{
                return(
                    <Card key={a.source.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={a.urlToImage} />
                        <Card.Body>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text>
                                {a.author}
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href={a.url}>{a.url}</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    

    render(){

        console.log(this.state.articles)

        return(
            <div style={{float: 'right'}}>
                <h4>News</h4>
                {this.mapArticles()}
            </div>
        )

    }


}
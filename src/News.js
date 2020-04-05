import React from 'react'
import { Card } from 'react-bootstrap';

export default class News extends React.Component{

    state={
        articles: []
    }
    
    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d2577e63c08c4437bd69a7b1b66d7c7f`)
        .then(resp=>resp.json())
        .then(data=>this.setState({
            articles: data.articles
        },()=>console.log(this.state.articles)))
    }

    mapArticles(){
        return(
            this.state.articles.map(a=>{
                return(
                    // <Card key={a.title} style={{ width: '20rem', marginBottom: 10.5, borderColor: "#e95f5f" }}>
                    //     <Card.Img variant="top" src={a.urlToImage} style={{padding:15}} />
                    //     <Card.Body>
                    //         <Card.Title>{a.title}</Card.Title>
                    //         <Card.Text>
                    //             {a.author}
                    //         </Card.Text>
                    //         <Card.Link href="#"onClick={()=> window.open(a.url, "_blank")}>{a.url}</Card.Link>
                    //     </Card.Body>
                    // </Card>

                    <Card className="newsCard">
                        <Card.Img variant="top" src={a.urlToImage} style={{ padding:15, marginBottom: 10.5 }} />
                        <Card.Body style={{color: "#fff"}}>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text>{a.author}</Card.Text>
                            <Card.Link href="#"onClick={()=> window.open(a.url, "_blank")}>{a.url}</Card.Link>

                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    

    render(){

        return(
            <div style={{width: '100%'}}>
                <div style={{ marginTop:44, marginBottom:44 }}>
                    <h3>News</h3>
                    {this.mapArticles()}
                </div>
            </div>
        )

    }


}
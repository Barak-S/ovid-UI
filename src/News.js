import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default class News extends React.Component{

    state={
        articles: [],
        selectedArticle: {}
    }
    
    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d2577e63c08c4437bd69a7b1b66d7c7f`)
        .then(resp=>resp.json())
        .then(data=>this.setState({
            articles: data.articles
        },()=>console.log(this.state.articles)))
    }

    handleNewsClick(title){
        let clickedArticle = this.state.articles.filter(a=>a.title === title)
        this.setState({
            selectedArticle: clickedArticle[0]
        })
    }

    clearSelectedArticle(){
        this.setState({
            selectedArticle: {}
        })
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

                    <Card className="newsCard" key={a.title} onClick={()=>this.handleNewsClick(a.title)}>
                        <Card.Img variant="top" src={a.urlToImage} style={{ padding:15, marginBottom: 10.5 }} />
                        <Card.Body style={{ color: "#fff" }}>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text>{a.author}</Card.Text>
                            <Card.Link href="#" onClick={()=> window.open(a.url, "_blank")}>{a.url}</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    

    render(){

        this.state.selectedArticle.title && console.log(this.state.selectedArticle.content)
        

        return(
            <div style={{ width: '100%' }}>
                <h3 style={{ marginTop: 44 }}>News</h3>
                { !this.state.selectedArticle.title ?
                    <div style={{ marginTop:10, marginBottom:44 }}>
                        {this.mapArticles()}
                    </div>
                :
                <div>
                    <Card className="newsCard" style={{marginBottom: 100}}>
                    <Button onClick={()=>this.clearSelectedArticle()} style={{backgroundColor: "#e95f5f", color: "#343A40", fontWeight: '600', margin: 10, borderColor: "#fff"}}>Close</Button>
                        <Card.Img variant="top" src={this.state.selectedArticle.urlToImage} style={{padding:15}} />
                        <Card.Body style={{ color: "#fff" }}>
                            <Card.Title>{this.state.selectedArticle.title}</Card.Title>
                            <Card.Text>
                                {this.state.selectedArticle.author}
                            </Card.Text>
                            <Card.Text>
                                {this.state.selectedArticle.content}
                            </Card.Text>
                            <Card.Link href="#"onClick={()=> window.open(this.state.selectedArticle.url, "_blank")}>{this.state.selectedArticle.url}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>}

                {this.state.selectedArticle.title? console.log("yes"): console.log("no")}
            </div>
        )

    }


}
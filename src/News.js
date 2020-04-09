import React from 'react'
import { Card, Button, ButtonToolbar, DropdownButton, Dropdown, CardDeck, Col, Container } from 'react-bootstrap';



export default class News extends React.Component{

    state={
        articles: [],
        selectedArticle: {},
        newsCountry: "us"
    }
    
    componentDidMount(){
        this.getNews(this.state.newsCountry)
    }

    getNews(newsCountry){
        fetch(`https://newsapi.org/v2/top-headlines?country=${newsCountry}&category=health&apiKey=d2577e63c08c4437bd69a7b1b66d7c7f`)
        .then(resp=>resp.json())
        .then(data=>this.setState({
            articles: data.articles
        }))
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

    changeCountry(e){
        this.setState({
            newsCountry: e
        },()=>this.getNews(this.state.newsCountry))
    }

    mapArticles(){
        return(
            <Container>
                <CardDeck>
                {this.state.articles.map(a=>{
                    return(
                        <Col>
                            <Card key={a.title} onClick={()=>this.handleNewsClick(a.title)} bg="dark" text="light"style={{ height: 590,paddingBottom:10, marginBottom: 10.5, borderColor: "#e95f5f" }}>
                                <Card.Img variant="top" src={a.urlToImage} style={{padding:15}} />
                                <Card.Body>
                                    <Card.Title>{a.title}</Card.Title>
                                    <Card.Text>
                                        {a.author}
                                    </Card.Text>
                                    <Card.Link href="#"onClick={()=> window.open(a.url, "_blank")}>{a.url}</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                </CardDeck>
            </Container>
        )
    }

    

    render(){

        // this.state.selectedArticle.title && console.log(this.state.selectedArticle.content)
        

        return(
            <div style={{ width: '100%' }}>
                <h3 style={{ marginTop: 44 }}>News</h3>
                {/* <ButtonToolbar>
                        <DropdownButton
                            drop="down"
                            title={`${this.state.newsCountry}`}
                            id="dropdown-button-drop-down"
                            key="down"
                            onSelect= {(e)=>this.changeCountry(e)}
                        >
                        <Dropdown.Item eventKey="us" style={{color: "#013C71"}}>United States</Dropdown.Item>
                        <Dropdown.Item eventKey="ar" style={{color: "#013C71"}}>Argentina</Dropdown.Item>
                        <Dropdown.Item eventKey="au" style={{color: "#013C71"}}>Australia</Dropdown.Item>
                        <Dropdown.Item eventKey="at" style={{color: "#013C71"}}>Austria</Dropdown.Item>
                        <Dropdown.Item eventKey="be" style={{color: "#013C71"}}>Belgium</Dropdown.Item>
                        <Dropdown.Item eventKey="br" style={{color: "#013C71"}}>Brazil</Dropdown.Item>
                        <Dropdown.Item eventKey="bg" style={{color: "#013C71"}}>Bulgaria</Dropdown.Item>
                        <Dropdown.Item eventKey="ca" style={{color: "#013C71"}}>Canada</Dropdown.Item>
                        <Dropdown.Item eventKey="cn" style={{color: "#013C71"}}>China</Dropdown.Item>
                        <Dropdown.Item eventKey="co" style={{color: "#013C71"}}>Colombia</Dropdown.Item>
                        <Dropdown.Item eventKey="cu" style={{color: "#013C71"}}>Cuba</Dropdown.Item>
                        <Dropdown.Item eventKey="il" style={{color: "#013C71"}}>Israel</Dropdown.Item>
                       
                            
                        </DropdownButton>  
                    </ButtonToolbar> */}
                { !this.state.selectedArticle.title ?
                    <div style={{ marginTop:10, marginBottom:44 }}>
                        {this.mapArticles()}
                    </div>
                :
                <div>
                    <Card className="newsCard" bg="dark" text="light" style={{marginBottom: 100}}>
                    <Button onClick={()=>this.clearSelectedArticle()} style={{backgroundColor: "#e95f5f", color: "#343A40", fontWeight: '600', margin: 10, borderColor: "#fff"}}>Close</Button>
                        <Card.Img variant="top" src={this.state.selectedArticle.urlToImage} style={{padding:15}} />
                        <Card.Body style={{ color: "#fff" }}>
                            <Card.Title>{this.state.selectedArticle.title}</Card.Title>
                            <Card.Text>
                                {this.state.selectedArticle.author}
                            </Card.Text>
                            <Card.Text> Preview: {this.state.selectedArticle.content}</Card.Text>
                            <Card.Link href="#"onClick={()=> window.open(this.state.selectedArticle.url, "_blank")}>{this.state.selectedArticle.url}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>}
            </div>
        )

    }


}
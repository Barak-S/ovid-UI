import React from 'react';
import { Col } from 'react-bootstrap';


function About() {
    return (
        <Col xs={12} sm={12} md={8} lg={8} className="about" style={{height: '99vh'}}>
            <h3 style={{textAlign: "center", margin: 7}}>About</h3>
            <p>This project was created back in march of 2020, when the Coronavirus outbreak was extremely rapid worldwide. This app is intended for tracking daily updates for every country's covid-19 infection statistics.</p>
            <p><strong>Technologies: </strong>React.js, React Bootstrap, open-source Covid-19 statistic API</p>
            <br/>
            <p>The Covid-19 data that is displayed in the app is from an open-source Covid-19 API which can be found <a href='https://covid2019-api.herokuapp.com/docs' target="_blank">HERE</a>. By default, the data is displayed in descending order from most confirmed cases to least. Clicking or selecting on the table headers will dynamically re-render the results based on the title of the header. The search bar in the top left will also filter through countires based on the search query from the user.</p>
        </Col>
    );
}

export default About;
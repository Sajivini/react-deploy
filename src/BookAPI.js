import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';
import './BookAPI.css';

class BookAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {data : []};
    }

    async componentDidMount() {

        const url = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=JZG9lBGuZZmZCbjyhAGXYIW4f7yjUfCU`;
        let response = await axios.get(url,{
            crossdomain: true
        });
         this.setState({data : [...response.data.results]});
    }   

    render(){
        return (
        <div className='BookAPI'>
            {this.state.data.map((p,i) => {
                if (p.isbns.length !== 0 ) {
                    if (i >= 1) {
                        let isbn = p.isbns[0].isbn13;
                        let imageUrl = `https://s1.nyt.com/du/books/images/${isbn}.jpg`;
                        const amazonUrl = `https://www.amazon.com/s?i=stripbooks&rh=p_66%3A${isbn}&s=relevanceexprank&Adv-Srch-Books-Submit.x=26&Adv-Srch-Books-Submit.y=11&unfiltered=1&ref=sr_adv_b`;
                    return <Book title = {p.title} author = {p.author} description = {p.description} imageUrl = {imageUrl} amazonUrl = {amazonUrl}/>            
                    }
            }
            })}
        </div>
        )
    }
}

export default BookAPI;

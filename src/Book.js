import React, {Component} from "react";
import './Book.css';

class Book extends Component {
    render(){

        return(
            <div className="BookClass">
                <div className='Book-Cards'>
                <a href={this.props.amazonUrl}>
                <img src={this.props.imageUrl} className='imageBook' alt = 'Image not found' />
                <h4>{this.props.title}</h4>
                <p>{this.props.author}</p>
                </a>
                </div>
            </div>
        )
    }
}

export default Book;
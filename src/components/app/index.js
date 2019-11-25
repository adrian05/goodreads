import React, { Component, Fragment } from 'react';
import { books } from '../../books.json';
import Search from '../search/index';

class App extends Component {
    constructor() {
        super();
        this.state = { books: books.slice(0, 20) };
    }

    search = (input) => {
        this.setState({ books: books.filter(book => book.title.toLowerCase().includes(input.toLowerCase())) });
    }

    render = () => {
        return (
            <Fragment>
                <Search search={this.search} />
                <ul>
                    {this.state.books.map((book, index) => (<li>{book.title}</li>))}
                </ul>
            </Fragment>
        );
    }
};

export default App;
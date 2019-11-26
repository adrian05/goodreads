import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import BookList from '../booklist'
import Search from '../search'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import fetchBooksStartedAction from './actions'

const columnData = [
  { id: 'isbn', numeric: true, disablePadding: false, label: 'ISBN' },
  { id: 'isbn13', numeric: true, disablePadding: false, label: 'ISBN13' },
  { id: 'authors', numeric: false, disablePadding: false, label: 'Author' },
  {
    id: 'original_title',
    numeric: false,
    disablePadding: false,
    label: 'Title',
  },
  {
    id: 'original_publication_year',
    numeric: true,
    disablePadding: false,
    label: 'Year',
  },
  {
    id: 'average_rating',
    numeric: false,
    disablePadding: false,
    label: 'Star Rating',
  },
  {
    id: 'language_code',
    numeric: false,
    disablePadding: false,
    label: 'Language',
  },
  {
    id: 'small_image_url',
    numeric: false,
    disablePadding: false,
    label: 'Thumbnail',
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      filter: '',
    }
  }

  componentDidMount = () => {
    const { fetchBooks } = this.props;
    fetchBooks('/books');
  }

  search = term => {
    this.setState({
      filter: term,
    })
  }

  render = () => {
    const { filter } = this.state
    const { books, loading } = this.props
    const filteredBooks = books.filter(book => book.title.includes(filter))

    if (loading) {
      return (
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
      />
      )
    } else {
      return (
        <div className="app">
          <Search search={term => this.search(term)} />
          <BookList books={filteredBooks} columnHeaders={columnData} />
        </div>
      )
    }
  }
}

App.defaultProps = {
  books: []
}

App.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
  books: state.appReducer.books,
  loading: state.appReducer.loading
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: url => {
    dispatch(fetchBooksStartedAction(url))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

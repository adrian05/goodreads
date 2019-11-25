import React, { Component, Fragment } from 'react';
import Input from './components/input';
import Button from './components/button';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange = value => this.setState({ input: value })

  render() {
    const { input } = this.state;
    const { search } = this.props;
    return (
      <Fragment>
        <Input onChange={event => this.handleChange(event.target.value)} />
        <Button onClick={() => search(input)} />
      </Fragment>
    )
  }
}

export default Search;
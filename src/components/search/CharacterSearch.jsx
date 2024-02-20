import { Component } from 'react';
import PropTypes from 'prop-types';
import './CharacterSearch.css';

class CharacterSearch extends Component {
  componentWillUnmount() {
    localStorage.setItem('searchInput', this.state.searchInput);
  }

  render() {
    return (
      <div className="characterSearch_block">
        <input
          className="characterSearch_input"
          label="Search Characters"
          value={this.props.searchInput}
          onChange={(event) => this.props.onSearchInputChange(event.target.value)}
          placeholder="Search character..."
        />
      </div>
    );
  }
}
CharacterSearch.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
};

export default CharacterSearch;

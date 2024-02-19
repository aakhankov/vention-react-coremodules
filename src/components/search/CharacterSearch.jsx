import { Component } from 'react'
import CharacterList from '../cards-section/card-list/CharacterList'
import './CharacterSearch.css'

class CharacterSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: localStorage.getItem('searchInput') || '',
    }
  }

  handleChange = (event) => {
    const inputValue = event.target.value
    this.setState({ searchInput: inputValue })
  }
  componentWillUnmount() {
    localStorage.setItem('searchInput', this.state.searchInput)
  }
  render() {
    return (
      <div>
        <div className='characterSearch_block'>
          <input
            className='characterSearch_input'
            label='Search Characters'
            value={this.state.searchInput}
            onChange={this.handleChange}
            placeholder='Search character...'
          />
        </div>
        <CharacterList searchInput={this.state.searchInput} />
      </div>
    )
  }
}

export default CharacterSearch

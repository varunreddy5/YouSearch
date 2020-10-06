import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search-bar'>
        <div className='row'>
          <div className='offset-md-3 col-md-6'>
            <form onSubmit={(e) => this.onFormSubmit(e)}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search Videos'
                  onChange={(e) => this.setState({ term: e.target.value })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;

import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('spiderman');
  }

  onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
      },
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-md-12'>
              <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 offset-md-1'>
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className='col-md-4'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

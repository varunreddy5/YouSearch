import React from 'react';
import './VideoItem.scss';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className='video-item'
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <li className='list-group-item'>
        <div className='row'>
          <div className='col-lg-4 col-md-3'>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          </div>
          <div className='col-lg-8 col-md-9'>
            <p>{video.snippet.title}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoItem;

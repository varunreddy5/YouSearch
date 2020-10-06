import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}></VideoItem>;
  });
  return (
    <div>
      <ul className='list-group'>{renderedVideos}</ul>
    </div>
  );
};

export default VideoList;

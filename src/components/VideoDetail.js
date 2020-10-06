import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe title='videoplayer' className='embed-responsive-item' src={videoSrc} allowFullScreen></iframe>
      </div>
      <div className='card mt-3 mb-3'>
        <div className='card-body'>
          <h5>{video.snippet.title}</h5>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

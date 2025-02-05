import React from 'react';
import './MusicPlayer.css';

const MusicPlayer = (
  isPlaying,
  setIsPlaying,
  currentTrack,
  onChangeTrack,
  tracks
) => {
  return (
    <div className="music-player">
      <h1>{tracks[currentTrack].title}</h1>
      <img src={tracks[currentTrack].source} alt={tracks[currentTrack].title} />
      <div className="music-player__controls">
        <div className="music-player__pause-play">
          <button></button>
        </div>
        <div className="music-player__progress">
          <div className="music-player__progress-bar"></div>
        </div>
      </div>
      <div className="music-player__actions">
        <button onClick={() => onChangeTrack('backward')}>Prev</button>
        <button onClick={() => onChangeTrack('forward')}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;

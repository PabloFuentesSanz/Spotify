import React from 'react';
import { usePlayerStore } from '../store/playerStore';
import { Pause, Play } from '../icons/ReactIcons';

interface PlayProps {
  id: string | undefined;
  size?: string;
}

export const CardPlayButton: React.FC<PlayProps> = ({ id, size = 'small' }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id == id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
    } else {
      fetch(`/api/get-info-playlist.json?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data;
          console.log(songs);
          setIsPlaying(true);
          setCurrentMusic({ songs, playlist, song: songs[0] });
        });
    }
  };

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-4"
      onClick={handleClick}
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
};

export default CardPlayButton;

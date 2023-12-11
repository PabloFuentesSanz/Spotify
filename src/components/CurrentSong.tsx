import React from 'react';
import { type Song } from '../lib/data';

// Definir una interfaz para las props
interface CurrentSongProps {
  song: Song | null;
}

// Aplicar la interfaz al componente
const CurrentSong: React.FC<CurrentSongProps> = ({ song }) => {
  return (
    <div className="flex items-center gap-5 relative overflow-hidden">
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={song?.image} alt={song?.title} />
      </picture>

      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">{song?.title}</h3>
        <span className="text-xs opacity-80">{song?.artists?.join(', ')}</span>
      </div>
    </div>
  );
};

export default CurrentSong;

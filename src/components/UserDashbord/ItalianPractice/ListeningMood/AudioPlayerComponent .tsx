import React from 'react';
import { Headphones, SkipBack, SkipForward, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  duration: number;
  currentTime: number;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlayPause: () => void;
  isPlaying: boolean;
  handleSpeedChange: (increase: boolean) => void;
  speed: number;
  toggleMute: () => void;
  isMuted: boolean;
  volume: number;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AudioPlayerComponent: React.FC<AudioPlayerProps> = ({
  duration,
  currentTime,
  handleSeek,
  handlePlayPause,
  isPlaying,
  handleSpeedChange,
  speed,
  toggleMute,
  isMuted,
  volume,
  handleVolumeChange
}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Headphones className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Una Conversazione al Bar</span>
      </div>

      {/* Timeline */}
      <div className="mb-4">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #d1d5db 0%, #d1d5db ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
          <SkipBack className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={handlePlayPause}
          className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1" />
          )}
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
          <SkipForward className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Speed and Volume Controls */}
      <div className="flex items-center justify-between gap-8">
        {/* Speed */}
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-700 mb-2">Speed</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSpeedChange(false)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
            >
              -
            </button>
            <div className="w-16 h-8 flex items-center justify-center bg-white border border-gray-300 rounded font-medium text-sm">
              {speed}x
            </div>
            <button
              onClick={() => handleSpeedChange(true)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Volume */}
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-700 mb-2">Volume</div>
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="text-gray-600 hover:text-gray-800">
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Transcript */}
        <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
          Show Transcript
        </button>
      </div>
    </div>
  );
};

export default AudioPlayerComponent;

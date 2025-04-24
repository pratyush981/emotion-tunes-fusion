
import { useState } from 'react';
import { Music } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface MusicRecommendationsProps {
  emotion: string;
}

const MusicRecommendations = ({ emotion }: MusicRecommendationsProps) => {
  const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null);

  const getRecommendations = (emotion: string) => {
    const recommendations = {
      angry: {
        "Heavy Metal Playlist": [
          "Enter Sandman - Metallica",
          "Breaking the Law - Judas Priest",
          "Down with the Sickness - Disturbed",
          "Chop Suey! - System of a Down"
        ],
        "Rock Classics": [
          "Back in Black - AC/DC",
          "Welcome to the Jungle - Guns N' Roses",
          "Smells Like Teen Spirit - Nirvana",
          "Sweet Child O' Mine - Guns N' Roses"
        ],
        "Rage Against the Machine": [
          "Killing in the Name",
          "Bulls on Parade",
          "Guerrilla Radio",
          "Know Your Enemy"
        ]
      },
      sad: {
        "Peaceful Piano": [
          "River Flows in You - Yiruma",
          "Nuvole Bianche - Ludovico Einaudi",
          "Kiss the Rain - Yiruma",
          "Experience - Ludovico Einaudi"
        ],
        "Melancholic Jazz": [
          "What a Wonderful World - Louis Armstrong",
          "My Funny Valentine - Chet Baker",
          "Round Midnight - Thelonious Monk",
          "In a Sentimental Mood - Duke Ellington"
        ],
        "Soft Rock Ballads": [
          "Nothing Compares 2 U - Sinéad O'Connor",
          "Tears in Heaven - Eric Clapton",
          "Yesterday - The Beatles",
          "The Sound of Silence - Simon & Garfunkel"
        ]
      },
      happy: {
        "Summer Hits": [
          "Happy - Pharrell Williams",
          "Walking on Sunshine - Katrina & The Waves",
          "Good Vibrations - The Beach Boys",
          "Dancing Queen - ABBA"
        ],
        "Dance Pop Favorites": [
          "Can't Stop the Feeling! - Justin Timberlake",
          "Shake It Off - Taylor Swift",
          "I Wanna Dance with Somebody - Whitney Houston",
          "Uptown Funk - Mark Ronson ft. Bruno Mars"
        ],
        "Feel Good Classics": [
          "Don't Stop Believin' - Journey",
          "Sweet Caroline - Neil Diamond",
          "I'm Still Standing - Elton John",
          "Sweet Dreams - Eurythmics"
        ]
      },
      neutral: {
        "Indie Mix": [
          "Mr. Brightside - The Killers",
          "Take Me Out - Franz Ferdinand",
          "Midnight City - M83",
          "Electric Feel - MGMT"
        ],
        "Alternative Hits": [
          "Creep - Radiohead",
          "Seven Nation Army - The White Stripes",
          "Where Is My Mind? - Pixies",
          "Black Hole Sun - Soundgarden"
        ],
        "Popular Mix": [
          "Billie Jean - Michael Jackson",
          "Bohemian Rhapsody - Queen",
          "Sweet Child O' Mine - Guns N' Roses",
          "Stairway to Heaven - Led Zeppelin"
        ]
      }
    };

    const emotionKey = emotion.toLowerCase() as keyof typeof recommendations;
    return recommendations[emotionKey] || recommendations.neutral;
  };

  const togglePlaylist = (playlistName: string) => {
    setExpandedPlaylist(expandedPlaylist === playlistName ? null : playlistName);
  };

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700 transform transition-all duration-300 hover:bg-gray-800/70">
      <div className="flex items-center gap-2 mb-6">
        <Music className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-semibold text-white">Music for {emotion || 'You'}</h2>
      </div>
      <div className="space-y-3">
        {Object.entries(getRecommendations(emotion)).map(([playlist, songs], index) => (
          <div key={index} className="space-y-2">
            <div
              onClick={() => togglePlaylist(playlist)}
              className="p-4 rounded-lg bg-purple-900/30 text-purple-100 hover:bg-purple-800/40 transition-colors cursor-pointer border border-purple-700/30 flex justify-between items-center"
            >
              <span>{playlist}</span>
              <span>{expandedPlaylist === playlist ? '▼' : '▶'}</span>
            </div>
            {expandedPlaylist === playlist && (
              <div className="pl-6 space-y-2">
                {songs.map((song, songIndex) => (
                  <div
                    key={songIndex}
                    className="p-3 rounded-lg bg-purple-900/20 text-purple-200 border-l-2 border-purple-500"
                  >
                    {song}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MusicRecommendations;

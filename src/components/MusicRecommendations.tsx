
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
      happy: {
        "Summer Hits": [
          "Happy - Pharrell Williams",
          "Walking on Sunshine - Katrina & The Waves",
          "Good Vibrations - The Beach Boys",
          "Dancing Queen - ABBA",
          "Can't Stop the Feeling! - Justin Timberlake",
          "Uptown Funk - Mark Ronson ft. Bruno Mars"
        ],
        "Dance Pop": [
          "Shake It Off - Taylor Swift",
          "I Wanna Dance with Somebody - Whitney Houston",
          "Don't Stop Believin' - Journey",
          "Sweet Caroline - Neil Diamond",
          "I'm Still Standing - Elton John"
        ],
        "Modern Pop": [
          "As It Was - Harry Styles",
          "Blinding Lights - The Weeknd",
          "Butter - BTS",
          "Levitating - Dua Lipa",
          "Watermelon Sugar - Harry Styles"
        ],
        "Rock Classics": [
          "Sweet Home Alabama - Lynyrd Skynyrd",
          "Sweet Child O' Mine - Guns N' Roses",
          "All Star - Smash Mouth",
          "I Love Rock 'n' Roll - Joan Jett"
        ]
      },
      sad: {
        "Peaceful Piano": [
          "River Flows in You - Yiruma",
          "Nuvole Bianche - Ludovico Einaudi",
          "Kiss the Rain - Yiruma",
          "Experience - Ludovico Einaudi",
          "Gymnopédie No.1 - Erik Satie"
        ],
        "Melancholic Jazz": [
          "What a Wonderful World - Louis Armstrong",
          "My Funny Valentine - Chet Baker",
          "Round Midnight - Thelonious Monk",
          "In a Sentimental Mood - Duke Ellington",
          "Blue in Green - Miles Davis"
        ],
        "Acoustic Covers": [
          "Hallelujah - Jeff Buckley",
          "Mad World - Gary Jules",
          "The Sound of Silence - Disturbed",
          "All of Me - John Legend",
          "Say Something - A Great Big World"
        ],
        "Indie Folk": [
          "The Night We Met - Lord Huron",
          "I See Fire - Ed Sheeran",
          "Youth - Daughter",
          "Into the Mystic - Van Morrison"
        ]
      },
      neutral: {
        "Indie Mix": [
          "Mr. Brightside - The Killers",
          "Take Me Out - Franz Ferdinand",
          "Midnight City - M83",
          "Electric Feel - MGMT",
          "Somebody Else - The 1975"
        ],
        "Classical Focus": [
          "Canon in D - Pachelbel",
          "Spring - Vivaldi",
          "Moonlight Sonata - Beethoven",
          "Clair de Lune - Debussy"
        ],
        "Ambient": [
          "Weightless - Marconi Union",
          "Horizon Variations - Max Richter",
          "We Move Lightly - Dustin O'Halloran",
          "An Ending (Ascent) - Brian Eno"
        ],
        "World Music": [
          "Chan Chan - Buena Vista Social Club",
          "Mas Que Nada - Sergio Mendes",
          "Desert Rose - Sting ft. Cheb Mami",
          "Orinoco Flow - Enya"
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

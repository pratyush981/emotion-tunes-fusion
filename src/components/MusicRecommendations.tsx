
import { Music } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface MusicRecommendationsProps {
  emotion: string;
}

const MusicRecommendations = ({ emotion }: MusicRecommendationsProps) => {
  const getRecommendations = (emotion: string) => {
    const recommendations = {
      angry: [
        "Heavy Metal Playlist",
        "Rock Classics",
        "Rage Against the Machine",
        "Metallica Hits",
        "Aggressive Beats Mix"
      ],
      sad: [
        "Peaceful Piano",
        "Acoustic Covers",
        "Melancholic Jazz",
        "Soft Rock Ballads",
        "Chill Indie Mix"
      ],
      happy: [
        "Summer Hits",
        "Dance Pop Favorites",
        "Feel Good Classics",
        "Upbeat Party Mix",
        "Happy Beats"
      ],
      neutral: [
        "Indie Mix",
        "Alternative Hits",
        "Classic Rock",
        "Top 40 Hits",
        "Popular Mix"
      ]
    };

    const emotionKey = emotion.toLowerCase() as keyof typeof recommendations;
    return recommendations[emotionKey] || recommendations.neutral;
  };

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700 transform transition-all duration-300 hover:bg-gray-800/70">
      <div className="flex items-center gap-2 mb-6">
        <Music className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-semibold text-white">Music for {emotion || 'You'}</h2>
      </div>
      <div className="space-y-3">
        {getRecommendations(emotion).map((song, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-purple-900/30 text-purple-100 hover:bg-purple-800/40 transition-colors cursor-pointer border border-purple-700/30"
          >
            {song}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MusicRecommendations;

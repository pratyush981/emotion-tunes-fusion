
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
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Music className="w-5 h-5 text-white" />
        <h2 className="text-2xl font-semibold text-white">Music for {emotion || 'You'}</h2>
      </div>
      <div className="space-y-2">
        {getRecommendations(emotion).map((song, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-gray-700/30 text-white hover:bg-gray-700/50 transition-colors"
          >
            {song}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MusicRecommendations;

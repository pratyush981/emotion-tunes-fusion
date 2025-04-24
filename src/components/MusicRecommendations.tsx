
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { music } from 'lucide-react';

interface MusicRecommendationsProps {
  emotion: string;
}

const MusicRecommendations = ({ emotion }: MusicRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // This would be connected to your LastFM API
    const demoRecommendations = [
      "Song 1 by Artist 1",
      "Song 2 by Artist 2",
      "Song 3 by Artist 3",
      "Song 4 by Artist 4",
      "Song 5 by Artist 5"
    ];
    setRecommendations(demoRecommendations);
  }, [emotion]);

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <music className="w-5 h-5 text-white" />
        <h2 className="text-2xl font-semibold text-white">Recommended Music</h2>
      </div>
      <div className="space-y-2">
        {recommendations.map((song, index) => (
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

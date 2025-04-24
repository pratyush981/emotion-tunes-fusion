
import { Gamepad, Film } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ActivityRecommendationsProps {
  emotion: string;
}

const ActivityRecommendations = ({ emotion }: ActivityRecommendationsProps) => {
  const getActivities = (emotion: string) => {
    const activities = {
      angry: {
        games: ["Stardew Valley", "Journey", "Animal Crossing", "Minecraft", "Tetris"],
        movies: ["Inside Out", "The Secret Life of Walter Mitty", "Big Hero 6", "Up", "WALL-E"],
        activities: ["Take a walk in nature", "Deep breathing exercises", "Write in a journal", "Yoga", "Meditation"]
      },
      sad: {
        games: ["Animal Crossing", "Minecraft", "Stardew Valley", "Journey", "Pokemon"],
        movies: ["The Princess Bride", "Spirited Away", "Toy Story", "The Lego Movie", "Paddington"],
        activities: ["Call a friend", "Take a warm bath", "Listen to uplifting podcasts", "Draw or color", "Make tea"]
      },
      happy: {
        games: ["Mario Kart", "Just Dance", "Overcooked", "Fall Guys", "Rocket League"],
        movies: ["La La Land", "The Greatest Showman", "Sing", "Mamma Mia!", "School of Rock"],
        activities: ["Call friends to hang out", "Try a new recipe", "Dance party", "Start a new hobby", "Plan a trip"]
      },
      neutral: {
        games: ["The Sims", "Cities: Skylines", "Civilization", "Two Point Hospital", "Planet Zoo"],
        movies: ["The Grand Budapest Hotel", "Ocean's Eleven", "The Martian", "Hidden Figures", "The Intern"],
        activities: ["Read a book", "Learn something new", "Organize your space", "Try a new recipe", "Take photos"]
      }
    };

    const emotionKey = emotion.toLowerCase() as keyof typeof activities;
    return activities[emotionKey] || activities.neutral;
  };

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Gamepad className="w-5 h-5 text-white" />
            <h2 className="text-2xl font-semibold text-white">Games to Try</h2>
          </div>
          <div className="space-y-2">
            {getActivities(emotion).games.map((game, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-700/30 text-white hover:bg-gray-700/50 transition-colors">
                {game}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Film className="w-5 h-5 text-white" />
            <h2 className="text-2xl font-semibold text-white">Movies to Watch</h2>
          </div>
          <div className="space-y-2">
            {getActivities(emotion).movies.map((movie, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-700/30 text-white hover:bg-gray-700/50 transition-colors">
                {movie}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Activities</h2>
          <div className="space-y-2">
            {getActivities(emotion).activities.map((activity, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-700/30 text-white hover:bg-gray-700/50 transition-colors">
                {activity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivityRecommendations;

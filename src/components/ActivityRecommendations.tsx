
import { useState } from 'react';
import { Gamepad, Film } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ActivityRecommendationsProps {
  emotion: string;
}

const ActivityRecommendations = ({ emotion }: ActivityRecommendationsProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const getActivities = (emotion: string) => {
    const activities = {
      angry: {
        games: {
          "Peaceful Games": ["Stardew Valley", "Journey", "Flower", "ABZU"],
          "Creative Games": ["Minecraft", "Animal Crossing", "Terraria", "Cities: Skylines"],
          "Puzzle Games": ["Tetris Effect", "Portal", "Baba Is You", "The Witness"]
        },
        movies: {
          "Comedy": ["The Grand Budapest Hotel", "Shaun of the Dead", "The Big Lebowski", "Groundhog Day"],
          "Feel-Good": ["Up", "WALL-E", "The Secret Life of Walter Mitty", "Big Hero 6"],
          "Adventure": ["The Princess Bride", "The Life of Pi", "Hunt for the Wilderpeople", "Paddington"]
        },
        activities: {
          "Physical": ["Take a walk in nature", "Do yoga", "Go for a run", "Practice deep breathing"],
          "Creative": ["Paint or draw", "Write in a journal", "Play an instrument", "Garden"],
          "Relaxing": ["Meditation", "Take a warm bath", "Make tea", "Read a book"]
        }
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

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderSection = (title: string, icon: React.ReactNode, content: Record<string, string[]>) => (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {Object.entries(content).map(([category, items], index) => (
          <div key={index} className="space-y-2">
            <div
              onClick={() => toggleSection(`${title}-${category}`)}
              className="p-4 rounded-lg bg-purple-900/30 text-purple-100 hover:bg-purple-800/40 transition-colors cursor-pointer border border-purple-700/30 flex justify-between items-center"
            >
              <span>{category}</span>
              <span>{expandedSection === `${title}-${category}` ? '▼' : '▶'}</span>
            </div>
            {expandedSection === `${title}-${category}` && (
              <div className="pl-6 space-y-2">
                {items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-3 rounded-lg bg-purple-900/20 text-purple-200 border-l-2 border-purple-500"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const activities = getActivities(emotion);

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="space-y-6">
        {renderSection("Games", <Gamepad className="w-5 h-5 text-purple-400" />, activities.games)}
        {renderSection("Movies", <Film className="w-5 h-5 text-purple-400" />, activities.movies)}
        {renderSection("Activities", <Activity className="w-5 h-5 text-purple-400" />, activities.activities)}
      </div>
    </Card>
  );
};

export default ActivityRecommendations;


import { useState } from 'react';
import { Gamepad, Film, Activity } from 'lucide-react';
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
        games: {
          "Comfort Games": ["Animal Crossing", "Minecraft", "Stardew Valley", "Journey"],
          "Story-Rich": ["Life is Strange", "To The Moon", "What Remains of Edith Finch", "Spiritfarer"],
          "Cozy Games": ["Pokemon", "Unpacking", "A Short Hike", "Coffee Talk"]
        },
        movies: {
          "Feel-Good": ["The Princess Bride", "Spirited Away", "Toy Story", "The Lego Movie"],
          "Inspiring": ["Good Will Hunting", "The Pursuit of Happyness", "Soul", "Inside Out"],
          "Heartwarming": ["Paddington", "CODA", "Up", "Little Miss Sunshine"]
        },
        activities: {
          "Social": ["Call a friend", "Join a support group", "Write a letter", "Share feelings"],
          "Relaxing": ["Take a warm bath", "Make tea", "Listen to calming music", "Deep breathing"],
          "Creative": ["Draw or color", "Listen to uplifting podcasts", "Journal", "Create a playlist"]
        }
      },
      happy: {
        games: {
          "Multiplayer Fun": ["Mario Kart", "Just Dance", "Overcooked", "Fall Guys"],
          "Adventure": ["Super Mario Odyssey", "The Legend of Zelda", "Rocket League", "Splatoon"],
          "Party Games": ["Mario Party", "Jackbox Party Pack", "Among Us", "Ultimate Chicken Horse"]
        },
        movies: {
          "Musical": ["La La Land", "The Greatest Showman", "Sing", "Mamma Mia!"],
          "Comedy": ["School of Rock", "The Hangover", "Bridesmaids", "21 Jump Street"],
          "Adventure": ["Spider-Man: Into the Spider-Verse", "Guardians of the Galaxy", "Jumanji", "Pirates of the Caribbean"]
        },
        activities: {
          "Social": ["Call friends to hang out", "Host a game night", "Dance party", "Karaoke night"],
          "Creative": ["Try a new recipe", "Start a hobby project", "Learn a dance routine", "Take photos"],
          "Adventurous": ["Plan a trip", "Go hiking", "Try a new restaurant", "Visit a local attraction"]
        }
      },
      neutral: {
        games: {
          "Simulation": ["The Sims", "Cities: Skylines", "Civilization", "Two Point Hospital"],
          "Strategy": ["Age of Empires", "StarCraft", "Factorio", "Civilization VI"],
          "Management": ["Planet Zoo", "Planet Coaster", "RollerCoaster Tycoon", "Game Dev Tycoon"]
        },
        movies: {
          "Drama": ["The Grand Budapest Hotel", "Ocean's Eleven", "The Martian", "Hidden Figures"],
          "Documentary": ["My Octopus Teacher", "Free Solo", "The Social Dilemma", "The Last Dance"],
          "Sci-Fi": ["Arrival", "Interstellar", "The Martian", "Her"]
        },
        activities: {
          "Learning": ["Read a book", "Learn something new", "Take an online course", "Listen to a podcast"],
          "Productive": ["Organize your space", "Try a new recipe", "Start a project", "Plan your week"],
          "Exploration": ["Take photos", "Visit a museum", "Explore local shops", "Try a new coffee shop"]
        }
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

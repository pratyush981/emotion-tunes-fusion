
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface EmotionDisplayProps {
  emotion: string;
}

const EmotionDisplay = ({ emotion }: EmotionDisplayProps) => {
  const [animatedEmotion, setAnimatedEmotion] = useState(emotion);

  useEffect(() => {
    setAnimatedEmotion(emotion);
  }, [emotion]);

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4">Camera-Based Emotion</h2>
      <div className="text-4xl font-bold text-center p-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105">
        {animatedEmotion || 'Detecting...'}
      </div>
    </Card>
  );
};

export default EmotionDisplay;

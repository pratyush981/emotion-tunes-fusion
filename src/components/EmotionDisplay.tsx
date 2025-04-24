
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
      <h2 className="text-2xl font-semibold text-white mb-4">Current Emotion</h2>
      <div className="text-4xl font-bold text-center p-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        {animatedEmotion || 'Detecting...'}
      </div>
    </Card>
  );
};

export default EmotionDisplay;

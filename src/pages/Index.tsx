
import { useEffect, useRef, useState } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import VideoFeed from '@/components/VideoFeed';
import EmotionDisplay from '@/components/EmotionDisplay';
import MusicRecommendations from '@/components/MusicRecommendations';

const Index = () => {
  const [currentEmotion, setCurrentEmotion] = useState<string>('');
  const [isMicActive, setIsMicActive] = useState(false);
  const [voiceText, setVoiceText] = useState('');
  const [sentiment, setSentiment] = useState<string>('');

  const toggleMicrophone = () => {
    setIsMicActive(!isMicActive);
    // Microphone functionality would be implemented here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Emotion Detection & Music Recommendation
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-4 bg-gray-800/50 border-gray-700">
              <VideoFeed onEmotionDetected={setCurrentEmotion} />
            </Card>
            
            <Card className="p-4 bg-gray-800/50 border-gray-700">
              <div className="flex items-center justify-between">
                <Button
                  onClick={toggleMicrophone}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  {isMicActive ? (
                    <>
                      <MicOff className="w-4 h-4" />
                      Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      Start Listening
                    </>
                  )}
                </Button>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-white" />
                  <span className="text-white">Voice Analysis</span>
                </div>
              </div>
              {voiceText && (
                <div className="mt-4 p-4 bg-gray-700/30 rounded-lg">
                  <p className="text-white">{voiceText}</p>
                </div>
              )}
            </Card>
          </div>

          <div className="space-y-6">
            <EmotionDisplay emotion={currentEmotion} />
            <MusicRecommendations emotion={currentEmotion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

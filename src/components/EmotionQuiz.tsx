
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Frown, Meh } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: {
    text: string;
    emotion: string;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "How would you describe your current energy level?",
    options: [
      { text: "High and excited", emotion: "happy" },
      { text: "Low and drained", emotion: "sad" },
      { text: "Balanced and steady", emotion: "neutral" }
    ]
  },
  {
    question: "How are you feeling about your current situation?",
    options: [
      { text: "Frustrated or upset", emotion: "angry" },
      { text: "Content and peaceful", emotion: "happy" },
      { text: "Worried or anxious", emotion: "sad" }
    ]
  },
  {
    question: "What kind of music do you want to listen to right now?",
    options: [
      { text: "Upbeat and energetic", emotion: "happy" },
      { text: "Calm and soothing", emotion: "neutral" },
      { text: "Emotional and deep", emotion: "sad" }
    ]
  },
  {
    question: "How do you feel about socializing at the moment?",
    options: [
      { text: "Want to meet people", emotion: "happy" },
      { text: "Prefer being alone", emotion: "sad" },
      { text: "Open to either", emotion: "neutral" }
    ]
  },
  {
    question: "What's your current stress level?",
    options: [
      { text: "Very stressed", emotion: "angry" },
      { text: "Feeling peaceful", emotion: "happy" },
      { text: "Somewhat tense", emotion: "neutral" }
    ]
  }
];

interface EmotionQuizProps {
  onEmotionDetected: (emotion: string) => void;
}

const EmotionQuiz = ({ onEmotionDetected }: EmotionQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [quizEmotion, setQuizEmotion] = useState<string>('');

  const handleAnswer = (emotion: string) => {
    const newAnswers = [...answers, emotion];
    if (currentQuestion < quizQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setIsComplete(true);
      const finalEmotion = determineFinalEmotion(newAnswers);
      setQuizEmotion(finalEmotion);
      onEmotionDetected(finalEmotion);
    }
  };

  const determineFinalEmotion = (emotionAnswers: string[]): string => {
    const emotionCounts = emotionAnswers.reduce((acc: { [key: string]: number }, emotion) => {
      acc[emotion] = (acc[emotion] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(emotionCounts).reduce((a, b) => 
      emotionCounts[a] > emotionCounts[b[0]] ? a : b[0]
    , Object.keys(emotionCounts)[0]);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-2xl font-semibold text-white mb-6">Emotion Quiz</h2>
        {!isComplete ? (
          <div className="space-y-6">
            <p className="text-xl text-purple-300 mb-4 font-medium">
              {quizQuestions[currentQuestion].question}
            </p>
            <div className="grid gap-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center justify-start gap-3 p-4 text-lg font-medium bg-gray-700/30 text-white hover:bg-purple-600/30 hover:text-purple-200 transition-all"
                  onClick={() => handleAnswer(option.emotion)}
                >
                  {option.emotion === 'happy' && <Smile className="w-5 h-5 text-green-400" />}
                  {option.emotion === 'sad' && <Frown className="w-5 h-5 text-blue-400" />}
                  {option.emotion === 'neutral' && <Meh className="w-5 h-5 text-yellow-400" />}
                  {option.text}
                </Button>
              ))}
            </div>
            <p className="text-sm text-purple-300 mt-4">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-purple-300 mb-4 text-lg">Quiz completed!</p>
            <Button 
              onClick={restartQuiz} 
              variant="outline" 
              className="text-purple-200 hover:bg-purple-600/30 hover:text-purple-100"
            >
              Take Quiz Again
            </Button>
          </div>
        )}
      </Card>
      
      {isComplete && (
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Quiz Results</h3>
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-purple-200 text-lg">
              Based on your answers, you're feeling: <span className="font-bold text-purple-300">{quizEmotion}</span>
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default EmotionQuiz;

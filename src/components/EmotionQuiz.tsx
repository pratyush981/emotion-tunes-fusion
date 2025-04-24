
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
    question: "What kind of activity appeals to you right now?",
    options: [
      { text: "Something energetic", emotion: "happy" },
      { text: "Something calming", emotion: "neutral" },
      { text: "Nothing at all", emotion: "sad" }
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

  const handleAnswer = (emotion: string) => {
    const newAnswers = [...answers, emotion];
    if (currentQuestion < quizQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setIsComplete(true);
      const finalEmotion = determineFinalEmotion(newAnswers);
      onEmotionDetected(finalEmotion);
    }
  };

  const determineFinalEmotion = (emotionAnswers: string[]): string => {
    const emotionCount: { [key: string]: number } = {};
    emotionAnswers.forEach(emotion => {
      emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });
    return Object.entries(emotionCount).reduce((a, b) => 
      emotionCount[a] > emotionCount[b[0]] ? a : b[0]
    );
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
  };

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-6">Emotion Quiz</h2>
      {!isComplete ? (
        <div className="space-y-6">
          <p className="text-lg text-white mb-4">
            {quizQuestions[currentQuestion].question}
          </p>
          <div className="grid gap-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center justify-start gap-3 p-4 text-white hover:bg-gray-700/50"
                onClick={() => handleAnswer(option.emotion)}
              >
                {option.emotion === 'happy' && <Smile className="w-5 h-5" />}
                {option.emotion === 'sad' && <Frown className="w-5 h-5" />}
                {option.emotion === 'neutral' && <Meh className="w-5 h-5" />}
                {option.text}
              </Button>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-white mb-4">Quiz completed!</p>
          <Button onClick={restartQuiz} variant="outline" className="text-white">
            Take Quiz Again
          </Button>
        </div>
      )}
    </Card>
  );
};

export default EmotionQuiz;

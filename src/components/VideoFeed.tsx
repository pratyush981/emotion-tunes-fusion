
import { useEffect, useRef } from 'react';

interface VideoFeedProps {
  onEmotionDetected: (emotion: string) => void;
}

const VideoFeed = ({ onEmotionDetected }: VideoFeedProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    startVideo();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        autoPlay
        playsInline
        muted
      />
    </div>
  );
};

export default VideoFeed;

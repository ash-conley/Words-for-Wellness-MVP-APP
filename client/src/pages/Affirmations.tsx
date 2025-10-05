import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCwIcon, HeartIcon } from "lucide-react";

const affirmations = [
  "I am worthy of love and respect.",
  "I trust myself to make the right decisions.",
  "I am capable of achieving my goals.",
  "I deserve peace and happiness.",
  "I am growing and learning every day.",
  "I choose to focus on what I can control.",
  "I am enough, exactly as I am.",
  "I release what no longer serves me.",
  "I am resilient and strong.",
  "I embrace my journey with kindness.",
];

export default function Affirmations() {
  const [currentAffirmation, setCurrentAffirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );

  const refreshAffirmation = () => {
    const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setCurrentAffirmation(newAffirmation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pb-24 flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">Daily Affirmation</h1>

        <Card className="bg-gradient-to-br from-lavender-100 to-purple-100 border-none shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <p className="text-2xl font-medium text-gray-800 leading-relaxed">
              {currentAffirmation}
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button
            onClick={refreshAffirmation}
            className="flex-1 bg-white/60 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full py-6 text-base font-medium shadow-md border-none"
          >
            <RefreshCwIcon className="w-5 h-5 mr-2" />
            Refresh
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white rounded-full py-6 text-base font-medium shadow-md">
            <HeartIcon className="w-5 h-5 mr-2" />
            Save to Word Bank
          </Button>
        </div>
      </div>
    </div>
  );
}

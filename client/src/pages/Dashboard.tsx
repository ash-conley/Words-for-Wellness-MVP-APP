import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const moodEmojis = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😰", label: "Stressed" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😴", label: "Tired" },
  { emoji: "🥳", label: "Excited" },
  { emoji: "😕", label: "Confused" },
];

const prompts = [
  "What are three things you're grateful for today?",
  "Describe a moment that made you smile recently.",
  "What's something you learned about yourself this week?",
  "Write about a challenge you overcame today.",
  "What would you like to let go of?",
];

const quotes = [
  "Be kind to yourself. You're doing better than you think.",
  "Every day is a new beginning. Take a deep breath and start again.",
  "Your mental health is a priority. Don't feel guilty for taking care of yourself.",
  "Progress, not perfection.",
  "You are enough, exactly as you are.",
];

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [promptOfDay] = useState(prompts[Math.floor(Math.random() * prompts.length)]);
  const [quoteOfDay] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pb-24">
      <header className="p-6 flex justify-between items-center">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>

      <main className="px-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome back, <span className="text-purple-400">Sarah</span>
          </h1>
        </div>

        <Card className="bg-white/60 backdrop-blur-sm border-none shadow-lg rounded-3xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-medium text-gray-700">How are you feeling today?</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {moodEmojis.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all ${
                    selectedMood === mood.label
                      ? "bg-gradient-to-br from-purple-300 to-pink-300 scale-110"
                      : "bg-white/80 hover:bg-white"
                  }`}
                >
                  {mood.emoji}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-lavender-100 to-purple-100 border-none shadow-lg rounded-3xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-medium text-gray-700">Prompt of the Day</h2>
            <p className="text-gray-600 leading-relaxed">{promptOfDay}</p>
            <Button
              onClick={() => setLocation("/journal")}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white rounded-full py-6 text-base font-medium shadow-md"
            >
              Write Now
            </Button>
          </CardContent>
        </Card>

        <div className="text-center py-4">
          <p className="text-gray-500 italic text-sm leading-relaxed max-w-md mx-auto">
            "{quoteOfDay}"
          </p>
        </div>
      </main>
    </div>
  );
}

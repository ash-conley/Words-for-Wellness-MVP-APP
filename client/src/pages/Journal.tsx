import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeftIcon } from "lucide-react";
import { useLocation } from "wouter";

const guidedPrompts = [
  "What are three things you're grateful for today?",
  "Describe a moment that made you smile recently.",
  "What's something you learned about yourself this week?",
];

export default function Journal() {
  const [, setLocation] = useLocation();
  const [freeWriteText, setFreeWriteText] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [promptResponse, setPromptResponse] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pb-24">
      <header className="p-6 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLocation("/")}
          className="text-gray-600"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-semibold text-gray-800">Journal</h1>
      </header>

      <main className="px-6">
        <Tabs defaultValue="guided" className="w-full">
          <TabsList className="w-full bg-white/60 backdrop-blur-sm rounded-full p-1 mb-6">
            <TabsTrigger
              value="guided"
              className="flex-1 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-pink-400 data-[state=active]:text-white"
            >
              Guided
            </TabsTrigger>
            <TabsTrigger
              value="freewrite"
              className="flex-1 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-pink-400 data-[state=active]:text-white"
            >
              Free Write
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guided" className="space-y-4">
            <p className="text-gray-600 text-sm mb-4">Choose a prompt to get started:</p>
            {guidedPrompts.map((prompt, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all border-none shadow-md rounded-3xl overflow-hidden ${
                  selectedPrompt === index
                    ? "bg-gradient-to-br from-purple-100 to-pink-100"
                    : "bg-white/60 backdrop-blur-sm hover:bg-white/80"
                }`}
                onClick={() => setSelectedPrompt(index)}
              >
                <CardContent className="p-5">
                  <p className="text-gray-700">{prompt}</p>
                </CardContent>
              </Card>
            ))}

            {selectedPrompt !== null && (
              <div className="mt-6 space-y-4">
                <Textarea
                  placeholder="Write your thoughts here..."
                  value={promptResponse}
                  onChange={(e) => setPromptResponse(e.target.value)}
                  className="min-h-[200px] bg-white/60 backdrop-blur-sm border-none rounded-3xl p-6 resize-none focus-visible:ring-2 focus-visible:ring-purple-300"
                />
                <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white rounded-full py-6 text-base font-medium shadow-md">
                  Save Entry
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="freewrite" className="space-y-4">
            <Textarea
              placeholder="What's on your mind?"
              value={freeWriteText}
              onChange={(e) => setFreeWriteText(e.target.value)}
              className="min-h-[400px] bg-white/60 backdrop-blur-sm border-none rounded-3xl p-6 resize-none focus-visible:ring-2 focus-visible:ring-purple-300 text-gray-700"
            />
            <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white rounded-full py-6 text-base font-medium shadow-md">
              Save Entry
            </Button>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

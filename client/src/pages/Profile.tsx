import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronRightIcon,
  UserIcon,
  ShieldIcon,
  DatabaseIcon,
  BellIcon,
  PaletteIcon,
  LogOutIcon,
  EditIcon,
} from "lucide-react";
import { useUser } from "@/lib/UserContext";

const settingsItems = [
  { icon: UserIcon, label: "Account", description: "Manage your profile" },
  { icon: ShieldIcon, label: "Security", description: "Password & privacy" },
  { icon: DatabaseIcon, label: "Data & Storage", description: "Manage your data" },
  { icon: BellIcon, label: "Notifications", description: "Configure alerts" },
  { icon: PaletteIcon, label: "Theme", description: "Customize appearance" },
];

export default function Profile() {
  const { userName, setUserName } = useUser();
  const [editName, setEditName] = useState(userName);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSaveName = () => {
    setUserName(editName);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 pb-24">
      <header className="p-6">
        <h1 className="text-2xl font-heading font-semibold text-gray-800">Profile</h1>
      </header>

      <main className="px-6 space-y-6">
        <Card className="bg-white/60 backdrop-blur-sm border-none shadow-lg rounded-3xl overflow-hidden">
          <CardContent className="p-6 flex items-center gap-4">
            <Avatar className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-400">
              <AvatarFallback className="text-white text-2xl font-heading">{userName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-heading font-semibold text-gray-800">{userName}</h2>
              <p className="text-gray-500 text-sm">sarah.johnson@email.com</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-teal-600">
                  <EditIcon className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white/95 backdrop-blur-sm border-none rounded-3xl">
                <DialogHeader>
                  <DialogTitle className="font-heading text-xl">Edit Name</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Your Name</Label>
                    <Input
                      id="name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="bg-white/60 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-teal-300"
                    />
                  </div>
                  <Button
                    onClick={handleSaveName}
                    className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white rounded-full py-6 text-base font-medium shadow-md"
                  >
                    Save Changes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <h3 className="text-lg font-heading font-medium text-gray-700 px-2">Settings</h3>
          {settingsItems.map((item) => (
            <Card
              key={item.label}
              className="bg-white/60 backdrop-blur-sm border-none shadow-md rounded-3xl overflow-hidden cursor-pointer hover:bg-white/80 transition-colors"
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-full bg-red-100 hover:bg-red-200 text-red-600 rounded-full py-6 text-base font-medium shadow-md border-none">
          <LogOutIcon className="w-5 h-5 mr-2" />
          Sign Out
        </Button>
      </main>
    </div>
  );
}

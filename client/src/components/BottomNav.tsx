import { useLocation } from "wouter";
import { HomeIcon, BookOpenIcon, SparklesIcon, UserIcon } from "lucide-react";

export default function BottomNav() {
  const [location, setLocation] = useLocation();

  const navItems = [
    { path: "/", icon: HomeIcon, label: "Home" },
    { path: "/journal", icon: BookOpenIcon, label: "Journal" },
    { path: "/affirmations", icon: SparklesIcon, label: "Affirmations" },
    { path: "/profile", icon: UserIcon, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-purple-100 shadow-lg">
      <div className="flex items-center justify-around px-6 py-3 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => setLocation(item.path)}
              className="flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all"
            >
              <div
                className={`p-2 rounded-full transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-purple-400 to-pink-400 text-white"
                    : "text-gray-400"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`text-xs font-medium ${
                  isActive ? "text-purple-600" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, BarChart3, Code, Palette, Database, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const jobCategories = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern web applications with React, Vue, Angular",
    icon: Code,
    openings: "150+ openings",
    skills: ["React", "TypeScript", "Node.js"],
    salary: "₹8-15 LPA"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Create beautiful and intuitive user experiences",
    icon: Palette,
    openings: "85+ openings",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    salary: "₹6-12 LPA"
  },
  {
    id: 3,
    title: "Data Science",
    description: "Analyze data and build machine learning models",
    icon: Database,
    openings: "120+ openings",
    skills: ["Python", "SQL", "Machine Learning"],
    salary: "₹10-20 LPA"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    description: "Manage infrastructure and deployment pipelines",
    icon: Shield,
    openings: "95+ openings",
    skills: ["AWS", "Docker", "Kubernetes"],
    salary: "₹12-18 LPA"
  },
  {
    id: 5,
    title: "Mobile Development",
    description: "Build native and cross-platform mobile apps",
    icon: Zap,
    openings: "110+ openings",
    skills: ["React Native", "Flutter", "Swift"],
    salary: "₹9-16 LPA"
  }
];

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Header with dark mode toggle */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold text-slate-800 dark:text-slate-100">Ignite Track</span>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="rounded-full"
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </header>

      {/* Main Analytics Section */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Welcome Section with Box */}
        <div className="mb-16">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl rounded-2xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                    Welcome to{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Ignite Track
                    </span>
                  </h1>
                  <p className="text-2xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
                    Ignite & grow
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="flex-1 relative">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.5K+</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Active Users</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Success Rate</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">15K+</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Jobs Tracked</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Explore Jobs Section */}
        <div>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Explore Jobs
          </h2>
          
          {/* Scrollable Job Cards */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 px-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
              {jobCategories.map((job) => {
                const IconComponent = job.icon;
                return (
                  <Card 
                    key={job.id}
                    className="min-w-[320px] lg:min-w-[380px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg rounded-xl"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                            {job.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {job.openings}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                          Key Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <Badge 
                              key={index}
                              variant="outline" 
                              className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                          {job.salary}
                        </span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                        >
                          View Jobs
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Gradient fade for scroll indication */}
            <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

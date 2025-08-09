import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Moon,
  Sun,
  BarChart3,
  Code,
  Palette,
  Database,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Smartphone,
  Brain,
  Eye,
  Home,
  TrendingUp,
  Briefcase,
  Users,
  Bell,
  User,
  LogIn,
  UserPlus,
  X,
  Filter,
  Search,
  MapPin,
  DollarSign,
  Building,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Plus,
  Calendar,
  Clock,
  GraduationCap,
  Award,
  Globe,
  Mail,
  Phone,
  MapPinIcon,
  PlusCircle,
  Send,
  MoreHorizontal,
  ThumbsUp,
  UserCheck,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const jobCategories = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    description:
      "Build user-facing features for Google Search and Gmail using React",
    icon: Code,
    location: "Bangalore, India",
    skills: ["React", "TypeScript", "JavaScript"],
    salary: "₹18-25 LPA",
    experience: "2-4 years",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Meta",
    description: "Develop scalable web applications for Facebook and Instagram",
    icon: Code,
    location: "Hyderabad, India",
    skills: ["React", "Node.js", "GraphQL"],
    salary: "₹22-30 LPA",
    experience: "3-5 years",
  },
  {
    id: 3,
    title: "Software Developer",
    company: "TCS",
    description: "Work on enterprise web applications for global clients",
    icon: Code,
    location: "Pune, India",
    skills: ["Angular", "Java", "Spring"],
    salary: "₹8-12 LPA",
    experience: "1-3 years",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Adobe",
    description: "Design intuitive interfaces for Creative Cloud applications",
    icon: Palette,
    location: "Noida, India",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    salary: "₹12-18 LPA",
    experience: "2-4 years",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Uber",
    description: "Create seamless rider and driver experiences for Uber app",
    icon: Palette,
    location: "Bangalore, India",
    skills: ["Sketch", "Figma", "User Research"],
    salary: "₹15-22 LPA",
    experience: "3-6 years",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Netflix",
    description: "Build recommendation algorithms and analyze viewing patterns",
    icon: Database,
    location: "Mumbai, India",
    skills: ["Python", "Machine Learning", "SQL"],
    salary: "₹20-28 LPA",
    experience: "3-5 years",
  },
  {
    id: 7,
    title: "ML Engineer",
    company: "Amazon",
    description:
      "Develop machine learning models for Alexa and recommendation systems",
    icon: Database,
    location: "Chennai, India",
    skills: ["Python", "TensorFlow", "AWS"],
    salary: "₹18-25 LPA",
    experience: "2-4 years",
  },
  {
    id: 8,
    title: "DevOps Engineer",
    company: "Microsoft",
    description: "Manage Azure cloud infrastructure and deployment pipelines",
    icon: Shield,
    location: "Hyderabad, India",
    skills: ["Azure", "Docker", "Kubernetes"],
    salary: "₹16-22 LPA",
    experience: "2-5 years",
  },
];

const internshipCategories = [
  {
    id: 1,
    title: "Frontend Development Intern",
    company: "Flipkart",
    description:
      "Work on e-commerce platform features using React and learn from senior developers",
    icon: Code,
    location: "Bangalore, India",
    skills: ["HTML", "CSS", "JavaScript"],
    duration: "6 months",
    stipend: "₹25,000/month",
  },
  {
    id: 2,
    title: "React Developer Intern",
    company: "Paytm",
    description:
      "Build payment interface components and contribute to mobile-first web applications",
    icon: Code,
    location: "Noida, India",
    skills: ["React", "JavaScript", "CSS"],
    duration: "4 months",
    stipend: "₹30,000/month",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Zomato",
    description:
      "Design user-friendly interfaces for food delivery app and conduct user research",
    icon: Palette,
    location: "Gurgaon, India",
    skills: ["Figma", "Sketch", "Prototyping"],
    duration: "5 months",
    stipend: "₹20,000/month",
  },
  {
    id: 4,
    title: "Product Design Intern",
    company: "BYJU'S",
    description:
      "Create engaging educational interfaces and improve student learning experience",
    icon: Palette,
    location: "Bangalore, India",
    skills: ["Figma", "User Research", "Wireframing"],
    duration: "6 months",
    stipend: "₹22,000/month",
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "Swiggy",
    description:
      "Analyze food delivery data, create dashboards and support business decisions",
    icon: Database,
    location: "Bangalore, India",
    skills: ["Excel", "Python", "SQL"],
    duration: "4 months",
    stipend: "₹28,000/month",
  },
  {
    id: 6,
    title: "Business Analytics Intern",
    company: "Ola",
    description:
      "Work with ride-sharing data to optimize routes and improve user experience",
    icon: Database,
    location: "Bangalore, India",
    skills: ["Python", "Tableau", "Statistics"],
    duration: "5 months",
    stipend: "₹26,000/month",
  },
  {
    id: 7,
    title: "Digital Marketing Intern",
    company: "Myntra",
    description:
      "Create social media campaigns and analyze fashion e-commerce marketing trends",
    icon: Shield,
    location: "Bangalore, India",
    skills: ["Google Ads", "SEO", "Content Marketing"],
    duration: "3 months",
    stipend: "₹18,000/month",
  },
  {
    id: 8,
    title: "Content Marketing Intern",
    company: "Nykaa",
    description:
      "Develop beauty content strategies and manage social media presence",
    icon: Shield,
    location: "Mumbai, India",
    skills: ["Content Writing", "Social Media", "Canva"],
    duration: "4 months",
    stipend: "₹20,000/month",
  },
];

const courseCategories = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    provider: "Udemy",
    description:
      "Master HTML, CSS, JavaScript, React, Node.js and build 15+ projects",
    icon: Code,
    rating: "4.8",
    students: "45,000+ enrolled",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    duration: "40 hours",
    price: "₹3,499",
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "React Native Mobile App Development",
    provider: "Coursera",
    description:
      "Build cross-platform mobile apps for iOS and Android using React Native",
    icon: Smartphone,
    rating: "4.7",
    students: "28,000+ enrolled",
    skills: ["React Native", "JavaScript", "Mobile Development"],
    duration: "35 hours",
    price: "₹2,999",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    provider: "Figma Academy",
    description:
      "Learn design principles, user research, prototyping and create stunning interfaces",
    icon: Palette,
    rating: "4.9",
    students: "32,000+ enrolled",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    duration: "25 hours",
    price: "₹2,799",
    level: "Beginner to Intermediate",
  },
  {
    id: 4,
    title: "Data Science & Machine Learning",
    provider: "edX",
    description:
      "Master Python, statistics, ML algorithms and work on real-world projects",
    icon: Database,
    rating: "4.6",
    students: "50,000+ enrolled",
    skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
    duration: "60 hours",
    price: "₹4,999",
    level: "Intermediate to Advanced",
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    provider: "AWS Training",
    description:
      "Learn cloud architecture, deployment, and become AWS certified",
    icon: Shield,
    rating: "4.8",
    students: "22,000+ enrolled",
    skills: ["AWS", "Cloud Computing", "DevOps", "Docker"],
    duration: "45 hours",
    price: "₹5,499",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Artificial Intelligence Fundamentals",
    provider: "MIT OpenCourseWare",
    description:
      "Understand AI concepts, neural networks, and build intelligent systems",
    icon: Brain,
    rating: "4.7",
    students: "38,000+ enrolled",
    skills: ["AI", "Neural Networks", "Deep Learning", "TensorFlow"],
    duration: "50 hours",
    price: "₹6,999",
    level: "Advanced",
  },
];

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{name: string; email: string; avatar?: string} | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([
    {
      id: 1,
      user: { name: "Sarah Chen", avatar: "", role: "Software Engineer at Google" },
      content: "Just completed the React Advanced Course! 🚀 The projects were challenging but so rewarding. Ready to apply these skills in real projects!",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      achievement: "React Developer Certificate"
    },
    {
      id: 2,
      user: { name: "Raj Patel", avatar: "", role: "Full Stack Developer" },
      content: "Started my internship at Microsoft today! Excited to work on Azure cloud services. Thanks to the amazing courses on Ignite Track that prepared me for this opportunity.",
      timestamp: "5 hours ago",
      likes: 45,
      comments: 12,
      image: null,
      achievement: null
    },
    {
      id: 3,
      user: { name: "Priya Sharma", avatar: "", role: "UI/UX Designer" },
      content: "🎉 Just earned my AWS Cloud Practitioner Certification! This opens up so many opportunities in cloud computing. Thank you to everyone who supported my journey!",
      timestamp: "1 day ago",
      likes: 67,
      comments: 15,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      achievement: "AWS Certified Cloud Practitioner"
    },
    {
      id: 4,
      user: { name: "Arjun Kumar", avatar: "", role: "Data Scientist at Netflix" },
      content: "Completed my Machine Learning Specialization from Stanford! 📊 The mathematical concepts were challenging but totally worth it. Ready to build some amazing ML models!",
      timestamp: "2 days ago",
      likes: 89,
      comments: 23,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      achievement: "Machine Learning Specialization"
    },
    {
      id: 5,
      user: { name: "Neha Gupta", avatar: "", role: "Frontend Developer" },
      content: "Just got selected for Google Summer of Code 2024! 🔥 Will be working on open-source projects. Dreams do come true with hard work and persistence!",
      timestamp: "3 days ago",
      likes: 156,
      comments: 34,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      achievement: "Google Summer of Code 2024"
    }
  ]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleGoogleAuth = () => {
    setUser({ name: "Pushkar Das", email: "pushkar@example.com" });
    setIsAuthenticated(true);
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-blue-400/30 dark:bg-blue-300/40 rounded-full animate-twinkle"></div>
          </div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`moving-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <div className="w-0.5 h-0.5 bg-purple-400/40 dark:bg-purple-300/50 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Brand */}
            <div className="flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Ignite Track
              </span>
            </div>

            {/* Center - Navigation Items */}
            <div className="hidden lg:flex items-center gap-6">
              <Button
                variant="ghost"
                onClick={() => setCurrentView("home")}
                className={`flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 ${
                  currentView === "home" ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="font-medium">Home</span>
              </Button>

              <Button
                variant="ghost"
                onClick={() => setCurrentView("tracker")}
                className={`flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  currentView === "tracker" ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Tracker</span>
              </Button>

              <Button
                variant="ghost"
                onClick={() => setCurrentView("jobs")}
                className={`flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  currentView === "jobs" ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span className="font-medium">Jobs / Internships</span>
              </Button>

              <Button
                variant="ghost"
                onClick={() => setCurrentView("feed")}
                className={`flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  currentView === "feed" ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">Feed</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center gap-4">
              {/* Notification Bell */}
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              >
                <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">3</span>
                </div>
              </Button>

              {/* Login/Signup or Profile */}
              {isAuthenticated && user ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              ) : (
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="font-medium">Login</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Welcome to Ignite Track</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="login" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                      </TabsList>
                      <TabsContent value="login" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" placeholder="Enter your password" />
                        </div>
                        <Button className="w-full">Login</Button>
                        <Separator />
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleGoogleAuth}
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Continue with Google
                        </Button>
                      </TabsContent>
                      <TabsContent value="signup" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <Input id="signup-email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <Input id="signup-password" type="password" placeholder="Create a password" />
                        </div>
                        <Button className="w-full">Sign Up</Button>
                        <Separator />
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleGoogleAuth}
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Sign up with Google
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {currentView === "home" && (
          <div>
            {/* Welcome Section with Box */}
            <div className="mb-16">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl rounded-2xl border-0 overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-left">
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                      {isAuthenticated && user ? (
                        <>
                          Welcome{" "}
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {user.name}
                          </span>
                        </>
                      ) : (
                        <>
                          Welcome to{" "}
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Ignite Track
                          </span>
                        </>
                      )}
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
                </CardContent>
              </Card>
            </div>

            {/* Explore Jobs Section */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                  Explore Jobs
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollLeft}
                    className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollRight}
                    className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {jobCategories.map((job) => {
                    const IconComponent = job.icon;
                    return (
                      <Card
                        key={job.id}
                        className="min-w-[320px] lg:min-w-[380px] flex-shrink-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg rounded-xl"
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
                              <div className="flex items-center gap-2 mb-2">
                                <Badge 
                                  className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 cursor-pointer hover:opacity-80"
                                  onClick={() => setSelectedCompany(job.company)}
                                >
                                  {job.company}
                                </Badge>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  {job.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            {job.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                              Required Skills:
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

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                              Experience:{" "}
                              <span className="font-normal text-slate-600 dark:text-slate-300">
                                {job.experience}
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">
                              {job.salary}
                            </span>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                                  >
                                    <Eye className="h-3 w-3 mr-1" />
                                    View Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-xl font-bold">{job.company}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{job.location}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Job Description</h4>
                                      <p className="text-slate-600 dark:text-slate-300">{job.description}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Required Skills</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill, index) => (
                                          <Badge key={index} variant="outline">{skill}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-1">Experience</h4>
                                        <p className="text-slate-600 dark:text-slate-300">{job.experience}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">Salary</h4>
                                        <p className="text-green-600 dark:text-green-400 font-bold">{job.salary}</p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button className="flex-1">Apply Now</Button>
                                      <Button variant="outline" onClick={() => setSelectedCompany(job.company)}>
                                        View Company
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                              >
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Explore Internships Section */}
            <div className="mt-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                  Explore Internships
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const container = document.getElementById("internships-scroll");
                      if (container) {
                        container.scrollBy({ left: -400, behavior: "smooth" });
                      }
                    }}
                    className="rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const container = document.getElementById("internships-scroll");
                      if (container) {
                        container.scrollBy({ left: 400, behavior: "smooth" });
                      }
                    }}
                    className="rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div
                  id="internships-scroll"
                  className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {internshipCategories.map((internship) => {
                    const IconComponent = internship.icon;
                    return (
                      <Card
                        key={internship.id}
                        className="min-w-[320px] lg:min-w-[380px] flex-shrink-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg rounded-xl"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                                {internship.title}
                              </h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge 
                                  className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 cursor-pointer hover:opacity-80"
                                  onClick={() => setSelectedCompany(internship.company)}
                                >
                                  {internship.company}
                                </Badge>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  {internship.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            {internship.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                              Skills You'll Learn:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {internship.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                              Duration:{" "}
                              <span className="font-normal text-slate-600 dark:text-slate-300">
                                {internship.duration}
                              </span>
                            </p>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                              {internship.stipend}
                            </span>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                                  >
                                    <Eye className="h-3 w-3 mr-1" />
                                    View Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl">{internship.title}</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-xl font-bold">{internship.company}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{internship.location}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Internship Description</h4>
                                      <p className="text-slate-600 dark:text-slate-300">{internship.description}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Skills You'll Learn</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {internship.skills.map((skill, index) => (
                                          <Badge key={index} variant="outline">{skill}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-1">Duration</h4>
                                        <p className="text-slate-600 dark:text-slate-300">{internship.duration}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">Stipend</h4>
                                        <p className="text-purple-600 dark:text-purple-400 font-bold">{internship.stipend}</p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button className="flex-1">Apply Now</Button>
                                      <Button variant="outline" onClick={() => setSelectedCompany(internship.company)}>
                                        View Company
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                              >
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Explore Courses Section */}
            <div className="mt-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                  Explore Courses
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const container = document.getElementById("courses-scroll");
                      if (container) {
                        container.scrollBy({ left: -400, behavior: "smooth" });
                      }
                    }}
                    className="rounded-full hover:bg-green-50 dark:hover:bg-green-900/30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const container = document.getElementById("courses-scroll");
                      if (container) {
                        container.scrollBy({ left: 400, behavior: "smooth" });
                      }
                    }}
                    className="rounded-full hover:bg-green-50 dark:hover:bg-green-900/30"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div
                  id="courses-scroll"
                  className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {courseCategories.map((course) => {
                    const IconComponent = course.icon;
                    return (
                      <Card
                        key={course.id}
                        className="min-w-[320px] lg:min-w-[380px] flex-shrink-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg rounded-xl"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                                {course.title}
                              </h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge 
                                  className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 cursor-pointer hover:opacity-80"
                                  onClick={() => setSelectedCompany(course.provider)}
                                >
                                  {course.provider}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs text-amber-500">★</span>
                                  <span className="text-xs text-slate-600 dark:text-slate-400">
                                    {course.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            {course.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                              What You'll Learn:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {course.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold text-slate-700 dark:text-slate-200">
                                Duration:
                              </p>
                              <p className="text-slate-600 dark:text-slate-300">
                                {course.duration}
                              </p>
                            </div>
                            <div>
                              <p className="font-semibold text-slate-700 dark:text-slate-200">
                                Level:
                              </p>
                              <p className="text-slate-600 dark:text-slate-300">
                                {course.level}
                              </p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {course.students}
                            </p>
                          </div>

                          <div className="flex justify-between items-center">
                            <span
                              className={`text-lg font-bold ${
                                course.price === "Free"
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : "text-green-600 dark:text-green-400"
                              }`}
                            >
                              {course.price === "Free" && "🎉 "}
                              {course.price}
                            </span>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30"
                                  >
                                    <Eye className="h-3 w-3 mr-1" />
                                    View Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl">{course.title}</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-xl font-bold">{course.provider}</h3>
                                        <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-amber-500 fill-current" />
                                          <span className="text-slate-600 dark:text-slate-400">{course.rating}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Course Description</h4>
                                      <p className="text-slate-600 dark:text-slate-300">{course.description}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">What You'll Learn</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {course.skills.map((skill, index) => (
                                          <Badge key={index} variant="outline">{skill}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-1">Duration</h4>
                                        <p className="text-slate-600 dark:text-slate-300">{course.duration}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">Level</h4>
                                        <p className="text-slate-600 dark:text-slate-300">{course.level}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">Price</h4>
                                        <p className="text-green-600 dark:text-green-400 font-bold">{course.price}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-sm text-slate-500 dark:text-slate-400">{course.students}</p>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button className="flex-1">
                                        {course.price === "Free" ? "Start Free" : "Enroll Now"}
                                      </Button>
                                      <Button variant="outline" onClick={() => setSelectedCompany(course.provider)}>
                                        View Provider
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                              >
                                {course.price === "Free"
                                  ? "Start Free"
                                  : "Enroll Now"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Jobs Dashboard */}
        {currentView === "jobs" && (
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Jobs & Internships</h1>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  className="pl-10 pr-4 py-2 w-full max-w-md"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filters:</span>
                </div>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="jobs">Jobs Only</SelectItem>
                    <SelectItem value="internships">Internships Only</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="noida">Noida</SelectItem>
                    <SelectItem value="gurgaon">Gurgaon</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Companies</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="meta">Meta</SelectItem>
                    <SelectItem value="netflix">Netflix</SelectItem>
                    <SelectItem value="adobe">Adobe</SelectItem>
                    <SelectItem value="uber">Uber</SelectItem>
                    <SelectItem value="tcs">TCS</SelectItem>
                    <SelectItem value="flipkart">Flipkart</SelectItem>
                    <SelectItem value="paytm">Paytm</SelectItem>
                    <SelectItem value="zomato">Zomato</SelectItem>
                    <SelectItem value="swiggy">Swiggy</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                    <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                    <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (5+ years)</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Salary/Stipend" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranges</SelectItem>
                    <SelectItem value="0-10">0-10 LPA</SelectItem>
                    <SelectItem value="10-20">10-20 LPA</SelectItem>
                    <SelectItem value="20-30">20-30 LPA</SelectItem>
                    <SelectItem value="30+">30+ LPA</SelectItem>
                    <SelectItem value="15k+">₹15k+ /month</SelectItem>
                    <SelectItem value="25k+">₹25k+ /month</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm">
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing {jobCategories.length + internshipCategories.length} opportunities
              </p>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                  <SelectItem value="company">Company A-Z</SelectItem>
                  <SelectItem value="experience">Experience Level</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ScrollArea className="h-[calc(100vh-400px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...jobCategories, ...internshipCategories].map((item) => {
                  const IconComponent = item.icon;
                  const isJob = 'salary' in item;
                  return (
                    <Card key={`${isJob ? 'job' : 'internship'}-${item.id}`} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`${isJob ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'} p-3 rounded-xl`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={isJob ? "default" : "secondary"} className="text-xs">
                                {isJob ? "Job" : "Internship"}
                              </Badge>
                              <span className="text-xs text-slate-500">Posted 2 days ago</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.company} • {item.location}</p>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{item.description}</p>

                        {/* Skills */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {item.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {item.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{item.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className={`font-bold text-lg ${isJob ? 'text-green-600 dark:text-green-400' : 'text-purple-600 dark:text-purple-400'}`}>
                              {isJob ? (item as any).salary : (item as any).stipend}
                            </span>
                            {isJob && (
                              <p className="text-xs text-slate-500">
                                {(item as any).experience}
                              </p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                            <Button size="sm" className={isJob ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}>
                              Apply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        )}

        {/* Feed Page */}
        {currentView === "feed" && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Feed</h1>
            
            {/* Create Post */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea placeholder="What's on your mind? Share your achievements, learning journey, or ask questions..." className="mb-4" />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Add Photo
                        </Button>
                        <Button variant="outline" size="sm">
                          <Award className="h-4 w-4 mr-2" />
                          Achievement
                        </Button>
                      </div>
                      <Button>Post</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {post.user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-100">{post.user.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{post.user.role}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">{post.timestamp}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <UserCheck className="h-4 w-4 mr-2" />
                          Connect
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">{post.content}</p>
                    <div className="flex justify-between items-center border-t pt-4">
                      <div className="flex gap-6">
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Company Profile Modal */}
        {selectedCompany && (
          <Dialog open={!!selectedCompany} onOpenChange={() => setSelectedCompany(null)}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedCompany}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedCompany}</h3>
                    <p className="text-slate-600 dark:text-slate-400">Technology Company</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Global</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {selectedCompany} is a leading technology company focused on innovation and creating products that improve people's lives worldwide.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Open Positions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {jobCategories
                      .filter(job => job.company === selectedCompany)
                      .map(job => (
                        <div key={job.id} className="p-3 border rounded-lg">
                          <h5 className="font-medium">{job.title}</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{job.location}</p>
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">{job.salary}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Follow Company</Button>
                  <Button variant="outline">
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  );
}

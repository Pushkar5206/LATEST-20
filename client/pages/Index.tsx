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
  {
    id: 7,
    title: "Flutter App Development",
    provider: "Google Developers",
    description:
      "Create beautiful native apps for mobile, web, and desktop from a single codebase",
    icon: Smartphone,
    rating: "4.5",
    students: "19,000+ enrolled",
    skills: ["Flutter", "Dart", "Mobile Development", "Firebase"],
    duration: "30 hours",
    price: "₹3,299",
    level: "Beginner to Intermediate",
  },
  {
    id: 8,
    title: "Full Stack JavaScript",
    provider: "FreeCodeCamp",
    description:
      "Master MERN stack development and build production-ready applications",
    icon: Code,
    rating: "4.8",
    students: "65,000+ enrolled",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    duration: "55 hours",
    price: "Free",
    level: "Intermediate to Advanced",
  },
  {
    id: 9,
    title: "Introduction to Programming",
    provider: "Khan Academy",
    description:
      "Learn programming fundamentals with JavaScript and create interactive web pages",
    icon: Code,
    rating: "4.6",
    students: "85,000+ enrolled",
    skills: ["JavaScript", "HTML", "CSS", "Programming Basics"],
    duration: "20 hours",
    price: "Free",
    level: "Beginner",
  },
  {
    id: 10,
    title: "Git & GitHub Essentials",
    provider: "GitHub Learning Lab",
    description: "Master version control and collaboration with Git and GitHub",
    icon: BookOpen,
    rating: "4.7",
    students: "42,000+ enrolled",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    duration: "15 hours",
    price: "Free",
    level: "Beginner",
  },
  {
    id: 11,
    title: "Responsive Web Design",
    provider: "FreeCodeCamp",
    description:
      "Learn HTML, CSS, and responsive design principles to build modern websites",
    icon: Palette,
    rating: "4.9",
    students: "120,000+ enrolled",
    skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "Grid"],
    duration: "30 hours",
    price: "Free",
    level: "Beginner",
  },
  {
    id: 12,
    title: "Python for Everybody",
    provider: "Coursera (University of Michigan)",
    description:
      "Learn Python programming from scratch and data structures fundamentals",
    icon: Database,
    rating: "4.8",
    students: "95,000+ enrolled",
    skills: ["Python", "Data Structures", "Programming", "Problem Solving"],
    duration: "35 hours",
    price: "Free",
    level: "Beginner to Intermediate",
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
      image: null
    },
    {
      id: 2,
      user: { name: "Raj Patel", avatar: "", role: "Full Stack Developer" },
      content: "Started my internship at Microsoft today! Excited to work on Azure cloud services. Thanks to the amazing courses on Ignite Track that prepared me for this opportunity.",
      timestamp: "5 hours ago",
      likes: 45,
      comments: 12,
      image: null
    }
  ]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
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
            <div className="hidden lg:flex items-center gap-8">
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

              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              >
                <Home className="h-4 w-4" />
                <span className="font-medium">Home</span>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Tracker</span>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Briefcase className="h-4 w-4" />
                <span className="font-medium">Jobs / Internships</span>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">Feed</span>
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
                {/* Notification badge */}
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">3</span>
                </div>
              </Button>

              {/* Profile */}
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              >
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </Button>

              {/* Mobile menu toggle - only visible on smaller screens */}
              <div className="lg:hidden flex items-center gap-2">
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
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Hidden by default, can be toggled */}
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="justify-start flex items-center gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              >
                <Home className="h-4 w-4" />
                <span className="font-medium">Home</span>
              </Button>

              <Button
                variant="ghost"
                className="justify-start flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium">Tracker</span>
              </Button>

              <Button
                variant="ghost"
                className="justify-start flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Briefcase className="h-4 w-4" />
                <span className="font-medium">Jobs / Internships</span>
              </Button>

              <Button
                variant="ghost"
                className="justify-start flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">Feed</span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Analytics Section */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Welcome Section with Box */}
        <div className="mb-16">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl rounded-2xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="text-left">
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
            </CardContent>
          </Card>
        </div>

        {/* Explore Jobs Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
              Explore Jobs
            </h2>

            {/* Navigation Buttons */}
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

          {/* Scrollable Job Cards */}
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
                            <Badge className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
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
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
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

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const container =
                    document.getElementById("internships-scroll");
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
                  const container =
                    document.getElementById("internships-scroll");
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

          {/* Scrollable Internship Cards */}
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
                            <Badge className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
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
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
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

            {/* Navigation Buttons */}
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

          {/* Scrollable Course Cards */}
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
                            <Badge className="text-xs bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
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
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
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
      </main>
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
  Check,
  AlertCircle,
  Info,
  Flag,
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
  {
    id: 9,
    title: "Backend Developer",
    company: "Spotify",
    description: "Build scalable backend services for music streaming platform",
    icon: Code,
    location: "Mumbai, India",
    skills: ["Node.js", "MongoDB", "Redis"],
    salary: "₹20-28 LPA",
    experience: "3-5 years",
  },
  {
    id: 10,
    title: "Mobile App Developer",
    company: "WhatsApp",
    description: "Develop mobile applications for messaging platform",
    icon: Smartphone,
    location: "Bangalore, India",
    skills: ["React Native", "Swift", "Kotlin"],
    salary: "₹25-35 LPA",
    experience: "4-6 years",
  },
  {
    id: 11,
    title: "QA Engineer",
    company: "Salesforce",
    description: "Ensure quality of cloud-based CRM solutions",
    icon: Shield,
    location: "Pune, India",
    skills: ["Selenium", "TestNG", "API Testing"],
    salary: "��12-18 LPA",
    experience: "2-4 years",
  },
  {
    id: 12,
    title: "AI/ML Engineer",
    company: "OpenAI",
    description: "Research and develop advanced AI models and applications",
    icon: Brain,
    location: "Bangalore, India",
    skills: ["Python", "PyTorch", "NLP"],
    salary: "₹30-45 LPA",
    experience: "3-6 years",
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
  {
    id: 9,
    title: "Backend Developer Intern",
    company: "Razorpay",
    description:
      "Work on payment gateway APIs and financial technology solutions",
    icon: Code,
    location: "Bangalore, India",
    skills: ["Node.js", "Express", "PostgreSQL"],
    duration: "6 months",
    stipend: "₹35,000/month",
  },
  {
    id: 10,
    title: "Mobile App Intern",
    company: "Dream11",
    description: "Develop fantasy sports mobile applications using Flutter",
    icon: Smartphone,
    location: "Mumbai, India",
    skills: ["Flutter", "Dart", "Firebase"],
    duration: "5 months",
    stipend: "₹28,000/month",
  },
  {
    id: 11,
    title: "DevOps Intern",
    company: "Freshworks",
    description: "Learn cloud infrastructure and CI/CD pipeline management",
    icon: Shield,
    location: "Chennai, India",
    skills: ["AWS", "Jenkins", "Docker"],
    duration: "4 months",
    stipend: "₹25,000/month",
  },
  {
    id: 12,
    title: "AI Research Intern",
    company: "Jio",
    description: "Research machine learning applications in telecommunications",
    icon: Brain,
    location: "Mumbai, India",
    skills: ["Python", "TensorFlow", "Research"],
    duration: "6 months",
    stipend: "₹30,000/month",
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
  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar?: string;
  } | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUpgradePlansOpen, setIsUpgradePlansOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [feedFilter, setFeedFilter] = useState("all");
  const [jobSearchQuery, setJobSearchQuery] = useState("");
  const [feedSearchQuery, setFeedSearchQuery] = useState("");
  const [jobFilters, setJobFilters] = useState({
    type: "all",
    location: "all",
    company: "all",
    experience: "all",
    salary: "all",
  });
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [connections, setConnections] = useState<Set<string>>(new Set());
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [showComments, setShowComments] = useState<Set<number>>(new Set());
  const [selectedItemFeedback, setSelectedItemFeedback] = useState<any>(null);
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [isMessaging, setIsMessaging] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [postsToLoad, setPostsToLoad] = useState(5);
  const [postComments, setPostComments] = useState<{ [key: number]: any[] }>(
    {},
  );

  // Tracker state variables
  const [trackerQuery, setTrackerQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [dailyTasks, setDailyTasks] = useState<any[]>([]);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [currentVerification, setCurrentVerification] = useState<any>(null);
  const [verificationQuestions, setVerificationQuestions] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  // New feature states
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<any>(null);
  const [selectedJobDetail, setSelectedJobDetail] = useState<any>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJobToApply, setSelectedJobToApply] = useState<any>(null);
  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);
  const [taskSearchHistory, setTaskSearchHistory] = useState<any[]>([]);
  const [userMessages, setUserMessages] = useState<any[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("tasks");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedUserToMessage, setSelectedUserToMessage] = useState<any>(null);
  const [messageContent, setMessageContent] = useState("");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "job_application",
      title: "Application Update",
      message:
        "Your application for Frontend Developer at Google has been viewed",
      timestamp: "2 minutes ago",
      read: false,
      icon: Briefcase,
    },
    {
      id: 2,
      type: "course_completion",
      title: "Course Completed",
      message: "Congratulations! You've completed React Advanced Course",
      timestamp: "1 hour ago",
      read: false,
      icon: GraduationCap,
    },
    {
      id: 3,
      type: "connection",
      title: "New Connection",
      message: "Sarah Chen accepted your connection request",
      timestamp: "3 hours ago",
      read: true,
      icon: UserCheck,
    },
    {
      id: 4,
      type: "achievement",
      title: "New Achievement",
      message: "You've earned the 'Course Completion Streak' badge!",
      timestamp: "1 day ago",
      read: true,
      icon: Award,
    },
  ]);
  const [posts, setPosts] = useState<any[]>([
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "",
        role: "Software Engineer at Google",
      },
      content:
        "Just completed the React Advanced Course! 🚀 The projects were challenging but so rewarding. Ready to apply these skills in real projects!",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      achievement: "React Developer Certificate",
    },
    {
      id: 2,
      user: { name: "Raj Patel", avatar: "", role: "Full Stack Developer" },
      content:
        "Started my internship at Microsoft today! Excited to work on Azure cloud services. Thanks to the amazing courses on Ignite Track that prepared me for this opportunity.",
      timestamp: "5 hours ago",
      likes: 45,
      comments: 12,
      image: null,
      achievement: null,
    },
    {
      id: 3,
      user: { name: "Priya Sharma", avatar: "", role: "UI/UX Designer" },
      content:
        "🎉 Just earned my AWS Cloud Practitioner Certification! This opens up so many opportunities in cloud computing. Thank you to everyone who supported my journey!",
      timestamp: "1 day ago",
      likes: 67,
      comments: 15,
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      achievement: "AWS Certified Cloud Practitioner",
    },
    {
      id: 4,
      user: {
        name: "Arjun Kumar",
        avatar: "",
        role: "Data Scientist at Netflix",
      },
      content:
        "Completed my Machine Learning Specialization from Stanford! 📊 The mathematical concepts were challenging but totally worth it. Ready to build some amazing ML models!",
      timestamp: "2 days ago",
      likes: 89,
      comments: 23,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      achievement: "Machine Learning Specialization",
    },
    {
      id: 5,
      user: { name: "Neha Gupta", avatar: "", role: "Frontend Developer" },
      content:
        "Just got selected for Google Summer of Code 2024! 🔥 Will be working on open-source projects. Dreams do come true with hard work and persistence!",
      timestamp: "3 days ago",
      likes: 156,
      comments: 34,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      achievement: "Google Summer of Code 2024",
    },
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

  const markNotificationAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const getUnreadCount = () => {
    return notifications.filter((n) => !n.read).length;
  };

  const toggleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (likedPosts.has(postId)) {
      newLikedPosts.delete(postId);
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, likes: post.likes - 1 } : post,
        ),
      );
    } else {
      newLikedPosts.add(postId);
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post,
        ),
      );
    }
    setLikedPosts(newLikedPosts);
  };

  const toggleComments = (postId: number) => {
    const newShowComments = new Set(showComments);
    if (showComments.has(postId)) {
      newShowComments.delete(postId);
    } else {
      newShowComments.add(postId);
    }
    setShowComments(newShowComments);
  };

  const toggleConnection = (userName: string) => {
    const newConnections = new Set(connections);
    if (connections.has(userName)) {
      newConnections.delete(userName);
    } else {
      newConnections.add(userName);
    }
    setConnections(newConnections);
  };

  const filterJobsAndInternships = () => {
    const allOpportunities = [...jobCategories, ...internshipCategories];

    return allOpportunities.filter((item) => {
      const matchesSearch =
        jobSearchQuery === "" ||
        item.title.toLowerCase().includes(jobSearchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(jobSearchQuery.toLowerCase()) ||
        item.skills.some((skill) =>
          skill.toLowerCase().includes(jobSearchQuery.toLowerCase()),
        );

      const isJob = "salary" in item;
      const matchesType =
        jobFilters.type === "all" ||
        (jobFilters.type === "jobs" && isJob) ||
        (jobFilters.type === "internships" && !isJob);

      const matchesLocation =
        jobFilters.location === "all" ||
        item.location.toLowerCase().includes(jobFilters.location.toLowerCase());

      const matchesCompany =
        jobFilters.company === "all" ||
        item.company.toLowerCase().includes(jobFilters.company.toLowerCase());

      // Experience filter for jobs
      const matchesExperience = () => {
        if (jobFilters.experience === "all" || !isJob) return true;
        const experience = (item as any).experience?.toLowerCase() || "";

        switch (jobFilters.experience) {
          case "fresher":
            return experience.includes("0-1") || experience.includes("fresher") || experience.includes("entry");
          case "junior":
            return experience.includes("1-3") || experience.includes("junior");
          case "mid":
            return experience.includes("3-5") || experience.includes("mid");
          case "senior":
            return experience.includes("5+") || experience.includes("senior") || experience.includes("6");
          default:
            return true;
        }
      };

      // Salary/Stipend filter
      const matchesSalary = () => {
        if (jobFilters.salary === "all") return true;

        if (isJob) {
          const salary = (item as any).salary?.toLowerCase() || "";
          switch (jobFilters.salary) {
            case "0-10":
              return salary.includes("8-12") || salary.includes("5-") || salary.includes("6-") || salary.includes("7-") || salary.includes("8-") || salary.includes("9-") || salary.includes("10-");
            case "10-20":
              return salary.includes("12-18") || salary.includes("15-22") || salary.includes("16-22") || salary.includes("18-25");
            case "20-30":
              return salary.includes("20-28") || salary.includes("22-30") || salary.includes("25-35");
            case "30+":
              return salary.includes("30-45") || salary.includes("35+");
            default:
              return true;
          }
        } else {
          const stipend = (item as any).stipend?.toLowerCase() || "";
          switch (jobFilters.salary) {
            case "15k+":
              return parseInt(stipend.replace(/[^\d]/g, '')) >= 15000;
            case "25k+":
              return parseInt(stipend.replace(/[^\d]/g, '')) >= 25000;
            default:
              return true;
          }
        }
      };

      return matchesSearch && matchesType && matchesLocation && matchesCompany && matchesExperience() && matchesSalary();
    });
  };

  const filterPosts = () => {
    let filteredPosts = posts;

    // Apply search filter
    if (feedSearchQuery) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.content.toLowerCase().includes(feedSearchQuery.toLowerCase()) ||
          post.user.name
            .toLowerCase()
            .includes(feedSearchQuery.toLowerCase()) ||
          (post.achievement &&
            post.achievement
              .toLowerCase()
              .includes(feedSearchQuery.toLowerCase())),
      );
    }

    // Apply category filter
    if (feedFilter === "my-posts") {
      filteredPosts = filteredPosts.filter((post) => post.isUserPost);
    } else if (feedFilter === "achievements") {
      filteredPosts = filteredPosts.filter((post) => post.achievement);
    } else if (feedFilter === "job-updates") {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.content.toLowerCase().includes("internship") ||
          post.content.toLowerCase().includes("job"),
      );
    } else if (feedFilter === "courses") {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.content.toLowerCase().includes("course") ||
          post.content.toLowerCase().includes("completed"),
      );
    }

    return filteredPosts;
  };

  const getFeedbackData = (itemId: number, type: string) => {
    // Sample feedback data - in a real app this would come from an API
    return {
      averageRating: 4.2,
      totalReviews: 147,
      reviews: [
        {
          id: 1,
          user: "Sarah Johnson",
          rating: 5,
          comment:
            "Excellent opportunity! Great learning experience and supportive team.",
          date: "2 weeks ago",
          verified: true,
        },
        {
          id: 2,
          user: "Rahul Kumar",
          rating: 4,
          comment:
            "Good experience overall. The work culture is amazing and mentors are very helpful.",
          date: "1 month ago",
          verified: true,
        },
        {
          id: 3,
          user: "Priya Sharma",
          rating: 5,
          comment:
            "Best internship I've done! Learned so much and got hands-on experience.",
          date: "2 months ago",
          verified: false,
        },
      ],
    };
  };

  const loadMorePosts = () => {
    // In a real app, this would fetch more posts from an API
    const newPosts = [
      {
        id: Date.now() + Math.random(),
        user: { name: "New User", avatar: "", role: "Developer" },
        content: "Just started learning React! Excited about this journey 🚀",
        timestamp: "just now",
        likes: 0,
        comments: 0,
        image: null,
        achievement: null,
      },
    ];
    setPosts((prev) => [...prev, ...newPosts]);
    setPostsToLoad((prev) => prev + 5);
  };

  const addComment = (postId: number, comment: string) => {
    const newComment = {
      id: Date.now(),
      user: user?.name || "User",
      content: comment,
      timestamp: "now",
    };

    setPostComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, comments: post.comments + 1 } : post,
      ),
    );
  };

  const deletePost = (postId: number) => {
    const post = posts.find((p) => p.id === postId);
    if (!post) return;

    const previewText =
      post.content.slice(0, 50) + (post.content.length > 50 ? "..." : "");
    const isConfirmed = window.confirm(
      `Are you sure you want to delete this post?\n\n"${previewText}"\n\nThis action cannot be undone.`,
    );

    if (isConfirmed) {
      setPosts((prev) => prev.filter((post) => post.id !== postId));
      setUserPosts((prev) => prev.filter((post) => post.id !== postId));
      setPostComments((prev) => {
        const newComments = { ...prev };
        delete newComments[postId];
        return newComments;
      });
      setShowComments((prev) => {
        const newShowComments = new Set(prev);
        newShowComments.delete(postId);
        return newShowComments;
      });
      setLikedPosts((prev) => {
        const newLikedPosts = new Set(prev);
        newLikedPosts.delete(postId);
        return newLikedPosts;
      });

      // Show success feedback
      setTimeout(() => {
        alert("✅ Post deleted successfully!");
      }, 100);
    }
  };

  const deleteComment = (postId: number, commentId: number) => {
    const comment = postComments[postId]?.find((c) => c.id === commentId);
    if (!comment) return;

    const previewText =
      comment.content.slice(0, 50) + (comment.content.length > 50 ? "..." : "");
    const isConfirmed = window.confirm(
      `Are you sure you want to delete this comment?\n\n"${previewText}"\n\nThis action cannot be undone.`,
    );

    if (isConfirmed) {
      setPostComments((prev) => ({
        ...prev,
        [postId]: (prev[postId] || []).filter(
          (comment) => comment.id !== commentId,
        ),
      }));

      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? { ...post, comments: Math.max(0, post.comments - 1) }
            : post,
        ),
      );

      // Show success feedback
      setTimeout(() => {
        alert("✅ Comment deleted successfully!");
      }, 100);
    }
  };

  const handleImageUpload = (file: File) => {
    // In a real app, this would upload to a cloud service
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setImageUpload(file);
      // Add image URL to post content
    };
    reader.readAsDataURL(file);
  };

  const createPost = () => {
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now(),
      user: {
        name: user?.name || "User",
        avatar: user?.avatar || "",
        role: "Student at Ignite Track",
      },
      content: newPostContent,
      timestamp: "now",
      likes: 0,
      comments: 0,
      image: null,
      achievement: null,
      isUserPost: true,
    };

    setUserPosts((prev) => [newPost, ...prev]);
    setPosts((prev) => [newPost, ...prev]);
    setNewPostContent("");
  };

  // AI Tracker Functions
  const generateAiPlan = async (query: string) => {
    setIsAiLoading(true);
    setTrackerQuery("");

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    let response = "";
    let tasks: any[] = [];
    let suggestedCourses: any[] = [];
    let suggestedJobs: any[] = [];

    // Track search time and date
    const searchTimestamp = new Date();
    const searchRecord = {
      id: Date.now(),
      query,
      timestamp: searchTimestamp,
      date: searchTimestamp.toLocaleDateString(),
      time: searchTimestamp.toLocaleTimeString(),
      day: searchTimestamp.toLocaleDateString('en-US', { weekday: 'long' })
    };

    setTaskSearchHistory(prev => [searchRecord, ...prev]);

    // Extract learning topic from query
    const learningKeywords = ["react", "javascript", "python", "java", "ui/ux", "design", "data science", "machine learning", "web development", "html", "css"];
    const detectedTopic = learningKeywords.find(keyword => query.toLowerCase().includes(keyword));

    // Generate motivational message
    const motivationalMessages = [
      "🌟 You're taking an amazing step towards your goals! Every expert was once a beginner.",
      "💪 Believe in yourself! You have the power to learn anything you set your mind to.",
      "🚀 Great choice! Consistent learning is the key to success. You've got this!",
      "✨ Learning is a journey, not a destination. Enjoy every step of your growth!",
      "🎯 Focus, determination, and practice will lead you to mastery. Keep going!",
      "🌈 Every skill you learn today brings you closer to your dream career!",
      "🔥 Your dedication to learning sets you apart. Success is just around the corner!"
    ];

    const motivation = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    if (query.toLowerCase().includes("learn") || query.toLowerCase().includes("study")) {
      // Generate specific learning details based on topic
      let specificDetails: string[] = [];

      switch (detectedTopic) {
        case "html":
          specificDetails = [
            "Learn basic HTML structure and DOCTYPE",
            "Master HTML tags: div, span, p, h1-h6, img, a",
            "Understand semantic HTML: header, nav, main, article, section, footer",
            "Practice forms: input, textarea, select, button",
            "Learn HTML attributes: id, class, src, href, alt"
          ];
          break;
        case "css":
          specificDetails = [
            "Learn CSS selectors and specificity",
            "Master Box Model: margin, padding, border",
            "Understand Flexbox and Grid layouts",
            "Practice responsive design with media queries",
            "Learn CSS animations and transitions"
          ];
          break;
        case "javascript":
          specificDetails = [
            "Learn variables, data types, and operators",
            "Master functions, scope, and closures",
            "Understand DOM manipulation and events",
            "Practice async/await and Promises",
            "Learn ES6+ features: arrow functions, destructuring, modules"
          ];
          break;
        case "react":
          specificDetails = [
            "Learn JSX syntax and components",
            "Master state and props management",
            "Understand React hooks: useState, useEffect, useContext",
            "Practice component lifecycle and rendering",
            "Learn routing with React Router"
          ];
          break;
        case "python":
          specificDetails = [
            "Learn Python syntax and data structures",
            "Master functions, classes, and modules",
            "Understand file handling and error handling",
            "Practice libraries: NumPy, Pandas, Matplotlib",
            "Learn web frameworks: Flask or Django"
          ];
          break;
        default:
          specificDetails = [
            "Start with fundamental concepts and terminology",
            "Practice hands-on exercises and projects",
            "Join online communities and forums",
            "Build a portfolio showcasing your skills",
            "Stay updated with latest trends and best practices"
          ];
      }

      // Find relevant courses based on the topic
      if (detectedTopic) {
        suggestedCourses = courseCategories.filter(course =>
          course.title.toLowerCase().includes(detectedTopic) ||
          course.skills.some(skill => skill.toLowerCase().includes(detectedTopic)) ||
          (detectedTopic === "web development" && (course.title.includes("Web") || course.skills.includes("React")))
        );

        // Find relevant jobs
        suggestedJobs = jobCategories.filter(job =>
          job.title.toLowerCase().includes(detectedTopic) ||
          job.skills.some(skill => skill.toLowerCase().includes(detectedTopic)) ||
          (detectedTopic === "web development" && job.title.includes("Developer"))
        ).slice(0, 3);
      }

      response = `${motivation}\n\nGreat! I've found ${suggestedCourses.length} relevant courses and ${suggestedJobs.length} job opportunities for you. Here's your personalized learning plan:`;

      tasks = [
        {
          id: 1,
          time: "9:00 AM - 10:30 AM",
          task: `Study ${detectedTopic || "your chosen topic"}`,
          description: `Review fundamentals and theory${suggestedCourses.length > 0 ? ` - Start with: ${suggestedCourses[0]?.title}` : ""}`,
          completed: false,
          type: "learning",
          courses: suggestedCourses,
          specificDetails: specificDetails.slice(0, 2)
        },
        {
          id: 2,
          time: "11:00 AM - 12:30 PM",
          task: "Hands-on Practice",
          description: "Work on coding exercises and build projects",
          completed: false,
          type: "practice",
          specificDetails: specificDetails.slice(2, 4)
        },
        {
          id: 3,
          time: "2:00 PM - 3:00 PM",
          task: "Course Progress",
          description: `Complete course modules${suggestedCourses.length > 0 ? ` from ${suggestedCourses[0]?.provider}` : ""}`,
          completed: false,
          type: "learning",
          specificDetails: [specificDetails[4] || "Practice advanced concepts"]
        },
        {
          id: 4,
          time: "4:00 PM - 5:00 PM",
          task: "Job Market Research",
          description: `Research ${detectedTopic || "relevant"} job opportunities and requirements`,
          completed: false,
          type: "career",
          jobs: suggestedJobs
        }
      ];
    } else if (query.toLowerCase().includes("job") || query.toLowerCase().includes("career")) {
      // Get user's skills from query or default suggestions
      const skillKeywords = ["frontend", "backend", "fullstack", "data", "ui", "ux", "mobile"];
      const userSkill = skillKeywords.find(skill => query.toLowerCase().includes(skill));

      suggestedJobs = jobCategories.filter(job =>
        !userSkill || job.title.toLowerCase().includes(userSkill) ||
        job.skills.some(skill => skill.toLowerCase().includes(userSkill || ""))
      ).slice(0, 5);

      // Find relevant courses for skill building
      suggestedCourses = courseCategories.filter(course =>
        !userSkill || course.title.toLowerCase().includes(userSkill) ||
        course.skills.some(skill => skill.toLowerCase().includes(userSkill || ""))
      ).slice(0, 3);

      response = `Perfect! I found ${suggestedJobs.length} job opportunities and ${suggestedCourses.length} skill-building courses for you:`;

      tasks = [
        {
          id: 1,
          time: "9:00 AM - 10:00 AM",
          task: "Job Applications",
          description: `Apply to ${userSkill || "relevant"} positions`,
          completed: false,
          type: "career",
          jobs: suggestedJobs
        },
        {
          id: 2,
          time: "10:30 AM - 12:00 PM",
          task: "Skill Enhancement",
          description: "Complete courses to improve your profile",
          completed: false,
          type: "learning",
          courses: suggestedCourses
        },
        {
          id: 3,
          time: "2:00 PM - 3:00 PM",
          task: "LinkedIn Networking",
          description: "Connect with recruiters and professionals",
          completed: false,
          type: "networking"
        },
        {
          id: 4,
          time: "4:00 PM - 5:00 PM",
          task: "Interview Preparation",
          description: `Practice ${userSkill || "technical"} interview questions`,
          completed: false,
          type: "practice"
        }
      ];
    } else {
      response = `I've created a balanced daily routine for you:`;
      tasks = [
        {
          id: 1,
          time: "9:00 AM - 10:30 AM",
          task: "Morning Focus Session",
          description: "Work on your most important task",
          completed: false,
          type: "focus"
        },
        {
          id: 2,
          time: "11:00 AM - 12:00 PM",
          task: "Skill Development",
          description: "Learn something new or practice existing skills",
          completed: false,
          type: "learning"
        },
        {
          id: 3,
          time: "2:00 PM - 3:30 PM",
          task: "Project Work",
          description: "Work on personal or professional projects",
          completed: false,
          type: "project"
        },
        {
          id: 4,
          time: "4:00 PM - 4:30 PM",
          task: "Reflection & Planning",
          description: "Review progress and plan for tomorrow",
          completed: false,
          type: "review"
        }
      ];
    }

    // Schedule notifications for tasks
    scheduleTaskNotifications(tasks);

    setAiResponse(response);
    setDailyTasks(tasks);
    setChatHistory(prev => [...prev,
      { type: "user", message: query, timestamp: new Date().toLocaleTimeString() },
      { type: "ai", message: response, timestamp: new Date().toLocaleTimeString(), tasks, courses: suggestedCourses, jobs: suggestedJobs }
    ]);
    setIsAiLoading(false);
  };

  // Schedule notifications for tasks
  const scheduleTaskNotifications = (tasks: any[]) => {
    tasks.forEach(task => {
      const [timeRange] = task.time.split(' - ');
      const [time, period] = timeRange.split(' ');
      const [hours, minutes] = time.split(':');

      let notificationHour = parseInt(hours);
      if (period === 'PM' && notificationHour !== 12) notificationHour += 12;
      if (period === 'AM' && notificationHour === 12) notificationHour = 0;

      const now = new Date();
      const notificationTime = new Date(now);
      notificationTime.setHours(notificationHour, parseInt(minutes), 0, 0);

      // If the time has passed today, schedule for tomorrow
      if (notificationTime <= now) {
        notificationTime.setDate(notificationTime.getDate() + 1);
      }

      const timeUntilNotification = notificationTime.getTime() - now.getTime();

      // Schedule notification
      setTimeout(() => {
        const newNotification = {
          id: Date.now(),
          type: "task_reminder",
          title: "Task Reminder",
          message: `Time to: ${task.task}`,
          timestamp: "now",
          read: false,
          icon: Clock,
        };

        setNotifications(prev => [newNotification, ...prev]);

        // Browser notification if permission granted
        if (Notification.permission === "granted") {
          new Notification(`Ignite Track: ${task.task}`, {
            body: task.description,
            icon: "/favicon.ico"
          });
        }
      }, Math.min(timeUntilNotification, 24 * 60 * 60 * 1000)); // Max 24 hours
    });
  };

  const toggleTaskCompletion = (taskId: number) => {
    const task = dailyTasks.find(t => t.id === taskId);
    if (!task) return;

    if (!task.completed) {
      // Mark as completed and trigger verification
      setCurrentVerification(task);
      generateVerificationQuestions(task);
      setIsVerificationOpen(true);
    } else {
      // Unmark as completed
      setDailyTasks(prev => prev.map(t =>
        t.id === taskId ? { ...t, completed: false } : t
      ));
    }
  };

  const generateVerificationQuestions = (task: any) => {
    let questions: string[] = [];

    switch (task.type) {
      case "learning":
        questions = [
          "What are the 3 most important concepts you learned?",
          "How would you explain this topic to someone else?",
          "What challenges did you face during learning?"
        ];
        break;
      case "practice":
        questions = [
          "What specific exercises or problems did you solve?",
          "Which concepts did you find most challenging?",
          "How confident do you feel about applying this knowledge?"
        ];
        break;
      case "career":
        questions = [
          "How many applications did you submit?",
          "What companies or roles did you research?",
          "What skills gaps did you identify?"
        ];
        break;
      case "networking":
        questions = [
          "How many new connections did you make?",
          "What meaningful conversations did you have?",
          "What insights did you gain from networking?"
        ];
        break;
      default:
        questions = [
          "What did you accomplish during this task?",
          "What went well and what could be improved?",
          "How does this contribute to your goals?"
        ];
    }

    setVerificationQuestions(questions);
    setUserAnswers(new Array(questions.length).fill(""));
  };

  const submitVerification = () => {
    const completedAnswers = userAnswers.filter(answer => answer.trim().length > 0);
    const requiredAnswers = Math.ceil(verificationQuestions.length / 2);

    if (completedAnswers.length >= requiredAnswers) {
      // Mark task as completed with verification details
      setDailyTasks(prev => prev.map(t =>
        t.id === currentVerification.id
          ? {
              ...t,
              completed: true,
              verificationDate: new Date().toLocaleString(),
              verificationAnswers: userAnswers.filter(a => a.trim())
            }
          : t
      ));

      // Add verification notification
      const verificationNotification = {
        id: Date.now(),
        type: "task_completed",
        title: "Task Completed",
        message: `✅ "${currentVerification.task}" has been verified and completed!`,
        timestamp: "now",
        read: false,
        icon: Check,
      };

      setNotifications(prev => [verificationNotification, ...prev]);

      setIsVerificationOpen(false);
      setCurrentVerification(null);
      setUserAnswers([]);
      setVerificationQuestions([]);

      // Show success message
      setTimeout(() => {
        alert("✅ Excellent! Task verified and marked as completed!");
      }, 100);
    } else {
      alert(`Please answer at least ${requiredAnswers} out of ${verificationQuestions.length} questions to verify completion.`);
    }
  };

  // Request notification permission on component mount
  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // Application and messaging functions
  const handleJobApplication = (job: any) => {
    setSelectedJobToApply(job);
    setIsApplyModalOpen(true);
  };

  const submitJobApplication = (applicationData: any) => {
    const application = {
      id: Date.now(),
      job: selectedJobToApply,
      applicationData,
      status: "Applied",
      appliedDate: new Date().toLocaleDateString(),
      timeline: [
        {
          status: "Applied",
          date: new Date().toLocaleDateString(),
          description: "Application submitted successfully"
        }
      ]
    };

    setAppliedJobs(prev => [application, ...prev]);

    // Add notification
    const notification = {
      id: Date.now(),
      type: "job_application",
      title: "Application Submitted",
      message: `Your application for ${selectedJobToApply.title} at ${selectedJobToApply.company} has been submitted!`,
      timestamp: "now",
      read: false,
      icon: Briefcase,
    };

    setNotifications(prev => [notification, ...prev]);
    setIsApplyModalOpen(false);
    setSelectedJobToApply(null);
  };

  const handleSendMessage = (recipient: any, content: string) => {
    const message = {
      id: Date.now(),
      sender: user?.name || "You",
      recipient: recipient.name,
      content,
      timestamp: new Date().toLocaleString(),
      read: false,
      type: "sent"
    };

    setUserMessages(prev => [message, ...prev]);

    // Simulate received message (in real app, this would come from backend)
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: recipient.name,
        recipient: user?.name || "You",
        content: `Thanks for your message! I'll get back to you soon.`,
        timestamp: new Date().toLocaleString(),
        read: false,
        type: "received"
      };
      setUserMessages(prev => [reply, ...prev]);
    }, 2000);

    setIsMessageModalOpen(false);
    setSelectedUserToMessage(null);
    setMessageContent("");
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
            <div className="flex items-center gap-4 md:gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView("home")}
                className={`flex items-center gap-1 md:gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 ${
                  currentView === "home"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="font-medium text-xs md:text-sm">Home</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView("tracker")}
                className={`flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  currentView === "tracker"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                <span className="font-medium text-xs md:text-sm">Tracker</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView("jobs")}
                className={`flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  currentView === "jobs"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span className="font-medium text-xs md:text-sm hidden sm:inline">
                  Jobs / Internships
                </span>
                <span className="font-medium text-xs md:text-sm sm:hidden">
                  Jobs
                </span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView("feed")}
                className={`flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  currentView === "feed"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <Users className="h-4 w-4" />
                <span className="font-medium text-xs md:text-sm">Feed</span>
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
              {/* Notifications Dropdown */}
              <Popover
                open={isNotificationsOpen}
                onOpenChange={setIsNotificationsOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                  >
                    <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    {getUnreadCount() > 0 && (
                      <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-[10px] text-white font-bold">
                          {getUnreadCount()}
                        </span>
                      </div>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-96 p-0 shadow-2xl border-0"
                  align="end"
                >
                  {/* Blur overlay */}
                  {isNotificationsOpen && (
                    <div
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                      onClick={() => setIsNotificationsOpen(false)}
                    />
                  )}
                  <div className="relative z-50 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                          Notifications{" "}
                          {getUnreadCount() > 0 && (
                            <span className="ml-2 text-sm font-normal text-slate-500">
                              ({getUnreadCount()} unread)
                            </span>
                          )}
                        </h3>
                        {getUnreadCount() > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-700"
                            onClick={markAllAsRead}
                          >
                            Mark all as read
                          </Button>
                        )}
                      </div>
                    </div>
                    <ScrollArea className="max-h-96">
                      <div className="p-2">
                        {notifications.length === 0 ? (
                          <div className="p-8 text-center">
                            <Bell className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                            <p className="text-slate-500 dark:text-slate-400">
                              No notifications yet
                            </p>
                          </div>
                        ) : (
                          notifications.map((notification) => {
                            const IconComponent = notification.icon;
                            return (
                              <div
                                key={notification.id}
                                className={`group relative p-3 rounded-lg mb-2 cursor-pointer transition-all duration-200 ${
                                  !notification.read
                                    ? "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border-l-4 border-l-blue-500"
                                    : "hover:bg-slate-50 dark:hover:bg-slate-800"
                                }`}
                                onClick={() =>
                                  markNotificationAsRead(notification.id)
                                }
                              >
                                <div className="flex gap-3">
                                  <div
                                    className={`p-2 rounded-full ${
                                      notification.type === "job_application"
                                        ? "bg-blue-100 dark:bg-blue-900/50"
                                        : notification.type ===
                                            "course_completion"
                                          ? "bg-green-100 dark:bg-green-900/50"
                                          : notification.type === "connection"
                                            ? "bg-purple-100 dark:bg-purple-900/50"
                                            : "bg-amber-100 dark:bg-amber-900/50"
                                    }`}
                                  >
                                    <IconComponent
                                      className={`h-4 w-4 ${
                                        notification.type === "job_application"
                                          ? "text-blue-600"
                                          : notification.type ===
                                              "course_completion"
                                            ? "text-green-600"
                                            : notification.type === "connection"
                                              ? "text-purple-600"
                                              : "text-amber-600"
                                      }`}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-sm text-slate-800 dark:text-slate-100">
                                      {notification.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                      {notification.message}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                                      {notification.timestamp}
                                    </p>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                    )}
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeNotification(notification.id);
                                      }}
                                    >
                                      <X className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </ScrollArea>
                    {notifications.length > 0 && (
                      <div className="p-3 border-t border-slate-200 dark:border-slate-700">
                        <Button
                          variant="ghost"
                          className="w-full text-center text-blue-600 hover:text-blue-700"
                        >
                          View All Notifications
                        </Button>
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>

              {/* Profile Dropdown or Login */}
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-1 flex items-center gap-2"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown className="h-3 w-3 text-slate-600 dark:text-slate-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setIsUpgradePlansOpen(true)}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Upgrade Plans</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-red-600 focus:text-red-600"
                      onClick={() => {
                        setIsAuthenticated(false);
                        setUser(null);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                          />
                        </div>
                        <Button className="w-full">Login</Button>
                        <Separator />
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleGoogleAuth}
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="currentColor"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                          Continue with Google
                        </Button>
                      </TabsContent>
                      <TabsContent value="signup" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="Create a password"
                          />
                        </div>
                        <Button className="w-full">Sign Up</Button>
                        <Separator />
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleGoogleAuth}
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="currentColor"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
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
                      onClick={() => setCurrentView("tracker")}
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
                                  onClick={() =>
                                    setSelectedCompany(job.company)
                                  }
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
                                    <DialogTitle className="text-2xl">
                                      {job.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-xl font-bold">
                                          {job.company}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                          {job.location}
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">
                                        Job Description
                                      </h4>
                                      <p className="text-slate-600 dark:text-slate-300">
                                        {job.description}
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">
                                        Required Skills
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill, index) => (
                                          <Badge key={index} variant="outline">
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Experience
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300">
                                          {job.experience}
                                        </p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Salary
                                        </h4>
                                        <p className="text-green-600 dark:text-green-400 font-bold">
                                          {job.salary}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button className="flex-1">
                                        Apply Now
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setSelectedCompany(job.company)
                                        }
                                      >
                                        View Company
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setSelectedItemFeedback({
                                            ...job,
                                            type: "job",
                                            feedback: getFeedbackData(
                                              job.id,
                                              "job",
                                            ),
                                          })
                                        }
                                      >
                                        Feedback
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
                                  onClick={() =>
                                    setSelectedCompany(internship.company)
                                  }
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
                                    <DialogTitle className="text-2xl">
                                      {internship.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-xl font-bold">
                                          {internship.company}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                          {internship.location}
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">
                                        Internship Description
                                      </h4>
                                      <p className="text-slate-600 dark:text-slate-300">
                                        {internship.description}
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">
                                        Skills You'll Learn
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {internship.skills.map(
                                          (skill, index) => (
                                            <Badge
                                              key={index}
                                              variant="outline"
                                            >
                                              {skill}
                                            </Badge>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Duration
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300">
                                          {internship.duration}
                                        </p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Stipend
                                        </h4>
                                        <p className="text-purple-600 dark:text-purple-400 font-bold">
                                          {internship.stipend}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button className="flex-1">
                                        Apply Now
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setSelectedCompany(internship.company)
                                        }
                                      >
                                        View Company
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setSelectedItemFeedback({
                                            ...internship,
                                            type: "internship",
                                            feedback: getFeedbackData(
                                              internship.id,
                                              "internship",
                                            ),
                                          })
                                        }
                                      >
                                        Feedback
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
                      const container =
                        document.getElementById("courses-scroll");
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
                      const container =
                        document.getElementById("courses-scroll");
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
                                  onClick={() =>
                                    setSelectedCompany(course.provider)
                                  }
                                >
                                  {course.provider}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs text-amber-500">
                                    ★
                                  </span>
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
                                    <DialogTitle className="text-2xl">
                                      {course.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-xl font-bold">
                                          {course.provider}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-amber-500 fill-current" />
                                          <span className="text-slate-600 dark:text-slate-400">
                                            {course.rating}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">
                                        Course Description
                                      </h4>
                                      <p className="text-slate-600 dark:text-slate-300">
                                        {course.description}
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">
                                        What You'll Learn
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {course.skills.map((skill, index) => (
                                          <Badge key={index} variant="outline">
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Duration
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300">
                                          {course.duration}
                                        </p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Level
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300">
                                          {course.level}
                                        </p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-1">
                                          Price
                                        </h4>
                                        <p className="text-green-600 dark:text-green-400 font-bold">
                                          {course.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {course.students}
                                      </p>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button className="flex-1">
                                        {course.price === "Free"
                                          ? "Start Free"
                                          : "Enroll Now"}
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setSelectedCompany(course.provider)
                                        }
                                      >
                                        View Provider
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setSelectedItemFeedback({
                                            ...course,
                                            type: "course",
                                            feedback: getFeedbackData(
                                              course.id,
                                              "course",
                                            ),
                                          })
                                        }
                                      >
                                        Feedback
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
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                Jobs & Internships
              </h1>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  className="pl-10 pr-4 py-2 w-full max-w-md"
                  value={jobSearchQuery}
                  onChange={(e) => setJobSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Filters:
                  </span>
                </div>

                <Select
                  value={jobFilters.type}
                  onValueChange={(value) =>
                    setJobFilters((prev) => ({ ...prev, type: value }))
                  }
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="jobs">Jobs Only</SelectItem>
                    <SelectItem value="internships">
                      Internships Only
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={jobFilters.location}
                  onValueChange={(value) =>
                    setJobFilters((prev) => ({ ...prev, location: value }))
                  }
                >
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

                <Select
                  value={jobFilters.company}
                  onValueChange={(value) =>
                    setJobFilters((prev) => ({ ...prev, company: value }))
                  }
                >
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
                    <SelectItem value="spotify">Spotify</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="salesforce">Salesforce</SelectItem>
                    <SelectItem value="openai">OpenAI</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={jobFilters.experience}
                  onValueChange={(value) =>
                    setJobFilters((prev) => ({ ...prev, experience: value }))
                  }
                >
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

                <Select
                  value={jobFilters.salary}
                  onValueChange={(value) =>
                    setJobFilters((prev) => ({ ...prev, salary: value }))
                  }
                >
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

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setJobSearchQuery("");
                    setJobFilters({
                      type: "all",
                      location: "all",
                      company: "all",
                      experience: "all",
                      salary: "all",
                    });
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing {filterJobsAndInternships().length} opportunities
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterJobsAndInternships().length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <Briefcase className="h-16 w-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-400">
                    No opportunities found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setJobSearchQuery("");
                      setJobFilters({
                        type: "all",
                        location: "all",
                        company: "all",
                        experience: "all",
                        salary: "all",
                      });
                    }}
                    className="mt-4"
                  >
                    Clear all filters
                  </Button>
                </div>
              ) : (
                filterJobsAndInternships().map((item) => {
                  const IconComponent = item.icon;
                  const isJob = "salary" in item;
                  return (
                    <Card
                      key={`${isJob ? "job" : "internship"}-${item.id}`}
                      className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`${isJob ? "bg-gradient-to-br from-blue-500 to-purple-500" : "bg-gradient-to-br from-purple-500 to-pink-500"} p-3 rounded-xl`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant={isJob ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {isJob ? "Job" : "Internship"}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-amber-500 fill-current" />
                                <span className="text-xs text-slate-500">
                                  {Math.floor(Math.random() * 2) + 4}.{Math.floor(Math.random() * 10)}
                                </span>
                              </div>
                              <span className="text-xs text-slate-500">
                                Posted 2 days ago
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {item.company} • {item.location}
                            </p>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Skills */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {item.skills.slice(0, 3).map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
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
                            <span
                              className={`font-bold text-lg ${isJob ? "text-green-600 dark:text-green-400" : "text-purple-600 dark:text-purple-400"}`}
                            >
                              {isJob
                                ? (item as any).salary
                                : (item as any).stipend}
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
                            <Button
                              size="sm"
                              className={
                                isJob
                                  ? "bg-blue-600 hover:bg-blue-700"
                                  : "bg-purple-600 hover:bg-purple-700"
                              }
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* AI Tracker Page */}
        {currentView === "tracker" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                AI Learning Tracker
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Let AI plan your daily learning journey and track your progress
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Chat Interface */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6" />
                    AI Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Chat History */}
                    <ScrollArea className="h-64 w-full border rounded-lg p-4 bg-slate-50 dark:bg-slate-800">
                      {chatHistory.length === 0 ? (
                        <div className="text-center text-slate-500 dark:text-slate-400 py-8">
                          <Brain className="h-12 w-12 mx-auto mb-3 opacity-50" />
                          <p>Ask me to plan your day!</p>
                          <p className="text-sm mt-2">
                            Examples: "Help me learn React", "Plan my job search", "Create a study schedule"
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {chatHistory.map((chat, index) => (
                            <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                              <div className={`max-w-[80%] p-3 rounded-lg ${
                                chat.type === "user"
                                  ? "bg-blue-600 text-white ml-auto"
                                  : "bg-white dark:bg-slate-700 border"
                              }`}>
                                <p className="text-sm">{chat.message}</p>

                                {/* Show course suggestions */}
                                {chat.courses && chat.courses.length > 0 && (
                                  <div className="mt-3 space-y-2">
                                    <p className="text-xs font-semibold opacity-80">📚 Suggested Courses:</p>
                                    {chat.courses.slice(0, 2).map((course, i) => (
                                      <div key={i} className="bg-slate-50 dark:bg-slate-600 p-2 rounded text-xs">
                                        <div className="font-medium">{course.title}</div>
                                        <div className="opacity-70">{course.provider} • {course.duration} • {course.price}</div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Show job suggestions */}
                                {chat.jobs && chat.jobs.length > 0 && (
                                  <div className="mt-3 space-y-2">
                                    <p className="text-xs font-semibold opacity-80">💼 Relevant Jobs:</p>
                                    {chat.jobs.slice(0, 2).map((job, i) => (
                                      <div key={i} className="bg-slate-50 dark:bg-slate-600 p-2 rounded text-xs">
                                        <div className="font-medium">{job.title}</div>
                                        <div className="opacity-70">{job.company} • {job.location} • {job.salary}</div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <span className="text-xs opacity-70 block mt-1">{chat.timestamp}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="flex gap-2">
                      <Textarea
                        value={trackerQuery}
                        onChange={(e) => setTrackerQuery(e.target.value)}
                        placeholder="Ask AI to plan your day... (e.g., 'Help me learn JavaScript', 'Plan my job search')"
                        className="min-h-[80px] resize-none"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            if (trackerQuery.trim() && !isAiLoading) {
                              generateAiPlan(trackerQuery);
                            }
                          }
                        }}
                      />
                      <Button
                        onClick={() => {
                          if (trackerQuery.trim() && !isAiLoading) {
                            generateAiPlan(trackerQuery);
                          }
                        }}
                        disabled={!trackerQuery.trim() || isAiLoading}
                        className="h-[80px] px-6"
                      >
                        {isAiLoading ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <Send className="h-5 w-5" />
                        )}
                      </Button>
                    </div>

                    {/* Quick Suggestions */}
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => generateAiPlan("Help me learn React and JavaScript")}
                        disabled={isAiLoading}
                      >
                        📚 Learn Programming
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => generateAiPlan("Plan my job search strategy")}
                        disabled={isAiLoading}
                      >
                        💼 Job Search
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => generateAiPlan("Create a balanced daily routine")}
                        disabled={isAiLoading}
                      >
                        ⚖️ Balanced Routine
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Tasks */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {dailyTasks.length === 0 ? (
                    <div className="text-center text-slate-500 dark:text-slate-400 py-8">
                      <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No tasks planned yet</p>
                      <p className="text-sm mt-2">Ask the AI to create your daily plan!</p>
                    </div>
                  ) : (
                    <ScrollArea className="h-80">
                      <div className="space-y-4">
                        {dailyTasks.map((task) => (
                          <Card key={task.id} className={`p-4 transition-all duration-300 ${
                            task.completed
                              ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                              : "hover:shadow-md"
                          }`}>
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)}
                                className="mt-1 h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant="outline" className="text-xs">
                                    {task.time}
                                  </Badge>
                                  <Badge variant={task.completed ? "default" : "secondary"} className="text-xs">
                                    {task.type}
                                  </Badge>
                                </div>
                                <h4 className={`font-semibold ${task.completed ? "line-through text-green-700 dark:text-green-400" : "text-slate-800 dark:text-slate-100"}`}>
                                  {task.task}
                                </h4>
                                <p className={`text-sm ${task.completed ? "line-through text-green-600 dark:text-green-500" : "text-slate-600 dark:text-slate-400"}`}>
                                  {task.description}
                                </p>
                                {task.completed && (
                                  <Badge className="bg-green-600 text-white mt-2">
                                    ✅ Verified Complete
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  )}

                  {/* Progress Summary */}
                  {dailyTasks.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {dailyTasks.filter(t => t.completed).length} / {dailyTasks.length} completed
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${(dailyTasks.filter(t => t.completed).length / dailyTasks.length) * 100}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {dailyTasks.filter(t => t.completed).length}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Tasks Completed Today</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {Math.round((dailyTasks.filter(t => t.completed).length / Math.max(dailyTasks.length, 1)) * 100)}%
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Completion Rate</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {chatHistory.length}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">AI Interactions</p>
              </Card>
            </div>
          </div>
        )}

        {/* Verification Modal */}
        {isVerificationOpen && currentVerification && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-6 w-6" />
                    Verify Task Completion
                  </div>
                  <Badge className="bg-white/20 text-white">
                    {currentVerification.type}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <div className="max-h-[calc(90vh-200px)] overflow-y-auto">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                        {currentVerification.task}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {currentVerification.description}
                      </p>
                      <div className="mt-2 text-xs text-slate-500">
                        Scheduled: {currentVerification.time}
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          {userAnswers.filter(a => a.trim()).length} / {verificationQuestions.length} answered
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${(userAnswers.filter(a => a.trim()).length / verificationQuestions.length) * 100}%`
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Please answer these questions to verify you completed this task
                        <span className="text-red-500">*</span>
                      </p>

                      {verificationQuestions.map((question, index) => (
                        <div key={index} className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2">
                            <Badge variant="outline" className="mt-0.5 text-xs">
                              {index + 1}
                            </Badge>
                            {question}
                            {userAnswers[index]?.trim() && (
                              <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            )}
                          </label>
                          <Textarea
                            value={userAnswers[index] || ""}
                            onChange={(e) => {
                              const newAnswers = [...userAnswers];
                              newAnswers[index] = e.target.value;
                              setUserAnswers(newAnswers);
                            }}
                            placeholder="Type your detailed answer here..."
                            className="min-h-[100px] resize-none"
                            required
                          />
                        </div>
                      ))}
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-amber-600 mt-0.5" />
                        <div className="text-sm text-amber-800 dark:text-amber-200">
                          <strong>Note:</strong> You need to answer at least {Math.ceil(verificationQuestions.length / 2)} questions
                          with meaningful responses to verify task completion.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="p-6 border-t bg-slate-50 dark:bg-slate-800/50">
                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsVerificationOpen(false);
                      setCurrentVerification(null);
                      setUserAnswers([]);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={submitVerification}
                    className="bg-green-600 hover:bg-green-700"
                    disabled={userAnswers.filter(a => a.trim()).length < Math.ceil(verificationQuestions.length / 2)}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Verify & Complete Task
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Feed Page */}
        {currentView === "feed" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                Feed
              </h1>

              {/* Search Bar and Actions */}
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search people, posts, or achievements..."
                    className="pl-10 pr-4 py-2 w-full"
                    value={feedSearchQuery}
                    onChange={(e) => setFeedSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setFeedFilter("my-posts")}
                  className={
                    feedFilter === "my-posts" ? "bg-blue-50 text-blue-600" : ""
                  }
                >
                  <User className="h-4 w-4 mr-2" />
                  My Posts
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowMyProfile(true)}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  My Profile
                </Button>
              </div>
            </div>

            {/* Create Post - Facebook/LinkedIn Style */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-lg">
                      {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder="What's on your mind? Share your achievements, learning journey, completed courses, or ask questions..."
                      className="mb-4 min-h-[100px] border-2 focus:border-blue-500 resize-none"
                    />
                    {imageUpload && (
                      <div className="mb-4 relative">
                        <img
                          src={URL.createObjectURL(imageUpload)}
                          alt="Upload preview"
                          className="max-h-64 rounded-lg border"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                          onClick={() => setImageUpload(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input
                          type="file"
                          accept="image/*,video/*"
                          className="hidden"
                          id="media-upload"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(file);
                          }}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() =>
                            document.getElementById("media-upload")?.click()
                          }
                        >
                          <PlusCircle className="h-4 w-4" />
                          Photo/Video
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Award className="h-4 w-4" />
                          Achievement
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <GraduationCap className="h-4 w-4" />
                          Certificate
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Briefcase className="h-4 w-4" />
                          Job Update
                        </Button>
                      </div>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 px-6"
                        onClick={() => {
                          if (newPostContent.trim()) {
                            const newPost = {
                              id: Date.now(),
                              user: {
                                name: user?.name || "User",
                                avatar: user?.avatar || "",
                                role: "Student at Ignite Track",
                              },
                              content: newPostContent,
                              timestamp: "now",
                              likes: 0,
                              comments: 0,
                              image: imageUpload
                                ? URL.createObjectURL(imageUpload)
                                : null,
                              achievement: null,
                              isUserPost: true,
                            };
                            setUserPosts((prev) => [newPost, ...prev]);
                            setPosts((prev) => [newPost, ...prev]);
                            setNewPostContent("");
                            setImageUpload(null);
                          }
                        }}
                        disabled={!newPostContent.trim()}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filter Options */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Show:
              </span>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={feedFilter === "all" ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => setFeedFilter("all")}
                >
                  All Posts
                </Button>
                <Button
                  variant={feedFilter === "my-posts" ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => setFeedFilter("my-posts")}
                >
                  My Posts ({userPosts.length})
                </Button>
                <Button
                  variant={
                    feedFilter === "achievements" ? "default" : "outline"
                  }
                  size="sm"
                  className="text-xs"
                  onClick={() => setFeedFilter("achievements")}
                >
                  Achievements
                </Button>
                <Button
                  variant={feedFilter === "job-updates" ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => setFeedFilter("job-updates")}
                >
                  Job Updates
                </Button>
                <Button
                  variant={feedFilter === "courses" ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => setFeedFilter("courses")}
                >
                  Course Completions
                </Button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {/* Posts Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {feedFilter === "all" && "All Posts"}
                  {feedFilter === "my-posts" && "My Posts"}
                  {feedFilter === "achievements" && "Achievement Posts"}
                  {feedFilter === "job-updates" && "Job Update Posts"}
                  {feedFilter === "courses" && "Course Completion Posts"}
                </h2>
                {feedFilter === "my-posts" && userPosts.length === 0 && (
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    You haven't posted anything yet. Share your journey above!
                  </p>
                )}
              </div>

              {/* Filtered Posts */}
              {(() => {
                const filteredPosts = filterPosts();

                return filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-16 w-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-500 dark:text-slate-400">
                      {feedFilter === "my-posts"
                        ? "No posts yet. Start sharing your journey!"
                        : feedSearchQuery
                          ? "No posts found matching your search."
                          : `No ${feedFilter.replace("-", " ")} found.`}
                    </p>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-3">
                            <Avatar
                              className="h-12 w-12 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                              onClick={() => setSelectedProfile(post.user)}
                            >
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                {post.user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4
                                className="font-semibold text-slate-800 dark:text-slate-100 hover:text-blue-600 cursor-pointer"
                                onClick={() => setSelectedProfile(post.user)}
                              >
                                {post.user.name}
                                {post.isUserPost && (
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    You
                                  </Badge>
                                )}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                {post.user.role}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-500">
                                {post.timestamp}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {!post.isUserPost && (
                              <Button
                                variant={
                                  connections.has(post.user.name)
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                className={
                                  connections.has(post.user.name)
                                    ? ""
                                    : "hover:bg-blue-50 hover:text-blue-600"
                                }
                                onClick={() => toggleConnection(post.user.name)}
                              >
                                <UserCheck className="h-4 w-4 mr-2" />
                                {connections.has(post.user.name)
                                  ? "Connected"
                                  : "Connect"}
                              </Button>
                            )}
                            {post.isUserPost && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 opacity-75 hover:opacity-100 transition-opacity"
                                onClick={() => deletePost(post.id)}
                                title="Delete your post"
                              >
                                <X className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                {post.isUserPost ? (
                                  <>
                                    <DropdownMenuItem>
                                      <User className="mr-2 h-4 w-4" />
                                      Edit Post
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="text-red-600 focus:text-red-600"
                                      onClick={() => deletePost(post.id)}
                                    >
                                      <X className="mr-2 h-4 w-4" />
                                      Delete Post
                                    </DropdownMenuItem>
                                  </>
                                ) : (
                                  <>
                                    <DropdownMenuItem>
                                      <Flag className="mr-2 h-4 w-4" />
                                      Report Post
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Eye className="mr-2 h-4 w-4" />
                                      Hide Post
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>

                        {/* Achievement Badge */}
                        {post.achievement && (
                          <div className="mb-3">
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                              <Award className="h-3 w-3 mr-1" />
                              Achievement: {post.achievement}
                            </Badge>
                          </div>
                        )}

                        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                          {post.content}
                        </p>

                        {/* Post Image */}
                        {post.image && (
                          <div className="mb-4">
                            <img
                              src={post.image}
                              alt="Post content"
                              className="w-full max-h-96 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                            />
                          </div>
                        )}

                        {/* Engagement Stats */}
                        <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400 mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                          <span>{post.likes} likes</span>
                          <span>{post.comments} comments</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1 w-full">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`flex-1 flex items-center justify-center gap-2 ${
                                likedPosts.has(post.id)
                                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                  : "hover:bg-blue-50 hover:text-blue-600"
                              }`}
                              onClick={() => toggleLike(post.id)}
                            >
                              <ThumbsUp
                                className={`h-4 w-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`}
                              />
                              <span>
                                {likedPosts.has(post.id) ? "Liked" : "Like"}
                              </span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex-1 flex items-center justify-center gap-2 hover:bg-green-50 hover:text-green-600"
                              onClick={() => toggleComments(post.id)}
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span>Comment</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex-1 flex items-center justify-center gap-2 hover:bg-purple-50 hover:text-purple-600"
                            >
                              <Share2 className="h-4 w-4" />
                              <span>Share</span>
                            </Button>
                          </div>
                        </div>

                        {/* Comments Section */}
                        {showComments.has(post.id) && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex gap-3 mb-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">
                                  {user?.name?.charAt(0) || "U"}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 flex gap-2">
                                <Input
                                  placeholder="Write a comment..."
                                  className="flex-1"
                                  onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                      const target =
                                        e.target as HTMLInputElement;
                                      if (target.value.trim()) {
                                        addComment(post.id, target.value);
                                        target.value = "";
                                      }
                                    }
                                  }}
                                />
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    const input =
                                      e.currentTarget.parentElement?.querySelector(
                                        "input",
                                      ) as HTMLInputElement;
                                    if (input?.value.trim()) {
                                      addComment(post.id, input.value);
                                      input.value = "";
                                    }
                                  }}
                                >
                                  <Send className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            {/* Display Comments */}
                            <div className="space-y-3 text-sm">
                              {/* Sample Comments */}
                              <div className="flex gap-2 items-start group">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback className="bg-slate-300 text-slate-700 text-xs">
                                    A
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <span className="font-medium">
                                    Alex Kumar
                                  </span>
                                  <p className="text-slate-600 dark:text-slate-400">
                                    Great achievement! Keep it up! 🎉
                                  </p>
                                  <div className="flex gap-3 mt-1">
                                    <button className="text-xs text-slate-500 hover:text-blue-600">
                                      Like
                                    </button>
                                    <button className="text-xs text-slate-500 hover:text-blue-600">
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {/* User's Comments */}
                              {postComments[post.id]?.map((comment) => (
                                <div
                                  key={comment.id}
                                  className="flex gap-2 items-start group"
                                >
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs">
                                      {comment.user.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">
                                        {comment.user}
                                      </span>
                                      {comment.user === user?.name && (
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 h-6 px-2"
                                          onClick={() =>
                                            deleteComment(post.id, comment.id)
                                          }
                                        >
                                          <X className="h-3 w-3" />
                                        </Button>
                                      )}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">
                                      {comment.content}
                                    </p>
                                    <div className="flex gap-3 mt-1">
                                      <button className="text-xs text-slate-500 hover:text-blue-600">
                                        Like
                                      </button>
                                      <button className="text-xs text-slate-500 hover:text-blue-600">
                                        Reply
                                      </button>
                                      {comment.user === user?.name && (
                                        <button
                                          className="text-xs text-red-500 hover:text-red-700"
                                          onClick={() =>
                                            deleteComment(post.id, comment.id)
                                          }
                                        >
                                          Delete
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))
                );
              })()}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <Button
                variant="outline"
                className="px-8"
                onClick={loadMorePosts}
              >
                Load More Posts
              </Button>
            </div>
          </div>
        )}

        {/* Feedback Modal */}
        {selectedItemFeedback && (
          <Dialog
            open={!!selectedItemFeedback}
            onOpenChange={() => setSelectedItemFeedback(null)}
          >
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedItemFeedback.title} - Reviews & Feedback
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Rating Summary */}
                <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">
                      {selectedItemFeedback.feedback.averageRating}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= selectedItemFeedback.feedback.averageRating ? "text-amber-400 fill-current" : "text-slate-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">
                      {selectedItemFeedback.feedback.totalReviews} reviews
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      {selectedItemFeedback.company ||
                        selectedItemFeedback.provider}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                      {selectedItemFeedback.location}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {selectedItemFeedback.type === "job"
                        ? "Job"
                        : selectedItemFeedback.type === "internship"
                          ? "Internship"
                          : "Course"}
                    </Badge>
                  </div>
                </div>

                {/* Review Form */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Write a Review</h4>
                    <div className="space-y-4">
                      <div>
                        <Label>Rating</Label>
                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Button
                              key={star}
                              variant="ghost"
                              size="sm"
                              className="p-0 h-8 w-8"
                            >
                              <Star className="h-5 w-5 text-amber-400" />
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label>Your Review</Label>
                        <Textarea
                          placeholder="Share your experience with this opportunity..."
                          className="mt-1"
                        />
                      </div>
                      <Button>Submit Review</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews List */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Reviews</h4>
                  {selectedItemFeedback.feedback.reviews.map((review: any) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= review.rating ? "text-amber-400 fill-current" : "text-slate-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                          {review.comment}
                        </p>
                        <p className="text-xs text-slate-500">{review.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* My Profile Modal */}
        {showMyProfile && (
          <Dialog open={showMyProfile} onOpenChange={setShowMyProfile}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">My Profile</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Profile Header */}
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl">
                      {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">
                      {user?.name || "User"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Student at Ignite Track
                    </p>
                    <p className="text-sm text-slate-500">{user?.email}</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm">
                        <User className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {userPosts.length}
                      </div>
                      <p className="text-sm text-slate-600">Posts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {connections.size}
                      </div>
                      <p className="text-sm text-slate-600">Connections</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        5
                      </div>
                      <p className="text-sm text-slate-600">Courses</p>
                    </CardContent>
                  </Card>
                </div>

                {/* About Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      About
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      Passionate student learning web development and exploring
                      career opportunities in tech. Always eager to learn new
                      technologies and connect with like-minded professionals.
                    </p>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      Skills
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript",
                        "React",
                        "Node.js",
                        "Python",
                        "HTML",
                        "CSS",
                        "TypeScript",
                      ].map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-green-500" />
                        <span className="text-sm">
                          Completed React Advanced Course
                        </span>
                        <span className="text-xs text-slate-500">
                          2 days ago
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="text-sm">
                          Connected with 3 new professionals
                        </span>
                        <span className="text-xs text-slate-500">
                          1 week ago
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-purple-500" />
                        <span className="text-sm">
                          Applied for Frontend Developer position
                        </span>
                        <span className="text-xs text-slate-500">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Profile Viewing Modal */}
        {selectedProfile && (
          <Dialog
            open={!!selectedProfile}
            onOpenChange={() => setSelectedProfile(null)}
          >
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProfile.name}'s Profile
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl">
                      {selectedProfile.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">
                      {selectedProfile.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {selectedProfile.role}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant={
                          connections.has(selectedProfile.name)
                            ? "default"
                            : "outline"
                        }
                        onClick={() => toggleConnection(selectedProfile.name)}
                      >
                        <UserCheck className="h-4 w-4 mr-2" />
                        {connections.has(selectedProfile.name)
                          ? "Connected"
                          : "Connect"}
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Passionate {selectedProfile.role.toLowerCase()} with
                    experience in modern web technologies. Always learning and
                    growing in the tech industry.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React",
                      "Node.js",
                      "Python",
                      "TypeScript",
                    ].map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recent Activity</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      • Completed Advanced React Course
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      • Earned JavaScript Certification
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      • Joined 5 new professional groups
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Upgrade Plans Modal */}
        {isUpgradePlansOpen && (
          <Dialog
            open={isUpgradePlansOpen}
            onOpenChange={setIsUpgradePlansOpen}
          >
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl text-center mb-2">
                  Choose Your Plan
                </DialogTitle>
                <p className="text-center text-slate-600 dark:text-slate-400">
                  Unlock your potential with our premium features
                </p>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {/* Free Plan */}
                <Card className="relative border-2 border-slate-200 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        Free Plan
                      </h3>
                      <div className="text-3xl font-bold text-slate-600 dark:text-slate-400 mb-4">
                        ₹0<span className="text-sm font-normal">/month</span>
                      </div>
                      <Badge variant="outline" className="mb-4">
                        Current Plan
                      </Badge>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Access to basic courses</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Job listings view</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Basic profile</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Community access</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  </CardContent>
                </Card>

                {/* Base Model */}
                <Card className="relative border-2 border-blue-200 dark:border-blue-700">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        Base Model
                      </h3>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                        ₹299<span className="text-sm font-normal">/month</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-600 border-blue-200 mb-4">
                        Popular
                      </Badge>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">All Free features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Premium courses</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Direct job applications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Resume builder</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Priority support</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => {
                        alert(
                          "Redirecting to payment gateway...\n\nPlan: Base Model (₹299/month)\nFeatures: Premium courses, Direct applications, Resume builder, Priority support",
                        );
                        // In a real app, this would redirect to a payment processor like Razorpay/Stripe
                      }}
                    >
                      Upgrade Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Super Model */}
                <Card className="relative border-2 border-purple-200 dark:border-purple-700">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        Super Model
                      </h3>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                        ₹599<span className="text-sm font-normal">/month</span>
                      </div>
                      <Badge className="bg-purple-100 text-purple-600 border-purple-200 mb-4">
                        Recommended
                      </Badge>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">All Base features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">AI-powered matching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Interview preparation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Skill assessments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Networking events</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Career coaching</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => {
                        alert(
                          "Redirecting to payment gateway...\n\nPlan: Super Model (₹599/month)\nFeatures: All Base features + AI matching, Interview prep, Skill assessments, Networking, Career coaching",
                        );
                        // In a real app, this would redirect to a payment processor
                      }}
                    >
                      Upgrade Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Premium Model */}
                <Card className="relative border-2 border-amber-200 dark:border-amber-700">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Best Value
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                        Premium Model
                      </h3>
                      <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                        ₹999<span className="text-sm font-normal">/month</span>
                      </div>
                      <Badge className="bg-amber-100 text-amber-600 border-amber-200 mb-4">
                        Ultimate
                      </Badge>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">All Super features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">1-on-1 mentorship</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Guaranteed interviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Portfolio review</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Salary negotiation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">VIP support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Exclusive content</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                      onClick={() => {
                        alert(
                          "Redirecting to payment gateway...\n\nPlan: Premium Model (₹999/month)\nFeatures: All Super features + 1-on-1 mentorship, Guaranteed interviews, Portfolio review, Salary negotiation, VIP support, Exclusive content",
                        );
                        // In a real app, this would integrate with payment gateway
                      }}
                    >
                      Upgrade Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  All plans include 30-day money-back guarantee • Cancel anytime
                  • Secure payment
                </p>
                <div className="flex justify-center gap-4">
                  <Badge variant="outline" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Secure Payment
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    Money Back Guarantee
                  </Badge>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Company Profile Modal */}
        {selectedCompany && (
          <Dialog
            open={!!selectedCompany}
            onOpenChange={() => setSelectedCompany(null)}
          >
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedCompany}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedCompany}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Technology Company
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Global
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {selectedCompany} is a leading technology company focused on
                    innovation and creating products that improve people's lives
                    worldwide.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Open Positions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Only show jobs and internships, not courses */}
                    {[...jobCategories, ...internshipCategories]
                      .filter((item) => item.company === selectedCompany)
                      .map((item) => {
                        const isJob = "salary" in item;
                        return (
                          <div
                            key={`${isJob ? "job" : "internship"}-${item.id}`}
                            className="p-3 border rounded-lg"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-medium">{item.title}</h5>
                              <Badge
                                variant={isJob ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {isJob ? "Job" : "Internship"}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {item.location}
                            </p>
                            <p
                              className={`text-sm font-medium ${isJob ? "text-green-600 dark:text-green-400" : "text-purple-600 dark:text-purple-400"}`}
                            >
                              {isJob
                                ? (item as any).salary
                                : (item as any).stipend}
                            </p>
                          </div>
                        );
                      })}
                    {[...jobCategories, ...internshipCategories].filter(
                      (item) => item.company === selectedCompany,
                    ).length === 0 && (
                      <p className="text-slate-500 dark:text-slate-400 col-span-2">
                        No open positions at this time.
                      </p>
                    )}
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

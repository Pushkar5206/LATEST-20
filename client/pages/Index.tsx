import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, BarChart3, Code, Palette, Database, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const jobCategories = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    description: "Build user-facing features for Google Search and Gmail using React",
    icon: Code,
    location: "Bangalore, India",
    skills: ["React", "TypeScript", "JavaScript"],
    salary: "₹18-25 LPA",
    experience: "2-4 years"
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
    experience: "3-5 years"
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
    experience: "1-3 years"
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
    experience: "2-4 years"
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
    experience: "3-6 years"
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
    experience: "3-5 years"
  },
  {
    id: 7,
    title: "ML Engineer",
    company: "Amazon",
    description: "Develop machine learning models for Alexa and recommendation systems",
    icon: Database,
    location: "Chennai, India",
    skills: ["Python", "TensorFlow", "AWS"],
    salary: "₹18-25 LPA",
    experience: "2-4 years"
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
    experience: "2-5 years"
  }
];

const internshipCategories = [
  {
    id: 1,
    title: "Frontend Development Intern",
    company: "Flipkart",
    description: "Work on e-commerce platform features using React and learn from senior developers",
    icon: Code,
    location: "Bangalore, India",
    skills: ["HTML", "CSS", "JavaScript"],
    duration: "6 months",
    stipend: "₹25,000/month"
  },
  {
    id: 2,
    title: "React Developer Intern",
    company: "Paytm",
    description: "Build payment interface components and contribute to mobile-first web applications",
    icon: Code,
    location: "Noida, India",
    skills: ["React", "JavaScript", "CSS"],
    duration: "4 months",
    stipend: "₹30,000/month"
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Zomato",
    description: "Design user-friendly interfaces for food delivery app and conduct user research",
    icon: Palette,
    location: "Gurgaon, India",
    skills: ["Figma", "Sketch", "Prototyping"],
    duration: "5 months",
    stipend: "₹20,000/month"
  },
  {
    id: 4,
    title: "Product Design Intern",
    company: "BYJU'S",
    description: "Create engaging educational interfaces and improve student learning experience",
    icon: Palette,
    location: "Bangalore, India",
    skills: ["Figma", "User Research", "Wireframing"],
    duration: "6 months",
    stipend: "₹22,000/month"
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "Swiggy",
    description: "Analyze food delivery data, create dashboards and support business decisions",
    icon: Database,
    location: "Bangalore, India",
    skills: ["Excel", "Python", "SQL"],
    duration: "4 months",
    stipend: "₹28,000/month"
  },
  {
    id: 6,
    title: "Business Analytics Intern",
    company: "Ola",
    description: "Work with ride-sharing data to optimize routes and improve user experience",
    icon: Database,
    location: "Bangalore, India",
    skills: ["Python", "Tableau", "Statistics"],
    duration: "5 months",
    stipend: "₹26,000/month"
  },
  {
    id: 7,
    title: "Digital Marketing Intern",
    company: "Myntra",
    description: "Create social media campaigns and analyze fashion e-commerce marketing trends",
    icon: Shield,
    location: "Bangalore, India",
    skills: ["Google Ads", "SEO", "Content Marketing"],
    duration: "3 months",
    stipend: "₹18,000/month"
  },
  {
    id: 8,
    title: "Content Marketing Intern",
    company: "Nykaa",
    description: "Develop beauty content strategies and manage social media presence",
    icon: Shield,
    location: "Mumbai, India",
    skills: ["Content Writing", "Social Media", "Canva"],
    duration: "4 months",
    stipend: "₹20,000/month"
  }
];

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
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
              animationDuration: `${2 + Math.random() * 2}s`
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
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="w-0.5 h-0.5 bg-purple-400/40 dark:bg-purple-300/50 rounded-full"></div>
          </div>
        ))}
      </div>
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
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                          Experience: <span className="font-normal text-slate-600 dark:text-slate-300">{job.experience}</span>
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                          {job.salary}
                        </span>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Apply Now
                        </Button>
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
                  const container = document.getElementById('internships-scroll');
                  if (container) {
                    container.scrollBy({ left: -400, behavior: 'smooth' });
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
                  const container = document.getElementById('internships-scroll');
                  if (container) {
                    container.scrollBy({ left: 400, behavior: 'smooth' });
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
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                          Duration: <span className="font-normal text-slate-600 dark:text-slate-300">{internship.duration}</span>
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {internship.stipend}
                        </span>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Apply Now
                        </Button>
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

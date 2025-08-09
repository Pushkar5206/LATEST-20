import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, BarChart3, Code, Palette, Database, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const jobCategories = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern web applications with React, Vue, Angular",
    icon: Code,
    openings: "150+ openings",
    skills: ["React", "TypeScript", "Node.js"],
    salary: "₹8-15 LPA",
    companies: ["Google", "Meta", "TCS", "Infosys"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Create beautiful and intuitive user experiences",
    icon: Palette,
    openings: "85+ openings",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    salary: "₹6-12 LPA",
    companies: ["Adobe", "Figma", "Uber", "Airbnb"]
  },
  {
    id: 3,
    title: "Data Science",
    description: "Analyze data and build machine learning models",
    icon: Database,
    openings: "120+ openings",
    skills: ["Python", "SQL", "Machine Learning"],
    salary: "₹10-20 LPA",
    companies: ["Netflix", "Amazon", "Microsoft", "IBM"]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    description: "Manage infrastructure and deployment pipelines",
    icon: Shield,
    openings: "95+ openings",
    skills: ["AWS", "Docker", "Kubernetes"],
    salary: "₹12-18 LPA",
    companies: ["AWS", "Docker", "Red Hat", "Atlassian"]
  },
  {
    id: 5,
    title: "Mobile Development",
    description: "Build native and cross-platform mobile apps",
    icon: Zap,
    openings: "110+ openings",
    skills: ["React Native", "Flutter", "Swift"],
    salary: "₹9-16 LPA",
    companies: ["Apple", "Google", "Spotify", "WhatsApp"]
  }
];

const internshipCategories = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Learn React, HTML, CSS and modern frontend frameworks",
    icon: Code,
    openings: "200+ internships",
    skills: ["HTML", "CSS", "JavaScript"],
    duration: "3-6 months",
    companies: ["Flipkart", "Paytm", "Zomato", "Swiggy"]
  },
  {
    id: 2,
    title: "Product Design",
    description: "Design user interfaces and improve user experience",
    icon: Palette,
    openings: "120+ internships",
    skills: ["Sketch", "Figma", "User Research"],
    duration: "4-6 months",
    companies: ["BYJU'S", "Ola", "PhonePe", "Razorpay"]
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Work with data visualization and basic analytics",
    icon: Database,
    openings: "180+ internships",
    skills: ["Excel", "Python", "Tableau"],
    duration: "2-4 months",
    companies: ["Accenture", "Deloitte", "EY", "KPMG"]
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, and content creation",
    icon: Shield,
    openings: "150+ internships",
    skills: ["SEO", "Google Ads", "Content Writing"],
    duration: "2-3 months",
    companies: ["Unilever", "P&G", "Myntra", "Nykaa"]
  },
  {
    id: 5,
    title: "Software Testing",
    description: "Learn manual and automated testing methodologies",
    icon: Zap,
    openings: "90+ internships",
    skills: ["Manual Testing", "Selenium", "Postman"],
    duration: "3-4 months",
    companies: ["Wipro", "Cognizant", "HCL", "Tech Mahindra"]
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

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                          Top Companies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.companies.map((company, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                            >
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                          {job.salary}
                        </span>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          View Jobs
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
                          <Badge variant="secondary" className="text-xs">
                            {internship.openings}
                          </Badge>
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
                          Top Companies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {internship.companies.map((company, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                            >
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {internship.duration}
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

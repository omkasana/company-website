import { JobsPageData } from '@/types/jobs/jobs';

export const jobsPageData: JobsPageData = {
  departments: [
    { 
      id: "web-development", 
      name: "web-development", 
      displayName: "Web Development"
    },
    { 
      id: "app-development", 
      name: "app-development", 
      displayName: "App Development"
    },
    { 
      id: "ui-ux", 
      name: "ui-ux", 
      displayName: "UI/UX"
    },
    { 
      id: "software-development", 
      name: "software-development", 
      displayName: "Software Development"
    },
    { 
      id: "graphic-design", 
      name: "graphic-design", 
      displayName: "Graphic Design"
    }
  ],
  positions: [
    {
      id: "senior-web-developer-001",
      title: "Senior Web Developer",
      location: ["Remote", "Delhi"],
      workType: ["Full-time"],
      description: "We are looking for an experienced Senior Web Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies like React, Node.js, and TypeScript. Strong problem-solving skills and attention to detail are essential.",
      department: "web-development",
      datePosted: "2025-09-25",
      priority: 1,
      isActive: true,
      requirements: [
        "5+ years of web development experience",
        "Proficiency in React, JavaScript, TypeScript",
        "Experience with Node.js and Express",
        "Knowledge of modern CSS frameworks"
      ]
    },
    {
      id: "frontend-web-developer-002",
      title: "Frontend Web Developer",
      location: ["Hybrid", "Mumbai"],
      workType: ["Full-time"],
      description: "Join our frontend team to create amazing user interfaces and experiences. You'll work with React, Next.js, and modern CSS to build responsive and interactive web applications. Collaboration with designers and backend developers is key.",
      department: "web-development",
      datePosted: "2025-09-24",
      priority: 2,
      isActive: true
    },
    {
      id: "react-native-developer-001",
      title: "React Native App Developer",
      location: ["Remote"],
      workType: ["Full-time"],
      description: "We're seeking a talented React Native developer to build cross-platform mobile applications. You'll work on both iOS and Android apps, integrating with APIs and ensuring smooth user experiences across devices.",
      department: "app-development",
      datePosted: "2025-09-23",
      priority: 1,
      isActive: true
    },
    {
      id: "flutter-developer-001",
      title: "Flutter App Developer",
      location: ["Bangalore", "Remote"],
      workType: ["Full-time"],
      description: "Looking for a Flutter developer to create beautiful, high-performance mobile applications. Experience with Dart, state management, and mobile app deployment is required. You'll work on exciting consumer-facing apps.",
      department: "app-development",
      datePosted: "2025-09-22",
      priority: 2,
      isActive: true
    },
    {
      id: "senior-ui-ux-designer-001",
      title: "Senior UI/UX Designer",
      location: ["Hybrid", "Pune"],
      workType: ["Full-time"],
      description: "We need a creative UI/UX Designer to lead design initiatives and create intuitive user experiences. You'll work on web and mobile applications, conduct user research, create wireframes, and collaborate closely with development teams.",
      department: "ui-ux",
      datePosted: "2025-09-21",
      priority: 1,
      isActive: true
    },
    {
      id: "ux-researcher-001",
      title: "UX Researcher",
      location: ["Remote", "Chennai"],
      workType: ["Full-time"],
      description: "Join our UX team to conduct user research, usability testing, and data analysis. You'll help shape product decisions through insights and work closely with designers and product managers to improve user experiences.",
      department: "ui-ux",
      datePosted: "2025-09-20",
      priority: 2,
      isActive: true
    },
    {
      id: "fullstack-software-developer-001",
      title: "Full-Stack Software Developer",
      location: ["Hyderabad", "Remote"],
      workType: ["Full-time"],
      description: "We're looking for a versatile Full-Stack Software Developer who can work on both frontend and backend systems. Experience with modern frameworks, databases, and cloud platforms is preferred. You'll build scalable software solutions.",
      department: "software-development",
      datePosted: "2025-09-19",
      priority: 1,
      isActive: true
    },
    {
      id: "backend-software-developer-001",
      title: "Backend Software Developer",
      location: ["Remote"],
      workType: ["Full-time"],
      description: "Join our backend team to build robust APIs and server-side applications. Experience with Python, Java, or Node.js is required. You'll work on microservices, databases, and cloud infrastructure to support our applications.",
      department: "software-development",
      datePosted: "2025-09-18",
      priority: 2,
      isActive: true
    },
    {
      id: "devops-software-developer-001",
      title: "DevOps Software Developer",
      location: ["Gurgaon", "Remote"],
      workType: ["Full-time"],
      description: "We need a DevOps-focused Software Developer to manage infrastructure, CI/CD pipelines, and deployment processes. Experience with AWS/Azure, Docker, Kubernetes, and automation tools is essential.",
      department: "software-development",
      datePosted: "2025-09-17",
      priority: 3,
      isActive: true
    },
    {
      id: "senior-graphic-designer-001",
      title: "Senior Graphic Designer",
      location: ["Delhi", "Hybrid"],
      workType: ["Full-time"],
      description: "We're seeking a creative Senior Graphic Designer to lead visual design projects. You'll create brand materials, marketing graphics, and digital assets. Proficiency in Adobe Creative Suite and brand design is required.",
      department: "graphic-design",
      datePosted: "2025-09-16",
      priority: 1,
      isActive: true
    },
    {
      id: "digital-graphic-designer-001",
      title: "Digital Graphic Designer",
      location: ["Remote", "Mumbai"],
      workType: ["Full-time"],
      description: "Join our design team to create engaging digital graphics for web and social media. You'll work on campaigns, website graphics, and promotional materials. Strong skills in design software and creativity are essential.",
      department: "graphic-design",
      datePosted: "2025-09-15",
      priority: 2,
      isActive: true
    },
    {
      id: "motion-graphic-designer-001",
      title: "Motion Graphic Designer",
      location: ["Bangalore"],
      workType: ["Full-time"],
      description: "We need a talented Motion Graphic Designer to create animated content and video graphics. Experience with After Effects, Premiere Pro, and motion design principles is required. You'll work on promotional videos and UI animations.",
      department: "graphic-design",
      datePosted: "2025-09-14",
      priority: 3,
      isActive: true
    },
    {
      id: "junior-web-developer-001",
      title: "Junior Web Developer",
      location: ["Chennai", "Hybrid"],
      workType: ["Full-time"],
      description: "Perfect opportunity for a Junior Web Developer to start their career. You'll work with senior developers to build web applications, learn modern technologies, and gain hands-on experience with React and JavaScript.",
      department: "web-development",
      datePosted: "2025-09-13",
      priority: 3,
      isActive: true
    },
    {
      id: "ios-app-developer-001",
      title: "iOS App Developer",
      location: ["Remote"],
      workType: ["Full-time"],
      description: "We're looking for an iOS App Developer to create native iPhone applications. Experience with Swift, Xcode, and iOS frameworks is required. You'll work on consumer apps with millions of users.",
      department: "app-development",
      datePosted: "2025-09-12",
      priority: 2,
      isActive: true
    },
    {
      id: "android-app-developer-001",
      title: "Android App Developer",
      location: ["Pune", "Remote"],
      workType: ["Full-time"],
      description: "Join our mobile team as an Android App Developer. You'll build native Android applications using Kotlin and Java. Experience with Android SDK, Material Design, and app deployment is preferred.",
      department: "app-development",
      datePosted: "2025-09-11",
      priority: 2,
      isActive: true
    },
    {
      id: "ui-designer-001",
      title: "UI Designer",
      location: ["Hybrid", "Delhi"],
      workType: ["Full-time"],
      description: "We need a UI Designer to create beautiful and functional user interfaces. You'll work on web and mobile designs, create design systems, and ensure consistent visual language across products. Figma expertise required.",
      department: "ui-ux",
      datePosted: "2025-09-10",
      priority: 3,
      isActive: true
    },
    {
      id: "python-software-developer-001",
      title: "Python Software Developer",
      location: ["Remote"],
      workType: ["Full-time"],
      description: "Looking for a Python Software Developer to build backend systems and data processing applications. Experience with Django/Flask, databases, and API development is required. You'll work on scalable software solutions.",
      department: "software-development",
      datePosted: "2025-09-09",
      priority: 2,
      isActive: true
    }
  ],
  contactInfo: {
    message: "We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.",
    linkedinText: "Share your LinkedIn profile"
  }
};

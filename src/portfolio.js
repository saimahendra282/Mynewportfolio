/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "BejawadaSai Mahendra's Portfolio",
  description:
    "This is Sai Mahendra Bejawada's portfolio website. He enjoys working on unique ideas and open-source projects, turning imagination into reality. ",
  og: {
    title: "BejawadaSai Mahendra Portfolio",
    type: "website",
    url: "https://bejawadasaimahendra.netlify.app",
  },
};

//Home Page
const greeting = {
  title: "Sai Mahendra",
  logo_name: "SaiMahendra",
  nickname: "sunny",
  subTitle:
    "Looking for opportunities in cloud computing, full-stack development, and prompt engineering. Good at using cloud Platform, building web apps, and creating AI prompts.",
  resumeLink:
    "https://drive.google.com/file/d/1tZuaSjcdXapw64t-1K6FGdmuvGP_-JM5/view?usp=sharing",
  portfolio_repository: "https://github.com/saimahendra282/Mynewportfolio.git",
  whatsappLink: "mailto:2200030548cseh@gmail.com?subject=Regarding%20portfolio&body=Hello%20Sai%2C%20I%20have%20seen%20your%20portfolio%20and%20I%20want%20to%20talk%20about%20%5Bmention%20your%20info%20here%5D..",
  githubProfile: "https://github.com/saimahendra282",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/saimahendra282",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bejawada-sai-mahendra-b18289212/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/@sunstromium",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:2200030548cseh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Medium",
  //   link: "https://medium.com/@bejawadasaimahendra",
  //   fontAwesomeIcon: "fa-x-medium", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Medium",
    link: "https://medium.com/@bejawadasaimahendra",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sai_mahendra_bejawada/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Generative AI & AI Prompting",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing generative ai models for daily life automations.",
        "⚡ Learning Agentic AI",
      ],
      softwareSkills: [
        {
          skillName: "Api Integration",
          imageSrc: "apiinegration.png",
          style: {
            width: "50px",
            hieght: "50px",
            // color: "#D00000",
          },
        },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "AI Prompting",
          imageSrc: "aiprompting.png",
          style: {
            width: "50px",
            hieght: "50px",
            // color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "👩🏻‍💻 Building responsive website front end using React",
        "⚡ Well for backend i usually prefer microservices architecture, where i use suitable language(java,python,go lang) for suitable services.",
        "🔥 For Database i am currently using nosql DBs like firebase , mongodb and aws service , as we have deal with lot of data, but i am familiar with mysql too.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying full stack web-apps on cloud platforms",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1488C6",
          },
        },
      ],
    }, 
   ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/h2200030548",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sai_30548",
    },
    {
      siteName: "Codepen",
      iconifyClassname: "simple-icons:codepen",
      style: {
        color: "#000000",
      },
      profileLink: "https://codepen.io/saimahendra",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "KLEF, Vaddeswaram",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "KLEF Vaddeswaram",
      duration: "2022 - 2026",
      descriptions: [
        " Pursuing 3rd-year B.Tech in Computer Science at KLEF, Vaddeswaram.",
        " Current academic CGPA: 9.49.",
        " Completed online courses like 'Programming in Java' and MERN Full Stack Development.",
        " Selected in the top 15 in our university's DSA codeathon.",
      ],
      // website_link: "http://iiitk.ac.in",
    },
    {
      title: "KLEF, Vaddeswaram",
      subtitle: "Online BBA Program",
      logo_path: "iiitk_logo.png",
      alt_name: "KLEF, Vaddeswaram",
      duration: "2023 - 2026",
      descriptions: [
        " I’m also doing an online BBA as a dual degree with my B.Tech.",
        " Current academic CGPA: 8.7.",
      ],
      // website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      subtitle: "- Red Hat",
      logo_path: "redhatexs.png",
      certificate_link:
        "https://drive.google.com/file/d/1TZhMHxfigmQyM1EtlAZcxn9AxOjQoFUb/view?usp=sharing",
      alt_name: "Red Hat",
      color_code: "#ffffff",
    },
    {
      title: "Salesforce Certified AI Associate",
      subtitle: "- Salesforce",
      logo_path: "salesforceasso.png",
      certificate_link:
        "https://drive.google.com/file/d/17eBNCBNLDybCPDyBH5xd1bGaJ0NEviP2/view?usp=drive_link",
      alt_name: "Sales Force",
      color_code: "#ffffff",
    },
    {
      title: "Salesforce Certified AI Specialist",
      subtitle: "- Salesforce",
      logo_path: "salesforcespec.png",
      certificate_link:
        "https://drive.google.com/file/d/1XD7j-W7OZzeB7JYOjkWh3DRiWmYvwnrW/view?usp=drive_link",
      alt_name: "Sales Force",
      color_code: "#ffffff",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      subtitle: "- Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://drive.google.com/file/d/1enA2Tugbpec8J-tD1rftTIOpmXmxF1vZ/view?usp=drive_link",
      alt_name: "GCP",
      color_code: "#ffffff",
    },

    {
      title: " Essentials Automation Certification - 2024",
      subtitle: "- Automation Anywhere",
      logo_path: "autoicon.png",
      certificate_link:
        "https://drive.google.com/file/d/1-kkvt00B8iGokpaMQ_ZcRwILxvzYEs7o/view?usp=drive_link",
      alt_name: "Automation Anywhere",
      color_code: "#ffffff",
    },
    {
      title: "Programming in Java",
      subtitle: "- Nptel",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/1sAl3q-vb-FlQPyMW8W7ZNKzxPfLEFJ7F/view?usp=drive_link",
      alt_name: "nptel",
      color_code: "#ffffff",
    },
    {
      title: "Developing Applications with SQL, Databases, and Django",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.credly.com/badges/70940fa6-4c9a-4bec-a530-182548fa6331/linked_in_profile",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "- Skill Boost",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/eda19f1e-af0a-4429-8290-106fc7351e60/badges/10165065",
      alt_name: "Skill Boost",
      color_code: "#ffffff",
    },
        {
title:"Associate Cloud Engineer Certification",
subtitle: "- Google Cloud",
logo_path: "gcp_logo.png",
certificate_link:
"https://www.credly.com/badges/874648b5-2dae-48c5-96b7-757c03169f6d/public_url",
alt_name: "Google Cloud",
color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Achievements",
  subtitle: "Hackathons, Challenges and Compititions",
  description:
    "I have worked on various projects and collaborated with talented people to create digital products for both business and consumer use.",
  header_image_path: "experience.svg",
  sections: [
   {
  title: "Events",
  work: true,
  experiences: [
    {
      title: "JPMC Code for Good 2025",
      company: "Jp Morgan Chase",
      company_url: "https://www.linkedin.com/posts/bejawada-sai-mahendra-b18289212_codeforgood-codeforgood-jpmorganchase-activity-7346077236472516609-PJ2S?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXKQwQBs9a1qPRyPJ2PgDzhyfVWvVNbjFM",
      logo_path: "jpmorganchase_logo.jpg",
      duration: "June 2025",
      location: "JP Morgan towers, Hyderabad, Telangana",
      description:
        "Participated in JPMorgan Chase’s Code for Good 2025, collaborating with a 7-member team to develop a real-world solution for PRADAN, aimed at digitizing agricultural data and supporting rural women farmers, Contributed to backend development and system integration, implementing key features such as plant disease detection using ML, automated carbon credit tracking, and localized crop prediction.",
      color: "#000000",
    },
     {
      title: "University Hackathon (Springboot)",
      company: "KLEF",
      company_url: "https://www.linkedin.com/posts/bejawada-sai-mahendra-b18289212_y22jfsd36-springboot-orm-activity-7246565730278637569-7wOK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXKQwQBs9a1qPRyPJ2PgDzhyfVWvVNbjFM",
      logo_path: "iiitk_logo.png",
      duration: "Oct 2024",
      location: "Klef, Vaddeswaram, Guntur",
      description:
        "Led a team of 3 and deployed a full-stack certification tracking system using Spring Boot microservices. I built and integrated two services — one for user management (MySQL) and another for certifications (MongoDB) — with automated expiry alerts and secure role-based access.",
      color: "#0879bf",
    },
  
    {
      title: "University Hackathon (Redhat Enterprise Learning)",
      company: "KLEF",
      company_url: "https://www.linkedin.com/posts/bejawada-sai-mahendra-b18289212_hello-everyone-i-am-happy-to-announce-that-activity-7225162291594321922-3Xkn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXKQwQBs9a1qPRyPJ2PgDzhyfVWvVNbjFM",
      logo_path: "iiitk_logo.png",
      duration: "Aug 2024",
      location: "Klef, Vaddeswaram, Guntur",
      description:
        "Led the development of a Stock Management System during an EP course hackathon; implemented event logging, receipt generation, product visualization using Chart.js, and deployed feedback handling.",
      color: "#0879bf",
    },
     {
      title: "University Hackathon (Django)",
      company: "KLEF",
      company_url: "https://www.linkedin.com/posts/gella-abhi-ram_sdp-skill-learning-ugcPost-7159231828204089344-6pTH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXKQwQBs9a1qPRyPJ2PgDzhyfVWvVNbjFM",
      logo_path: "iiitk_logo.png",
      duration: "Feb 2024",
      location: "Klef, Vaddeswaram, Guntur",
      description:
        "Led a team in developing and deploying a Student Learning Management Portal with features like course management, communication tools, and grading; built and integrated the backend systems.",
      color: "#0879bf",
    },
    {
      title: "University Hackathon (MERN)",
      company: "KLEF",
      company_url: "https://www.linkedin.com/posts/bejawada-sai-mahendra-b18289212_im-excited-to-share-our-article-about-our-activity-7102342073021845504-LwwB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXKQwQBs9a1qPRyPJ2PgDzhyfVWvVNbjFM",
      logo_path: "iiitk_logo.png",
      duration: "Aug 2023",
      location: "Klef, Vaddeswaram, Guntur",
      description:
        "Collaborated and led a team of 3 to build a full-stack web app for an airline management system. I developed the backend features, including OTP verification, flight scheduling, and API integration.",
      color: "#0879bf",
    },
  ],
},

    {
      title: "Compititions & Challenges",
      experiences: [
        {
          title: "University DSA Codeathon",
          company: "KLEF",
          company_url: "https://www.linkedin.com/in/bejawada-sai-mahendra-b18289212/details/honors/",
          logo_path: "iiitk_logo.png",
          duration: "Jan 2025",
          location: "Klef, Vaddeswaram, Guntur",
          description:
            "Secured a top 15 position in a DSA competition held at KLEF, Vaddeswaram, demonstrating strong problem-solving skills and algorithmic thinking.",
          color: "#4285F4",
        },
        
      ],
    },
      {
      title: " Virtual Internships",
      experiences: [
         {
          title: "AI-ML Virtual Internship",
          company: "EduSkills Foundation",
          company_url: "https://www.linkedin.com/in/bejawada-sai-mahendra-b18289212/details/experience/",
          logo_path: "eduskills.jpg",
          duration: "Apr 2024 - Jun 2024",
          location: "Remote",
          description:
            "In this internship, I engaged in a series of tasks aimed at building my foundational knowledge in AI and machine learning. I accessed the Google Developers account and earned several badges by completing courses primarily focused on Android Studio and the fundamentals of AI/ML. This experience allowed me to explore the intersection of mobile app development and artificial intelligence.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Master Virtual Internship",
          company: "EduSkills Foundation",
          company_url: "https://www.linkedin.com/in/bejawada-sai-mahendra-b18289212/details/experience/",
          logo_path: "eduskills.jpg",
          duration: "July 2024 - Sept 2024",
          location: "Remote",
          description:
            "During this internship, I focused on enhancing my skills in data analysis and data science. I completed six certification courses that covered essential topics such as data visualization, statistical analysis, and data manipulation techniques. This experience deepened my understanding of data science concepts and prepared me to handle real-world data challenges.",
          color: "#000000",
        },
       
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "image.png",
    description:
      "Got an idea or want to connect? I'm just a message away! Reach out to me on any of my social platforms — I usually reply within 5 minutes. Let's make something great happen!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I would like to share some of the blogs and articles that I have authored.",
    link: "https://medium.com/@bejawadasaimahendra",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chimakurthy, Ongole, Andhra Pradesh, India - 523226",
    locality: "Chimakurthy",
    country: "India",
    region: "Andhara Pradesh",
    postalCode: "523226",
    streetAddress: "selam vari bazar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ZNXBwE7F9J5xnhq47",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

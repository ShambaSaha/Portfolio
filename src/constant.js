import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
// import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
// import netlifyLogo from './assets/tech_logo/netlify.png';
// import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

import doctorLogo from './assets/work_logo/doctor.jpeg';
import trafficLogo from './assets/work_logo/traffic.jpeg';
import telematicsLogo from './assets/work_logo/telematics.jpg';
import unoLogo from './assets/work_logo/unoverse.jpeg';

import cpsLogo from './assets/education_logo/cpslogo.png';
import FiemLogo from './assets/education_logo/FIEM_Logo.jpg';
// import vpsLogo from './assets/education_logo/vps_logo.png';

export const SkillsInfo = [
    {
        title:'Frontend',
        skills:[
        {name:'HTML',logo:htmlLogo},
        {name:'CSS',logo:cssLogo},
        {name:'JavaScript',logo:javascriptLogo},
        {name:'ReactJS',logo:reactjsLogo},
        { name: 'Next JS', logo: nextjsLogo },
        {name:'Tailwind CSS',logo:tailwindcssLogo},
        ],
    },
    {
        title:'Backend',
        skills:[
        {name:'NodeJS',logo:nodejsLogo},
        {name:'ExpressJS',logo:expressjsLogo},
        {name:'MongoDB',logo:mongodbLogo},
        {name:'MySQL',logo:mysqlLogo},
        {name:'Firebase',logo:firebaseLogo},
        ],
    },
    {
        title:'Programming Languages',
        skills:[
        {name:'Python',logo:pythonLogo},
        {name:'Java',logo:javaLogo},
        {name:'C',logo:cLogo},
        {name:'JavaScript',logo:javascriptLogo},
        ],
    },

    {
        title:'Tools',
        skills:[
        {name:'Git',logo:gitLogo},
        {name:'GitHub',logo:githubLogo},
        {name:'VS Code',logo:vscodeLogo},
        ],
    },
];

export const projects = [
    {
        id:0,
        title:'Multiplayer UNO Game',
        description:'A multiplayer UNO game built with React JS, allowing real-time gameplay with 8 friends at once as well as allowing users to play against AI.',
        image: unoLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/ShambaSaha/UnoVerse-Multiplayer-UNO",
        webapp: "https://uno-verse.netlify.app/",
    },
    {
        id:1,
        title:'Smart Doctor Appointment Booking System',
        description:'A web application for booking appointments with doctors, featuring user authentication and appointment management as well as having features to book lab tests and consulting sessions with doctors virtually.',
        image: doctorLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/ShambaSaha/MediBook",
        webapp: "",
    },
    {
        id:2,
        title:'Telematics Solution for Road Transport Network',
        description:'A comprehensive telematics solution for monitoring and managing road transport networks',
        image: telematicsLogo,
        tags: ["Next JS", "MongoDB", "Express JS","OLA Maps API"],
        github: "https://github.com/ShambaSaha/parcelmanagement",
        webapp: "",
    },
    {
        id:3,
        title:'Dynamic Traffic Management System',
        description:'A system designed to dynamically manage traffic flow using real-time data and analytics.',
        image: trafficLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "Python","MapBox"],
        github: "https://github.com/ShambaSaha/IntelliTraffic",
        webapp: "",
    }
];

export const education = [
    {
        id:0,
        img: FiemLogo,
        title:'Bachelor of Technology in Computer Science and Engineering',
        institution:'Future Institute of Engineering and Management,Sonarpur',
        year:'2022 - 2026',
        description:'A final-year B.Tech student in Computer Science and Engineering, passionate about exploring emerging technologies and continuously enhancing my technical skills.',
        cgpa:'8.35',
    },
    {
        id:1,
        img: cpsLogo,
        title:'Higher Secondary (12th)',
        institution:'Calcutta Public School,Kalikapur',
        year:'2020 - 2022',
        description:'Completed Higher Secondary education from Calcutta Public School, Kalikapur in 2022.',
        cgpa:'88.75%',
    },
    {
        id:2,
        img: cpsLogo,
        title:'Secondary (10th)',
        institution:'Calcutta Public School,Kalikapur',
        year:'2019 - 2020',
        description:'Completed my Secondary Education at Calcutta Public School, Kalikapur in 2020.',
        cgpa:'92.5%',
    },
];
import { Clock, Users, Lightbulb, Sparkles } from "lucide-react"

export const projects = [
    {
        id: 1,
        title: "Medical Appointment Booking App",
        description:
            "A complete appointment scheduling system allowing patients to book medical appointments. Includes doctor profiles, specialties, verification via email, and an Doctor dashboard. Built with a secure Node.js backend and a responsive React UI.",
        imageFolder: "/images_projects/clickRdv",
        coverImage: "/images_projects/clickRdv/NrhISKv3K4.png",
        images: [
            "/images_projects/clickRdv/NrhISKv3K4.png",
            "/images_projects/clickRdv/4gqKGHBAdd.png",
            "/images_projects/clickRdv/7aFZeMBE1f.png",
            "/images_projects/clickRdv/SzQko8h82y.png",
            "/images_projects/clickRdv/YNsnqGZLpn.png",
            "/images_projects/clickRdv/ZI8ymvKoqj.png",
            "/images_projects/clickRdv/ZQJ1SE08DQ.png",
            "/images_projects/clickRdv/ogmBnuB99M.png"
        ],
        tech: ["Node.js", "Express", "MySQL", "React", "CSS Modules"],
        liveUrl: "#",
        features: [
            "Patient appointment booking & management",
            "Doctor profiles and specialty filtering",
            "Email verification system",
            "Doctor dashboard for Patient and Disponibility management",
            "Responsive design for mobile and desktop"
        ]
    },
    {
        id: 2,
        title: "Architect Portfolio & Project Showcase",
        description:
            "A complete architecture portfolio platform with a modern Next.js interface and a powerful Laravel backend. Includes project galleries, service sections, a secure contact system, and an admin dashboard for managing appointments , and client inquiries.",
        imageFolder: "/images_projects/architecte",
        coverImage: "/images_projects/architecte/chrome_PrfYRBkCIl.png",
        images: [
            "/images_projects/architecte/chrome_PrfYRBkCIl.png",
            "/images_projects/architecte/chrome_1iYmKpkLEE.png",
            "/images_projects/architecte/chrome_qk5G8cF2jR.png",
            "/images_projects/architecte/chrome_zgcQ91L5rA.png",
            "/images_projects/architecte/bcbm9opuEt.png",
            "/images_projects/architecte/lxFlfavS8Z.jpg"
        ],
        tech: ["Laravel (BackOffice)", "Next.js (FrontOffice)", "Bootstrap", "MySQL", "REST API"],
        liveUrl: "#",
        features: [
            "Dynamic project gallery with categorization",
            "RESTful API integration between Next.js and Laravel",
            "Secure admin authentication",
            "Contact form"
        ]
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        description: "A feature-rich e-commerce solution supporting product browsing, cart management, secure checkout.",
        imageFolder: "/images_projects/ecoomerce",
        coverImage: "/images_projects/ecoomerce/vbzGCkOa61.png",
        images: [
            "/images_projects/ecoomerce/vbzGCkOa61.png",
            "/images_projects/ecoomerce/6l96UJ0T4j.png",
            "/images_projects/ecoomerce/6ldtwJFMfD.png",
            "/images_projects/ecoomerce/Rav82fe9sB.png",
            "/images_projects/ecoomerce/Yj8ew47Hz0.png",
            "/images_projects/ecoomerce/bqlN3CfoUJ.png",
            "/images_projects/ecoomerce/iFN34VNjOV.png",
            "/images_projects/ecoomerce/tOZQtrY5Vr.png"
        ],
        tech: ["Php Native", "PDO", "Mysql"],
        liveUrl: "#",
        features: [
            "Product catalog with advanced filtering",
            "Secure shopping cart and checkout",
            "User authentication and order history",
            "Admin panel for product management and statistics"
        ]
    },
    {
        id: 4,
        title: "Aventures Platform",
        description: "Aventures platform is a web application that allows users to discover and add adventures. It features a user-friendly interface, a secure authentication system, and a database of adventures. The platform also includes a statictics aventures and users.",
        imageFolder: "/images_projects/plateformVoyage",
        coverImage: "/images_projects/plateformVoyage/sVnrq0RhmE.jpg",
        images: [
            "/images_projects/plateformVoyage/sVnrq0RhmE.jpg",
            "/images_projects/plateformVoyage/5gRnkcQQu9.png",
            "/images_projects/plateformVoyage/Ca2L2Wuir0.png",
            "/images_projects/plateformVoyage/Ifx6BNmy6g.png",
            "/images_projects/plateformVoyage/NsEyRHWKOi.png",
            "/images_projects/plateformVoyage/X0dZ1J0ek9.png",
            "/images_projects/plateformVoyage/pMjKLjHgj0.png"
        ],
        tech: ["Laravel","Blade","Tailwind CSS", "MySQL",],
        liveUrl: "#",
        features: [
            "Destination discovery with rich media",
            "Add Aventures",
            "Gestion Users and Aventures",
            "Analytics and Statistics"
        ]
    },
    {
        id: 5,
        title: "MECUM",
        description: "An immersive exhibition that unveils modern and traditional works through an interactive visual journey, offering visitors a unique and inspiring experience.",
        imageFolder: "/images_projects",
        coverImage: "/images_projects/mecum.jpg",
        images: [
            "/images_projects/mecum.jpg"
        ],
        tech: ["Html", "Css", "Js"],
        liveUrl: "https://mucumw.web.app/",
        features: [
            "information page",
            "gallery",
            "Form "
        ]
    },
    {
        id: 6,
        title: "Movie Discovery App",
        description: "A movie site web allowing users to search for movies, view details, reviews, and create watchlists.",
        imageFolder: "/images_projects",
        coverImage: "/images_projects/movie.png",
        images: [
            "/images_projects/movie.png"
        ],
        tech: ["HTML", "CSS", "Vanilla JavaScript",],
        liveUrl: "https://movieweb-9dbbc.web.app/",
        features: [
            "Search and filter movies",
            "Detailed movie information",
            "Personalized watchlists",
            "like movie"
        ]
    },
    {
        id: 7,
        title: "Shoes Store",
        description: "A shoes store website allowing users to search for shoes, view details, reviews.",
        imageFolder: "/images_projects",
        coverImage: "/images_projects/egm3Z8PhAC.jpg",
        images: [
            "/images_projects/egm3Z8PhAC.jpg"
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://site-web-8c998.firebaseapp.com/",
        features: [
            "all shoes",
            "card shoes information",
            "Form contact"
        ]
    }
]

import mushroomMania from "../assets/images/MushroomMania.png";
import crowdFighter from "../assets/images/CrowdFighter.png";
import zombieHospital from "../assets/images/ZombieHospital.png";

const projects = [
    {
        id: 1,
        number: "01",
        title: "MushroomMania",
        category: "WEB EXPERIENCE",
        year: "2026",
        description: "An interactive web experience focused on water conservation, combining modern UI design with motion and responsive interactions.",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        image: mushroomMania,
        link: "https://charlesrincon.itch.io/mushroommania",
    },
    {
        id: 2,
        number: "02",
        title: "CrowdFighter",
        category: "GAME DEVELOPMENT",
        year: "2026",
        description: "A multiplayer game developed in Unity, featuring real-time player synchronization and networked gameplay.",
        technologies: ["Unity", "C#", "Photon Fusion"],
        image: crowdFighter,
        link: "https://charlesrincon.itch.io/crowdfighter",
    },
    {
        id: 3,
        number: "03",
        title: "Zombie Hospital",
        category: "INTERACTIVE MEDIA",
        year: "2026",
        description: "A physical board game enhanced with augmented reality and multiplayer features through a mobile application.",
        technologies: ["Unity", "Vuforia", "Photon Fusion"],
        image: zombieHospital,
        link: "https://charlesrincon.itch.io/zombie-hospital",
    },
];

export default projects;
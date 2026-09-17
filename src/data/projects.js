const projects = [
    {
        id: 1,
        number: "01",
        title: "MushroomMania",
        category: "WEB EXPERIENCE",
        year: "2026",
        description: "An interactive web experience focused on water conservation, combining modern UI design with motion and responsive interactions.",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        image: `${import.meta.env.BASE_URL}images/MushroomMania.png`,
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
        image: `${import.meta.env.BASE_URL}images/CrowdFighter.png`,
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
        image: `${import.meta.env.BASE_URL}images/ZombieHospital.png`,
        link: "https://charlesrincon.itch.io/zombie-hospital",
    },
];

export default projects;
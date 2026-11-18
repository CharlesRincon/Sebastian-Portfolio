import mushroomMania from "../assets/images/MushroomMania.jpg";
import crowdFighter from "../assets/images/CrowdFighter.jpg";
import zombieHospital from "../assets/images/ZombieHospital.jpg";
import coralium from "../assets/images/Coralium.jpg";

const projects = [
    {
        id: 1,
        number: "01",
        title: "MushroomMania",
        category: "2D PLATFORMER",
        year: "2026",
        description: "2D platformer developed as a two-person team, where I was responsible for all programming while my teammate created the art. Implemented the player controller, melee combat, ability-based progression (double jump) and an in-game map system. Released as a WebGL build.",
        technologies: ["Unity", "C#", "WebGL"],
        image: mushroomMania,
        link: "https://charlesrincon.itch.io/mushroommania",
    },
    {
        id: 2,
        number: "02",
        title: "CrowdFighter",
        category: "BEAT 'EM UP",
        year: "2026",
        description: "Pixel-art beat 'em up set in urban back alleys. Built the real-time combat system, enemy AI and health management, focusing on responsive controls and readable feedback. Released as a WebGL build.",
        technologies: ["Unity", "C#", "WebGL"],
        image: crowdFighter,
        link: "https://charlesrincon.itch.io/crowdfighter",
    },
    {
        id: 3,
        number: "03",
        title: "Zombie Hospital",
        category: "FPS / SURVIVAL HORROR",
        year: "2026",
        description: "First-person survival horror shooter set in an abandoned hospital. Implemented shooting and ammo management, zombie AI and an objective-driven progression system, with lighting designed to build tension. Released as a WebGL build.",
        technologies: ["Unity", "C#", "WebGL"],
        image: zombieHospital,
        link: "https://charlesrincon.itch.io/zombie-hospital",
    },
    {
        id: 4,
        number: "04",
        title: "Coralium",
        category: "2.5D ADVENTURE",
        year: "IN DEVELOPMENT",
        description: "2.5D underwater adventure by Tamarillo Games, upcoming on Steam. Players guide a magical coral polyp that restores reefs and learns abilities from other fish. I contribute as a programmer within the development team, working across the game's systems.",
        technologies: ["Unity", "C#"],
        image: coralium,
        link: "https://store.steampowered.com/app/2896770/Coralium/",
        linkLabel: "VIEW ON STEAM",
    },
];

export default projects;
import { FaAmazon, FaTrophy, FaMedal, FaAndroid, FaUsers, FaCode } from "react-icons/fa";
import styles from "./Achievements.module.css";

function Achievements() {
    const achievements = [
        {
            icon: <FaAmazon className={styles.icon} />,
            title: "Amazon ML Summer School 2025",
            description: "Selected among 60,000+ applicants for Amazon Machine Learning Summer School 2025."
        },
        {
            icon: <FaTrophy className={styles.icon} />,
            title: "Winner - Medhamanthan Hackathon (VEDA 2K25)",
            description: "Won first place competing against 75+ teams by developing an innovative project solution."
        },
        {
            icon: <FaMedal className={styles.icon} />,
            title: "Finalist - Prajwalan National Hackathon",
            description: "Reached the final round among 130+ teams for developing an AI-based educational project."
        },
        {
            icon: <FaAndroid className={styles.icon} />,
            title: "Co-Lead - Android Development, GDG SVECW",
            description: "Led Android initiatives under Google Developer Group SVECW and mentored juniors."
        },
        {
            icon: <FaUsers className={styles.icon} />,
            title: "Student Coordinator - The Hindu Future India Club",
            description: "Organized and managed student activities promoting leadership and innovation."
        },
        {
            icon: <FaCode className={styles.icon} />,
            title: "LeetCode & HackerRank Achievements",
            description: "Solved 250+ LeetCode problems and achieved 5★ in Problem Solving on HackerRank."
        }
    ];

    return (
        <div id="achievements" className={styles.background}>
            <h1>Achievements</h1>
            <div className={styles.container}>
                {achievements.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>{item.icon}</div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.desc}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;

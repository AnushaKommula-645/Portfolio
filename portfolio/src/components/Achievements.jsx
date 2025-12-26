import { FaAmazon, FaTrophy, FaMedal, FaAndroid, FaUsers, FaCode, FaGoogle } from "react-icons/fa";
import styles from "./Achievements.module.css";

function Achievements() {
    const achievements = [
        {
            icon: <FaTrophy className={styles.icon} />,
            title: "Winner - Medhamanthan Hackathon (VEDA 2K25)",
            description: "Won first place competing against 75+ teams by developing an innovative project solution."
        },
        {
            icon: <FaAmazon className={styles.icon} />,
            title: "Amazon ML Summer School 2025",
            description: "Selected among 60,000+ applicants for Amazon Machine Learning Summer School 2025."
        },
        {
            icon: <FaAndroid className={styles.icon} />,
            title: "Co-Lead - Android Development, GDG SVECW",
            description: "Co-led Android initiatives under Google Developer Group SVECW and mentored juniors."
        },
        {
            icon: <FaMedal className={styles.icon} />,
            title: "Finalist - Prajwalan National Hackathon",
            description: "Reached the final round among 130+ teams for developing an Home Services app."
        },
        {
            icon: <FaGoogle className={styles.icon} />,
            title: "Google STEP Internship – Final Round",
            description: "Advanced to the final interview round of Google’s STEP Internship 2024, demonstrating strong problem-solving and coding skills."
        },
        {
            icon: <FaUsers className={styles.icon} />,
            title: "Student Coordinator - The Hindu Future India Club",
            description: "Contributed to The campus club in promoting general knowledge through events, posters, and social media engagement."
        },
        {
            icon: <FaCode className={styles.icon} />,
            title: "LeetCode & HackerRank Achievements",
            description: "Solved 300+ LeetCode problems and achieved 5★ in Problem Solving on HackerRank."
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

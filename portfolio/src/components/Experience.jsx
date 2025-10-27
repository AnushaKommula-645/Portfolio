import styles from "./Experience.module.css";
import SmartBridge from "../assets/SmartBridge.png"; 

function Experience() {
  const experiences = [
    {
      company: "SmartBridge",
      role: "Generative AI with IBM Cloud Intern (Virtual)",
      duration: "May 2025 - July 2025",
      logo: SmartBridge,
      description: [
        "Explored Generative AI concepts, Watsonx AI, and designed three prototype projects using LLMs, prompt engineering, and Retrieval-Augmented Generation.",
        "Developed an AI educational assistant using FastAPI and IBM Granite & Gemini Flash, enabling quiz generation and reducing manual preparation time by 70% for students."
      ]
    }
  ];

  const displayExperience = experiences.map((exp, index) => (
    <div className={styles.expContainer} key={index}>
      <div className={styles.expHeader}>
        <img src={exp.logo} alt="company logo" className={styles.logo} />
        <div>
          <h3 className={styles.company}>{exp.company}</h3>
          <h4 className={styles.role}>{exp.role}</h4>
          <p className={styles.duration}>{exp.duration}</p>
        </div>
      </div>
      <ul className={styles.descList}>
        {exp.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div id="experience">
      <h1>Experience</h1>
      <div className={styles.container}>{displayExperience}</div>
    </div>
  );
}

export default Experience;

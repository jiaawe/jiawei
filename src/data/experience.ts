import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TikTok",
    role: "Machine Learning Engineer Intern (Risk Control)",
    period: "Jan 2025 - May 2025",
    description: "Developed real-time address clustering strategies to flag >2500 risky transactions per day. Built real-time address embedding & recall pipelines, processing addresses with >1000 QPS in <110ms."
  },
  {
    id: 2,
    company: "TikTok",
    role: "Data Science Intern",
    period: "May 2024 - Aug 2024",
    description: "Developed a Retrieval Augmented Generation pipeline to retrieve thousands of videos with >95% accuracy within 3s. Sped up inference speeds of generative models by >30% via open-source frameworks. Researched on dataset distillation methods to reduce training time and costs by >50%."
  },
  {
    id: 3,
    company: "Government Technology Agency (GovTech)",
    role: "AI Engineer Intern",
    period: "Jan 2024 - Apr 2024",
    description: "Researched and developed multimodal machine learning models for video analytics applications. Built processing and training pipelines on AWS to automate data ingestion, model monitoring and retraining."
  },
  {
    id: 4,
    company: "foodpanda",
    role: "Data Analyst Intern",
    period: "May 2023 - Dec 2023",
    description: "Spearheaded an automated quarterly survey sentiment analysis project, saving over 70% manual hours. Pioneered a machine learning project to predict potential voluntary attrition and analysed their factors leading to it."
  }
];
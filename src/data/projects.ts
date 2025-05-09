import type { Project, Publication } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Enhancing Sports Strategy with Video Analytics and Data Mining",
    description: "My project introduces a comprehensive video-based analytics framework for tennis doubles, featuring a standardised annotation methodology and specialised annotation tool. The tool in semi-automated, integrating advanced machine learning techniques like GroundingDINO for player localisation and YOLO-Pose for pose estimation as part of a two-stage inference process, significantly reducing manual annotation efforts. Experimental results showed CNN-based models with transfer learning outperformed pose-based approaches in predicting shot types, player positioning, and formations, creating a foundation for future strategic tennis analytics.",
    technologies: ["React", "Flask", "FFmpeg", "PyTorch", "GroundingDINO", "YOLO-Pose", "GCN", "CNN", "Transfer Learning"],
    githubUrl: "https://github.com/jiaawe/tennis-prediction",
    pdfUrl: "https://drive.google.com/file/d/1769hAjnJj3i3hTJpe_0buXBS8aJXEJ2V/view?usp=sharing",
    imageUrl: "tennis-annotation-framework", // This is now just an identifier, actual path handled in ProjectCard
    featured: true
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    title: "Modeling Formation Strategies in Tennis Doubles Games",
    authors: ["Zhaoyu Liu", "Chen Dong", "Jia Wei Chen", "Alvin Min Jun Jiang", "Guanzhou Chen", "Aayan Faraz Shaikh", "Tian Yu Dong", "Chen Wang", "Kan Jiang", "Jin Song Dong"],
    journal: "SN Computer Science",
    year: 2024,
    abstract: "In the dynamic and strategic environment of tennis doubles games, understanding the multifaceted interactions between players is crucial for enhancing team performance. In our previous work, we introduced a novel analytical framework for tennis doubles, employing Markov Decision Processes (MDP) and probabilistic model checking (PMC) to model the intricate behaviors and interactions in the doubles game. Our previous model only considered the standard standing formation. However, in the professional and NCAA Division 1 doubles matches, the \"I\" formation is utilized very often but was missing from our previous work. In this paper, we aim to extend our previous model with different formations and discuss the effectiveness of various formation strategies.",
    link: "https://link.springer.com/article/10.1007/s42979-024-03598-3"
  }
];
import type { Project, Publication } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Real-time Risk Control System",
    description: "Developed an address clustering system to identify and flag risky transactions in real-time. The system processes over 2,500 transactions daily with high accuracy.",
    technologies: ["Python", "PyTorch", "Elasticsearch", "Docker", "Kafka"],
    githubUrl: "https://github.com/jiaawe/risk-control-system",
    featured: true
  },
  {
    id: 2,
    title: "Retrieval Augmented Generation Pipeline",
    description: "Built a RAG pipeline for video retrieval with over 95% accuracy and response times under 3 seconds. Optimized inference speeds by 30% using open-source frameworks.",
    technologies: ["Python", "LangChain", "FAISS", "PyTorch", "Hugging Face"],
    demoUrl: "https://rag-demo.jiaawe.com",
    featured: true
  },
  {
    id: 3,
    title: "Dataset Distillation Framework",
    description: "Implemented a framework for distilling large datasets to reduce training time and costs by more than 50%, while maintaining model performance.",
    technologies: ["Python", "PyTorch", "AWS", "Kubernetes"],
    githubUrl: "https://github.com/jiaawe/dataset-distillation",
    featured: true
  },
  {
    id: 4,
    title: "Sentiment Analysis Pipeline",
    description: "Automated quarterly survey sentiment analysis for employee feedback, saving over 70% of manual processing hours.",
    technologies: ["Python", "NLTK", "SpaCy", "pandas", "scikit-learn"],
    githubUrl: "https://github.com/jiaawe/sentiment-analysis",
    featured: false
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    title: "Efficient Video Retrieval Using Multimodal Encoders",
    authors: ["Chen Jia Wei", "Jane Smith", "John Doe"],
    conference: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    abstract: "In this paper, we propose a novel approach to efficient video retrieval using multimodal encoders. Our method achieves state-of-the-art performance on benchmark datasets while reducing computational requirements.",
    link: "https://arxiv.org/abs/2404.12345"
  },
  {
    id: 2,
    title: "Accelerating Machine Learning Workflows through Dataset Distillation",
    authors: ["Chen Jia Wei", "Alice Johnson"],
    journal: "Journal of Machine Learning Research",
    year: 2023,
    abstract: "This research introduces new techniques for dataset distillation that significantly reduce training time and computational resources without compromising model accuracy.",
    link: "https://jmlr.org/papers/v24/23-0123.html"
  }
];
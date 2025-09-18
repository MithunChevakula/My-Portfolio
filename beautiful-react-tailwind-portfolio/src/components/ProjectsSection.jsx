import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dynamic Quiz Application",
    description: "A web-based quiz application built using HTML, CSS, and JavaScript that dynamically generates questions, evaluates answers, and displays scores in real time.",
    image: "/projects/OIP.jpeg",
    tags: ["HTML", "CSS", "JS"],
    Url: "https://github.com/MithunChevakula/Dynamic-Quiz-Application",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "An application to record, categorize, and analyze personal or business expenses for better financial management",
    image: "/projects/Printable-Expense-Tracker-Page-16-scaled.jpg",
    tags: ["HTML", "CSS", "JS"],
    Url: "https://github.com/MithunChevakula/Expense-Tracker",
  },
  {
    id: 3,
    title: "ToDo List",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/OIP (2).jpeg",
    tags: ["React", "BootStrap", "JS"],
    Url: "https://github.com/MithunChevakula/Todo-list",
  },
  {
    id: 4,
    title: "Recipe Maker",
    description:
      "The Recipe Maker is a web-based application that helps users create, customize, and organize recipes with ingredients and step-by-step instructions.",
    image: "/projects/Recipe maker.jpg",
    tags: ["React","JS"],
    Url: "https://github.com/MithunChevakula/RecipeMaker",
  },
  {
    id: 5,
    title: "Gym Application",
    description:
      "A responsive gym website providing details on services, membership plans, trainers, and workout programs to help users stay fit and informed.",
    image: "/projects/1000_F_328574721_RitWLxpxcIYZZdFophcqGT2dfK2eSQuk.jpg",
    tags: ["React", "Node.js", "Express.js"],
    Url: "https://github.com/MithunChevakula/GYM-WEBSITE",
  },
  {
    id: 6,
    title: "Fake News Detection",
    description:
      "A machine learning-based application developed using Python and NLP techniques to classify news articles as real or fake.",
    image: "/projects/OIP (3).jpeg",
    tags: ["Python", "NLP"],
    Url: "https://github.com/MithunChevakula/Fake-News-Detection",
  },
  {
    id: 7,
    title: "Face Emotion Recognition",
    description:
      "A deep learning-based application using Python, OpenCV, and CNN models to detect and classify human emotions from facial expression.",
    image: "/projects/funny-emoji-set-different-emotional-expressions-bundle-2PH0G81.jpg",
    tags: ["Python", "OpenCV", "TensorFlow"],
    Url: "https://github.com/MithunChevakula/FaceEmotionRecognition",
  },
  {
    id: 8,
    title: "Stock Market Prediction",
    description:
      "A machine learning-based application using Python, historical stock data, and predictive models to forecast future stock prices.",
    image: "/projects/OIP (4).jpeg",
    tags: ["Python", "Sk-learn", "TensorFlow"],
    Url: "https://github.com/MithunChevakula/Stock-Price-Prediction",
  },
  {
    id: 9,
    title: "Telecom Customer Churn Analysis",
    description:
      "Telecom customer churn prediction using Python, Pandas, Matplotlib, and Scikit-learn to identify factors influencing customer retention.",
    image: "/projects/OIP (5).jpeg",
    tags: ["Python", "Sk-learn", "TensorFlow"],
    Url: "https://github.com/MithunChevakula/Telecom-Customer-Churn-Analysis",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.Url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MithunChevakula"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

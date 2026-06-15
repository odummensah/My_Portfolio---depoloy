import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Hospital Management System and Patient Mobile App",
    description: "Full-stack hospital management system with full functionalities, ready for deployment.",
    tech: ["React", "React Native", "Node.js", "MySQL", "Bcrypt, JWT, etc"],
    linkedinUrl: "https://www.linkedin.com/posts/samuel-odum-mensah-4884a9231_100daysofcodechallenge-codetrainafrica-codetraingh-activity-7457103649446678528-wdPx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqaWgBPlwdPAaVd6cNsN54GlDMvHYYjK4",
    codeLink: "https://github.com/odummensah/hospital-frontend.git",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Task Management System - To My Aid Ghana Foundation",
    description: "Collaborative task manager with real-time updates and team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    linkedinUrl: "https://www.linkedin.com/posts/samuel-odum-mensah-4884a9231_100daysofcodechallenge-codetrainafrica-codetraingh-activity-7361774847955193857-1FqY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqaWgBPlwdPAaVd6cNsN54GlDMvHYYjK4",
    codeLink: "https://github.com/odummensah/To-My-Aid-Task-Manager-App.git",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Finance AI Chatbot - AkuSika",
    description: "This innovative large language model (LLM) is designed to assist users in tracking their financial records and performing essential financial computations, including tax calculations, VAT, income tax, and commissions.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    linkedinUrl: "https://www.linkedin.com/posts/samuel-odum-mensah-4884a9231_100daysofcodechallenge-codetrainafrica-codetraingh-activity-7469039144447467521-pjQw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqaWgBPlwdPAaVd6cNsN54GlDMvHYYjK4",
    codeLink: "https://github.com/odummensah/finance-chatbot.git",
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "School Website - Esbina Educational Center",
    description: "Interactive school website.",
    tech: ["React", "PostgreSQL", "Node.js"],
    linkedinUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_VIDEO_ID_4",
    codeLink: "https://github.com/yourusername/fitnessapp",
    image: "/project4.jpg"
  },
  {
    id: 5,
    title: "School Management System - Esbina Educational Center",
    description: "Schhool management system with student, teacher, and admin dashboards with full functionalities and Payment API's ready for deployment.",
    tech: ["React", "React Native", "FastAPI", "Node.js", "PostgreSQL"],
    linkedinUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_VIDEO_ID_5",
    codeLink: "https://github.com/yourusername/ai-generator",
    image: "/project5.jpg"
  },
  {
    id: 6,
    title: "E-commerce website - Kweenz Collection and more",
    description: "e-commerce website with payment API'S, Ordering and tracking products ready for deployment.",
    tech: ["Laravel", "MySQL", "Vue.js", "Tailwind"],
    linkedinUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_VIDEO_ID_6",
    codeLink: "https://github.com/yourusername/realestate-crm",
    image: "/project6.jpg"
  }
];
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
   <Head>
  <title>Samuel Odum-Mensah | Professional Portfolio</title>
  <meta name="description" content="Full-stack developer specializing in React, Next.js, and SQL, modern web technologies with skills in network and systems administration." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
  </Head>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-teal-600">SO-M</span>
          <div className="hidden md:flex gap-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <a 
  href="/resume.pdf" 
  download
  className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg"
>
  Resume
</a>
        </div>
      </nav>

    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-4xl mx-auto text-center">
    <div className="mb-6 inline-block">
      <div className="w-32 h-32 rounded-full border-4 border-teal-600 shadow-xl overflow-hidden mx-auto transition-transform duration-300 hover:scale-105">
        <img 
          src="/my-image.jpg" 
          alt="Samuel Odum-Mensah"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4">
      Samuel Odum-Mensah
    </h1>
    <p className="text-xl md:text-2xl text-teal-600 mb-4">
      Full-Stack Developer
    </p>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
      Building exceptional digital experiences with modern web technologies.
      Specialized in React, Next.js, cloud architecture with skills in network and systems administration.
    </p>
    <div className="flex gap-4 justify-center flex-wrap">
      <button
        onClick={() => scrollToSection('projects')}
        className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium"
      >
        View My Work
      </button>
      <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-all font-medium">
        Contact Me
      </button>
    </div>
  </div>
</section>

    {/* Projects Section */}
<section id="projects" className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured Projects
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore my work - Watch demos and check out the code
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        >
          {/* Centered Title Box - No Image */}
          <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-center p-6">
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
              {project.title}
            </h3>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a 
                href={project.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Watch Demo Video →
              </a>
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-teal-600 font-medium transition-colors"
              >
                Source Code →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a passionate full-stack developer with expertise in building web applications 
                from concept to deployment. My background combines software development with 
                network and systems administration.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I specialize in creating responsive, user-friendly applications using React, Next.js, 
                and modern backend technologies. Every project I work on is built with scalability, 
                security, and performance in mind.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, I enjoy contributing to open source, mentoring aspiring developers, 
                and staying up-to-date with the latest tech trends.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Core Skills</h3>
              <div className="space-y-3">
                {[
                  { skill: "React/Next.js", level: "90%" },
                  { skill: "Node.js/Python", level: "85%" },
                  { skill: "SQL/MySQL/PostgreSQL", level: "85%" },
                  { skill: "Network & Systems Admin", level: "80%" },
                  { skill: "Cloud Architecture", level: "75%" }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.skill}</span>
                      <span className="text-teal-600">{item.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-600 rounded-full transition-all duration-500" 
                        style={{ width: item.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

           {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's work together to build something amazing.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-8">
  {/* GitHub */}
  <a 
    href="https://github.com/odummensah" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-center group"
  >
    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:bg-gray-900 group-hover:scale-110">
      <FontAwesomeIcon icon={faGithub} className="text-4xl text-gray-800 group-hover:text-white transition-colors" />
    </div>
    <p className="text-sm text-gray-600">@odummensah</p>
  </a>

  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/samuel-odum-mensah" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-center group"
  >
    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110">
      <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-blue-700 group-hover:text-white transition-colors" />
    </div>
    <p className="text-sm text-gray-600">samuel-odum-mensah</p>
  </a>

  {/* YouTube */}
  <a 
    href="https://youtube.com/@SAMUELODUM-MENSAH" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-center group"
  >
    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110">
      <FontAwesomeIcon icon={faYoutube} className="text-4xl text-red-600 group-hover:text-white transition-colors" />
    </div>
    <p className="text-sm text-gray-600">@samuelodum-mensah</p>
  </a>
</div>
          
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 transition-all" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 transition-all" 
              />
              <textarea 
                rows={4} 
                placeholder="Your Message" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 transition-all"
              ></textarea>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2026 samuelodummensah. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
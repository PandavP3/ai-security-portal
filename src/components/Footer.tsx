
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const [openDialog, setOpenDialog] = useState(false);
  
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "AI Engineer",
      bio: "Specialized in computer vision and object detection algorithms. Proficient in Python, TensorFlow, PyTorch, and C++.",
      contribution: "Developed the object frisking detection model and API integration."
    },
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      bio: "Expert in web application development with focus on security implementations. Skills include JavaScript, React, Node.js, and Java.",
      contribution: "Designed the front-end interface and implemented the video processing functionality."
    },
    {
      name: "Michael Rodriguez",
      role: "Machine Learning Specialist",
      bio: "Focused on behavioral recognition systems and gender detection algorithms. Skilled in Python, R, and TensorFlow.",
      contribution: "Created and trained the gender detection model and implemented the sign recognition system."
    },
    {
      name: "Priya Patel",
      role: "UX/UI Designer",
      bio: "Specialized in creating user-friendly interfaces for security applications. Proficient in Figma, Adobe XD, and CSS.",
      contribution: "Designed the user interface and conducted usability testing."
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI<span className="text-neonBlue">Secure</span>
            </h3>
            <p className="text-gray-400">
              Advanced AI-driven security solutions for a safer world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-neonBlue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-400 hover:text-neonBlue transition-colors">
                  Live Demo
                </Link>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-gray-400 hover:text-neonBlue transition-colors text-left">
                      About Group Members
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-gray-800 max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-neonBlue">Our Team</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {teamMembers.map((member, index) => (
                        <div key={index} className="card">
                          <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                          <p className="text-neonBlue mb-3">{member.role}</p>
                          <p className="text-gray-400 mb-3">{member.bio}</p>
                          <h4 className="text-sm font-semibold text-white mt-3">Contribution:</h4>
                          <p className="text-gray-400">{member.contribution}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-white mb-3">About Our Project</h3>
                      <p className="text-gray-400">
                        The AI Security Screening project leverages cutting-edge artificial intelligence to enhance security measures across various environments. Our system combines three key technologies: object frisking for contraband detection, gender detection for demographic analysis, and sign recognition for automated alert systems.
                      </p>
                      <p className="text-gray-400 mt-3">
                        Built using TensorFlow and PyTorch for the AI models, with React for the frontend interface, our platform offers real-time analysis capabilities while maintaining high accuracy rates. The system is designed to be deployable in high-security areas such as airports, government buildings, and public venues.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: info@aisecure.com<br />
              Phone: (123) 456-7890
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social links could go here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} AISecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

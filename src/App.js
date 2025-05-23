import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';


const logoMap = {
  'Teaching Assistant': '/logos/rivier.png',
  'Social Media Manager': '/logos/rivier.png',
  'Senior Developer': '/logos/jivox.png',
  'Associate Developer': '/logos/jivox.png',
  'Intern': '/logos/jivox.png'
};

const experiences = [
  {
    role: 'Teaching Assistant',
    company: 'Rivier University',
    location: 'Nashua',
    duration: 'May 2024 – May 2025',
    bullets: [
      'Assisted professors in networking, database, and cybersecurity courses',
      'Led hands-on labs and troubleshooting in networking and SQL-based technologies',
      'Supported academic growth through grading, zyBooks guidance, and code reviews'
    ]
  },
  {
    role: 'Social Media Manager',
    company: 'Rivier University',
    location: 'Nashua',
    duration: 'Dec 2023 – Sep 2024',
    bullets: [
      'Managed and optimized university social platforms, increasing engagement by 20%',
      'Created content using Premier Pro and Adobe Express',
      'Leveraged analytics tools to monitor performance and guide strategy'
    ]
  },
  {
    role: 'Senior Developer',
    company: 'Jivox Software Pvt. Ltd',
    location: 'Bengaluru',
    duration: 'Apr 2023 – Jul 2023',
    bullets: [
      'Analyzed ad campaign data with Tableau and AWS to boost Williams Sonoma sales by 15%',
      'Improved ad CTR by 10% through logic refinements and UI recommendations'
    ]
  },
  {
    role: 'Associate Developer',
    company: 'Jivox Software Pvt. Ltd',
    location: 'Bengaluru',
    duration: 'Sep 2019 – May 2023',
    bullets: [
      'Developed animated ad creatives using HTML/CSS/JS, jQuery, Greensock',
      'Implemented logic-based rendering with APIs; saved 4+ hours/week via automation'
    ]
  },
  {
    role: 'Intern',
    company: 'Jivox Software Pvt. Ltd',
    location: 'Bengaluru',
    duration: 'Mar 2019 – Sep 2019',
    bullets: [
      'Built animated ads meeting production standards in record time',
      'Deployed ad for APAC client within 24 hours from start to production'
    ]
  }
];

function App() {
  const contactRef = useRef(null);
const [showSidebar, setShowSidebar] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setShowSidebar(entry.isIntersecting),
    { threshold: 0.5 }
  );

  if (contactRef.current) {
    observer.observe(contactRef.current);
  }

  return () => {
    if (contactRef.current) observer.unobserve(contactRef.current);
  };
}, []);


  return (
    <main className="text-gray-900 min-h-screen font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-700">Vinu</div>
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#experience" className="hover:text-blue-500 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#resume" className="hover:text-blue-500 transition">Resume</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Header Section with Background Image */}
      <section
        id="about"
        className="text-center py-24 bg-cover bg-no-repeat shadow-sm px-4 text-white"
        style={{
          backgroundImage: "url('/images/polar-bg.jpg')",
          backgroundPosition: 'center'
        }}
      >
        <div className="inline-block bg-black/40 px-1 py-2 rounded-md backdrop-blur-sm">
          <h1 className="text-4xl text-white font-bold mb-1 drop-shadow">Vinu Paul</h1>
          <p className="text-lg text-white drop-shadow">Software Developer | Data Analyst | Full Stack Enthusiast</p>
        </div>

      </section>

      {/* About Me with Soft Background */}
      <section className="max-w-5xl mx-auto py-10 px-4 bg-white/90 backdrop-blur-md rounded-md mt-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p className="text-md text-gray-800 leading-relaxed">
            I'm a software developer with over 4 years of industry experience, having worked with brands like Nike,
            Marriott, and Williams Sonoma. I specialize in full-stack development and data analytics, and I recently
            completed my Master’s in Computer Science from Rivier University. I'm passionate about building elegant
            user interfaces, solving real-world problems, and biking through the unknown.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10 text-center border-b pb-2">Experience</h2>
          <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500 before:-translate-x-1/2 before:hidden md:before:block">
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-full md:w-1/2 px-4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center mb-2">
                      <img src={logoMap[job.role]} alt="logo" className="w-8 h-8 mr-3 rounded-full shadow-sm" />
                      <h3 className="text-lg font-bold text-blue-700">{job.role}</h3>
                    </div>
                    <p className="text-sm text-gray-600 italic mb-2">{job.company} · {job.location} · {job.duration}</p>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                      {job.bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-2">Climate Change Simulator</h3>
              <p className="text-gray-700">
                An interactive educational web app that visualizes how daily actions affect global climate metrics.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-2">Satellite onboard software lifecycle non-conformances analysis </h3>
              <p className="text-gray-700">
                Using the MapReduce Algorithm on a SaaS that efficiently processes over 200 terabytes of Big Data, and extending it to PaaS which simplifies and streamlines large-scale data processing for long-term convenience. Tools used: JAVA, Apache Hadoop, AWS and Tableau              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 inline-block pb-2">Skills</h2>

          {/* Frontend Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Frontend</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6">
                {[
                  { name: 'JavaScript / ReactJS', icon: '/logos/reactjs.png', level: 5 },
                  { name: 'HTML / CSS / Tailwind', icon: '/logos/tailwind.jpeg', level: 5 }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg text-gray-800 text-sm sm:text-base flex flex-col items-center justify-center relative group"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2 rounded-full object-contain" />
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-yellow-500 text-sm mt-1" title={`Proficiency: ${'★'.repeat(skill.level)}${'☆'.repeat(5 - skill.level)}`}>
                      {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Backend</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6">
                {[
                  { name: 'Python / Java', icon: '/logos/python.jpeg', level: 4 },
                  { name: 'SQL / MySQL', icon: '/logos/sql.png', level: 4 }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg text-gray-800 text-sm sm:text-base flex flex-col items-center justify-center relative group"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2 rounded-full object-contain" />
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-yellow-500 text-sm mt-1" title={`Proficiency: ${'★'.repeat(skill.level)}${'☆'.repeat(5 - skill.level)}`}>
                      {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Cloud Skills */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Tools & Cloud</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {[
                  { name: 'AWS', icon: '/logos/aws-git.png', level: 4 },
                  { name: 'Git', icon: '/logos/git.png', level: 4 },
                  { name: 'Data Analysis / Tableau', icon: '/logos/tableau.png', level: 4 }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg text-gray-800 text-sm sm:text-base flex flex-col items-center justify-center relative group"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2 rounded-full object-contain" />
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-yellow-500 text-sm mt-1" title={`Proficiency: ${'★'.repeat(skill.level)}${'☆'.repeat(5 - skill.level)}`}>
                      {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Resume Section */}
      <section id="resume" className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Resume</h2>
          <p className="mb-4 text-gray-700">You can view or download my full resume in PDF format.</p>
          <a
            href="/resume/VinuPaul_Resume.pdf"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            download
          >
            Download Resume
          </a>
        </div>
      </section>


      {/* Contact Section with Form and Info */}
      <section
        id="contact"
        ref={contactRef}
        className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-6 tracking-widest uppercase">Contact</h2>

          <p className="text-center text-gray-300 mb-4 max-w-2xl mx-auto">
            I'm currently seeking internship or full time opportunities. If you have a position that aligns with my skills, or if you just want to connect, feel free to reach out. My inbox is always open, and I’ll do my best to get back to you!
          </p>

          <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
            Have any questions or assistance? Feel free to reach out to me! I am here to help and respond as soon as possible.
          </p>

          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            {/* Contact Form */}
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow space-y-6 text-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-sm font-medium">First name *</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Last name *</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded font-semibold transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Sidebar */}
      
      {showSidebar && (
        <div className="fixed bottom-6 left-4 z-50 hidden sm:flex flex-col items-center gap-5 text-white text-3xl">
          <a
            href="https://github.com/vinupaul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vinupaul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vpaul@rivier.edu"
            className="hover:text-blue-400 transition-transform hover:scale-110"
            title="Email Me"
          >
            <FaEnvelope />
          </a>
          <div className="w-px h-16 bg-white/30 mt-1"></div>
        </div>
      )}




    </main>
  );
}

export default App;

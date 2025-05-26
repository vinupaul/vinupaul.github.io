import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';


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
      'Managed and optimized university social platforms, increasing engagement by 25%',
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
      'Analyzed and reported on campaign performance to measure effectiveness and make recommendations for improvement which led to higher sales for Williams Sonoma',
      'Executed the development of complete projects for Williams Sonoma resolved development and construction issues and making recommendations to creative design',
      'Partnered seamlessly with onshore and offshore project managers to ensure successful and timely implementation of complex projects that got a contract extension'

    ]
  },
  {
    role: 'Associate Developer',
    company: 'Jivox Software Pvt. Ltd',
    location: 'Bengaluru',
    duration: 'Sep 2019 – May 2023',
    bullets: [
      'Translated designs provided by clients into creatives with animations mainly over HTML, CSS, and JS with cross browser compatibility',
      'Implemented logic-based rendering with APIs; saved 4+ hours/day via automation during high traffic season Ads',
      'Ensured the compatibility of AD’s with various browsers and devices and Contributed towards writing test cases along with QA team',
      'Worked with brands like Williams Sonoma, Nike and Marriott which buy about a million Impressions a week and set up of AD and AD campaigns with logic decisions and writing API calls for creatives to render dynamically'
    ]
  },
  {
    role: 'Intern',
    company: 'Jivox Software Pvt. Ltd',
    location: 'Bengaluru',
    duration: 'Mar 2019 – Sep 2019',
    bullets: [
      'Built animated ads meeting production standards in record time',
      'Deployed ad for APAC client within 24 hours from start to production',
      'Improvise the AD’s and learnt to use Photoshop, Animate CC, Google Web Designer'
    ]
  }
];




function App() {
  const contactRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const sections = ['about', 'experience', 'projects', 'skills', 'contact', 'resume'];
  const [activeSection, setActiveSection] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSidebar(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<main className="text-gray-900 min-h-screen font-sans">
      <Toaster position="top-right" />

      {/* Navigation Bar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">Vinu</div>
          <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700 items-center">
            {sections.map((id) =>
              id === 'resume' ? (
                <li key={id}>
                  <a
                    href="/resume/VinuPaul_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition transform font-semibold shadow-md border border-blue-700"
                  >
                    Resume
                  </a>

                </li>
              ) : (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`transition duration-200 ${activeSection === id ? 'text-blue-600 font-bold underline underline-offset-4' : 'hover:text-blue-500'}`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setShowMobileNav(!showMobileNav)} className="text-2xl text-blue-700">
              {showMobileNav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        {showMobileNav && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 text-sm font-semibold text-gray-800 shadow">
            {sections.map(id => (
              id === 'resume' ? (
                <a
                  key={id}
                  href="/resume/VinuPaul_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition"
                >
                  Resume
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block hover:text-blue-500"
                  onClick={() => setShowMobileNav(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              )
            ))}
          </div>
        )}

      </header>


      {/* Combined About Section with Unified Background */}
      <section
        id="about"
        className="scroll-mt-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/images/about-bg.png')"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="bg-black/50 px-6 py-4 rounded-md inline-block backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-2 drop-shadow">Vinu Paul</h1>
            <p className="text-lg drop-shadow">Software Developer | Data Analyst | Full Stack Enthusiast</p>
          </div>
        </div>

        {/* About Me Section with Image on the Right */}
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 text-white p-6 rounded-md backdrop-blur-sm flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Text Content */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 border-b border-white/40 pb-2">About Me</h2>
              <p className="text-md leading-relaxed">
                I'm a software developer with over 4 years of industry experience, having worked with brands like Nike,
                Marriott, and Williams Sonoma. I specialize in full-stack development and data analytics, and I recently
                completed my Master’s in Computer Science from Rivier University. I'm passionate about building elegant
                user interfaces, solving real-world problems, and biking through the unknown.
              </p>
            </div>

            {/* Profile Picture */}
            {/* Profile Picture */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src="/images/mypicture.png"
                alt="Vinu Paul"
                className="w-48 h-48 object-cover object-[50%_30%] rounded-full border-4 border-white shadow-lg transition-transform duration-500 hover:scale-150"
              />
            </div>

          </motion.div>
        </div>

      </section>



      {/* Experience Section */}
      <section id="experience" className="scroll-mt-10 bg-[url('/public/images/experience-bg.png')] bg-no-repeat bg-cover bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center border-b pb-2">Experience</h2>

          {/* Timeline wrapper */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 z-0"></div>

            {/* Timeline cards */}
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                className={`relative z-10 mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
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
                    <ul className="list-disc list-outside pl-5 text-gray-800 space-y-1">
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
      <section id="projects" className=" scroll-mt-10 bg-white bg-[url('/public/images/projects-bg.png')] bg-cover bg-center py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 border-b text-center pb-2">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-2">Climate Change Simulator</h3>
              <p className="text-gray-700">
                A responsive web app built using HTML, CSS, JavaScript, and Chart.js to help users understand how daily habits affect global climate indicators. Features include an interactive quiz, CO2 action tracker, rotating climate facts, and data visualizations that show simulated impacts of user decisions. Hosted on a university server for educational use.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-700">
                A visually engaging React-based portfolio website that highlights my skills, projects, and experience. Features include dynamic animations with Framer Motion, contact form integrated with Google Sheets and confirmation emails, mobile-responsive design, and smooth scrolling between sections. Deployed on GitHub Pages.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow-sm transition"
            >
              <h3 className="text-xl font-semibold mb-2">Satellite Software Non-Conformance Analysis</h3>
              <p className="text-gray-700">
                Developed a scalable big data pipeline using MapReduce on AWS EMR to analyze satellite onboard software non-conformances. Processed over 200 TB of logs to identify recurring issues and reduce debug time by 60%. Visualized trends using Tableau dashboards. Enhanced for PaaS environments to ensure long-term maintainability.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-2 py-16 px-4 bg-[url('/public/images/skills-bg.png')] bg-no-repeat bg-cover">
        <div className="max-w-6xl mx-auto text-center">
        {/* <h2 className="text-4xl text-white font-semibold text-center mb-6 pb-2 border-b-4 border-blue-400 inline-block mx-auto w-fit tracking-widest">
  Skills
</h2> */}
          <h2 className="text-3xl font-semibold text-white mb-10 text-center border-b mx-auto pb-2">Skills</h2>


          {/* Frontend Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center mb-4 text-white">Frontend</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6">
                {[
                  { name: 'JavaScript / ReactJS', icon: '/logos/reactjs.png', level: 4 },
                  { name: 'HTML / CSS / Tailwind', icon: '/logos/tailwind.jpeg', level: 3 }
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
            <h3 className="text-xl font-semibold text-center mb-4 text-white">Backend</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6">
                {[
                  { name: 'Python / Java', icon: '/logos/python.jpeg', level: 3 },
                  { name: 'SQL / MySQL', icon: '/logos/sql.png', level: 3 }
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
            <h3 className="text-xl font-semibold text-center mb-4 text-white">Tools & Cloud</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {[
                  { name: 'AWS', icon: '/logos/aws-git.png', level: 3 },
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

      {/* Contact Section with Form and Info */}
      <section
        id="contact"
        ref={contactRef}
        className="scroll-mt-2 py-16 px-4 bg-[url('/public/images/contact-bg.png')] bg-cover bg-center text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-center mb-6 tracking-widest">Contact</h2>

          <p className="text-center text-gray-300 mb-4 max-w-2xl mx-auto">
            I'm currently seeking internship or full time opportunities. If you have a position that aligns with my skills feel free to reach out. I’ll do my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            {/* Contact Form */}

            <form
              className="w-full max-w-md bg-white p-6 rounded-lg shadow space-y-6 text-gray-800"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const email = formData.get("email");
                const phone = formData.get("phone");

                // Email format validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                  alert("Please enter a valid email address.");
                  return;
                }

                // Phone format validation (basic)
                if (phone && !/^\+?[0-9\s-]{7,15}$/.test(phone)) {
                  alert("Please enter a valid phone number.");
                  return;
                }

                setIsSubmitting(true);

                try {
                  const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbwkKr7pZr1Cm3FYQ1cZIV8qlGe0qD5HoyFKAtiOMEdWrQr0roHj0Axo2Ia_kZG3e9ZRFg/exec",
                    {
                      method: "POST",
                      body: formData,
                    }
                  );

                  if (response.ok) {
                    toast.success("Message sent! Confirmation email on the way 🎉");
                    setFormSuccess('Thanks! Your message has been sent.');
                    form.reset();
                    setTimeout(() => setFormSuccess(''), 5000);
                  }
                  else {
                    throw new Error("Failed to submit");
                  }
                } catch (err) {
                  alert("Oops! Something went wrong. Try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {formSuccess && (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-center border border-green-300 shadow-sm">
                  {formSuccess}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-sm font-medium">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
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
                  name="email"
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
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded font-semibold transition flex justify-center items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                )}
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>




  {/* Social Sidebar for larger screens (shown only in Contact section) */}
{showSidebar && (
  <div className="hidden sm:flex fixed bottom-6 left-4 z-50 flex-col items-center gap-5 text-white text-3xl">
    <a href="https://github.com/vinupaul" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform hover:scale-110" title="GitHub"><FaGithub /></a>
    <a href="https://linkedin.com/in/vinupaul" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform hover:scale-110" title="LinkedIn"><FaLinkedin /></a>
    <a href="mailto:vpaul@rivier.edu" className="hover:text-blue-400 transition-transform hover:scale-110" title="Email"><FaEnvelope /></a>
    <div className="w-px h-16 bg-white/30 mt-1"></div>
  </div>
)}

{/* Social bar for mobile view (only in Contact section) */}
{showSidebar && (
  <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 flex justify-center gap-10 py-3 text-white text-2xl">
    <a href="https://github.com/vinupaul" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
    <a href="https://linkedin.com/in/vinupaul" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
    <a href="mailto:vpaul@rivier.edu" title="Email"><FaEnvelope /></a>
  </div>
)}



      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white text-center text-sm py-4"
      >
        © {new Date().getFullYear()} Vinu Paul. All rights reserved.
      </motion.footer>



    </main>
  );
}


export default App;

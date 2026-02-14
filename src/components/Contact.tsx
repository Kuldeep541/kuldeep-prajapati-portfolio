import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="bg-black py-32 px-6 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white mb-8">
            Let's <span className="text-lime">Build</span>
            <br />
            Something Great
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Got a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Get in touch</h3>
              <p className="text-lg text-white">
                Whether you have a project, question, or just want to connect, feel free to reach out.
              </p>
            </div>

            <motion.a
              href="mailto:kuldeeppprajapati2111@gmail.com"
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 text-white hover:text-lime transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-lime/10 rounded-xl flex items-center justify-center group-hover:bg-lime/20 transition-all duration-300">
                <Mail className="text-lime" size={28} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Email</p>
                <p className="text-lg font-bold text-white">kuldeeppprajapati2111@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+917380892966"
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 text-white hover:text-lime transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-lime/10 rounded-xl flex items-center justify-center group-hover:bg-lime/20 transition-all duration-300">
                <Phone className="text-lime" size={28} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Phone</p>
                <p className="text-lg font-bold text-white">+91 7380892966</p>
              </div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1s9ppoRMGFS2qJUvyI8cuviyBoxE3H8tn/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-lime text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(198,255,52,0.4)] hover:shadow-[0_0_30px_rgba(198,255,52,0.6)] transition-all duration-300 mt-8"
            >
              Download Resume
              <ArrowRight size={24} />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-lime/30 rounded-2xl p-8 bg-black/50"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black border border-lime/30 rounded-lg text-white placeholder-white/40 focus:border-lime focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black border border-lime/30 rounded-lg text-white placeholder-white/40 focus:border-lime focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-black border border-lime/30 rounded-lg text-white placeholder-white/40 focus:border-lime focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-lime text-black font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(198,255,52,0.4)] hover:shadow-[0_0_30px_rgba(198,255,52,0.6)] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

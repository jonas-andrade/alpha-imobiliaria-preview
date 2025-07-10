import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, Users, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const stats = [
    { icon: Home, value: '500+', label: 'Propriedades Premium' },
    { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
    { icon: Award, value: '15+', label: 'Anos de Experiência' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          alt="Luxury Modern House Alphaville"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-900/90 via-black-900/70 to-black-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-gold rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-copper rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-500 rounded-full text-sm font-medium mb-6 border border-gold-500/30">
                  Exclusive Properties in Alphaville
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-luxury font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Luxo e
                <span className="bg-gradient-gold bg-clip-text text-transparent"> Sofisticação</span>
                <br />
                em Alphaville
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Descubra propriedades únicas e exclusivas no coração de Alphaville Fortaleza. 
                Oferecemos imóveis de alto padrão com design sofisticado e acabamentos impecáveis.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/propriedades">
                  <motion.button
                    className="group bg-gradient-gold text-black-900 px-8 py-4 rounded-lg font-modern font-semibold flex items-center justify-center gap-2 hover:shadow-gold transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Propriedades
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                <motion.button
                  className="group border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-modern font-semibold flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-black-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  Assistir Vídeo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/20 rounded-lg mb-3 border border-gold-500/30">
                      <stat.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <div className="text-2xl font-luxury font-bold text-gold-500">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image Gallery */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                      alt="Luxury Living Room Alphaville"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900/50 to-transparent"></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                      alt="Modern Kitchen Design"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900/50 to-transparent"></div>
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg"
                      alt="Luxury Master Bedroom"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900/50 to-transparent"></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                      alt="Outdoor Pool Area"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900/50 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center text-gold-500">
          <span className="text-sm font-modern mb-2">Scroll para explorar</span>
          <motion.div
            className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-gold-500 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Propriedades', href: '#properties' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  const propertyTypes = [
    { name: 'Casas de Luxo', href: '#' },
    { name: 'Apartamentos Premium', href: '#' },
    { name: 'Coberturas', href: '#' },
    { name: 'Penthouses', href: '#' },
    { name: 'Terrenos', href: '#' },
    { name: 'Imóveis Comerciais', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-gold rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-copper rounded-full blur-3xl opacity-5"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <span className="text-black-900 font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="font-luxury text-xl font-bold">Alpha Conceito</h3>
                  <p className="text-gold-500 text-sm font-light">Imobiliária</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Especialistas em imóveis de alto padrão em Alphaville Fortaleza. 
                Transformamos sonhos em realidade com propriedades únicas e exclusivas.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span>(85) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>contato@alphaconceito.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <span>Alphaville Fortaleza, CE</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-luxury text-lg font-bold text-gold-500 mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Property Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-luxury text-lg font-bold text-gold-500 mb-6">
                Tipos de Imóveis
              </h4>
              <ul className="space-y-3">
                {propertyTypes.map((type) => (
                  <li key={type.name}>
                    <motion.a
                      href={type.href}
                      className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {type.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-luxury text-lg font-bold text-gold-500 mb-6">
                Newsletter
              </h4>
              <p className="text-gray-400 mb-4">
                Receba as melhores oportunidades diretamente no seu e-mail.
              </p>
              
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 bg-white/10 border border-gold-500/30 rounded-l-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none"
                />
                <motion.button
                  className="bg-gradient-gold text-black-900 px-6 py-3 rounded-r-lg font-semibold hover:shadow-gold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OK
                </motion.button>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-4">Redes Sociais</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gold-500/20 transition-all duration-300 border border-gold-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © 2024 Alpha Conceito Imobiliária. Todos os direitos reservados.
              </motion.div>
              
              <div className="flex items-center space-x-6">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-gold-500 text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Política de Privacidade
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-gold-500 text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Termos de Uso
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-gold text-black-900 rounded-full flex items-center justify-center shadow-gold hover:shadow-luxury transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
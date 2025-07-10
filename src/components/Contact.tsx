import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      propertyType: '',
    });
    
    setIsSubmitting(false);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(85) 99999-9999', '(85) 3333-3333'],
      action: 'Ligar Agora',
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@alphaconceito.com.br', 'vendas@alphaconceito.com.br'],
      action: 'Enviar E-mail',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Alphaville Fortaleza', 'Eusébio - CE'],
      action: 'Ver no Mapa',
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h'],
      action: 'Agendar Visita',
    },
  ];

  const propertyTypes = [
    'Casa',
    'Apartamento',
    'Cobertura',
    'Penthouse',
    'Terreno',
    'Comercial',
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-luxury relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-gold rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-copper rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-500 rounded-full text-sm font-medium mb-4 border border-gold-500/30">
            Fale Conosco
          </span>
          <h2 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
            Vamos Conversar sobre seu
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">Próximo Investimento</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para ajudá-lo a encontrar a propriedade 
            perfeita ou para responder todas as suas dúvidas sobre o mercado imobiliário de luxo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-luxury font-bold text-white mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-black-900" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-luxury font-bold text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 mb-1">
                          {detail}
                        </p>
                      ))}
                      <motion.button
                        className="text-gold-500 hover:text-gold-400 font-medium text-sm mt-2 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {info.action} →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-2xl font-modern font-semibold flex items-center justify-center gap-3 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-6 h-6" />
                Falar no WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
              <h3 className="text-2xl font-luxury font-bold text-white mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold-500 font-medium mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gold-500 font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold-500 font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      placeholder="(85) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-gold-500 font-medium mb-2">
                      Tipo de Imóvel
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="" className="bg-black-900">Selecione uma opção</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type} className="bg-black-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gold-500 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Conte mais sobre o que você está procurando..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-black-900 py-4 px-6 rounded-lg font-modern font-semibold flex items-center justify-center gap-2 hover:shadow-gold transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black-900"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
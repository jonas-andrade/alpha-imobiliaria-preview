import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: '',
    contactReason: '',
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
      contactReason: '',
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
      details: ['Alphaville Fortaleza', 'Eusébio - CE, 61760-000'],
      action: 'Ver no Mapa',
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h', 'Domingo: Fechado'],
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

  const contactReasons = [
    'Comprar Imóvel',
    'Vender Imóvel',
    'Alugar Imóvel',
    'Investimento',
    'Avaliação',
    'Consultoria',
    'Outros',
  ];

  const offices = [
    {
      name: 'Matriz Alphaville',
      address: 'Av. Washington Soares, 1000 - Alphaville Fortaleza',
      phone: '(85) 3333-3333',
      hours: 'Seg-Sex: 8h-18h | Sáb: 8h-12h',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      name: 'Filial Eusébio',
      address: 'Rua das Palmeiras, 500 - Centro, Eusébio',
      phone: '(85) 3333-3334',
      hours: 'Seg-Sex: 8h-17h | Sáb: 8h-12h',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-gradient-luxury min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-500 rounded-full text-sm font-medium mb-4 border border-gold-500/30">
            Fale Conosco
          </span>
          <h1 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
            Entre em <span className="bg-gradient-gold bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para ajudá-lo a encontrar a propriedade 
            perfeita ou para responder todas as suas dúvidas sobre o mercado imobiliário de luxo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
              <h2 className="text-2xl font-luxury font-bold text-white mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold-500 font-medium mb-2">
                      Nome Completo *
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
                      E-mail *
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
                      Telefone *
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
                      Motivo do Contato
                    </label>
                    <select
                      name="contactReason"
                      value={formData.contactReason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="" className="bg-black-900">Selecione uma opção</option>
                      {contactReasons.map((reason) => (
                        <option key={reason} value={reason} className="bg-black-900">
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gold-500 font-medium mb-2">
                    Tipo de Imóvel de Interesse
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
                
                <div>
                  <label className="block text-gold-500 font-medium mb-2">
                    Mensagem *
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-luxury font-bold text-white mb-8">
              Informações de Contato
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-black-900" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-luxury font-bold text-white mb-2">
                        {info.title}
                      </h3>
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
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
        </div>

        {/* Our Offices */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Escritórios</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Visite-nos em uma de nossas unidades para um atendimento personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-luxury font-bold text-gold-500 mb-3">
                    {office.name}
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold-500" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-500" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>
                  <motion.button
                    className="mt-4 w-full bg-white/10 text-gold-500 py-2 rounded-lg font-modern font-medium border border-gold-500/30 hover:bg-gold-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver no Mapa
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Perguntas <span className="bg-gradient-gold bg-clip-text text-transparent">Frequentes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'Qual o horário de atendimento?',
                answer: 'Atendemos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. Para emergências, temos plantão 24h via WhatsApp.'
              },
              {
                question: 'Vocês fazem avaliação gratuita?',
                answer: 'Sim! Oferecemos avaliação gratuita para todos os imóveis em Alphaville. Nossa equipe de especialistas fará uma análise completa do seu imóvel.'
              },
              {
                question: 'Como agendar uma visita?',
                answer: 'Você pode agendar através do nosso WhatsApp, telefone, ou preenchendo o formulário acima. Oferecemos visitas personalizadas conforme sua disponibilidade.'
              },
              {
                question: 'Vocês trabalham com financiamento?',
                answer: 'Sim! Temos parcerias com os principais bancos e oferecemos consultoria completa para financiamento imobiliário com as melhores condições do mercado.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <h3 className="text-lg font-luxury font-bold text-gold-500 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
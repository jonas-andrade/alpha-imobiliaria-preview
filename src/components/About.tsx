import React from 'react';
import { Award, Users, Home, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description: 'Mais de 15 anos de experiência no mercado imobiliário de luxo em Alphaville.',
    },
    {
      icon: Shield,
      title: 'Segurança Jurídica',
      description: 'Toda documentação verificada e assessoria jurídica completa em todas as transações.',
    },
    {
      icon: Star,
      title: 'Atendimento Premium',
      description: 'Consultoria personalizada e acompanhamento exclusivo durante todo o processo.',
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Processos otimizados e tecnologia de ponta para máxima eficiência.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e especializados em imóveis de alto padrão.',
    },
    {
      icon: Home,
      title: 'Portfólio Exclusivo',
      description: 'Acesso a propriedades únicas e exclusivas no mercado de luxo.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Propriedades Vendidas' },
    { value: '1000+', label: 'Clientes Satisfeitos' },
    { value: '15+', label: 'Anos de Mercado' },
    { value: '98%', label: 'Satisfação do Cliente' },
  ];

  return (
    <section id="about" className="py-20 bg-black-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-gold rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-copper rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-500 rounded-full text-sm font-medium mb-6 border border-gold-500/30">
                Sobre Nós
              </span>
              <h2 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
                Sua <span className="bg-gradient-gold bg-clip-text text-transparent">Confiança</span>
                <br />
                Nossa Especialidade
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A Alpha Conceito Imobiliária é referência em imóveis de alto padrão em Alphaville Fortaleza. 
                Nossa missão é proporcionar experiências únicas na busca pelo lar dos seus sonhos.
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Com uma equipe de especialistas altamente qualificados, oferecemos soluções personalizadas 
                para cada cliente, garantindo segurança, agilidade e total satisfação em todas as transações.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-luxury font-bold text-gold-500 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Luxury Real Estate Office"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gold-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-luxury font-bold text-white mb-2">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-300 text-sm">
                  Cada cliente recebe um consultor dedicado para garantir a melhor experiência na busca pelo imóvel ideal.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Por que escolher a <span className="bg-gradient-gold bg-clip-text text-transparent">Alpha Conceito</span>?
            </h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Nossos diferenciais garantem uma experiência única e resultados excepcionais para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black-900" />
                </div>
                <h4 className="text-xl font-luxury font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
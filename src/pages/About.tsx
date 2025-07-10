import React from 'react';
import { Award, Users, Home, Star, Shield, Zap, Target, Heart, TrendingUp } from 'lucide-react';
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

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Proporcionar experiências únicas na busca pelo lar dos seus sonhos, oferecendo imóveis de alto padrão com excelência em atendimento.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Transparência, integridade, comprometimento e paixão pelo que fazemos. Cada cliente é único e merece nossa dedicação total.',
    },
    {
      icon: TrendingUp,
      title: 'Visão',
      description: 'Ser a imobiliária de referência em luxo no Ceará, reconhecida pela qualidade dos imóveis e excelência no atendimento.',
    },
  ];

  const team = [
    {
      name: 'Carlos Silva',
      role: 'CEO & Fundador',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Mais de 20 anos de experiência no mercado imobiliário de luxo.',
    },
    {
      name: 'Ana Costa',
      role: 'Diretora Comercial',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Especialista em negociações de alto valor e relacionamento com clientes VIP.',
    },
    {
      name: 'Roberto Lima',
      role: 'Consultor Senior',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      description: 'Expert em propriedades de luxo em Alphaville com foco em resultados.',
    },
    {
      name: 'Marina Santos',
      role: 'Consultora Especializada',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
      description: 'Dedicada ao atendimento personalizado e consultoria em investimentos.',
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
            Sobre Nós
          </span>
          <h1 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
            Sua <span className="bg-gradient-gold bg-clip-text text-transparent">Confiança</span>
            <br />
            Nossa Especialidade
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A Alpha Conceito Imobiliária é referência em imóveis de alto padrão em Alphaville Fortaleza. 
            Nossa missão é proporcionar experiências únicas na busca pelo lar dos seus sonhos.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-6">
              Uma História de <span className="bg-gradient-gold bg-clip-text text-transparent">Sucesso</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fundada em 2009, a Alpha Conceito nasceu da visão de criar uma imobiliária diferenciada, 
              focada exclusivamente no mercado de luxo. Ao longo dos anos, construímos uma reputação 
              sólida baseada na confiança, transparência e resultados excepcionais.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nossa equipe de especialistas altamente qualificados oferece soluções personalizadas 
              para cada cliente, garantindo segurança, agilidade e total satisfação em todas as transações. 
              Cada propriedade em nosso portfólio é cuidadosamente selecionada para atender aos mais 
              altos padrões de qualidade e exclusividade.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                >
                  <div className="text-3xl font-luxury font-bold text-gold-500 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Luxury Real Estate Office"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Princípios</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Os valores que nos guiam em cada negociação e relacionamento com nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-black-900" />
                </div>
                <h3 className="text-xl font-luxury font-bold text-gold-500 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Por que escolher a <span className="bg-gradient-gold bg-clip-text text-transparent">Alpha Conceito</span>?
            </h2>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black-900" />
                </div>
                <h3 className="text-xl font-luxury font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Nossa <span className="bg-gradient-gold bg-clip-text text-transparent">Equipe</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Profissionais experientes e dedicados, prontos para ajudá-lo a encontrar a propriedade perfeita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-2xl object-cover border-4 border-gold-500/30 group-hover:border-gold-500/60 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900/60 to-transparent rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-luxury font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gold-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
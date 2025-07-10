import React from 'react';
import { Home, TrendingUp, FileText, Shield, Users, Zap, Calculator, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Venda de Imóveis de Luxo',
      description: 'Comercialização exclusiva de propriedades premium em Alphaville com estratégias personalizadas de marketing.',
      features: ['Avaliação profissional', 'Marketing digital', 'Visitas acompanhadas', 'Negociação especializada'],
    },
    {
      icon: TrendingUp,
      title: 'Consultoria em Investimentos',
      description: 'Análise de mercado e orientação para investimentos imobiliários com foco em rentabilidade e valorização.',
      features: ['Análise de mercado', 'Projeção de rentabilidade', 'Identificação de oportunidades', 'Acompanhamento pós-venda'],
    },
    {
      icon: FileText,
      title: 'Assessoria Jurídica',
      description: 'Suporte jurídico completo em todas as etapas da transação imobiliária, garantindo segurança total.',
      features: ['Análise documental', 'Regularização', 'Contratos', 'Acompanhamento cartorial'],
    },
    {
      icon: Shield,
      title: 'Due Diligence Imobiliária',
      description: 'Verificação completa da documentação e situação legal dos imóveis antes da transação.',
      features: ['Verificação documental', 'Análise de débitos', 'Histórico do imóvel', 'Relatório detalhado'],
    },
    {
      icon: Users,
      title: 'Atendimento VIP',
      description: 'Serviço personalizado e exclusivo para clientes que buscam o mais alto nível de atendimento.',
      features: ['Consultor dedicado', 'Atendimento 24/7', 'Visitas privadas', 'Concierge imobiliário'],
    },
    {
      icon: Calculator,
      title: 'Financiamento Especializado',
      description: 'Orientação e intermediação para obtenção das melhores condições de financiamento imobiliário.',
      features: ['Análise de crédito', 'Negociação bancária', 'Simulações', 'Acompanhamento do processo'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Reunião para entender suas necessidades e objetivos específicos.',
    },
    {
      step: '02',
      title: 'Análise Personalizada',
      description: 'Avaliação detalhada do mercado e identificação das melhores oportunidades.',
    },
    {
      step: '03',
      title: 'Apresentação de Opções',
      description: 'Seleção cuidadosa de propriedades que atendem aos seus critérios.',
    },
    {
      step: '04',
      title: 'Visitas Acompanhadas',
      description: 'Tours personalizados com informações detalhadas sobre cada propriedade.',
    },
    {
      step: '05',
      title: 'Negociação',
      description: 'Representação profissional para obter as melhores condições.',
    },
    {
      step: '06',
      title: 'Finalização',
      description: 'Acompanhamento completo até a entrega das chaves.',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: '15+ anos no mercado de luxo',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Transações 100% seguras',
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Processos otimizados',
    },
    {
      icon: MapPin,
      title: 'Localização Premium',
      description: 'Foco em Alphaville',
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
            Nossos Serviços
          </span>
          <h1 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
            Serviços <span className="bg-gradient-gold bg-clip-text text-transparent">Exclusivos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços especializados para atender todas as suas necessidades 
            no mercado imobiliário de luxo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-black-900" />
              </div>
              <h3 className="text-xl font-luxury font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Nosso <span className="bg-gradient-gold bg-clip-text text-transparent">Processo</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Um método estruturado e personalizado para garantir os melhores resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-black-900 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-luxury font-bold text-gold-500 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-4">
              Por que nos <span className="bg-gradient-gold bg-clip-text text-transparent">Escolher</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-4">
                  <benefit.icon className="w-8 h-8 text-black-900" />
                </div>
                <h3 className="text-lg font-luxury font-bold text-gold-500 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-gold-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-luxury font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudá-lo a encontrar 
            a propriedade perfeita ou vender seu imóvel pelo melhor preço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-gold text-black-900 px-8 py-4 rounded-lg font-modern font-semibold hover:shadow-gold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </motion.button>
            <motion.button
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-modern font-semibold hover:bg-gold-500 hover:text-black-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar no WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
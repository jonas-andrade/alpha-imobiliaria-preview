import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Square, Car, Calendar, Eye, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock property data - in a real app, this would come from an API
  const property = {
    id: parseInt(id || '1'),
    title: 'Casa Moderna Alpha Residence',
    price: 'R$ 2.500.000',
    location: 'Alphaville Fortaleza',
    bedrooms: 4,
    bathrooms: 5,
    area: 450,
    parking: 4,
    yearBuilt: 2023,
    description: 'Esta magnífica casa moderna representa o que há de melhor em design contemporâneo e luxo. Localizada no prestigioso Alphaville Fortaleza, oferece acabamentos de primeira linha, amplos espaços integrados e uma arquitetura que privilegia a luz natural e a integração com a área externa. Perfeita para quem busca sofisticação e conforto em um dos endereços mais valorizados da região.',
    amenities: [
      'Piscina com deck',
      'Churrasqueira gourmet',
      'Jardim paisagístico',
      'Garagem para 4 carros',
      'Sistema de segurança 24h',
      'Ar condicionado central',
      'Aquecimento solar',
      'Closet na suíte master',
      'Home office',
      'Lavabo social',
      'Área de serviço completa',
      'Portão eletrônico'
    ],
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg'
    ],
    features: {
      'Área Total': '450m²',
      'Área Construída': '380m²',
      'Terreno': '600m²',
      'Quartos': '4 suítes',
      'Banheiros': '5 completos',
      'Vagas': '4 cobertas',
      'Ano': '2023',
      'Tipo': 'Casa Térrea'
    },
    agent: {
      name: 'Carlos Silva',
      phone: '(85) 99999-9999',
      email: 'carlos@alphaconceito.com.br',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  };

  return (
    <div className="pt-32 pb-20 bg-gradient-luxury min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/propriedades"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Propriedades
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                      isFavorite ? 'bg-gold-500 text-black-900' : 'bg-white/10 text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gold-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {property.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden aspect-square ${
                      currentImageIndex === index ? 'ring-2 ring-gold-500' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${property.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Property Info */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-luxury font-bold text-gold-500 mb-2">
                    {property.price}
                  </div>
                  <div className="text-gray-400">Valor de venda</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-gold-500/20">
                  <Bed className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{property.bedrooms}</div>
                  <div className="text-sm text-gray-400">Quartos</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-gold-500/20">
                  <Bath className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{property.bathrooms}</div>
                  <div className="text-sm text-gray-400">Banheiros</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-gold-500/20">
                  <Square className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{property.area}m²</div>
                  <div className="text-sm text-gray-400">Área</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-gold-500/20">
                  <Car className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{property.parking}</div>
                  <div className="text-sm text-gray-400">Vagas</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-luxury font-bold text-gold-500 mb-4">Descrição</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-luxury font-bold text-gold-500 mb-4">Características</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(property.features).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gold-500/20">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-luxury font-bold text-gold-500 mb-4">Comodidades</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agent Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold-500/20 mb-8 sticky top-32"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-luxury font-bold text-gold-500 mb-6">
                Consultor Responsável
              </h3>
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{property.agent.name}</h4>
                  <p className="text-gray-400">Consultor Senior</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>{property.agent.email}</span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  className="w-full bg-gradient-gold text-black-900 py-3 rounded-lg font-modern font-semibold flex items-center justify-center gap-2 hover:shadow-gold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </motion.button>
                
                <motion.button
                  className="w-full bg-white/10 text-white py-3 rounded-lg font-modern font-semibold border border-gold-500/30 hover:bg-gold-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Visita
                </motion.button>
                
                <motion.button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-modern font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  WhatsApp
                </motion.button>
              </div>

              {/* Property Stats */}
              <div className="mt-8 pt-6 border-t border-gold-500/20">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Visualizações:</span>
                  <span className="text-white">1,247</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Publicado em:</span>
                  <span className="text-white">15/12/2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
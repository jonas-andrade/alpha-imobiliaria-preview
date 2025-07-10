import React, { useState, useMemo } from 'react';
import { Heart, Eye, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyFilters, { FilterState } from './PropertyFilters';

interface Property {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
  featured: boolean;
  description: string;
  amenities: string[];
  gallery?: string[];
}

const Properties: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    priceRange: [0, 5000000],
    areaRange: [0, 1000],
    bedrooms: null,
    bathrooms: null,
    propertyType: '',
    featured: null,
    location: '',
  });

  const properties: Property[] = [
    {
      id: 1,
      title: 'Casa Moderna – Lote 276 | Terras Alphaville 4',
      price: 'R$ 1.690.000,00',
      priceValue: 1690000,
      location: 'Alphaville Fortaleza',
      bedrooms: 4,
      bathrooms: 4,
      area: 240,
      image: '/imovel_a/imovel_a_foto_1.jpg',
      type: 'casa',
      featured: true,
      description:
        'Casa moderna com escada Super Nano, cozinha Perla Santana, vidros refletivos e projeto luminotécnico. Área gourmet com piscina com hidromassagem, churrasqueira e espaço ideal para receber.',
      amenities: ['Escada Super Nano', 'Cozinha Perla Santana', 'Vidros refletivos', 'Piscina com hidromassagem', 'Churrasqueira'],
      gallery: [
        '/imovel_a/imovel_a_foto_1.jpg',
        '/imovel_a/imovel_a_foto_2.jpg',
        '/imovel_a/imovel_a_foto_3.jpg',
        '/imovel_a/imovel_a_foto_4.jpg',
        '/imovel_a/imovel_a_foto_5.jpg',
        '/imovel_a/imovel_a_foto_6.jpg',
      ],
    },
    {
      id: 2,
      title: 'Casa Pronta para Morar | Terras Alphaville 4',
      price: 'R$ 1.450.000,00',
      priceValue: 1450000,
      location: 'Alphaville Eusébio',
      bedrooms: 4,
      bathrooms: 5,
      area: 219.82,
      image: '/imovel_b/imovel_b_foto_1.jpg',
      type: 'casa',
      featured: true,
      description:
        'Casa pronta com suíte master e mega closet, paisagismo completo, piscina com hidromassagem, fonte decorativa, infraestrutura para automação, energia solar e carregador para carro elétrico.',
      amenities: ['Mega Closet', 'Fonte Decorativa', 'Piscina com hidromassagem', 'Automação residencial', 'Carregador para carro elétrico'],
      gallery: [
        '/imovel_b/imovel_b_foto_1.jpg',
        '/imovel_b/imovel_b_foto_2.jpg',
        '/imovel_b/imovel_b_foto_3.jpg',
        '/imovel_b/imovel_b_foto_4.jpg',
        '/imovel_b/imovel_b_foto_5.jpg',
        '/imovel_b/imovel_b_foto_6.jpg',
      ],
    },
    // Você pode continuar adicionando mais imóveis aqui, se quiser.
  ];

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower) ||
          property.amenities.some((amenity) => amenity.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      if (property.priceValue < filters.priceRange[0] || property.priceValue > filters.priceRange[1]) {
        return false;
      }

      if (property.area < filters.areaRange[0] || property.area > filters.areaRange[1]) {
        return false;
      }

      if (filters.bedrooms !== null && property.bedrooms < filters.bedrooms) {
        return false;
      }

      if (filters.bathrooms !== null && property.bathrooms < filters.bathrooms) {
        return false;
      }

      if (filters.propertyType && property.type !== filters.propertyType) {
        return false;
      }

      if (filters.featured !== null && property.featured !== filters.featured) {
        return false;
      }

      if (filters.location && property.location !== filters.location) {
        return false;
      }

      return true;
    });
  }, [properties, filters]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      priceRange: [0, 5000000],
      areaRange: [0, 1000],
      bedrooms: null,
      bathrooms: null,
      propertyType: '',
      featured: null,
      location: '',
    });
  };

  return (
    <section id="properties" className="py-20 bg-gradient-luxury">
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
            Propriedades Exclusivas
          </span>
          <h2 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
            Imóveis de <span className="bg-gradient-gold bg-clip-text text-transparent">Luxo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore nossa seleção cuidadosamente curada de propriedades premium em Alphaville Fortaleza. Cada imóvel representa o que há de melhor em design, localização e qualidade.
          </p>
        </motion.div>

        {/* Advanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PropertyFilters
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={filtersOpen}
            onToggle={() => setFiltersOpen(!filtersOpen)}
            onClear={clearFilters}
          />
        </motion.div>

        {/* Results Counter */}
        <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <p className="text-gray-300 text-lg">
            <span className="text-gold-500 font-semibold">{filteredProperties.length}</span>{' '}
            {filteredProperties.length === 1 ? ' propriedade encontrada' : ' propriedades encontradas'}
          </p>
        </motion.div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filters.searchTerm}-${filters.propertyType}-${filters.featured}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Property Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-gold text-black-900 px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      onClick={() => toggleFavorite(property.id)}
                      className={`p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 ${
                        favorites.includes(property.id)
                          ? 'bg-gold-500 text-black-900'
                          : 'bg-white/10 text-white hover:bg-gold-500/20'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gold-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4 bg-gradient-gold text-black-900 px-4 py-2 rounded-lg font-modern font-bold">
                    {property.price}
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-xl font-luxury font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{property.description}</p>

                  {/* Property Features */}
                  <div className="flex items-center justify-between text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.area}m²</span>
                    </div>
                  </div>

                  {/* Amenities Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {property.amenities.slice(0, 3).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gold-500/20 text-gold-500 px-2 py-1 rounded-full border border-gold-500/30"
                        >
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 3 && (
                        <span className="text-xs text-gray-400 px-2 py-1">+{property.amenities.length - 3} mais</span>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    className="w-full bg-gradient-gold text-black-900 py-3 rounded-lg font-modern font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-luxury font-bold text-white mb-4">Nenhuma propriedade encontrada</h3>
            <p className="text-gray-400 mb-6">Tente ajustar os filtros para encontrar mais opções.</p>
            <motion.button
              onClick={clearFilters}
              className="bg-gradient-gold text-black-900 px-6 py-3 rounded-lg font-modern font-semibold hover:shadow-gold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Limpar Todos os Filtros
            </motion.button>
          </motion.div>
        )}

        {/* View More Button */}
        {filteredProperties.length > 0 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-copper text-white px-8 py-4 rounded-lg font-modern font-semibold hover:shadow-copper transition-all duration-300 border border-copper-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todas as Propriedades
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Properties;

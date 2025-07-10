import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FilterState {
  searchTerm: string;
  priceRange: [number, number];
  areaRange: [number, number];
  bedrooms: number | null;
  bathrooms: number | null;
  propertyType: string;
  featured: boolean | null;
  location: string;
}

interface PropertyFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClear: () => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
  onClear,
}) => {
  const propertyTypes = [
    { value: '', label: 'Todos os Tipos' },
    { value: 'casa', label: 'Casas' },
    { value: 'apartamento', label: 'Apartamentos' },
    { value: 'cobertura', label: 'Coberturas' },
    { value: 'penthouse', label: 'Penthouses' },
  ];

  const locations = [
    { value: '', label: 'Todas as Localizações' },
    { value: 'Alphaville Fortaleza', label: 'Alphaville Fortaleza' },
    { value: 'Alphaville Eusébio', label: 'Alphaville Eusébio' },
    { value: 'Alphaville Residencial', label: 'Alphaville Residencial' },
    { value: 'Alphaville Empresarial', label: 'Alphaville Empresarial' },
  ];

  const bedroomOptions = [
    { value: null, label: 'Qualquer' },
    { value: 1, label: '1+' },
    { value: 2, label: '2+' },
    { value: 3, label: '3+' },
    { value: 4, label: '4+' },
    { value: 5, label: '5+' },
  ];

  const bathroomOptions = [
    { value: null, label: 'Qualquer' },
    { value: 1, label: '1+' },
    { value: 2, label: '2+' },
    { value: 3, label: '3+' },
    { value: 4, label: '4+' },
    { value: 5, label: '5+' },
  ];

  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const hasActiveFilters = () => {
    return (
      filters.searchTerm ||
      filters.priceRange[0] > 0 ||
      filters.priceRange[1] < 5000000 ||
      filters.areaRange[0] > 0 ||
      filters.areaRange[1] < 1000 ||
      filters.bedrooms !== null ||
      filters.bathrooms !== null ||
      filters.propertyType ||
      filters.featured !== null ||
      filters.location
    );
  };

  return (
    <div className="relative">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por título, localização ou características..."
            value={filters.searchTerm}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gold-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-all duration-300 text-lg"
          />
        </div>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between mb-6">
        <motion.button
          onClick={onToggle}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold-500/30 text-gold-500 px-6 py-3 rounded-xl hover:bg-gold-500/20 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filtros Avançados
          {hasActiveFilters() && (
            <span className="bg-gold-500 text-black-900 text-xs px-2 py-1 rounded-full font-medium">
              Ativo
            </span>
          )}
        </motion.button>

        {hasActiveFilters() && (
          <motion.button
            onClick={onClear}
            className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-4 h-4" />
            Limpar Filtros
          </motion.button>
        )}
      </div>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gold-500/20 p-6 mb-6 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-gold-500 font-medium mb-3">
                  Faixa de Preço
                </label>
                <div className="space-y-3">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      step="100000"
                      value={filters.priceRange[0]}
                      onChange={(e) =>
                        updateFilter('priceRange', [
                          parseInt(e.target.value),
                          filters.priceRange[1],
                        ])
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>{formatPrice(filters.priceRange[0])}</span>
                      <span>Mínimo</span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      step="100000"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        updateFilter('priceRange', [
                          filters.priceRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>{formatPrice(filters.priceRange[1])}</span>
                      <span>Máximo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Range */}
              <div>
                <label className="block text-gold-500 font-medium mb-3">
                  Área (m²)
                </label>
                <div className="space-y-3">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={filters.areaRange[0]}
                      onChange={(e) =>
                        updateFilter('areaRange', [
                          parseInt(e.target.value),
                          filters.areaRange[1],
                        ])
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>{filters.areaRange[0]}m²</span>
                      <span>Mínimo</span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={filters.areaRange[1]}
                      onChange={(e) =>
                        updateFilter('areaRange', [
                          filters.areaRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>{filters.areaRange[1]}m²</span>
                      <span>Máximo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-gold-500 font-medium mb-3">
                  Tipo de Imóvel
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => updateFilter('propertyType', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-black-900">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-gold-500 font-medium mb-3">
                  Localização
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => updateFilter('location', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                >
                  {locations.map((location) => (
                    <option key={location.value} value={location.value} className="bg-black-900">
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-gold-500 font-medium mb-3">
                  Quartos
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {bedroomOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => updateFilter('bedrooms', option.value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        filters.bedrooms === option.value
                          ? 'bg-gradient-gold text-black-900'
                          : 'bg-white/10 text-gray-300 hover:bg-gold-500/20 hover:text-gold-500 border border-gold-500/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-gold-500 font-medium mb-3">
                  Banheiros
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {bathroomOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => updateFilter('bathrooms', option.value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        filters.bathrooms === option.value
                          ? 'bg-gradient-gold text-black-900'
                          : 'bg-white/10 text-gray-300 hover:bg-gold-500/20 hover:text-gold-500 border border-gold-500/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Toggle */}
            <div className="mt-6 pt-6 border-t border-gold-500/20">
              <div className="flex items-center justify-between">
                <span className="text-gold-500 font-medium">Apenas Propriedades em Destaque</span>
                <motion.button
                  onClick={() => updateFilter('featured', filters.featured === true ? null : true)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                    filters.featured === true ? 'bg-gradient-gold' : 'bg-white/20'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      filters.featured === true ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyFilters;
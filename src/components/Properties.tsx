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

  const base = import.meta.env.BASE_URL;

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
      image: `${base}imovel_a/imovel_a_foto_1.jpg`,
      type: 'casa',
      featured: true,
      description:
        'Casa moderna com escada Super Nano, cozinha Perla Santana, vidros refletivos e projeto luminotécnico. Área gourmet com piscina com hidromassagem, churrasqueira e espaço ideal para receber.',
      amenities: [
        'Escada Super Nano',
        'Cozinha Perla Santana',
        'Vidros refletivos',
        'Piscina com hidromassagem',
        'Churrasqueira',
      ],
      gallery: [
        `${base}imovel_a/imovel_a_foto_1.jpg`,
        `${base}imovel_a/imovel_a_foto_2.jpg`,
        `${base}imovel_a/imovel_a_foto_3.jpg`,
        `${base}imovel_a/imovel_a_foto_4.jpg`,
        `${base}imovel_a/imovel_a_foto_5.jpg`,
        `${base}imovel_a/imovel_a_foto_6.jpg`,
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
      image: `${base}imovel_b/imovel_b_foto_1.jpg`,
      type: 'casa',
      featured: true,
      description:
        'Casa pronta com suíte master e mega closet, paisagismo completo, piscina com hidromassagem, fonte decorativa, infraestrutura para automação, energia solar e carregador para carro elétrico.',
      amenities: [
        'Mega Closet',
        'Fonte Decorativa',
        'Piscina com hidromassagem',
        'Automação residencial',
        'Carregador para carro elétrico',
      ],
      gallery: [
        `${base}imovel_b/imovel_b_foto_1.jpg`,
        `${base}imovel_b/imovel_b_foto_2.jpg`,
        `${base}imovel_b/imovel_b_foto_3.jpg`,
        `${base}imovel_b/imovel_b_foto_4.jpg`,
        `${base}imovel_b/imovel_b_foto_5.jpg`,
        `${base}imovel_b/imovel_b_foto_6.jpg`,
      ],
    },
    // Adicione mais imóveis se desejar
  ];

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchLower = filters.searchTerm.toLowerCase();

      const matchesSearch =
        !filters.searchTerm ||
        property.title.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.description.toLowerCase().includes(searchLower) ||
        property.amenities.some((a) => a.toLowerCase().includes(searchLower));

      const matchesPrice =
        property.priceValue >= filters.priceRange[0] &&
        property.priceValue <= filters.priceRange[1];

      const matchesArea =
        property.area >= filters.areaRange[0] &&
        property.area <= filters.areaRange[1];

      const matchesBedrooms =
        filters.bedrooms === null || property.bedrooms >= filters.bedrooms;

      const matchesBathrooms =
        filters.bathrooms === null || property.bathrooms >= filters.bathrooms;

      const matchesType =
        !filters.propertyType || property.type === filters.propertyType;

      const matchesFeatured =
        filters.featured === null || property.featured === filters.featured;

      const matchesLocation =
        !filters.location || property.location === filters.location;

      return (
        matchesSearch &&
        matchesPrice &&
        matchesArea &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesType &&
        matchesFeatured &&
        matchesLocation
      );
    });
  }, [filters, properties]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
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
        {/* Header, Filtros, Resultados, Cards... */}
        {/* o restante do componente permanece igual */}
      </div>
    </section>
  );
};

export default Properties;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Tendências do Mercado Imobiliário de Luxo em 2024',
      slug: 'tendencias-mercado-imobiliario-luxo-2024',
      excerpt: 'Descubra as principais tendências que estão moldando o mercado de imóveis de alto padrão em Alphaville e região.',
      content: '',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      author: 'Carlos Silva',
      date: '15 de Dezembro, 2024',
      category: 'Mercado',
      readTime: '5 min',
      featured: true,
    },
    {
      id: 2,
      title: 'Como Avaliar um Imóvel de Luxo: Guia Completo',
      slug: 'como-avaliar-imovel-luxo-guia-completo',
      excerpt: 'Aprenda os critérios essenciais para avaliar corretamente propriedades de alto padrão e fazer o melhor investimento.',
      content: '',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      author: 'Ana Costa',
      date: '12 de Dezembro, 2024',
      category: 'Investimento',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 3,
      title: 'Alphaville Fortaleza: O Destino Premium do Ceará',
      slug: 'alphaville-fortaleza-destino-premium-ceara',
      excerpt: 'Conheça os diferenciais que fazem de Alphaville Fortaleza o endereço mais desejado para quem busca qualidade de vida.',
      content: '',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      author: 'Roberto Lima',
      date: '10 de Dezembro, 2024',
      category: 'Localização',
      readTime: '6 min',
      featured: true,
    },
    {
      id: 4,
      title: 'Sustentabilidade em Imóveis de Luxo: O Futuro é Verde',
      slug: 'sustentabilidade-imoveis-luxo-futuro-verde',
      excerpt: 'Como a sustentabilidade está se tornando um diferencial competitivo no mercado de imóveis de alto padrão.',
      content: '',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      author: 'Marina Santos',
      date: '8 de Dezembro, 2024',
      category: 'Sustentabilidade',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 5,
      title: 'Financiamento para Imóveis de Luxo: Dicas e Estratégias',
      slug: 'financiamento-imoveis-luxo-dicas-estrategias',
      excerpt: 'Estratégias inteligentes para obter as melhores condições de financiamento para propriedades de alto valor.',
      content: '',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      author: 'Carlos Silva',
      date: '5 de Dezembro, 2024',
      category: 'Financiamento',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 6,
      title: 'Design de Interiores: Tendências para Casas de Luxo',
      slug: 'design-interiores-tendencias-casas-luxo',
      excerpt: 'As últimas tendências em design de interiores que estão definindo o padrão de elegância em residências de alto padrão.',
      content: '',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg',
      author: 'Ana Costa',
      date: '3 de Dezembro, 2024',
      category: 'Design',
      readTime: '6 min',
      featured: false,
    },
  ];

  const categories = ['Mercado', 'Investimento', 'Localização', 'Sustentabilidade', 'Financiamento', 'Design'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            Blog Alpha Conceito
          </span>
          <h1 className="text-4xl lg:text-6xl font-luxury font-bold text-white mb-6">
            Insights do <span className="bg-gradient-gold bg-clip-text text-transparent">Mercado</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fique por dentro das últimas tendências, dicas e análises do mercado imobiliário de luxo.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gold-500/30 rounded-xl text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gold-500/30 rounded-xl text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
            >
              <option value="" className="bg-black-900">Todas as Categorias</option>
              {categories.map(category => (
                <option key={category} value={category} className="bg-black-900">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !selectedCategory
                  ? 'bg-gradient-gold text-black-900'
                  : 'bg-white/10 text-gray-300 hover:bg-gold-500/20 hover:text-gold-500 border border-gold-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Todos
            </motion.button>
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-gold text-black-900'
                    : 'bg-white/10 text-gray-300 hover:bg-gold-500/20 hover:text-gold-500 border border-gold-500/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tag className="w-4 h-4 inline-block mr-1" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-luxury font-bold text-gold-500 mb-8">Artigos em Destaque</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-gradient-gold text-black-900 px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm border border-gold-500/30 mb-2">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-luxury font-bold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <motion.button
                        className="w-full bg-gradient-gold text-black-900 py-3 rounded-lg font-modern font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Ler Artigo
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-luxury font-bold text-white mb-8">Todos os Artigos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm border border-gold-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-luxury font-bold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <motion.button
                        className="w-full bg-white/10 text-gold-500 py-2 rounded-lg font-modern font-medium flex items-center justify-center gap-2 hover:bg-gold-500/20 transition-all duration-300 border border-gold-500/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Ler Mais
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-luxury font-bold text-white mb-4">
              Nenhum artigo encontrado
            </h3>
            <p className="text-gray-400 mb-6">
              Tente ajustar os filtros ou termos de busca.
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="bg-gradient-gold text-black-900 px-6 py-3 rounded-lg font-modern font-semibold hover:shadow-gold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Limpar Filtros
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
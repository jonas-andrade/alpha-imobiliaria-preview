import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: 'Tendências do Mercado Imobiliário de Luxo em 2024',
    slug: 'tendencias-mercado-imobiliario-luxo-2024',
    excerpt: 'Descubra as principais tendências que estão moldando o mercado de imóveis de alto padrão em Alphaville e região.',
    content: `
      <p>O mercado imobiliário de luxo em 2024 está passando por transformações significativas, especialmente em regiões premium como Alphaville Fortaleza. Como especialistas no setor, observamos tendências que estão redefinindo as expectativas dos compradores de alto padrão.</p>

      <h2>1. Sustentabilidade como Diferencial Competitivo</h2>
      <p>A sustentabilidade deixou de ser um "nice to have" para se tornar um requisito essencial. Propriedades com certificações ambientais, sistemas de energia solar, captação de água da chuva e materiais sustentáveis estão valorizando até 15% mais no mercado.</p>

      <h2>2. Tecnologia Integrada e Casas Inteligentes</h2>
      <p>A automação residencial não é mais novidade, mas a integração completa de sistemas inteligentes sim. Desde iluminação adaptativa até sistemas de segurança com IA, a tecnologia está se tornando invisível e intuitiva.</p>

      <h2>3. Espaços Multifuncionais e Home Office</h2>
      <p>O conceito de home office evoluiu para espaços multifuncionais que podem servir como escritório, sala de reuniões virtuais, estúdio de gravação ou até mesmo academia. A flexibilidade é a palavra-chave.</p>

      <h2>4. Áreas Externas como Extensão da Casa</h2>
      <p>Jardins, terraços e áreas de lazer externas ganharam protagonismo. Projetos paisagísticos elaborados, piscinas com design arquitetônico e espaços gourmet ao ar livre são altamente valorizados.</p>

      <h2>5. Localização Premium com Infraestrutura Completa</h2>
      <p>Alphaville continua sendo referência por oferecer não apenas localização privilegiada, mas infraestrutura completa: segurança 24h, proximidade a shopping centers, escolas de qualidade e fácil acesso aos principais pontos da cidade.</p>

      <h2>Conclusão</h2>
      <p>O mercado de luxo em 2024 premia propriedades que combinam localização estratégica, sustentabilidade, tecnologia e design atemporal. Para investidores e compradores, é fundamental estar atento a essas tendências para fazer escolhas que se valorizem ao longo do tempo.</p>
    `,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    author: 'Carlos Silva',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    authorBio: 'CEO da Alpha Conceito Imobiliária com mais de 20 anos de experiência no mercado imobiliário de luxo.',
    date: '15 de Dezembro, 2024',
    category: 'Mercado',
    readTime: '5 min',
    views: 1247,
    tags: ['Mercado Imobiliário', 'Luxo', 'Tendências', 'Alphaville', 'Investimento'],
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Como Avaliar um Imóvel de Luxo: Guia Completo',
      slug: 'como-avaliar-imovel-luxo-guia-completo',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      category: 'Investimento',
      readTime: '8 min',
    },
    {
      id: 3,
      title: 'Alphaville Fortaleza: O Destino Premium do Ceará',
      slug: 'alphaville-fortaleza-destino-premium-ceara',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      category: 'Localização',
      readTime: '6 min',
    },
    {
      id: 4,
      title: 'Sustentabilidade em Imóveis de Luxo: O Futuro é Verde',
      slug: 'sustentabilidade-imoveis-luxo-futuro-verde',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      category: 'Sustentabilidade',
      readTime: '7 min',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-gradient-luxury min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-block bg-gold-500/20 text-gold-500 px-4 py-2 rounded-full text-sm font-medium border border-gold-500/30">
                {blogPost.category}
              </span>
            </div>

            {/* Share Button */}
            <div className="absolute top-6 right-6">
              <motion.button
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-gold-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 lg:p-12">
            {/* Title */}
            <motion.h1
              className="text-3xl lg:text-4xl font-luxury font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {blogPost.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gold-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <div className="text-white font-medium">{blogPost.author}</div>
                  <div className="text-gray-400 text-sm">Autor</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{blogPost.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{blogPost.readTime} de leitura</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{blogPost.views.toLocaleString()} visualizações</span>
              </div>
            </motion.div>

            {/* Article Body */}
            <motion.div
              className="prose prose-lg prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              style={{
                color: '#d1d5db',
                lineHeight: '1.8',
              }}
            />

            {/* Tags */}
            <motion.div
              className="mt-12 pt-8 border-t border-gold-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg font-luxury font-bold text-gold-500 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold-500/20 text-gold-500 rounded-full text-sm border border-gold-500/30 hover:bg-gold-500/30 transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              className="mt-8 p-6 bg-white/5 rounded-2xl border border-gold-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/30"
                />
                <div>
                  <h4 className="text-xl font-luxury font-bold text-white mb-2">
                    Sobre {blogPost.author}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {blogPost.authorBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-2xl font-luxury font-bold text-white mb-8">
            Artigos Relacionados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm border border-gold-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-luxury font-bold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <motion.button
                      className="mt-4 w-full bg-white/10 text-gold-500 py-2 rounded-lg font-modern font-medium hover:bg-gold-500/20 transition-all duration-300 border border-gold-500/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ler Artigo
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
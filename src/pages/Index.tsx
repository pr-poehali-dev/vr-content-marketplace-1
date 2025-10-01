import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    {
      id: 'avatars',
      name: 'Аватары',
      icon: 'User',
      color: 'from-cyan-500 to-blue-500',
      count: '2.5k+'
    },
    {
      id: 'worlds',
      name: 'Миры',
      icon: 'Globe',
      color: 'from-purple-500 to-pink-500',
      count: '1.2k+'
    },
    {
      id: 'shaders',
      name: 'Шейдеры',
      icon: 'Sparkles',
      color: 'from-orange-500 to-red-500',
      count: '890+'
    },
    {
      id: 'clothing',
      name: 'Одежда',
      icon: 'Shirt',
      color: 'from-green-500 to-teal-500',
      count: '3.1k+'
    }
  ];

  const topProducts = [
    {
      id: 1,
      title: 'Cyber Neko Avatar',
      author: 'NeonArtist',
      price: 2499,
      oldPrice: 3499,
      rating: 4.9,
      reviews: 342,
      category: 'avatars',
      image: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
      tags: ['Cyber', 'Neko', 'Anime']
    },
    {
      id: 2,
      title: 'Fantasy Sky Palace',
      author: 'WorldBuilder',
      price: 4999,
      rating: 5.0,
      reviews: 128,
      category: 'worlds',
      image: '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg',
      tags: ['Fantasy', 'Adventure', 'Interactive']
    },
    {
      id: 3,
      title: 'Kawaii Dream Avatar',
      author: 'CuteCreator',
      price: 1999,
      rating: 4.8,
      reviews: 567,
      category: 'avatars',
      image: '/img/c9624f8d-a187-4f0b-b788-36e2ebab4c0e.jpg',
      tags: ['Kawaii', 'Pastel', 'Cute']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold">VRContentHub</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Авторы</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 w-80">
              <Icon name="Search" size={18} className="text-muted-foreground" />
              <Input 
                placeholder="Поиск контента..." 
                className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container relative px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              Маркетплейс цифрового контента для VRChat
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Открой мир уникальных аватаров, миров, шейдеров и одежды от лучших авторов сообщества
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать исследование
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Icon name="Palette" size={20} className="mr-2" />
                Стать автором
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Категории</h2>
            <p className="text-muted-foreground">Выбери то, что тебя вдохновляет</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.id}
                className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="p-8 text-center relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} товаров</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/30">
        <div className="container px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Топ продаж</h2>
              <p className="text-muted-foreground">Самые популярные товары этого месяца</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.oldPrice && (
                    <Badge className="absolute top-3 right-3 bg-destructive text-white border-0">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">by {product.author}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} отзывов)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        {product.oldPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.oldPrice} ₽</span>
                        )}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => setCartCount(cartCount + 1)}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" className="w-full sm:w-auto">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-lg font-heading font-bold">VRContentHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальный маркетплейс для VRChat-сообщества
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Аватары</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Миры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Шейдеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Одежда</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для авторов</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Соглашение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">VK</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 VRContentHub. Все права защищены
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

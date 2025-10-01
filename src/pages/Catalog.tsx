import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Digital Content ${i + 1}`,
    author: `Creator ${Math.floor(Math.random() * 10) + 1}`,
    price: Math.floor(Math.random() * 5000) + 1000,
    rating: (Math.random() * 1 + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    category: ['avatars', 'worlds', 'shaders', 'clothing'][Math.floor(Math.random() * 4)],
    image: `/img/${['603c1b7a-e5ab-49bd-90e5-126e007267a0', '14a30804-936e-4a7c-aff9-882e7b313d24', 'c9624f8d-a187-4f0b-b788-36e2ebab4c0e'][i % 3]}.jpg`,
    tags: ['Cyber', 'Neko', 'Anime'].slice(0, Math.floor(Math.random() * 3) + 1)
  }));

  const tags = ['Cyber', 'Neko', 'Anime', 'Fantasy', 'Realistic', 'Kawaii', 'Futuristic', 'Retro'];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={16} />
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <span className="font-medium">Каталог</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="font-heading font-semibold text-lg mb-6">Фильтры</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Категория</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      <SelectItem value="avatars">Аватары</SelectItem>
                      <SelectItem value="worlds">Миры</SelectItem>
                      <SelectItem value="shaders">Шейдеры</SelectItem>
                      <SelectItem value="clothing">Одежда</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Цена: {priceRange[0]} - {priceRange[1]} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={10000}
                    step={100}
                    className="mb-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Теги</label>
                  <div className="space-y-2">
                    {tags.map(tag => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox 
                          id={tag}
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => toggleTag(tag)}
                        />
                        <label
                          htmlFor={tag}
                          className="text-sm cursor-pointer hover:text-primary"
                        >
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </div>
            </Card>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-heading font-bold mb-2">Все товары</h1>
                <p className="text-muted-foreground">Найдено {products.length} товаров</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">Сначала дешёвые</SelectItem>
                    <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="new">Новинки</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Icon name="Grid3x3" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="List" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/10 h-full">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">by {product.author}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{product.price} ₽</span>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                          <Icon name="ShoppingCart" size={14} className="mr-1" />
                          Купить
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" disabled>
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                {[1, 2, 3, 4, 5].map(page => (
                  <Button 
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    className={page === 1 ? "bg-primary text-white" : ""}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="icon">
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

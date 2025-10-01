import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('top');

  const topProducts = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Check out the latest sample of CHOCOKIN GUNDAM CALIBARN`,
    author: 'creativenrg',
    price: 545,
    oldPrice: i % 3 === 0 ? 745 : null,
    image: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
    createdAt: '3 weeks ago'
  }));

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Левая боковая панель */}
      <aside className="w-48 bg-background border-r border-border flex flex-col fixed left-0 top-0 bottom-0 z-50">
        <div className="p-6 border-b border-border">
          <Link to="/" className="block">
            <div className="text-2xl font-heading font-bold tracking-tight leading-tight">
              <span className="text-primary">FUR</span>
              <br />
              <span className="text-foreground text-base">HORIZON</span>
            </div>
          </Link>
        </div>

        <div className="flex-1"></div>

        <div className="p-6 border-t border-border">
          <div className="space-y-3 text-xs text-muted-foreground mb-4">
            <Link to="/about" className="block hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/about" className="block hover:text-foreground transition-colors">Contact us</Link>
            <Link to="/about" className="block hover:text-foreground transition-colors">Support</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Icon name="Twitter" size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Icon name="Facebook" size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Icon name="Instagram" size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Icon name="Linkedin" size={16} />
            </Button>
          </div>
        </div>
      </aside>

      {/* Основной контент */}
      <div className="flex-1 ml-48">
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between px-8">

          <div className="flex items-center gap-6 flex-1 justify-center max-w-2xl mx-8">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2 flex-1">
              <Icon name="Search" size={18} className="text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto text-sm"
              />
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
              Create content
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Icon name="User" size={16} />
                Avatars
              </Link>
              <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Icon name="Box" size={16} />
                Models
              </Link>
              <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Icon name="Globe" size={16} />
                Worlds
              </Link>
              <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Icon name="Sparkles" size={16} />
                Shaders
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
              <Link to="/profile">
                <Avatar className="w-9 h-9 border-2 border-primary">
                  <AvatarImage src="/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="px-8 py-12">
        <section className="mb-12">
          <div className="mb-2 text-sm text-muted-foreground">Store</div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-primary">
            Fur Horizon
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Become a part of our community and make the future progressive.
          </p>
        </section>

        <section className="mb-12">
          <div className="mb-8">
            <div className="text-sm font-medium mb-4">Category</div>
            <div className="flex gap-6">
              <button
                onClick={() => setSelectedCategory('top')}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  selectedCategory === 'top' 
                    ? 'border-primary text-foreground' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Top
              </button>
              <button
                onClick={() => setSelectedCategory('sales')}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  selectedCategory === 'sales' 
                    ? 'border-primary text-foreground' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Sales
              </button>
              <button
                onClick={() => setSelectedCategory('free')}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  selectedCategory === 'free' 
                    ? 'border-primary text-foreground' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Free
              </button>
              <button
                onClick={() => setSelectedCategory('new')}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  selectedCategory === 'new' 
                    ? 'border-primary text-foreground' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                New
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {topProducts.slice(0, 1).map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="sm:col-span-2 lg:row-span-2"
              >
                <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.oldPrice && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground border-0 font-semibold">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.oldPrice}</span>
                      )}
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="User" size={12} />
                      <span>{product.author}</span>
                      <span>•</span>
                      <span>{product.createdAt}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}

            {topProducts.slice(1, 6).map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
              >
                <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.oldPrice && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground border-0 font-semibold text-xs">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg font-bold text-primary">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-xs text-muted-foreground line-through">${product.oldPrice}</span>
                      )}
                    </div>
                    <h3 className="font-medium text-xs mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="User" size={10} />
                      <span className="truncate">{product.author}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">Category (34)</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {topProducts.slice(6, 11).map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
              >
                <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-lg font-bold text-primary mb-1">${product.price}</div>
                    <h3 className="font-medium text-xs mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="User" size={10} />
                      <span className="truncate">{product.author}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
          >
            Show more
          </Button>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">Category (34)</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {topProducts.slice(11, 16).map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
              >
                <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-lg font-bold text-primary mb-1">${product.price}</div>
                    <h3 className="font-medium text-xs mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="User" size={10} />
                      <span className="truncate">{product.author}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
          >
            Show more
          </Button>
        </section>
      </main>
      </div>
    </div>
  );
};

export default Index;
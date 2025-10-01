import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id,
    title: 'Cyber Neko Avatar',
    author: {
      name: 'NeonArtist',
      avatar: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
      verified: true,
      sales: 342
    },
    price: 2499,
    oldPrice: 3499,
    rating: 4.9,
    reviews: 342,
    category: 'Аватары',
    images: [
      '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
      '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg',
      '/img/c9624f8d-a187-4f0b-b788-36e2ebab4c0e.jpg'
    ],
    tags: ['Cyber', 'Neko', 'Anime', 'PC', 'Quest'],
    description: `Премиальный киберпанк-аватар в стиле Neko с полной кастомизацией и анимациями.

**Особенности:**
• Полностью оптимизирован для VRChat (Good рейтинг)
• 15+ настраиваемых цветов
• Динамические кости (Dynamic Bones)
• Поддержка Face Tracking
• PhysBones для ушей, хвоста и волос
• Встроенные жесты и эмоции
• Toggles для одежды и аксессуаров

**Технические характеристики:**
• Полигонов: ~32,000
• Материалов: 8
• Текстуры: 4K
• Скелет: Humanoid
• Шейдеры: Poiyomi 8.1

**Комплектация:**
- Unity Package (.unitypackage)
- FBX модель
- Текстуры (PSD)
- Документация по установке
- Пожизненные обновления

**Требования:**
- Unity 2019.4.31f1
- VRChat SDK3 - Avatars
- Poiyomi Shaders (бесплатно)`,
    
    reviews: [
      {
        id: 1,
        author: 'VRUser2023',
        avatar: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
        rating: 5,
        date: '2024-09-15',
        text: 'Потрясающий аватар! Качество на высоте, все работает отлично. Поддержка от автора очень отзывчивая.',
        helpful: 45
      },
      {
        id: 2,
        author: 'NekoLover',
        avatar: '/img/c9624f8d-a187-4f0b-b788-36e2ebab4c0e.jpg',
        rating: 5,
        date: '2024-09-10',
        text: 'Лучший аватар в моей коллекции! Оптимизация супер, все анимации плавные.',
        helpful: 32
      },
      {
        id: 3,
        author: 'CyberFan',
        avatar: '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg',
        rating: 4,
        date: '2024-09-05',
        text: 'Отличный аватар, единственное - хотелось бы больше вариантов прически.',
        helpful: 18
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={16} />
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <Link to="/catalog" className="text-muted-foreground hover:text-foreground">
            Каталог
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <span className="font-medium line-clamp-1">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden mb-4">
              <div className="aspect-square bg-muted">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <Card 
                  key={index}
                  className={`overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square bg-muted">
                    <img 
                      src={image} 
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-accent text-accent-foreground">{product.category}</Badge>
                {product.oldPrice && (
                  <Badge className="bg-destructive text-white">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-heading font-bold mb-4">{product.title}</h1>

              <Link to={`/author/${product.author.name}`} className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                <Avatar>
                  <AvatarImage src={product.author.avatar} />
                  <AvatarFallback>{product.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{product.author.name}</span>
                    {product.author.verified && (
                      <Icon name="BadgeCheck" size={16} className="text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.author.sales} продаж</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Icon 
                        key={star} 
                        name="Star" 
                        size={18} 
                        className={star <= Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="font-bold">{product.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-sm text-muted-foreground">{product.reviews.length} отзывов</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-primary">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through">{product.oldPrice} ₽</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">Единоразовая покупка, пожизненный доступ</p>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-br from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground h-12 text-lg shadow-lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить сейчас
                </Button>
                <Button variant="outline" className="w-full h-12">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Shield" size={16} />
                  <span>Защита покупателя</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Download" size={16} />
                  <span>Мгновенная загрузка</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="RefreshCw" size={16} />
                  <span>Пожизненные обновления</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 md:p-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({product.reviews.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="space-y-4">
              <div className="prose prose-invert max-w-none">
                {product.description.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h3 key={i} className="text-xl font-heading font-semibold mt-6 mb-3">{line.replace(/\*\*/g, '')}</h3>;
                      }
                      if (line.startsWith('•')) {
                        return <li key={i} className="ml-4 text-muted-foreground">{line.substring(1).trim()}</li>;
                      }
                      if (line.startsWith('-')) {
                        return <li key={i} className="ml-4 text-muted-foreground">{line.substring(1).trim()}</li>;
                      }
                      return line ? <p key={i} className="text-foreground leading-relaxed">{line}</p> : null;
                    })}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{product.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Icon 
                        key={star} 
                        name="Star" 
                        size={20} 
                        className={star <= Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">На основе {product.reviews.length} отзывов</p>
                </Card>

                <Card className="p-6 md:col-span-2">
                  <h3 className="font-heading font-semibold mb-4">Распределение оценок</h3>
                  {[5, 4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 w-20">
                        <span className="text-sm">{rating}</span>
                        <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                      </div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500"
                          style={{ width: rating === 5 ? '85%' : rating === 4 ? '12%' : '3%' }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {rating === 5 ? '85%' : rating === 4 ? '12%' : '3%'}
                      </span>
                    </div>
                  ))}
                </Card>
              </div>

              <div className="space-y-6">
                {product.reviews.map(review => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="font-medium">{review.author}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <Icon 
                                    key={star} 
                                    name="Star" 
                                    size={14} 
                                    className={star <= review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{review.text}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Icon name="ThumbsUp" size={14} className="mr-2" />
                            Полезно ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Icon name="MessageCircle" size={14} className="mr-2" />
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">
                  Загрузить ещё отзывы
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Product;
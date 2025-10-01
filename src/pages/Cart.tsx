import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Cyber Neko Avatar',
      author: 'NeonArtist',
      price: 2499,
      oldPrice: 3499,
      image: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
      quantity: 1
    },
    {
      id: 2,
      title: 'Fantasy Sky Palace',
      author: 'WorldBuilder',
      price: 4999,
      image: '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg',
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => 
    sum + ((item.oldPrice || item.price) - item.price) * item.quantity, 0
  );
  const total = subtotal;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4">Корзина пуста</h1>
          <p className="text-muted-foreground mb-8">
            Добавьте товары в корзину, чтобы продолжить покупки
          </p>
          <Link to="/catalog">
            <Button className="bg-primary text-white">
              <Icon name="Store" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={16} />
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <span className="font-medium">Корзина</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Корзина <span className="text-muted-foreground">({cartItems.length})</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-heading font-semibold text-lg mb-1 hover:text-primary transition-colors line-clamp-1">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">by {item.author}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Icon name="Trash2" size={18} />
                      </Button>
                    </div>

                    <div className="flex items-end justify-between mt-4">
                      <div>
                        {item.oldPrice && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-muted-foreground line-through">
                              {item.oldPrice} ₽
                            </span>
                            <Badge className="bg-destructive text-white text-xs">
                              -{Math.round((1 - item.price / item.oldPrice) * 100)}%
                            </Badge>
                          </div>
                        )}
                        <div className="text-2xl font-bold text-primary">
                          {item.price} ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6">
              <h3 className="font-heading font-semibold mb-4">Промокод</h3>
              <div className="flex gap-3">
                <Input 
                  placeholder="Введите промокод"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button variant="outline">Применить</Button>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="font-heading font-semibold text-lg mb-6">Итого</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                  <span className="font-medium">{subtotal} ₽</span>
                </div>

                {discount > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Скидка</span>
                    <span className="font-medium text-destructive">-{discount} ₽</span>
                  </div>
                )}

                <Separator />

                <div className="flex items-center justify-between text-lg">
                  <span className="font-semibold">Итого</span>
                  <span className="font-bold text-primary text-2xl">{total} ₽</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg mb-4">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оформить заказ
              </Button>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Download" size={16} />
                  <span>Мгновенный доступ к файлам</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="RotateCcw" size={16} />
                  <span>Возврат в течение 14 дней</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <p className="text-sm font-medium">Принимаем к оплате:</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="px-3 py-2 bg-muted rounded text-xs font-medium">VISA</div>
                  <div className="px-3 py-2 bg-muted rounded text-xs font-medium">Mastercard</div>
                  <div className="px-3 py-2 bg-muted rounded text-xs font-medium">МИР</div>
                  <div className="px-3 py-2 bg-muted rounded text-xs font-medium">PayPal</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="mt-8 p-6 bg-card/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Info" size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-2">Что произойдёт после оплаты?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>Вы получите мгновенный доступ к скачиванию файлов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>Товары будут добавлены в вашу библиотеку навсегда</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>Вы получите все будущие обновления бесплатно</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;

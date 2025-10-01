import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const [isAuthor, setIsAuthor] = useState(false);

  const user = {
    name: 'VRUser2023',
    email: 'user@example.com',
    avatar: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
    memberSince: '15 января 2023',
    totalPurchases: 24,
    verified: true
  };

  const authorStats = {
    totalProducts: 18,
    totalSales: 1247,
    totalRevenue: 3124590,
    rating: 4.9
  };

  const purchases = [
    {
      id: 1,
      title: 'Cyber Neko Avatar',
      author: 'NeonArtist',
      price: 2499,
      image: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
      purchaseDate: '2024-09-15',
      category: 'Аватары'
    },
    {
      id: 2,
      title: 'Fantasy Sky Palace',
      author: 'WorldBuilder',
      price: 4999,
      image: '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg',
      purchaseDate: '2024-09-10',
      category: 'Миры'
    },
    {
      id: 3,
      title: 'Kawaii Dream Avatar',
      author: 'CuteCreator',
      price: 1999,
      image: '/img/c9624f8d-a187-4f0b-b788-36e2ebab4c0e.jpg',
      purchaseDate: '2024-09-05',
      category: 'Аватары'
    }
  ];

  const myProducts = [
    {
      id: 1,
      title: 'Cyber Neko Avatar',
      price: 2499,
      sales: 342,
      revenue: 854658,
      status: 'active',
      rating: 4.9,
      image: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg'
    },
    {
      id: 2,
      title: 'Futuristic Shader Pack',
      price: 1999,
      sales: 156,
      revenue: 311844,
      status: 'active',
      rating: 4.8,
      image: '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg'
    }
  ];

  const recentSales = [
    { id: 1, product: 'Cyber Neko Avatar', buyer: 'VRUser123', amount: 2499, date: '2024-10-01 14:32' },
    { id: 2, product: 'Futuristic Shader Pack', buyer: 'NekoFan', amount: 1999, date: '2024-10-01 12:15' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={16} />
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <span className="font-medium">Профиль</span>
        </div>

        <Card className="p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-3xl">{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-heading font-bold">{user.name}</h1>
                {user.verified && (
                  <Icon name="BadgeCheck" size={24} className="text-primary" />
                )}
              </div>
              <p className="text-muted-foreground mb-4">
                {isAuthor ? 'Автор контента' : 'Покупатель'}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span>Участник с {user.memberSince}</span>
                </div>
                {!isAuthor && (
                  <div className="flex items-center gap-2">
                    <Icon name="ShoppingBag" size={16} className="text-muted-foreground" />
                    <span>{user.totalPurchases} покупок</span>
                  </div>
                )}
                {isAuthor && (
                  <>
                    <div className="flex items-center gap-2">
                      <Icon name="Package" size={16} className="text-muted-foreground" />
                      <span>{authorStats.totalProducts} товаров</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                      <span>{authorStats.rating} рейтинг</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="outline">
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать
              </Button>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Label htmlFor="author-mode" className="text-sm cursor-pointer">
                  Режим автора
                </Label>
                <Switch 
                  id="author-mode"
                  checked={isAuthor}
                  onCheckedChange={setIsAuthor}
                />
              </div>
            </div>
          </div>
        </Card>

        {isAuthor && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon name="Package" size={24} className="text-primary" />
                <Badge variant="secondary">{authorStats.totalProducts}</Badge>
              </div>
              <div className="text-2xl font-bold mb-1">{authorStats.totalProducts}</div>
              <div className="text-sm text-muted-foreground">Товаров</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon name="ShoppingBag" size={24} className="text-accent" />
                <Icon name="TrendingUp" size={16} className="text-green-500" />
              </div>
              <div className="text-2xl font-bold mb-1">{authorStats.totalSales}</div>
              <div className="text-sm text-muted-foreground">Продаж</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon name="Wallet" size={24} className="text-green-500" />
                <Icon name="TrendingUp" size={16} className="text-green-500" />
              </div>
              <div className="text-2xl font-bold mb-1">{authorStats.totalRevenue.toLocaleString()} ₽</div>
              <div className="text-sm text-muted-foreground">Общий доход</div>
            </Card>
          </div>
        )}

        <Tabs defaultValue={isAuthor ? "products" : "library"} className="w-full">
          <TabsList className={`grid w-full ${isAuthor ? 'grid-cols-3' : 'grid-cols-2'} mb-8`}>
            {isAuthor ? (
              <>
                <TabsTrigger value="products">
                  <Icon name="Package" size={16} className="mr-2" />
                  Мои товары
                </TabsTrigger>
                <TabsTrigger value="sales">
                  <Icon name="BarChart3" size={16} className="mr-2" />
                  Продажи
                </TabsTrigger>
              </>
            ) : (
              <TabsTrigger value="library">
                <Icon name="Library" size={16} className="mr-2" />
                Библиотека
              </TabsTrigger>
            )}
            <TabsTrigger value="settings">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          {!isAuthor && (
            <TabsContent value="library">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-2">Мои покупки</h2>
                  <p className="text-muted-foreground">{purchases.length} товаров в библиотеке</p>
                </div>
                <div className="flex gap-3">
                  <Input placeholder="Поиск в библиотеке..." className="w-64" />
                  <Button variant="outline">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтр
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {purchases.map(item => (
                  <Card key={item.id} className="overflow-hidden group">
                    <div className="relative aspect-square bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <Button size="sm" className="bg-primary text-white">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                        <Link to={`/product/${item.id}`}>
                          <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur">
                            <Icon name="ExternalLink" size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                      <h3 className="font-heading font-semibold text-lg mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">by {item.author}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Куплено {item.purchaseDate}</span>
                        <span className="font-medium text-primary">{item.price} ₽</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}

          {isAuthor && (
            <>
              <TabsContent value="products">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-bold">Мои товары</h2>
                  <Button className="bg-primary text-white">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить товар
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="relative aspect-square bg-muted">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge 
                          className={`absolute top-3 right-3 ${
                            product.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                        >
                          {product.status === 'active' ? 'Активен' : 'Черновик'}
                        </Badge>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading font-semibold text-lg mb-3 line-clamp-1">
                          {product.title}
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Продаж</div>
                            <div className="font-semibold">{product.sales}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Доход</div>
                            <div className="font-semibold text-green-500">{product.revenue.toLocaleString()} ₽</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Icon name="Edit" size={14} className="mr-1" />
                            Редактировать
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Icon name="Eye" size={14} className="mr-1" />
                            Просмотр
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sales">
                <Card className="p-6">
                  <h2 className="text-2xl font-heading font-bold mb-6">Последние продажи</h2>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Товар</TableHead>
                        <TableHead>Покупатель</TableHead>
                        <TableHead>Сумма</TableHead>
                        <TableHead>Дата</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentSales.map(sale => (
                        <TableRow key={sale.id}>
                          <TableCell className="font-medium">{sale.product}</TableCell>
                          <TableCell>{sale.buyer}</TableCell>
                          <TableCell className="text-green-500 font-semibold">{sale.amount} ₽</TableCell>
                          <TableCell className="text-muted-foreground">{sale.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            </>
          )}

          <TabsContent value="settings">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Настройки аккаунта</h2>
              
              <form className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя</Label>
                  <Input id="username" defaultValue={user.name} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discord">Discord</Label>
                  <Input id="discord" placeholder="Username#0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telegram">Telegram</Label>
                  <Input id="telegram" placeholder="@username" />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-heading font-semibold mb-4">Изменить пароль</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Текущий пароль</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Новый пароль</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Подтвердите новый пароль</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="bg-primary text-white">
                    Сохранить изменения
                  </Button>
                  <Button variant="outline">
                    Отмена
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;

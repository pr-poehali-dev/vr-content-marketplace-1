import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const ProfileAuthor = () => {
  const author = {
    name: 'NeonArtist',
    email: 'neon@example.com',
    avatar: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
    verified: true,
    memberSince: '10 марта 2022',
    totalProducts: 18,
    totalSales: 1247,
    totalRevenue: 3124590,
    rating: 4.9
  };

  const products = [
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
    },
    {
      id: 3,
      title: 'Neon Outfit Collection',
      price: 2999,
      sales: 89,
      revenue: 266911,
      status: 'draft',
      rating: 0,
      image: '/img/c9624f8d-a187-4f0b-b788-36e2ebab4c0e.jpg'
    }
  ];

  const recentSales = [
    { id: 1, product: 'Cyber Neko Avatar', buyer: 'VRUser123', amount: 2499, date: '2024-10-01 14:32' },
    { id: 2, product: 'Futuristic Shader Pack', buyer: 'NekoFan', amount: 1999, date: '2024-10-01 12:15' },
    { id: 3, product: 'Cyber Neko Avatar', buyer: 'WorldExplorer', amount: 2499, date: '2024-09-30 18:47' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={16} />
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <span className="font-medium">Панель автора</span>
        </div>

        <Card className="p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="text-3xl">{author.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-heading font-bold">{author.name}</h1>
                {author.verified && (
                  <Icon name="BadgeCheck" size={24} className="text-primary" />
                )}
              </div>
              <p className="text-muted-foreground mb-4">Автор контента</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span>Участник с {author.memberSince}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                  <span>{author.rating} рейтинг</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Package" size={24} className="text-primary" />
              <Badge variant="secondary">{author.totalProducts}</Badge>
            </div>
            <div className="text-2xl font-bold mb-1">{author.totalProducts}</div>
            <div className="text-sm text-muted-foreground">Товаров</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="ShoppingBag" size={24} className="text-accent" />
              <Icon name="TrendingUp" size={16} className="text-green-500" />
            </div>
            <div className="text-2xl font-bold mb-1">{author.totalSales}</div>
            <div className="text-sm text-muted-foreground">Продаж</div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Wallet" size={24} className="text-green-500" />
              <Icon name="TrendingUp" size={16} className="text-green-500" />
            </div>
            <div className="text-2xl font-bold mb-1">{author.totalRevenue.toLocaleString()} ₽</div>
            <div className="text-sm text-muted-foreground">Общий доход</div>
          </Card>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="products">
              <Icon name="Package" size={16} className="mr-2" />
              Товары
            </TabsTrigger>
            <TabsTrigger value="sales">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Продажи
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <Icon name="LineChart" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold">Мои товары</h2>
              <Button className="bg-primary text-white">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить товар
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
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

                    {product.rating > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    )}

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

          <TabsContent value="analytics">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Статистика продаж</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">За сегодня</div>
                  <div className="text-3xl font-bold">12 450 ₽</div>
                  <div className="text-sm text-green-500 flex items-center gap-1 mt-1">
                    <Icon name="TrendingUp" size={14} />
                    +15% vs вчера
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">За неделю</div>
                  <div className="text-3xl font-bold">87 340 ₽</div>
                  <div className="text-sm text-green-500 flex items-center gap-1 mt-1">
                    <Icon name="TrendingUp" size={14} />
                    +8% vs прошлой
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">За месяц</div>
                  <div className="text-3xl font-bold">342 100 ₽</div>
                  <div className="text-sm text-green-500 flex items-center gap-1 mt-1">
                    <Icon name="TrendingUp" size={14} />
                    +22% vs прошлым
                  </div>
                </div>
              </div>

              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="LineChart" size={48} className="mx-auto mb-2" />
                  <p>График продаж за последние 30 дней</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Настройки автора</h2>
              <p className="text-muted-foreground">Настройки профиля, платёжной информации и уведомлений.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileAuthor;

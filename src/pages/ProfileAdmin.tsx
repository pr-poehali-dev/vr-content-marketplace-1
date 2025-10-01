import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const ProfileAdmin = () => {
  const stats = {
    totalUsers: 12459,
    totalProducts: 3847,
    totalSales: 28394,
    totalRevenue: 84729450,
    platformFee: 8472945
  };

  const users = [
    { id: 1, name: 'NeonArtist', email: 'neon@example.com', role: 'Автор', status: 'active', joined: '2022-03-10' },
    { id: 2, name: 'VRUser2023', email: 'user@example.com', role: 'Покупатель', status: 'active', joined: '2023-01-15' },
    { id: 3, name: 'WorldBuilder', email: 'world@example.com', role: 'Автор', status: 'suspended', joined: '2022-08-22' }
  ];

  const products = [
    { id: 1, title: 'Cyber Neko Avatar', author: 'NeonArtist', price: 2499, status: 'approved', sales: 342 },
    { id: 2, name: 'Fantasy Sky Palace', author: 'WorldBuilder', price: 4999, status: 'pending', sales: 128 },
    { id: 3, title: 'Suspicious Item', author: 'Scammer123', price: 99, status: 'flagged', sales: 0 }
  ];

  const recentActivity = [
    { id: 1, type: 'user', action: 'Новый пользователь зарегистрирован', user: 'NekoFan99', time: '5 мин назад' },
    { id: 2, type: 'product', action: 'Товар ожидает модерации', user: 'NeonArtist', time: '12 мин назад' },
    { id: 3, type: 'report', action: 'Жалоба на товар', user: 'VRUser2023', time: '1 час назад' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <Icon name="Home" size={16} />
          </Link>
          <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          <span className="font-medium">Панель администратора</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Панель администратора</h1>
            <p className="text-muted-foreground">Управление платформой VRContentHub</p>
          </div>
          <Badge className="bg-destructive text-white">ADMIN</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">{stats.totalUsers.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Пользователей</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Package" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold mb-1">{stats.totalProducts.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Товаров</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="ShoppingBag" size={24} className="text-green-500" />
            </div>
            <div className="text-2xl font-bold mb-1">{stats.totalSales.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Продаж</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Wallet" size={24} className="text-yellow-500" />
            </div>
            <div className="text-2xl font-bold mb-1">{(stats.totalRevenue / 1000000).toFixed(1)}М ₽</div>
            <div className="text-sm text-muted-foreground">Оборот</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Icon name="TrendingUp" size={24} className="text-purple-500" />
            </div>
            <div className="text-2xl font-bold mb-1">{(stats.platformFee / 1000000).toFixed(1)}М ₽</div>
            <div className="text-sm text-muted-foreground">Комиссия</div>
          </Card>
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="users">
              <Icon name="Users" size={16} className="mr-2" />
              Пользователи
            </TabsTrigger>
            <TabsTrigger value="products">
              <Icon name="Package" size={16} className="mr-2" />
              Товары
            </TabsTrigger>
            <TabsTrigger value="activity">
              <Icon name="Activity" size={16} className="mr-2" />
              Активность
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold">Управление пользователями</h2>
                <div className="flex gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Фильтр" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все пользователи</SelectItem>
                      <SelectItem value="authors">Авторы</SelectItem>
                      <SelectItem value="buyers">Покупатели</SelectItem>
                      <SelectItem value="suspended">Заблокированные</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Пользователь</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Роль</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Дата регистрации</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell className="text-muted-foreground">{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'Автор' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                          {user.status === 'active' ? 'Активен' : 'Заблокирован'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{user.joined}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit" size={14} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            <Icon name="Ban" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold">Модерация товаров</h2>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Фильтр" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все товары</SelectItem>
                    <SelectItem value="pending">На модерации</SelectItem>
                    <SelectItem value="approved">Одобренные</SelectItem>
                    <SelectItem value="flagged">С жалобами</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Товар</TableHead>
                    <TableHead>Автор</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Продаж</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map(product => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.title || product.name}</TableCell>
                      <TableCell>{product.author}</TableCell>
                      <TableCell className="font-semibold">{product.price} ₽</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            product.status === 'approved' ? 'default' : 
                            product.status === 'pending' ? 'secondary' : 
                            'destructive'
                          }
                        >
                          {product.status === 'approved' ? 'Одобрен' : 
                           product.status === 'pending' ? 'На модерации' : 
                           'Жалоба'}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.sales}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-green-500">
                            <Icon name="Check" size={14} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            <Icon name="X" size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Eye" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="p-6">
              <h2 className="text-2xl font-heading font-bold mb-6">Последняя активность</h2>
              
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <Card key={activity.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'user' ? 'bg-primary/10' :
                        activity.type === 'product' ? 'bg-accent/10' :
                        'bg-destructive/10'
                      }`}>
                        <Icon 
                          name={
                            activity.type === 'user' ? 'UserPlus' :
                            activity.type === 'product' ? 'Package' :
                            'AlertTriangle'
                          } 
                          size={20} 
                          className={
                            activity.type === 'user' ? 'text-primary' :
                            activity.type === 'product' ? 'text-accent' :
                            'text-destructive'
                          }
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h4 className="font-medium">{activity.action}</h4>
                            <p className="text-sm text-muted-foreground">{activity.user}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Настройки платформы</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold mb-4">Комиссия платформы</h3>
                  <div className="flex items-center gap-4">
                    <Select defaultValue="10">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5%</SelectItem>
                        <SelectItem value="10">10%</SelectItem>
                        <SelectItem value="15">15%</SelectItem>
                        <SelectItem value="20">20%</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-muted-foreground">от каждой продажи</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-4">Категории</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Аватары</Badge>
                    <Badge variant="outline">Миры</Badge>
                    <Badge variant="outline">Шейдеры</Badge>
                    <Badge variant="outline">Одежда</Badge>
                    <Button variant="outline" size="sm">
                      <Icon name="Plus" size={14} className="mr-1" />
                      Добавить
                    </Button>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="bg-primary text-white">
                    Сохранить изменения
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileAdmin;

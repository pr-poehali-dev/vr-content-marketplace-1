import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProfileBuyer = () => {
  const user = {
    name: 'VRUser2023',
    email: 'user@example.com',
    avatar: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg',
    memberSince: '15 января 2023',
    totalPurchases: 24,
    totalSpent: 54890
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
              <h1 className="text-3xl font-heading font-bold mb-2">{user.name}</h1>
              <p className="text-muted-foreground mb-4">Покупатель</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span>Участник с {user.memberSince}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="ShoppingBag" size={16} className="text-muted-foreground" />
                  <span>{user.totalPurchases} покупок</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать
              </Button>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="library">
              <Icon name="Library" size={16} className="mr-2" />
              Библиотека
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Icon name="Bell" size={16} className="mr-2" />
              Уведомления
            </TabsTrigger>
          </TabsList>

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
                      <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
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

          <TabsContent value="notifications">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Уведомления</h2>
              
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Download" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium">Новое обновление доступно</h4>
                        <span className="text-xs text-muted-foreground">2 часа назад</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Cyber Neko Avatar получил обновление v2.1 с новыми фичами
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="ShoppingBag" size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium">Покупка подтверждена</h4>
                        <span className="text-xs text-muted-foreground">1 день назад</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ваша покупка Fantasy Sky Palace успешно обработана
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Tag" size={20} className="text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium">Специальное предложение</h4>
                        <span className="text-xs text-muted-foreground">3 дня назад</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Скидка 30% на все аватары до конца месяца!
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileBuyer;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Защищённые платежи и проверенные продавцы для вашего спокойствия'
    },
    {
      icon: 'Zap',
      title: 'Мгновенный доступ',
      description: 'Получайте файлы сразу после покупки без ожидания'
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Тысячи авторов и покупателей VRChat контента'
    },
    {
      icon: 'Star',
      title: 'Качество',
      description: 'Модерация товаров и система рейтингов для лучшего выбора'
    }
  ];

  const stats = [
    { value: '12,000+', label: 'Пользователей' },
    { value: '3,800+', label: 'Товаров' },
    { value: '28,000+', label: 'Продаж' },
    { value: '4.9', label: 'Средний рейтинг' }
  ];

  const team = [
    {
      name: 'Alex Novikov',
      role: 'Основатель & CEO',
      avatar: '/img/603c1b7a-e5ab-49bd-90e5-126e007267a0.jpg'
    },
    {
      name: 'Maria Petrova',
      role: 'Главный дизайнер',
      avatar: '/img/c9624f8d-a187-4f0b-b788-36e2ebab4c0e.jpg'
    },
    {
      name: 'Ivan Sokolov',
      role: 'Технический директор',
      avatar: '/img/14a30804-936e-4a7c-aff9-882e7b313d24.jpg'
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
          <span className="font-medium">О нас</span>
        </div>

        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
            Маркетплейс для VRChat сообщества
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            VRContentHub — это платформа, созданная сообществом для сообщества. 
            Мы объединяем талантливых авторов и покупателей цифрового контента для VRChat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/catalog">
              <Button size="lg" className="bg-gradient-to-br from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground px-8 shadow-lg">
                <Icon name="Store" size={20} className="mr-2" />
                Начать покупки
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="px-8">
                <Icon name="Palette" size={20} className="mr-2" />
                Стать автором
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Почему VRContentHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы создаём безопасное и удобное пространство для обмена цифровым контентом в VRChat. 
                Наша цель — помочь авторам монетизировать их творчество, а покупателям — находить 
                качественный контент для улучшения опыта в виртуальной реальности.
              </p>
              <p className="text-lg text-muted-foreground">
                С момента запуска в 2022 году мы помогли тысячам авторов заработать на своём творчестве 
                и предоставили миллионы загрузок качественного контента для VRChat.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-muted">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center bg-card/50">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-heading font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами в Discord, Telegram или по email
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" className="w-full sm:w-auto">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Discord
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Icon name="Mail" size={20} className="mr-2" />
                Email
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-heading font-bold">VRContentHub</span>
          </Link>
          <h1 className="text-3xl font-heading font-bold mb-2">Вход в аккаунт</h1>
          <p className="text-muted-foreground">Войдите, чтобы продолжить покупки</p>
        </div>

        <Card className="p-6 md:p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Пароль</Label>
                <Link to="/reset-password" className="text-sm text-primary hover:underline">
                  Забыли пароль?
                </Link>
              </div>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm cursor-pointer select-none"
              >
                Запомнить меня
              </label>
            </div>

            <Button className="w-full bg-gradient-to-br from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground h-11 shadow-lg">
              Войти
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Или продолжить с</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Chrome" size={20} />
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Нет аккаунта? </span>
            <Link to="/register" className="text-primary hover:underline font-medium">
              Зарегистрироваться
            </Link>
          </div>
        </Card>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>
            Входя в систему, вы соглашаетесь с{' '}
            <Link to="/terms" className="hover:text-foreground underline">
              условиями использования
            </Link>{' '}
            и{' '}
            <Link to="/privacy" className="hover:text-foreground underline">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
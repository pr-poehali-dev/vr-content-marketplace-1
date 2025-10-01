import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          <h1 className="text-3xl font-heading font-bold mb-2">Восстановление пароля</h1>
          <p className="text-muted-foreground">
            {sent 
              ? 'Проверьте вашу почту' 
              : 'Введите email для восстановления доступа'
            }
          </p>
        </div>

        <Card className="p-6 md:p-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button className="w-full bg-gradient-to-br from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground h-11 shadow-lg">
                Отправить инструкции
              </Button>

              <div className="text-center text-sm">
                <Link to="/login" className="text-primary hover:underline">
                  ← Вернуться к входу
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Письмо отправлено!</h3>
              <p className="text-muted-foreground mb-6">
                Мы отправили инструкции по восстановлению пароля на {email}
              </p>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSent(false)}
                >
                  Отправить повторно
                </Button>
                <Link to="/login" className="block">
                  <Button variant="ghost" className="w-full">
                    Вернуться к входу
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Не получили письмо? Проверьте папку "Спам" или{' '}
            <Link to="/login" className="text-primary hover:underline">
              свяжитесь с поддержкой
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
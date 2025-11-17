import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDemo, setActiveDemo] = useState('forms');

  const features = [
    {
      icon: 'Layout',
      title: 'Визуальный редактор',
      description: 'Drag & drop интерфейс для создания UI без кода',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Database',
      title: 'База данных',
      description: 'Встроенная БД с визуальным конструктором таблиц',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Zap',
      title: 'API & Интеграции',
      description: 'Подключайте внешние сервисы одним кликом',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Workflow',
      title: 'Автоматизация',
      description: 'Создавайте бизнес-логику с помощью workflow',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Smartphone',
      title: 'Адаптивность',
      description: 'Автоматическая адаптация под все устройства',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Встроенная аутентификация и защита данных',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const templates = [
    { name: 'CRM система', icon: 'Users', category: 'Бизнес', color: 'bg-purple-500' },
    { name: 'E-commerce', icon: 'ShoppingCart', category: 'Продажи', color: 'bg-blue-500' },
    { name: 'Маркетплейс', icon: 'Store', category: 'Платформа', color: 'bg-orange-500' },
    { name: 'Дашборд аналитики', icon: 'BarChart3', category: 'Данные', color: 'bg-green-500' },
    { name: 'Букинг система', icon: 'Calendar', category: 'Сервис', color: 'bg-pink-500' },
    { name: 'Соцсеть', icon: 'MessageCircle', category: 'Социальное', color: 'bg-indigo-500' }
  ];

  const pricing = [
    {
      name: 'Старт',
      price: 'Бесплатно',
      description: 'Для знакомства с платформой',
      features: ['1 проект', '100 записей в БД', 'Базовые компоненты', 'Поддержка сообщества'],
      highlighted: false
    },
    {
      name: 'Про',
      price: '1 990 ₽/мес',
      description: 'Для профессиональной разработки',
      features: ['10 проектов', 'Неограниченная БД', 'Все компоненты', 'Приоритетная поддержка', 'Кастомный домен', 'API доступ'],
      highlighted: true
    },
    {
      name: 'Бизнес',
      price: '4 990 ₽/мес',
      description: 'Для команд и стартапов',
      features: ['Неограниченные проекты', 'Белый лейбл', 'Командная работа', 'SLA 99.9%', 'Выделенный менеджер', 'Кастомные интеграции'],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Icon name="Boxes" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-white font-heading">AppBuilder</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a>
            <a href="#templates" className="text-gray-300 hover:text-white transition-colors">Шаблоны</a>
            <a href="#learning" className="text-gray-300 hover:text-white transition-colors">Обучение</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Тарифы</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
          </div>

          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Начать бесплатно
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            🚀 Новая эра no-code разработки
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-fade-in font-heading">
            Создавайте приложения
            <br />за минуты, не за месяцы
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Визуальный конструктор полного цикла для создания веб-приложений любой сложности.
            От простых форм до сложных CRM-систем — всё без единой строки кода.
          </p>

          <div className="flex gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8">
              <Icon name="Rocket" className="mr-2" size={20} />
              Попробовать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500/50 text-white hover:bg-purple-500/10 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>

          <div className="max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-lg">
              <CardHeader>
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex gap-2 justify-center">
                  {['forms', 'data', 'workflow'].map((demo) => (
                    <Button
                      key={demo}
                      variant={activeDemo === demo ? 'default' : 'ghost'}
                      onClick={() => setActiveDemo(demo)}
                      className={activeDemo === demo ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'text-gray-400'}
                    >
                      {demo === 'forms' && 'Формы'}
                      {demo === 'data' && 'Данные'}
                      {demo === 'workflow' && 'Логика'}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {activeDemo === 'forms' && (
                  <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                    <div className="space-y-4">
                      <Input placeholder="Имя пользователя" className="bg-slate-700/50 border-purple-500/30" />
                      <Input type="email" placeholder="Email" className="bg-slate-700/50 border-purple-500/30" />
                      <Textarea placeholder="Сообщение" className="bg-slate-700/50 border-purple-500/30" />
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Отправить</Button>
                    </div>
                    <div className="flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <Icon name="MousePointerClick" size={64} className="mx-auto mb-4 text-purple-400" />
                        <p>Создавайте формы drag & drop</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 'data' && (
                  <div className="animate-fade-in">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="border-b border-purple-500/30">
                          <tr>
                            <th className="p-3 text-purple-400">ID</th>
                            <th className="p-3 text-purple-400">Имя</th>
                            <th className="p-3 text-purple-400">Email</th>
                            <th className="p-3 text-purple-400">Статус</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                            <td className="p-3">001</td>
                            <td className="p-3">Алексей Иванов</td>
                            <td className="p-3">alexey@example.com</td>
                            <td className="p-3"><Badge className="bg-green-500/20 text-green-400">Активен</Badge></td>
                          </tr>
                          <tr className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                            <td className="p-3">002</td>
                            <td className="p-3">Мария Петрова</td>
                            <td className="p-3">maria@example.com</td>
                            <td className="p-3"><Badge className="bg-yellow-500/20 text-yellow-400">Ожидание</Badge></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeDemo === 'workflow' && (
                  <div className="flex items-center justify-center py-8 animate-fade-in">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Icon name="Mail" size={32} className="text-white" />
                      </div>
                      <Icon name="ArrowRight" size={32} className="text-purple-400" />
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon name="Filter" size={32} className="text-white" />
                      </div>
                      <Icon name="ArrowRight" size={32} className="text-purple-400" />
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Icon name="Database" size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Возможности</Badge>
            <h2 className="text-5xl font-bold text-white mb-4 font-heading">Всё, что нужно для создания приложений</h2>
            <p className="text-gray-400 text-lg">Мощные инструменты в одной платформе</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">Шаблоны</Badge>
            <h2 className="text-5xl font-bold text-white mb-4 font-heading">Стартуйте с готовых шаблонов</h2>
            <p className="text-gray-400 text-lg">Более 100 профессиональных шаблонов для быстрого старта</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-40 ${template.color} bg-gradient-to-br from-opacity-80 to-opacity-100 flex items-center justify-center`}>
                  <Icon name={template.icon} size={64} className="text-white opacity-90" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white">{template.name}</CardTitle>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                      {template.category}
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
                    Использовать
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="learning" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Обучение</Badge>
            <h2 className="text-5xl font-bold text-white mb-4 font-heading">Станьте экспертом за неделю</h2>
            <p className="text-gray-400 text-lg">Пошаговые уроки от базы до продвинутых техник</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover-scale">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={28} className="text-white" />
                </div>
                <CardTitle className="text-white">Документация</CardTitle>
                <CardDescription className="text-gray-400">
                  Полное руководство по всем функциям платформы с примерами
                </CardDescription>
                <Button variant="outline" className="mt-4 border-purple-500/50 text-purple-300">
                  Изучить
                </Button>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover-scale">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Icon name="Video" size={28} className="text-white" />
                </div>
                <CardTitle className="text-white">Видеокурсы</CardTitle>
                <CardDescription className="text-gray-400">
                  30+ часов практических видеоуроков для новичков и профи
                </CardDescription>
                <Button variant="outline" className="mt-4 border-blue-500/50 text-blue-300">
                  Смотреть
                </Button>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30 hover-scale">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Icon name="Users" size={28} className="text-white" />
                </div>
                <CardTitle className="text-white">Сообщество</CardTitle>
                <CardDescription className="text-gray-400">
                  Тысячи разработчиков готовы помочь и поделиться опытом
                </CardDescription>
                <Button variant="outline" className="mt-4 border-orange-500/50 text-orange-300">
                  Присоединиться
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">Тарифы</Badge>
            <h2 className="text-5xl font-bold text-white mb-4 font-heading">Выберите свой тариф</h2>
            <p className="text-gray-400 text-lg">Прозрачные цены без скрытых платежей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`${plan.highlighted 
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500 scale-105' 
                  : 'bg-slate-800/50 border-purple-500/30'} 
                  hover-scale transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <Badge className="mb-4 w-fit bg-gradient-to-r from-purple-500 to-pink-500">
                      Популярный
                    </Badge>
                  )}
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <Icon name="Check" size={20} className="text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-slate-700 hover:bg-slate-600'}`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">Контакты</Badge>
            <h2 className="text-5xl font-bold text-white mb-4 font-heading">Остались вопросы?</h2>
            <p className="text-gray-400 text-lg">Напишите нам, и мы поможем в течение 24 часов</p>
          </div>

          <Card className="bg-slate-800/50 border-purple-500/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="text-white mb-2 block">Имя</label>
                    <Input placeholder="Иван Иванов" className="bg-slate-700/50 border-purple-500/30 text-white" />
                  </div>
                  <div>
                    <label className="text-white mb-2 block">Email</label>
                    <Input type="email" placeholder="ivan@example.com" className="bg-slate-700/50 border-purple-500/30 text-white" />
                  </div>
                  <div>
                    <label className="text-white mb-2 block">Тема</label>
                    <Input placeholder="Вопрос по тарифам" className="bg-slate-700/50 border-purple-500/30 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-white mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите подробнее о вашем вопросе..." 
                      className="bg-slate-700/50 border-purple-500/30 text-white h-[190px]"
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>

              <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-purple-500/30">
                <div className="text-center">
                  <Icon name="Mail" size={24} className="mx-auto mb-2 text-purple-400" />
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white">hello@appbuilder.dev</div>
                </div>
                <div className="text-center">
                  <Icon name="MessageCircle" size={24} className="mx-auto mb-2 text-blue-400" />
                  <div className="text-gray-400 text-sm">Telegram</div>
                  <div className="text-white">@appbuilder_support</div>
                </div>
                <div className="text-center">
                  <Icon name="Phone" size={24} className="mx-auto mb-2 text-green-400" />
                  <div className="text-gray-400 text-sm">Телефон</div>
                  <div className="text-white">+7 (495) 123-45-67</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Boxes" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white font-heading">AppBuilder</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 AppBuilder. Все права защищены.
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

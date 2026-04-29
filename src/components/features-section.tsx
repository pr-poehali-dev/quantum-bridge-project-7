import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Техническая поддержка АСУ ТП",
    description: "Комплексное сопровождение систем управления технологическими процессами: от полевых датчиков и ПЛК до SCADA и систем противоаварийной защиты (ПАЗ).",
    icon: "zap",
    badge: "Поддержка",
  },
  {
    title: "Диспетчеризация и автоматизация",
    description: "Интеграция всех приводов и систем автоматизации любой степени сложности. Работаем с Modbus, Profibus, HART, Ethernet/IP и оборудованием любых производителей.",
    icon: "globe",
    badge: "Интеграция",
  },
  {
    title: "Сборка шкафов автоматики",
    description: "Проектирование и производство шкафов управления под конкретные задачи предприятия. Собственная производственная база и склад запчастей.",
    icon: "lock",
    badge: "Производство",
  },
  {
    title: "Автоматизация производства",
    description: "Внедрение роботизированных комплексов и систем управления, которые повышают OEE оборудования и снижают операционные затраты (OPEX).",
    icon: "brain",
    badge: "Автоматизация",
  },
  {
    title: "Модернизация оборудования",
    description: "Обновление устаревших систем управления без остановки производства. Продлеваем жизненный цикл активов и снижаем совокупную стоимость владения (TCO).",
    icon: "target",
    badge: "Модернизация",
  },
  {
    title: "Предиктивная аналитика",
    description: "Прогнозирование отказов на основе исторических данных и машинного обучения. Цифровые двойники технологических процессов для безрискового тестирования сценариев.",
    icon: "link",
    badge: "ИИ-аналитика",
  },
]

const stats = [
  { value: "9", label: "лет на рынке" },
  { value: "8", label: "отраслей промышленности" },
  { value: "24/7", label: "мониторинг и поддержка" },
  { value: "SLA", label: "гарантированное время реакции" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный цикл работ по автоматизации и сопровождению АСУ ТП — от аудита до долгосрочного контракта
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-red-500/20 bg-card">
              <div className="text-4xl font-bold text-red-500 font-orbitron mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

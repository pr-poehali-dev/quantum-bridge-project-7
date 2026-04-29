import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Умное управление линией",
    description: "ИИ-алгоритмы анализируют производственный процесс в реальном времени и автоматически оптимизируют параметры оборудования.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Промышленная надёжность",
    description: "Системы сертифицированы по стандартам ISO 9001 и работают 24/7 без остановок в условиях производственных нагрузок.",
    icon: "lock",
    badge: "ISO 9001",
  },
  {
    title: "Точность до 99,9%",
    description: "Машинное зрение и сенсорные системы обеспечивают контроль качества продукции с точностью, недостижимой для человека.",
    icon: "globe",
    badge: "Качество",
  },
  {
    title: "Предиктивное обслуживание",
    description: "ML-модели предсказывают поломки оборудования за несколько дней и предотвращают дорогостоящие простои производства.",
    icon: "zap",
    badge: "Аналитика",
  },
  {
    title: "Интеграция с ERP/MES",
    description: "Бесшовное подключение к существующим системам управления предприятием: SAP, 1С, Oracle и любым MES-платформам.",
    icon: "link",
    badge: "Интеграция",
  },
  {
    title: "Визуализация в реальном времени",
    description: "Цифровые дашборды и 3D-модели производственной линии — полная картина происходящего на заводе в одном экране.",
    icon: "target",
    badge: "Мониторинг",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности нового поколения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Технологии, которые превращают устаревший завод в интеллектуальное производство
          </p>
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

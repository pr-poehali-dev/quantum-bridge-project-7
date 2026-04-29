import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const industries = [
  { icon: "🏭", name: "Пищевая промышленность", desc: "Управление линиями розлива, контроль температуры и рецептур" },
  { icon: "⛽", name: "Нефтегазовый комплекс", desc: "АСУ ТП объектов добычи, транспортировки и переработки" },
  { icon: "⚡", name: "Энергетика", desc: "Автоматизация котельных, ТЭЦ и электросетевых узлов" },
  { icon: "🧪", name: "Химическая промышленность", desc: "Сложные и опасные процессы с максимальной надёжностью" },
  { icon: "💊", name: "Фармацевтика", desc: "Чистые помещения и валидация процессов по нормам GMP" },
  { icon: "🔩", name: "Металлургия", desc: "Прокатные станы, мощные электроприводы и тепловые режимы" },
  { icon: "💧", name: "Водоочистка", desc: "Насосные станции, дозирование реагентов, непрерывные процессы" },
  { icon: "📦", name: "Логистика и склады", desc: "Конвейеры, сортировка, роботизированные складские комплексы" },
]

const certifications = [
  { name: "Siemens", desc: "Сертифицированные специалисты" },
  { name: "Schneider Electric", desc: "Авторизованный партнёр" },
  { name: "Phoenix Contact", desc: "Сертифицированные специалисты" },
  { name: "IEC 61511", desc: "Функциональная безопасность ПАЗ" },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отрасли и компетенции</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            9 лет опыта в автоматизации промышленных предприятий — от пищёвки до нефтегаза
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((item, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.07}s` }}>
              <CardContent className="p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-semibold text-card-foreground mb-1 text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-2 font-sans">Сертификаты и партнёрства</h3>
          <p className="text-muted-foreground">Наши инженеры сертифицированы ведущими мировыми производителями</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center p-4 rounded-lg border border-red-500/20 bg-background">
              <p className="font-bold text-red-500 font-orbitron text-sm mb-1">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

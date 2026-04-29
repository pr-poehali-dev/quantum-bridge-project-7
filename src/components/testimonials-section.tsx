import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Сергей Воронов",
    role: "Директор по производству, Уральский металлургический завод",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "После автоматизации трёх линий производительность выросла на 280%, а брак снизился с 4,2% до 0,3%. Окупаемость — 14 месяцев.",
  },
  {
    name: "Ирина Захарова",
    role: "Технический директор, Пищевая компания «Северный продукт»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Интеграция прошла без остановки производства. Уже через месяц после запуска сократили штат ОТК на 60% при росте качества.",
  },
  {
    name: "Алексей Ким",
    role: "Генеральный директор, AutoParts Manufacturing",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Предиктивное обслуживание спасло нас от двух крупных поломок. Только за первый год сэкономили 12 млн рублей на ремонтах.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют заводы России</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные результаты наших клиентов — в цифрах и фактах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

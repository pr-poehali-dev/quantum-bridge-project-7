import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как долго длится внедрение автоматизации?",
      answer:
        "Сроки зависят от масштаба: автоматизация одной линии занимает 2–4 месяца, комплексный проект для всего цеха — 6–12 месяцев. Мы всегда стараемся минимизировать влияние на текущее производство.",
    },
    {
      question: "Придётся ли останавливать производство на время монтажа?",
      answer:
        "Как правило, нет. Мы планируем работы так, чтобы монтаж и пусконаладка проходили в нерабочее время или в отдельных секциях цеха. Полная остановка производства крайне редка и заранее согласовывается.",
    },
    {
      question: "Какова окупаемость инвестиций в автоматизацию?",
      answer:
        "По опыту наших клиентов, срок окупаемости составляет от 12 до 24 месяцев. Основные источники экономии: снижение брака, уменьшение трудозатрат, сокращение простоев оборудования и экономия на обслуживании.",
    },
    {
      question: "Совместимо ли ваше решение с нашим существующим оборудованием?",
      answer:
        "Да, наши системы интегрируются с оборудованием большинства производителей — Siemens, ABB, Fanuc, KUKA и отечественными станками. Перед проектом мы проводим бесплатный аудит совместимости.",
    },
    {
      question: "Что происходит при поломке системы?",
      answer:
        "Круглосуточный мониторинг позволяет нам выявить проблему раньше, чем она станет критической. Для экстренных случаев — горячая линия и выезд инженера в течение 4 часов по Уральскому региону.",
    },
    {
      question: "Нужно ли обучать персонал?",
      answer:
        "Да, мы проводим обязательное обучение операторов и технических специалистов. Программа обучения входит в стоимость проекта. После сдачи объекта сотрудники уверенно управляют системой самостоятельно.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы об автоматизации производства и нашем подходе к работе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

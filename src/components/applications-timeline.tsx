import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Аудит и проектирование",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Наши инженеры проводят полный анализ текущих производственных процессов, выявляют узкие места и разрабатывают
            индивидуальный план автоматизации под специфику вашего завода.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Обследование производственных линий и оборудования
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Анализ потерь и расчёт ROI от автоматизации
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Разработка технического задания и архитектуры решения
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Внедрение и интеграция",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Поставляем и устанавливаем роботизированные комплексы, промышленные контроллеры и сенсорные системы.
            Интегрируем с вашими ERP/MES-системами без остановки производства.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Монтаж и пусконаладка промышленного оборудования
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Интеграция с SAP, 1С и существующими системами учёта
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Обучение персонала и операторов линии
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Поддержка и масштабирование",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            После запуска мы остаёмся на связи: мониторинг 24/7, удалённая диагностика и быстрое реагирование на
            любые сбои. Постепенно расширяем автоматизацию на новые участки производства.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мониторинг оборудования в режиме реального времени
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Предиктивное обслуживание и удалённая диагностика
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Масштабирование на новые цеха и производственные линии
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три этапа — от первого звонка до полностью автоматизированного производства,
            которое работает без вашего участия.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

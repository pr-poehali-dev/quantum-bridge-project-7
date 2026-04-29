import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Обследование и аудит",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Проводим всестороннее обследование действующих систем автоматизации: аудит аппаратных и программных компонентов,
            анализ документации, проверку средств измерений и калибровку критичных датчиков.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Оценка состояния ПЛК, HMI, РСУ и SCADA-систем
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выявление потенциальных рисков и узких мест
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Детальный отчёт и техническое задание на работы
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
            Выполняем полный цикл монтажных и пусконаладочных работ по согласованному графику.
            Интегрируем оборудование Siemens, Schneider Electric, Phoenix Contact с существующей инфраструктурой предприятия.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Монтаж и пусконаладка без остановки производства
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сборка шкафов автоматики на собственной производственной базе
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
      title: "Техническое сопровождение",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            После запуска остаёмся инжиниринговым партнёром: круглосуточный мониторинг, удалённая диагностика
            и выезд инженера в согласованные SLA-сроки. Управляем складом резервных модулей для оперативной замены.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Превентивное и предиктивное обслуживание 24/7
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Прогнозируемый бюджет на эксплуатацию по контракту
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Поверка КИПиА и ведение обязательной документации (Ростехнадзор)
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
            Три этапа — от первого обращения до стабильно работающего производства
            с прогнозируемыми затратами на обслуживание.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              ГК <span className="text-red-500">КаЭЛ</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Разработка и внедрение автоматизированных систем управления технологическими процессами.
            </p>
            <p className="font-space-mono text-gray-500 text-sm mb-6 max-w-md">
              Интеграция всех приводов и систем автоматизации любой степени сложности в рамках всего предприятия.
            </p>
            <div className="flex space-x-4">
              <a href="tel:89606335225" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Phone size={20} />
              </a>
              <a href="mailto:info@kael.pro" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Техподдержка АСУ ТП
                </a>
              </li>
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Диспетчеризация
                </a>
              </li>
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Сборка шкафов автоматики
                </a>
              </li>
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Модернизация оборудования
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:89606335225" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  8 (960) 633-52-25
                </a>
              </li>
              <li>
                <a href="https://kael.pro" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  kael.pro
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Как мы работаем
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 ГК «КаЭЛ». Все права защищены. На рынке с 2016 года.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

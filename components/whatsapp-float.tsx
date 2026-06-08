import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink('Olá Maria Lucia! Vim pelo site e gostaria de fazer um pedido.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative size-7" />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-xs sm:inline">
        Fale conosco
      </span>
    </a>
  )
}

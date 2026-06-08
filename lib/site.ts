export const WHATSAPP_NUMBER = '5511933044444'

export function whatsappLink(message: string) {
  return `https://wa.me/${5511933044444}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

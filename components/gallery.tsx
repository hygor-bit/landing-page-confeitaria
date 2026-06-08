import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const GALLERY = [
  { src: '/images/docesdecor.png', alt: 'doces decorados', span: 'lg:row-span-2' },
  { src: '/images/panetone.png', alt: 'panetones diversos', span: '' },
  { src: '/images/bolo.caseiro.png', alt: 'Bolo caseiro artesanal', span: '' },
  { src: '/images/kit.png', alt: 'Kit presente com doces artesanais', span: '' },
  { src: '/images/pedaco.png', alt: 'Pedaco de bolo', span: 'lg:row-span-2' },
  { src: '/images/peda.png', alt: 'Pedaço de bolo', span: '' },
]

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Galeria
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Um pouco da nossa arte
            </h2>
          </Reveal>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${item.span}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/15" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

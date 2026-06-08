import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const REVIEWS = [
  {
    name: 'Juliana Martins',
    initial: 'J',
    text: 'O melhor bolo que já experimentei. Sabor incrível e apresentação perfeita. Virou tradição nas festas da família!',
  },
  {
    name: 'Carla Souza',
    initial: 'C',
    text: 'Encomendei os bolos de pote para um evento e foi um sucesso absoluto. Atendimento impecável e entrega no prazo.',
  },
  {
    name: 'Roberto Lima',
    initial: 'R',
    text: 'O pão de mel da Maria Lucia é simplesmente perfeito. Massa macia, chocolate de qualidade. Recomendo de olhos fechados.',
  },
  {
    name: 'Fernanda Alves',
    initial: 'F',
    text: 'Bolo personalizado lindo e delicioso para o aniversário da minha filha. Superou todas as expectativas. Gratidão!',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Depoimentos
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              O que dizem nossos clientes
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <Reveal
              key={review.name}
              delay={(i % 2) * 120}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-pretty leading-relaxed text-foreground/90">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg font-semibold text-primary">
                  {review.initial}
                </span>
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente verificado</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

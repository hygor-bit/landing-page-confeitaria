import {
  Leaf,
  HandHeart,
  MessageSquareHeart,
  Truck,
  Sparkles,
  BadgeCheck,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FEATURES = [
  {
    icon: Leaf,
    title: 'Ingredientes Selecionados',
    text: 'Trabalhamos apenas com produtos de alta qualidade e procedência confiável.',
  },
  {
    icon: HandHeart,
    title: 'Produção Artesanal',
    text: 'Cada receita é feita à mão, com técnica, atenção e muito carinho.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Atendimento Personalizado',
    text: 'Acompanhamos cada pedido de perto para atender exatamente o seu desejo.',
  },
  {
    icon: Truck,
    title: 'Entrega Segura',
    text: 'Embalagens cuidadosas que preservam o sabor e a beleza dos produtos.',
  },
  {
    icon: Sparkles,
    title: 'Produtos Frescos',
    text: 'Tudo é preparado sob encomenda, garantindo o frescor em cada mordida.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualidade Garantida',
    text: 'O sabor e a apresentação que conquistaram centenas de clientes.',
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Por que nos escolher
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Nossos diferenciais
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal
                key={feature.title}
                delay={(i % 3) * 100}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

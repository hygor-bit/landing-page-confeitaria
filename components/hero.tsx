import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background pt-28 lg:pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Feito à mão com carinho
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Transformando momentos especiais em sabores inesquecíveis.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bolos, doces e sobremesas artesanais preparados com ingredientes
              selecionados e muito carinho.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink('Olá Maria Lucia! Gostaria de fazer um pedido.')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Fazer Pedido Agora
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Ver Cardápio
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-4 flex items-center gap-6 border-t border-border/60 pt-6">
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">+500</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Pedidos entregues
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">5.0</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Avaliação média
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/bolo.hero.png"
              alt="Bolo artesanal premium decorado com frutas vermelhas e folha de ouro"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden rounded-2xl border border-border/60 bg-card/90 p-4 shadow-lg backdrop-blur sm:block">
            <p className="font-serif text-lg font-semibold text-foreground">
              Ingredientes selecionados
            </p>
            <p className="text-xs text-muted-foreground">
              Frescor e qualidade em cada detalhe
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

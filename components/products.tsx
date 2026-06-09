import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/site'

const PRODUCTS = [
  {
    name: 'Bolos de Pote',
image: '/images/bolo-de-pote.png',
    description:
      'Camadas generosas de massa fofinha e recheios cremosos servidos no potinho. Práticos e irresistíveis.',
  },
  {
    name: 'Bolos Recheados',
    image: '/images/bolo azul.png',
    description:
      'Bolos altos e úmidos com recheios exclusivos, perfeitos para qualquer comemoração.',
  },
  {
    name: 'Bolos Personalizados',
    image: '/images/boloone.png',
    description:
      'Criações sob medida para o seu evento, com decoração delicada e sabor inesquecível.',
  },
  {
    name: 'Pão de Mel',
    image: '/images/paomel.png',
    description:
      'Receita artesanal coberta com chocolate nobre e recheio macio. Um clássico aconchegante.',
  },
  {
    name: 'Docinhos de Festa',
    image: '/images/bulls.png',
    description:
      'Brigadeiros gourmet e doces finos preparados com capricho para encantar seus convidados.',
  },
  {
    name: 'Sobremesas Especiais',
    image: '/images/sobremesa.png',
    description:
      'Taças e sobremesas individuais com camadas de mousse, cremes e frutas frescas.',
  },
]

export function Products() {
  return (
    <section id="produtos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              O que oferecemos
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Nossas delícias artesanais
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Cada produto é feito sob encomenda, com ingredientes selecionados e
              o cuidado que o seu momento especial merece.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.name}
              delay={(i % 3) * 100}
              as="article"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
               <Image
                  src={product.image}
                   alt={product.name}
                  fill
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href={whatsappLink(`Olá Maria Lucia! Gostaria de encomendar: ${product.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Encomendar
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

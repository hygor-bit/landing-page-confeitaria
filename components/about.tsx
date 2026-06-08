import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="sobre" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/voo.png"
              alt="Maria Lucia, confeiteira profissional, em sua cozinha"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Nossa história
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Quem é Maria Lucia?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Maria Lucia é uma confeiteira apaixonada pela arte de criar doces
                e bolos artesanais. Cada receita nasce do cuidado com os detalhes,
                da escolha criteriosa dos ingredientes e do desejo de transformar
                cada celebração em uma lembrança doce e marcante.
              </p>
              <p>
                Prezando sempre pela qualidade, pelo sabor e por uma apresentação
                impecável, ela acredita que confeitar é um gesto de afeto — uma
                forma de adoçar a vida das pessoas e tornar cada momento ainda mais
                especial.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-serif text-2xl italic text-primary">
              &ldquo;Cada doce conta uma história de carinho.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

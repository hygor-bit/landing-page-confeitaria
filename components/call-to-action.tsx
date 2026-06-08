import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/site'

export function CallToAction() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center shadow-xl sm:px-12 lg:py-20">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Pronta para adoçar seu momento especial?
            </h2>
            <p className="text-pretty leading-relaxed text-primary-foreground/90">
              Conte para a gente a sua ideia e receba um orçamento sem
              compromisso. Vamos criar juntos a sobremesa perfeita para a sua
              ocasião — feita com ingredientes selecionados e todo o carinho que
              você merece.
            </p>
            <a
              href={whatsappLink('Olá Maria Lucia! Gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noreferrer"
              className="group mt-2 inline-flex items-center gap-2.5 rounded-full bg-card px-8 py-4 text-base font-medium text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="size-5 text-[#25D366]" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

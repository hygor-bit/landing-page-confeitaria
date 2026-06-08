import { MapPin, Clock, Phone } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-2xl font-semibold">Maria Lucia</p>
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Confeitaria Artesanal
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            Bolos, doces e sobremesas artesanais feitos com ingredientes
            selecionados e muito carinho.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold">Contato</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-background/80">
            <li>
              <a
                href={whatsappLink('Olá Maria Lucia!')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                WhatsApp: (11) 93304-4444
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/boloseciadaluh?igsh=dTE1MDZuZ2tzM2Nl"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4 text-primary" />
                @marialucia.confeitaria
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold">Onde estamos</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-background/80">
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Rua Alfonso Rendano,34 - Laranjeira/SP
              Rua Luiz Rodrigues, 330 - Itanhaém/SP
            </li>
            <li className="inline-flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              Seg a Sáb, das 9h às 19h
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold">Faça seu pedido</h3>
          <p className="mt-4 text-sm text-background/70">
            Encomende com antecedência e garanta a sua sobremesa especial.
          </p>
          <a
            href={whatsappLink('Olá Maria Lucia! Gostaria de fazer um pedido.')}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Pedir no WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-background/60 sm:flex-row lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Maria Lucia Confeitaria Artesanal.
            Todos os direitos reservados.
          </p>
          <p>Feito com carinho para adoçar o seu dia.</p>
        </div>
      </div>
    </footer>
  )
}

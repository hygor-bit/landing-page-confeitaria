'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            Maria Lucia
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.32em] text-primary">
            Confeitaria Artesanal
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink('Olá Maria Lucia! Gostaria de fazer um pedido.')}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md md:inline-flex"
        >
          Fazer Pedido
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={whatsappLink('Olá Maria Lucia! Gostaria de fazer um pedido.')}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Fazer Pedido
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

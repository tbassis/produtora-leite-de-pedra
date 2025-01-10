import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-10 lg:px-20 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-black">Leite de Pedra</Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="#services" className="text-gray-900 hover:text-gray-600">Nossos serviços</Link>
        <Link href="#services" className="text-gray-900 hover:text-gray-600">Quem somos</Link>
      </nav>
    </header>
  )
}

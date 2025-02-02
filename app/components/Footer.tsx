import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-xl font-bold text-white">Leite de Pedra</Link>
          <p className="text-sm text-gray-300 mt-2">Produção Cultural</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
          <Link href="#services" className="text-gray-300 hover:text-gray-700">Nossos serviços</Link>
          <Link href="#about" className="text-gray-300 hover:text-gray-700">Quem somos</Link>
        </nav>
      </div>
      <div className="mt-8 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Leite de Pedra. Todos os direitos reservados ©.
      </div>
    </footer>
  )
}


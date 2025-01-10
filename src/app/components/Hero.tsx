
import Image from 'next/image'
import logo from '../brand-on-primary.png'

export default function Hero() {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-start bg-black">
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={logo}
          alt="Logo da Produtora Leite de Pedra"
          width={400}
          height={400}
        />
      </div>
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Materializando ideias
        </h1>
        <p className="text-xl text-white mb-8">
          Da concepção à prestação de contas, transformamos ideias em projetos e te auxiliamos a executa-los
        </p>
      </div>
    </section>
  )
}

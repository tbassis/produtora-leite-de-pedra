
import Image from 'next/image'
import logo from '../logo-on-primary.png'

export default function Hero() {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center bg-black">
      <div className="md:w-1/2">
        <Image
          src={logo}
          alt="Logo da Produtora Leite de Pedra"
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}

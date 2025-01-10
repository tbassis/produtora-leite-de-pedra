import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/Card'

const danielsPhoto: string = "https://placecats.com/neo_2/100/150"
const raizasPhoto: string = "https://placecats.com/100/150"

export default function About() {
    return (
        <section id="about" className="py-20 px-6 md:px-10 lg:px-20 bg-black">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Quem somos</h2>
            <p className="text-center text-xl text-white mb-8">
                A Produtora Leite de Pedra surgiu da amizade de Daniel Gomes e Raíza Rameh que se iniciou pelo amor ao teatro e se consolidou pelos afetos proporcionados pela expressão artística.
            </p>
            <article className="flex flex-col md:flex-row gap-4 justify-center md:justify-around">
                <Card className="md:w-1/4">
                    <CardHeader>
                        <CardTitle className='text-2xl md:text-3xl text-white'>Daniel Gomes</CardTitle>
                    </CardHeader>
                    <CardContent className='flex items-center justify-between gap-2'>
                        <CardDescription className='text-xl text-gray-300'>Sobre Daniel que é um cara do teatro formado em história e outras coisas.</CardDescription>
                        <Image
                            src={danielsPhoto}
                            alt="Logo da Produtora Leite de Pedra"
                            width={100}
                            height={150}
                        />
                    </CardContent>
                </Card>
                <Card className="md:w-1/4">
                    <CardHeader>
                        <CardTitle className='text-2xl md:text-3xl text-white'>Daniel Raíza Rameh</CardTitle>
                    </CardHeader>
                    <CardContent className='flex items-center justify-between gap-2'>
                        <CardDescription className='text-xl text-gray-300'>Sobre Raíza que é uma mulher muito inteligente e uma grande gostosa.</CardDescription>
                        <Image
                            className='rounded-md'
                            src={raizasPhoto}
                            alt="Logo da Produtora Leite de Pedra"
                            width={100}
                            height={150}
                        />
                    </CardContent>
                </Card>
            </article>
        </section>
    )
}
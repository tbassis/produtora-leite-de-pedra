import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/Card'
import { ListChecks, Blocks, Antenna, ChartNoAxesCombined } from 'lucide-react'

const features = [
  {
    title: 'Consultoria',
    description: 'Analisamos o seu projeto e orientamos os ajustes necessários para alcançar os objetivos.',
    icon: ListChecks,
  },
  {
    title: 'Elaboração de projetos',
    description: 'A partir da sua ideia formulamos um a documentação que torne o projeto executável.',
    icon: Blocks,
  },
  {
    title: 'Assessoria de comunicação',
    description: 'Entendemos quem é seu público e desenvolvemos uma estratégia adequada para conversar com ele.',
    icon: Antenna,
  },
  {
    title: 'Relatórios de prestação de contas',
    description: 'Elaboramos relatórios que discriminam todos os passos executados ao longo do projeto.',
    icon: ChartNoAxesCombined,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-10 lg:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 text-black mb-4" />
              <CardTitle className='text-gray-800'>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-gray-700'>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


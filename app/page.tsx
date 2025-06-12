import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Shield, CheckCircle, MapPin, Phone, Clock, Instagram, Facebook, Stethoscope, DollarSign, Microscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/atendja.png"
                alt="Atend Já Logo"
                width={120}
                height={40}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>(75) 3026-8494</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>Seg-Sáb: 7h às 19h</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="text-white py-10 md:py-14 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8dbf44 100%)`,
        }}
      >
          <div className="container flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Atend Já Feira de Santana – Cuidado Ginecológico Completo
              </h1>
              <p className="text-xl text-white">
                Preventivos, DIU, Implanon e ultrassons com tecnologia de ponta. Sem plano de saúde, com preço
                acessível.
              </p>
              <Button asChild size="lg" className="bg-[#008B47] hover:bg-[#2EA55C] text-lg font-bold">
                <Link href="https://wa.me/7530268494" target="_blank">
                  AGENDAR CONSULTA
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-end">
              <Image
                src="/8.png?height=400&width=400"
                alt="Médica ginecologista"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Serviços Ginecológicos */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Sua <span className="text-[#008B47]">saúde íntima</span> em boas mãos</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Na Atend Já, oferecemos atendimento ginecológico humanizado, com exames preventivos, inserção de DIU e
                Implanon, além de ultrassons modernos – tudo em um só lugar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-[#008B47]" />
                  </div>
                  <CardTitle>Preventivo (Papanicolau)</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Detecção precoce de alterações no colo do útero.</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-[#008B47]" />
                  </div>
                  <CardTitle>Inserção de DIU e Implanon</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Métodos contraceptivos seguros e eficazes.</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mb-2">
                    <Microscope className="h-6 w-6 text-[#008B47]" />
                  </div>
                  <CardTitle>Ultrassom Transvaginal e Pélvico</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Equipamentos de última geração para diagnósticos precisos.</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mb-2">
                    <Heart className="h-6 w-6 text-[#008B47]" />
                  </div>
                  <CardTitle>Acompanhamento da Saúde da Mulher</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Consultas para todas as fases da vida, da adolescência à menopausa.</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <p className="text-lg font-medium text-gray-900">
                Estrutura completa: realizamos consultas e exames no mesmo dia, sem filas.
              </p>
              <Button asChild className="bg-[#008B47] hover:bg-[#2EA55C] font-bold mt-3">
                <Link href="https://wa.me/7530268494" target="_blank">
                 AGENDAR CONSULTA
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-16 bg-gray-50">
          <div className="container space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Nossos diferenciais em ginecologia</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center space-y-4">
                <div className="w-16 h-16 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mx-auto">
                  <Stethoscope className="h-8 w-8 text-[#008B47]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tecnologia Moderna</h3>
                <p className="text-gray-700">Ultrassons de alta resolução e laudos rápidos.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center space-y-4">
                <div className="w-16 h-16 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Atendimento Humanizado</h3>
                <p className="text-gray-700">Médicas especializadas com escuta acolhedora.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center space-y-4">
                <div className="w-16 h-16 bg-[#8DBF44]/10 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-[#008B47]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Preço Acessível</h3>
                <p className="text-gray-700">Consultas com preços acessíveis.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-bold text-brand-primary">1</span>
                  </div>
                  <span className="font-medium">Agendamento rápido</span>
                </div>
                <ChevronRight className="hidden md:block h-6 w-6 text-gray-400" />
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-bold text-brand-primary">2</span>
                  </div>
                  <span className="font-medium">Atendimento sem filas</span>
                </div>
                <ChevronRight className="hidden md:block h-6 w-6 text-gray-400" />
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-bold text-brand-primary">3</span>
                  </div>
                  <span className="font-medium">Resultados ágeis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a Clínica 
        <section id="sobre" className="py-16 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Clínica Atend Já"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Conheça a Atend Já Feira de Santana</h2>
                <p className="text-lg text-gray-700">
                  Franquia nacional com mais de 100 unidades, trazendo para Feira de Santana saúde de qualidade sem
                  burocracia. Consultórios climatizados, equipe especializada e tudo no mesmo lugar: consultas, exames e
                  procedimentos.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  Aqui, você paga apenas pelo que usar – sem mensalidades ou planos complicados.
                </p>
                <Button asChild className="bg-[#008B47] hover:bg-[#2EA55C] font-bold">
                  <Link href="https://wa.me/7530268494" target="_blank">
                    AGENDAR CONSULTA
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Depoimentos */}
        <section id="depoimentos" className="py-16 bg-green-50">
          <div className="container space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">O que dizem nossas pacientes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">"Fiz meu preventivo e ultrassom no mesmo dia. Atendimento impecável!"</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-medium text-brand-primary">M</span>
                    </div>
                    <span className="font-medium">Maria S.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "A médica foi tão atenciosa que até esqueci meu nervosismo. Recomendo!"
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-medium text-brand-primary">A</span>
                    </div>
                    <span className="font-medium">Ana P.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">"Consegui colocar DIU sem fila e com preço justo. Melhor clínica!"</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-medium text-brand-primary">J</span>
                    </div>
                    <span className="font-medium">Juliana R.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-white">
          <div className="container space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Tire suas dúvidas</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como funciona o atendimento?</AccordionTrigger>
                  <AccordionContent>
                    Presencial com agendamento via WhatsApp. Atendimento ágil e sem filas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Trabalha com convênios?</AccordionTrigger>
                  <AccordionContent>
                    Não. Atendemos exclusivamente como clínica particular, com recibo para reembolso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Como agendo minha consulta?</AccordionTrigger>
                  <AccordionContent>
                    Entre em contato pelo WhatsApp (75) 3026‑8494 ou via redes sociais.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Qual o valor das consultas?</AccordionTrigger>
                  <AccordionContent>
                    Consultas a partir de R$ 150 e procedimentos desde R$ 80.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-[#008B47] hover:bg-[#2EA55C] font-bold">
                <Link href="https://wa.me/7530268494" target="_blank">
                 AGENDAR CONSULTA
                </Link>
              </Button>
            </div>
          </div>
        </section>

       
      </main>

     {/* Footer */}
     <footer style={{ backgroundColor: "#3b3f3d" }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/atendjabranco.png"
                  alt="Atend Já Logo"
                  width={120}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-white/70 mb-4">
              Cuidado ginecológico completo e acessível em Feira de Santana.
              </p>
            
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>(75) 3026-8494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Rua Cícero Dantas, 221, Ponto Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Segunda a Sábado: 7h às 19h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <Image
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Atend Já Feira de Santana - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

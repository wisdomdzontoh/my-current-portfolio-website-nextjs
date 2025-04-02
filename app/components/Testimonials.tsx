"use client"

import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

type Testimonial = {
  name: string
  title: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jocelyn Laryea",
    title: "Software Engineer",
    quote: "Incredibly dedicated and skilled in health information management and software development.",
  },
  {
    name: "Sally Obeng",
    title: "Network Engineer",
    quote: "Always delivers work of high quality, with great attention to detail and teamwork.",
  },
  {
    name: "Bright Obeng",
    title: "Data Protection Engineer",
    quote: "Great guy with great attention to detail and excellent performance",
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="testimonials" className="section-container bg-background">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>

        <div ref={ref} className={cn("animate-on-scroll", isVisible && "visible")}>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50 shadow-lg overflow-hidden">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-6 right-6 text-primary/20" size={48} />

                  <p className="text-lg mb-6 relative z-10">"{testimonial.quote}"</p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


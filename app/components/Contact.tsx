"use client"

import type React from "react"

import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-container bg-background/50">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div ref={ref} className={cn("animate-on-scroll", isVisible && "visible")}>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border/50 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:wisdomdzontoh@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      wisdomdzontoh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+233558749735" className="text-muted-foreground hover:text-primary transition-colors">
                      +233 558 749 735
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Accra, Ghana</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/wisdomdzontoh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/wisdom-dzontoh-563430195"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:wisdomdzontoh@gmail.com"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>

              <CardContent>
                {isSubmitted ? (
                  <div className="bg-primary/10 text-primary p-4 rounded-lg flex items-center">
                    <Send className="mr-2" size={20} />
                    <p>Thank you for your message! I'll respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


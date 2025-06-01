"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      logo: "/placeholder.svg?height=60&width=60",
      description: "Associate level certification for developing applications on AWS",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      logo: "/placeholder.svg?height=60&width=60",
      description: "Professional certification for React development",
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      logo: "/placeholder.svg?height=60&width=60",
      description: "Cloud architecture and development certification",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.issuer} logo`}
                    className="w-16 h-16 mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 mb-3">
                  {cert.year}
                </Badge>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

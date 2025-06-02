"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast"; // ✅ Corrected import

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      toast({
        title: "✅ Message sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description:
          (err as Error)?.message ||
          "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100/70 dark:bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                I'm always open to discussing new opportunities or projects.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <span className="p-3 bg-purple-500/20 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-500" />
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-200">
                    Email
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    anjayainduwara@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <span className="p-3 bg-sky-500/20 rounded-lg">
                  <Phone className="h-6 w-6 text-sky-500" />
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-200">
                    Phone
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    +94 711 687 980
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <span className="p-3 bg-rose-500/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-rose-500" />
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-200">
                    Location
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* contact form */}
          <Card className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-transparent hover:border-purple-500/30 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

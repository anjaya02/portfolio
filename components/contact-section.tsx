"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

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
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Oops – something went wrong. Please try again.");
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
          {/* info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                I'm always open to discussing new opportunities, interesting
                projects, or just chatting about tech.
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
                    +94 711687980
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

          {/* form */}
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
                    className="bg-white/90 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/90 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/90 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white/90 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
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

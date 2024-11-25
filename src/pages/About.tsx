import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, Theater, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            About Us ✨
          </h1>
          <p className="text-xl text-gray-600">
            Empowering writers with AI-powered dialogue generation
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AI Dialogue Generator, where cutting-edge artificial intelligence meets creative
              writing to help you create compelling, natural dialogue for any context. Our platform
              combines advanced language models with storytelling expertise to generate authentic
              conversations that bring your characters to life. ✨
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Theater className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🎯</h2>
              <p className="text-gray-600">
                Making professional dialogue writing accessible to everyone, from aspiring writers
                to seasoned professionals.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values ❤️</h2>
              <p className="text-gray-600">
                We believe in empowering creativity with AI technology while maintaining
                the authenticity and uniqueness of human storytelling.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <MessageSquare className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works ⚡</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform uses advanced natural language processing to understand your
              characters, context, and desired tone. We combine writing best practices with AI
              capabilities to create dialogue that's engaging, natural, and perfectly suited to
              your creative needs.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're committed to providing a reliable, user-friendly tool that helps writers
              create authentic dialogue. We continuously improve our AI models and user
              experience based on feedback from our community of writers and creators.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
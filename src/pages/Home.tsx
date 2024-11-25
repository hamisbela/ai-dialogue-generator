import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Coffee, Check, Sparkles, MessageSquare, Theater, Pen } from 'lucide-react';
import { genAI } from '@/lib/gemini';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SupportBox = () => (
  <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 mb-8">
    <div className="text-center space-y-4">
      <Coffee className="h-12 w-12 mx-auto text-blue-500" />
      <h2 className="text-2xl font-bold">Support Our Work ❤️</h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Help us maintain and improve our AI tools by supporting our API & hosting costs. 
        Your contribution helps keep this tool free for everyone! 🙏
      </p>
      <a
        href="https://roihacks.gumroad.com/coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button 
          size="lg" 
          className="text-lg px-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
        >
          <Coffee className="mr-2 h-5 w-5" />
          Buy Us a Coffee ☕
        </Button>
      </a>
    </div>
  </Card>
);

export default function Home() {
  const [context, setContext] = useState('');
  const [dialogue, setDialogue] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateDialogue = async () => {
    if (!context.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (!genAI) {
        throw new Error("API key not configured. Please add your Gemini API key to continue.");
      }
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Create engaging dialogue based on this context: ${context}. 
      The dialogue should be natural, character-driven, and appropriate for the given context.
      Consider the tone, setting, and character relationships to create authentic conversations.
      Include character emotions and actions where relevant.`;
      
      const result = await model.generateContent(prompt);
      setDialogue(result.response.text().trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the dialogue');
      setDialogue('');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(dialogue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 py-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text leading-tight">
            AI Dialogue Generator ✨
          </h1>
          <p className="text-xl text-gray-600">
            Create natural, engaging dialogue for your stories, scripts, and creative projects! 🎭
          </p>
        </div>
        
        <div className="gradient-border mb-8">
          <div className="p-8">
            <div className="space-y-6">
              <Textarea
                placeholder="✍️ Describe your scene, characters, and context for the dialogue..."
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="min-h-[200px] text-lg border-2 focus:border-blue-400"
              />
              
              <Button 
                onClick={generateDialogue}
                disabled={loading || !context.trim()}
                className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Creating Your Dialogue...
                  </>
                ) : (
                  <>
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Generate Dialogue ✨
                  </>
                )}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {dialogue && (
          <div className="space-y-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Your Dialogue</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 hover:bg-blue-50"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-blue max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {dialogue}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          </div>
        )}

        <SupportBox />

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
              AI Dialogue Generator: Create Natural, Engaging Conversations in Seconds ⚡
            </h2>
            
            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Welcome to the ultimate AI Dialogue Generator! Whether you're writing a screenplay,
                novel, or any creative piece, our advanced AI technology helps you create authentic,
                engaging dialogue that brings your characters to life.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Theater className="h-6 w-6 text-blue-500" />
                  Why Choose Our AI Dialogue Generator? 🎭
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">🎯</span>
                    <span>Context-aware dialogue generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤖</span>
                    <span>Advanced AI understanding of character dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💬</span>
                    <span>Natural-sounding conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎨</span>
                    <span>Customizable to your story's needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Free to use with professional results</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Pen className="h-6 w-6 text-blue-500" />
                  Perfect for All Writing Needs 📝
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Screenplays and Scripts</li>
                  <li>• Novels and Short Stories</li>
                  <li>• Video Game Narratives</li>
                  <li>• Theater Productions</li>
                  <li>• Comedy Sketches</li>
                  <li>• Character Development</li>
                  <li>• Educational Content</li>
                  <li>• Role-Playing Games</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Features of Our Dialogue Generator 🌟
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Character personality matching</li>
                  <li>• Emotional depth and subtext</li>
                  <li>• Natural conversation flow</li>
                  <li>• Context-appropriate language</li>
                  <li>• Multiple dialogue styles</li>
                  <li>• Scene-setting elements</li>
                  <li>• Character action integration</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Tips for Better Dialogue 💡
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Provide clear character backgrounds</li>
                  <li>Set the scene and context</li>
                  <li>Define the emotional tone</li>
                  <li>Include key plot points</li>
                  <li>Specify the dialogue style needed</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Why Great Dialogue Matters 🎯
                </h2>
                <p className="text-gray-600">
                  Well-crafted dialogue is essential for:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Character development</li>
                  <li>• Story progression</li>
                  <li>• Emotional engagement</li>
                  <li>• World-building</li>
                  <li>• Reader/viewer immersion</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <SupportBox />
      </div>
    </div>
  );
}
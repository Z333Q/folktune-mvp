import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Music, BookOpen, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Discover the World of Folk Music
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Learn traditional songs, understand their cultural significance, and connect with a global community of folk music enthusiasts.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/learn">Start Learning</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/explore">Explore Songs</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Music className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
          <p className="text-muted-foreground">
            Learn at your own pace with our interactive lessons and real-time feedback.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <BookOpen className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Cultural Context</h3>
          <p className="text-muted-foreground">
            Understand the history and significance behind each folk song.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Users className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-muted-foreground">
            Connect with fellow learners and share your musical journey.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Award className="w-12 h-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-muted-foreground">
            Earn achievements and monitor your learning progress.
          </p>
        </Card>
      </section>

      {/* Featured Songs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Songs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Greensleeves",
              origin: "England",
              difficulty: "Intermediate",
              image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Scarborough Fair",
              origin: "England",
              difficulty: "Beginner",
              image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Danny Boy",
              origin: "Ireland",
              difficulty: "Advanced",
              image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&q=80&w=800",
            },
          ].map((song, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={song.image}
                  alt={song.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{song.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Origin: {song.origin}</p>
                <p className="text-sm text-muted-foreground">Difficulty: {song.difficulty}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of learners discovering the rich heritage of folk music.
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">Get Started Free</Link>
        </Button>
      </section>
    </div>
  );
}
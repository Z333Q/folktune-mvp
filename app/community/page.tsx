import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Music, Calendar } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Folk Music Community</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with fellow folk music enthusiasts, share your journey, and learn together.
        </p>
        <Button size="lg">Join the Community</Button>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="p-6">
          <Users className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Study Groups</h3>
          <p className="text-muted-foreground mb-4">
            Join or create study groups focused on specific folk music traditions.
          </p>
          <Button variant="outline" className="w-full">Browse Groups</Button>
        </Card>

        <Card className="p-6">
          <MessageSquare className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Discussions</h3>
          <p className="text-muted-foreground mb-4">
            Engage in discussions about techniques, history, and culture.
          </p>
          <Button variant="outline" className="w-full">Join Discussions</Button>
        </Card>

        <Card className="p-6">
          <Music className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Collaborations</h3>
          <p className="text-muted-foreground mb-4">
            Find partners for musical collaborations and projects.
          </p>
          <Button variant="outline" className="w-full">Find Partners</Button>
        </Card>

        <Card className="p-6">
          <Calendar className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Events</h3>
          <p className="text-muted-foreground mb-4">
            Discover virtual and local folk music events.
          </p>
          <Button variant="outline" className="w-full">View Events</Button>
        </Card>
      </section>

      {/* Featured Communities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Communities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Celtic Music Circle",
              members: 1234,
              description: "Explore Irish and Scottish folk traditions",
              image: "https://images.unsplash.com/photo-1516307073-0e80aae6c0c2?auto=format&fit=crop&q=80&w=800"
            },
            {
              name: "Balkan Folk Ensemble",
              members: 856,
              description: "Traditional music from the Balkans",
              image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
            },
            {
              name: "World Music Exchange",
              members: 2341,
              description: "Share and learn folk music globally",
              image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&q=80&w=800"
            }
          ].map((community, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={community.image}
                  alt={community.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {community.members.toLocaleString()} members
                </p>
                <p className="text-muted-foreground mb-4">{community.description}</p>
                <Button className="w-full">Join Community</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
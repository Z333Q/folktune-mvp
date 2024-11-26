import { Subcategory } from '@/lib/data/categories';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Music, Users } from 'lucide-react';

interface LearningResourcesProps {
  subcategory: Subcategory;
}

export function LearningResources({ subcategory }: LearningResourcesProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Learning Resources</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <BookOpen className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Written Guides</h3>
          <p className="text-muted-foreground mb-4">
            Comprehensive guides and sheet music for each song.
          </p>
          <Button variant="outline" className="w-full">View Guides</Button>
        </Card>

        <Card className="p-6">
          <Video className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Video Lessons</h3>
          <p className="text-muted-foreground mb-4">
            Step-by-step video tutorials and performances.
          </p>
          <Button variant="outline" className="w-full">Watch Videos</Button>
        </Card>

        <Card className="p-6">
          <Music className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Practice Tools</h3>
          <p className="text-muted-foreground mb-4">
            Interactive tools for practicing and recording.
          </p>
          <Button variant="outline" className="w-full">Start Practice</Button>
        </Card>

        <Card className="p-6">
          <Users className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Community</h3>
          <p className="text-muted-foreground mb-4">
            Connect with others learning {subcategory.name}.
          </p>
          <Button variant="outline" className="w-full">Join Community</Button>
        </Card>
      </div>
    </section>
  );
}
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';

interface FeaturedSongProps {
  title: string;
  origin: string;
  category: string;
  image: string;
  description: string;
}

export function FeaturedSong({
  title,
  origin,
  category,
  image,
  description,
}: FeaturedSongProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-video md:aspect-auto">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-muted-foreground">
                {origin} • {category}
              </p>
            </div>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex space-x-4">
              <Button>
                <Play className="mr-2 h-4 w-4" /> Play Now
              </Button>
              <Button variant="outline">
                <Info className="mr-2 h-4 w-4" /> Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
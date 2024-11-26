import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface RegionCardProps {
  title: string;
  description: string;
  image: string;
  songCount: number;
}

export function RegionCard({
  title,
  description,
  image,
  songCount,
}: RegionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{songCount} songs</span>
          <Button variant="ghost" size="sm">
            Explore <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
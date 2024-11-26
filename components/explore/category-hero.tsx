import { Category } from '@/lib/data/categories';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface CategoryHeroProps {
  category: Category;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{category.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {category.description}
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              <Play className="mr-2 h-4 w-4" /> Start Learning
            </Button>
            <Button size="lg" variant="outline">
              Explore Traditions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Music,
  Globe,
  Heart,
  Mic2,
  BookOpen,
  Users,
  Star,
  Sun,
} from 'lucide-react';

const categories = [
  {
    title: 'Traditional Ballads',
    description: 'Ancient storytelling through song',
    icon: BookOpen,
    count: 120,
  },
  {
    title: 'Love Songs',
    description: 'Timeless romantic melodies',
    icon: Heart,
    count: 85,
  },
  {
    title: 'Work Songs',
    description: 'Songs of labor and daily life',
    icon: Users,
    count: 65,
  },
  {
    title: 'Spiritual Songs',
    description: 'Sacred and religious music',
    icon: Sun,
    count: 95,
  },
  {
    title: 'Dance Music',
    description: 'Traditional dance accompaniments',
    icon: Music,
    count: 110,
  },
  {
    title: 'Epic Songs',
    description: 'Heroic tales and legends',
    icon: Star,
    count: 45,
  },
];

export function CategoryList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <category.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {category.count} songs
                </span>
                <Button variant="ghost" size="sm">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
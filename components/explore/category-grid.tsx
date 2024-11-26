import { Category } from '@/lib/data/categories';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video relative">
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-muted-foreground mb-4">{category.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {category.subcategories.length} traditions
              </span>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/explore/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  Explore
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
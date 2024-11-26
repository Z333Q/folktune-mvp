import { Subcategory } from '@/lib/data/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SubcategoryListProps {
  subcategories?: Subcategory[];
}

export function SubcategoryList({ subcategories = [] }: SubcategoryListProps) {
  if (!subcategories.length) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No traditions available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subcategories.map((subcategory, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">{subcategory.name}</h3>
          <p className="text-muted-foreground mb-4">{subcategory.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {subcategory.songs?.length || 0} songs
            </span>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={`${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Explore <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
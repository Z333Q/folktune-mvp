import { categories } from '@/lib/data/categories';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Music, Info } from 'lucide-react';
import { CategoryHero } from '@/components/explore/category-hero';
import { SubcategoryList } from '@/components/explore/subcategory-list';
import { CulturalContext } from '@/components/explore/cultural-context';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, '-') === params.category
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <CategoryHero category={category} />
      
      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Origin</h3>
              <p className="text-muted-foreground">
                Discover the geographical and cultural origins of {category.name}.
              </p>
            </Card>
            
            <Card className="p-6">
              <Music className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Musical Style</h3>
              <p className="text-muted-foreground">
                Learn about the unique characteristics and instruments.
              </p>
            </Card>
            
            <Card className="p-6">
              <Info className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cultural Impact</h3>
              <p className="text-muted-foreground">
                Understand the historical and social significance.
              </p>
            </Card>
          </div>
        </section>

        {/* Cultural Context */}
        <CulturalContext category={category} />

        {/* Subcategories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Traditions & Styles</h2>
          <SubcategoryList subcategories={category.subcategories} />
        </section>
      </div>
    </div>
  );
}
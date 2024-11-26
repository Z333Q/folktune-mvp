import { Category } from '@/lib/data/categories';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

interface CulturalContextProps {
  category: Category;
}

export function CulturalContext({ category }: CulturalContextProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Cultural Context</h2>
      
      <Tabs defaultValue="history" className="space-y-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="history">Historical Background</TabsTrigger>
          <TabsTrigger value="instruments">Traditional Instruments</TabsTrigger>
          <TabsTrigger value="significance">Cultural Significance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Historical Background</h3>
            <div className="prose dark:prose-invert">
              <p>{category.culturalContext?.history || "Historical information coming soon."}</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="instruments">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Traditional Instruments</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.culturalContext?.instruments.map((instrument, index) => (
                <Card key={index} className="p-4">
                  {instrument.image && (
                    <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={instrument.image}
                        alt={instrument.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <h4 className="text-lg font-semibold mb-2">{instrument.name}</h4>
                  <p className="text-sm text-muted-foreground">{instrument.description}</p>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="significance">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Cultural Significance</h3>
            <div className="prose dark:prose-invert">
              <p>{category.culturalContext?.significance || "Information about cultural significance coming soon."}</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
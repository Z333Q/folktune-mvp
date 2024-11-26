"use client";

import { Category } from '@/lib/data/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music, Globe, BookOpen } from 'lucide-react';

interface CategoryViewProps {
  category: Category;
}

export function CategoryView({ category }: CategoryViewProps) {
  return (
    <div className="space-y-8">
      <div className="relative h-[400px]">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="cultural-context">Cultural Context</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid md:grid-cols-3 gap-6">
            {category.subcategories.map((subcategory, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-2">{subcategory.name}</h3>
                <p className="text-muted-foreground mb-4">{subcategory.description}</p>
                <Button className="w-full">Explore</Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions">
          <div className="grid gap-6">
            {category.subcategories.map((subcategory, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{subcategory.name}</h3>
                    <p className="text-muted-foreground mb-4">{subcategory.culturalContext}</p>
                    <div className="flex gap-4">
                      <Button>Learn More</Button>
                      <Button variant="outline">View Songs</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cultural-context">
          <Card className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Cultural Significance</h2>
              <p>{category.culturalContext}</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
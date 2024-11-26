"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CategoryGrid } from '@/components/explore/category-grid';
import { FeaturedSong } from '@/components/explore/featured-song';
import { SearchResults } from '@/components/explore/search-results';
import { categories } from '@/lib/data/categories';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredSong = {
    title: "Scarborough Fair",
    origin: "England",
    category: "British Folk",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=800",
    description: "A traditional English ballad with medieval roots, known for its haunting melody and symbolic herbs.",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search folk music traditions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Search Results or Default Content */}
      {searchQuery ? (
        <SearchResults query={searchQuery} />
      ) : (
        <>
          <FeaturedSong {...featuredSong} />
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-8">Folk Music Traditions</h2>
            <CategoryGrid categories={categories} />
          </section>
        </>
      )}
    </div>
  );
}
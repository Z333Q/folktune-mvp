"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Music, Globe, Star } from 'lucide-react';
import { LessonCard } from '@/components/learn/lesson-card';
import { PathCard } from '@/components/learn/path-card';
import { UserProgress } from '@/components/learn/user-progress';

export default function LearnPage() {
  const [progress] = useState(65);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[300px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          <UserProgress progress={progress} />
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Lessons Completed</span>
                <span className="font-medium">12/20</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Songs Learned</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Practice Streak</span>
                <span className="font-medium">5 days</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Tabs defaultValue="lessons" className="space-y-4">
            <TabsList>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <LessonCard
                  title="Introduction to Folk Music"
                  description="Learn the basics of folk music and its cultural significance."
                  progress={100}
                  difficulty="Beginner"
                  duration="30 mins"
                  icon={<Music className="h-5 w-5" />}
                />
                <LessonCard
                  title="Basic Music Theory"
                  description="Understanding scales, chords, and rhythm in folk music."
                  progress={75}
                  difficulty="Beginner"
                  duration="45 mins"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <LessonCard
                  title="Regional Styles"
                  description="Explore different regional folk music styles and traditions."
                  progress={30}
                  difficulty="Intermediate"
                  duration="60 mins"
                  icon={<Globe className="h-5 w-5" />}
                />
                <LessonCard
                  title="Advanced Techniques"
                  description="Master advanced folk music playing techniques."
                  progress={0}
                  difficulty="Advanced"
                  duration="90 mins"
                  icon={<Star className="h-5 w-5" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="paths" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <PathCard
                  title="British Folk Traditions"
                  description="A comprehensive journey through British folk music."
                  progress={60}
                  lessons={12}
                  duration="6 weeks"
                />
                <PathCard
                  title="Irish Folk Music"
                  description="Master the essentials of Irish folk music."
                  progress={30}
                  lessons={10}
                  duration="5 weeks"
                />
                <PathCard
                  title="American Folk Revival"
                  description="Explore the American folk music revival movement."
                  progress={0}
                  lessons={8}
                  duration="4 weeks"
                />
                <PathCard
                  title="World Folk Traditions"
                  description="Journey through diverse folk music traditions."
                  progress={0}
                  lessons={15}
                  duration="8 weeks"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
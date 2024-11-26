import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock } from 'lucide-react';

interface PathCardProps {
  title: string;
  description: string;
  progress: number;
  lessons: number;
  duration: string;
}

export function PathCard({
  title,
  description,
  progress,
  lessons,
  duration,
}: PathCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <BookOpen className="h-4 w-4 mr-1" />
          {lessons} lessons
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {duration}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <Button className="w-full mt-4">
        {progress === 100 ? 'Review Path' : progress === 0 ? 'Start Path' : 'Continue Path'}
      </Button>
    </Card>
  );
}
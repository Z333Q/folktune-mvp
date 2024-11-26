import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface LessonCardProps {
  title: string;
  description: string;
  progress: number;
  difficulty: string;
  duration: string;
  icon: ReactNode;
}

export function LessonCard({
  title,
  description,
  progress,
  difficulty,
  duration,
  icon,
}: LessonCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">{difficulty}</span>
                <span className="text-muted-foreground">{duration}</span>
              </div>
              <span>{progress}% Complete</span>
            </div>
            
            <Progress value={progress} className="h-2" />
            
            <Button className="w-full">
              {progress === 100 ? 'Review Lesson' : progress === 0 ? 'Start Lesson' : 'Continue Lesson'}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
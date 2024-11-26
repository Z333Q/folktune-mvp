import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award } from 'lucide-react';

interface UserProgressProps {
  progress: number;
}

export function UserProgress({ progress }: UserProgressProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Award className="w-12 h-12 text-primary" />
        </div>
      </div>
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold mb-1">Your Progress</h2>
        <p className="text-muted-foreground">Keep up the great work!</p>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Overall Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </Card>
  );
}
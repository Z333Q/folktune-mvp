import { Button } from '@/components/ui/button';
import { Music2, Mic2, Globe } from 'lucide-react';

interface OnboardingWelcomeProps {
  onNext: () => void;
}

export function OnboardingWelcome({ onNext }: OnboardingWelcomeProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to FolkTune</h1>
        <p className="text-muted-foreground">
          Let's personalize your experience to help you discover and learn folk music from around the world.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 rounded-lg bg-primary/5 text-center">
          <Music2 className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold mb-2">Learn</h3>
          <p className="text-sm text-muted-foreground">
            Interactive lessons with real-time feedback
          </p>
        </div>

        <div className="p-6 rounded-lg bg-primary/5 text-center">
          <Mic2 className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold mb-2">Practice</h3>
          <p className="text-sm text-muted-foreground">
            Record and track your progress
          </p>
        </div>

        <div className="p-6 rounded-lg bg-primary/5 text-center">
          <Globe className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="font-semibold mb-2">Discover</h3>
          <p className="text-sm text-muted-foreground">
            Explore folk music from different cultures
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext}>Get Started</Button>
      </div>
    </div>
  );
}
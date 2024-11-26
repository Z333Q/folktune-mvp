import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface OnboardingPreferencesProps {
  onNext: () => void;
  onBack: () => void;
}

export function OnboardingPreferences({ onNext, onBack }: OnboardingPreferencesProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Preferences</h2>
        <p className="text-muted-foreground">
          Help us customize your learning experience.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Preferred Language</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Musical Experience</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Practice Time</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select practice time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5-10">5-10 minutes/day</SelectItem>
              <SelectItem value="10-20">10-20 minutes/day</SelectItem>
              <SelectItem value="20-30">20-30 minutes/day</SelectItem>
              <SelectItem value="30+">30+ minutes/day</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
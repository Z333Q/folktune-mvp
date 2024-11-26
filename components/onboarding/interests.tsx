import { Button } from '@/components/ui/button';

interface OnboardingInterestsProps {
  onNext: () => void;
  onBack: () => void;
}

const categories = [
  "European Folk",
  "Celtic Music",
  "African Folk",
  "Asian Traditional",
  "Latin American",
  "Middle Eastern",
  "Nordic Folk",
  "Bluegrass",
  "Sea Shanties",
  "Work Songs",
  "Spiritual Songs",
  "Love Ballads",
];

export function OnboardingInterests({ onNext, onBack }: OnboardingInterestsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Musical Interests</h2>
        <p className="text-muted-foreground">
          Select the types of folk music you're interested in learning.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className="justify-start h-auto py-4 px-4"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Complete Setup</Button>
      </div>
    </div>
  );
}
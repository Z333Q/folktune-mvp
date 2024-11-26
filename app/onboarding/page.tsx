"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { OnboardingPreferences } from '@/components/onboarding/preferences';
import { OnboardingInterests } from '@/components/onboarding/interests';
import { OnboardingWelcome } from '@/components/onboarding/welcome';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="mb-8">
          <Progress value={(step / totalSteps) * 100} className="mb-2" />
          <p className="text-sm text-muted-foreground text-center">
            Step {step} of {totalSteps}
          </p>
        </div>

        {step === 1 && <OnboardingWelcome onNext={nextStep} />}
        {step === 2 && <OnboardingPreferences onNext={nextStep} onBack={prevStep} />}
        {step === 3 && <OnboardingInterests onNext={nextStep} onBack={prevStep} />}

        {step === totalSteps && (
          <div className="flex justify-end mt-6">
            <Button onClick={() => window.location.href = '/learn'}>
              Start Learning
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
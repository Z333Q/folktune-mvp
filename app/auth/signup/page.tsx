"use client";

import { SignUpForm } from '@/components/auth/signup-form';
import { Card } from '@/components/ui/card';
import { Music2 } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 p-4">
      <Card className="w-full max-w-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            <Music2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-muted-foreground mt-2 text-center">
            Join FolkTune and start your musical journey
          </p>
        </div>

        <SignUpForm />
      </Card>
    </div>
  );
}
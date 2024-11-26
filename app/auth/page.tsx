"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@/components/auth/login-form';
import { SignUpForm } from '@/components/auth/signup-form';
import { Music2 } from 'lucide-react';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 p-4">
      <Card className="w-full max-w-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            <Music2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Welcome to FolkTune</h1>
          <p className="text-muted-foreground mt-2 text-center">
            Discover and learn traditional folk music from around the world
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
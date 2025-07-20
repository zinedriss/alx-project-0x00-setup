// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />
      <Card />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Buttons:</h2>

        <div className="space-x-2">
          <Button title="Small Rounded-sm" styles="rounded-sm text-sm" />
          <Button title="Medium Rounded-md" styles="rounded-md text-base" />
          <Button title="Large Rounded-full" styles="rounded-full text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
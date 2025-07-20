// pages/landing.tsx

import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button"; // Import your new Button component

const Landing: React.FC = () => {
  return (
    <div className="p-8"> {/* Added padding for better layout */}
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1> {/* Added margin-bottom */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render multiple Card components */}
        <Card />
        <Card />
        <Card />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-6">Button Component Examples</h2>
      <div className="flex flex-wrap gap-4 items-center">
        {/* Small Buttons */}
        <Button title="Small Rounded SM" styles="text-sm rounded-sm" />
        <Button title="Small Rounded MD" styles="text-sm rounded-md" />
        <Button title="Small Rounded Full" styles="text-sm rounded-full" />

        {/* Medium Buttons (default size in Button.tsx, just shape variations) */}
        <Button title="Medium Rounded SM" styles="rounded-sm" />
        <Button title="Medium Rounded MD" styles="rounded-md" />
        <Button title="Medium Rounded Full" styles="rounded-full" />

        {/* Large Buttons */}
        <Button title="Large Rounded SM" styles="text-lg py-3 px-6 rounded-sm" />
        <Button title="Large Rounded MD" styles="text-lg py-3 px-6 rounded-md" />
        <Button title="Large Rounded Full" styles="text-lg py-3 px-6 rounded-full" />

        {/* Example with different color for variety */}
        <Button title="Action Button" styles="bg-green-500 hover:bg-green-700 text-lg rounded-md" />
      </div>
    </div>
  );
};

export default Landing;
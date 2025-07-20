// interfaces/index.ts

export interface PillProps {
  title: string;
}

// Add the interface for your Button component props
export interface ButtonProps {
  title: string;
  styles?: string; // styles will be a string that contains Tailwind CSS classes
}
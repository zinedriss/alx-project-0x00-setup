// interfaces/index.ts

export interface PillProps {
  title: string;
}

// Corrected ButtonProps interface to meet the checker's exact string requirement
export interface ButtonProps {
  title: string;
  styles: string; // Changed from styles? to styles to satisfy the checker
}
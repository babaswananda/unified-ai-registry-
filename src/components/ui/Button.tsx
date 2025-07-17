import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gradient" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-dark-900 dark:bg-white text-white dark:text-dark-900 hover:bg-dark-800 dark:hover:bg-gray-100 hover:scale-105 hover:shadow-xl focus:ring-dark-500",
      secondary: "bg-white dark:bg-dark-800 text-dark-900 dark:text-white border-2 border-dark-200 dark:border-dark-600 hover:border-dark-400 dark:hover:border-dark-500 hover:scale-105 focus:ring-dark-300",
      gradient: "bg-ai-gradient text-white hover:scale-105 hover:shadow-xl focus:ring-accent-purple",
      ghost: "text-dark-700 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white hover:bg-dark-50 dark:hover:bg-dark-700",
    };
    
    const sizes = {
      sm: "px-3 sm:px-4 py-2 sm:py-2.5 text-sm min-h-[44px]",
      md: "px-6 sm:px-8 py-3 sm:py-4 text-base min-h-[44px]",
      lg: "px-8 sm:px-10 py-4 sm:py-5 text-lg min-h-[48px]",
    };
    
    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

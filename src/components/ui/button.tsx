import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-forest text-ivory shadow-luxury active:bg-kashi/90 can-hover:hover:bg-kashi/90",
        secondary:
          "bg-saffron text-ivory shadow-saffron active:bg-saffron/90 can-hover:hover:bg-saffron/90",
        outline:
          "border border-forest bg-transparent text-forest active:bg-forest active:text-ivory can-hover:hover:bg-forest can-hover:hover:text-ivory",
        ghost:
          "text-forest active:bg-accent active:text-saffron can-hover:hover:bg-accent can-hover:hover:text-saffron",
        link: "text-saffron underline-offset-4 active:text-forest can-hover:hover:text-forest can-hover:hover:underline",
        whatsapp:
          "bg-saffron text-ivory shadow-saffron active:bg-saffron/90 can-hover:hover:bg-saffron/90",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

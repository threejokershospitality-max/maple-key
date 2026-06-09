import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuestReviewAvatarProps {
  name: string;
  className?: string;
}

export function GuestReviewAvatar({ name, className }: GuestReviewAvatarProps) {
  return (
    <div
      className={cn(
        "icon-well h-12 w-12 shrink-0",
        className
      )}
      aria-hidden="true"
    >
      <User className="h-5 w-5" />
      <span className="sr-only">{name}</span>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-saffron text-sm tracking-[0.2em] uppercase mb-4">
          404
        </p>
        <h1 className="font-heading text-4xl text-forest mb-4">
          Page Not Found
        </h1>
        <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

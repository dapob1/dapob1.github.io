import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-[36ch] text-muted">
        That route doesn&apos;t exist — or it moved. Head back to the studio.
      </p>
      <div className="mt-10">
        <Button asChild variant="primary">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  );
}

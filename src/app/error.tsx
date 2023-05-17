"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <h2 className="text-lg font-medium">Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

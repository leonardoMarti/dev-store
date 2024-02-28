"use client";

import { Skeleton } from "@/components/skeleton";
import { useSearchParams } from "next/navigation";

export default function SearchLoading() {
  const searchParams = useSearchParams();
  const genericArray = Array.from(Array(6).keys());

  const query = searchParams.get("q");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {genericArray.map((skeleton) => (
          <Skeleton key={skeleton} className="h-[400px]" />
        ))}
      </div>
    </div>
  );
}

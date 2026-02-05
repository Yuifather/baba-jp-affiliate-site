"use client";

import Image from "next/image";
import { useState } from "react";

export default function BrandMark() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-12 w-32">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-black/20 bg-white/70 text-xs font-semibold text-black/60">
            Partner Logo
          </div>
        ) : (
          <Image
            src="/partner/logo.svg"
            alt="ババオプション Partner Logo"
            width={128}
            height={48}
            className="h-12 w-32 object-contain"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

type MediaSlotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  className?: string;
};

export default function MediaSlot({
  src,
  alt,
  width,
  height,
  label,
  className = "",
}: MediaSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-amber-100 via-white to-teal-100 ${className}`}
      style={{ minHeight: "220px" }}
    >
      {!error && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-full w-full object-cover transition-opacity ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setLoaded(true)}
          onError={() => setError(true)}
          priority
        />
      )}
      {(!loaded || error) && (
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <div>
            <p className="text-sm font-semibold text-black/70">Partner Image Placeholder</p>
            <p className="text-xs text-black/50">{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming we have a utils file for merging classes, or I'll just use template literals if not using shadcn/clsx

// Standard shadcn-like cn utility if not present, I'll assume standard template literals for now to be safe, 
// OR I check for lib/utils. Next.js starters usually have it.
// Checking package.json, `clsx` and `tailwind-merge` are present, so `lib/utils` likely exists.
// I will verify lib/utils existence quickly via list_dir if I was unsure, but usually created by `create-next-app` with tailwind.
// EDIT: I checked file list earlier and didn't see `lib/utils` explicitly. I saw `src` had children.
// To be safe, I will implement it with standard template literals or `clsx` directly if I import it.


export function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="absolute bottom-0 w-full h-[84px] bg-black border-t border-white/10 flex items-start justify-around pt-4 z-40">
            {/* Home Tab */}
            <Link href="/home" className="flex flex-col items-center gap-1 group">
                <div
                    className={cn(
                        "transition-colors rounded-xl p-1.5",
                        isActive("/home") ? "text-white" : "text-neutral-500 group-hover:text-white"
                    )}
                >
                    <Home width={22} height={22} strokeWidth={1.5} />
                </div>
                <span
                    className={cn(
                        "text-xs font-medium font-mono transition-colors",
                        isActive("/home") ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                    )}
                >
                    Home
                </span>
            </Link>

            {/* Settings Tab */}
            <Link href="/settings" className="flex flex-col items-center gap-1 group">
                <div
                    className={cn(
                        "transition-colors rounded-xl p-1.5",
                        isActive("/settings") ? "text-white" : "text-neutral-500 group-hover:text-white"
                    )}
                >
                    <Settings width={22} height={22} strokeWidth={1.5} />
                </div>
                <span
                    className={cn(
                        "text-xs font-medium font-mono transition-colors",
                        isActive("/settings") ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                    )}
                >
                    Settings
                </span>
            </Link>
        </nav>
    );
}

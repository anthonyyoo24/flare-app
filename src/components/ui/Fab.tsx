"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export function Fab() {
    const router = useRouter();

    // Placeholder navigation to "Create Pitch" page
    // We'll define the route /editor in Phase 4
    const handleClick = () => {
        router.push("/editor");
    };

    return (
        <button
            onClick={handleClick}
            className="flex hover:scale-105 active:scale-95 transition-all duration-300 z-30 group text-black bg-white w-14 h-14 rounded-full absolute right-6 bottom-24 shadow-[0_0_20px_rgba(255,255,255,0.2)] items-center justify-center"
            aria-label="Create New Pitch"
        >
            <Plus
                width={24}
                strokeWidth={2}
                className="group-hover:rotate-90 transition-transform duration-300"
            />
        </button>
    );
}

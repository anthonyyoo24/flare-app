"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
// We'll use the simple icon or a similar SVG for the arrow
// If you want a Google Icon, we can add that, but for now we follow the mockup's "Continue" style
// which is generic. The text will say "Continue with Google".

export default function GoogleContinueButton() {
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    const handleLogin = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) {
                console.error("Login error:", error);
                // Ideally we'd show a toast here, but simple console log for step 2
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            // Note: If redirect happens fast, this might not even be seen, but good practice.
            // setLoading(false); 
        }
    };

    return (
        <button
            onClick={handleLogin}
            disabled={loading}
            className="group w-full h-12 bg-white hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
        >
            <span className="text-black font-medium text-[15px] font-mono">
                {loading ? "Connecting..." : "Continue with Google"}
            </span>

            {/* Arrow Icon - hidden when loading */}
            {!loading && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black group-hover:translate-x-1 transition-transform"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            )}

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
        </button>
    );
}

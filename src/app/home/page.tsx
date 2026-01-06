import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Search, Plus, Home as HomeIcon, Settings, BarChart3 } from "lucide-react";
import Link from "next/link";
import { BottomNav } from "@/components/layout/BottomNav";

export default async function Home() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/");
    }

    return (
        <main className="min-h-screen flex items-center justify-center overflow-hidden selection:bg-purple-500/30 selection:text-purple-200 text-white bg-neutral-950 relative">
            {/* Ambient Background Aura */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
            </div>

            {/* Mobile App Container */}
            <div className="relative w-full max-w-[420px] h-[100dvh] sm:h-[800px] bg-black sm:rounded-[32px] sm:border border-neutral-800 shadow-2xl overflow-hidden flex flex-col animate-fade-in ring-1 ring-white/5">
                {/* App Header */}
                <header className="pt-12 pb-4 px-6 bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold text-white tracking-tight font-mono">
                            My Pitches
                        </h1>
                        <p className="text-xs text-neutral-500 font-medium mt-0.5 font-mono">
                            0 active projects
                        </p>
                    </div>
                    {/* Search Bar */}
                    <div className="flex items-center w-[220px] h-8 bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800 rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] relative z-50">
                        <input
                            type="text"
                            className="w-full h-full bg-transparent border-none outline-none text-xs text-white pl-4 pr-10 transition-opacity duration-300 font-mono placeholder:text-neutral-500 focus:ring-0"
                            placeholder="Search..."
                        />
                        <button className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors focus:outline-none z-10">
                            <Search width={16} strokeWidth={1.5} />
                        </button>
                    </div>
                </header>

                {/* Empty State Content */}
                <div className="flex-1 flex flex-col text-center pt-6 pr-6 pb-28 pl-6 relative items-center justify-center">
                    {/* Subtle Pattern Background */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    ></div>

                    {/* Animated Icon Container */}
                    <div className="relative mb-8 group cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[40px] rounded-full group-hover:blur-[50px] transition-all duration-700"></div>
                        <div className="relative w-32 h-24 flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500 ease-out">
                            {/* Left Card */}
                            <div className="absolute w-12 h-16 bg-neutral-900 border border-white/10 rounded-lg shadow-lg transform -rotate-12 -translate-x-6 translate-y-3 transition-all duration-500 group-hover:-rotate-[25deg] group-hover:-translate-x-8 origin-bottom-right flex flex-col p-1.5 gap-1.5">
                                <div className="w-full aspect-[4/3] bg-white/5 rounded border border-white/5 flex items-center justify-center">
                                    <BarChart3 width={10} className="text-white/20" />
                                </div>
                                <div className="space-y-1">
                                    <div className="w-full h-0.5 bg-white/20 rounded-full"></div>
                                    <div className="w-2/3 h-0.5 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                            {/* Right Card */}
                            <div className="absolute w-12 h-16 bg-neutral-900 border border-white/10 rounded-lg shadow-lg transform rotate-12 translate-x-6 translate-y-3 transition-all duration-500 group-hover:rotate-[25deg] group-hover:translate-x-8 origin-bottom-left flex flex-col p-1.5 gap-1.5">
                                <div className="w-full aspect-[4/3] bg-white/5 rounded border border-white/5 flex items-center justify-center">
                                    <BarChart3 width={10} className="text-white/20" />
                                </div>
                                <div className="space-y-1">
                                    <div className="w-full h-0.5 bg-white/20 rounded-full"></div>
                                    <div className="w-2/3 h-0.5 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                            {/* Center Card */}
                            <div className="absolute w-14 h-20 bg-[#151515] border border-white/20 rounded-xl shadow-2xl z-20 flex flex-col p-2 gap-2 transform transition-all duration-500 group-hover:-translate-y-2">
                                <div className="w-full aspect-[4/3] bg-white/5 rounded border border-white/5 flex items-center justify-center">
                                    <BarChart3 width={12} className="text-white/20" />
                                </div>
                                <div className="space-y-1">
                                    <div className="w-full h-0.5 bg-white/20 rounded-full"></div>
                                    <div className="w-2/3 h-0.5 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorator particles */}
                        {/* <div className="absolute -right-2 top-0 w-3 h-3 bg-purple-500 rounded-full blur-[1px] animate-float"></div>
                        <div className="absolute -left-2 -bottom-2 w-1.5 h-1.5 bg-blue-500 rounded-full blur-[0.5px] animate-float-delayed"></div> */}
                    </div>

                    <h2 className="text-xl font-semibold text-white tracking-tight font-mono mb-3">
                        No pitches yet
                    </h2>
                    <p className="text-[13px] leading-relaxed text-neutral-500 font-mono max-w-[260px] mr-auto mb-8 ml-auto">
                        Start by tailoring one for your next opportunity
                    </p>

                    <Link
                        href="/editor"
                        className="group flex hover:bg-neutral-200 transition-all active:scale-95 text-xs font-medium text-black bg-white rounded-xl pt-3 pr-6 pb-3 pl-6 relative shadow-[0_0_20px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center"
                    >
                        <Plus width={16} strokeWidth={2.5} />
                        <span className="font-mono">Create New Pitch</span>
                    </Link>
                </div>

                {/* FAB: Create New Pitch */}
                <Link
                    href="/editor"
                    className="flex hover:scale-105 active:scale-95 transition-all duration-300 z-30 group text-black bg-white w-14 h-14 rounded-full absolute right-6 bottom-24 shadow-[0_0_20px_rgba(255,255,255,0.2)] items-center justify-center"
                >
                    <Plus
                        width={24}
                        strokeWidth={2}
                        className="group-hover:rotate-90 transition-transform duration-300"
                    />
                </Link>

                {/* Bottom Navigation Bar */}
                <BottomNav />

                {/* Bottom Overlay */}
                <div className="absolute bottom-[84px] left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
            </div>
        </main>
    );
}

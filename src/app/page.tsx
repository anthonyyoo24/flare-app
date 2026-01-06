import Image from "next/image";
import GoogleContinueButton from "@/components/auth/GoogleContinueButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden selection:bg-purple-500/30 selection:text-purple-200 text-white bg-neutral-950 relative">
      {/* Ambient Background Aura */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Mobile App Container */}
      <div className="relative w-full max-w-[420px] h-[100dvh] sm:h-[800px] bg-black sm:rounded-[32px] sm:border border-neutral-800 shadow-2xl overflow-hidden flex flex-col animate-fade-in ring-1 ring-white/5">

        {/* Main Content */}
        <div className="flex-1 flex flex-col relative items-center justify-center p-8 z-10">

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}>
          </div>

          {/* Illustration Composition */}
          <div className="relative w-full max-w-[340px] h-[460px] flex items-center justify-center mb-8">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[60px] rounded-full animate-pulse-slow"></div>

            {/* Floating Elements Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Back Card (Decor) */}
              <div className="absolute w-64 h-80 bg-neutral-900/50 border border-white/5 rounded-3xl transform -rotate-12 translate-x-[-24px] translate-y-[12px] backdrop-blur-sm animate-float-delayed"></div>

              {/* Main Center Card */}
              <div className="absolute w-72 h-96 bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl flex flex-col p-5 transform rotate-0 animate-float z-10">
                {/* Card Header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                {/* Pitch Character Illustration */}
                <div className="space-y-4 flex-1">
                  <div className="w-full h-44 bg-white rounded-xl border border-neutral-200 flex items-end justify-center relative overflow-hidden group">
                    <Image
                      src="/welcome-illustration.jpg"
                      alt="Young woman with social media icons"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2.5 pt-1">
                    <div className="w-3/4 h-2.5 bg-neutral-800 rounded-full"></div>
                    <div className="w-1/2 h-2.5 bg-neutral-800 rounded-full"></div>
                    <div className="w-2/3 h-2.5 bg-neutral-800 rounded-full opacity-60"></div>
                  </div>
                </div>
                {/* Bottom Tag */}
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-[#0A0A0A]"></div>
                    <div className="w-8 h-8 rounded-full bg-neutral-700 border border-[#0A0A0A]"></div>
                  </div>
                  <div className="w-16 h-6 bg-green-900/30 rounded-md border border-green-500/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center relative z-20 max-w-xs mx-auto">
            <h1 className="text-3xl font-medium text-white mb-3 font-mono tracking-tighter">
              Nail Your Pitch
            </h1>
            <p className="text-sm text-neutral-400 font-mono leading-relaxed mb-10">
              Create, organize, and share tailored pitches that stand out.
            </p>

            {/* Continue Button */}
            <GoogleContinueButton />
          </div>
        </div>

        {/* Bottom overlay gradient for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0"></div>
      </div>
    </main>
  );
}

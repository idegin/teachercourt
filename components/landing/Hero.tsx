import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-24 md:py-32 lg:py-40">
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-3xl">
                    Online tutoring shouldn&apos;t be complicated.
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl mb-10">
                    One profile. One platform. All the tools tutors need to teach and grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button size="lg" className="group text-lg px-8 h-14" asChild>
                        <Link href="https://tutorcourt.com/survey" target="_blank">
                            Take the TutorCourt Tutor Survey (5–8 minutes)
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Background decoration */}
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </section>
    );
}

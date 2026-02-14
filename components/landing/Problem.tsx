import { Banknote, AppWindow, Search, Briefcase } from "lucide-react";

export function Problem() {
    const problems = [
        {
            icon: Banknote,
            content: (
                <>
                    You&apos;re <strong className="font-bold text-foreground">underpaid</strong> for the value you deliver
                </>
            ),
        },
        {
            icon: AppWindow,
            content: (
                <>
                    You <strong className="font-bold text-foreground">juggle disconnected tools</strong>—Zoom, WhatsApp, Google Classroom—just to teach a single lesson
                </>
            ),
        },
        {
            icon: Search,
            content: (
                <>
                    You <strong className="font-bold text-foreground">struggle to be discovered</strong> by parents, relying on word-of-mouth in an informal market
                </>
            ),
        },
        {
            icon: Briefcase,
            content: (
                <>
                    You lack a <strong className="font-bold text-foreground">professional platform</strong> that supports both your teaching and your growth as a freelancer
                </>
            ),
        },
    ];

    return (
        <section className="py-24 bg-accent/60" id='the-problem'>
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl text-accent-foreground">
                        Tutors deserve better than juggling tools and chasing pupils.
                    </h2>
                    <p className="text-lg text-accent-foreground/80 md:text-xl">
                        Today&apos;s tutors face four frustrating realities:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="group flex flex-start gap-4 p-6 md:p-8 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <problem.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-lg text-accent-foreground/90 leading-relaxed pt-2">
                                {problem.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl font-medium text-accent-foreground max-w-3xl mx-auto leading-relaxed">
                        TutorCourt is being built to solve these problems—not with assumptions, but with your input.
                    </p>
                </div>
            </div>
        </section>
    );
}

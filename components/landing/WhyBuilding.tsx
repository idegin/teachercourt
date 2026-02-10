import React from "react";
import { CheckCircle2, Target, Heart, Scale, Lightbulb } from "lucide-react";

export function WhyBuilding() {
    const reasons = [
        {
            icon: Target,
            title: "Real Problems",
            description: "The problems we have identified are real and correctly prioritised",
        },
        {
            icon: Heart,
            title: "Genuine Support",
            description: "The features we plan to build genuinely support your teaching workflow",
        },
        {
            icon: Scale,
            title: "Fair Pricing",
            description: "The pricing model is fair, transparent, and aligned with how tutors earn",
        },
        {
            icon: Lightbulb,
            title: "Accurate Expectations",
            description: "Our assumptions about parent expectations are accurate",
        },
    ];

    return (
        <section className="relative overflow-hidden py-24 border-t border-border">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />

            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6 leading-tight">
                            Why We're Building This
                        </h2>
                        <p className="text-primary font-medium text-xl mb-6">
                            Built with tutors, not just for them.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Before building the platform, we want to ensure that every feature, price point,
                            and design decision is rooted in the reality of your day-to-day teaching experience.
                        </p>


                        <div className="p-6 bg-secondary/10 border-l-4 border-secondary rounded-r-xl">
                            <p className="text-sm italic text-secondary font-medium">
                                "Your feedback will directly influence product decisions—not be ignored or diluted."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Reasons Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {reasons.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-card hover:bg-muted/50 border border-border/50 hover:border-primary/20 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                {/* <h3 className="font-semibold text-foreground mb-2">{item.title}</h3> */}
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

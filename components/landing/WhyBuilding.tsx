import React from "react";

export function WhyBuilding() {
    const reasons = [
        "The problems we have identified are real and correctly prioritised",
        "The features we plan to build genuinely support your teaching workflow",
        "The pricing model is fair, transparent, and aligned with how tutors earn",
        "Our assumptions about parent expectations are accurate",
    ];

    return (
        <section className="bg-background py-[60px] border-t border-border">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="max-w-3xl mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                        Why We're Building This
                    </h2>

                    {/* Subheadline */}
                    <p className="text-primary font-medium text-lg mb-5">
                        Built with tutors, not just for them.
                    </p>

                    {/* Body Copy */}
                    <p className="text-muted-foreground text-lg mb-[30px]">
                        Before building the platform, we want to ensure that:
                    </p>

                    {/* Reason List */}
                    <ul className="flex flex-col gap-4">
                        {reasons.map((reason, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="flex-shrink-0 text-primary font-bold">
                                    {index + 1}.
                                </span>
                                <span className="text-foreground">{reason}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Closing Line */}
                    <p className="mt-[30px] text-sm italic text-muted-foreground">
                        Your feedback will directly influence product decisions—not be ignored or diluted.
                    </p>
                </div>
            </div>
        </section>
    );
}

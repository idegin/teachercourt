import React from "react";

export function WhatHappensNext() {
    const steps = [
        {
            step: 1,
            title: "View a short pitch deck of the TutorCourt concept",
        },
        {
            step: 2,
            title: "Complete a short questionnaire (5–8 minutes)",
        },
        {
            step: 3,
            title: "Optionally join the TutorCourt waitlist for early access",
        },
    ];

    return (
        <section className="bg-background py-[60px] border-t border-border">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Headline */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                        What Happens Next
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-0 relative">

                    {steps.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Step Card */}
                            <div className="flex-1 flex flex-col items-center text-center group w-full">
                                {/* Number Badge */}
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3 shadow-md transition-transform duration-300 group-hover:scale-110">
                                    {item.step}
                                </div>

                                {/* Step Title */}
                                <h3 className="text-foreground font-medium text-lg max-w-[280px] transition-transform duration-300 group-hover:-translate-y-0.5">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Divider (Desktop Only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block w-[1px] h-24 bg-border mx-4 self-center" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Closing Line */}
                <div className="mt-[30px] text-center">
                    <p className="text-sm italic text-muted-foreground">
                        There is no obligation to sign up or pay anything.
                    </p>
                </div>
            </div>
        </section>
    );
}

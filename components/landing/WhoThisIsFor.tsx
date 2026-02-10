import React from "react";
import { Check } from "lucide-react";

export function WhoThisIsFor() {
    const audience = [
        "Classroom teachers offering private tutoring",
        "Full-time or part-time private tutors",
        "Tutors currently teaching online or planning to do so",
        "Tutors who want a professional platform to support long-term freelancing",
    ];

    return (
        <section className="bg-muted/30 py-24 border-t border-border">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                        Who This Is For
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        This survey is designed for:
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-background border border-border rounded-3xl p-8 sm:p-12 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {audience.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                    <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                                </div>
                                <span className="text-foreground text-lg leading-relaxed">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-border text-center">
                        <p className="text-sm italic text-muted-foreground">
                            You do not need to be highly technical to participate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

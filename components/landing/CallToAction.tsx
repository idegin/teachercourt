import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <section className="w-full flex flex-col md:flex-row" id="waitlist">
            {/* Column 1 (Primary - Left) */}
            <div className="w-full md:w-1/2 bg-primary text-primary-foreground p-[60px] flex flex-col justify-center">
                <div className="max-w-xl mx-auto md:mx-0 w-full">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Your experience as a tutor matters.
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-10 font-light">
                        Help us build a platform that genuinely supports your work.
                    </p>

                    <Button
                        size="lg"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8 text-lg font-semibold group w-full sm:w-auto"
                        asChild
                    >
                        <Link href="https://forms.gle/ugh3LuxjyGVgg4L97" target="_blank">
                            Take the Survey
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="mt-3 text-sm text-primary-foreground/70 ml-1">
                        (5–8 minutes)
                    </p>
                </div>
            </div>

            {/* Column 2 (Secondary - Right) */}
            <div className="w-full md:w-1/2 bg-secondary/60 text-secondary-foreground p-[60px] flex flex-col justify-center">
                <div className="max-w-xl mx-auto md:mx-0 w-full">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                        Join the Waitlist
                    </h3> {/* Removed (Optional) */}
                    <p className="text-lg text-secondary-foreground mb-6 leading-relaxed"> {/* Changed text-muted-foreground to text-secondary-foreground */}
                        If you would like to receive updates or early access when TutorCourt launches,
                        you may join the waitlist after completing the survey.
                    </p>

                    {/* Stacked Avatars + Count */}
                    <div className="flex items-center gap-4 md:flex-row flex-col">
                        <Button
                            size="lg"
                            className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 h-14 px-8 text-lg font-semibold group w-full sm:w-auto border border-secondary"
                            asChild
                        >
                            <Link href="https://forms.gle/cmfXqDPh3aLp3LFd9" target="_blank">
                                Join The Waitlist
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[
                                    "https://cdn.pixabay.com/photo/2022/08/20/11/59/african-man-7398921_1280.jpg",
                                    "https://img.freepik.com/free-photo/close-up-beautiful-african-woman-portrait_23-2148960573.jpg",
                                    "https://images.pexels.com/photos/20000981/pexels-photo-20000981/free-photo-of-portrait-of-an-african-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                    "https://img.freepik.com/free-photo/beautiful-african-woman-face-portrait-close-up_53876-148041.jpg?semt=ais_user_personalization&w=740&q=80"
                                ].map((src, i) => (
                                    <img
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                                        src={src}
                                        alt={`Waitlist member ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="text-sm font-semibold text-secondary-foreground">
                                245+ people joined
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-secondary-foreground/80 italic border-t border-secondary-foreground/20 pt-6 mt-8"> {/* Adjusted opacity/color */}
                        We will only contact you with relevant updates. Your information will not be shared.
                    </p>
                </div>
            </div>
        </section>
    );
}

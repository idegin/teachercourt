import Image from "next/image";
import { Check } from "lucide-react";

const features = [
    {
        title: "Integrated live video classes",
        description: "Forget about generating Zoom links or worrying about time limits. Our built-in video classroom is designed specificially for 1-on-1 and group tuition.",
        details: [
            "HD Video & Audio optimised for low bandwidth",
            "Session recording for revision",
            "One-click join for students"
        ],
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Tutor teaching student online",
    },
    {
        title: "Assignment and homework management",
        description: "Streamline your workflow with tools that keep student work organized. Set, track, and grade assignments without leaving the platform.",
        details: [
            "Centralized submission dashboard",
            "Automated deadlines and reminders",
            "Rich-text feedback and file annotation"
        ],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Student working on homework",
    },
    {
        title: "Digital whiteboard and screen-writing tools",
        description: "Perfect for Mathematics and Science. Our infinite canvas lets you and your students solve problems together in real-time.",
        details: [
            "Real-time collaboration",
            "Equation editor and shape tools",
            "Save boards as PDF notes"
        ],
        image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Digital whiteboard graphics",
    },
    {
        title: "Gamified learning tools",
        description: "Keep pupil engagement high with built-in rewards. Turn lessons into challenges that students want to complete.",
        details: [
            "Achievement badges and streaks",
            "Interactive quizzes and polls",
            "Progress tracking for motivation"
        ],
        image: "https://images.unsplash.com/photo-1544985223-a1789c675319?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Excited student learning",
    },
    {
        title: "Tutor profiles for discoverability",
        description: "Stop relying on word-of-mouth alone. Create a professional profile that showcases your expertise to thousands of parents.",
        details: [
            "Verified credentials badges",
            "Review and rating system",
            "Introductory video hosting"
        ],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Professional tutor profile",
    },
    {
        title: "Progress Dashboards",
        description: "Provide transparency to parents without the extra emails. Both you and parents can monitor student progress at a glance.",
        details: [
            "Real-time grade visualisation",
            "Attendance and hour tracking",
            "Monthly progress reports"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Analytics dashboard",
    },
];

export function Features() {
    return (
        <section id="offerings" className="w-full bg-secondary/20">
            <div className="w-full">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                        What TutorCourt Offers
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground text-lg md:text-xl/relaxed mb-12">
                        An all-in-one tutoring platform — bringing together the tools you already use, while removing unnecessary friction.
                    </p>
                </div>

                <div className="flex flex-col">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full min-h-[500px]`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 flex items-center bg-background p-8 md:p-16 lg:p-24">
                                <div className="max-w-xl mx-auto md:mx-0">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {feature.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 bg-primary/10 rounded-full p-1">
                                                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                                </div>
                                                <span className="text-foreground/80 font-medium">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="py-16 text-center bg-background border-t border-border">
                    <div className="container px-4">
                        <p className="text-sm md:text-base italic text-muted-foreground">
                            We are deliberately validating these features with tutors before finalising what is built.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

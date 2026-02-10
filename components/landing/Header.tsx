import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
    const routes = [
        { href: "/", label: "Home" },
        { href: "#how-it-works", label: "How it works" },
        { href: "#offerings", label: "Offerings" },
        { href: "#waitlist", label: "Waitlist" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo-light.png"
                        alt="TutorCourt Logo"
                        width={150}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button variant="default" size="sm" asChild>
                            <Link href="#waitlist">Join Waitlist</Link>
                        </Button>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className="text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <Button variant="default" size="sm" asChild className="w-full mt-4">
                                    <Link href="#waitlist">Join Waitlist</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

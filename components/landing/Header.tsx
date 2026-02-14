"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
    const [open, setOpen] = useState(false);

    const routes = [
        { href: "/", label: "Home" },
        { href: "#offerings", label: "Offerings" },
        { href: "#the-problem", label: "The Problem" },
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
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] pr-0">
                            <SheetHeader className="px-6 text-left">
                                <SheetTitle>
                                    <Image
                                        src="/logo-light.png"
                                        alt="TutorCourt Logo"
                                        width={120}
                                        height={32}
                                        className="h-8 w-auto object-contain"
                                    />
                                    <span className="sr-only">TutorCourt Menu</span>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 mt-8 px-6">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border/50 last:border-0"
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <div className="mt-4">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        asChild
                                        className="w-full text-base font-semibold shadow-md"
                                        onClick={() => setOpen(false)}
                                    >
                                        <Link href="#waitlist">Join Waitlist</Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

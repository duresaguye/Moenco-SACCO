"use client";
import React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale, type Bi } from "@/i18n/locale-context";
import heroAddis from "@/images/hero-addis.jpg";

interface BreadcrumbItemData {
    label: string | Bi;
    href?: string;
}

interface PageHeaderProps {
    heading: string | Bi;
    breadcrumb?: BreadcrumbItemData[];
    className?: string;
    smallerHeading?: boolean;
}

function isBi(value: string | Bi): value is Bi {
    return typeof value === "object" && value !== null && "en" in value;
}

export default function PageHeader({ heading, smallerHeading = false, breadcrumb = [], className }: PageHeaderProps) {
    const { t } = useLocale();
    const resolve = (value: string | Bi) => (isBi(value) ? t(value) : value);

    return (
        <header className={cn("relative flex flex-col pt-(--menubar-height) bg-darker", className)}>
            <div className="absolute inset-0 overflow-hidden -z-10">
                <Image src={heroAddis} alt="" fill sizes="100vw" className="object-cover opacity-25" />
                <div className="absolute inset-0 bg-linear-to-br from-darker via-darker/95 to-primary-dark/70" />
            </div>
            <div className="relative py-12 lg:py-20 xl:py-24">
                <div className="container">
                    <ScrollReveal stagger className="flex flex-col items-center justify-center gap-4">
                        <div className="reveal-item reveal-delay-100">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumb.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <BreadcrumbItem>
                                                {item.href ? (
                                                    <BreadcrumbLink render={<a href={item.href} />}>
                                                        {resolve(item.label)}
                                                    </BreadcrumbLink>
                                                ) : (
                                                    <BreadcrumbPage>{resolve(item.label)}</BreadcrumbPage>
                                                )}
                                            </BreadcrumbItem>

                                            {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                                        </React.Fragment>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <h2 className={cn("reveal-item reveal-delay-200 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1]", smallerHeading ? "" : "xl:text-6xl 2xl:text-[5rem]")}>
                            {resolve(heading)}
                        </h2>
                    </ScrollReveal>
                </div>
            </div>
        </header>
    );
}

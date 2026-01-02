"use client"

import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    bounce?: boolean
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 700,
    bounce = false
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`${className} transition-all ease-out ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transform: isVisible && bounce ? "scale(1)" : undefined
            }}
        >
            {children}
        </div>
    )
}

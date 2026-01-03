"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import animationData from "@/blink-emoji-yellow.json"

export function Preloader() {
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            setTimeout(() => setShow(false), 500) // Wait for fade out
        }, 2500) // Show for 2.5s

        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    return (
        <div
            className={`fixed inset-0 z-[60] flex items-center justify-center bg-background transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="w-64 h-64">
                <Lottie animationData={animationData} loop={true} />
            </div>
        </div>
    )
}

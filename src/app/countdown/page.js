"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({});
    const [title, setTitle] = useState("");

    useEffect(() => {
        // Parse query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const dateParam = urlParams.get("date");
        const titleParam = urlParams.get("title");

        if (!dateParam) {
            alert("Date parameter is missing. Redirecting to home.");
            window.location.href = "./";
            return;
        }

        const targetDate = parseInt(dateParam, 10);
        setTitle(decodeURIComponent(titleParam || "Countdown"));

        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(countdownInterval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start items-center justify-items-center">
                <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-geist-mono)] text-center mx-auto">
                    {title}
                </h1>
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-geist-mono)] mb-4">
                        Time Remaining
                    </h2>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="p-4 border-2 border-gray-300 rounded-md shadow-lg">
                            <div className="text-5xl font-bold">{timeLeft.days || 0}</div>
                            <div className="text-sm">Days</div>
                        </div>
                        <div className="p-4 border-2 border-gray-300 rounded-md shadow-lg">
                            <div className="text-5xl font-bold">{timeLeft.hours || 0}</div>
                            <div className="text-sm">Hours</div>
                        </div>
                        <div className="p-4 border-2 border-gray-300 rounded-md shadow-lg">
                            <div className="text-5xl font-bold">{timeLeft.minutes || 0}</div>
                            <div className="text-sm">Minutes</div>
                        </div>
                        <div className="p-4 border-2 border-gray-300 rounded-md shadow-lg">
                            <div className="text-5xl font-bold">{timeLeft.seconds || 0}</div>
                            <div className="text-sm">Seconds</div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="row-start-3">
                <button
                    onClick={() => (window.location.href = "./")}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                    Back to Home
                </button>
            </footer>
        </div>
    );
}
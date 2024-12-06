"use client";
import Image from "next/image";

export default function Home() {
  const handleLaunch = () => {
    const dateElement = document.getElementById("date");
    const titleElement = document.getElementById("title");

    if (!dateElement.value || !titleElement.value) {
      alert("Please fill in both the date and title!");
      return;
    }

    const dateInMilliseconds = new Date(dateElement.value).getTime();

    if (isNaN(dateInMilliseconds)) {
      alert("Invalid date format. Please select a valid date.");
      return;
    }

    window.location.href = `./countdown?date=${dateInMilliseconds}&title=${encodeURIComponent(
        titleElement.value
    )}`;
  };

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-geist-mono)]">
            🚀 Countdown Timer
          </h1>
          <h1 className="font-[family-name:var(--font-geist-mono)]">Powered by</h1>
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Get started by selecting an end date</li>
            <li>Then, type in a title</li>
          </ol>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <input
                type="datetime-local"
                placeholder="Date"
                id="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 transition-all duration-300"
            />
            <input
                placeholder="Title Name"
                id="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 transition-all duration-300"
            />
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
                onClick={handleLaunch}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
              />
              Launch
            </button>
          </div>
        </main>
      </div>
  );
}
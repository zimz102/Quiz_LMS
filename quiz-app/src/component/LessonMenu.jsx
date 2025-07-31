import React from "react";


export default function LessonMenu({ selectedLesson, onSelectLesson }) {
    const lessons = Array.from({ length: 9 }, (_, i) => `bai${i + 1}`);
    
    return (
        <div className="flex flex-wrap justify-center gap-3 my-4">
        {lessons.map((lessonId) => (
            <button
            key={lessonId}
            className={`px-4 py-2 rounded font-semibold transition text-white
                ${selectedLesson === lessonId
                    ? "bg-[#00e9f1] text-white shadow"
                    : "bg-sky-400 text-black border border-gray-300 hover:bg-blue-500 hover:text-white"}`}
            onClick={() => onSelectLesson(lessonId)}
            >
            {lessonId.replace("bai", "Bài ")}
            </button>
        ))}
        </div>
    );
}

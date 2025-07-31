import React from "react";

export default function QuestionNavigator({ questions = [], currentQuestionIndex, answers, onNavigate, onSubmit, timeLeft, submitted }) {
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60).toString().padStart(2, "0");
        const sec = (seconds % 60).toString().padStart(2, "0");
        return `${min} : ${sec}`;
    };



    function isQuestionAnswered(q, answers) {
        if (q.type === "multiplechoice") {
            return q.options.some((_, idx) => answers[`${q.id}-${idx}`]);
        }
        if (q.type === "truefalsegroup") {
            return q.items.some((_, idx) => !!answers[`q${q.id}-${idx}`]);
        }
        if (q.type === "fillblank") {
            return q.blanks.some((_, idx) => (answers[`q${q.id}-blank-${idx}`] || "").trim() !== "");
        }
        if (q.type === "matching" || q.type === "multiMatching") {
            return Object.keys(answers[q.id] || {}).length > 0;
        }
        return answers[q.id] !== undefined && answers[q.id] !== null && answers[q.id] !== "";
    }


    function isQuestionCorrect(q, answers) {
        const id = q.id;

        if (q.type === "multiplechoice") {
            const userChoices = q.options.map((_, i) => answers[`${id}-${i}`] ? i : null).filter(i => i !== null);
            return JSON.stringify(userChoices.sort()) === JSON.stringify(q.correctAnswers.sort());
        }

        if (q.type === "fillblank") {
            return q.blanks.every((ans, idx) =>
                (answers[`q${id}-blank-${idx}`] || "").trim().toLowerCase() === ans.trim().toLowerCase()
            );
        }

        if (q.type === "truefalsegroup") {
            return q.items.every((item, idx) =>
                (answers[`q${id}-${idx}`] || "").trim().toLowerCase() === item.answer.trim().toLowerCase()
            );
        }

        if (q.type === "matching") {
            const userMap = answers[id] || {};
            return Object.entries(q.matches).every(([key, val]) => userMap[key] === val);
        }

        if (q.type === "multiMatching") {
            const userMap = answers[id] || {};
            return Object.entries(q.matches).every(([key, correctValues]) => {
                const userValues = userMap[key] || [];
                const sortedUser = userValues.map(v => v.trim().toLowerCase()).sort();
                const sortedCorrect = correctValues.map(v => v.trim().toLowerCase()).sort();
                return JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
            });
        }

        return false;
    }


    return (
        <div className="flex flex-col items-center p-4 space-y-4 border rounded shadow bg-white sticky top-4 self-start w-full">
            {/* Timer and Submit */}
            <div className="flex justify-between w-full items-center">
                <div className="font-semibold text-lg">
                    ⏱ {formatTime(timeLeft)}
                </div>
                <button
                    onClick={onSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Nộp bài
                </button>
            </div>

            {/* Question list */}
            <div className="w-full">
                <p className="font-medium mb-2 text-sm text-gray-700">Danh sách câu hỏi</p>
                <div className="grid grid-cols-5 gap-2">
                    {Array.isArray(questions) && questions.map((q, idx) => {
                        // const isAnswered = isQuestionAnswered(q, answers);
                        // const isActive = currentQuestionIndex === idx;
                        // return (
                        //     <span
                        //         key={q.id}
                        //         onClick={() => onNavigate(idx)}
                        //         className={`w-10 h-10 text-sm rounded border font-semibold transition-all flex items-center justify-center cursor-pointer
                        //                 ${isActive ? "bg-blue-600 text-white border-blue-700" :
                        //                 isAnswered ? "bg-blue-100 text-blue-800 border-blue-400" :
                        //                     "bg-white text-gray-700 border-gray-300"}`}
                        //     >
                        //         {String(idx + 1).padStart(2, "0")}
                        //     </span>


                        // );

                        const isAnswered = isQuestionAnswered(q, answers);
                        const isActive = currentQuestionIndex === idx;
                        const isCorrect = submitted ? isQuestionCorrect(q, answers) : null;

                        let className = "w-10 h-10 text-sm rounded border font-semibold transition-all flex items-center justify-center cursor-pointer ";

                        if (isActive) {
                            className += "bg-blue-600 text-white border-blue-700";
                        } else if (submitted) {
                            className += isCorrect
                                ? "bg-green-100 text-green-800 border-green-400"
                                : "bg-red-100 text-red-800 border-red-400";
                        } else if (isAnswered) {
                            className += "bg-blue-100 text-blue-800 border-blue-400";
                        } else {
                            className += "bg-white text-gray-700 border-gray-300";
                        }

                        return (
                            <span key={q.id} onClick={() => onNavigate(idx)} className={className}>
                                {String(idx + 1).padStart(2, "0")}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

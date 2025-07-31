import React from "react";

export default function MultiMatchingQuestion({ q, submitted, answers, onAnswerChange }) {
    const rawOptions = q?.matches ? Object.values(q.matches).flat() : [];
    const usedOptions = Object.values(answers?.[q?.id] || {}).flat();
    const allOptions = rawOptions.filter(item => !usedOptions.includes(item));

    const handleDrop = (targetKey, droppedItem) => {
        const prev = answers?.[q?.id] || {};
        const currentList = prev[targetKey] || [];

        if (!currentList.includes(droppedItem)) {
            const updated = {
                ...prev,
                [targetKey]: [...currentList, droppedItem],
            };
            onAnswerChange(q.id, updated);
        }
    };

    const handleRemove = (targetKey, itemToRemove) => {
        const prev = answers?.[q?.id] || {};
        const currentList = prev[targetKey] || [];
        const updated = {
            ...prev,
            [targetKey]: currentList.filter(item => item !== itemToRemove),
        };
        onAnswerChange(q.id, updated);
    };

    if (!q || !q.matches) {
        return <div className="text-red-600">Dữ liệu không hợp lệ hoặc thiếu cấu trúc "matches".</div>;
    }

    return (
        <div className="space-y-4">
            <div className="grid gap-2">
                <p className="font-medium mb-1">Kéo thả đáp án vào cột tương ứng:</p>
                <div className="flex flex-wrap gap-2">
                    {allOptions.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-200 px-2 py-1 rounded cursor-move"
                            draggable={!submitted}
                            onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(q.matches).map((targetKey) => (
                    <div key={targetKey}>
                        <h3 className="font-semibold mb-1">{targetKey}</h3>
                        <div
                            className="min-h-[60px] border border-dashed p-2 rounded bg-white"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                const dropped = e.dataTransfer.getData("text/plain");
                                handleDrop(targetKey, dropped);
                            }}
                        >
                            {(answers[q.id]?.[targetKey] || []).map((item, i) => (
                                <div key={i} className="bg-blue-100 p-1 rounded mb-1 flex justify-between items-center">
                                    <span>{item}</span>
                                    {!submitted && (
                                        <span
                                        role="button"
                                        className="ml-2 text-red-500 hover:text-red-700 text-xl leading-none cursor-pointer"
                                        onClick={() => {
                                            const updated = { ...answerMap };
                                            delete updated[left];
                                            onAnswerChange(q.id, updated);
                                        }}
                                        >
                                        &times;
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

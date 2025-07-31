import React from "react";

export default function MultipleChoiceQuestion({ q, submitted, answers, onAnswerChange }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      {q.options?.map((opt, idx) => {
        const key = `${q.id}-${idx}`;
        const isChecked = answers[key] || false;
        const isCorrect = q.correctAnswers.includes(idx);
        const showFeedback = submitted;

        let borderColor = "border";
        let textColor = "text-black";

        if (showFeedback) {
          if (isChecked && isCorrect) {
            borderColor = "border-green-600";
            textColor = "text-green-700";
          } else if (isChecked && !isCorrect) {
            borderColor = "border-red-600";
            textColor = "text-red-700";
          } else if (!isChecked && isCorrect) {
            borderColor = "border-green-600";
            textColor = "text-green-700";
          }
        }

        return (
          <label
            key={idx}
            className={`flex items-center gap-2 ${borderColor} border-2 px-3 py-2 rounded ${textColor}`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              disabled={submitted}
              onChange={(e) => onAnswerChange(key, e.target.checked)}
            />
            <span>{opt}</span>
            {showFeedback && isCorrect && (
              <span className="ml-auto font-bold text-green-600">✓</span>
            )}
            {showFeedback && isChecked && !isCorrect && (
              <span className="ml-auto font-bold text-red-600">✗</span>
            )}
          </label>
        );
      })}
    </div>
  );
}

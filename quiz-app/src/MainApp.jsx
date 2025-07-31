import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "./Card";
import MatchingQuestion from './MatchingQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MultiMatchingQuestion from './MultiMatchingQuestion';
import LessonMenu from './component/LessonMenu';
import QuestionNavigator from './QuestionNavigator';

import Bai1, { tenBai as tenBai1 } from './data/Bai1';
import Bai2, { tenBai as tenBai2 } from './data/Bai2';
import Bai3, { tenBai as tenBai3 } from "./data/Bai3";

export default function MainApp({ user, setUser }) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState("bai1");
    const topRef = useRef(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60 * 40);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (submitted) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [submitted]);

    const lessons = {
        bai1: { data: Bai1, title: tenBai1 },
        bai2: { data: Bai2, title: tenBai2 },
        bai3: { data: Bai3, title: tenBai3 },
    };

    const { data: multipleChoiceQuestions, title: tenBai } = lessons[selectedLesson];

    const handleChange = (questionKey, value) => {
        setAnswers((prev) => ({ ...prev, [questionKey]: value }));
    };

    function scoreMultiMatch(q, answers) {
        const userMap = answers[q.id] || {};
        const correctMap = q.matches;

        const isCorrect = Object.entries(correctMap).every(([key, correctValues]) => {
            const userValues = userMap[key] || [];
            if (!Array.isArray(userValues)) return false;

            const sortedUser = userValues.map(v => v.trim().toLowerCase()).sort();
            const sortedCorrect = correctValues.map(v => v.trim().toLowerCase()).sort();

            return JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
        });

        return isCorrect ? 1 : 0;
    }

    const calculateScore = () => {
        let total = 0;

        multipleChoiceQuestions.forEach((q) => {
            if (q.type === "multiplechoice") {
                const userChoices = q.options.map((_, i) => answers[`${q.id}-${i}`] ? i : null).filter(i => i !== null);
                const isCorrect = JSON.stringify(userChoices.sort()) === JSON.stringify(q.correctAnswers.sort());
                if (isCorrect) total += 1;

            } else if (q.type === "fillblank") {
                const correct = q.blanks;
                const userInputs = correct.map((_, idx) => answers[`q${q.id}-blank-${idx}`] || "");
                const isAllCorrect = userInputs.every((ans, idx) =>
                    ans.trim().toLowerCase() === correct[idx].trim().toLowerCase()
                );
                if (isAllCorrect) total += 1;

            } else if (q.type === "truefalsegroup") {
                const isGroupCorrect = q.items.every((item, idx) => {
                    const userAns = (answers[`q${q.id}-${idx}`] || "").trim().toLowerCase();
                    const correctAns = item.answer.trim().toLowerCase();
                    return userAns === correctAns;
                });
                if (isGroupCorrect) total += 1;

            } else if (q.type === "matching") {
                const userMap = answers[q.id] || {};
                const isMatchingCorrect = Object.entries(q.matches).every(([key, val]) =>
                    userMap[key] === val
                );
                if (isMatchingCorrect) total += 1;
            } else if (q.type === "multiMatching") {
                total += scoreMultiMatch(q, answers);
            }
        });

        return total;
    };

    const handleSubmit = () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setSubmitted(true);
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSelectLesson = (lessonKey) => {
        setSelectedLesson(lessonKey);
        setAnswers({});
        setSubmitted(false);
        setScore(0);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null); // sẽ render lại Login
    };

    return (
        <div ref={topRef} className="p-4 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-center mb-4">BÀI KIỂM TRA</h1>
            {submitted && (
                <div className="text-center mb-4">
                    <p className="text-lg font-bold text-green-700">
                        ✅ Điểm của bạn: {score} / {multipleChoiceQuestions.length}
                    </p>
                </div>
            )}

            <LessonMenu selectedLesson={selectedLesson} onSelectLesson={handleSelectLesson} />

            <h2 className="text-xl font-bold text-center text-green-500 mb-6">{tenBai}</h2>

            <div className="flex flex-col lg:flex-row lg:items-start gap-10 pr-20 pl-5 w-screen">
                <div className="flex-1 space-y-6">
                    {multipleChoiceQuestions.map((q, index) => (
                        <Card key={q.id} data-question-id={q.id} className="scroll-mt-20"
                            highlighted={Object.keys(answers).some((key) => key.startsWith(`q${q.id}-`) || key === `${q.id}`)}>

                            <CardContent className="p-4 space-y-3">
                                <p className="font-semibold whitespace-pre-line">Câu {q.id}: {q.question}</p>
                                {q.type === "truefalsegroup" ? (
                                    <div className="space-y-4">
                                        {q.items.map((item, idx) => {
                                            const questionKey = `q${q.id}-${idx}`;
                                            return (
                                                <div key={idx} className="border p-3 rounded">
                                                    <p className="font-medium">{idx + 1}) {item.text}</p>
                                                    <div className="flex gap-6 mt-2">
                                                        {['đúng', 'sai'].map((opt) => (
                                                            <label key={opt} className={`flex items-center gap-2 rounded px-2 py-1 
                                ${submitted && answers[questionKey] === opt ? 'bg-blue-100 border border-blue-500' : ''}`}>
                                                                <input
                                                                    type="radio"
                                                                    name={questionKey}
                                                                    value={opt}
                                                                    disabled={submitted}
                                                                    checked={answers[questionKey] === opt}
                                                                    onChange={(e) => handleChange(questionKey, e.target.value)}
                                                                />
                                                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                                            </label>
                                                        ))}
                                                    </div>
                                                    {submitted && (
                                                        <p className={`mt-2 font-semibold ${(answers[questionKey] || "").trim().toLowerCase() === item.answer.trim().toLowerCase()
                                                                ? "text-green-600"
                                                                : "text-red-600"
                                                            }`}>
                                                            {(answers[questionKey] || "").trim().toLowerCase() === item.answer.trim().toLowerCase()
                                                                ? "✓ Đúng"
                                                                : `✗ Sai (Đáp án đúng: ${item.answer})`}
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : q.type === "fillblank" ? (
                                    <div className="space-y-2">
                                        {q.blanks.map((_, idx) => {
                                            const key = `q${q.id}-blank-${idx}`;
                                            return (
                                                <div key={key} className="flex items-center gap-3">
                                                    <label className="w-32 font-medium">Chỗ trống ({idx + 1}):</label>
                                                    <input
                                                        type="text"
                                                        className="border px-2 py-1 rounded w-full"
                                                        disabled={submitted}
                                                        value={answers[key] || ""}
                                                        onChange={(e) => handleChange(key, e.target.value)}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : q.type === "matching" ? (
                                    <MatchingQuestion q={q} submitted={submitted} answers={answers} onAnswerChange={(id, value) => setAnswers((prev) => ({ ...prev, [id]: value }))} />
                                ) : q.type === "multiMatching" ? (
                                    <MultiMatchingQuestion q={q} submitted={submitted} answers={answers} onAnswerChange={(id, value) => setAnswers((prev) => ({ ...prev, [id]: value }))} />
                                ) : q.type === "multiplechoice" ? (
                                    <MultipleChoiceQuestion q={q} submitted={submitted} answers={answers} onAnswerChange={handleChange} />
                                ) : null}
                            </CardContent>
                        </Card>
                    ))}
                </div>

{/* Question Navigator */}
                <div className="sticky top-4 w-[280px] shrink-0 self-start">
                    <QuestionNavigator
                        questions={multipleChoiceQuestions}
                        currentQuestionIndex={currentQuestionIndex}
                        answers={answers}
                        onNavigate={(index) => {
                            setCurrentQuestionIndex(index);
                            const el = document.querySelector(`[data-question-id="${multipleChoiceQuestions[index].id}"]`);
                            if (el) {
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }}
                        onSubmit={handleSubmit}
                        timeLeft={timeLeft}
                        submitted={submitted}
                    />
                    
                    <p className="text-xl mb-1 mt-8 mb-8 text-[#1EF906] mt-2">👤: {user}</p>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                        Đăng xuất
                    </button>
                </div>
            </div>
        </div>
    );
}

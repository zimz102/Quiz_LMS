import React, { useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export default function MatchingQuestion({ q, submitted, answers, onAnswerChange }) {
  const leftItems = Object.keys(q.matches);
  // const allRightItems = Object.values(q.matches);
  const allRightItems = useMemo(() => {
    return [...Object.values(q.matches), ...(q.distractors || [])];
  }, [q]);

  const answerMap = answers[q.id] || {};

  const getAnswer = (left) => answerMap[left] || '';

  const rightItems = useMemo(() => {
    // Đếm số lượng mỗi đáp án trong toàn bộ dữ liệu
    const fullCount = allRightItems.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    // Đếm số lượng đã dùng trong answer hiện tại
    const usedValues = Object.values(answerMap);
    const usedCount = usedValues.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    // Tính toán số lượng còn lại
    const remaining = [];
    for (const val in fullCount) {
      const available = fullCount[val] - (usedCount[val] || 0);
      for (let i = 0; i < available; i++) {
        remaining.push(val);
      }
    }

    return shuffle(remaining);
  }, [q.id, JSON.stringify(answerMap)]);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    // Lấy giá trị thật (vì draggableId là `${value}-${index}`)
    const realValue = draggableId.split('-').slice(0, -1).join('-');

    if (destination.droppableId.startsWith('drop-')) {
      const leftKey = destination.droppableId.replace('drop-', '');
      const updated = { ...answerMap };

      // Xóa khỏi các vị trí trùng nếu có
      for (const key in updated) {
        if (updated[key] === realValue) {
          delete updated[key];
        }
      }

      updated[leftKey] = realValue;
      onAnswerChange(q.id, updated);
    }
  };

  return (
    <div className="space-y-3">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-2 gap-6">
          {/* Danh sách đáp án bên phải */}
          <Droppable droppableId="choices">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
                {rightItems.map((right, index) => (
                  <Draggable key={`${right}-${index}`} draggableId={`${right}-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-gray-100 border rounded px-3 py-2"
                      >
                        {right}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* Các cột bên trái */}
          {leftItems.map((left) => (
            <div key={left} className="p-2 border rounded bg-white">
              <p className="font-semibold text-black mb-2">{left}</p>
              <Droppable droppableId={`drop-${left}`} direction="vertical">
                {(provided) => {
                  const answer = getAnswer(left);
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-[40px] border-dashed border rounded p-2"
                    >
                      {answer && (
                        <div className="flex justify-between items-center text-sm text-gray-700">
                          <span>{answer}</span>
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
                      )}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      {/* Hiển thị kết quả sau khi nộp bài */}
      {submitted && (
        <div className="mt-2 space-y-1 text-sm">
          {leftItems.map((left) => {
            const correct = q.matches[left];
            const user = getAnswer(left);
            const isCorrect = user === correct;
            return (
              <p key={left} className={isCorrect ? "text-green-600" : "text-red-600"}>
                {left} → {user || "(trống)"} {isCorrect ? "✓" : `✗ (Đúng: ${correct})`}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Shuffle utility
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

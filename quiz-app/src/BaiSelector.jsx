import React from 'react';

export default function BaiSelector({ baiList, selectedBai, onSelect }) {
    return (
        <div className="flex gap-4 justify-center my-4">
        {baiList.map((bai) => (
            <button
            key={bai.id}
            onClick={() => onSelect(bai)}
            className={`px-4 py-2 rounded ${
                selectedBai.id === bai.id ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            >
            Bài {bai.id}
            </button>
        ))}
        </div>
    );
}

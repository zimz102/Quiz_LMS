// src/Card.jsx;
import React from 'react'
// export function Card({ children }) {
//     return (
//       <div className="border rounded-lg shadow p-4 bg-white my-4">{children}</div>
//     );
//   }

// export function Card({ children, ...props }) {
//   return (
//     <div
//       className="border rounded-lg shadow p-4 bg-white my-4"
//       {...props}
//     >
//       {children}
//     </div>
//   );
// }

export function Card({ children, highlighted = false, ...props }) {
  return (
    <div
      {...props}
      className={`border rounded-lg shadow p-4 bg-white my-4 ${
        highlighted ? "bg-[#00e9f1]" : "border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}
  
  export function CardContent({ children }) {
    return <div className="mt-2">{children}</div>;
  }
  
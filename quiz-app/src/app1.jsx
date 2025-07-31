// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { Card, CardContent } from "./Card";
import MatchingQuestion from './MatchingQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
// App.jsx
import Bai1, { tenBai as tenBai1 } from './data/Bai1';
import Bai2, { tenBai as tenBai2 } from './data/Bai2';
import BaiSelector from './BaiSelector';
import LessonMenu from './component/LessonMenu';
import MultiMatchingQuestion from './MultiMatchingQuestion';
// import React, { useState, useRef } from "react";
import React, { useState, useEffect, useRef } from 'react';

import QuestionNavigator from './QuestionNavigator';



// Môn Kiến Trúc





export default function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState("bai1");
  const topRef = useRef(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 40); // 40 phút

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


    
  };
  

  // const multipleChoiceQuestions = Bai1;
  const { data: multipleChoiceQuestions, title: tenBai } = lessons[selectedLesson];



  // const multipleChoiceQuestions = [
  //   // Câu 1–6 (placeholder), đã được thêm vào trước đó nếu cần
  //   // Câu 7: fillblank với textbox
  // {
  //   "id": 1,
  //   "type": "multiplechoice",
  //   "question": "Mục tiêu của bảo trì phòng ngừa là gì?",
  //   "options": [
  //     "Tối ưu hóa giao diện",
  //     "Thêm chức năng mới",
  //     "Kiểm tra tính bảo mật",
  //     "Ngăn ngừa lỗi có thể phát sinh"
  //   ],
  //   "correctAnswers": [3]
  // },
  // {
  //   "id": 2,
  //   "type": "multiplechoice",
  //   "question": "Bảo trì thích nghi (Adaptive Maintenance) là gì?",
  //   "options": [
  //     "Cải thiện giao diện người dùng sao cho phù hợp các chuẩn thiết kế UI/UX",
  //     "Cập nhật phần mềm sao cho hoạt động ổn định trên môi trường mới",
  //     "Tối ưu thuật toán và cấu trúc dữ liệu để đáp ứng các yêu cầu thay đổi từ phía đối tác",
  //     "Loại bỏ chức năng cũ, và bổ sung thêm các chức năng mới cho phần mềm"
  //   ],
  //   "correctAnswers": [1]
  // },
  // {
  //   "id": 3,
  //   "type": "multiplechoice",
  //   "question": "Một phần mềm được đánh giá là \"dễ bảo trì\" khi nào?",
  //   "options": [
  //     "Có nhiều tính năng",
  //     "Có giao diện đẹp, được lập trình bởi nhiều người",
  //     "Có cấu trúc rõ ràng, dễ hiểu, dễ thay đổi",
  //     "Có mã nguồn ngắn"
  //   ],
  //   "correctAnswers": [2]
  // },
  // {
  //   "id": 4,
  //   "type": "multiplechoice",
  //   "question": "Trong quy trình bảo trì phần mềm, bước đầu tiên thường là gì?",
  //   "options": [
  //     "Kiểm thử hệ thống",
  //     "Viết mã mới",
  //     "Triển khai phần mềm mới",
  //     "Phân tích yêu cầu thay đổi"
  //   ],
  //   "correctAnswers": [3]
  // },
  // {
  //   "id": 5,
  //   "type": "multiplechoice",
  //   "question": "Lập trình viên nên làm gì trước khi thay đổi mã trong quá trình bảo trì?",
  //   "options": [
  //     "Đổi tên project",
  //     "Hiểu rõ nguyên nhân và tác động của thay đổi",
  //     "Sửa ngay mã nguồn để tiết kiệm thời gian",
  //     "Xóa mã cũ"
  //   ],
  //   "correctAnswers": [1]
  // },
  // {
  //   "id": 6,
  //   "type": "fillblank",
  //   "question": `DevOps là sự kết hợp giữa __(1)___ và __(2)___, nhằm tối ưu quy trình phát triển phần mềm. Trong đó, nhóm __(3)__ chịu trách nhiệm phát triển, trong khi nhóm __(4)___ chịu trách nhiệm về cơ sở hạ tầng, triển khai ứng dụng, giám sát ứng dụng vận hành và đảm bảo ứng dụng hoạt động ổn định, hiệu quả trên môi trường vận hành.\nBiết các thông tin có thể điền bao gồm: ops, dev, sec, kiểm thử, lập trình, phát triển, vận hành
  //   `,
  //   "blanks": ["dev", "ops", "phát triển", "vận hành"]
  // },
  // {
  //   "id": 7,
  //   "type": "fillblank",
  //   "question": "Bảo trì nhằm sửa lỗi được gọi là ____(1)_____. Bảo trì nhằm thích nghi với môi trường mới còn được gọi là _____(2). Bảo trì nhằm giúp phần mềm tránh được lỗi tiềm ẩn, còn được gọi là ____(3)____ \nBiết các thông tin có thể điền bao gồm: bảo trì hiệu chỉnh, bảo trì thích nghi, bảo trì tiến hóa , bảo trì phòng ngừa",
  //   "blanks": ["bảo trì hiệu chỉnh", "bảo trì thích nghi", "bảo trì phòng ngừa"]
  // },
  // {
  //   "id": 8,
  //   "type": "truefalsegroup",
  //   "question": "Các phát biểu sau đúng hay sai?",
  //   "items": [
  //     {
  //       "text": "Theo dõi phiên bản mới của các thư viện phụ thuộc dự án và cập nhật định kỳ để ngăn ngừa lỗ hổng bảo mật, tránh các sự cố có thể xảy ra là ví dụ về bảo trì phòng ngừa (Preventive maintenance)",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Sửa lỗi chức năng tìm kiếm do trả về kết quả sai vì khi người dùng sử dụng là ví dụ về bảo trì thích nghi (Adaptive maintenance)",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "Di chuyển ứng dụng sang hạ tầng mới (hạ tầng đám mây) là ví dụ về bảo trì sửa lỗi (Corrective Maintenance)",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "Nâng cấp tính năng tìm kiếm để tối ưu về mặt hiệu năng là một ví dụ về bảo trì tiến hóa (evolutionary maintenance)",
  //       "answer": "đúng"
  //     }
  //   ]
  // },
  // {
  //   "id": 9,
  //   "type": "multiplechoice",
  //   "question": "Bảo trì hiệu chỉnh (Corrective Maintenance) nhằm mục đích gì?",
  //   "options": [
  //     "Cập nhật lại bản thiết kế phần mềm",
  //     "Sửa lỗi sau khi phần mềm được triển khai đến người dùng cuối",
  //     "Hiệu chỉnh lại các thông tin về kế hoạch triển khai dự án",
  //     "Hiệu chỉnh phần mềm để nâng cao hiệu suất trước khi phần mềm được triển khai đến người dùng cuối."
  //   ],
  //   "correctAnswers": [1]
  // },
  // {
  //   "id": 10,
  //   "type": "multiplechoice",
  //   "question": "Loại bảo trì nào liên quan đến việc thêm tính năng mới dựa trên phản hồi người dùng?",
  //   "options": [
  //     "Bảo trì thích nghi",
  //     "Bảo trì phòng ngừa",
  //     "Bảo trì tiến hóa",
  //     "Bảo trì hiệu chỉnh"
  //   ],
  //   "correctAnswers": [2]
  // },
  // {
  //   "id": 11,
  //   "type": "truefalsegroup",
  //   "question": "Các phát biểu sau đúng hay sai?",
  //   "items": [
  //     {
  //       "text": "Bảo trì phần mềm là quá trình duy trì và cải tiến phần mềm sau khi triển khai",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Một trong các lợi ích quan trọng của bảo trì phần mềm là đảm bảo phần mềm hoạt động ổn định, lâu dài, và nâng cao trải nghiệm người dùng",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Bảo trì phần mềm được tiến hành trước khi phần mềm được triển khai đến môi trường người dùng",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "Việc đảm bảo phần mềm hoạt động đúng và ổn định sau khi đưa vào sử dụng là trách nhiệm của khách hàng, và người dùng, không thuộc trách nhiệm của nhóm vận hành.",
  //       "answer": "sai"
  //     }
  //   ]
  // },
  // {
  //   "id": 12,
  //   "type": "truefalsegroup",
  //   "question": "Các phát biểu sau đúng hay sai?",
  //   "items": [
  //     {
  //       "text": "Theo dõi phiên bản mới của các thư viện phụ thuộc dự án và cập nhật định kỳ để ngăn ngừa lỗ hổng bảo mật, tránh các sự cố có thể xảy ra là ví dụ về bảo trì phòng ngừa (Preventive maintenance)",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Di chuyển ứng dụng sang hạ tầng mới (hạ tầng đám mây) là ví dụ về bảo trì sửa lỗi (Corrective Maintenance)",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "Sửa lỗi chức năng tìm kiếm do trả về kết quả sai vì khi người dùng sử dụng là ví dụ về bảo trì thích nghi (Adaptive maintenance)",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "Nâng cấp tính năng tìm kiếm để tối ưu về mặt hiệu năng là một ví dụ về bảo trì tiến hóa (evolutionary maintenance)",
  //       "answer": "đúng"
  //     }
  //   ]
  // },
  // {
  //   "id": 13,
  //   "type": "matching",
  //   "question": "Kéo đúng cặp \"Loại bảo trì\" với \"Mục đích chính\"?",
  //   "matches": {
  //     "Adaptive": "Thích nghi môi trường mới",
  //     "Perfective": "Cải thiện tính năng",
  //     "Corrective": "Sửa lỗi",
  //     "Preventive": "Ngăn ngừa lỗi tiềm ẩn"
  //   }
  // },
  // {
  //   "id": 14,
  //   "type": "multiplechoice",
  //   "question": "Một trong các đặc điểm khác biệt quan trọng của DevOps so với quy trình phần mềm truyền thống là gì?",
  //   "options": [
  //     "Triển khai thủ công các công đoạn trong quy trình phần mềm",
  //     "Không cần quản lý lỗi các lỗi là không thể xảy ra khi tổ chức/doanh nghiệp áp dụng DevOps",
  //     "Không cần kiểm thử phần mềm một cách nghiêm ngặt",
  //     "Tự động hóa quy trình với sự trợ giúp của chuỗi các công cụ, công nghệ hiện đại"
  //   ],
  //   "correctAnswers": [3]
  // },
  // {
  //   "id": 15,
  //   "type": "fillblank",
  //   "question": "Trong quy trình DevOps, giai đoạn ____(1)_____ bao gồm việc lập kế hoạch phát triển các chức năng và kế hoạch phát hành cho lần lặp chu trình tiếp theo. DevOps giúp rút ngắn ___(2)______ để phần mềm được phát hành nhanh hơn, và kết nối hai vai trò chính là phát triển và ____(3)_____ trong chu trình.\nBiết các thông tin có thể điền bao gồm: lập kế hoạch, chu kỳ phát hành, vận hành, viết code",
  //   "blanks": ["lập kế hoạch", "chu kỳ phát hành", "vận hành"]
  // },
  // {
  //   "id": 16,
  //   "type": "truefalsegroup",
  //   "question": "Các phát biểu sau đúng hay sai?",
  //   "items": [
  //     {
  //       "text": "Vấn đề tam giác thép được hiểu là: sự cố định về tập yêu cầu sẽ dẫn đến lịch biểu cố định, ngân quỹ và các công nghệ cũng được cố định theo lịch biểu. Các thành viên tham gia triển khai dự án phải bám sát kế hoạch, liên tục bị thúc ép bởi deadline, chỉ cần thay đổi yêu cầu khách hàng, hoặc không hoàn thành công việc đúng tiến độ, dự án có thể dẫn đến thất bại",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Các quy trình phần mềm lặp không loại bỏ được vấn đề về tam giác thép",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Mô hình quy trình thác nước (waterfall model) loại bỏ hoàn toàn được vấn đề về tam giác thép (ion triangle)",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "Các quy trình phần mềm linh hoạt không loại bỏ được vấn đề tam giác thép",
  //       "answer": "đúng"
  //     }
  //   ]
  // },
  // {
  //   "id": 17,
  //   "type": "multiplechoice",
  //   "question": "Các công cụ thường dùng trong DevOps là những công cụ nào? (chọn nhiều đáp án đúng)",
  //   "options": [
  //     "Git/GitHub, GitLab, Bitbucket",
  //     "Jenkins, Docker, K8s",
  //     "Microsoft excel, Microsoft word",
  //     "Maven/Gradle, Nexus, SonarQube"
  //   ],
  //   "correctAnswers": [0, 1, 3]
  // },
  // {
  //   "id": 18,
  //   "type": "matching",
  //   "question": "Kéo mô tả vào đúng giai đoạn tương ứng của DevOps?",
  //   "matches": {
  //     "Monitoring": "Theo dõi hệ thống vận hành",
  //     "Building": "Biên dịch mã nguồn",
  //     "Coding": "Viết mã",
  //     "Testing": "Kiểm thử",
  //     "Deploying": "Triển khai lên môi trường vận hành"
  //   }
  // },
  // {
  //   "id": 19,
  //   "type": "matching",
  //   "question": "Kéo công cụ vào đúng nhóm chức năng?",
  //   "matches": {
  //     "CI/CD pipeline": "Jenkins",
  //     "Quản lý mã nguồn": "Git",
  //     "Phân tích mã nguồn tĩnh": "SonarQube",
  //     "Container hóa": "Docker"
  //   }
  // },
  // {
  //   "id": 20,
  //   "type": "multiplechoice",
  //   "question": "Vận hành phần mềm theo góc nhìn của người dùng cuối là gì?",
  //   "options": [
  //     "Cách người dùng tương tác với hệ thống để đạt mục tiêu",
  //     "Quá trình cải tiến hệ thống",
  //     "Quá trình sửa lỗi trong phần mềm",
  //     "Tìm lỗi logic"
  //   ],
  //   "correctAnswers": [0]
  // },
  // {
  //   "id": 21,
  //   "type": "multiplechoice",
  //   "question": "Yếu tố nào quan trọng nhất giúp phần mềm dễ bảo trì?",
  //   "options": [
  //     "Dùng ít dòng mã",
  //     "Dùng nhiều thư viện ngoài",
  //     "Nhiều file cấu hình",
  //     "Có cấu trúc mã rõ ràng và được chú thích tốt"
  //   ],
  //   "correctAnswers": [3]
  // },
  // {
  //   "id": 22,
  //   "type": "multiplechoice",
  //   "question": "DevOps kết hợp chặt chẽ giữa ______?",
  //   "options": [
  //     "Kinh doanh và marketing",
  //     "Kiểm thử và bảo trì",
  //     "Phát triển và vận hành",
  //     "Phân tích và thiết kế"
  //   ],
  //   "correctAnswers": [2]
  // },
  // {
  //   "id": 23,
  //   "type": "truefalsegroup",
  //   "question": "Các phát biểu sau đúng hay sai?",
  //   "items": [
  //     {
  //       "text": "Với Agile, ROI tăng, do giá trị đặc trưng của sản phẩm tăng theo thời gian",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Agile dựa trên nguyên tắc kinh tế: “The later we deliver a feature, the sooner our customers will pay us for it”.",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "DevOps có đầy đủ các lợi thế của các mô hình quy trình Agile",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Agile dựa trên nguyên tắc kinh tế: “The sooner we deliver a feature, the sooner our customers will pay us for it”.",
  //       "answer": "đúng"
  //     }
  //   ]
  // },
  // {
  //   "id": 24,
  //   "type": "multiplechoice",
  //   "question": "Mô hình quy trình thác nước được giới thiệu bởi ai? vào năm nào?",
  //   "options": [
  //     "Barry Boehm (1988)",
  //     "Winston W. Royce (1970)",
  //     "IBM (1967)",
  //     "Frederick P. Brooks (1975)"
  //   ],
  //   "correctAnswers": [1]
  // },
  // {
  //   "id": 25,
  //   "type": "matching",
  //   "question": "Kéo đúng mô hình phát triển phần mềm với đặc điểm phù hợp?",
  //   "matches": {
  //     "DevOps": "Tự động hóa & triển khai liên tục",
  //     "RUP": "Lặp hai chiều và hướng đối tượng",
  //     "Scrum": "Product backlog được kiểm soát bởi Product Owner",
  //     "Spiral": "Bổ sung thêm phân tích rủi ro"
  //   }
  // },
  // {
  //   "id": 26,
  //   "type": "multiplechoice",
  //   "question": "Quá trình đảm bảo phần mềm hoạt động ổn định sau triển khai gọi là gì?",
  //   "options": [
  //     "Phát triển phần mềm",
  //     "Vận hành phần mềm",
  //     "Thiết kế hệ thống",
  //     "Kiểm thử phần mềm"
  //   ],
  //   "correctAnswers": [1]
  // },
  // {
  //   "id": 27,
  //   "type": "fillblank",
  //   "question": "Bước đầu tiên trong quy trình DevOps là __(1)__, bước cuối cùng trong quy trình DevOps là __(2)__. Công cụ hỗ trợ cho bước đầu tiên là __(3)__ công cụ hỗ trợ cho bước cuối cùng là __(4)__. DevOps giúp cải thiện thời gian phát hành phần mềm bằng cách tự động hóa quy trình build và deploy.\nBiết các thông tin có thể điền bao gồm: lập kế hoạch, giám sát hệ thống vận hành, jira, elk",
  //   "blanks": ["Lập kế hoạch", "Giám sát hệ thống vận hành", "Jira", "ELK"]
  // },
  // {
  //   "id": 28,
  //   "type": "matching",
  //   "question": "Kéo đúng mô tả vào giai đoạn tương ứng trong quy trình DevOps?",
  //   "matches": {
  //     "Test": "Kiểm thử tự động",
  //     "Plan": "Xác định yêu cầu và lộ trình",
  //     "Build": "Biên dịch và đóng gói ứng dụng",
  //     "Release": "Phát hành sản phẩm"
  //   }
  // },
  // {
  //   "id": 29,
  //   "type": "truefalsegroup",
  //   "question": "Các phát biểu sau đúng hay sai?",
  //   "items": [
  //     {
  //       "text": "RUP, Spiral là các mô hình quy trình phần mềm thuộc loại quy trình lặp (iterative processes)",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Scrum và Kanban thuộc loại quy trình phần mềm linh hoạt (Adaptive Processes)",
  //       "answer": "đúng"
  //     },
  //     {
  //       "text": "Scrum và Kanban thuộc loại quy trình phần mềm dự đoán (predictive processes)",
  //       "answer": "sai"
  //     },
  //     {
  //       "text": "RUP, Spiral là các mô hình quy trình phần mềm thuộc loại quy trình dự đoán (predictive processes)",
  //       "answer": "sai"
  //     }
  //   ]
  // },
  // {
  //   "id": 30,
  //   "type": "multiplechoice",
  //   "question": "Các quy trình phần mềm theo lịch sử phát triển có thể chia thành mấy loại?",
  //   "options": [
  //     "3",
  //     "5",
  //     "4",
  //     "2"
  //   ],
  //   "correctAnswers": [0]
  // },
  // {
  //   "id": 31,
  //   "type": "matching",
  //   "question": "So sánh DevOps với Waterfall, DevOps với Agile, hãy kéo các đặc điểm tương ứng?",
  //   "matches": {
  //     "Waterfall": "Tuần tự từng giai đoạn, chậm đổi mới",
  //     "DevOps": "Triển khai liên tục, phản hồi nhanh",
  //     "Agile": "Tập trung vào phát triển phần mềm linh hoạt"
  //   }
  // }
  // ];


  const handleChange = (questionKey, value) => {
    setAnswers((prev) => ({ ...prev, [questionKey]: value }));
  };

  const [score, setScore] = useState(0);

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
      }else if (q.type === "multiMatching") {
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
  

  return (
    <div ref={topRef} className="p-4 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">BÀI KIỂM TRA</h1>
      {submitted && (
        <div className="text-center mt-2">
          <p className="text-lg font-bold text-green-700">
            ✅ Điểm của bạn: {score} / {multipleChoiceQuestions.length}
          </p>
        </div>
      )}

      
      {/* Menu selector */}
        <LessonMenu
          selectedLesson={selectedLesson}
          onSelectLesson={(lesson) => {
            setSelectedLesson(lesson);
            setAnswers({});
            setSubmitted(false);
          }}
        />


      <h2 className="text-xl font-bold text-center text-green-500">{tenBai}</h2>

      {multipleChoiceQuestions.map((q) => (
        console.log("Q:", q),
        <Card key={q.id}>
          <CardContent className="p-4 space-y-3">
            <p className="font-semibold text-blank whitespace-pre-line">Câu {q.id}: {q.question}</p>
            {q.type === "truefalsegroup" ? (
              <div className="space-y-4">
                {q.items.map((item, idx) => {
                  const questionKey = `q${q.id}-${idx}`;
                  return (
                    <div key={idx} className="border p-3 rounded">
                      <p className="font-medium">{idx + 1}) {item.text}</p>
                      <div className="flex gap-6 mt-2">
                        {["đúng", "sai"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2">
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
                        <p className={`mt-2 font-semibold ${
                          (answers[questionKey] || "").trim().toLowerCase() === item.answer.trim().toLowerCase()
                            ? "text-green-600"
                            : "text-red-600"
                        }`}>
                          {
                            (answers[questionKey] || "").trim().toLowerCase() === item.answer.trim().toLowerCase()
                              ? "✓ Đúng"
                              : `✗ Sai (Đáp án đúng: ${item.answer})`
                          }
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : q.type === "fillblank" ? (
              <div className="space-y-2">
                {q.blanks.map((correct, idx) => {
                  const key = `q${q.id}-blank-${idx}`;
                  const userInput = answers[key] || "";
                  const isCorrect = submitted && userInput.trim().toLowerCase() === correct.trim().toLowerCase();
                  return (
                    <div key={key} className="flex items-center gap-3">
                      <label className="w-32 font-medium">Chỗ trống ({idx + 1}):</label>
                      <input
                        type="text"
                        className="border px-2 py-1 rounded w-full"
                        disabled={submitted}
                        value={userInput}
                        onChange={(e) => handleChange(key, e.target.value)}
                      />
                      {submitted && (
                        <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                          {isCorrect ? "✓" : `✗ (${correct})`}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) 
            : q.type === "matching" ? (
              <MatchingQuestion
                q={q}
                submitted={submitted}
                answers={answers}
                onAnswerChange={(id, value) =>
                  setAnswers((prev) => ({ ...prev, [id]: value }))
                }
              />
            ) : q.type === "multiMatching" ? (
              <MultiMatchingQuestion
                q={q}
                submitted={submitted}
                answers={answers}
                onAnswerChange={(id, value) =>
                  setAnswers((prev) => ({ ...prev, [id]: value }))
                }
              />
            ) :q.type === "multiplechoice" ? (
              <MultipleChoiceQuestion
                q={q}
                submitted={submitted}
                answers={answers}
                onAnswerChange={handleChange}
              />
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options?.map((opt, idx) => (
                  <label key={idx} className="flex items-center gap-2 border px-3 py-2 rounded text-blank">
                    <input
                      type="checkbox"
                      checked={answers[`${q.id}-${idx}`] || false}
                      disabled={submitted}
                      onChange={(e) => handleChange(`${q.id}-${idx}`, e.target.checked)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ) 
            }
          </CardContent>
        </Card>
      ))}

      <div className="text-center">
        {!submitted ? (
          <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={handleSubmit}>
            Nộp bài
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-lg font-semibold text-blue-700">Đã hoàn tất. Hãy xem lại kết quả bên trên!</p>
            <p className="text-xl font-bold text-green-700">Điểm của bạn: {score} / {multipleChoiceQuestions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

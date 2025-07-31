
const Bai2 = [
    {
        "id": 1,
        "type": "multiplechoice",
        "question": "Kỹ thuật nào sau đây thuộc nhóm thu thập yêu cầu?",
        "options": [
            "UML modeling",
            "Questionnaire",
            "Scrum planning",
            "Pair programming"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 2,
        "type": "multiplechoice",
        "question": "Kỹ thuật quan sát (observation) đặc biệt hiệu quả khi:",
        "options": [
            "Dựa trên có sẵn các tài liệu chi tiết",
            "Nhóm phát triển dùng mô hình Waterfall",
            "Người dùng không thể diễn đạt yêu cầu",
            "Có hệ thống cũ để tái sử dụng"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 3,
        "type": "multiplechoice",
        "question": "Phân loại yêu cầu nào KHÔNG phải là NFR?",
        "options": [
            "Tính sẵn sàng",
            "Đăng nhập hệ thống",
            "Thời gian phản hồi",
            "Tính bảo mật"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 4,
        "type": "multiplechoice",
        "question": "Kỹ thuật nào KHÔNG phải là phương pháp elicitation?",
        "options": [
            "Logging",
            "Focus Group",
            "Workshop",
            "Brainstorming"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 5,
        "type": "multiplechoice",
        "question": "Yêu cầu “Dữ liệu phải được mã hóa” thuộc loại nào?",
        "options": [
            "Không phải yêu cầu hệ thống",
            "Vừa FR vừa NFR",
            "FR",
            "NFR"
        ],
        "correctAnswers": [3]
    },
    {
        "id": 6,
        "type": "multiplechoice",
        "question": "“Mean Time To Repair” là chỉ số dùng để đo:",
        "options": [
            "Availability",
            "Security",
            "Testability",
            "Portability"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 7,
        "type": "multiplechoice",
        "question": "Tại sao cần mô tả rõ Stimulus và Environment trong quality scenario?",
        "options": [
            "Để hỗ trợ debugging",
            "Để dễ dùng lại mã",
            "Để mô phỏng đúng ngữ cảnh xảy ra sự kiện",
            "Để giảm chi phí phân tích"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 8,
        "type": "multiplechoice",
        "question": "Tại sao “response measure” lại quan trọng trong NFR?",
        "options": [
            "Vì là tiêu chí để kiểm thử hệ thống",
            "Vì nó là phần để viết báo cáo",
            "Vì là thông số của UI",
            "Vì giúp stakeholder hiểu hệ thống làm gì"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 9,
        "type": "multiplechoice",
        "question": "Sự khác nhau giữa Use Case và Quality Scenario là:",
        "options": [
            "Scenario hoàn toàn không được sử dụng trong các dự án phát triển phần mềm theo phương pháp Agile",
            "Use Case mô tả chức năng, Scenario mô tả yêu cầu phi chức năng",
            "Use Case được dùng cho người dùng cuối, còn Scenario chỉ áp dụng cho quản trị viên hệ thống",
            "Use Case không đòi hỏi tiêu chí đo lường chi tiết nào trong tài liệu đặc tả"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 10,
        "type": "multiplechoice",
        "question": "“Trade-off” giữa các thuộc tính chất lượng là gì?",
        "options": [
            "Việc đánh đổi giữa việc bổ sung thêm chức năng mới và toàn bộ ngân sách phát triển của dự án xuyên suốt nhiều giai đoạn khác nhau",
            "Quyết định ưu tiên một thuộc tính này hơn thuộc tính kia khi có xung đột",
            "Chuỗi biện pháp kỹ thuật nhằm liên tục cải thiện hiệu năng bằng cách tối ưu cả tài nguyên phần cứng lẫn cấu trúc phần mềm trong môi trường thực thi",
            "Quy trình thử nghiệm có kiểm soát nhằm cố ý gây ra và quan sát lỗi hệ thống trong môi trường giả lập để đo mức độ chịu lỗi"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 11,
        "type": "truefalsegroup",
        "question": "Các phát biểu sau đây Đúng hay Sai?",
        "items": [
            {
                "text": "Khi đã có prototype, không cần quay lại bước thu thập yêu cầu.",
                "answer": "Sai"
            },
            {
                "text": "Survey là kỹ thuật thu thập yêu cầu qua bảng hỏi.",
                "answer": "Đúng"
            },
            {
                "text": "Functional Requirement bao gồm yêu cầu về bảo mật và hiệu năng.",
                "answer": "Sai"
            },
            {
                "text": "Non-Functional Requirement thường được lượng hoá bằng SLA.",
                "answer": "Đúng"
            }
        ]
    },
    {
        id: 12,
        type: "multiMatching",
        question: "Kéo thả đáp án vào cột tương ứng:",
        matches: {
            Performance: [
                "P95 latency < 1s",
                "Uptime to 99,99%",
                "MTTR ≤ 2 phút, error rate user-facing ≤ 0.1% trong thời gian failover",
                "Throughput 2 000 req/s"
            ],
            Security: [
                "Two-factor login",
                "AES-256 encryption"
            ]
        }
    },
    {
        "id": 13,
        "type": "multiplechoice",
        "question": "Những lý do phải  trade-off  giữa các thuộc tính chất lượng (chọn 2)",
        "options": [
            "Bối cảnh kinh doanh ưu tiên khác nhau",
            "Mọi thuộc tính đều tối ưu đồng thời",
            "Quy định pháp lý luôn tương thích",
            "Nguồn lực hữu hạn"
        ],
        "correctAnswers": [0, 3]
    },
    {
        "id": 14,
        "type": "matching",
        "question": "Gán mô tả cho mức Risk/Difficulty",
        "matches": {
            "High": "Cần đầu tư công nghệ mới, thay đổi lớn kiến trúc",
            "Low": "Đơn giản, có thể dùng cấu hình mặc định",
            "Medium": "Có thể tận dụng kỹ thuật, tận dụng framework sẵn"
        },
        "distractors": [
            "Hệ thống vẫn hoạt động nhưng trải nghiệm người dùng",
            "Không gây ảnh hưởng lớn, có thể để giai đoạn sau mới xử lý"
        ]
    },
    {
        "id": 15,
        "type": "multiplechoice",
        "question": "Thuộc tính chất lượng nào thường xung đột (trade-off) với mục tiêu hiệu năng cao? (Chọn 2)",
        "options": [
            "Khả năng ghi log chi tiết (Verbose Logging)",
            "Khả dụng cao (Availability)",
            "Bảo mật (Security)",
            "Khả năng mở rộng theo chiều dọc (Vertical Scalability)"
        ],
        "correctAnswers": [0, 2]
    },
    {
        "id": 16,
        "type": "multiplechoice",
        "question": "Phát biểu nào đúng về cây tiện ích (Utility Tree) trong phân tích thuộc tính chất lượng? (Chọn 2)",
        "options": [
            "Mỗi nhánh cuối (leaf) gắn thang điểm Importance – Risk",
            "Chỉ áp dụng cho hệ thống real-time embedded",
            "Loại bỏ hoàn toàn nhu cầu trade-off giữa các thuộc tính",
            "Được dùng để xếp hạng ưu tiên các scenario"
        ],
        "correctAnswers": [0, 3]
    },
    {
        "id": 17,
        "type": "multiplechoice",
        "question": "Thuộc tính nào thuộc nhóm yêu cầu phi chức năng (NFR)? (Chọn 2)",
        "options": [
            "Hiệu năng",
            "Bảo mật",
            "Tìm kiếm sách theo tác giả",
            "Đăng ký tài khoản"
        ],
        "correctAnswers": [0, 1]
    },
    {
        "id": 18,
        "type": "matching",
        "question": "Hãy ghép kỹ thuật thu thập yêu cầu với đầu ra tương ứng",
        "matches": {
            "Workshop/JAD": "Biên bản họp & bảng thống nhất yêu cầu",
            "Phỏng vấn (Interview)": "Ghi âm hoặc biên bản hỏi–đáp cá nhân",
            "Phiếu khảo sát": "Bảng hỏi đã tổng hợp kết quả"
        },
        "distractors": [
            "Xây dựng nhanh một bản mẫu giao diện ",
            "Các tài liệu thu thập được: tài liệu quy trình, sổ tay hướng dẫn"
        ]
    },
    {
        "id": 19,
        "type": "multiplechoice",
        "question": "Vì sao việc xác định stakeholder là quan trọng trong quá trình phát triển phần mềm? (Chọn 2)",
        "options": [
            "Để hiểu các bên liên quan và nhu cầu của họ",
            "Để xác định yêu cầu chức năng và phi chức năng chính xác",
            "Để biết ai sẽ là người phê duyệt ngân sách",
            "Để chọn công nghệ phát triển phù hợp"
        ],
        "correctAnswers": [0, 1]
    },
    {
        "id": 20,
        "type": "multiplechoice",
        "question": "Trong kỹ thuật interview, loại phỏng vấn “semi-structured” là:",
        "options": [
            "Chỉ hỏi câu hỏi đóng",
            "Có khung sườn nhưng linh hoạt",
            "Không có câu hỏi trước",
            "Dựa hoàn toàn vào phiếu khảo sát"
        ],
        "correctAnswers": [1]
    }
];
export const tenBai = "Bai 2: PHÂN TÍCH YÊU CẦU VÀ CÁC THUỘC TÍNH CHẤT LƯỢNG PHẦN MỀM";
export default Bai2;

const Bai1 = [
    {
        "id": 1,
        "type": "multiplechoice",
        "question": "Theo Garlan và Shaw, thiết kế kiến trúc xác định điều gì?",
        "options": [
            "Cấu trúc và mối quan hệ chính của phần mềm",
            "Các thuật toán sử dụng trong phần mềm",
            "Xác định các thành phần giao diện trong phần mềm",
            "Các thiết bị và công nghệ sử dụng trong phần mềm"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 2,
        "type": "multiplechoice",
        "question": "Ai là người chịu trách nhiệm thiết kế kiến trúc phần mềm?",
        "options": [
            "Người dùng",
            "Người vận hành và bảo trì hệ thống",
            "Kiến trúc sư",
            "Kiểm thử viên"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 3,
        "type": "multiplechoice",
        "question": "Khái niệm kiến trúc phần mềm bắt đầu xuất hiện một cách rõ ràng vào đầu khoảng thời gian nào ?",
        "options": [
            "Thập niên 1980",
            "Thập niên 1970",
            "Thập niên 1990",
            "Thập niên 1960"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 4,
        "type": "multiplechoice",
        "question": "Các thành phần chính của kiến trúc phần mềm bao gồm gì?",
        "options": [
            "Requirements, Test Cases, Use Cases",
            "Algorithms, Data Structures, Interfaces",
            "Components, Connectors, Configurations",
            "Classes, Methods, Packages"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 5,
        "type": "multiplechoice",
        "question": "Theo định nghĩa của Bass, kiến trúc phần mềm của một hệ thống không bao gồm yếu tố nào dưới đây?",
        "options": [
            "Mối quan hệ giữa các thành phần",
            "Thuật toán chi tiết",
            "Các thành phần phần mềm",
            "Thuộc tính có thể quan sát được từ bên ngoài"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 6,
        "type": "multiplechoice",
        "question": "Trong mô hình 4 + 1 View Model của Philippe Kruchten, góc nhìn nào dưới đây không thuộc 4 góc nhìn chính?",
        "options": [
            "Logical view",
            "Process view",
            "Development view",
            "Data view"
        ],
        "correctAnswers": [3]
    },
    {
        "id": 7,
        "type": "multiplechoice",
        "question": "Nhiệm vụ chính của Kiến trúc sư phần mềm gồm: (Chọn 3)",
        "options": [
            "Lựa chọn công nghệ",
            "Viết tài liệu cho người dùng cuối",
            "Phân tích yêu cầu",
            "Kiểm thử phần mềm",
            "Hướng dẫn đội phát triển"
        ],
        "correctAnswers": [0, 2, 4]
    },
    {
        "id": 8,
        "type": "truefalsegroup",
        "question": "Các phát biểu sau Đúng hay Sai",
        "items": [
            {
                "text": "Kiến trúc phần mềm là phong cách kiến trúc",
                "answer": "Sai"
            },
            {
                "text": "Pipe-and-Filter là một phong cách kiến trúc",
                "answer": "Đúng"
            },
            {
                "text": "Thiết kế kiến trúc dựa trên SRS",
                "answer": "Đúng"
            },
            {
                "text": "Thiết kế kiến trúc phần mềm là thiết kế chi tiết",
                "answer": "Sai"
            }
        ]
    },
    {
        "id": 9,
        "type": "matching",
        "question": "Kéo thả đáp án thích hợp vào chỗ trống",
        "matches": {
            "Client-Server": "Server trung tâm phục vụ nhiều client",
            "Microservices": "Dịch vụ nhỏ, triển khai độc lập",
            "Layered": "Phân tách theo tầng (presentation, business, data)",
            "Event-Driven": "Thành phần giao tiếp bằng phát/bắt sự kiện"
        }
    },
    {
        "id": 10,
        "type": "multiplechoice",
        "question": "Thuộc tính “Time to Market” được xếp vào nhóm thuộc tính chất lượng nào?",
        "options": [
            "Nghiệp vụ (Business)",
            "Thời gian chạy (Run-time)",
            "Kỹ thuật (Technical)",
            "Thực thi (Execution)"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 11,
        "type": "multiplechoice",
        "question": "Vì sao kiến trúc Microservices thường giảm rủi ro khi mở rộng so với kiến trúc Monolithic?",
        "options": [
            "Mỗi dịch vụ có thể deploy & scale độc lập",
            "Ít cần giám sát hệ thống (observability)",
            "Không đòi hỏi container hay orchestration",
            "Cho phép gộp chung cơ sở dữ liệu để dễ quản lý"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 12,
        "type": "multiplechoice",
        "question": "Mô hình 4 + 1 View của Kruchten chủ yếu giúp đạt mục tiêu nào?",
        "options": [
            "Thuyết phục nhiều nhóm vai trò nhờ các view kiến trúc khác nhau",
            "Buộc mọi dự án phải dùng UML",
            "Tự động sinh mã nguồn từ view logic",
            "Thay thế hoàn toàn tài liệu kiến trúc truyền thống"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 13,
        "type": "matching",
        "question": "Kéo tên thuật ngữ ở cột trái sang ô định nghĩa tương ứng ở cột phải.",
        "matches": {
            "Thành phần (Component)": "Đơn vị đóng gói chức năng & trạng thái của hệ thống, được nhìn từ bên ngoài qua giao diện",
            "Kết nối (Connector)": "Cơ chế giúp các thành phần tương tác (gọi thủ tục, sự kiện, truy cập dữ liệu...)",
            "Cấu hình (Configuration)": "Cách tổ chức tổng thể các thành phần & kết nối thành đồ thị kiến trúc của hệ thống"
        }
    },
    {
        "id": 14,
        "type": "multiplechoice",
        "question": "Thiết kế kiến trúc phần mềm được tiến hành vào giai đoạn nào trong vòng đời phát triển phần mềm?",
        "options": [
            "Trước khi thu thập yêu cầu",
            "Sau giai đoạn kiểm thử",
            "Sau khi có đặc tả yêu cầu",
            "Sau khi triển khai hệ thống"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 15,
        "type": "truefalsegroup",
        "question": "Những phát biểu sau đây Đúng hay Sai:",
        "items": [
            {
                "text": "Kiến trúc phần mềm là mô tả cấu trúc phần mềm tĩnh.",
                "answer": "Sai"
            },
            {
                "text": "Mục đích của giai đoạn thiết kế phần mềm là tạo ra một tài liệu đặc tả yêu cầu phần mềm.",
                "answer": "Sai"
            },
            {
                "text": "Hướng đối tượng là một phương pháp thiết kế",
                "answer": "Đúng"
            },
            {
                "text": "Thiết kế kiến trúc phần mềm liên quan đến nhiều phương pháp thiết kế phần mềm và các mẫu kiến trúc.",
                "answer": "Đúng"
            }
        ]
    },
    {
        "id": 16,
        "type": "multiplechoice",
        "question": "Những lý do nào sau đây cho thấy kiến trúc phần mềm là quan trọng?  (Chọn 3)",
        "options": [
            "Giúp tạo ra phần mềm nhanh chóng hơn",
            "Giảm rủi ro trong sản xuất và vận hành",
            "Giúp phát triển phần mềm có định hướng",
            "Giúp tạo giao diện người dùng hấp dẫn hơn",
            "Giúp đảm bảo hiệu suất, bảo trì và mở rộng hệ thống"
        ],
        "correctAnswers": [1, 2, 4]
    },
    {
        "id": 17,
        "type": "multiplechoice",
        "question": "ISO/IEC/IEEE 42010 khuyến nghị cách tiếp cận nào khi mô hình hóa kiến trúc?",
        "options": [
            "Presentation-Business-Data",
            "Một ADL duy nhất",
            "Cloud-Native Design",
            "Phương pháp View – Viewpoint"
        ],
        "correctAnswers": [3]
    },
    {
        "id": 18,
        "type": "multiplechoice",
        "question": "Phong cách kiến trúc nào nhấn mạnh “mỗi dịch vụ càng nhỏ càng tốt” và triển khai độc lập?",
        "options": [
            "Monolithic",
            "Client-Server",
            "Microservices",
            "Layered Architecture"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 19,
        "type": "multiplechoice",
        "question": "Mục tiêu của thiết kế kiến trúc là gì?",
        "options": [
            "Kiểm thử giao diện",
            "Xác định các yêu cầu trong hệ thống",
            "Mã hóa hệ thống",
            "Tổ chức cấu trúc hệ thống"
        ],
        "correctAnswers": [3]
    }
];

export const tenBai = "Bài 1: Tổng quan về kiến trúc phần mềm";
export default Bai1;
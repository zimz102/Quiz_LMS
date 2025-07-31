const Bai3=[
    {
        "id": 1,
        "type": "multiplechoice",
        "question": "Nguyên tắc nào nhấn mạnh rằng \"mỗi lớp chỉ nên đảm nhiệm một trách nhiệm duy nhất và không nên có nhiều lý do để thay đổi\"?",
        "options": [
        "SRP",
        "DRY",
        "KISS",
        "OCP"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 2,
        "type": "multiplechoice",
        "question": "Ai đã đề xuất bộ nguyên lý SOLID?",
        "options": [
        "Uncle Bob",
        "Erich Gamma",
        "Kent Beck",
        "Alan Kay"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 3,
        "type": "multiplechoice",
        "question": "LSP là viết tắt của gì?",
        "options": [
        "Liskov Substitution Principle",
        "Logical Separation Principle",
        "Layered Software Principle",
        "List Sub Pattern"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 4,
        "type": "multiplechoice",
        "question": "Khi một lớp phải gọi đến các phương thức không dùng tới, ta đang vi phạm:",
        "options": [
        "SRP",
        "DIP",
        "DRY",
        "ISP"
        ],
        "correctAnswers": [3]
    },
    {
        "id": 5,
        "type": "multiplechoice",
        "question": "Mục đích chính của Singleton Pattern là gì?",
        "options": [
        "Cách ly giao tiếp giữa hai interface không tương thích để chúng có thể làm việc chung",
        "Tạo nhiều thể hiện và quản lý vòng đời chúng",
        "Chỉ giữ một thể hiện duy nhất và cung cấp điểm truy cập chung",
        "Hỗ trợ tạo đối tượng linh hoạt và dễ mở rộng"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 6,
        "type": "multiplechoice",
        "question": "Creational patterns giúp giải quyết vấn đề nào trong thiết kế phần mềm?",
        "options": [
        "Giảm sự phụ thuộc giữa các module",
        "Tối ưu hóa thuật toán tìm kiếm",
        "Tạo và quản lý vòng đời của đối tượng",
        "Tăng hiệu suất xử lý dữ liệu"
        ],
        "correctAnswers": [2]
    },
    {
        "id": 7,
        "type": "multiplechoice",
        "question": "Mẫu thiết kế Factory Method giúp:",
        "options": [
        "Hợp nhất nhiều loại đối tượng vào một giao diện chung",
        "Tách biệt việc khởi tạo đối tượng khỏi phần sử dụng đối tượng",
        "Đảm bảo chỉ có một thể hiện duy nhất của lớp trong hệ thống",
        "Tăng khả năng kế thừa giữa các lớp"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 8,
        "type": "multiplechoice",
        "question": "Điểm khác biệt chính giữa Adapter Pattern và Strategy Pattern là gì? (Chọn 3)",
        "options": [
        "Adapter Pattern yêu cầu các lớp kế thừa từ một interface chung",
        "Stategy Pattern chủ yếu được sử dụng để tối ưu hóa hiệu suất hệ thống",
        "Srategy cho phép thay đổi thuật toán xử lý mà không cần chỉnh sửa client",
        "Adapter giúp hai hệ thống không tương thích có thể làm việc cùng nhau",
        "Strategy Pattern giúp chọn thuật toán phù hợp mà không làm thay đổi cấu trúc hệ thống"
        ],
        "correctAnswers": [2, 3, 4]
    },
    {
        "id": 9,
        "type": "truefalsegroup",
        "question": "Phát biểu sau đây Đúng hay Sai?",
        "items": [
        {
            "text": "Mẫu thiết kế này cho phép mở rộng hệ thống mà không cần sửa đổi mã nguồn gốc",
            "answer": "Đúng"
        },
        {
            "text": "Factory Method yêu cầu mọi đối tượng được tạo ra phải thuộc cùng một lớp cụ thể",
            "answer": "Sai"
        },
        {
            "text": "Factory Method giúp tách biệt việc tạo đối tượng khỏi phần sử dụng đối tượng?",
            "answer": "Đúng"
        },
        {
            "text": "Lớp chứa phương thức Factory luôn là lớp abstract",
            "answer": "Sai"
        }
        ]
    },
    {
        "id": 10,
        "type": "multiplechoice",
        "question": "Nguyên lý OCP yêu cầu gì?",
        "options": [
        "Mở rộng mà không sửa đổi",
        "Không sửa lớp cũ",
        "Đóng để tránh lỗi",
        "Mở lớp cho mọi người dùng"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 11,
        "type": "multiplechoice",
        "question": "Hành động nào sau đây phù hợp với nguyên lý KISS (Keep It Simple, Stupid)? (Chọn 2)",
        "options": [
        "Dự báo trước mọi tình huống và xây dựng module phức tạp từ ban đầu",
        "Giữ code ngắn gọn, sạch sẽ, tránh over-engineering không cần thiết",
        "Viết code tuần tự, rõ ràng, ưu tiên đọc hiểu trước, rồi mới tách lớp/module",
        "Thêm càng nhiều tùy chọn cấu hình vào module ngay từ đầu"
        ],
        "correctAnswers": [1, 2]
    },
    {
        "id": 12,
        "type": "multiplechoice",
        "question": "Mẫu thiết kế nào giúp các đối tượng giao tiếp linh hoạt mà không cần ràng buộc chặt chẽ với nhau?",
        "options": [
        "Singleton",
        "Observer",
        "Factory Method",
        "Composite"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 13,
        "type": "multiplechoice",
        "question": "Trong Composite Pattern, vì sao cần sử dụng cả Leaf và Composite thay vì chỉ một loại? (Chọn 2)",
        "options": [
        "Leaf giúp quản lý trạng thái của các phần tử con trong hệ thống",
        "Leaf giúp hệ thống chạy nhanh hơn vì loại bỏ sự cần thiết của cấu trúc cây",
        "Composite cho phép thực hiện các hành vi trên tập hợp đối tượng mà không cần phân biệt giữa đơn lẻ và nhóm",
        "Composite giúp tổ chức nhóm các đối tượng theo cấu trúc phân cấp"
        ],
        "correctAnswers": [2, 3]
    },
    {
        "id": 14,
        "type": "truefalsegroup",
        "question": "Phát biểu sau đây Đúng hay Sai?",
        "items": [
        {
            "text": "Constructor của Singleton luôn phải được đặt ở chế độ public",
            "answer": "Sai"
        },
        {
            "text": "Singleton đảm bảo chỉ có một thể hiện duy nhất của lớp trong toàn bộ hệ thống.",
            "answer": "Đúng"
        },
        {
            "text": "Singleton không thể được sử dụng trong môi trường đa luồng vì nó không đảm bảo đồng bộ",
            "answer": "Sai"
        },
        {
            "text": "Singleton Pattern bắt buộc phải sử dụng phương thức getInstance() để truy cập thể hiện duy nhất",
            "answer": "Sai"
        }
        ]
    },
    {
        "id": 15,
        "type": "multiplechoice",
        "question": "Những lợi ích nào dưới đây là khi tuân thủ các nguyên tắc thiết kế phần mềm? (chọn 3)",
        "options": [
        "Tăng số lượng code lặp lại để đảm bảo an toàn",
        "Giảm sự gắn kết giữa các thành phần trong một module",
        "Giảm lỗi và tăng độ tin cậy",
        "Tăng tính dễ bảo trì",
        "Cải thiện khả năng mở rộng"
        ],
        "correctAnswers": [2, 3, 4]
    },
    {
        "id": 16,
        "type": "multiplechoice",
        "question": "Trong mẫu thiết kế Singleton, điều nào sau đây là đúng?",
        "options": [
        "Ngăn chặn việc khởi tạo một lớp từ bên ngoài bằng constructor private",
        "Luôn yêu cầu sử dụng Dependency Injection để hoạt động đúng",
        "Cho phép tạo nhiều thể hiện của một lớp",
        "Không thể sử dụng trong môi trường đa luồng"
        ],
        "correctAnswers": [0]
    },
    {
        "id": 17,
        "type": "multiplechoice",
        "question": "Trong các lợi ích dưới đây, đâu là những lợi ích khi áp dụng nguyên lý DRY? (Chọn 3)",
        "options": [
        "Cải thiện tính nhất quán trong toàn hệ thống",
        "Giảm thiểu sai sót do sửa đổi không đồng bộ",
        "Dễ dàng bảo trì và mở rộng",
        "Viết code tuần tự, rõ ràng",
        "Tăng tính gắn kết giữa các module"
        ],
        "correctAnswers": [0, 1, 2]
    },
    {
        "id": 18,
        "type": "multiplechoice",
        "question": "Trong Composite Pattern, đối tượng “leaf” có đặc điểm nào sau đây?",
        "options": [
        "Không thể thực hiện phương thức chung của giao diện mà nó triển khai",
        "Không chứa các thành phần con và hoạt động như một thực thể đơn lẻ",
        "Luôn phải kế thừa từ một lớp trừu tượng",
        "Có thể chứa nhiều thành phần con bên trong nó"
        ],
        "correctAnswers": [1]
    },
    {
        "id": 19,
        "type": "multiplechoice",
        "question": "Theo nguyên tắc Single Responsibility Principle (SRP), mỗi lớp chỉ nên làm gì?",
        "options": [
        "Chịu trách nhiệm cho nhiều chức năng liên quan đến nhau để tiện tái sử dụng",
        "Tách giao diện lớn thành nhiều interface nhỏ",
        "Kết hợp nhiều pattern vào cùng một module để tối ưu hiệu năng",
        "Chỉ đảm nhận một trách nhiệm duy nhất và không có nhiều lý do để thay đổi"
        ],
        "correctAnswers": [3]
    }
];
export const tenBai = "Bài 3: NGUYÊN TẮC THIẾT KẾ VÀ CÁC MẪU THIẾT KẾ CƠ BẢN";
export default Bai3;


// Sample
// const Bai3=[

    

// ];
// export const tenBai = "Bài 3: NGUYÊN TẮC THIẾT KẾ VÀ CÁC MẪU THIẾT KẾ CƠ BẢN";
// export default Bai3;
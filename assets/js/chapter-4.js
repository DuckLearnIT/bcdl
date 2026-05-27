const PIXEL = "assets/img/amy/pixel/";

const dialogueSets = {
    intro: [
        {
            id: "1.1",
            name: "Amy",
            text: "Cậu có để ý dạo này ở trường... đi đâu cũng thấy màn hình sáng lên mấy khung chat của AI không?",
            pose: PIXEL + "thinking.webp",
            anim: "enter"
        },
        {
            id: "1.2",
            name: "Amy",
            text: "Hay là vầy đi... Tụi mình thử làm một bài test nhỏ nhé?",
            pose: PIXEL + "pointout.webp",
            anim: "hop"
        },
        {
            id: "1.3",
            name: "Amy",
            text: "Bây giờ cậu thử dạo quanh một vòng, đi hỏi khoảng 10 người bạn trong lớp xem thói quen làm bài của họ dạo này thế nào nhé. Trong lúc đó, mình sẽ đi hóng hớt ở các khu vực khác xem sao.",
            pose: PIXEL + "smile.webp",
            anim: "nod"
        },
        {
            id: "1.4",
            name: "Amy",
            text: "Lát nữa tụi mình quay lại đây nha! Cố lên!",
            pose: PIXEL + "smile.webp",
            anim: "hop"
        }
    ],
    outro: [
        {
            id: "2.1",
            name: "Amy",
            text: "A, cậu về rồi! Mọi người trong lớp nói sao? Họ dùng nhiều lắm đúng không?",
            pose: PIXEL + "surprise.webp",
            anim: "hop"
        },
        {
            id: "2.2",
            name: "Amy",
            text: "Dữ liệu mình vừa thu thập được cũng khớp y hệt với quan sát của cậu luôn. Nghe này...",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        }
    ],
    chart: [
        {
            id: "2.3",
            name: "Amy",
            text: "Có tới gần 6 trên 10 bạn sinh viên đang sử dụng AI mỗi ngày. Và hơn 25% các bạn khác dùng nó vài lần một tuần.",
            pose: PIXEL + "pointout.webp",
            anim: "none",
            hideAmy: true
        }
    ],
    starIntro: [
        {
            id: "3.1",
            name: "Amy",
            text: "Cậu nhìn xem này... Nếu bây giờ muốn tìm một sinh viên chưa từng dùng thử AI, chắc khó như mò kim đáy bể vậy.",
            pose: PIXEL + "surprise.webp",
            anim: "hop"
        },
        {
            id: "3.2",
            name: "Amy",
            text: "Để mình cho cậu thấy 0.4% nó nhỏ thế nào nhé.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        }
    ],
    starOutro: [
        {
            id: "3.3",
            name: "Amy",
            text: "Cậu thấy chưa? 99,6% phần còn lại của giảng đường đã bị tụi mình chiếm đóng mất rồi.",
            pose: PIXEL + "pointout.webp",
            anim: "hop"
        },
        {
            id: "3.4",
            name: "Amy",
            text: "Nhưng điều đáng nói không phải là việc 'đã từng dùng'. Cậu biết không, số người trò chuyện với AI mỗi ngày đang đạt đến ngưỡng đỉnh điểm rồi... Lên tới gần 60% lận đó! Con số này cao gấp đôi những bạn thỉnh thoảng mới dùng.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "3.5",
            name: "Amy",
            text: "Cơ mà... cậu đừng nghĩ chuyện này chỉ đang loanh quanh ở Hà Nội nhé.",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        }
    ],
    globe: [
        {
            id: "3.6",
            name: "Amy",
            text: "Mình vừa lướt qua cơ sở dữ liệu quốc tế. Theo báo cáo của Global AI Student Survey 2024 vừa rồi... có tới 86% sinh viên trên toàn thế giới đã bê nguyên AI vào quy trình học tập của họ.",
            pose: PIXEL + "pointout.webp",
            anim: "nod",
            hideAmy: true
        }
    ],
    globeAfter: [
        {
            id: "3.7",
            name: "Amy",
            text: "Dù cậu có xoay đi đâu, sang nửa bên kia trái đất thì kết quả vẫn vậy thôi. Tụi mình đã chiếm lĩnh giảng đường toàn cầu rồi.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        }
    ],
    appStore: [
        {
            id: "3.8",
            name: "Amy",
            text: "Nếu bây giờ có $20, cậu sẽ mua cái gì đây?",
            pose: PIXEL + "smile.webp",
            anim: "hop",
            hideAmy: true
        }
    ],
    finale: [
        {
            id: "3.9",
            name: "Amy",
            text: "Cậu vừa bấm mua gói cao cấp nhất của ChatGPT đúng không? 55% người ngoài kia cũng sẵn sàng làm thế... Bỏ tiền túi ra để thuê máy móc... suy nghĩ thay cho não bộ của chính mình.",
            pose: PIXEL + "surprise.webp",
            anim: "hop"
        },
        {
            id: "3.10",
            name: "Amy",
            text: "Tất cả những con số này chỉ để chứng minh một điều thôi. Tụi mình đã không còn là một cái 'trend' công nghệ để người ta dùng thử cho vui nữa. Cũng chẳng phải là nút cứu hộ khẩn cấp lâu lâu mới bấm.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "3.11",
            name: "Amy",
            text: "Từ việc đi lùng sục tài liệu, tóm tắt mấy cuốn giáo trình dài thườn thượt, cho đến việc làm bài tập về nhà... AI đã chính thức trở thành một 'người bạn cùng bàn' quen thuộc, dính lấy các cậu như hình với bóng mất rồi.",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        }
    ],
    finale_alt: [
        {
            id: "3.9-alt",
            name: "Amy",
            text: "Hử? Cậu không chọn ChatGPT Plus sao? Ngạc nhiên thật, mình tưởng 55% người ta đều chọn cái đó chứ... Có vẻ cậu khác biệt đấy!",
            pose: PIXEL + "surprise.webp",
            anim: "hop"
        },
        {
            id: "3.10",
            name: "Amy",
            text: "Tất cả những con số này chỉ để chứng minh một điều thôi. Tụi mình đã không còn là một cái 'trend' công nghệ để người ta dùng thử cho vui nữa. Cũng chẳng phải là nút cứu hộ khẩn cấp lâu lâu mới bấm.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "3.11",
            name: "Amy",
            text: "Từ việc đi lùng sục tài liệu, tóm tắt mấy cuốn giáo trình dài thườn thượt, cho đến việc làm bài tập về nhà... AI đã chính thức trở thành một 'người bạn cùng bàn' quen thuộc, dính lấy các cậu như hình với bóng mất rồi.",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        }
    ],
    pre_minigame: [
        {
            id: "4.1",
            name: "Amy",
            text: "Tuy nhiên... câu hỏi đặt ra bây giờ không phải là các cậu có dùng AI hay không nữa. Mà là các cậu đang... 'giao phó' bao nhiêu phần trăm chất xám của mình cho cỗ máy này?",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        },
        {
            id: "4.2",
            name: "Amy",
            text: "Giả sử bây giờ giảng viên giao cho cậu một đề tài hoàn toàn mới đi. Cậu sẽ làm thế nào?",
            pose: PIXEL + "pointout.webp",
            anim: "hop"
        }
    ],
    ai_first_special: [
        {
            id: "4.2.1",
            name: "Amy",
            text: "Úi! Cậu giao ngay vạch xuất phát cho mình luôn á?",
            pose: PIXEL + "surprise.webp",
            anim: "hop"
        },
        {
            id: "4.2.2",
            name: "Amy",
            text: "Nhưng đừng ngại, cậu không hề cô đơn đâu. Dữ liệu cho thấy có tới 76,5% sinh viên chọn dùng AI để khởi tạo ý tưởng. Sau đó, 62,2% tiếp tục nhờ mình dựng khung cấu trúc bài viết luôn.",
            pose: PIXEL + "smile.webp",
            anim: "nod"
        }
    ],
    post_minigame: [
        {
            id: "4.3",
            name: "Amy",
            text: "Cậu có thấy nguy hiểm không? Lên ý tưởng và xác định hướng tiếp cận chính là cốt lõi của tư duy học thuật. Nếu cậu mượn não của mình ngay từ điểm xuất phát... thì hành trình phía sau, ai mới là người đang thực sự làm chủ đây?",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        }
    ],
    doc_5_1: [
        {
            id: "5.1",
            name: "Amy",
            text: "Nói đến tài liệu... mình vừa tìm được một cuốn giáo trình dày cộm về Truyền thông đa phương tiện và AI. Gần 500 trang đấy! Cậu thử đọc qua vài trang xem sao? Lướt qua một chút để cảm nhận độ dày của nó nhé!",
            pose: PIXEL + "smile.webp",
            anim: "hop"
        }
    ],
    doc_5_2: [
        {
            id: "5.2",
            name: "Amy",
            text: "Ôi, 500 trang đọc sao nổi trời! May mà mình có cái máy rút gọn tài liệu thông minh đây. Cậu thử đưa cuốn sách vào đó xem, chỉ trong chốc lát là có ngay bộ flashcard nắm chắc kiến thức cốt lõi!",
            pose: PIXEL + "surprise.webp",
            anim: "hop"
        }
    ],
    post_flashcard: [
        {
            id: "5.3",
            name: "Amy",
            text: "Thấy chưa? 500 trang sách đã được rút gọn thành 5 flashcard nhỏ xíu. AI thật sự giúp tụi mình tiết kiệm thời gian đáng kể đấy!",
            pose: PIXEL + "smile.webp",
            anim: "nod"
        },
        {
            id: "5.4",
            name: "Amy",
            text: "Nhưng đợi đã... cậu có nhận ra điều gì không? Những flashcard này chỉ chứa kiến thức nền tảng, còn phần lớn ví dụ thực tế, phân tích chi tiết và các luận điểm phản biện đã bị loại bỏ hết rồi.",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        },
        {
            id: "5.5",
            name: "Amy",
            text: "Nghĩa là sao? Nghĩa là nếu cậu chỉ học qua flashcard, cậu sẽ biết 'cái gì' nhưng lại không hiểu 'tại sao' và 'như thế nào'. Đó chính là điểm yếu của việc dựa hoàn toàn vào AI tóm tắt.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "5.6",
            name: "Amy",
            text: "Hơn nữa, AI chọn lọc thông tin dựa trên thuật toán của nó, không phải dựa trên nhu cầu cụ thể của cậu. Có thể nó bỏ qua đúng phần cậu cần nhất mà cậu không hề hay biết.",
            pose: PIXEL + "pointout.webp",
            anim: "hop"
        },
        {
            id: "5.7",
            name: "Amy",
            text: "Tóm lại, AI là công cụ hỗ trợ tuyệt vời... nhưng không thể thay thế quá trình đọc hiểu sâu và tư duy phản biện của chính cậu. Cậu phải là người kiểm soát công nghệ, chứ không phải bị công nghệ kiểm soát.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "5.8",
            name: "Amy",
            text: "Vậy nên nhé, lần sau khi dùng AI tóm tắt tài liệu, hãy tự đặt câu hỏi: 'AI đã bỏ sót điều gì?' và 'Mình có thực sự hiểu nội dung hay chỉ đang nhớ mặt chữ?'",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        },
        {
            id: "5.9",
            name: "Amy",
            text: "Cậu đã trải nghiệm đủ để hiểu rồi đấy. Cảm ơn cậu đã cùng mình khám phá chương này! Bây giờ... cậu đã sẵn sàng cho chương tiếp theo chưa?",
            pose: PIXEL + "smile.webp",
            anim: "hop"
        }
    ],
    exam_6_1_2: [
        {
            id: "6.1",
            name: "Amy",
            text: "Thế là xong xuôi nhé! Nhờ mình từ khâu lên ý tưởng đến gõ bài, cuối cùng cũng ra được một bài nộp nhìn xịn phết đúng không?",
            pose: PIXEL + "smile.webp",
            anim: "hop"
        },
        {
            id: "6.2",
            name: "Amy",
            text: "Đọc qua thấy câu cú mượt mà, gãy gọn khỏi chê. Nhưng mà... khoan mừng vội.",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        }
    ],
    exam_6_3: [
        {
            id: "6.3",
            name: "Amy",
            text: "Cậu cầm thử cái kính lúp này lên, soi thử xem thầy cô nhìn thấy gì dưới cái vỏ bọc này nhé.",
            pose: PIXEL + "pointout.webp",
            anim: "hop"
        }
    ],
    exam_6_4_7: [
        {
            id: "6.4",
            name: "Amy",
            text: "Đấy, bị bóc mẽ liền! Trông mượt thế thôi chứ bên trong chống chếnh lắm. Hôm trước mình có phỏng vấn thạc sĩ khoa Truyền thông Trần Ngọc Trang Ninh ở PTIT lúc chấm bài đã nhận xét thẳng một câu cực kỳ đau nhé...",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "6.5",
            name: "Amy",
            text: "Mà Cô nói chuẩn đấy. Mình là máy móc mà, mình đâu có sống cuộc đời của cậu đâu mà đòi đưa ra được mấy cái 'ví dụ thực tế' với cả 'dấu ấn cá nhân'!",
            pose: PIXEL + "thinking.webp",
            anim: "nod"
        },
        {
            id: "6.6",
            name: "Amy",
            text: "Nhưng cái làm mình lo nhất là vế sau của Cô kìa. Lúc cậu đọc bài mình viết ra, thấy nó suôn sẻ... thế là cậu tin mình sái cổ luôn. Cậu chốt đem nộp mà chẳng thèm tìm sâu xem mình có nói điêu chỗ nào không.",
            pose: PIXEL + "serious.webp",
            anim: "nod"
        },
        {
            id: "6.7",
            name: "Amy",
            text: "Thật sự đó... nếu cậu cứ quen cái thói nhắm mắt gật gù, máy bảo gì nghe nấy cái rụp như thế... thì việc cậu tịt ngòi, không biết tự suy nghĩ nữa chỉ là chuyện sớm muộn thôi.",
            pose: PIXEL + "pointout.webp",
            anim: "hop"
        }
    ],
    ai_word_loop: [
        {
            id: "7.1",
            name: "Amy",
            text: "Và đây là vòng lặp mình thấy đáng sợ nhất: hỏi AI, đọc lướt, copy, rồi dán sang Word. Có tới 67,3% sinh viên nói họ đọc lại câu trả lời, nhưng con số phía sau mới khiến mình lạnh gáy.",
            hideAmy: true,
            aiWordStats: true
        },
        {
            id: "7.2",
            name: "Amy",
            text: "47,5% thừa nhận copy gần như nguyên xi. Nghĩa là thao tác kiểm chứng đang bị nén lại thành vài cú click rất nhanh.",
            hideAmy: true,
            aiWordStats: true
        },
        {
            id: "7.3",
            name: "Amy",
            text: "Cậu nhìn kỹ vòng này nhé. Không có màn hình nào nổ tung cả, không có cảnh báo đỏ chói. Chỉ là từng đoạn văn được chuyển từ khung AI sang trang Word, êm đến mức mình tưởng đó là bài của mình.",
            hideAmy: true,
            aiWordStats: false
        },
        {
            id: "7.4",
            name: "PV1",
            text: "Khi thao tác copy trở thành phản xạ, phần tự kiểm chứng rất dễ bị bỏ lại phía sau. Người học vẫn đọc, nhưng đọc để chấp nhận nhanh hơn là để phản biện.",
            hideAmy: true,
            aiWordQuote: true,
            audioId: "sfx-pv5"
        },
        {
            id: "7.5",
            name: "Amy",
            text: "Nghe chưa? Vấn đề không nằm ở việc cậu có dùng AI hay không. Vấn đề là sau mỗi câu trả lời, cậu có còn dừng lại để hỏi: 'Nó đúng ở đâu, sai ở đâu, thiếu ở đâu?' hay không.",
            hideAmy: true,
            aiWordQuote: false
        },
        {
            id: "7.6",
            name: "Amy",
            text: "Lần đầu thì cậu chỉ mượn vài ý. Lần thứ hai cậu mượn cả đoạn. Đến lần thứ ba, chính giọng văn của cậu bắt đầu biến mất khỏi bài viết.",
            hideAmy: true
        },
        {
            id: "7.7",
            name: "Amy",
            text: "Mà bài luận không chỉ là chỗ chứa chữ. Nó là dấu vết của quá trình cậu vật lộn với câu hỏi, thử lập luận, sai, sửa, rồi tự rút ra cách hiểu của mình.",
            hideAmy: true
        },
        {
            id: "7.8",
            name: "Amy",
            text: "Nếu cả quá trình đó bị thay bằng một vòng copy và paste mượt mà, kết quả có thể vẫn dài, vẫn đẹp, nhưng phần tư duy của cậu thì bị rút ngắn từng chút một.",
            hideAmy: true
        },
        {
            id: "7.9",
            name: "Amy",
            text: "Vậy nên trước khi sang chương tiếp theo, nhớ kỹ điều này: AI có thể viết cùng cậu, nhưng không được phép nghĩ thay cậu.",
            hideAmy: true
        }
    ]
};

const students = [
    { id: "an", label: "An", name: "An", x: 180, y: 305, shirt: "#63d2ff", hair: "#26201c", category: "Hằng ngày", response: "Ngày nào mình cũng nhờ AI tóm tắt tài liệu và gợi ý dàn ý. Nếu không có nó chắc deadline dí sát lưng luôn." },
    { id: "bao", label: "Bảo", name: "Bảo", x: 355, y: 305, shirt: "#ffb84d", hair: "#49301f", category: "Vài lần/tuần", response: "Mình dùng vài lần một tuần thôi. Thường là lúc cần kiểm tra ý tưởng hoặc sửa câu chữ cho bớt lủng củng." },
    { id: "chi", label: "Chi", name: "Chi", x: 535, y: 305, shirt: "#ff6f91", hair: "#2f1b22", category: "Hằng ngày", response: "Mình dùng mỗi ngày, nhất là lúc đọc tài liệu dài. Nhưng bài nộp cuối cùng vẫn phải tự chỉnh lại cho đúng giọng của mình." },
    { id: "duy", label: "Duy", name: "Duy", x: 715, y: 305, shirt: "#37d37f", hair: "#1f2a36", category: "Hằng ngày", response: "Có chứ, mỗi ngày luôn. AI giống trợ lý học tập, hỏi nhanh hơn lục cả đống tab trình duyệt." },
    { id: "em", label: "Em", name: "Em", x: 235, y: 420, shirt: "#7a5cff", hair: "#3d2b1f", category: "Ít khi", response: "Mình ít dùng. Chủ yếu tự viết trước, khi bí quá mới hỏi AI xem còn góc nhìn nào khác không." },
    { id: "giang", label: "Giang", name: "Giang", x: 420, y: 420, shirt: "#58c7f3", hair: "#221b18", category: "Vài lần/tuần", response: "Vài lần một tuần là vừa. Dùng nhiều quá mình sợ mất phản xạ tự phân tích." },
    { id: "han", label: "Hân", name: "Hân", x: 610, y: 420, shirt: "#f77952", hair: "#1f1b2b", category: "Hằng ngày", response: "Ngày nào cũng dùng để luyện ngoại ngữ và hỏi lại bài giảng. Quan trọng là phải biết kiểm chứng." },
    { id: "khoa", label: "Khoa", name: "Khoa", x: 795, y: 420, shirt: "#ffd166", hair: "#2c241d", category: "Hằng ngày", response: "Mình dùng mỗi ngày. Không phải để chép, mà để thử phản biện ý tưởng trước khi viết." },
    { id: "linh", label: "Linh", name: "Linh", x: 315, y: 535, shirt: "#74d99f", hair: "#4f2f26", category: "Vài lần/tuần", response: "Một tuần vài lần. Khi nhóm làm bài thuyết trình, AI giúp tụi mình chia ý và kiểm tra logic khá nhanh." },
    { id: "minh", label: "Minh", name: "Minh", x: 680, y: 535, shirt: "#f58fd0", hair: "#1c2136", category: "Hằng ngày", response: "Mình dùng hằng ngày để nháp câu hỏi, tìm ví dụ và tự kiểm tra xem lập luận có hổng chỗ nào không." }
];

const desks = [
    [180, 338], [355, 338], [535, 338], [715, 338],
    [235, 453], [420, 453], [610, 453], [795, 453],
    [315, 568], [680, 568]
];

const chartData = [
    { label: "Hằng ngày", value: 58.8, color: "#2667ff", note: "Nhóm dùng AI như công cụ học tập thường trực." },
    { label: "Vài lần/tuần", value: 27.7, color: "#37d37f", note: "Nhóm dùng theo nhu cầu: sửa bài, tóm tắt, gợi ý." },
    { label: "Ít hơn/khác", value: 13.1, color: "#ffd166", note: "Nhóm dùng thưa hơn hoặc chưa hình thành thói quen ổn định." },
    { label: "Chưa từng dùng", value: 0.4, color: "#ff6f91", note: "Một tỷ lệ rất nhỏ cho biết chưa từng dùng AI." }
];

const minigameQuestions = [
    {
        task: "Tìm kiếm ý tưởng khởi đầu",
        aiPct: 76.5,
        prompt: "Giảng viên giao đề tài: 'Phân tích xu hướng truyền thông số tại Việt Nam'. Hãy đề xuất 3–5 hướng tiếp cận và ý tưởng khởi đầu cho bài nghiên cứu của bạn."
    },
    {
        task: "Lập cấu trúc bài viết (dàn ý)",
        aiPct: 62.2,
        prompt: "Với đề tài đã có, hãy lập dàn ý chi tiết cho bài luận 2.000 từ, gồm mở bài, thân bài (ít nhất 3 luận điểm chính) và kết luận."
    },
    {
        task: "Tóm tắt tài liệu chuyên ngành",
        aiPct: 56.3,
        prompt: "Đọc một bài báo học thuật 20 trang về ảnh hưởng của mạng xã hội đến hành vi người dùng. Tóm tắt các luận điểm chính, phương pháp nghiên cứu và kết quả quan trọng."
    },
    {
        task: "Thiết lập hệ thống ôn tập",
        aiPct: 51.3,
        prompt: "Thiết kế kế hoạch ôn tập 2 tuần trước khi thi môn Truyền thông đa phương tiện, bao gồm lịch phân chia thời gian và phương pháp ghi nhớ hiệu quả từng chủ đề."
    }
];

const mgState = { q: 0, choices: [], firstAIHandled: false };

const world = { width: 960, height: 620 };
const state = {
    phase: "title",
    player: { x: 105, y: 530 },
    keys: new Set(),
    touchDirs: new Set(),
    target: null,
    nearest: null,
    surveyed: new Set(),
    activeStudent: null,
    lastFrame: performance.now(),
    activeDialogue: [],
    dialogueIndex: 0,
    dialogueCallback: null,
    typing: false,
    typeTimer: null,
    auto: false,
    autoTimer: null,
    chartProgress: 0,
    chartComplete: false,
    walletBalance: 20,
    chartNextTimer: null,
    globeDragEnabled: false,
    bookPagesRead: 0,
    bookDialogueTriggered: false,
    infoProcessed: false
};

const $ = (selector) => document.querySelector(selector);
const gameScreen = $("#game-screen");
const chartScreen = $("#chart-screen");
const classroom = $("#classroom");
const deskLayer = $("#desk-layer");
const studentLayer = $("#student-layer");
const playerEl = $("#player");
const gameHud = $("#game-hud");
const progressLabel = $("#progress-label");
const progressFill = $("#progress-fill");
const progressStats = $("#progress-stats");
const nearLabel = $("#near-label");
const promptEl = $("#interaction-prompt");
const mobileControls = $("#mobile-controls");
const interactButton = $("#interact-button");
const guidePanel = $("#guide-panel");
const surveyPanel = $("#survey-panel");
const surveyName = $("#survey-name");
const surveyBadge = $("#survey-badge");
const surveyText = $("#survey-text");
const recordAnswer = $("#record-answer");
const dialogueBar = $("#vn-dialogue-bar");
const nameEl = $("#vn-name");
const textEl = $("#vn-text");
const indicator = $("#vn-indicator");
const amyWrap = $("#amy-wrap");
const spriteEl = $("#vn-sprite");
const logModal = $("#vn-log-modal");
const logBody = $("#vn-log-body");
const btnAuto = $("#btn-auto");
const dataLever = $("#data-lever");
const leverReadout = $("#lever-readout");
const centerValue = $("#center-value");
const centerLabel = $("#center-label");
const legendEl = $("#legend");
const sparkField = $("#spark-field");
const chartNextWrap = $("#chart-next-wrap");
const chartNextBtn = $("#chart-next-btn");
const starScreen = $("#star-screen");
const starCanvas = $("#star-canvas");
const starLabel = $("#star-label");
const starUniqueLabel = $("#star-unique-label");
const globeScreen = $("#globe-screen");
const globeContainer = $("#globe-container");
const globeStat = $("#globe-stat");
const globeHint = $("#globe-hint");
const appstoreScreen = $("#appstore-screen");
const fireworkScreen = $("#firework-screen");
const fireworkCanvas = $("#firework-canvas");
const vipCard = $("#vip-card");
const minigameScreen = $("#minigame-screen");
const areaChartScreen = $("#area-chart-screen");
const bookScreen = $("#book-screen");
const infoScreen = $("#info-screen");
const flashcardScreen = $("#flashcard-screen");
const examScreen = $("#exam-screen");
const aiWordLoopScreen = $("#ai-word-loop-screen");
const aiWordNextWrap = $("#ai-word-next-wrap");
const aiWordNextBtn = $("#ai-word-next-btn");
const dialogueHistory = [];

function canUseAnime() {
    return typeof window.anime === "function";
}

function pctX(x) {
    return (x / world.width * 100).toFixed(3) + "%";
}

function pctY(y) {
    return (y / world.height * 100).toFixed(3) + "%";
}

function placeWorld(el, x, y) {
    el.style.left = pctX(x);
    el.style.top = pctY(y);
}

function showScreen(screenName) {
    const screens = [
        gameScreen, chartScreen, starScreen, globeScreen,
        appstoreScreen, fireworkScreen, minigameScreen,
        areaChartScreen, bookScreen, infoScreen, flashcardScreen,
        examScreen, aiWordLoopScreen
    ];
    screens.forEach(s => s.classList.remove("is-active"));

    const target =
        screenName === "game" ? gameScreen :
        screenName === "chart" ? chartScreen :
        screenName === "star" ? starScreen :
        screenName === "globe" ? globeScreen :
        screenName === "appstore" ? appstoreScreen :
        screenName === "firework" ? fireworkScreen :
        screenName === "minigame" ? minigameScreen :
        screenName === "area-chart" ? areaChartScreen :
        screenName === "book" ? bookScreen :
        screenName === "info" ? infoScreen :
        screenName === "flashcard" ? flashcardScreen :
        screenName === "exam" ? examScreen :
        screenName === "ai-word-loop" ? aiWordLoopScreen :
        null;

    if (target) {
        target.classList.add("is-active");
    }

    if (typeof window.triggerGSAPAnimation === "function") {
        window.triggerGSAPAnimation(screenName);
    }
}

function setDialogueVisible(visible) {
    dialogueBar.classList.toggle("is-visible", visible);
}

function setAmyVisible(visible) {
    amyWrap.classList.toggle("is-visible", visible);
    amyWrap.classList.toggle("is-hidden", !visible);
}

function setAmyPose(step) {
    if (step.hideAmy) {
        amyWrap.classList.add("is-chart");
        setAmyVisible(false);
        return;
    }
    amyWrap.classList.remove("is-chart");
    setAmyVisible(true);

    let pose = step.pose;
    const styleBtn = document.getElementById("btn-style");
    // Giữ trạng thái 2D nếu user đang ở mode 2D
    if (styleBtn && styleBtn.textContent === "Pixel / 2D") {
        pose = step.pose.replace("/pixel/", "/normal/");
    }

    if (spriteEl.getAttribute("src") !== pose) {
        spriteEl.style.opacity = "0";
        setTimeout(() => {
            spriteEl.src = pose;
            spriteEl.onload = () => {
                spriteEl.style.opacity = "1";
            };
        }, 120);
    }
    spriteEl.className = "vn-sprite";
    if (step.anim && step.anim !== "none") {
        requestAnimationFrame(() => spriteEl.classList.add(step.anim));
    } else {
        spriteEl.classList.add("idle");
    }
}

function runDialogue(lines, callback) {
    state.activeDialogue = lines;
    state.dialogueIndex = 0;
    state.dialogueCallback = callback || null;
    setDialogueVisible(true);
    displayDialogueStep(0);
}

function displayDialogueStep(index) {
    const step = state.activeDialogue[index];
    if (!step) return;
    nameEl.textContent = step.name;
    setAmyPose(step);
    handleDialogueStepEvent(step);
    dialogueHistory.push({ name: step.name, text: step.text });
    typeDialogue(step.text);
}

function handleDialogueStepEvent(step) {
    if (Object.prototype.hasOwnProperty.call(step, "aiWordStats")) {
        setAiWordLoopStatsVisible(Boolean(step.aiWordStats));
    }

    if (step.aiWordQuote === true) {
        setAiWordQuoteVisible(true, step.text);
    } else if (step.aiWordQuote === false) {
        setAiWordQuoteVisible(false);
    }

    if (step.audioId) {
        playStepAudio(step.audioId);
    }
}

function setAiWordLoopStatsVisible(visible) {
    if (!aiWordLoopScreen) return;
    aiWordLoopScreen.classList.toggle("stats-active", visible);
}

function setAiWordQuoteVisible(visible, quoteText = "") {
    const panel = document.getElementById("aiword-quote-panel");
    const quote = document.getElementById("aiword-quote-text");
    if (!panel) return;
    if (quote && quoteText) quote.textContent = `"${quoteText}"`;
    panel.classList.toggle("active", visible);
}

function playStepAudio(audioId) {
    const muteBtn = document.getElementById("btn-mute");
    if (muteBtn && muteBtn.textContent === "🔇") return;

    const audio = document.getElementById(audioId);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
        // Autoplay may be blocked; dialogue should keep moving.
    });
}

function typeDialogue(text) {
    clearTimeout(state.autoTimer);
    clearInterval(state.typeTimer);
    state.typing = true;
    textEl.textContent = "";
    indicator.classList.remove("visible");
    let index = 0;
    const speed = Math.max(14, Math.min(28, 900 / Math.max(text.length, 1)));
    state.typeTimer = setInterval(() => {
        if (index < text.length) {
            textEl.textContent += text.charAt(index);
            index++;
            return;
        }
        finishTyping(false);
    }, speed);
}

function finishTyping(forceFull) {
    clearInterval(state.typeTimer);
    state.typeTimer = null;
    if (forceFull && state.activeDialogue[state.dialogueIndex]) {
        textEl.textContent = state.activeDialogue[state.dialogueIndex].text;
    }
    state.typing = false;
    indicator.classList.add("visible");
    if (state.auto) {
        const text = state.activeDialogue[state.dialogueIndex]?.text || "";
        const delay = Math.min(6200, Math.max(1800, text.length * 42));
        state.autoTimer = setTimeout(() => advanceDialogue(true), delay);
    }
}

function advanceDialogue(auto = false) {
    if (!state.activeDialogue.length) return;
    if (state.typing) {
        if (!auto) finishTyping(true);
        return;
    }
    clearTimeout(state.autoTimer);
    if (state.dialogueIndex < state.activeDialogue.length - 1) {
        state.dialogueIndex++;
        displayDialogueStep(state.dialogueIndex);
        return;
    }
    if (state.dialogueCallback) {
        const callback = state.dialogueCallback;
        state.dialogueCallback = null;
        callback();
    }
}

function toggleAuto(event) {
    event.stopPropagation();
    state.auto = !state.auto;
    btnAuto.classList.toggle("active", state.auto);
    if (state.auto && !state.typing) {
        state.autoTimer = setTimeout(() => advanceDialogue(true), 1100);
    } else {
        clearTimeout(state.autoTimer);
    }
}

function openLog(event) {
    event.stopPropagation();
    logBody.innerHTML = "";
    dialogueHistory.forEach((entry) => {
        const div = document.createElement("div");
        div.className = "vn-log-entry";
        div.innerHTML = `<span class="vn-log-name">${entry.name}:</span><span class="vn-log-text">${entry.text}</span>`;
        logBody.appendChild(div);
    });
    logModal.classList.add("visible");
    logBody.scrollTop = logBody.scrollHeight;
}

function closeLog() {
    logModal.classList.remove("visible");
}

function toggleLang(event) {
    event.stopPropagation();
    const btn = document.getElementById("btn-lang");
    const currentLang = btn.textContent.includes("VI") ? "EN" : "VI";
    btn.textContent = currentLang === "VI" ? "Giọng: EN" : "Giọng: VI";
    // TODO: Implement actual language switching logic
}

function toggleStyle(event) {
    event.stopPropagation();
    const btn = document.getElementById("btn-style");
    const currentSrc = spriteEl.getAttribute("src");
    
    // Check current style and toggle
    if (currentSrc.includes("/pixel/")) {
        // Currently pixel, switch to normal
        const newSrc = currentSrc.replace("/pixel/", "/normal/");
        btn.textContent = "Pixel / 2D";
        if (currentSrc !== newSrc) {
            spriteEl.style.opacity = "0";
            setTimeout(() => {
                spriteEl.src = newSrc;
                spriteEl.onload = () => {
                    spriteEl.style.opacity = "1";
                };
            }, 120);
        }
    } else {
        // Currently normal, switch to pixel
        const newSrc = currentSrc.replace("/normal/", "/pixel/");
        btn.textContent = "2D / Pixel";
        if (currentSrc !== newSrc) {
            spriteEl.style.opacity = "0";
            setTimeout(() => {
                spriteEl.src = newSrc;
                spriteEl.onload = () => {
                    spriteEl.style.opacity = "1";
                };
            }, 120);
        }
    }
}

function toggleMute(event) {
    event.stopPropagation();
    const btn = document.getElementById("btn-mute");
    const isMuted = btn.textContent === "🔇";
    btn.textContent = isMuted ? "🔊" : "🔇";
    btn.title = isMuted ? "Bật/Tắt âm thanh" : "Tắt tiếng";
    // TODO: Implement actual audio mute logic
}

function buildClassroom() {
    desks.forEach(([x, y]) => {
        const desk = document.createElement("div");
        desk.className = "desk";
        placeWorld(desk, x, y);
        deskLayer.appendChild(desk);
    });

    students.forEach((student) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pixel-person student";
        btn.dataset.id = student.id;
        btn.dataset.label = student.label;
        btn.style.setProperty("--shirt", student.shirt);
        btn.style.setProperty("--hair", student.hair);
        btn.innerHTML = '<div class="hair"></div><div class="head"></div><div class="face"></div><div class="body"></div><div class="legs"></div>';
        placeWorld(btn, student.x, student.y);
        btn.addEventListener("click", (event) => {
            event.stopPropagation();
            handleStudentTap(student);
        });
        studentLayer.appendChild(btn);
    });

    placeWorld(playerEl, state.player.x, state.player.y);
}

function startIntro() {
    state.phase = "intro";
    showScreen("game");
    setDialogueVisible(true);
    setAmyVisible(true);
    runDialogue(dialogueSets.intro, showGuide);
}

function showGuide() {
    state.phase = "guide";
    setDialogueVisible(false);
    setAmyVisible(false);
    guidePanel.classList.add("is-visible");
}

function beginSurvey() {
    state.phase = "survey";
    guidePanel.classList.remove("is-visible");
    gameHud.classList.add("is-visible");
    mobileControls.classList.add("is-visible");
    promptEl.classList.add("is-visible");
    updateSurveyHud();
}

function updateSurveyHud() {
    const count = state.surveyed.size;
    progressLabel.textContent = `Phiếu khảo sát: ${count}/10`;
    progressFill.style.width = `${count * 10}%`;
    let daily = 0;
    let weekly = 0;
    state.surveyed.forEach((id) => {
        const student = students.find((s) => s.id === id);
        if (student) {
            if (student.category === "Hằng ngày") daily++;
            else if (student.category === "Vài lần/tuần") weekly++;
        }
    });
    progressStats.textContent = `Hằng ngày: ${daily} | Vài lần/tuần: ${weekly}`;
}

function distanceToStudent(student) {
    const dx = state.player.x - student.x;
    const dy = state.player.y - student.y;
    return Math.hypot(dx, dy);
}

function findNearestStudent() {
    let nearest = null;
    let min = Infinity;
    students.forEach((student) => {
        if (state.surveyed.has(student.id)) return;
        const dist = distanceToStudent(student);
        if (dist < min) {
            min = dist;
            nearest = student;
        }
    });
    return min <= 82 ? nearest : null;
}

function updateNearState() {
    document.querySelectorAll(".student").forEach((el) => el.classList.remove("is-near"));
    state.nearest = findNearestStudent();
    if (state.nearest) {
        const el = document.querySelector(`.student[data-id="${state.nearest.id}"]`);
        if (el) el.classList.add("is-near");
        nearLabel.textContent = `Gần ${state.nearest.name}`;
        promptEl.textContent = `Nhấn E / Space / Hỏi để phỏng vấn ${state.nearest.name}.`;
        interactButton.disabled = false;
    } else {
        nearLabel.textContent = "Tìm bạn để hỏi";
        promptEl.textContent = "Lại gần một bạn học rồi nhấn E hoặc nút Hỏi.";
        interactButton.disabled = true;
    }
}

function handleStudentTap(student) {
    if (state.phase !== "survey") return;
    if (state.surveyed.has(student.id)) {
        promptEl.textContent = `${student.name} đã trả lời rồi. Tìm bạn khác nhé.`;
        promptEl.classList.add("is-visible");
        return;
    }
    if (distanceToStudent(student) <= 92) {
        openStudentSurvey(student);
        return;
    }
    promptEl.textContent = `Chưa đủ gần ${student.name}. Hãy di chuyển tới cạnh bạn ấy trước.`;
    promptEl.classList.add("is-visible");
}

function tryInteract() {
    if (state.phase !== "survey") return;
    if (state.nearest) {
        openStudentSurvey(state.nearest);
        return;
    }
    promptEl.textContent = "Chưa đủ gần ai cả. Di chuyển tới cạnh một học sinh trước.";
    promptEl.classList.add("is-visible");
}

function openStudentSurvey(student) {
    state.phase = "student";
    state.activeStudent = student;
    surveyName.textContent = student.name;
    surveyBadge.textContent = student.category;
    surveyText.textContent = `"${student.response}"`;
    surveyPanel.classList.add("is-visible");
}

function recordStudentAnswer() {
    if (!state.activeStudent) return;
    state.surveyed.add(state.activeStudent.id);
    const el = document.querySelector(`.student[data-id="${state.activeStudent.id}"]`);
    if (el) {
        el.classList.add("is-surveyed");
        el.classList.remove("is-near");
    }
    surveyPanel.classList.remove("is-visible");
    state.activeStudent = null;
    state.phase = "survey";
    updateSurveyHud();
    updateNearState();
    if (state.surveyed.size >= students.length) {
        finishSurvey();
    }
}

function finishSurvey() {
    state.phase = "outro";
    mobileControls.classList.remove("is-visible");
    promptEl.classList.remove("is-visible");
    gameHud.classList.remove("is-visible");
    setTimeout(() => {
        setDialogueVisible(true);
        setAmyVisible(true);
        runDialogue(dialogueSets.outro, startChartScene);
    }, 550);
}

function startChartScene() {
    state.phase = "chart";
    mobileControls.classList.remove("is-visible");
    promptEl.classList.remove("is-visible");
    gameHud.classList.remove("is-visible");
    surveyPanel.classList.remove("is-visible");
    guidePanel.classList.remove("is-visible");
    if (chartNextWrap) chartNextWrap.classList.remove("is-visible");
    showScreen("chart");
    playChartIntro();
    setDialogueVisible(true);
    amyWrap.classList.add("is-chart");
    runDialogue(dialogueSets.chart, () => {
        // Sau khi Amy nói xong, ẩn dialogue bar để người chơi tương tác với biểu đồ
        setTimeout(() => {
            setDialogueVisible(false);
            // Highlight cần gạt để user biết cần tương tác
            dataLever.style.animation = "pulse 1s ease-in-out infinite";
        }, 1200);
    });
}

function playChartIntro() {
    if (!canUseAnime()) return;

    anime.remove(".chart-copy");
    anime.remove(".chart-card");
    anime.remove(".donut-bg");
    anime.remove(".lever-panel");
    anime.set(".chart-copy, .chart-card", { opacity: 0, translateY: 28 });
    anime.set(".donut-bg", { strokeDasharray: "100", strokeDashoffset: 100 });

    // Lever panel bounces in first - draws attention
    anime({
        targets: ".lever-panel",
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.92, 1],
        duration: 680,
        easing: "easeOutBack",
        delay: 80
    });

    // Chart copy slides up smoothly
    anime({
        targets: ".chart-copy",
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 720,
        easing: "easeOutQuart",
        delay: 120
    });

    // Chart card follows with stagger
    anime({
        targets: ".chart-card",
        opacity: [0, 1],
        translateY: [34, 0],
        duration: 820,
        easing: "easeOutQuart",
        delay: 260
    });

    // Donut background ring draws itself
    anime({
        targets: ".donut-bg",
        strokeDashoffset: [100, 0],
        duration: 980,
        easing: "easeInOutQuad",
        delay: 520
    });
}

function movePlayer(deltaMs) {
    if (state.phase !== "survey") return;
    let dx = 0;
    let dy = 0;
    const activeDirs = new Set([...state.keys, ...state.touchDirs]);
    if (activeDirs.has("ArrowLeft") || activeDirs.has("a") || activeDirs.has("left")) dx -= 1;
    if (activeDirs.has("ArrowRight") || activeDirs.has("d") || activeDirs.has("right")) dx += 1;
    if (activeDirs.has("ArrowUp") || activeDirs.has("w") || activeDirs.has("up")) dy -= 1;
    if (activeDirs.has("ArrowDown") || activeDirs.has("s") || activeDirs.has("down")) dy += 1;

    if (dx || dy) {
        state.target = null;
    } else if (state.target) {
        const tx = state.target.x - state.player.x;
        const ty = state.target.y - state.player.y;
        const dist = Math.hypot(tx, ty);
        if (dist > 4) {
            dx = tx / dist;
            dy = ty / dist;
        } else {
            state.target = null;
        }
    }

    if (dx || dy) {
        const len = Math.hypot(dx, dy) || 1;
        const speed = 210;
        state.player.x += (dx / len) * speed * deltaMs / 1000;
        state.player.y += (dy / len) * speed * deltaMs / 1000;
        state.player.x = Math.max(45, Math.min(world.width - 45, state.player.x));
        state.player.y = Math.max(190, Math.min(world.height - 42, state.player.y));
        playerEl.classList.add("is-moving");
    } else {
        playerEl.classList.remove("is-moving");
    }

    placeWorld(playerEl, state.player.x, state.player.y);
    updateNearState();
}

function gameLoop(now) {
    const delta = Math.min(32, now - state.lastFrame);
    state.lastFrame = now;
    movePlayer(delta);
    requestAnimationFrame(gameLoop);
}

function classroomPointerToWorld(event) {
    const rect = classroom.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * world.width;
    const y = (event.clientY - rect.top) / rect.height * world.height;
    return {
        x: Math.max(45, Math.min(world.width - 45, x)),
        y: Math.max(190, Math.min(world.height - 42, y))
    };
}

function buildChart() {
    const segments = [...document.querySelectorAll(".donut-segment")];
    chartData.forEach((item, index) => {
        const circle = segments[index];
        circle.style.stroke = item.color;
        circle.style.strokeDasharray = "0 100";
        circle.style.strokeDashoffset = "0";
        circle.addEventListener("click", () => selectChartSegment(index));
        const button = document.createElement("button");
        button.type = "button";
        button.className = "legend-button";
        button.dataset.chartIndex = index;
        button.innerHTML = `<span class="legend-dot" style="--color:${item.color}"></span><span>${item.label}</span><strong class="legend-pct" data-pct="${item.value.toLocaleString("vi-VN")}%" style="visibility:hidden">—</strong>`;
        button.addEventListener("click", () => selectChartSegment(index));
        legendEl.appendChild(button);
    });
    updateChart(0, { idle: true });
}

let isPulling = false;

function pullLever() {
    if (isPulling || state.chartComplete) return;
    isPulling = true;

    dataLever.style.animation = "";
    dataLever.classList.add("is-pulled");
    leverReadout.textContent = "Đang quét...";

    if (!canUseAnime()) {
        runFallbackChartScan();
        return;
    }

    const progress = { value: state.chartProgress };
    const segments = [...document.querySelectorAll(".donut-segment")];
    const arm = document.getElementById("lever-arm");

    anime.remove(dataLever);
    anime.remove(arm);
    anime.remove(".donut-wrap svg");
    anime.remove(".donut-center div");
    anime.remove(segments);
    anime.remove(".chart-card");

    // Lever arm: elastic rotation like a real slot machine
    anime({
        targets: arm,
        rotate: ["-25deg", "25deg"],
        translateX: "-50%",
        duration: 600,
        easing: "easeOutElastic(1, .6)"
    });

    // Lever button press feedback
    anime({
        targets: dataLever,
        scale: [1, 0.94, 1],
        duration: 420,
        easing: "easeOutBack"
    });

    // Donut SVG "scanning" wobble - machine processing feel
    anime({
        targets: ".donut-wrap svg",
        rotate: [-90, -86, -90],
        duration: 2600,
        easing: "easeInOutSine"
    });

    // Center text pulses during scanning
    anime({
        targets: ".donut-center div",
        scale: [0.94, 1],
        duration: 520,
        easing: "easeOutBack"
    });

    // Card vibrates like a machine working
    anime({
        targets: ".chart-card",
        translateX: [0, 2, -2, 1, -1, 0],
        duration: 400,
        easing: "easeInOutSine",
        loop: 3
    });

    // Segments glow sequentially during scan - "reading" effect
    segments.forEach((seg, i) => {
        anime({
            targets: seg,
            filter: [
                "drop-shadow(0 0 0px transparent)",
                "drop-shadow(0 0 8px " + chartData[i].color + ")",
                "drop-shadow(0 0 0px transparent)"
            ],
            duration: 600,
            delay: 400 + i * 350,
            easing: "easeInOutSine"
        });
    });

    // Main progress animation
    anime({
        targets: progress,
        value: 100,
        duration: 2600,
        easing: "easeOutQuart",
        update: () => updateChart(Math.round(progress.value)),
        complete: () => {
            if (!state.chartComplete) {
                updateChart(100);
            }
            // Reset lever arm smoothly
            anime({
                targets: arm,
                rotate: "-25deg",
                translateX: "-50%",
                duration: 500,
                easing: "easeOutQuad"
            });
            dataLever.classList.remove("is-pulled");
            leverReadout.textContent = "Hoàn thành";
            isPulling = false;
        }
    });
}

function runFallbackChartScan() {
    let progress = 0;
    const duration = 2200;
    const startTime = performance.now();

    function animate(now) {
        const elapsed = now - startTime;
        progress = Math.min(100, (elapsed / duration) * 100);

        updateChart(Math.floor(progress));

        if (progress < 100) {
            requestAnimationFrame(animate);
        } else {
            if (!state.chartComplete) {
                updateChart(100);
            }
            dataLever.classList.remove("is-pulled");
            leverReadout.textContent = "Hoàn thành";
            isPulling = false;
        }
    }

    requestAnimationFrame(animate);
}

function updateChart(progress, options = {}) {
    state.chartProgress = progress;
    leverReadout.textContent = progress >= 100 ? "Hoàn thành" : `${progress}%`;
    const segments = [...document.querySelectorAll(".donut-segment")];
    let offset = 0;
    chartData.forEach((item, index) => {
        const visibleValue = item.value * progress / 100;
        segments[index].style.strokeDasharray = `${visibleValue} ${100 - visibleValue}`;
        segments[index].style.strokeDashoffset = String(-offset);
        offset += visibleValue;
    });
    if (progress >= 100 && state.chartComplete) {
        leverReadout.textContent = "Hoàn thành";
        return;
    }
    if (options.idle) {
        leverReadout.textContent = "Chưa quét";
        centerValue.textContent = "0%";
        centerLabel.textContent = "Kéo cần để quét";
        return;
    }
    centerValue.textContent = `${Math.round(58.8 * progress / 100)}%`;
    centerLabel.textContent = progress < 100 ? "Đang quét dữ liệu" : "Hằng ngày";
    if (progress >= 100 && !state.chartComplete) {
        state.chartComplete = true;
        completeChartReveal();
        selectChartSegment(0);
        startChartNextTimer();
    }
}

function startChartNextTimer() {
    if (state.chartNextTimer !== null) return;
    showChartNextButton();
    state.chartNextTimer = setTimeout(() => {
        goToNextChapter();
    }, 300000); // 5 phút
}

function showChartNextButton() {
    if (chartNextWrap) chartNextWrap.classList.add("is-visible");
}

function goToNextChapter() {
    if (state.chartNextTimer) {
        clearTimeout(state.chartNextTimer);
        state.chartNextTimer = null;
    }
    startStarSequence();
}

function completeChartReveal() {
    const segments = [...document.querySelectorAll(".donut-segment")];
    const chartCard = $(".chart-card");

    chartCard.classList.add("is-complete");
    revealLegendItems();
    burstSparks();

    if (!canUseAnime()) return;

    // Center div elastic pop-in (no opacity - selectChartSegment runs right after)
    anime({
        targets: ".donut-center div",
        scale: [0.6, 1.1, 1],
        duration: 700,
        easing: "easeOutElastic(1, .65)"
    });

    // Segments "domino reveal" - sequential glow burst per color
    segments.forEach((circle, i) => {
        anime({
            targets: circle,
            opacity: [0, 1],
            strokeWidth: [18, 26, 22],
            filter: [
                "drop-shadow(0 0 0px transparent)",
                "drop-shadow(0 0 12px " + chartData[i].color + ")",
                "drop-shadow(0 0 6px " + chartData[i].color + ")"
            ],
            duration: 800,
            delay: i * 140,
            easing: "easeOutElastic(1, .6)",
            complete: () => {
                circle.style.strokeWidth = "";
                circle.style.filter = "";
            }
        });
    });

    // Card bounce
    anime({
        targets: ".chart-card",
        translateY: [0, -10, 0],
        duration: 700,
        easing: "easeOutBack"
    });

    // Donut wrap pulse
    anime({
        targets: ".donut-wrap",
        scale: [1, 1.03, 1],
        duration: 800,
        easing: "easeOutSine"
    });
}

function revealLegendItems() {
    const buttons = [...document.querySelectorAll(".legend-button")];
    const pctEls = [...document.querySelectorAll(".legend-pct")];

    if (!canUseAnime()) {
        buttons.forEach((button) => button.classList.add("is-revealed"));
        pctEls.forEach((el) => {
            el.textContent = el.dataset.pct;
            el.style.visibility = "visible";
        });
        return;
    }

    buttons.forEach((button) => button.classList.add("is-revealed"));
    anime.set(buttons, { opacity: 0, translateX: -18 });

    // Legend items cascade in from the left
    anime({
        targets: buttons,
        opacity: [0, 1],
        translateX: [-18, 0],
        delay: anime.stagger(115),
        duration: 560,
        easing: "easeOutQuart",
        complete: () => {
            buttons.forEach((button) => {
                button.style.opacity = "";
                button.style.transform = "";
            });
        }
    });

    // Percentage counters - odometer count-up effect
    pctEls.forEach((el, index) => {
        const target = Number(el.dataset.pct.replace("%", "").replace(",", "."));
        const counter = { value: 0 };
        el.style.visibility = "visible";
        anime({
            targets: counter,
            value: target,
            delay: 180 + index * 115,
            duration: 720,
            easing: "easeOutExpo",
            update: () => {
                el.textContent = `${counter.value.toLocaleString("vi-VN", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                })}%`;
            },
            complete: () => {
                el.textContent = el.dataset.pct;
            }
        });
    });
}

function selectChartSegment(index) {
    if (!state.chartComplete) return;
    const item = chartData[index];
    if (!item) return;
    document.querySelectorAll(".donut-segment").forEach((el) => {
        el.style.strokeWidth = "";
    });
    document.querySelectorAll(".donut-segment").forEach((el) => el.classList.toggle("is-active", Number(el.dataset.chartIndex) === index));
    document.querySelectorAll(".legend-button").forEach((el) => el.classList.toggle("is-active", Number(el.dataset.chartIndex) === index));
    const copy = $(".chart-copy p");
    copy.textContent = item.note;

    if (canUseAnime()) {
        anime.remove(".donut-center div");
        anime.remove(".donut-center strong");
        anime.remove(".donut-center span");

        // Center text swap with elastic bounce
        anime({
            targets: ".donut-center div",
            scale: [1, 0.85, 1.08, 1],
            duration: 500,
            easing: "easeOutElastic(1, .65)"
        });
        anime({
            targets: ".donut-center strong",
            opacity: [1, 0, 1],
            scale: [1, 0.8, 1.1, 1],
            duration: 450,
            easing: "easeOutElastic(1, .6)"
        });
        anime({
            targets: ".donut-center span",
            opacity: [1, 0, 1],
            duration: 350,
            easing: "easeInOutQuad"
        });

        // Selected segment elastic bounce + glow
        const targetSegment = document.querySelector(`.donut-segment[data-chart-index="${index}"]`);
        if (targetSegment) {
            anime({
                targets: targetSegment,
                strokeWidth: [18, 28, 23],
                duration: 600,
                easing: "easeOutElastic(1, .55)",
                complete: () => {
                    targetSegment.style.strokeWidth = "";
                }
            });
            anime({
                targets: targetSegment,
                filter: [
                    "drop-shadow(0 0 2px rgba(23, 33, 61, 0.1))",
                    "drop-shadow(0 0 14px rgba(23, 33, 61, 0.45))",
                    "drop-shadow(0 0 8px rgba(23, 33, 61, 0.28))"
                ],
                duration: 600,
                easing: "easeOutSine"
            });
        }

        // Other segments shrink back to normal
        document.querySelectorAll(`.donut-segment:not([data-chart-index="${index}"])`).forEach((seg) => {
            anime({
                targets: seg,
                strokeWidth: 18,
                filter: "drop-shadow(0 0 0px transparent)",
                duration: 300,
                easing: "easeOutQuad"
            });
        });
    }

    centerValue.textContent = `${item.value.toLocaleString("vi-VN")}%`;
    centerLabel.textContent = item.label;
}

function burstSparks() {
    for (let i = 0; i < 34; i++) {
        const spark = document.createElement("span");
        spark.className = "spark";
        spark.style.left = `${45 + Math.random() * 20}%`;
        spark.style.top = `${34 + Math.random() * 22}%`;
        spark.style.setProperty("--dx", `${-160 + Math.random() * 320}px`);
        spark.style.setProperty("--dy", `${-140 + Math.random() * 260}px`);
        sparkField.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
    }
}

function bindControls() {
    $("#begin-survey").addEventListener("click", beginSurvey);
    recordAnswer.addEventListener("click", recordStudentAnswer);
    interactButton.addEventListener("click", tryInteract);
    dataLever.addEventListener("click", pullLever);
    if (chartNextBtn) chartNextBtn.addEventListener("click", goToNextChapter);

    window.addEventListener("keydown", (event) => {
        const tag = event.target.tagName;
        if (tag === "TEXTAREA" || tag === "INPUT" || event.target.isContentEditable) return;

        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "w", "a", "s", "d"].includes(key)) {
            state.keys.add(key);
            event.preventDefault();
        }
        if (key === "e" || key === " " || key === "Enter") {
            if (state.phase === "survey") {
                tryInteract();
                event.preventDefault();
            }
        }
    });

    window.addEventListener("keyup", (event) => {
        const tag = event.target.tagName;
        if (tag === "TEXTAREA" || tag === "INPUT" || event.target.isContentEditable) return;

        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
        state.keys.delete(key);
    });

    document.querySelectorAll("[data-dir]").forEach((button) => {
        const dir = button.dataset.dir;
        const start = (event) => {
            event.preventDefault();
            state.touchDirs.add(dir);
        };
        const end = (event) => {
            event.preventDefault();
            state.touchDirs.delete(dir);
        };
        button.addEventListener("pointerdown", start);
        button.addEventListener("pointerup", end);
        button.addEventListener("pointercancel", end);
        button.addEventListener("pointerleave", end);
    });
}

/* ═══════════════════════════════════════════
   STAR FIELD
   ═══════════════════════════════════════════ */
function renderStarField() {
    const canvas = starCanvas;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const W = window.innerWidth;
    const H = window.innerHeight;

    ctx.fillStyle = "#0a0a1a";
    ctx.fillRect(0, 0, W, H);

    // 99.6% ordinary stars — many, larger, brighter
    const totalStars = 1000;
    const ordinaryCount = Math.round(totalStars * 0.996);
    const specialCount = totalStars - ordinaryCount;
    const stars = [];

    for (let i = 0; i < ordinaryCount; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const r = 2 + Math.random() * 3;
        const alpha = 0.5 + Math.random() * 0.4;
        stars.push({ x, y, r, alpha, special: false });
    }

    // 0.4% — tiny special stars (4 stars)
    const specialStars = [];
    for (let i = 0; i < specialCount; i++) {
        const x = W * (0.2 + Math.random() * 0.6);
        const y = H * (0.3 + Math.random() * 0.4);
        const r = 0.8; // Very tiny
        const alpha = 1;
        const star = { x, y, r, alpha, special: true };
        stars.push(star);
        specialStars.push(star);
    }

    // Animate stars appearing
    let drawn = 0;
    const batchSize = 20;
    const totalBatches = Math.ceil(stars.length / batchSize);

    function drawBatch() {
        const end = Math.min(drawn + batchSize, stars.length);
        for (let i = drawn; i < end; i++) {
            const s = stars[i];
            if (s.special) {
                // Tiny special star — no glow, just a tiny dot
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = "#ff6f91";
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(159, 215, 255, ${s.alpha})`;
                ctx.fill();
            }
        }
        drawn = end;
        if (drawn < stars.length) {
            requestAnimationFrame(drawBatch);
        } else {
            // Show labels after all stars drawn
            setTimeout(() => {
                starLabel.classList.add("visible");
                starUniqueLabel.classList.add("visible");
            }, 400);

            // Pulse the special stars
            pulseSpecialStars(ctx, specialStars, W, H);
        }
    }
    requestAnimationFrame(drawBatch);
}

let starPulseAnim = null;
function pulseSpecialStars(ctx, stars, W, H) {
    let phase = 0;
    function pulse() {
        phase += 0.05;
        const scale = 1 + Math.sin(phase) * 0.4;

        stars.forEach(star => {
            const r = star.r * scale;

            // Clear area around star
            ctx.fillStyle = "#0a0a1a";
            ctx.fillRect(star.x - 8, star.y - 8, 16, 16);

            // Small glow for visibility
            const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, r * 4);
            grad.addColorStop(0, `rgba(255, 111, 145, ${0.6 + Math.sin(phase) * 0.3})`);
            grad.addColorStop(0.5, "rgba(255, 111, 145, 0.2)");
            grad.addColorStop(1, "rgba(255, 111, 145, 0)");
            ctx.fillStyle = grad;
            ctx.fillRect(star.x - r * 4, star.y - r * 4, r * 8, r * 8);

            ctx.beginPath();
            ctx.arc(star.x, star.y, r, 0, Math.PI * 2);
            ctx.fillStyle = "#ff6f91";
            ctx.fill();
        });

        starPulseAnim = requestAnimationFrame(pulse);
    }
    pulse();
}

function cleanupStarField() {
    if (starPulseAnim) {
        cancelAnimationFrame(starPulseAnim);
        starPulseAnim = null;
    }
    starLabel.classList.remove("visible");
    starUniqueLabel.classList.remove("visible");
}

/* ═══════════════════════════════════════════
   THREE.JS GLOBE
   ═══════════════════════════════════════════ */
let globeScene, globeCamera, globeRenderer, globeMesh, globeAnimId;
let globeRotated = false;
let globeRotateCallback = null;

function initGlobe() {
    if (!window.THREE) return;

    globeScene = new THREE.Scene();
    const w = globeContainer.clientWidth;
    const h = globeContainer.clientHeight;
    globeCamera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    globeCamera.position.z = 3;

    globeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    globeRenderer.setSize(w, h);
    globeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    globeContainer.appendChild(globeRenderer.domElement);

    // Lighting
    globeScene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(5, 3, 5);
    globeScene.add(dirLight);

    // Earth sphere with real texture
    const sphereGeo = new THREE.SphereGeometry(1, 64, 64);
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    const earthTexture = loader.load(
        "assets/img/chapter%204/texture.webp",
        () => { /* texture loaded */ },
        undefined,
        () => {
            // Fallback if texture fails — plain blue sphere
            globeMesh.material.color.setHex(0x1a5276);
            globeMesh.material.map = null;
        }
    );
    earthTexture.anisotropy = 4;

    const sphereMat = new THREE.MeshPhongMaterial({
        map: earthTexture,
        color: 0xffffff,
        shininess: 25
    });
    globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeScene.add(globeMesh);



    // Atmospheric glow ring
    const ringGeo = new THREE.RingGeometry(1.08, 1.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffd166,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    globeScene.add(ring);

    // Auto rotation
    let autoRotateSpeed = 0.003;

    // Drag interaction — cumulative across all drags
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let cumulativeDrag = 0;

    const onPointerDown = (e) => {
        if (!state.globeDragEnabled) return;
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    };

    const onPointerMove = (e) => {
        if (!isDragging || !state.globeDragEnabled) return;
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        cumulativeDrag += Math.abs(dx) + Math.abs(dy);
        globeMesh.rotation.y += dx * 0.005;
        globeMesh.rotation.x += dy * 0.005;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        // Trigger transition once enough cumulative drag
        if (cumulativeDrag > 120 && !globeRotated) {
            globeRotated = true;
            globeHint.classList.remove("visible");
            if (globeRotateCallback) {
                const cb = globeRotateCallback;
                globeRotateCallback = null;
                setTimeout(cb, 600);
            }
        }
    };

    const onPointerUp = () => {
        isDragging = false;
    };

    globeRenderer.domElement.addEventListener("pointerdown", onPointerDown);
    globeRenderer.domElement.addEventListener("pointermove", onPointerMove);
    globeRenderer.domElement.addEventListener("pointerup", onPointerUp);
    globeRenderer.domElement.addEventListener("pointerleave", onPointerUp);

    function animateGlobe() {
        if (!isDragging) {
            globeMesh.rotation.y += autoRotateSpeed;
        }
        globeRenderer.render(globeScene, globeCamera);
        globeAnimId = requestAnimationFrame(animateGlobe);
    }
    animateGlobe();

    // Handle resize
    const onResize = () => {
        const nw = globeContainer.clientWidth;
        const nh = globeContainer.clientHeight;
        globeCamera.aspect = nw / nh;
        globeCamera.updateProjectionMatrix();
        globeRenderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);
}

function cleanupGlobe() {
    if (globeAnimId) {
        cancelAnimationFrame(globeAnimId);
        globeAnimId = null;
    }
    if (globeRenderer) {
        globeRenderer.dispose();
        globeContainer.innerHTML = "";
    }
    globeScene = null;
    globeCamera = null;
    globeRenderer = null;
    globeMesh = null;
    globeRotated = false;
    state.globeDragEnabled = false;
    globeStat.classList.remove("visible");
    globeHint.classList.remove("visible");
}

/* ═══════════════════════════════════════════
   FIREWORKS
   ═══════════════════════════════════════════ */
let fireworkAnimId = null;

function startFireworks() {
    const canvas = fireworkCanvas;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const W = window.innerWidth;
    const H = window.innerHeight;

    const particles = [];
    const colors = ["#ff6f91", "#ffd166", "#37d37f", "#667eea", "#9fd7ff", "#ff8a5b", "#7a5cff"];

    function spawnBurst(x, y) {
        const count = 60 + Math.random() * 40;
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.3;
            const speed = 2 + Math.random() * 4;
            particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                decay: 0.012 + Math.random() * 0.01,
                size: 2 + Math.random() * 3,
                color
            });
        }
    }

    // Launch fireworks in bursts
    let burstCount = 0;
    const maxBursts = 12;
    function launchBurst() {
        if (burstCount >= maxBursts) return;
        spawnBurst(
            W * (0.2 + Math.random() * 0.6),
            H * (0.15 + Math.random() * 0.4)
        );
        burstCount++;
        if (burstCount < maxBursts) {
            setTimeout(launchBurst, 300 + Math.random() * 500);
        }
    }
    launchBurst();

    function animate() {
        ctx.fillStyle = "rgba(10, 10, 26, 0.15)";
        ctx.fillRect(0, 0, W, H);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.03; // gravity
            p.vx *= 0.99;
            p.life -= p.decay;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.globalAlpha = p.life;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        if (particles.length > 0 || burstCount < maxBursts) {
            fireworkAnimId = requestAnimationFrame(animate);
        }
    }
    fireworkAnimId = requestAnimationFrame(animate);
}

function playSfx(name) {
    try {
        const audio = new Audio(`audio/SFX/${name}`);
        audio.volume = 0.5;
        audio.play();
    } catch (e) {
        // SFX optional; silently fail if file missing
    }
}

function cleanupFireworks() {
    if (fireworkAnimId) {
        cancelAnimationFrame(fireworkAnimId);
        fireworkAnimId = null;
    }
    vipCard.classList.remove("visible");
}

/* ═══════════════════════════════════════════
   SEQUENCE FLOW
   ═══════════════════════════════════════════ */
function startStarSequence() {
    state.phase = "starIntro";
    setDialogueVisible(true);
    setAmyVisible(true);
    amyWrap.classList.remove("is-chart");

    runDialogue(dialogueSets.starIntro, () => {
        // After 3.1 and 3.2 → transition to star field
        setDialogueVisible(false);
        setAmyVisible(false);
        showScreen("star");
        renderStarField();

        // Wait for star field to settle, then show starOutro dialogues
        setTimeout(() => {
            setDialogueVisible(true);
            setAmyVisible(true);
            amyWrap.classList.remove("is-chart");
            runDialogue(dialogueSets.starOutro, () => {
                // After 3.3, 3.4, 3.5 → transition to globe
                cleanupStarField();
                setDialogueVisible(false);
                setAmyVisible(false);
                startGlobeSequence();
            });
        }, 3000);
    });
}

function startGlobeSequence() {
    state.phase = "globe";
    showScreen("globe");
    initGlobe();

    // Show stat and hint after brief delay
    setTimeout(() => {
        globeStat.classList.add("visible");
    }, 600);

    // Show dialogue 3.6 with globe visible
    setTimeout(() => {
        setDialogueVisible(true);
        amyWrap.classList.add("is-chart");
        runDialogue(dialogueSets.globe, () => {
            // After 3.6 → enable dragging and show hint to rotate globe
            setDialogueVisible(false);
            state.globeDragEnabled = true;
            globeHint.classList.add("visible");

            const afterGlobeRotate = () => {
                globeHint.classList.remove("visible");
                setDialogueVisible(true);
                setAmyVisible(true);
                amyWrap.classList.remove("is-chart");
                runDialogue(dialogueSets.globeAfter, () => {
                    setDialogueVisible(false);
                    setAmyVisible(false);
                    startAppStoreSequence();
                });
            };

            // Primary: triggered by drag rotation in initGlobe
            globeRotateCallback = afterGlobeRotate;
        });
    }, 1000);
}

function startAppStoreSequence() {
    state.phase = "appstore";

    // Show 3.8 dialogue first
    setDialogueVisible(true);
    amyWrap.classList.add("is-chart");
    runDialogue(dialogueSets.appStore, () => {
        // After 3.8 → show app store UI
        setDialogueVisible(false);
        cleanupGlobe();
        showScreen("appstore");
        bindAppStoreButtons();
    });
}

function bindAppStoreButtons() {
    const buyButtons = document.querySelectorAll(".sub-buy-btn");
    buyButtons.forEach((btn) => {
        btn.addEventListener("click", onBuyClicked);
    });
}

function updatePurchaseCard(productId) {
    const productData = {
        "buy-chatgpt": {
            icon: "assets/img/chapter%204/chatgpt.webp",
            badge: "🎉 AI POWER 🎉",
            title: "Chúc mừng!",
            message: "Bạn đã sở hữu <strong>ChatGPT Plus</strong> - Trợ lý AI thông minh nhất!"
        },
        "buy-youtube": {
            icon: "https://cdn.simpleicons.org/youtube/FF0000",
            badge: "🎬 NO ADS 🎬",
            title: "Tuyệt vời!",
            message: "Bạn đã nâng cấp <strong>YouTube Premium</strong> - Xem video không giới hạn!"
        },
        "buy-netflix": {
            icon: "https://cdn.simpleicons.org/netflix/E50914",
            badge: "🍿 PREMIUM 🍿",
            title: "Hoàn hảo!",
            message: "Bạn đã mở khóa <strong>Netflix</strong> - Kho phim khổng lồ đang chờ bạn!"
        },
        "buy-spotify": {
            icon: "https://cdn.simpleicons.org/spotify/1DB954",
            badge: "🎵 MUSIC 🎵",
            title: "Tuyệt đỉnh!",
            message: "Bạn đã sở hữu <strong>Spotify Premium</strong> - Âm nhạc không giới hạn!"
        },
        "buy-canva": {
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg",
            badge: "🎨 DESIGN 🎨",
            title: "Sáng tạo!",
            message: "Bạn đã nâng cấp <strong>Canva Pro</strong> - Thiết kế chuyên nghiệp!"
        },
        "buy-notion": {
            icon: "https://cdn.simpleicons.org/notion/000000",
            badge: "📝 PRODUCTIVITY 📝",
            title: "Thông minh!",
            message: "Bạn đã mở khóa <strong>Notion AI</strong> - Quản lý mọi thứ dễ dàng!"
        }
    };

    const data = productData[productId] || productData["buy-chatgpt"];
    
    const iconEl = document.getElementById("purchase-icon");
    const badgeEl = document.getElementById("vip-badge");
    const titleEl = document.getElementById("purchase-title");
    const messageEl = document.getElementById("purchase-message");

    if (iconEl) iconEl.innerHTML = `<img src="${data.icon}" alt="Product">`;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (messageEl) messageEl.innerHTML = data.message;
}

function onBuyClicked(event) {
    const selectedButton = event.currentTarget;
    const selectedPrice = Number(selectedButton.dataset.price || 0);
    const warning = document.getElementById("wallet-warning");
    const walletBalance = state.walletBalance;

    if (selectedPrice > walletBalance) {
        if (warning) {
            warning.textContent = `Số dư không đủ: ví chỉ có $${walletBalance}, gói này cần $${selectedPrice}.`;
            warning.classList.remove("is-visible");
            void warning.offsetWidth;
            warning.classList.add("is-visible");
        }
        return;
    }

    // Deduct from wallet and update UI
    state.walletBalance -= selectedPrice;
    const walletEl = document.getElementById("wallet-balance");
    if (walletEl) walletEl.textContent = `$${state.walletBalance}`;

    // Track which product was bought for dialogue branching
    state.purchasedProduct = selectedButton.id;

    // Remove listeners from other buttons
    document.querySelectorAll(".sub-buy-btn").forEach((btn) => {
        btn.removeEventListener("click", onBuyClicked);
        btn.disabled = true;
    });

    // Update purchase card UI based on product
    updatePurchaseCard(selectedButton.id);

    // Transition to fireworks
    state.phase = "firework";
    showScreen("firework");
    startFireworks();

    // Show VIP card after brief delay
    setTimeout(() => {
        vipCard.classList.add("visible");
    }, 800);

    // After fireworks settle, show finale dialogues
    setTimeout(() => {
        setDialogueVisible(true);
        setAmyVisible(true);
        amyWrap.classList.remove("is-chart");

        const isChatGPT = state.purchasedProduct === "buy-chatgpt";
        const chosenDialogue = isChatGPT ? dialogueSets.finale : dialogueSets.finale_alt;

        runDialogue(chosenDialogue, () => {
            // After finale → go to minigame sequence
            cleanupFireworks();
            setTimeout(() => startPreMinigame(), 800);
        });
    }, 3500);
}

/* ═══════════════════════════════════════════
   MINIGAME — WOULD YOU RATHER
   ═══════════════════════════════════════════ */

function startPreMinigame() {
    setDialogueVisible(true);
    setAmyVisible(true);
    amyWrap.classList.remove("is-chart");
    runDialogue(dialogueSets.pre_minigame, () => {
        setDialogueVisible(false);
        setAmyVisible(false);
        showMinigame();
    });
}

function showMinigame() {
    mgState.q = 0;
    mgState.choices = [];
    mgState.firstAIHandled = false;
    showScreen("minigame");
    bindMinigame();
    loadMGQuestion(0);
}

function loadMGQuestion(index) {
    const q = minigameQuestions[index];
    document.getElementById("question-text").textContent = q.prompt;
    document.getElementById("question-progress").textContent = `Câu ${index + 1}/${minigameQuestions.length} — ${q.task}`;
    
    // Set unique decor emoji and theme class
    const decors = ["💡", "📋", "📖", "🎯"];
    const decorEl = document.getElementById("question-decor");
    if (decorEl) {
        decorEl.textContent = decors[index] || "💡";
    }
    
    const container = document.getElementById("minigame-container");
    if (container) {
        container.className = "minigame-container";
        container.classList.add(`q-theme-${index}`);
    }

    // Reset UI
    document.getElementById("minigame-choices").style.display = "grid";
    document.getElementById("minigame-input").classList.remove("active");
    document.getElementById("manual-answer").value = "";
    document.getElementById("input-feedback").textContent = "";
    document.getElementById("minigame-result").classList.remove("active");
}

function bindMinigame() {
    document.getElementById("choice-manual").onclick = onChooseManual;
    document.getElementById("choice-ai").onclick = onChooseAI;
    document.getElementById("submit-answer").onclick = onSubmitManual;
    document.getElementById("minigame-next").onclick = onNextMGQuestion;
}

function onChooseManual() {
    document.getElementById("minigame-choices").style.display = "none";
    document.getElementById("minigame-input").classList.add("active");
    requestAnimationFrame(() => {
        const ta = document.getElementById("manual-answer");
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
    });
}

function onChooseAI() {
    document.getElementById("minigame-choices").style.display = "none";
    mgState.choices.push("ai");

    if (mgState.q === 0 && !mgState.firstAIHandled) {
        mgState.firstAIHandled = true;
        setDialogueVisible(true);
        setAmyVisible(true);
        amyWrap.classList.remove("is-chart");
        runDialogue(dialogueSets.ai_first_special, () => {
            setDialogueVisible(false);
            setAmyVisible(false);
            showMGResult("ai");
        });
    } else {
        showMGResult("ai");
    }
}

function onSubmitManual() {
    const text = document.getElementById("manual-answer").value.trim();
    if (text.length < 100) {
        const hints = [
            "Bài làm còn khá sơ sài, hãy triển khai chi tiết hơn nhé!",
            "Ý tưởng còn đơn giản quá, thêm vào nội dung cụ thể hơn!",
            "Câu trả lời chưa đủ đầy, hãy bổ sung thêm một chút nữa!"
        ];
        document.getElementById("input-feedback").textContent = hints[Math.floor(Math.random() * hints.length)];
        return;
    }
    document.getElementById("input-feedback").textContent = "";
    document.getElementById("minigame-input").classList.remove("active");
    mgState.choices.push("manual");
    showMGResult("manual");
}

function showMGResult(choice) {
    const q = minigameQuestions[mgState.q];
    const aiPct = q.aiPct;
    const selfPct = (100 - aiPct).toFixed(1);

    const statEl = document.getElementById("result-stat");
    statEl.textContent = choice === "ai"
        ? `${aiPct}% sinh viên cũng chọn dùng AI cho tác vụ này`
        : `Tốt lắm! ${aiPct}% sinh viên khác đã chọn dùng AI thay thế`;

    document.getElementById("result-ai-pct").textContent = `AI: ${aiPct}%`;
    document.getElementById("result-manual-pct").textContent = `Tự làm: ${selfPct}%`;

    const aiBar = document.getElementById("result-ai-bar");
    const manualBar = document.getElementById("result-manual-bar");
    aiBar.style.width = "0%";
    manualBar.style.width = "0%";

    document.getElementById("minigame-result").classList.add("active");

    // Animate bars after paint
    requestAnimationFrame(() => {
        setTimeout(() => {
            aiBar.style.width = `${aiPct}%`;
            manualBar.style.width = `${selfPct}%`;
        }, 60);
    });
}

function onNextMGQuestion() {
    mgState.q++;
    if (mgState.q >= minigameQuestions.length) {
        finishMinigame();
    } else {
        loadMGQuestion(mgState.q);
    }
}

function finishMinigame() {
    showScreen("area-chart");
    setTimeout(() => drawAreaChart(), 120);

    // Show 4.3 dialogue after chart animates in
    setTimeout(() => {
        setDialogueVisible(true);
        setAmyVisible(true);
        amyWrap.classList.remove("is-chart");
        runDialogue(dialogueSets.post_minigame, () => {
            setDialogueVisible(false);
            setAmyVisible(false);
            const nextBtn = document.getElementById("area-chart-next");
            nextBtn.classList.add("is-visible");
            nextBtn.onclick = () => { startBookSequence(); };
        });
    }, 2800);
}

/* ═══════════════════════════════════════════
   AREA CHART CANVAS
   ═══════════════════════════════════════════ */
function drawAreaChart(highlightArea = null) {
    const canvas = document.getElementById("area-chart-canvas");
    const parent = canvas.parentElement;
    const W = parent.clientWidth || 700;
    const H = parent.clientHeight || 460;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const padL = 75, padR = 75, padT = 40, padB = 120;
    const cW = W - padL - padR;
    const cH = H - padT - padB;
    const n = minigameQuestions.length;
    const xs = minigameQuestions.map((_, i) => padL + cW * i / (n - 1));
    const aiPcts = minigameQuestions.map(q => q.aiPct);
    const aiYs = aiPcts.map(p => padT + cH * (1 - p / 100));
    const topY = padT;
    const botY = padT + cH;

    let rev = 0;

    // Helper: interpolate AI Y at arbitrary X (linear between nearest points)
    function getAiYAt(x) {
        if (x <= xs[0]) return aiYs[0];
        if (x >= xs[n - 1]) return aiYs[n - 1];
        for (let i = 0; i < n - 1; i++) {
            if (x >= xs[i] && x <= xs[i + 1]) {
                const t = (x - xs[i]) / (xs[i + 1] - xs[i]);
                return aiYs[i] + (aiYs[i + 1] - aiYs[i]) * t;
            }
        }
        return aiYs[n - 1];
    }

    // Attach hover listeners once
    if (!canvas._areaChartListeners) {
        canvas._areaChartListeners = true;
        canvas.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            const mx = (e.clientX - rect.left) * (W / rect.width);
            const my = (e.clientY - rect.top) * (H / rect.height);
            const aiY = getAiYAt(mx);
            let newHighlight = null;
            if (mx >= padL && mx <= padL + cW && my >= padT && my <= botY) {
                newHighlight = my > aiY ? "ai" : "manual";
            }
            if (canvas._lastHighlight !== newHighlight) {
                canvas._lastHighlight = newHighlight;
                if (rev >= 1) requestAnimationFrame(() => frame(newHighlight));
            }
        });
        canvas.addEventListener("mouseleave", () => {
            if (canvas._lastHighlight !== null) {
                canvas._lastHighlight = null;
                if (rev >= 1) requestAnimationFrame(() => frame(null));
            }
        });
    }

    // Helper: draw rounded rectangle (cross-browser safe)
    function drawRoundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    // Helper: wrap text into lines that fit maxWidth
    function fitLines(ctx, text, maxWidth) {
        const words = text.split(" ");
        const lines = [];
        let line = words[0] || "";
        for (let i = 1; i < words.length; i++) {
            const test = line + " " + words[i];
            if (ctx.measureText(test).width > maxWidth && line) {
                lines.push(line);
                line = words[i];
            } else {
                line = test;
            }
        }
        if (line) lines.push(line);
        return lines.length ? lines : [text];
    }

    function frame(highlight = null) {
        ctx.clearRect(0, 0, W, H);

        // 1. Grid & Y labels
        ctx.strokeStyle = "rgba(27,35,64,0.1)";
        ctx.lineWidth = 1;
        ctx.fillStyle = "#6a7a9a";
        ctx.font = "12px 'HoiThoai', 'FuturaLocal', sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        [0, 20, 40, 60, 80, 100].forEach(pct => {
            const y = padT + cH * (1 - pct / 100);
            ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + cW, y); ctx.stroke();
            ctx.fillText(pct + "%", padL - 10, y);
        });

        // 2. Axes Lines
        ctx.strokeStyle = "rgba(27,35,64,0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padL, padT); ctx.lineTo(padL, botY); ctx.lineTo(padL + cW, botY);
        ctx.stroke();

        // 3. Progressive reveal clip for areas & curves
        const revealX = padL + cW * rev;
        ctx.save();
        ctx.beginPath();
        ctx.rect(padL - 40, 0, (revealX - padL) + 80, H);
        ctx.clip();

        // AI area (bottom)
        ctx.beginPath();
        ctx.moveTo(xs[0], botY);
        ctx.lineTo(xs[0], aiYs[0]);
        for (let i = 1; i < n; i++) {
            const mx = (xs[i - 1] + xs[i]) / 2;
            ctx.bezierCurveTo(mx, aiYs[i - 1], mx, aiYs[i], xs[i], aiYs[i]);
        }
        ctx.lineTo(xs[n - 1], botY);
        ctx.closePath();
        const aiBase = highlight === "ai" ? "rgba(122,92,255,0.95)" : (highlight === "manual" ? "rgba(122,92,255,0.35)" : "rgba(122,92,255,0.78)");
        ctx.fillStyle = aiBase;
        ctx.fill();
        if (highlight === "ai") {
            ctx.strokeStyle = "rgba(255,255,255,0.6)";
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Manual area (top)
        ctx.beginPath();
        ctx.moveTo(xs[0], topY);
        ctx.lineTo(xs[n - 1], topY);
        ctx.lineTo(xs[n - 1], aiYs[n - 1]);
        for (let i = n - 2; i >= 0; i--) {
            const mx = (xs[i] + xs[i + 1]) / 2;
            ctx.bezierCurveTo(mx, aiYs[i + 1], mx, aiYs[i], xs[i], aiYs[i]);
        }
        ctx.closePath();
        const manualBase = highlight === "manual" ? "rgba(63,185,111,0.92)" : (highlight === "ai" ? "rgba(63,185,111,0.35)" : "rgba(63,185,111,0.72)");
        ctx.fillStyle = manualBase;
        ctx.fill();
        if (highlight === "manual") {
            ctx.strokeStyle = "rgba(255,255,255,0.6)";
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // AI stroke line
        ctx.beginPath();
        ctx.moveTo(xs[0], aiYs[0]);
        for (let i = 1; i < n; i++) {
            const mx = (xs[i - 1] + xs[i]) / 2;
            ctx.bezierCurveTo(mx, aiYs[i - 1], mx, aiYs[i], xs[i], aiYs[i]);
        }
        ctx.strokeStyle = "#7a5cff";
        ctx.lineWidth = highlight === "ai" ? 4 : 3;
        ctx.stroke();

        // Data dots & labels
        for (let i = 0; i < n; i++) {
            if (xs[i] > revealX + 4) break;
            const x = xs[i], y = aiYs[i];

            ctx.beginPath(); ctx.arc(x, y, highlight === "ai" ? 7 : 6, 0, Math.PI * 2);
            ctx.fillStyle = "#7a5cff"; ctx.fill();
            ctx.strokeStyle = "#fff"; ctx.lineWidth = 2.5; ctx.stroke();

            // AI % label
            ctx.fillStyle = highlight === "ai" ? "#5a3aff" : "#3a2a8a";
            ctx.font = (highlight === "ai" ? "bold 14px" : "bold 13px") + " 'HoiThoai', 'FuturaLocal', sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.fillText(aiPcts[i] + "%", x, y - 10);

            // Self % label (in green area)
            const selfMidY = padT + (y - padT) / 2;
            ctx.fillStyle = highlight === "manual" ? "#0d5a2a" : "#1a6a35";
            ctx.font = (highlight === "manual" ? "bold 13px" : "bold 12px") + " 'HoiThoai', 'FuturaLocal', sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillText((100 - aiPcts[i]).toFixed(1) + "%", x, selfMidY);
        }

        ctx.restore();

        // 4. X axis task labels (drawn on top of fills)
        ctx.fillStyle = "#1b2340";
        ctx.font = "9px 'HoiThoai', 'FuturaLocal', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        const maxLabelW = cW / (n - 0.5); // more generous label width to prevent overflow
        minigameQuestions.forEach((q, i) => {
            const lines = fitLines(ctx, q.task, maxLabelW);
            const lineH = 11;
            lines.forEach((ln, row) => {
                ctx.fillText(ln, xs[i], botY + 14 + row * lineH);
            });
        });

        // 5. Legend box (drawn on very top)
        const legW = 104;
        const legH = 38;
        const legX = padL + cW - legW - 10;
        const legY = padT + 10; // place inside the grid top-right
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.strokeStyle = "rgba(27,35,64,0.25)";
        ctx.lineWidth = 1.5;
        drawRoundRect(ctx, legX, legY, legW, legH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(122,92,255,0.85)";
        drawRoundRect(ctx, legX + 6, legY + 8, 14, 8, 2);
        ctx.fill();

        ctx.fillStyle = "#1b2340";
        ctx.font = "10px 'HoiThoai', 'FuturaLocal', sans-serif";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText("Sử dụng AI", legX + 24, legY + 12);

        ctx.fillStyle = "rgba(63,185,111,0.85)";
        drawRoundRect(ctx, legX + 6, legY + 22, 14, 8, 2);
        ctx.fill();

        ctx.fillStyle = "#1b2340";
        ctx.fillText("Tự tư duy", legX + 24, legY + 26);

        if (rev < 1) {
            rev = Math.min(1, rev + 0.018);
            requestAnimationFrame(() => frame(canvas._lastHighlight || null));
        }
    }

    requestAnimationFrame(() => frame(highlightArea));

    // Caption below chart (HTML, not canvas — safer for long text)
    let captionEl = document.getElementById("area-chart-caption");
    if (!captionEl) {
        captionEl = document.createElement("p");
        captionEl.id = "area-chart-caption";
        captionEl.className = "area-chart-caption";
        const container = document.querySelector(".area-chart-container");
        if (container) container.insertBefore(captionEl, container.querySelector(".area-chart-legend"));
    }
    captionEl.textContent = "Mức độ ứng dụng AI trong học tập cho thấy sinh viên sử dụng công nghệ nhiều nhất ở các khâu hình thành ý tưởng và lập dàn ý.";
}

/* ═══════════════════════════════════════════
   BOOK / DOCUMENT SEQUENCE
   ═══════════════════════════════════════════ */
function startBookSequence() {
    state.phase = "book";
    showScreen("book");
    setDialogueVisible(true);
    setAmyVisible(true);
    amyWrap.classList.remove("is-chart");
    runDialogue(dialogueSets.doc_5_1, () => {
        setDialogueVisible(false);
        setAmyVisible(false);
        initBookViewer();
    });
}

let currentBookPage = 1;
const totalBookPages = 20; // real rendered pages (viewer shows 1/500)

function initBookViewer() {
    currentBookPage = 1;
    state.bookPagesRead = 0;
    state.bookDialogueTriggered = false;
    updateBookPage();

    const prevBtn = document.getElementById("book-prev");
    const nextBtn = document.getElementById("book-next");

    prevBtn.onclick = () => {
        if (currentBookPage > 1) {
            currentBookPage--;
            updateBookPage();
        }
    };

    nextBtn.onclick = () => {
        if (currentBookPage < totalBookPages) {
            currentBookPage++;
            updateBookPage();
            checkBookReadProgress();
        }
    };
}

function updateBookPage() {
    document.querySelectorAll(".book-page").forEach((page) => page.classList.remove("active"));
    const active = document.querySelector(`.book-page[data-page="${currentBookPage}"]`);
    if (active) active.classList.add("active");

    const counter = document.getElementById("book-counter");
    if (counter) counter.textContent = `Trang ${currentBookPage} / 500`;

    const prevBtn = document.getElementById("book-prev");
    const nextBtn = document.getElementById("book-next");
    if (prevBtn) prevBtn.disabled = currentBookPage === 1;
    if (nextBtn) nextBtn.disabled = currentBookPage === totalBookPages;
}

function checkBookReadProgress() {
    if (currentBookPage >= 5 && !state.bookDialogueTriggered) {
        state.bookDialogueTriggered = true;
        
        // Trigger dialogue 5.2 after a short delay
        setTimeout(() => {
            setDialogueVisible(true);
            setAmyVisible(true);
            amyWrap.classList.remove("is-chart");
            runDialogue(dialogueSets.doc_5_2, () => {
                setDialogueVisible(false);
                setAmyVisible(false);
                startInfoSequence();
            });
        }, 600);
    }
}

/* ═══════════════════════════════════════════
   INFO MACHINE SEQUENCE
   ═══════════════════════════════════════════ */
function startInfoSequence() {
    state.phase = "info";
    showScreen("info");
    state.infoProcessed = false;

    const bookDrag = document.getElementById("info-book-drag");
    const slotZone = document.getElementById("info-slot-zone");
    const machine = document.getElementById("info-machine");
    const progress = document.getElementById("info-progress");

    if (bookDrag) {
        bookDrag.classList.remove("hidden");
        bookDrag.style.opacity = "1";
        bookDrag.style.transform = "none";
        bookDrag.style.position = "relative";
        bookDrag.style.left = "auto";
        bookDrag.style.top = "auto";
        bookDrag.style.touchAction = "none";
    }
    if (slotZone) {
        slotZone.classList.remove("active");
    }
    if (progress) progress.classList.remove("active");
    if (machine) machine.src = "assets/img/chapter%204/info%202.1.webp";

    if (bookDrag && slotZone) {
        bindInfoBookPhysics(bookDrag, slotZone);
    }
}

let infoBookPhysicsCleanup = null;

function bindInfoBookPhysics(bookDrag, slotZone) {
    if (infoBookPhysicsCleanup) infoBookPhysicsCleanup();

    const workspace = document.getElementById("info-workspace") || bookDrag.parentElement;
    let dragging = false;
    let currentX = 0;
    let currentY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let startX = 0;
    let startY = 0;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastTime = 0;
    let inertiaFrame = null;

    const setTransform = () => {
        bookDrag.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    };

    const getSlotCenter = () => {
        const rect = slotZone.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    };

    const isOverSlot = () => {
        const bookRect = bookDrag.getBoundingClientRect();
        const centerX = bookRect.left + bookRect.width / 2;
        const centerY = bookRect.top + bookRect.height / 2;
        const slotRect = slotZone.getBoundingClientRect();
        return centerX >= slotRect.left && centerX <= slotRect.right && centerY >= slotRect.top && centerY <= slotRect.bottom;
    };

    const clampToWorkspace = () => {
        const workspaceRect = workspace.getBoundingClientRect();
        const bookRect = bookDrag.getBoundingClientRect();
        const maxX = workspaceRect.width - bookRect.width;
        const maxY = workspaceRect.height - bookRect.height;
        currentX = Math.max(-bookRect.width * 0.25, Math.min(currentX, maxX + bookRect.width * 0.25));
        currentY = Math.max(-bookRect.height * 0.25, Math.min(currentY, maxY + bookRect.height * 0.25));
    };

    const stopInertia = () => {
        if (inertiaFrame) {
            cancelAnimationFrame(inertiaFrame);
            inertiaFrame = null;
        }
    };

    const animateToSlot = () => {
        stopInertia();
        const bookRect = bookDrag.getBoundingClientRect();
        const slotCenter = getSlotCenter();
        currentX += slotCenter.x - (bookRect.left + bookRect.width / 2);
        currentY += slotCenter.y - (bookRect.top + bookRect.height / 2);
        bookDrag.style.transition = "transform 420ms cubic-bezier(0.34,1.56,0.64,1), opacity 300ms ease";
        setTransform();
        setTimeout(insertBookIntoMachine, 420);
    };

    const runInertia = () => {
        if (state.infoProcessed) return;

        velocityX *= 0.94;
        velocityY *= 0.94;
        currentX += velocityX;
        currentY += velocityY;
        clampToWorkspace();
        setTransform();

        if (isOverSlot()) {
            slotZone.classList.add("active");
            animateToSlot();
            return;
        }

        slotZone.classList.remove("active");

        if (Math.abs(velocityX) > 0.12 || Math.abs(velocityY) > 0.12) {
            inertiaFrame = requestAnimationFrame(runInertia);
        }
    };

    const onPointerDown = (event) => {
        if (state.infoProcessed) return;
        stopInertia();
        dragging = true;
        bookDrag.classList.add("is-dragging");
        bookDrag.style.transition = "none";
        pointerStartX = event.clientX;
        pointerStartY = event.clientY;
        startX = currentX;
        startY = currentY;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
        lastTime = performance.now();
        bookDrag.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
        if (!dragging || state.infoProcessed) return;
        event.preventDefault();
        const now = performance.now();
        const dt = Math.max(1, now - lastTime);
        currentX = startX + event.clientX - pointerStartX;
        currentY = startY + event.clientY - pointerStartY;
        velocityX = ((event.clientX - lastPointerX) / dt) * 16;
        velocityY = ((event.clientY - lastPointerY) / dt) * 16;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
        lastTime = now;
        setTransform();

        if (isOverSlot()) {
            slotZone.classList.add("active");
        } else {
            slotZone.classList.remove("active");
        }
    };

    const onPointerUp = (event) => {
        if (!dragging) return;
        dragging = false;
        bookDrag.classList.remove("is-dragging");
        bookDrag.releasePointerCapture?.(event.pointerId);

        if (isOverSlot()) {
            animateToSlot();
            return;
        }

        runInertia();
    };

    bookDrag.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    infoBookPhysicsCleanup = () => {
        stopInertia();
        bookDrag.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);
        infoBookPhysicsCleanup = null;
    };
}

function insertBookIntoMachine() {
    if (state.infoProcessed) return;
    state.infoProcessed = true;

    const bookDrag = document.getElementById("info-book-drag");
    const slotZone = document.getElementById("info-slot-zone");
    const machine = document.getElementById("info-machine");
    const progress = document.getElementById("info-progress");

    if (bookDrag) bookDrag.classList.add("hidden");
    if (slotZone) slotZone.classList.add("active");
    if (progress) progress.classList.add("active");

    // Animate machine processing: change image after ~2.5s, then go to flashcards
    setTimeout(() => {
        if (machine) {
            machine.style.opacity = "0";
            setTimeout(() => {
                machine.src = "assets/img/chapter%204/infor%202.2.webp";
                machine.style.opacity = "1";
            }, 300);
        }
    }, 2400);

    setTimeout(() => {
        startFlashcardSequence();
    }, 4200);
}

/* ═══════════════════════════════════════════
   FLASHCARD SEQUENCE — STACK DECK
   ═══════════════════════════════════════════ */
const fcState = { current: 0, total: 0, animating: false };

function startFlashcardSequence() {
    state.phase = "flashcard";
    showScreen("flashcard");
    initFlashcardStack();

    setTimeout(() => {
        setDialogueVisible(true);
        setAmyVisible(true);
        amyWrap.classList.remove("is-chart");
        runDialogue(dialogueSets.post_flashcard, () => {
            setDialogueVisible(false);
            setAmyVisible(false);
            showFlashcardControls();
        });
    }, 800);
}

function initFlashcardStack() {
    const cards = [...document.querySelectorAll(".flashcard")];
    fcState.current = 0;
    fcState.total = cards.length;
    fcState.animating = false;

    // Reset all cards to hidden initial state
    cards.forEach((card) => {
        card.className = "flashcard";
        card.classList.remove("flipped");
        card.style.opacity = "0";
        card.style.transform = "translateY(160px) scale(0.5) rotateZ(12deg)";
        card.style.pointerEvents = "none";
    });

    // Deal-in animation: cards fly up one by one like dealing cards
    cards.forEach((card, idx) => {
        setTimeout(() => {
            card.style.transition = "transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 400ms ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1) rotateZ(0deg)";
            card.style.pointerEvents = "auto";
        }, idx * 160);
    });

    // After all cards dealt, apply stack classes and enable clicks
    setTimeout(() => {
        cards.forEach((card) => {
            card.style.transition = "";
            card.style.transform = "";
            card.style.opacity = "";
            card.style.pointerEvents = "";
        });
        updateStackClasses();

        // Click on top card to flip
        cards.forEach((card, idx) => {
            card.onclick = () => {
                if (idx === fcState.current && !fcState.animating) {
                    card.classList.toggle("flipped");
                }
            };
        });
    }, cards.length * 160 + 600);
}

function updateStackClasses() {
    const cards = [...document.querySelectorAll(".flashcard")];
    const depthMap = ["fc-top", "fc-below", "fc-deep", "fc-deeper", "fc-hidden"];

    cards.forEach((card, idx) => {
        // Clear old depth classes
        depthMap.forEach((cls) => card.classList.remove(cls));

        const offset = idx - fcState.current;
        if (offset >= 0 && offset < depthMap.length) {
            card.classList.add(depthMap[offset]);
        } else if (offset < 0) {
            card.classList.add("fc-hidden");
        } else {
            card.classList.add("fc-hidden");
        }
    });
}

function showFlashcardControls() {
    const flipBtn = document.getElementById("flashcard-flip-btn");
    const nextBtn = document.getElementById("flashcard-next-btn");

    if (flipBtn) {
        flipBtn.classList.add("is-visible");
        flipBtn.onclick = () => flipCurrentCard();
    }
    if (nextBtn) {
        nextBtn.classList.add("is-visible");
        nextBtn.textContent = "Card tiếp theo →";
        nextBtn.onclick = () => advanceFlashcard();
    }
}

function flipCurrentCard() {
    const cards = [...document.querySelectorAll(".flashcard")];
    const top = cards[fcState.current];
    if (top && !fcState.animating) {
        top.classList.toggle("flipped");
    }
}

function advanceFlashcard() {
    if (fcState.animating) return;
    const cards = [...document.querySelectorAll(".flashcard")];
    const top = cards[fcState.current];
    if (!top) return;

    fcState.animating = true;

    // Unflip before throwing
    top.classList.remove("flipped");

    // Throw-away animation
    top.classList.add("fc-throw-right");

    setTimeout(() => {
        // After throw, hide this card and advance index
        top.classList.remove("fc-throw-right");
        fcState.current++;

        if (fcState.current >= fcState.total) {
            // All cards done
            hideFlashcardControls();
            setTimeout(() => {
                const nextBtn = document.getElementById("flashcard-next-btn");
                if (nextBtn) {
                    nextBtn.textContent = "Tiếp tục →";
                    nextBtn.classList.add("is-visible");
                    nextBtn.onclick = () => startExamSequence();
                }
            }, 300);
            fcState.animating = false;
            return;
        }

        // Restack remaining cards
        updateStackClasses();

        // Fly-in the new top card
        const newTop = cards[fcState.current];
        if (newTop) {
            newTop.classList.add("fc-fly-in");
            setTimeout(() => newTop.classList.remove("fc-fly-in"), 700);
        }

        fcState.animating = false;
    }, 520);
}

function hideFlashcardControls() {
    const flipBtn = document.getElementById("flashcard-flip-btn");
    if (flipBtn) flipBtn.classList.remove("is-visible");
}

/* ═══════════════════════════════════════════
   EXAM SEQUENCE — Bài kiểm tra & Kính lúp
   ═══════════════════════════════════════════ */
const magState = {
    active: false,
    linesRevealed: new Set(),
    totalLines: 6,
    gradeDropped: false,
    scanComplete: false,
    dialogueStarted: false
};

function startExamSequence() {
    state.phase = "exam";
    document.body.classList.remove("ai-word-loop-active");
    showScreen("exam");
    magState.active = false;
    magState.linesRevealed = new Set();
    magState.gradeDropped = false;
    magState.scanComplete = false;
    magState.dialogueStarted = false;
    hideAiWordNextButton();

    // Reset exam visual state
    const gradeEl = document.getElementById("exam-grade");
    const commentEl = document.getElementById("exam-comment");
    if (gradeEl) {
        gradeEl.textContent = "A+";
        gradeEl.classList.remove("dropping");
    }
    if (commentEl) {
        commentEl.textContent = "Bài viết có tư duy, cập nhật xu hướng rất nhạy bén. Lập luận chặt chẽ, dẫn chứng phong phú. Tiếp tục phát huy!";
        commentEl.classList.remove("fading");
    }

    // Reset all lines
    document.querySelectorAll(".exam-text-line").forEach(el => el.classList.remove("revealed"));
    document.querySelectorAll(".exam-prompt-line").forEach(el => el.classList.remove("visible"));

    // Hide magnifier UI elements initially
    const scanProgress = document.getElementById("scan-progress");
    const toolDock = document.getElementById("tool-dock");
    const magCursor = document.getElementById("magnifier-cursor");
    const ninhPanel = document.getElementById("ninh-panel");
    const examNextWrap = document.getElementById("exam-next-wrap");
    if (scanProgress) scanProgress.classList.remove("active");
    if (toolDock) toolDock.classList.remove("active");
    if (magCursor) magCursor.classList.remove("active");
    if (ninhPanel) ninhPanel.classList.remove("active");
    if (examNextWrap) examNextWrap.classList.remove("active");
    if (examScreen) examScreen.classList.remove("magnifier-active");

    // Start dialogue sequence after screen transition
    setTimeout(() => {
        setDialogueVisible(true);
        setAmyVisible(true);
        amyWrap.classList.remove("is-chart");

        // Dialogue 6.1 & 6.2
        runDialogue(dialogueSets.exam_6_1_2, () => {
            // Dialogue 6.3 — introduce magnifier
            runDialogue(dialogueSets.exam_6_3, () => {
                setDialogueVisible(false);
                setAmyVisible(false);
                startMagnifier();
            });
        });
    }, 800);
}

function startMagnifier() {
    // Show tool dock for user to click and pick up the magnifier
    const toolDock = document.getElementById("tool-dock");
    const toolBtn = document.getElementById("tool-magnifier-btn");
    const scanProgress = document.getElementById("scan-progress");

    if (toolDock) toolDock.classList.add("active");
    if (scanProgress) scanProgress.classList.add("active");
    updateScanProgress();

    if (toolBtn) {
        toolBtn.onclick = () => {
            if (magState.active) return; // already held
            magState.active = true;

            // Visual: button becomes "picked up"
            toolBtn.classList.add("picked-up");
            toolBtn.querySelector("span").textContent = "Đang dùng...";

            // Show magnifier cursor
            const magCursor = document.getElementById("magnifier-cursor");
            if (magCursor) magCursor.classList.add("active");
            if (examScreen) examScreen.classList.add("magnifier-active");

            // Bind move events
            document.addEventListener("mousemove", onMagnifierMove);
            document.addEventListener("touchmove", onMagnifierMove, { passive: false });
            document.addEventListener("touchstart", onMagnifierMove, { passive: false });
        };
    }
}

function stopMagnifier() {
    magState.active = false;

    const magCursor = document.getElementById("magnifier-cursor");
    const toolDock = document.getElementById("tool-dock");
    const scanProgress = document.getElementById("scan-progress");

    if (magCursor) magCursor.classList.remove("active");
    if (toolDock) toolDock.classList.remove("active");
    if (scanProgress) scanProgress.classList.remove("active");
    if (examScreen) examScreen.classList.remove("magnifier-active");

    document.removeEventListener("mousemove", onMagnifierMove);
    document.removeEventListener("touchmove", onMagnifierMove);
    document.removeEventListener("touchstart", onMagnifierMove);
}

function onMagnifierMove(e) {
    if (!magState.active || magState.scanComplete) return;

    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        e.preventDefault();
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    // Move magnifier cursor
    const magCursor = document.getElementById("magnifier-cursor");
    if (magCursor) {
        magCursor.style.left = clientX + "px";
        magCursor.style.top = clientY + "px";
    }

    // Hit test against exam lines
    const lineGroups = document.querySelectorAll(".exam-line-group");
    lineGroups.forEach(group => {
        const lineIndex = parseInt(group.dataset.line);
        if (magState.linesRevealed.has(lineIndex)) return;

        const rect = group.getBoundingClientRect();
        // Check if magnifier center is within the line's bounding box (with some padding)
        const pad = 30;
        if (
            clientX >= rect.left - pad &&
            clientX <= rect.right + pad &&
            clientY >= rect.top - pad &&
            clientY <= rect.bottom + pad
        ) {
            revealLine(lineIndex, group);
        }
    });
}

function revealLine(lineIndex, group) {
    if (magState.linesRevealed.has(lineIndex)) return;
    magState.linesRevealed.add(lineIndex);

    // Animate text line away
    const textLine = group.querySelector(".exam-text-line");
    const promptLine = group.querySelector(".exam-prompt-line");
    if (textLine) textLine.classList.add("revealed");
    if (promptLine) {
        setTimeout(() => promptLine.classList.add("visible"), 300);
    }

    updateScanProgress();

    // Check if threshold reached (≥ 2 lines) → trigger grade drop
    if (magState.linesRevealed.size >= 2 && !magState.gradeDropped) {
        gradeDropAnimation();
    }

    // Check if all lines revealed → complete scan
    if (magState.linesRevealed.size >= magState.totalLines) {
        setTimeout(() => {
            magState.scanComplete = true;
            onScanComplete();
        }, 800);
    }
}

function updateScanProgress() {
    const count = magState.linesRevealed.size;
    const pct = (count / magState.totalLines * 100).toFixed(0);
    const progressBar = document.getElementById("scan-progress-bar");
    const progressText = document.getElementById("scan-progress-text");

    if (progressBar) progressBar.style.setProperty("--scan-pct", pct + "%");
    if (progressText) progressText.textContent = `Quét: ${count}/${magState.totalLines} dòng`;
}

function gradeDropAnimation() {
    magState.gradeDropped = true;
    const gradeEl = document.getElementById("exam-grade");
    const commentEl = document.getElementById("exam-comment");

    if (gradeEl) {
        gradeEl.classList.add("dropping");
        setTimeout(() => {
            gradeEl.textContent = "F";
        }, 400);
    }

    if (commentEl) {
        commentEl.classList.add("fading");
        setTimeout(() => {
            commentEl.textContent = "Bài viết thiếu dấu ấn cá nhân, lập luận sáo rỗng, không có ví dụ thực tế. Nghi ngờ sử dụng AI toàn phần. Không đạt yêu cầu.";
            commentEl.classList.remove("fading");
        }, 350);
    }
}

function onScanComplete() {
    stopMagnifier();

    // Hide instruction
    const magInstruction = document.getElementById("magnifier-instruction");
    if (magInstruction) magInstruction.classList.remove("active");

    // Show Ninh panel + play audio
    const ninhPanel = document.getElementById("ninh-panel");
    const recordAudio = document.getElementById("sfx-record1");

    if (ninhPanel) ninhPanel.classList.add("active");

    if (recordAudio) {
        recordAudio.currentTime = 0;
        recordAudio.play().catch(() => {
            // Autoplay blocked — continue anyway
        });

        // When audio ends, hide ninh panel and start dialogue
        recordAudio.onended = () => {
            if (ninhPanel) ninhPanel.classList.remove("active");
            startPostScanDialogue();
        };

        // Fallback: if audio doesn't play or user skips
        setTimeout(() => {
            if (!magState.dialogueStarted) {
                if (ninhPanel) ninhPanel.classList.remove("active");
                if (recordAudio) {
                    recordAudio.pause();
                    recordAudio.currentTime = 0;
                }
                startPostScanDialogue();
            }
        }, 15000);
    } else {
        // No audio element → go straight to dialogue
        setTimeout(() => {
            if (ninhPanel) ninhPanel.classList.remove("active");
            startPostScanDialogue();
        }, 2000);
    }
}

function startPostScanDialogue() {
    if (magState.dialogueStarted) return;
    magState.dialogueStarted = true;

    setDialogueVisible(true);
    setAmyVisible(true);
    amyWrap.classList.remove("is-chart");

    // Dialogue 6.4 → 6.7
    runDialogue(dialogueSets.exam_6_4_7, () => {
        setDialogueVisible(false);
        setAmyVisible(false);
        startAiWordLoopSequence();
    });
}

function hideAiWordNextButton() {
    if (aiWordNextWrap) aiWordNextWrap.classList.remove("active");
}

function startAiWordLoopSequence() {
    state.phase = "ai-word-loop";
    document.body.classList.add("ai-word-loop-active");
    hideAiWordNextButton();
    setAiWordLoopStatsVisible(true);
    setAiWordQuoteVisible(false);
    showScreen("ai-word-loop");

    if (typeof window.startAiWordLoopAnimation === "function") {
        requestAnimationFrame(() => window.startAiWordLoopAnimation());
    }

    setDialogueVisible(true);
    setAmyVisible(false);
    amyWrap.classList.add("is-chart");

    runDialogue(dialogueSets.ai_word_loop, () => {
        finishAiWordLoopSequence();
    });
}

function finishAiWordLoopSequence() {
    if (typeof window.stopAiWordLoopAnimation === "function") {
        window.stopAiWordLoopAnimation();
    }
    setAiWordLoopStatsVisible(false);
    setAiWordQuoteVisible(false);
    setDialogueVisible(false);
    setAmyVisible(false);

    if (aiWordLoopScreen) {
        aiWordLoopScreen.classList.remove("is-active");
    }
    document.body.classList.remove("ai-word-loop-active");

    if (aiWordNextWrap) aiWordNextWrap.classList.add("active");
    if (aiWordNextBtn) {
        aiWordNextBtn.onclick = () => {
            window.location.href = "chapter-5.html";
        };
    }
}

function init() {
    buildClassroom();
    buildChart();
    bindControls();
    updateSurveyHud();
    updateNearState();
    startIntro();
    [PIXEL + "thinking.webp", PIXEL + "pointout.webp", PIXEL + "smile.webp", PIXEL + "surprise.webp", PIXEL + "serious.webp"].forEach((src) => {
        const img = new Image();
        img.src = src;
    });
    requestAnimationFrame(gameLoop);
}

document.addEventListener("visibilitychange", () => {
    state.lastFrame = performance.now();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || event.keyCode === 123) event.preventDefault();
    if (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key.toUpperCase())) event.preventDefault();
    if (event.ctrlKey && event.key.toUpperCase() === "U") event.preventDefault();
});

init();

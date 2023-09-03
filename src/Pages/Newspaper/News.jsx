import React, { useState } from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./news.css";

const fakeNewsData = [
  {
    id: 1,
    title: "Máy Tính Gaming: Hiệu Năng Đỉnh Cao Cho Game Thủ",
    content:
      "Khám phá những dòng máy tính gaming mới nhất với hiệu năng đỉnh cao, đáp ứng mọi nhu cầu chơi game.",
  },
  {
    id: 2,
    title: "Laptop Đa Năng Cho Công Việc và Giải Trí",
    content:
      "Laptop đa năng không chỉ giúp bạn làm việc mà còn giải trí tốt, đáp ứng mọi nhu cầu sử dụng hàng ngày.",
  },
  {
    id: 3,
    title: "Thiết Bị Lưu Trữ Dữ Liệu: Ổ SSD và Ổ Cứng HDD",
    content:
      "Tìm hiểu về sự khác biệt giữa ổ SSD và ổ cứng HDD, và tại sao bạn nên chọn gì cho nhu cầu lưu trữ của mình.",
  },
  {
    id: 4,
    title: "Phụ Kiện PC: Bàn Phím, Chuột và Tai Nghe Gaming",
    content:
      "Xem xét các phụ kiện quan trọng cho PC như bàn phím, chuột và tai nghe gaming để nâng cao trải nghiệm chơi game.",
  },
  {
    id: 5,
    title: "Công Nghệ Hiển Thị: Màn Hình LED, OLED và 4K",
    content:
      "Khám phá sự khác biệt giữa các loại màn hình công nghệ hiển thị như LED, OLED và 4K và ảnh hưởng của chúng đối với hình ảnh.",
  },
  {
    id: 6,
    title: "Khám Phá Công Nghệ Mới: Smartphone 5G Đỉnh Cao",
    content:
      "Tận hưởng tốc độ internet nhanh chóng và trải nghiệm tuyệt vời với smartphone 5G mới ra mắt.",
  },
  {
    id: 7,
    title: "Mua Sắm Trực Tuyến: Cách Chọn Đúng Máy Lọc Không Khí",
    content:
      "Hướng dẫn cách lựa chọn máy lọc không khí phù hợp với không gian gia đình của bạn để đảm bảo không khí trong lành.",
  },
  {
    id: 8,
    title: "Tivi Thông Minh: Trải Nghiệm Giải Trí Tuyệt Vời Tại Nhà",
    content:
      "Những chiếc tivi thông minh mới giúp bạn trải nghiệm giải trí tại nhà một cách thú vị hơn bao giờ hết.",
  },
  {
    id: 9,
    title: "Máy Giặt Công Nghệ Mới: Tiện Lợi và Tiết Kiệm Thời Gian",
    content:
      "Máy giặt mới với công nghệ tiên tiến giúp bạn tiết kiệm thời gian và nước khi giặt quần áo.",
  },
  {
    id: 10,
    title: "Công Nghệ Giao Hàng: Dịch Vụ Giao Hàng Nhanh Chóng",
    content:
      "Dịch vụ giao hàng sử dụng công nghệ mới giúp bạn nhận được đơn hàng của mình một cách nhanh chóng và thuận tiện.",
  },
  {
    id: 11,
    title: "Máy Tính Xách Tay: Sự Lựa Chọn Tốt Cho Công Việc và Học Tập",
    content:
      "Tìm hiểu cách lựa chọn máy tính xách tay phù hợp với nhu cầu công việc và học tập của bạn.",
  },
  {
    id: 12,
    title: "Đèn Chiếu Sáng Thông Minh: Ánh Sáng Đẹp Cho Ngôi Nhà Của Bạn",
    content:
      "Đèn chiếu sáng thông minh giúp bạn tạo ra không gian sống đẹp và thoải mái hơn.",
  },
  {
    id: 13,
    title: "Phụ Kiện Công Nghệ: Sản Phẩm Độc Đáo Cho Người Yêu Công Nghệ",
    content:
      "Các phụ kiện công nghệ mới như smartwatch và tai nghe không dây làm bạn trở nên hiện đại và tiện lợi hơn.",
  },
  {
    id: 14,
    title: "Bàn Phím Gaming: Trải Nghiệm Chơi Game Tốt Nhất",
    content:
      "Các bàn phím gaming chuyên nghiệp giúp bạn trải nghiệm chơi game tốt hơn với các tính năng đặc biệt.",
  },
  {
    id: 15,
    title: "Thiết Bị Đo Sức Khỏe: Giám Sát Sức Khỏe Của Bạn",
    content:
      "Các thiết bị đo sức khỏe thông minh giúp bạn theo dõi sức khỏe cá nhân một cách chính xác.",
  },
  {
    id: 16,
    title: "Tủ Lạnh Công Nghệ Mới: Bảo Quản Thực Phẩm Tốt Hơn",
    content:
      "Tủ lạnh mới với công nghệ tiên tiến giúp bạn bảo quản thực phẩm tươi ngon lâu hơn.",
  },
  {
    id: 17,
    title: "Laptop Gaming: Đắm Chìm Trong Thế Giới Ảo",
    content:
      "Laptop gaming với hiệu năng mạnh mẽ giúp bạn đắm chìm trong thế giới game ảo một cách sống động.",
  },
  {
    id: 18,
    title: "Máy In 3D: Sáng Tạo Với Công Nghệ In 3D",
    content:
      "Máy in 3D giúp bạn sáng tạo và sản xuất các sản phẩm độc đáo và tùy chỉnh.",
  },
  {
    id: 19,
    title: "Camera An Ninh Thông Minh: Bảo Vệ Nhà Cửa Của Bạn",
    content:
      "Camera an ninh thông minh giúp bạn bảo vệ ngôi nhà của mình một cách hiệu quả.",
  },
  {
    id: 20,
    title: "Tai Nghe Bluetooth: Âm Thanh Sắc Nét Mọi Lúc Mọi Nơi",
    content:
      "Tai nghe Bluetooth giúp bạn thưởng thức âm nhạc với âm thanh sắc nét mọi lúc mọi nơi.",
  },
  {
    id: 21,
    title: "Cách Lựa Chọn Cấu Hình Máy Tính Tốt Nhất Cho Công Việc",
    content:
      "Hướng dẫn cách lựa chọn cấu hình máy tính phù hợp nhất với nhu cầu công việc của bạn để tối ưu hiệu suất làm việc.",
  },
];

export const News = () => {
  const navigate = useNavigate();
  const [expandedNews, setExpandedNews] = useState([]);

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  const handleReadMoreClick = (newsId) => {
    setExpandedNews((prevExpanded) => [...prevExpanded, newsId]);
    // Navigate to the new page when Read More is clicked
    navigate(`/news/${newsId}/details`);
  };

  return (
    <div className="pageContainer">
      <div className="centerContainer">
        <Heading as="h1" size="xl" mb={4} className="newsHeading">
          Tin Tức Công Nghệ
        </Heading>
        <div className="cardGrid">
          {fakeNewsData.map((news) => (
            <div key={news.id} className="card">
              <div className="card-banner1">
                <Text className="alignLeft" color="white">
                  {news.title}
                </Text>
              </div>
              <div className="card-content">
                <div className="card-content-inner">
                  <Text className="newsContent">
                    {expandedNews.includes(news.id)
                      ? news.content
                      : `${news.content.slice(0, 100)}...`}
                  </Text>
                  {!expandedNews.includes(news.id) && (
                    <Button
                      mt={2}
                      size="sm"
                      onClick={() => handleReadMoreClick(news.id)}
                      className="readMoreButton"
                    >
                      Xem Chi Tiết
                    </Button>
                  )}
                </div>
              </div>
              {/* Additional card content here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

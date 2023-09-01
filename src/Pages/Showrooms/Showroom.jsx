import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./card.css";

export const Showrooms = () => {
  const [cardTexts, setCardTexts] = useState([
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
    "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội\n\n" +
      "Hình ảnh thực tế showroom\n\n" +
      "Xem bản đồ đường đi\n\n" +
      "Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551\n\n" +
      "Bảo hành: 1900 1903 (máy lẻ 25393)\n\n" +
      "Email: kdbl.haibatrung@hacom.vn\n\n" +
      "Thời gian mở cửa: Từ 8h-20h hàng ngày",
  ]);

  return (
    <div className="pageContainer">
      <div className="centerContainer">
        <div className="cardGrid">
          {cardTexts.map((text, i) => (
            <div className="card" key={i}>
              <div className="card-banner1">
                {i + 1}. DCB SHOP.VN {/* Add numerical order to banner */}
              </div>
              <div className="card-content">
                {/* Add margin or padding to create space */}
                <div className="card-content-inner">
                  {text
                    .split("\n\n")
                    .slice(0, 7) // Limit to 7 lines
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

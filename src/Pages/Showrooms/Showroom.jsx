import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Showrooms = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tra cứu thời gian bảo hành",
      title: "Tra cứu thời gian bảo hành máy",
      hintText: "Nhập số IMEI để tra cứu..",
    },
    {
      id: 2,
      tabTitle: "Tra cứu thông tin máy",
      title: "Tra cứu thông tin máy đang được bảo hành",
      hintText: "Nhập thông tin để tra cứu..",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  return (
    <Flex
      align="center"
      justify="center"
      minHeight="100vh"
      backgroundColor="white"
    >
      <div
        className="container"
        style={{
          maxWidth: "1000px",
          padding: "80px",
          backgroundColor: "#d9e3f0",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              style={{
                backgroundColor:
                  currentTab === `${tab.id}` ? "#697689" : "#d9e3f0",
                color: currentTab === `${tab.id}` ? "#ffffff" : "#000000",
                border: "none",
                padding: "8px 16px",
                marginRight: "8px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <form style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              id="uname"
              name="name"
              required
              size="45"
              pattern="[0-9]*" // Use a pattern to allow only numbers
              inputMode="numeric" // Set input mode to numeric
              placeholder={tabs[currentTab - 1].hintText}
              style={{
                borderColor: "black",
                color: "#FFCC00",
                padding: "8px",
                borderRadius: "4px",
                marginTop: "4px",
                marginRight: "10px",
                border: "1px solid black",
              }}
            />
            <button
              style={{
                backgroundColor: "#d32f2f",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Kiểm tra
            </button>
          </div>
        </form>
        {currentTab === "2" && (
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <input
                type="radio"
                checked={selectedRadio === "One"}
                onChange={() => handleRadioChange("One")}
                name="radio"
              />
              <label className="container">
                Theo số phiếu
                <span className="checkmark"></span>
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <input
                type="radio"
                checked={selectedRadio === "Two"}
                onChange={() => handleRadioChange("Two")}
                name="radio"
              />
              <label className="container">
                Theo số điện thoại
                <span className="checkmark"></span>
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                checked={selectedRadio === "Three"}
                onChange={() => handleRadioChange("Three")}
                name="radio"
              />
              <label className="container">
                Theo số IMEI
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        )}
      </div>
    </Flex>
  );
};

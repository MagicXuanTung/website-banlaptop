import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./warranty.css";

export const WarrantyCheck = () => {
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
      <div className="container">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className={`tabButton ${
                currentTab === `${tab.id}` ? "activeTab" : ""
              }`}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <form style={{ marginTop: "20px" }}>
          <div className="formInput">
            <input
              type="text"
              id="uname"
              name="name"
              required
              size="45"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder={tabs[currentTab - 1].hintText}
            />
            <button className="submitButton">Kiểm tra</button>
          </div>
        </form>
        {currentTab === "2" && (
          <div className="radioGroup">
            <div className="radioOption">
              <input
                type="radio"
                checked={selectedRadio === "One"}
                onChange={() => handleRadioChange("One")}
                name="radio"
              />
              <label>Theo số phiếu</label>
            </div>
            <div className="radioOption">
              <input
                type="radio"
                checked={selectedRadio === "Two"}
                onChange={() => handleRadioChange("Two")}
                name="radio"
              />
              <label>Theo số điện thoại</label>
            </div>
            <div className="radioOption">
              <input
                type="radio"
                checked={selectedRadio === "Three"}
                onChange={() => handleRadioChange("Three")}
                name="radio"
              />
              <label>Theo số IMEI</label>
            </div>
          </div>
        )}
      </div>
    </Flex>
  );
};

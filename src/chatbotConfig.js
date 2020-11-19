import { createChatBotMessage } from "react-chatbot-kit";

const chatbotConfig = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#b84b80",
    },
    chatButton: {
      backgroundColor: "#b84b80",
    },
  },
};

export default chatbotConfig;

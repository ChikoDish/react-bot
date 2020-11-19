import Chatbot from "react-chatbot-kit";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./chatbotConfig";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;

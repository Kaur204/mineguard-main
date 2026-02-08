import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChatHistorySidebar from "../../components/ChatAI/ChatHistorySidebar";
import MessageList from "../../components/ChatAI/MessageList";
import ChatInput from "../../components/ChatAI/ChatInput";
import ChatHeader from "../../components/ChatAI/ChatHeader";

const ChatbotPage = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const [chatToDelete, setChatToDelete] = useState(null);
  const messagesEndRef = useRef(null);
  const _navigate = useNavigate();

  useEffect(() => {
    const savedHistory = localStorage.getItem("chatHistory");
    const initialHistory = savedHistory ? JSON.parse(savedHistory) : [];
    
    if (initialHistory.length === 0) {
      createNewChat();
    } else {
      loadChat(initialHistory[0].id);
    }
    setChatHistory(initialHistory);
  }, []);

  useEffect(() => {
    if (messages.length > 0 && currentChatId) {
      localStorage.setItem(
        `chatMessages_${currentChatId}`,
        JSON.stringify(messages)
      );
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentChatId]);

  const createNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat = {
      id: newChatId,
      title: "New Chat",
      timestamp: new Date().toISOString(),
    };

    setChatHistory((prev) => [newChat, ...prev]);
    setCurrentChatId(newChatId);
    setMessages([]);
  };

  const loadChat = (chatId) => {
    const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
    setCurrentChatId(chatId);
    setMessages(savedMessages ? JSON.parse(savedMessages) : []);
  };

  const deleteChat = (chatId) => {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      const updatedHistory = chatHistory.filter((chat) => chat.id !== chatId);
      setChatHistory(updatedHistory);
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      localStorage.removeItem(`chatMessages_${chatId}`);

      if (chatId === currentChatId) {
        if (updatedHistory.length > 0) {
          loadChat(updatedHistory[0].id);
        } else {
          createNewChat();
        }
      }
    }
    setChatToDelete(null);
  };

  const typewriterEffect = async (fullText, messageIndex) => {
    const delayPerCharacter = 30;
    
    for (let i = 0; i <= fullText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, delayPerCharacter));
      
      setMessages((prev) => {
        const updated = [...prev];
        if (updated[messageIndex]) {
          updated[messageIndex].text = fullText.substring(0, i);
        }
        return updated;
      });
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/ask",
        { query: input },
        { headers: { "Content-Type": "application/json" } }
      );

      let aiResponse = "I didn't understand that";
      if (
        Array.isArray(response.data?.results) &&
        response.data.results.length > 0
      ) {
        const best = response.data.results.reduce(
          (max, curr) => (curr.score > max.score ? curr : max),
          response.data.results[0]
        );
        aiResponse = best.section || aiResponse;
      } else if (response.data?.result || response.data?.answer) {
        aiResponse = response.data.result || response.data.answer;
      }

      setMessages((prev) => [...prev, { text: "", isUser: false }]);
      await typewriterEffect(aiResponse, messages.length + 1);

      if (messages.length === 0) {
        const newTitle =
          input.length > 30 ? `${input.substring(0, 30)}...` : input;
        const updatedHistory = chatHistory.map((chat) =>
          chat.id === currentChatId ? { ...chat, title: newTitle } : chat
        );
        setChatHistory(updatedHistory);
        localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      }
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [...prev, { text: "", isUser: false }]);
      await typewriterEffect(
        "Sorry, I encountered an error. Please try again.",
        messages.length + 1
      );
    } finally {
      setLoading(false);
    }
  };

  const currentChat = chatHistory.find((chat) => chat.id === currentChatId);
  const currentChatTitle = currentChat ? currentChat.title : "AI Chat Assistant";

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden">
            {/* Sidebar - Always in layout, toggles width */}
      <div className={`transition-all duration-300 border-r border-gray-200 ${showHistory ? "w-64" : "w-0"} overflow-hidden`}>
        <ChatHistorySidebar
          chatHistory={chatHistory}
          currentChatId={currentChatId}
          showHistory={showHistory}
          chatToDelete={chatToDelete}
          onCreateNewChat={createNewChat}
          onLoadChat={loadChat}
          onSetChatToDelete={setChatToDelete}
          onDeleteChat={deleteChat}
          onToggleHistory={() => setShowHistory(!showHistory)}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatHeader 
          onToggleHistory={() => setShowHistory(!showHistory)} 
          currentChatTitle={currentChatTitle} 
          sidebarOpen={showHistory}
        />
        
        <MessageList messages={messages} messagesEndRef={messagesEndRef} />
        
        <ChatInput
          input={input}
          loading={loading}
          onInputChange={(e) => setInput(e.target.value)}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatbotPage;
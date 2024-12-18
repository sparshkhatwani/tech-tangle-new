import axios from "axios";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Ask me anything");

  // async function generateAnswer() {
  //   setAnswer("loading...");
  //   const response = await axios({
  //     url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB4u465qKAmRtJSvWi5DbizhrJ7skb7qG4",
  //     method: "post",
  //     data: { contents: [{ parts: [{ text: question }] }] },
  //   });
  //   setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  //   console.log(response)
  // }

  async function generateAnswer() {
    setAnswer("Loading...");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB4u465qKAmRtJSvWi5DbizhrJ7skb7qG4",
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );
      console.log(response)
      // Safely access the response structure
      const candidates = response.data?.candidates;
      if (candidates?.length > 0) {
        const content = candidates[0]?.content?.parts[0]?.text;
        setAnswer(content || "No content found in response");
      } else {
        setAnswer("No valid candidates in API response");
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("An error occurred while fetching the answer. Please try again.");
    }
  }

  return (
    <>
      {/* <div className="bg-white">
        <h1 className="font-bold">Chat AI</h1>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          cols={5}
          rows={5}
        ></textarea>

        <div>
          <div className="">
            <div className="relative group">
              <button
                onClick={generateAnswer}
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Generate Answer
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
        <Markdown>{answer}</Markdown>
      </div> */}

      <div className="bg-dark-layer-1 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-4 font-inter text-white">
            Chat AI
          </h1>

          <div className="bg-dark-layer-2 text-white chat-container rounded-lg shadow-md p-4 font-inter">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              className="font-inter bg-dark-divider-border-2 text-white flex-grow px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              className="font-inter px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              onClick={generateAnswer}
            >
              Send
            </button>
          </div>
          <button
            onClick={() => {
              setQuestion("");
              setAnswer("Ask me anything");
            }}
            className="font-inter mt-4 block px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          >
            Clear Chat
          </button>
        </div>
      </div>
    </>
  );
};
export default index;

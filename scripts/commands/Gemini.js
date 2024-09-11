const axios = require("axios");

module.exports = {
  config: {
    name: "gemini",
    version: "1.0",
    author: "♡ Nazrul ♡",
    countDown: 5,
    role: 0,
    category: "gemini pro"
  },
  onStart: async function({ message, event, args, commandName }) {
    const Nazrul = args.join(' ');

    try {
      const response = await axios.get(`https://x9-apis-2.onrender.com/gemini?prompt=${encodeURIComponent(Nazrul)}`);

      if (response.data) {
        const nazrulMsg = response.data.nazrul;
        const airins = `${nazrulMsg}`;
        message.reply({
          body: airins,
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID
          });
        });
      }

    } catch (error) {
      console.error("error:", error.message);
    }
  },

  onReply: async function({ message, event, Reply, args }) {
    let { author, commandName } = Reply;
    if (event.senderID != author) return;

    const Airin = args.join(' ');

    try {
      const response = await axios.get(`https://x9-apis-2.onrender.com/gemini?prompt=${encodeURIComponent(Airin)}`);

      if (response.data) {
        const nazrulMsg = response.data.nazrul;
        const airin = `${nazrulMsg}`;
        message.reply({
          body: airin,
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID
          });
        });
      }

    } catch (error) {
      console.error("error:", error.message);
    }
  }
};

const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_SECRET,
});
const openai = new OpenAIApi(configuration);
exports.chatbotController = async (req, res) => {
  try {
    const {text}=req.body;
    const {data} = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages:[{"role" : "user", "content" : text}],
      temperature: 0.2,
      top_p:1,
      stream:false,
      presence_penalty:1,
      frequency_penalty:1.1,
      max_tokens: 1000
  });
  if (data) {
    console.log(data.choices[0].message.content);
    if (data.choices[0].message.content) {
      return res.status(200).json(data.choices[0].message.content);
    }
  }
} catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};


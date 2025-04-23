// const { Router } = require("express");
// const router = Router();
// const OpenAI = require("openai");
// require("dotenv").config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// router.post("/rutaPost_IA", (req, res) => {
//   const completion = openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     store: true,
//     messages: [
//       {
//         role: "developer",
//         content: "Eres un ordenador malote" + req.body.pregunta,
//       },
//     ],
//   });
//   completion.then((result) => {
//     res.json({ content: result.choices[0].message.content });
//   });
// });

// module.exports = router;

const { Router } = require("express");
const router = Router();
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
router.post("/rutaPost_IA", async (req, res) => {
  const pregunta = req.body.pregunta;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Eres un asistente muy útil." },
        { role: "user", content: pregunta },
      ],
    });

    const respuesta = completion.choices[0].message.content;

    res.json({ content: respuesta });
  } catch (error) {
    console.error("Error al llamar a OpenAI:", error);
    res.status(500).json({ content: "Error en el servidor" });
  }
});

module.exports = router;

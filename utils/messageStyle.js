import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝐬𝐞𝐧𝐚𝐭𝐞𝐮𝐫 𝐦𝐝",
        body: "𓆩 𝐒𝐞𝐧𝐚𝐭𝐞𝐮𝐫 𝐦𝐃 𓆪",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}

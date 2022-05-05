const { Telegraf, Markup } = require('telegraf');
const instagram = require("@phaticusthiccy/open-apis");
const bot = new Telegraf(process.env.token);

bot.start((ctx) => ctx.reply("Salam, Əziz"+ctx.from.username+"! Bu bot vasitəsilə sən Instagram'dan video və şəkil endirə bilərsən. Xoş istifadələr. ", {
      ...Markup.inlineKeyboard([
        Markup.button.url('Sahibimin kanalı🙈', 
           't.me/ThehusnumustafayevBlog')
      ])
     }
    ));

bot.on('text', (ctx) => {
ctx.reply("Mendownload")
let link = ctx.message.text;
    instagram.insta_post(link).then(async (data) => {
   if (data.post1.type = "mp4") {
       ctx.replyWithVideo(data.post1.url)
   
    } else {
      ctx.replyWithPhoto(data.post1.url)
    }
  })
})


bot.launch()


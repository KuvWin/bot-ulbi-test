module.exports = {
    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: '1', callback_data: '1' }, { text: '2', callback_data: '2' }, { text: '3', callback_data: '3' }],
                [{ text: '4', callback_data: '4' }, { text: '5', callback_data: '5' }, { text: '6', callback_data: '6' }],
                [{ text: '7', callback_data: '7' }, { text: '8', callback_data: '8' }, { text: '9', callback_data: '9' }],
                [{ text: '0', callback_data: '0' }]
            ]
        })
    },

    againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Играть еще?', callback_data: '/again' }]
            ]
        })
    },

    sadStickers: {
        0: "https://cdn.tlgrm.app/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/10.webp",
        1: "https://cdn.tlgrm.app/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/11.webp",
        2: "https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/8.webp",
        3: "https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/7.webp",
        4: "https://cdn.tlgrm.app/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/4.webp",
        5: "https://tlgrm.ru/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/192/16.webp",
        6: "https://tlgrm.ru/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/192/17.webp",
        7: "https://tlgrm.ru/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/192/24.webp",
        8: "https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/22.webp",
        9: "https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/26.webp"
    }
}
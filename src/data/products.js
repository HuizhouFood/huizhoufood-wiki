export const featuredProducts = [
  { id: 'goji', name: '枸杞', latinName: 'Lycium barbarum', category: '果部·灌木类', tag: '精选', description: '补肝肾、益精血、明目，典型药食同源植物', href: '/goji', gradient: 'from-red-500/80 to-amber-400/80', emoji: '🫐' },
  { id: 'lotus', name: '莲子', latinName: 'Nelumbo nucifera', category: '果部·莲类', tag: '经典', description: '补脾止泻、益肾固精、养心安神', href: '/lotus', gradient: 'from-emerald-500/80 to-teal-300/80', emoji: '🪷' },
  { id: 'suanzao', name: '酸枣', latinName: 'Ziziphus jujuba var. spinosa', category: '果部·果类', tag: '安神', description: '养心安神、养肝敛汗，助眠食疗佳品', href: '/suanzao', gradient: 'from-amber-600/80 to-orange-300/80', emoji: '🍒' },
]

export const productDetails = {
  goji: {
    id: 'goji', name: '枸杞', latinName: 'Lycium barbarum', category: '果部·灌木类',
    subtitle: '晶莹红果，补肝肾之佳品', nature: '性味甘、平，归肝、肾经', liShizhenQuote: '久服坚筋骨，轻身不老',
    features: [{ name: '所属部类', description: '果部·灌木类' }, { name: '性味归经', description: '甘、平；归肝、肾经' }],
    efficacy: ['补肝肾：滋养肝肾阴血，改善肝肾不足', '益精血：补充精血，适合体虚乏力者日常调理', '明目：传统本草认为可改善目赤昏花、视力减退', '养阴润燥：缓解口干、咽燥等阴液不足表现'],
    edibleParts: ['枸杞子（果实）', '枸杞叶（枸杞尖）', '地骨皮（根皮）'],
    cookingMethods: [
      { title: '枸杞泡水', description: '温水冲泡，可配菊花、红枣，保留营养与香气。' },
      { title: '枸杞煲汤', description: '加入鸡汤、排骨汤、羊肉汤，最后阶段放入，增香增甜。' },
      { title: '枸杞煮粥', description: '与大米或小米同煮，健脾养胃，早晚皆可。' },
      { title: '枸杞甜品', description: '银耳羹、雪梨羹中加入枸杞，经典润肺甜品。' },
      { title: '枸杞入菜', description: '炒山药、蒸蛋、凉拌菜点缀，增色增营养。' },
    ],
    precautions: ['不宜过量，每日 10–15 克为宜', '阴虚火旺者适量食用', '高温久煮会降低部分营养成分'],
    summary: '枸杞为典型"药食同源"植物，在古代本草与现代饮食中均广泛应用。',
    gradient: 'from-red-500/80 to-amber-400/80', emoji: '🫐',
  },
  lotus: {
    id: 'lotus', name: '莲子', latinName: 'Nelumbo nucifera', category: '果部·莲类',
    subtitle: '水生灵物，补脾养心之佳品', nature: '性味甘、涩、平，归脾、肾、心经', liShizhenQuote: '补中养神，久服轻身延年',
    features: [{ name: '所属部类', description: '果部·莲类' }, { name: '性味归经', description: '甘、涩、平；归脾、肾、心经' }],
    efficacy: ['补脾止泻：用于脾虚久泻、食少体倦', '益肾固精：用于遗精、滑精、肾气不足', '养心安神：用于心悸、失眠、多梦', '养胃生津：改善口干、体虚'],
    edibleParts: ['莲子（去心后使用更佳）', '莲心（味苦，可清心火）', '莲藕（根茎，可食）', '莲叶（可入茶）'],
    cookingMethods: [
      { title: '莲子粥', description: '莲子与大米或小米同煮，常用于健脾养胃、安神。' },
      { title: '银耳莲子羹', description: '莲子 + 银耳 + 冰糖，经典润肺甜品。' },
      { title: '莲子百合汤', description: '莲子 + 百合 + 枸杞，用于安神助眠。' },
      { title: '莲子炖鸡', description: '莲子 + 鸡肉 + 红枣，滋补汤品。' },
      { title: '莲子糖水', description: '莲子 + 冰糖慢炖，传统甜品。' },
    ],
    precautions: ['莲心较苦，可清心火但不宜过量', '生莲子不易消化，应煮熟食用', '体寒者不宜过多生食'],
    summary: '莲子在《本草纲目》中被视为"补脾养心之佳品"，现代广泛用于甜品、汤羹与养生食品。',
    gradient: 'from-emerald-500/80 to-teal-300/80', emoji: '🪷',
  },
  suanzao: {
    id: 'suanzao', name: '酸枣', latinName: 'Ziziphus jujuba var. spinosa', category: '果部·果类',
    subtitle: '酸甘平性，养心安神之要果', nature: '性味甘、酸、平，归心、肝、胆经', liShizhenQuote: '主虚劳虚烦不得眠',
    features: [{ name: '所属部类', description: '果部·果类' }, { name: '性味归经', description: '甘、酸、平；归心、肝、胆经' }],
    efficacy: ['养心安神：用于心神不宁、失眠多梦、惊悸不安', '养肝敛汗：用于虚汗、盗汗', '益肝血：改善肝血不足引起的头晕、疲倦', '生津止渴：缓解口干、烦躁'],
    edibleParts: ['酸枣仁（核心药用部分）', '酸枣果肉（可食用）', '酸枣树皮（民间少用）'],
    cookingMethods: [
      { title: '酸枣仁粥', description: '酸枣仁研粉后加入大米粥，常用于安神助眠食疗。' },
      { title: '酸枣茶', description: '酸枣仁炒制后煮水，可搭配百合、茯苓。' },
      { title: '酸枣糕 / 酸枣饼', description: '将酸枣果肉制成果泥，加蜂蜜或红糖制成传统小吃。' },
      { title: '酸枣酒', description: '酸枣发酵浸泡，风味酸甜，传统药酒之一。' },
      { title: '酸枣甜汤', description: '酸枣 + 红枣 + 冰糖，常见民间养生甜品。' },
    ],
    precautions: ['酸枣仁偏安神，过量可能困倦', '胃酸过多者慎用酸性果实', '建议炒制后使用更安全'],
    summary: '酸枣在《本草纲目》中被视为"养心安神之要果"，现代主要用于改善睡眠与情绪调节。',
    gradient: 'from-amber-600/80 to-orange-300/80', emoji: '🍒',
  },
}

const STORIES = [
  {
    "id": "snake",
    "title": "The Very Hungry Little Snake",
    "titleZh": "好饿的小蛇",
    "category": "宫西达也",
    "cover": "images/covers/cover-snake.jpg",
    "pages": [
      {
        "img": "images/snake/page-1.jpg",
        "en": "One sunny morning, a little snake wiggled along the path.",
        "zh": "一个阳光明媚的早晨，小蛇一扭一扭地在小路上散步。",
        "keys": [
          {
            "w": "wiggle",
            "p": "/ˈwɪɡl/",
            "zh": "一扭一扭地"
          },
          {
            "w": "path",
            "p": "/pɑːθ/",
            "zh": "小路"
          },
          {
            "w": "sunny",
            "p": "/ˈsʌni/",
            "zh": "阳光明媚的"
          }
        ],
        "phrases": [
          [
            {
              "en": "a bright, sunny morning",
              "zh": "一个阳光明媚的早晨"
            },
            {
              "en": "wriggle along the path",
              "zh": "在小路上一扭一扭地走"
            }
          ]
        ]
      },
      {
        "img": "images/snake/page-2.jpg",
        "en": "He saw a round, red apple. \"Guess what he did?\" Crunch, crunch! So yummy!",
        "zh": "他看到一个圆圆的红苹果。\"你猜他会怎么做？\" 他啊呜，啊呜，真好吃！",
        "keys": [
          {
            "w": "round",
            "p": "/raʊnd/",
            "zh": "圆圆的"
          },
          {
            "w": "apple",
            "p": "/ˈæpl/",
            "zh": "苹果"
          },
          {
            "w": "delicious",
            "p": "/dɪˈlɪʃəs/",
            "zh": "好吃的"
          }
        ],
        "phrases": [
          [
            {
              "en": "a round red apple",
              "zh": "一个圆圆的红苹果"
            },
            {
              "en": "What do you think he will do?",
              "zh": "你猜他会怎么做？"
            },
            {
              "en": "Yum, so delicious",
              "zh": "真好吃"
            }
          ]
        ]
      },
      {
        "img": "images/snake/page-3.jpg",
        "en": "The next day, the hungry little snake went for a walk again. He saw a curvy yellow banana. \"Guess what he did?\" Crunch, crunch! So yummy!",
        "zh": "第二天，好饿的小蛇又一扭一扭地去散步了。他看到一根弯弯的黄香蕉。\"你猜他会怎么做？\" 他啊呜，啊呜，真好吃！",
        "keys": [
          {
            "w": "banana",
            "p": "/bəˈnɑːnə/",
            "zh": "香蕉"
          },
          {
            "w": "yellow",
            "p": "/ˈjeloʊ/",
            "zh": "黄色的"
          }
        ],
        "phrases": [
          [
            {
              "en": "the next day",
              "zh": "第二天"
            },
            {
              "en": "a curved yellow banana",
              "zh": "一根弯弯的黄香蕉"
            },
            {
              "en": "the hungry little snake",
              "zh": "好饿的小蛇"
            }
          ]
        ]
      },
      {
        "img": "images/snake/page-4.jpg",
        "en": "On the third day, the hungry little snake went for a walk again. He saw a triangular rice ball. \"Guess what he did?\" Crunch, crunch! So yummy!",
        "zh": "第三天，好饿的小蛇又一扭一扭地去散步了。他看到一个三角形的小饭团。\"你猜他会怎么做？\" 他啊呜，啊呜，真好吃！",
        "keys": [
          {
            "w": "triangular",
            "p": "/traɪˈæŋɡjələr/",
            "zh": "三角形的"
          }
        ],
        "phrases": [
          [
            {
              "en": "the third day",
              "zh": "第三天"
            },
            {
              "en": "a triangular rice ball",
              "zh": "一个三角形的小饭团"
            },
            {
              "en": "What do you think he will do?",
              "zh": "你猜他会怎么做？"
            }
          ]
        ]
      },
      {
        "img": "images/snake/page-5.jpg",
        "en": "On the fourth day, the hungry little snake went for a walk again. He saw a big bunch of purple grapes. \"Guess what he did?\" Crunch, crunch! So yummy!",
        "zh": "第四天，好饿的小蛇又一扭一扭地去散步了。他看到一大串紫色的葡萄。\"你猜他会怎么做？\" 他啊呜，啊呜，真好吃！",
        "keys": [
          {
            "w": "bunch",
            "p": "/bʌntʃ/",
            "zh": "一串"
          },
          {
            "w": "grapes",
            "p": "/ɡreɪps/",
            "zh": "葡萄"
          },
          {
            "w": "purple",
            "p": "/ˈpɜːrpl/",
            "zh": "紫色的"
          }
        ],
        "phrases": [
          [
            {
              "en": "the fourth day",
              "zh": "第四天"
            },
            {
              "en": "a big bunch of purple grapes",
              "zh": "一大串紫色的葡萄"
            },
            {
              "en": "Yum, so delicious",
              "zh": "真好吃"
            }
          ]
        ]
      },
      {
        "img": "images/snake/page-6.jpg",
        "en": "On the fifth day, the hungry little snake went for a walk again. He saw a pointy pineapple. \"Guess what he did?\" Crunch, crunch! So yummy!",
        "zh": "第五天，好饿的小蛇又一扭一扭地去散步了。他看到一个尖尖的菠萝。\"你猜他会怎么做？\" 他啊呜，啊呜，真好吃！",
        "keys": [
          {
            "w": "pineapple",
            "p": "/ˈpaɪnæpl/",
            "zh": "菠萝"
          },
          {
            "w": "pointy",
            "p": "/ˈpɔɪnti/",
            "zh": "尖尖的"
          }
        ],
        "phrases": [
          [
            {
              "en": "the fifth day",
              "zh": "第五天"
            },
            {
              "en": "a spiky pineapple",
              "zh": "一个尖尖的菠萝"
            },
            {
              "en": "the hungry little snake",
              "zh": "好饿的小蛇"
            }
          ]
        ]
      },
      {
        "img": "images/snake/page-7.jpg",
        "en": "His tail is right here! He is a very happy, very full little snake.",
        "zh": "第六天，好饿的小蛇又一扭一扭地去散步了。他看到树上有许多红苹果。\"你猜他会怎么做？\" 小蛇一扭一扭地爬上树，然后张开大嘴！\"喔！啊呜，啊呜，真好吃！\"",
        "keys": [
          {
            "w": "tree",
            "p": "/triː/",
            "zh": "树"
          },
          {
            "w": "climb",
            "p": "/klaɪm/",
            "zh": "爬"
          },
          {
            "w": "tasty",
            "p": "/ˈteɪsti/",
            "zh": "好吃的"
          }
        ],
        "phrases": [
          [
            {
              "en": "many red apples on the tree",
              "zh": "树上有许多红苹果"
            },
            {
              "en": "climb up the tree",
              "zh": "爬上树"
            },
            {
              "en": "open his big mouth",
              "zh": "张开大嘴"
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "pea-shooter",
    "title": "The Brave Pea Shooter",
    "titleZh": "勇敢的豌豆射手",
    "category": "植物大战僵尸",
    "cover": "images/covers/cover-pea-shooter.jpg",
    "pages": [
      {
        "img": "images/pea-shooter/page-1.jpg",
        "en": "In a bright, sunny garden lived a tiny green Pea Shooter named Pip. He had big round eyes, a cheerful smile, and a little leaf on his head. Pip loved his garden home more than anything in the world.\n\nEvery morning, Pip would stretch his leaves and say, \"Today is going to be a great day!\"",
        "zh": "在一个明亮、阳光灿烂的花园里，住着一只绿色的小豌豆射手，名叫皮皮。他有一双圆圆的大眼睛，一个开心的笑容，头顶上还有一片小叶子。皮皮爱他的花园家园胜过世界上的一切。\n\n每天早上，皮皮都会伸伸他的叶子说：“今天一定会是个好日子！”",
        "keys": [
          {
            "w": "bright",
            "p": "/braɪt/",
            "zh": "明亮的"
          },
          {
            "w": "sunny",
            "p": "/ˈsʌni/",
            "zh": "阳光充足的"
          },
          {
            "w": "tiny",
            "p": "/ˈtaɪni/",
            "zh": "微小的"
          },
          {
            "w": "cheerful",
            "p": "/ˈtʃɪəfəl/",
            "zh": "快乐的"
          },
          {
            "w": "garden",
            "p": "/ˈɡɑːrdən/",
            "zh": "花园"
          }
        ],
        "phrases": [
          [
            {
              "en": "a bright, sunny garden",
              "zh": "一个明亮、阳光灿烂的花园"
            },
            {
              "en": "a tiny green Pea Shooter named Pip",
              "zh": "一只名叫皮皮的绿色小豌豆射手"
            },
            {
              "en": "loved his garden home more than anything in the world",
              "zh": "爱他的花园家园胜过世界上的一切"
            }
          ]
        ]
      },
      {
        "img": "images/pea-shooter/page-2.jpg",
        "en": "One sunny morning, Pip decided to take a walk along the cobblestone path. The flowers waved at him as he passed. Butterflies danced around his head.\n\n\"What a wonderful day for a walk!\" Pip cheered, hopping along the path.",
        "zh": "一个阳光明媚的早晨，皮皮决定沿着鹅卵石小路散步。花朵们在他经过时向他挥手，蝴蝶在他头顶翩翩起舞。\n\n“散步的好天气！”皮皮欢呼着，沿着小路蹦蹦跳跳。",
        "keys": [
          {
            "w": "decide",
            "p": "/dɪˈsaɪd/",
            "zh": "决定"
          },
          {
            "w": "cobblestone",
            "p": "/ˈkɑːbəls.toʊn/",
            "zh": "鹅卵石的"
          },
          {
            "w": "path",
            "p": "/pæθ/",
            "zh": "小路"
          },
          {
            "w": "butterfly",
            "p": "/ˈbʌtərflaɪ/",
            "zh": "蝴蝶"
          },
          {
            "w": "wonderful",
            "p": "/ˈwʌndərfəl/",
            "zh": "美好的"
          }
        ],
        "phrases": [
          [
            {
              "en": "take a walk along the cobblestone path",
              "zh": "沿着鹅卵石小路散步"
            },
            {
              "en": "The flowers waved at him",
              "zh": "花朵们向他挥手"
            },
            {
              "en": "What a wonderful day for a walk!",
              "zh": "散步的好天气！"
            }
          ]
        ]
      },
      {
        "img": "images/pea-shooter/page-3.jpg",
        "en": "Pip walked through the most beautiful part of the garden. Tall sunflowers stood like guards. Colorful mushrooms dotted the ground. Bees hummed happy songs.\n\n\"I love my garden so much,\" Pip whispered happily.",
        "zh": "皮皮走过花园中最美丽的地方。高高的向日葵像卫兵一样站着，五颜六色的蘑菇点缀着地面，蜜蜂哼着快乐的歌。\n\n“我太爱我的花园了，”皮皮幸福地低语。",
        "keys": [
          {
            "w": "beautiful",
            "p": "/ˈbjuːtəfəl/",
            "zh": "美丽的"
          },
          {
            "w": "sunflower",
            "p": "/ˈsʌnˌflaʊər/",
            "zh": "向日葵"
          },
          {
            "w": "guard",
            "p": "/ɡɑːrd/",
            "zh": "卫兵"
          },
          {
            "w": "mushroom",
            "p": "/ˈmʌʃruːm/",
            "zh": "蘑菇"
          },
          {
            "w": "whisper",
            "p": "/ˈwɪspər/",
            "zh": "低语"
          }
        ],
        "phrases": [
          [
            {
              "en": "the most beautiful part of the garden",
              "zh": "花园中最美丽的地方"
            },
            {
              "en": "Tall sunflowers stood like guards",
              "zh": "高高的向日葵像卫兵一样站着"
            },
            {
              "en": "I love my garden so much",
              "zh": "我太爱我的花园了"
            }
          ]
        ]
      },
      {
        "img": "images/pea-shooter/page-4.jpg",
        "en": "Suddenly, Pip heard a strange sound. THUMP. THUMP. THUMP. The ground began to shake. Dark clouds rolled in from nowhere.\n\n\"W-what was that?\" Pip's eyes grew wide with worry.",
        "zh": "突然，皮皮听到了一个奇怪的声音。咚。咚。咚。地面开始震动，乌云不知从哪里涌了上来。\n\n“那…那是什么？”皮皮的眼睛因担心而睁大了。",
        "keys": [
          {
            "w": "suddenly",
            "p": "/ˈsʌdənli/",
            "zh": "突然地"
          },
          {
            "w": "strange",
            "p": "/streɪndʒ/",
            "zh": "奇怪的"
          },
          {
            "w": "shake",
            "p": "/ʃeɪk/",
            "zh": "震动"
          },
          {
            "w": "cloud",
            "p": "/klaʊd/",
            "zh": "云"
          },
          {
            "w": "worry",
            "p": "/ˈwɜːri/",
            "zh": "担心"
          }
        ],
        "phrases": [
          {
            "en": "a strange sound",
            "zh": "一个奇怪的声音"
          },
          {
            "en": "the ground began to shake",
            "zh": "地面开始震动"
          },
          {
            "en": "dark clouds rolled in from nowhere",
            "zh": "乌云不知从哪里涌了上来"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-5.jpg",
        "en": "From behind the bushes stumbled a scary zombie! It had an orange traffic cone on its head and moved very slowly. But it kept coming closer and closer!\n\n\"A ZOMBIE!\" Pip gasped. His little body trembled with fear.",
        "zh": "从灌木丛后面踉跄地走出一个可怕的僵尸！它头上戴着一个橙色的路障，走得很慢，但一直越来越近！\n\n“僵尸！”皮皮倒吸一口气，他的小身体因恐惧而颤抖。",
        "keys": [
          {
            "w": "bush",
            "p": "/bʊʃ/",
            "zh": "灌木丛"
          },
          {
            "w": "stumble",
            "p": "/ˈstʌmbəl/",
            "zh": "踉跄而行"
          },
          {
            "w": "scary",
            "p": "/ˈskeri/",
            "zh": "可怕的"
          },
          {
            "w": "zombie",
            "p": "/ˈzɑːmbi/",
            "zh": "僵尸"
          },
          {
            "w": "tremble",
            "p": "/ˈtrembəl/",
            "zh": "颤抖"
          }
        ],
        "phrases": [
          {
            "en": "from behind the bushes",
            "zh": "从灌木丛后面"
          },
          {
            "en": "a scary zombie",
            "zh": "一个可怕的僵尸"
          },
          {
            "en": "closer and closer",
            "zh": "越来越近"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-6.jpg",
        "en": "\"I must be brave!\" Pip shouted. He puffed up his cheeks and fired green peas at the zombie. PEW! PEW! PEW!\n\nThe peas flew through the air like tiny green bullets. \"Take THAT, you big bully!\"",
        "zh": "“我必须勇敢！”皮皮大喊。他鼓起腮帮子，向僵尸发射绿色豌豆。噗！噗！噗！\n\n豌豆像绿色的小子弹一样飞过空中。“接招吧，你这个大坏蛋！”",
        "keys": [
          {
            "w": "brave",
            "p": "/breɪv/",
            "zh": "勇敢的"
          },
          {
            "w": "shout",
            "p": "/ʃaʊt/",
            "zh": "大喊"
          },
          {
            "w": "fire",
            "p": "/ˈfaɪər/",
            "zh": "发射"
          },
          {
            "w": "pea",
            "p": "/piː/",
            "zh": "豌豆"
          },
          {
            "w": "bully",
            "p": "/ˈbʊli/",
            "zh": "恶霸"
          }
        ],
        "phrases": [
          {
            "en": "I must be brave",
            "zh": "我必须勇敢"
          },
          {
            "en": "fired green peas at the zombie",
            "zh": "向僵尸发射绿色豌豆"
          },
          {
            "en": "like tiny green bullets",
            "zh": "像绿色的小子弹一样"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-7.jpg",
        "en": "But something terrible happened. The peas bounced right off the traffic cone! BING! BONG! PING! The zombie didn't even slow down.\n\n\"Oh no! My peas can't break through that cone!\" Pip cried in frustration.",
        "zh": "但可怕的事情发生了。豌豆直接从路障上弹开了！叮！当！乒！僵尸甚至没有放慢脚步。\n\n“哦不！我的豌豆打不穿那个路障！”皮皮沮丧地哭了。",
        "keys": [
          {
            "w": "terrible",
            "p": "/ˈterəbəl/",
            "zh": "可怕的"
          },
          {
            "w": "bounce",
            "p": "/baʊns/",
            "zh": "弹开"
          },
          {
            "w": "traffic cone",
            "p": "/ˈtræfɪk koʊn/",
            "zh": "路障锥"
          },
          {
            "w": "slow",
            "p": "/sloʊ/",
            "zh": "减慢"
          },
          {
            "w": "frustration",
            "p": "/frʌˈstreɪʃən/",
            "zh": "沮丧"
          }
        ],
        "phrases": [
          {
            "en": "bounced right off the traffic cone",
            "zh": "直接从路障上弹开了"
          },
          {
            "en": "didn't even slow down",
            "zh": "甚至没有放慢脚步"
          },
          {
            "en": "break through that cone",
            "zh": "打穿那个路障"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-8.jpg",
        "en": "Pip turned and ran as fast as his little legs could carry him. He zoomed past Cherry Bombs and Potato Mines, looking for help.\n\n\"I need to find someone who can help me!\" Pip panted as he ran.",
        "zh": "皮皮转身拼命地跑。他飞速经过樱桃炸弹和土豆地雷，到处寻找帮助。\n\n“我需要找到能帮我的人！”皮皮一边跑一边喘气。",
        "keys": [
          {
            "w": "turn",
            "p": "/tɜːrn/",
            "zh": "转身"
          },
          {
            "w": "zoom",
            "p": "/zuːm/",
            "zh": "飞速移动"
          },
          {
            "w": "mine",
            "p": "/maɪn/",
            "zh": "地雷"
          },
          {
            "w": "help",
            "p": "/help/",
            "zh": "帮助"
          },
          {
            "w": "pant",
            "p": "/pænt/",
            "zh": "喘气"
          }
        ],
        "phrases": [
          {
            "en": "ran as fast as his little legs could carry him",
            "zh": "拼命地跑"
          },
          {
            "en": "looking for help",
            "zh": "寻找帮助"
          },
          {
            "en": "find someone who can help me",
            "zh": "找到能帮我的人"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-9.jpg",
        "en": "Then Pip found his best friend — Sunny the Sunflower! Sunny had bright golden petals and a warm, kind smile. She always made everyone feel better.\n\n\"Sunny! I need your help! There's a zombie coming!\" Pip cried.",
        "zh": "然后皮皮找到了他最好的朋友——向日葵小阳！小阳有明亮金色的花瓣和温暖善良的笑容，她总是让每个人感觉好起来。\n\n“小阳！我需要你的帮助！有僵尸来了！”皮皮哭着说。",
        "keys": [
          {
            "w": "friend",
            "p": "/frend/",
            "zh": "朋友"
          },
          {
            "w": "golden",
            "p": "/ˈɡoʊldən/",
            "zh": "金色的"
          },
          {
            "w": "petal",
            "p": "/ˈpetəl/",
            "zh": "花瓣"
          },
          {
            "w": "kind",
            "p": "/kaɪnd/",
            "zh": "善良的"
          },
          {
            "w": "smile",
            "p": "/smaɪl/",
            "zh": "微笑"
          }
        ],
        "phrases": [
          {
            "en": "best friend",
            "zh": "最好的朋友"
          },
          {
            "en": "bright golden petals",
            "zh": "明亮金色的花瓣"
          },
          {
            "en": "a warm, kind smile",
            "zh": "温暖善良的笑容"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-10.jpg",
        "en": "Sunny listened carefully and nodded. \"Don't worry, Pip. I know exactly what to do. We need to call someone very special — someone very HOT!\"\n\n\"Hot?\" Pip asked, confused. \"Who could help us with a zombie?\"",
        "zh": "小阳仔细听着，点了点头。“别担心，皮皮。我完全知道该怎么办。我们需要叫一个非常特别的人——一个非常火热的人！”\n\n“火热？”皮皮疑惑地问，“谁能帮我们对付僵尸？”",
        "keys": [
          {
            "w": "carefully",
            "p": "/ˈkerfəli/",
            "zh": "仔细地"
          },
          {
            "w": "exactly",
            "p": "/ɪɡˈzæktli/",
            "zh": "确切地"
          },
          {
            "w": "special",
            "p": "/ˈspeʃəl/",
            "zh": "特别的"
          },
          {
            "w": "hot",
            "p": "/hɑːt/",
            "zh": "火热的"
          },
          {
            "w": "confused",
            "p": "/kənˈfjuːzd/",
            "zh": "困惑的"
          }
        ],
        "phrases": [
          {
            "en": "Don't worry",
            "zh": "别担心"
          },
          {
            "en": "exactly what to do",
            "zh": "完全知道该怎么办"
          },
          {
            "en": "someone very special",
            "zh": "一个非常特别的人"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-11.jpg",
        "en": "Sunny closed her eyes and lifted her face to the sky. Her golden petals began to glow brighter and brighter. Magical golden sparkles swirled around her.\n\n\"I need to collect enough sunlight energy first,\" Sunny explained. The whole garden seemed to light up!",
        "zh": "小阳闭上眼睛，把脸朝向天空。她金色的花瓣开始越来越亮地发光，神奇的金色火花围绕着她旋转。\n\n“我需要先收集足够的阳光能量，”小阳解释道。整个花园似乎都亮了起来！",
        "keys": [
          {
            "w": "petal",
            "p": "/ˈpetl/",
            "zh": "花瓣"
          },
          {
            "w": "glow",
            "p": "/ɡloʊ/",
            "zh": "发光"
          },
          {
            "w": "sparkle",
            "p": "/ˈspɑːrkl/",
            "zh": "火花；闪耀"
          },
          {
            "w": "swirl",
            "p": "/swɜːrl/",
            "zh": "旋转"
          },
          {
            "w": "energy",
            "p": "/ˈenərdʒi/",
            "zh": "能量"
          }
        ],
        "phrases": [
          {
            "en": "lifted her face to the sky",
            "zh": "把脸朝向天空"
          },
          {
            "en": "began to glow brighter and brighter",
            "zh": "开始越来越亮地发光"
          },
          {
            "en": "collect enough sunlight energy",
            "zh": "收集足够的阳光能量"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-12.jpg",
        "en": "One by one, beautiful golden orbs of sunlight floated from Sunny's petals. They sparkled like tiny suns, filling the air with warmth.\n\n\"Wow!\" Pip gasped. \"That's the most beautiful thing I've ever seen!\"",
        "zh": "一颗又一颗美丽的金色阳光球从小阳的花瓣中飘出。它们像小太阳一样闪耀，让空气中充满了温暖。\n\n“哇！”皮皮惊叹道，“这是我见过的最美丽的东西！”",
        "keys": [
          {
            "w": "orb",
            "p": "/ɔːrb/",
            "zh": "球体；光球"
          },
          {
            "w": "float",
            "p": "/floʊt/",
            "zh": "漂浮"
          },
          {
            "w": "sparkle",
            "p": "/ˈspɑːrkl/",
            "zh": "闪耀"
          },
          {
            "w": "tiny",
            "p": "/ˈtaɪni/",
            "zh": "微小的"
          },
          {
            "w": "warmth",
            "p": "/wɔːrmθ/",
            "zh": "温暖"
          }
        ],
        "phrases": [
          {
            "en": "golden orbs of sunlight",
            "zh": "金色的阳光球"
          },
          {
            "en": "sparkled like tiny suns",
            "zh": "像小太阳一样闪耀"
          },
          {
            "en": "filling the air with warmth",
            "zh": "让空气中充满温暖"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-13.jpg",
        "en": "But the zombie was getting closer! It was now at the edge of the garden. Sunny glowed even brighter, producing more and more sunlight.\n\n\"Hurry, Sunny!\" Pip urged. \"The zombie is almost here!\"",
        "zh": "但僵尸越来越近了！它现在已经到了花园的边缘。小阳发出更亮的光，产生越来越多的阳光。\n\n“快点，小阳！”皮皮催促道，“僵尸马上就到了！”",
        "keys": [
          {
            "w": "zombie",
            "p": "/ˈzɑːmbi/",
            "zh": "僵尸"
          },
          {
            "w": "edge",
            "p": "/edʒ/",
            "zh": "边缘"
          },
          {
            "w": "produce",
            "p": "/prəˈduːs/",
            "zh": "产生"
          },
          {
            "w": "brighter",
            "p": "/ˈbraɪtər/",
            "zh": "更明亮的"
          },
          {
            "w": "urge",
            "p": "/ɜːrdʒ/",
            "zh": "催促"
          }
        ],
        "phrases": [
          {
            "en": "getting closer",
            "zh": "越来越近"
          },
          {
            "en": "at the edge of the garden",
            "zh": "在花园的边缘"
          },
          {
            "en": "The zombie is almost here",
            "zh": "僵尸马上就到了"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-14.jpg",
        "en": "Finally, a big pile of golden sunlight orbs gathered on the ground. Pip and Sunny cheered! They had enough energy now.\n\n\"We did it!\" Sunny smiled. \"Now, let me call our special friend...\"",
        "zh": "终于，一大堆金色阳光球聚集在地面上。皮皮和小阳欢呼起来！他们现在有足够的能量了。\n\n“我们做到了！”小阳微笑着说，“现在，让我叫我们特别的朋友...”",
        "keys": [
          {
            "w": "finally",
            "p": "/ˈfaɪnəli/",
            "zh": "终于"
          },
          {
            "w": "pile",
            "p": "/paɪl/",
            "zh": "一堆"
          },
          {
            "w": "gather",
            "p": "/ˈɡæðər/",
            "zh": "聚集"
          },
          {
            "w": "cheer",
            "p": "/tʃɪr/",
            "zh": "欢呼"
          },
          {
            "w": "special",
            "p": "/ˈspeʃl/",
            "zh": "特别的"
          }
        ],
        "phrases": [
          {
            "en": "a big pile of golden sunlight orbs",
            "zh": "一大堆金色阳光球"
          },
          {
            "en": "had enough energy",
            "zh": "有足够的能量"
          },
          {
            "en": "our special friend",
            "zh": "我们特别的朋友"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-15.jpg",
        "en": "Sunny gathered all the golden light together. She whispered magical words that made the ground rumble. The earth began to shake and crack.\n\n\"Who's coming?\" Pip asked nervously, clutching Sunny's stem.",
        "zh": "小阳把所有金色的光聚在一起，她低声念着魔法咒语，让地面发出隆隆声。大地开始震动和裂开。\n\n“谁要来了？”皮皮紧张地问，紧紧抓住小阳的茎。",
        "keys": [
          {
            "w": "whisper",
            "p": "/ˈwɪspər/",
            "zh": "低声说"
          },
          {
            "w": "rumble",
            "p": "/ˈrʌmbl/",
            "zh": "隆隆作响"
          },
          {
            "w": "earth",
            "p": "/ɜːrθ/",
            "zh": "大地"
          },
          {
            "w": "shake",
            "p": "/ʃeɪk/",
            "zh": "震动"
          },
          {
            "w": "crack",
            "p": "/kræk/",
            "zh": "裂开"
          }
        ],
        "phrases": [
          {
            "en": "gathered all the golden light together",
            "zh": "把所有金色的光聚在一起"
          },
          {
            "en": "whispered magical words",
            "zh": "低声念着魔法咒语"
          },
          {
            "en": "the ground rumble",
            "zh": "地面发出隆隆声"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-16.jpg",
        "en": "CRACK! BOOM! A GIANT red Jalapeno burst from the soil! He was enormous, fierce, and ON FIRE! Flames shot from his body like a volcano.\n\n\"WHO DARED TO WAKE ME UP?!\" Jalapeno roared. Pip stared in amazement.",
        "zh": "裂开！轰！一个巨大的红色火爆辣椒从土壤中冲了出来！他巨大、凶猛，而且全身着火！火焰像火山一样从他的身体喷射出来。\n\n“谁敢把我叫醒？！”火爆辣椒咆哮道。皮皮惊呆了。",
        "keys": [
          {
            "w": "giant",
            "p": "/ˈdʒaɪənt/",
            "zh": "巨大的"
          },
          {
            "w": "burst",
            "p": "/bɜːrst/",
            "zh": "冲出；爆发"
          },
          {
            "w": "soil",
            "p": "/sɔɪl/",
            "zh": "土壤"
          },
          {
            "w": "fierce",
            "p": "/fɪrs/",
            "zh": "凶猛的"
          },
          {
            "w": "flame",
            "p": "/fleɪm/",
            "zh": "火焰"
          }
        ],
        "phrases": [
          {
            "en": "burst from the soil",
            "zh": "从土壤中冲了出来"
          },
          {
            "en": "on fire",
            "zh": "全身着火"
          },
          {
            "en": "Flames shot from his body",
            "zh": "火焰从他的身体喷射出来"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-17.jpg",
        "en": "Jalapeno saw the zombie and his eyes blazed with anger. Red and orange flames erupted everywhere! The entire garden lit up in fiery colors.\n\n\"THAT zombie dared to threaten my garden? NOT ON MY WATCH!\" Jalapeno fumed.",
        "zh": "火爆辣椒看到了僵尸，他的眼睛因愤怒而燃烧。红色和橙色的火焰到处喷发！整个花园被火热的颜色照亮了。\n\n“那个僵尸敢威胁我的花园？绝不允许！”火爆辣椒怒气冲冲地说。",
        "keys": [
          {
            "w": "blaze",
            "p": "/bleɪz/",
            "zh": "熊熊燃烧"
          },
          {
            "w": "anger",
            "p": "/ˈæŋɡər/",
            "zh": "愤怒"
          },
          {
            "w": "erupt",
            "p": "/ɪˈrʌpt/",
            "zh": "喷发"
          },
          {
            "w": "entire",
            "p": "/ɪnˈtaɪər/",
            "zh": "整个的"
          },
          {
            "w": "threaten",
            "p": "/ˈθretn/",
            "zh": "威胁"
          }
        ],
        "phrases": [
          {
            "en": "his eyes blazed with anger",
            "zh": "他的眼睛因愤怒而燃烧"
          },
          {
            "en": "erupted everywhere",
            "zh": "到处喷发"
          },
          {
            "en": "threaten my garden",
            "zh": "威胁我的花园"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-18.jpg",
        "en": "Jalapeno took a deep breath and WHOOSH — a massive wave of fire hit the Conehead Zombie! The traffic cone melted like butter. The zombie screamed and disappeared in a puff of smoke.\n\n\"AND STAY OUT!\" Jalapeno shouted triumphantly.",
        "zh": "火爆辣椒深吸一口气，呼——巨大的火焰波击中了路障僵尸！路障像黄油一样融化了。僵尸尖叫一声，在一缕烟雾中消失了。\n\n“滚远点！”火爆辣椒得意地喊道。",
        "keys": [
          {
            "w": "massive",
            "p": "/ˈmæsɪv/",
            "zh": "巨大的"
          },
          {
            "w": "wave",
            "p": "/weɪv/",
            "zh": "波浪；波"
          },
          {
            "w": "melt",
            "p": "/melt/",
            "zh": "融化"
          },
          {
            "w": "scream",
            "p": "/skriːm/",
            "zh": "尖叫"
          },
          {
            "w": "smoke",
            "p": "/smoʊk/",
            "zh": "烟雾"
          }
        ],
        "phrases": [
          {
            "en": "took a deep breath",
            "zh": "深吸一口气"
          },
          {
            "en": "a massive wave of fire",
            "zh": "巨大的火焰波"
          },
          {
            "en": "disappeared in a puff of smoke",
            "zh": "在一缕烟雾中消失了"
          }
        ]
      },
      {
        "img": "images/pea-shooter/page-19.jpg",
        "en": "Pip and Sunny cheered happily! Where the zombie had been, there was only a small puff of smoke. The garden was safe once more.\n\nJalapeno smiled, gave a thumbs up, and slowly sank back into the ground. \"Anytime, friends. Anytime.\"",
        "zh": "皮皮和小阳开心地欢呼！僵尸原来在的地方，只剩下一个小小的烟雾。花园再次安全了。\n\n火爆辣椒微笑着，竖起大拇指，慢慢沉回地面。“随时效劳，朋友们。”",
        "keys": [
          {
            "w": "cheer",
            "p": "/tʃɪr/",
            "zh": "欢呼"
          },
          {
            "w": "safe",
            "p": "/seɪf/",
            "zh": "安全的"
          },
          {
            "w": "thumbs up",
            "p": "/ˌθʌmz ˈʌp/",
            "zh": "竖起大拇指"
          },
          {
            "w": "slowly",
            "p": "/ˈsloʊli/",
            "zh": "慢慢地"
          },
          {
            "w": "sank",
            "p": "/sæŋk/",
            "zh": "下沉"
          }
        ],
        "phrases": [
          {
            "en": "cheered happily",
            "zh": "开心地欢呼"
          },
          {
            "en": "safe once more",
            "zh": "再次安全了"
          },
          {
            "en": "sank back into the ground",
            "zh": "慢慢沉回地面"
          }
        ]
      }
    ]
  },
  {
    "id": "minecraft",
    "title": "Steve vs The Wither",
    "titleZh": "史蒂夫大战凋零",
    "category": "我的世界",
    "cover": "images/covers/cover-minecraft.jpg",
    "pages": [
      {
        "img": "images/minecraft/page-1.jpg",
        "en": "🛩️ Steve vs The Wither — Sky Knight",
        "zh": "史蒂夫大战凋零 — 天空骑士",
        "keys": [
          {
            "w": "sky",
            "p": "/skaɪ/",
            "zh": "天空"
          },
          {
            "w": "knight",
            "p": "/naɪt/",
            "zh": "骑士"
          },
          {
            "w": "Steve",
            "p": "/stiːv/",
            "zh": "史蒂夫"
          },
          {
            "w": "Wither",
            "p": "/ˈwɪðər/",
            "zh": "凋零"
          }
        ],
        "phrases": [
          {
            "en": "Steve vs The Wither",
            "zh": "史蒂夫大战凋零"
          },
          {
            "en": "Sky Knight",
            "zh": "天空骑士"
          }
        ]
      },
      {
        "img": "images/minecraft/page-2.jpg",
        "en": "Steve lived in a quiet village. He was a builder, a miner, and a dreamer.",
        "zh": "史蒂夫住在一个安静的村庄里。他是一个建造者，一个矿工，也是一个梦想家。",
        "keys": [
          {
            "w": "determined",
            "p": "/dɪˈtɜːrmɪnd/",
            "zh": "坚定的"
          },
          {
            "w": "builder",
            "p": "/ˈbɪldər/",
            "zh": "建造者"
          },
          {
            "w": "miner",
            "p": "/ˈmaɪnər/",
            "zh": "矿工"
          },
          {
            "w": "dreamer",
            "p": "/ˈdriːmər/",
            "zh": "梦想家"
          },
          {
            "w": "village",
            "p": "/ˈvɪlɪdʒ/",
            "zh": "村庄"
          }
        ],
        "phrases": [
          {
            "en": "quiet village",
            "zh": "安静的村庄"
          },
          {
            "en": "a builder, a miner, and a dreamer",
            "zh": "一个建造者、一个矿工和一个梦想家"
          },
          {
            "en": "determined",
            "zh": "坚定的"
          }
        ]
      },
      {
        "img": "images/minecraft/page-3.jpg",
        "en": "One day, the sky turned dark. A terrible roar shook the ground. The Wither was coming.",
        "zh": "有一天，天空变暗了。可怕的咆哮震动了大地。凋零来了。",
        "keys": [
          {
            "w": "ground",
            "p": "/ɡraʊnd/",
            "zh": "大地"
          },
          {
            "w": "sky",
            "p": "/skaɪ/",
            "zh": "天空"
          },
          {
            "w": "dark",
            "p": "/dɑːrk/",
            "zh": "黑暗的"
          },
          {
            "w": "roar",
            "p": "/rɔːr/",
            "zh": "咆哮"
          },
          {
            "w": "shake",
            "p": "/ʃeɪk/",
            "zh": "震动"
          }
        ],
        "phrases": [
          {
            "en": "the sky turned dark",
            "zh": "天空变暗了"
          },
          {
            "en": "shook the ground",
            "zh": "震动了大地"
          },
          {
            "en": "The Wither came",
            "zh": "凋零来了"
          }
        ]
      },
      {
        "img": "images/minecraft/page-4.jpg",
        "en": "Steve said he needed to fight from the sky. He began to build an airplane.",
        "zh": "\"我需要从天空战斗它，\"史蒂夫说。他开始建造一个从来没有人见过的东西——一架飞机。",
        "keys": [
          {
            "w": "airplane",
            "p": "/ˈerpleɪn/",
            "zh": "飞机"
          },
          {
            "w": "fight",
            "p": "/faɪt/",
            "zh": "战斗"
          },
          {
            "w": "sky",
            "p": "/skaɪ/",
            "zh": "天空"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          },
          {
            "w": "seen",
            "p": "/siːn/",
            "zh": "见过的"
          }
        ],
        "phrases": [
          {
            "en": "fight it from the sky",
            "zh": "从天空中与它战斗"
          },
          {
            "en": "began to build",
            "zh": "开始建造"
          },
          {
            "en": "an airplane",
            "zh": "一架飞机"
          }
        ]
      },
      {
        "img": "images/minecraft/page-5.jpg",
        "en": "Day and night, Steve worked on his airplane. He hammered iron and attached big propellers.",
        "zh": "日日夜夜，史蒂夫在他的飞机上工作。他锤打铁器，弯曲木材，安装巨大的螺旋桨。",
        "keys": [
          {
            "w": "attach",
            "p": "/əˈtætʃ/",
            "zh": "安装"
          },
          {
            "w": "hammer",
            "p": "/ˈhæmər/",
            "zh": "锤打"
          },
          {
            "w": "bend",
            "p": "/bend/",
            "zh": "弯曲"
          },
          {
            "w": "wood",
            "p": "/wʊd/",
            "zh": "木材"
          },
          {
            "w": "propeller",
            "p": "/prəˈpelər/",
            "zh": "螺旋桨"
          }
        ],
        "phrases": [
          {
            "en": "work on his plane",
            "zh": "制造他的飞机"
          },
          {
            "en": "hammer the metal",
            "zh": "敲打金属"
          },
          {
            "en": "attach the huge propeller",
            "zh": "安装巨大的螺旋桨"
          }
        ]
      },
      {
        "img": "images/minecraft/page-6.jpg",
        "en": "Finally it was done. A beautiful red biplane, shining in the sunlight. Steve called it Sky Knight.",
        "zh": "终于，它完成了。一架美丽的红色双翼飞机，在阳光下闪闪发光。史蒂夫叫它\"天空骑士\"。",
        "keys": [
          {
            "w": "knight",
            "p": "/naɪt/",
            "zh": "骑士"
          },
          {
            "w": "finally",
            "p": "/ˈfaɪnəli/",
            "zh": "终于"
          },
          {
            "w": "beautiful",
            "p": "/ˈbjuːtɪfəl/",
            "zh": "美丽的"
          },
          {
            "w": "red",
            "p": "/red/",
            "zh": "红色的"
          },
          {
            "w": "sunlight",
            "p": "/ˈsʌnlaɪt/",
            "zh": "阳光"
          }
        ],
        "phrases": [
          {
            "en": "a beautiful red biplane",
            "zh": "一架美丽的红色双翼飞机"
          },
          {
            "en": "shine in the sun",
            "zh": "在阳光下闪耀"
          },
          {
            "en": "Sky Knight",
            "zh": "天空骑士"
          }
        ]
      },
      {
        "img": "images/minecraft/page-7.jpg",
        "en": "The villagers gathered to watch. Steve put on his goggles and climbed into the cockpit.",
        "zh": "村民们聚在一起观看。史蒂夫戴上护目镜，爬进驾驶舱。",
        "keys": [
          {
            "w": "goggles",
            "p": "/ˈɡɑːɡlz/",
            "zh": "护目镜"
          },
          {
            "w": "villager",
            "p": "/ˈvɪlɪdʒər/",
            "zh": "村民"
          },
          {
            "w": "gather",
            "p": "/ˈɡæðər/",
            "zh": "聚集"
          },
          {
            "w": "watch",
            "p": "/wɑːtʃ/",
            "zh": "观看"
          },
          {
            "w": "cockpit",
            "p": "/ˈkɑːkpɪt/",
            "zh": "驾驶舱"
          }
        ],
        "phrases": [
          {
            "en": "gather together to watch",
            "zh": "聚在一起观看"
          },
          {
            "en": "put on his goggles",
            "zh": "戴上护目镜"
          },
          {
            "en": "climb into the cockpit",
            "zh": "爬进驾驶舱"
          }
        ]
      },
      {
        "img": "images/minecraft/page-8.jpg",
        "en": "The engine roared. The propeller spun faster and faster. Then Steve was flying!",
        "zh": "引擎轰鸣。螺旋桨越转越快。然后，史蒂夫飞起来了！",
        "keys": [
          {
            "w": "engine",
            "p": "/ˈendʒɪn/",
            "zh": "引擎"
          },
          {
            "w": "roar",
            "p": "/rɔːr/",
            "zh": "轰鸣"
          },
          {
            "w": "propeller",
            "p": "/prəˈpelər/",
            "zh": "螺旋桨"
          },
          {
            "w": "faster",
            "p": "/ˈfæstər/",
            "zh": "更快地"
          },
          {
            "w": "fly",
            "p": "/flaɪ/",
            "zh": "飞"
          }
        ],
        "phrases": [
          {
            "en": "the engine roared",
            "zh": "引擎轰鸣"
          },
          {
            "en": "spin faster and faster",
            "zh": "越转越快"
          },
          {
            "en": "fly up into the air",
            "zh": "飞上天空"
          }
        ]
      },
      {
        "img": "images/minecraft/page-9.jpg",
        "en": "Up in the sky, everything looked different. The world was big and beautiful.",
        "zh": "在天空中，一切看起来都不一样了。世界很大很美。史蒂夫感觉像鸟一样自由。",
        "keys": [
          {
            "w": "landscape",
            "p": "/ˈlændskeɪp/",
            "zh": "风景"
          },
          {
            "w": "sky",
            "p": "/skaɪ/",
            "zh": "天空"
          },
          {
            "w": "world",
            "p": "/wɜːrld/",
            "zh": "世界"
          },
          {
            "w": "beautiful",
            "p": "/ˈbjuːtɪfəl/",
            "zh": "美丽的"
          },
          {
            "w": "free",
            "p": "/friː/",
            "zh": "自由的"
          }
        ],
        "phrases": [
          {
            "en": "look different in the sky",
            "zh": "在天空中看起来不一样"
          },
          {
            "en": "big and beautiful world",
            "zh": "广阔而美丽的世界"
          },
          {
            "en": "feel free like a bird",
            "zh": "像鸟一样自由"
          }
        ]
      },
      {
        "img": "images/minecraft/page-10.jpg",
        "en": "But soon the sky grew dark again. Purple clouds swirled ahead. Steve gripped the controls tightly.",
        "zh": "但很快，天空又变暗了。紫色的云在前方旋转。史蒂夫紧紧握住操纵杆。",
        "keys": [
          {
            "w": "control",
            "p": "/kənˈtroʊl/",
            "zh": "控制"
          },
          {
            "w": "dark",
            "p": "/dɑːrk/",
            "zh": "黑暗的"
          },
          {
            "w": "purple",
            "p": "/ˈpɜːrpl/",
            "zh": "紫色的"
          },
          {
            "w": "cloud",
            "p": "/klaʊd/",
            "zh": "云"
          },
          {
            "w": "ahead",
            "p": "/əˈhed/",
            "zh": "前方"
          }
        ],
        "phrases": [
          {
            "en": "the sky grew dark",
            "zh": "天空变暗了"
          },
          {
            "en": "hold the controls tightly",
            "zh": "紧紧握住操纵杆"
          },
          {
            "en": "purple clouds swirled ahead",
            "zh": "前方紫色云团翻涌"
          }
        ]
      },
      {
        "img": "images/minecraft/page-11.jpg",
        "en": "Then he saw it - the Wither. A giant creature with three heads and glowing blue eyes.",
        "zh": "然后他看到了——凋零。一个巨大的生物，有三个头，发出蓝色光芒的眼睛，黑暗的力量在它周围旋转。",
        "keys": [
          {
            "w": "creature",
            "p": "/ˈkriːtʃər/",
            "zh": "生物"
          },
          {
            "w": "giant",
            "p": "/ˈdʒaɪənt/",
            "zh": "巨大的"
          },
          {
            "w": "head",
            "p": "/hed/",
            "zh": "头"
          },
          {
            "w": "glow",
            "p": "/ɡloʊ/",
            "zh": "发光"
          },
          {
            "w": "power",
            "p": "/ˈpaʊər/",
            "zh": "力量"
          }
        ],
        "phrases": [
          {
            "en": "a giant creature",
            "zh": "一个巨大的生物"
          },
          {
            "en": "three heads",
            "zh": "三个头"
          },
          {
            "en": "dark power swirled around it",
            "zh": "黑暗的力量在它周围旋转"
          }
        ]
      },
      {
        "img": "images/minecraft/page-12.jpg",
        "en": "The Wither shot explosive skulls at Steve! He swerved left, then right. BOOM! BOOM!",
        "zh": "凋零向史蒂夫射出爆炸骷髅头！他向左转，然后向右转。轰！轰！天空中满是爆炸。",
        "keys": [
          {
            "w": "dodge",
            "p": "/dɑːdʒ/",
            "zh": "闪避"
          },
          {
            "w": "explosion",
            "p": "/ɪkˈsploʊʒn/",
            "zh": "爆炸"
          },
          {
            "w": "skull",
            "p": "/skʌl/",
            "zh": "骷髅头"
          },
          {
            "w": "turn",
            "p": "/tɜːrn/",
            "zh": "转向"
          }
        ],
        "phrases": [
          {
            "en": "shoot explosive skulls",
            "zh": "发射爆炸骷髅头"
          },
          {
            "en": "turn left and right",
            "zh": "向左转再向右转"
          },
          {
            "en": "the sky was full of explosions",
            "zh": "天空中满是爆炸"
          }
        ]
      },
      {
        "img": "images/minecraft/page-13.jpg",
        "en": "One skull came straight at him! Steve flipped his plane upside down and zoomed past it.",
        "zh": "一个骷髅头直冲他而来！史蒂夫把飞机翻了过来，从它旁边飞过。好险！",
        "keys": [
          {
            "w": "straight",
            "p": "/streɪt/",
            "zh": "直直地"
          },
          {
            "w": "plane",
            "p": "/pleɪn/",
            "zh": "飞机"
          },
          {
            "w": "flip",
            "p": "/flɪp/",
            "zh": "翻转"
          },
          {
            "w": "past",
            "p": "/pæst/",
            "zh": "经过"
          }
        ],
        "phrases": [
          {
            "en": "come straight at him",
            "zh": "直冲他而来"
          },
          {
            "en": "flip the plane over",
            "zh": "把飞机翻过来"
          },
          {
            "en": "fly past it",
            "zh": "从它旁边飞过"
          }
        ]
      },
      {
        "img": "images/minecraft/page-14.jpg",
        "en": "I need to fight back! Steve grabbed his enchanted bow with special arrows of light.",
        "zh": "\"我需要反击！\"史蒂夫拿起他的附魔弓。他有特殊的箭——光之箭。",
        "keys": [
          {
            "w": "special",
            "p": "/ˈspeʃl/",
            "zh": "特殊的"
          },
          {
            "w": "attack",
            "p": "/əˈtæk/",
            "zh": "反击"
          },
          {
            "w": "enchanted",
            "p": "/ɪnˈtʃæntɪd/",
            "zh": "附魔的"
          },
          {
            "w": "bow",
            "p": "/boʊ/",
            "zh": "弓"
          },
          {
            "w": "arrow",
            "p": "/ˈæroʊ/",
            "zh": "箭"
          }
        ],
        "phrases": [
          {
            "en": "fight back",
            "zh": "反击"
          },
          {
            "en": "enchanted bow",
            "zh": "附魔弓"
          },
          {
            "en": "special arrows",
            "zh": "特殊的箭"
          }
        ]
      },
      {
        "img": "images/minecraft/page-15.jpg",
        "en": "Steve aimed carefully. He fired! Golden arrows streaked through the dark sky like shooting stars.",
        "zh": "史蒂夫仔细瞄准。他射箭了！金色的箭像流星一样划过黑暗的天空。",
        "keys": [
          {
            "w": "shooting star",
            "p": "/ˈʃuːtɪŋ stɑːr/",
            "zh": "流星"
          },
          {
            "w": "aim",
            "p": "/eɪm/",
            "zh": "瞄准"
          },
          {
            "w": "golden",
            "p": "/ˈɡoʊldən/",
            "zh": "金色的"
          },
          {
            "w": "dark",
            "p": "/dɑːrk/",
            "zh": "黑暗的"
          },
          {
            "w": "sky",
            "p": "/skaɪ/",
            "zh": "天空"
          }
        ],
        "phrases": [
          {
            "en": "shooting star",
            "zh": "流星"
          },
          {
            "en": "aim carefully",
            "zh": "仔细瞄准"
          },
          {
            "en": "across the dark sky",
            "zh": "划过黑暗的天空"
          }
        ]
      },
      {
        "img": "images/minecraft/page-16.jpg",
        "en": "HIT! The arrow struck the Wither head. It screamed in pain! Blue sparks flew everywhere.",
        "zh": "命中！箭射中了凋零的第一个头。它痛苦地尖叫！蓝色火花四处飞溅。",
        "keys": [
          {
            "w": "scream",
            "p": "/skriːm/",
            "zh": "尖叫"
          },
          {
            "w": "hit",
            "p": "/hɪt/",
            "zh": "击中"
          },
          {
            "w": "pain",
            "p": "/peɪn/",
            "zh": "疼痛"
          },
          {
            "w": "spark",
            "p": "/spɑːrk/",
            "zh": "火花"
          }
        ],
        "phrases": [
          {
            "en": "painful scream",
            "zh": "痛苦地尖叫"
          },
          {
            "en": "hit the first head",
            "zh": "击中了第一个头"
          },
          {
            "en": "blue sparks fly everywhere",
            "zh": "蓝色火花四处飞溅"
          }
        ]
      },
      {
        "img": "images/minecraft/page-17.jpg",
        "en": "The Wither was furious! It grew bigger and shot skulls in every direction.",
        "zh": "凋零暴怒了！它变得更大，向四面八方射出骷髅头。天空变成了战场。",
        "keys": [
          {
            "w": "direction",
            "p": "/dəˈrekʃn/",
            "zh": "方向"
          },
          {
            "w": "furious",
            "p": "/ˈfjʊriəs/",
            "zh": "狂怒的"
          },
          {
            "w": "battlefield",
            "p": "/ˈbætlfiːld/",
            "zh": "战场"
          },
          {
            "w": "bigger",
            "p": "/ˈbɪɡər/",
            "zh": "更大的"
          }
        ],
        "phrases": [
          {
            "en": "in all directions",
            "zh": "向四面八方"
          },
          {
            "en": "became bigger",
            "zh": "变得更大"
          },
          {
            "en": "the sky became a battlefield",
            "zh": "天空变成了战场"
          }
        ]
      },
      {
        "img": "images/minecraft/page-18.jpg",
        "en": "CRASH! A skull hit Steve wing. Smoke poured out. But Steve did not give up.",
        "zh": "砰！一个骷髅头击中了史蒂夫的机翼。烟冒了出来。飞机摇晃着。但史蒂夫没有放弃。",
        "keys": [
          {
            "w": "give up",
            "p": "/ɡɪv ʌp/",
            "zh": "放弃"
          },
          {
            "w": "wing",
            "p": "/wɪŋ/",
            "zh": "机翼"
          },
          {
            "w": "smoke",
            "p": "/smoʊk/",
            "zh": "烟"
          },
          {
            "w": "shake",
            "p": "/ʃeɪk/",
            "zh": "摇晃"
          },
          {
            "w": "hit",
            "p": "/hɪt/",
            "zh": "击中"
          }
        ],
        "phrases": [
          {
            "en": "give up",
            "zh": "放弃"
          },
          {
            "en": "hit Steve's wing",
            "zh": "击中了史蒂夫的机翼"
          },
          {
            "en": "the plane shook",
            "zh": "飞机摇晃着"
          }
        ]
      },
      {
        "img": "images/minecraft/page-19.jpg",
        "en": "Steve stood up in his cockpit. He had one arrow left - his strongest one.",
        "zh": "史蒂夫在驾驶舱里站起来。他只剩一支箭了——他最强的一支。\"这是为了我的村庄！\"",
        "keys": [
          {
            "w": "village",
            "p": "/ˈvɪlɪdʒ/",
            "zh": "村庄"
          },
          {
            "w": "cockpit",
            "p": "/ˈkɑːkpɪt/",
            "zh": "驾驶舱"
          },
          {
            "w": "strongest",
            "p": "/ˈstrɔːŋɡɪst/",
            "zh": "最强的"
          },
          {
            "w": "last",
            "p": "/læst/",
            "zh": "最后的"
          }
        ],
        "phrases": [
          {
            "en": "my village",
            "zh": "我的村庄"
          },
          {
            "en": "only one arrow left",
            "zh": "只剩一支箭了"
          },
          {
            "en": "stand up in the cockpit",
            "zh": "在驾驶舱里站起来"
          }
        ]
      },
      {
        "img": "images/minecraft/page-20.jpg",
        "en": "He fired! The golden arrow split into three beams and hit all three heads at once!",
        "zh": "他射箭了！金色的箭笔直飞去。它分裂成三束光，同时击中了三个头！",
        "keys": [
          {
            "w": "epic",
            "p": "/ˈepɪk/",
            "zh": "史诗般的"
          },
          {
            "w": "split",
            "p": "/splɪt/",
            "zh": "分裂"
          },
          {
            "w": "beam",
            "p": "/biːm/",
            "zh": "光束"
          },
          {
            "w": "directly",
            "p": "/dəˈrektli/",
            "zh": "笔直地"
          },
          {
            "w": "simultaneously",
            "p": "/ˌsaɪmlˈteɪniəsli/",
            "zh": "同时地"
          }
        ],
        "phrases": [
          {
            "en": "split into three beams of light",
            "zh": "分裂成三束光"
          },
          {
            "en": "hit the three heads at the same time",
            "zh": "同时击中了三个头"
          },
          {
            "en": "straight ahead",
            "zh": "笔直飞去"
          }
        ]
      }
    ]
  },
  {
    "id": "block-battle",
    "title": "Block Battle",
    "titleZh": "方块大战",
    "category": "我的世界",
    "cover": "images/covers/cover-block-battle.jpg",
    "pages": [
      {
        "img": "images/block-battle/page-1.jpg",
        "en": "This is a story about Block Battle. Two friends had an exciting match using all kinds of block weapons!",
        "zh": "这是一个关于方块对战的故事。两个小伙伴用各种方块武器展开了一场精彩的比赛！",
        "keys": [
          {
            "w": "story",
            "p": "/ˈstɔːri/",
            "zh": "故事"
          },
          {
            "w": "friend",
            "p": "/frend/",
            "zh": "朋友"
          },
          {
            "w": "exciting",
            "p": "/ɪkˈsaɪtɪŋ/",
            "zh": "精彩的"
          },
          {
            "w": "match",
            "p": "/mætʃ/",
            "zh": "比赛"
          },
          {
            "w": "weapon",
            "p": "/ˈwepən/",
            "zh": "武器"
          }
        ],
        "phrases": [
          {
            "en": "a story about Block Battle",
            "zh": "一个关于方块对战的故事"
          },
          {
            "en": "two friends",
            "zh": "两个小伙伴"
          },
          {
            "en": "all kinds of block weapons",
            "zh": "各种方块武器"
          }
        ]
      },
      {
        "img": "images/block-battle/page-2.jpg",
        "en": "Let us play Block Battle!",
        "zh": "",
        "keys": [
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "大战"
          },
          {
            "w": "block",
            "p": "/blɑːk/",
            "zh": "方块"
          },
          {
            "w": "arena",
            "p": "/əˈriːnə/",
            "zh": "竞技场"
          }
        ],
        "phrases": [
          {
            "en": "Let's play Block Battle",
            "zh": "来玩方块大战吧"
          },
          {
            "en": "Block Battle",
            "zh": "方块大战"
          },
          {
            "en": "battle arena",
            "zh": "竞技场"
          }
        ]
      },
      {
        "img": "images/block-battle/page-3.jpg",
        "en": "I will pick a cube with the stealth skill!",
        "zh": "",
        "keys": [
          {
            "w": "stealth",
            "p": "/stelθ/",
            "zh": "隐身"
          },
          {
            "w": "skill",
            "p": "/skɪl/",
            "zh": "技能"
          },
          {
            "w": "choose",
            "p": "/tʃuːz/",
            "zh": "选择"
          },
          {
            "w": "cube",
            "p": "/kjuːb/",
            "zh": "立方体；方块"
          }
        ],
        "phrases": [
          {
            "en": "pick a cube",
            "zh": "选一个方块"
          },
          {
            "en": "stealth skill",
            "zh": "隐身技能"
          },
          {
            "en": "I'll pick a cube with stealth skill",
            "zh": "我选个带隐身技能的方块"
          }
        ]
      },
      {
        "img": "images/block-battle/page-4.jpg",
        "en": "I will build a three-layer obsidian shield!",
        "zh": "",
        "keys": [
          {
            "w": "obsidian",
            "p": "/əbˈsɪdiən/",
            "zh": "黑曜石"
          },
          {
            "w": "shield",
            "p": "/ʃiːld/",
            "zh": "盾牌"
          },
          {
            "w": "layer",
            "p": "/ˈleɪər/",
            "zh": "层"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          }
        ],
        "phrases": [
          {
            "en": "three-layer obsidian shield",
            "zh": "三层黑曜石盾牌"
          },
          {
            "en": "build a shield",
            "zh": "造个盾牌"
          },
          {
            "en": "obsidian shield",
            "zh": "黑曜石盾牌"
          }
        ]
      },
      {
        "img": "images/block-battle/page-5.jpg",
        "en": "Obsidian is super hard. Normal attacks cannot break it!",
        "zh": "",
        "keys": [
          {
            "w": "super",
            "p": "/ˈsuːpər/",
            "zh": "超级"
          },
          {
            "w": "attack",
            "p": "/əˈtæk/",
            "zh": "攻击"
          },
          {
            "w": "break",
            "p": "/breɪk/",
            "zh": "打破"
          },
          {
            "w": "hard",
            "p": "/hɑːrd/",
            "zh": "坚硬的"
          }
        ],
        "phrases": [
          {
            "en": "super hard",
            "zh": "超硬"
          },
          {
            "en": "normal attacks",
            "zh": "一般攻击"
          },
          {
            "en": "can't break it",
            "zh": "打不破"
          }
        ]
      },
      {
        "img": "images/block-battle/page-6.jpg",
        "en": "Watch this! I ride a sword with evil attack!",
        "zh": "",
        "keys": [
          {
            "w": "sword",
            "p": "/sɔːrd/",
            "zh": "剑"
          },
          {
            "w": "evil",
            "p": "/ˈiːvəl/",
            "zh": "邪恶"
          },
          {
            "w": "ride",
            "p": "/raɪd/",
            "zh": "骑"
          },
          {
            "w": "watch",
            "p": "/wɑːtʃ/",
            "zh": "看"
          }
        ],
        "phrases": [
          {
            "en": "Watch this",
            "zh": "看我的"
          },
          {
            "en": "ride a sword",
            "zh": "骑一把剑"
          },
          {
            "en": "evil attack",
            "zh": "邪恶攻击"
          }
        ]
      },
      {
        "img": "images/block-battle/page-7.jpg",
        "en": "The obsidian shield got crushed flat!",
        "zh": "",
        "keys": [
          {
            "w": "crush",
            "p": "/krʌʃ/",
            "zh": "压碎"
          },
          {
            "w": "flat",
            "p": "/flæt/",
            "zh": "扁的"
          },
          {
            "w": "smash",
            "p": "/smæʃ/",
            "zh": "砸碎"
          },
          {
            "w": "hit",
            "p": "/hɪt/",
            "zh": "击打"
          }
        ],
        "phrases": [
          {
            "en": "obsidian shield",
            "zh": "黑曜石盾牌"
          },
          {
            "en": "crushed flat",
            "zh": "打扁了"
          },
          {
            "en": "got crushed flat",
            "zh": "被打扁了"
          }
        ]
      },
      {
        "img": "images/block-battle/page-8.jpg",
        "en": "I will build a laser-shooting turret!",
        "zh": "",
        "keys": [
          {
            "w": "laser",
            "p": "/ˈleɪzər/",
            "zh": "激光"
          },
          {
            "w": "turret",
            "p": "/ˈtɜːrət/",
            "zh": "炮塔"
          },
          {
            "w": "shoot",
            "p": "/ʃuːt/",
            "zh": "发射"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          }
        ],
        "phrases": [
          {
            "en": "laser-shooting turret",
            "zh": "会发射激光的炮塔"
          },
          {
            "en": "build a turret",
            "zh": "造一个炮塔"
          },
          {
            "en": "shoot laser",
            "zh": "发射激光"
          }
        ]
      },
      {
        "img": "images/block-battle/page-9.jpg",
        "en": "Look at my super giant hammer!",
        "zh": "",
        "keys": [
          {
            "w": "hammer",
            "p": "/ˈhæmər/",
            "zh": "锤子"
          },
          {
            "w": "giant",
            "p": "/ˈdʒaɪənt/",
            "zh": "巨大的"
          },
          {
            "w": "swing",
            "p": "/swɪŋ/",
            "zh": "挥舞"
          },
          {
            "w": "super",
            "p": "/ˈsuːpər/",
            "zh": "超级"
          }
        ],
        "phrases": [
          {
            "en": "super giant hammer",
            "zh": "超级大锤"
          },
          {
            "en": "giant hammer",
            "zh": "巨大的锤子"
          },
          {
            "en": "Look at my hammer",
            "zh": "看我的锤子"
          }
        ]
      },
      {
        "img": "images/block-battle/page-10.jpg",
        "en": "The turret got smashed into pieces!",
        "zh": "",
        "keys": [
          {
            "w": "pieces",
            "p": "/ˈpiːsɪz/",
            "zh": "碎片"
          },
          {
            "w": "destroy",
            "p": "/dɪˈstrɔɪ/",
            "zh": "摧毁"
          },
          {
            "w": "explode",
            "p": "/ɪkˈsploʊd/",
            "zh": "爆炸"
          },
          {
            "w": "smash",
            "p": "/smæʃ/",
            "zh": "猛砸"
          }
        ],
        "phrases": [
          {
            "en": "smashed into pieces",
            "zh": "被砸成碎片"
          },
          {
            "en": "into pieces",
            "zh": "成碎片"
          },
          {
            "en": "The turret got smashed",
            "zh": "炮塔被砸了"
          }
        ]
      },
      {
        "img": "images/block-battle/page-11.jpg",
        "en": "I will build a flying mechanical fortress!",
        "zh": "",
        "keys": [
          {
            "w": "fortress",
            "p": "/ˈfɔːrtrəs/",
            "zh": "堡垒"
          },
          {
            "w": "mechanical",
            "p": "/məˈkænɪkəl/",
            "zh": "机械的"
          },
          {
            "w": "flying",
            "p": "/ˈflaɪɪŋ/",
            "zh": "飞行的"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          }
        ],
        "phrases": [
          {
            "en": "flying mechanical fortress",
            "zh": "会飞的机械堡垒"
          },
          {
            "en": "build a fortress",
            "zh": "造一个堡垒"
          },
          {
            "en": "flying fortress",
            "zh": "飞行堡垒"
          }
        ]
      },
      {
        "img": "images/block-battle/page-12.jpg",
        "en": "This hammer weighs 1,500 blocks!",
        "zh": "",
        "keys": [
          {
            "w": "hammer",
            "p": "/ˈhæmər/",
            "zh": "锤子"
          },
          {
            "w": "weigh",
            "p": "/weɪ/",
            "zh": "重；称重"
          },
          {
            "w": "heavy",
            "p": "/ˈhevi/",
            "zh": "重的"
          },
          {
            "w": "weapon",
            "p": "/ˈwepən/",
            "zh": "武器"
          }
        ],
        "phrases": [
          {
            "en": "weighs 1,500 blocks",
            "zh": "重达1500个方块"
          },
          {
            "en": "This hammer weighs",
            "zh": "这把锤子重量有"
          },
          {
            "en": "super weapon",
            "zh": "超级武器"
          }
        ]
      },
      {
        "img": "images/block-battle/page-13.jpg",
        "en": "The fortress got smashed and cannot move!",
        "zh": "",
        "keys": [
          {
            "w": "fortress",
            "p": "/ˈfɔːrtrəs/",
            "zh": "堡垒"
          },
          {
            "w": "smashed",
            "p": "/smæʃt/",
            "zh": "被砸碎的"
          },
          {
            "w": "stuck",
            "p": "/stʌk/",
            "zh": "卡住的"
          },
          {
            "w": "collapse",
            "p": "/kəˈlæps/",
            "zh": "倒塌"
          }
        ],
        "phrases": [
          {
            "en": "got smashed",
            "zh": "被砸了"
          },
          {
            "en": "can't move",
            "zh": "动弹不得"
          },
          {
            "en": "smashed and can't move",
            "zh": "被砸得动不了"
          }
        ]
      },
      {
        "img": "images/block-battle/page-14.jpg",
        "en": "Look at my mechanical hand!",
        "zh": "",
        "keys": [
          {
            "w": "mechanical",
            "p": "/məˈkænɪkəl/",
            "zh": "机械的"
          },
          {
            "w": "hand",
            "p": "/hænd/",
            "zh": "手"
          },
          {
            "w": "grab",
            "p": "/ɡræb/",
            "zh": "抓住"
          },
          {
            "w": "extend",
            "p": "/ɪkˈstend/",
            "zh": "伸出"
          }
        ],
        "phrases": [
          {
            "en": "mechanical hand",
            "zh": "机械手"
          },
          {
            "en": "Look at my mechanical hand",
            "zh": "看我的机械手"
          },
          {
            "en": "reach out",
            "zh": "伸出来"
          }
        ]
      },
      {
        "img": "images/block-battle/page-15.jpg",
        "en": "The mechanical hand weighs 700!",
        "zh": "",
        "keys": [
          {
            "w": "mechanical",
            "p": "/məˈkænɪkəl/",
            "zh": "机械的"
          },
          {
            "w": "weight",
            "p": "/weɪt/",
            "zh": "重量"
          },
          {
            "w": "powerful",
            "p": "/ˈpaʊərfəl/",
            "zh": "强大的"
          },
          {
            "w": "grip",
            "p": "/ɡrɪp/",
            "zh": "抓力"
          }
        ],
        "phrases": [
          {
            "en": "mechanical hand",
            "zh": "机械手"
          },
          {
            "en": "weighs 700",
            "zh": "重700"
          },
          {
            "en": "powerful grip",
            "zh": "强大的抓力"
          }
        ]
      },
      {
        "img": "images/block-battle/page-16.jpg",
        "en": "I will use the hammer to launch you into the sky!",
        "zh": "",
        "keys": [
          {
            "w": "hammer",
            "p": "/ˈhæmər/",
            "zh": "锤子"
          },
          {
            "w": "launch",
            "p": "/lɔːntʃ/",
            "zh": "发射"
          },
          {
            "w": "clever",
            "p": "/ˈklevər/",
            "zh": "聪明的"
          },
          {
            "w": "plan",
            "p": "/plæn/",
            "zh": "计划"
          }
        ],
        "phrases": [
          {
            "en": "launch you into the sky",
            "zh": "把你发射到天上"
          },
          {
            "en": "use the hammer",
            "zh": "用锤子"
          },
          {
            "en": "clever plan",
            "zh": "聪明的计划"
          }
        ]
      },
      {
        "img": "images/block-battle/page-17.jpg",
        "en": "BANG! The hammer strikes the ground!",
        "zh": "",
        "keys": [
          {
            "w": "bang",
            "p": "/bæŋ/",
            "zh": "砰"
          },
          {
            "w": "strike",
            "p": "/straɪk/",
            "zh": "击打"
          },
          {
            "w": "ground",
            "p": "/ɡraʊnd/",
            "zh": "地面"
          },
          {
            "w": "shockwave",
            "p": "/ˈʃɑːkweɪv/",
            "zh": "冲击波"
          }
        ],
        "phrases": [
          {
            "en": "strike the ground",
            "zh": "猛击地面"
          },
          {
            "en": "the hammer strikes",
            "zh": "锤子猛击"
          },
          {
            "en": "sound wave",
            "zh": "声波"
          }
        ]
      },
      {
        "img": "images/block-battle/page-18.jpg",
        "en": "Flying into the sky like a cannonball!",
        "zh": "",
        "keys": [
          {
            "w": "cannonball",
            "p": "/ˈkænənbɔːl/",
            "zh": "炮弹"
          },
          {
            "w": "soar",
            "p": "/sɔːr/",
            "zh": "翱翔"
          },
          {
            "w": "fly",
            "p": "/flaɪ/",
            "zh": "飞"
          },
          {
            "w": "sky",
            "p": "/skaɪ/",
            "zh": "天空"
          }
        ],
        "phrases": [
          {
            "en": "flying into the sky",
            "zh": "飞向天空"
          },
          {
            "en": "like a cannonball",
            "zh": "像炮弹一样"
          },
          {
            "en": "soar into the sky",
            "zh": "翱翔天空"
          }
        ]
      },
      {
        "img": "images/block-battle/page-19.jpg",
        "en": "Let the mechanical hand place blocks for me!",
        "zh": "",
        "keys": [
          {
            "w": "mechanical",
            "p": "/məˈkænɪkəl/",
            "zh": "机械的"
          },
          {
            "w": "place",
            "p": "/pleɪs/",
            "zh": "放置"
          },
          {
            "w": "block",
            "p": "/blɑːk/",
            "zh": "方块"
          },
          {
            "w": "lazy",
            "p": "/ˈleɪzi/",
            "zh": "懒的"
          }
        ],
        "phrases": [
          {
            "en": "mechanical hand",
            "zh": "机械手"
          },
          {
            "en": "place blocks",
            "zh": "放方块"
          },
          {
            "en": "place blocks for me",
            "zh": "帮我放方块"
          }
        ]
      },
      {
        "img": "images/block-battle/page-20.jpg",
        "en": "I will just lie here and sleep peacefully!",
        "zh": "",
        "keys": [
          {
            "w": "lie",
            "p": "/laɪ/",
            "zh": "躺"
          },
          {
            "w": "sleep",
            "p": "/sliːp/",
            "zh": "睡觉"
          },
          {
            "w": "peaceful",
            "p": "/ˈpiːsfl/",
            "zh": "平静的"
          },
          {
            "w": "rest",
            "p": "/rest/",
            "zh": "休息"
          }
        ],
        "phrases": [
          {
            "en": "lie here",
            "zh": "躺在这里"
          },
          {
            "en": "sleep peacefully",
            "zh": "安稳睡觉"
          },
          {
            "en": "lie down and rest",
            "zh": "躺下休息"
          }
        ]
      },
      {
        "img": "images/block-battle/page-21.jpg",
        "en": "The adventure never ends! Let us play again!",
        "zh": "冒险永不止步！我们再来一场吧！",
        "keys": [
          {
            "w": "adventure",
            "p": "/ədˈventʃər/",
            "zh": "冒险"
          },
          {
            "w": "never",
            "p": "/ˈnevər/",
            "zh": "从不；永不"
          },
          {
            "w": "ends",
            "p": "/endz/",
            "zh": "结束"
          },
          {
            "w": "again",
            "p": "/əˈɡen/",
            "zh": "再一次"
          }
        ],
        "phrases": [
          {
            "en": "the adventure never ends",
            "zh": "冒险永不止步"
          },
          {
            "en": "play again",
            "zh": "再玩一次"
          }
        ]
      },
      {
        "img": "images/block-battle/page-22.jpg",
        "en": "battle - start a new battle in the colorful arena!",
        "zh": "两个小方块勇士在彩色的竞技场面对面，准备玩一个超酷的游戏——方块大战！他们每个人都要建造自己强大的武器。",
        "keys": [
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "大战"
          },
          {
            "w": "arena",
            "p": "/əˈriːnə/",
            "zh": "竞技场"
          },
          {
            "w": "ready",
            "p": "/ˈredi/",
            "zh": "准备好的"
          }
        ],
        "phrases": [
          {
            "en": "start a battle",
            "zh": "开始一场大战"
          },
          {
            "en": "colorful arena",
            "zh": "彩色竞技场"
          },
          {
            "en": "get ready",
            "zh": "准备好"
          }
        ]
      },
      {
        "img": "images/block-battle/page-23.jpg",
        "en": "stealth - disappear into thin air with stealth skill!",
        "zh": "勇士选了一个带隐身技能的方块！它身上发出神秘的蓝色光芒，慢慢消失在空气中。",
        "keys": [
          {
            "w": "stealth",
            "p": "/stelθ/",
            "zh": "隐身"
          },
          {
            "w": "disappear",
            "p": "/ˌdɪsəˈpɪr/",
            "zh": "消失"
          }
        ],
        "phrases": [
          {
            "en": "stealth skill",
            "zh": "隐身技能"
          },
          {
            "en": "disappear into thin air",
            "zh": "消失在空气中"
          },
          {
            "en": "mysterious blue light",
            "zh": "神秘的蓝色光芒"
          }
        ]
      },
      {
        "img": "images/block-battle/page-24.jpg",
        "en": "obsidian - build a strong shield with obsidian layers!",
        "zh": "一个巨大的三层黑曜石盾牌从地面升起，散发着火山能量。一般攻击根本打不破！",
        "keys": [
          {
            "w": "obsidian",
            "p": "/əbˈsɪdiən/",
            "zh": "黑曜石"
          },
          {
            "w": "shield",
            "p": "/ʃiːld/",
            "zh": "盾牌"
          },
          {
            "w": "layer",
            "p": "/ˈleɪər/",
            "zh": "层"
          }
        ],
        "phrases": [
          {
            "en": "build a shield",
            "zh": "造一个盾牌"
          },
          {
            "en": "three-layer obsidian shield",
            "zh": "三层黑曜石盾牌"
          },
          {
            "en": "volcanic energy",
            "zh": "火山能量"
          }
        ]
      },
      {
        "img": "images/block-battle/page-25.jpg",
        "en": "sword - ride a sword with evil attack power!",
        "zh": "勇士跳上一把巨大的暗紫色之剑。带着邪恶的攻击力，猛砸向盾牌！",
        "keys": [
          {
            "w": "sword",
            "p": "/sɔːrd/",
            "zh": "剑"
          },
          {
            "w": "evil",
            "p": "/ˈiːvəl/",
            "zh": "邪恶的"
          },
          {
            "w": "crash",
            "p": "/kræʃ/",
            "zh": "猛撞"
          }
        ],
        "phrases": [
          {
            "en": "evil attack",
            "zh": "邪恶攻击"
          },
          {
            "en": "come crashing down",
            "zh": "猛砸下来"
          },
          {
            "en": "a huge dark purple sword",
            "zh": "一把巨大的暗紫色之剑"
          }
        ]
      },
      {
        "img": "images/block-battle/page-26.jpg",
        "en": "crush - the shield was crushed flat into shards!",
        "zh": "黑曜石盾牌被彻底砸扁了！碎片像烟花一样四处飞溅。",
        "keys": [
          {
            "w": "crush",
            "p": "/krʌʃ/",
            "zh": "压碎"
          },
          {
            "w": "shard",
            "p": "/ʃɑːrd/",
            "zh": "碎片"
          },
          {
            "w": "firework",
            "p": "/ˈfaɪərwɜːrk/",
            "zh": "烟花"
          }
        ],
        "phrases": [
          {
            "en": "crushed flat",
            "zh": "被砸扁"
          },
          {
            "en": "shards like fireworks",
            "zh": "像烟花一样的碎片"
          },
          {
            "en": "fly everywhere",
            "zh": "四处飞溅"
          }
        ]
      },
      {
        "img": "images/block-battle/page-27.jpg",
        "en": "laser - charge and dodge the laser beams!",
        "zh": "一个高科技炮塔升起，充能着明亮的红色激光束。你怎么躲？",
        "keys": [
          {
            "w": "laser",
            "p": "/ˈleɪzər/",
            "zh": "激光"
          },
          {
            "w": "charge",
            "p": "/tʃɑːrdʒ/",
            "zh": "充能"
          },
          {
            "w": "dodge",
            "p": "/dɑːdʒ/",
            "zh": "躲闪"
          }
        ],
        "phrases": [
          {
            "en": "charge a bright red laser",
            "zh": "给明亮的红色激光充能"
          },
          {
            "en": "high-tech turret",
            "zh": "高科技炮塔"
          },
          {
            "en": "dodge the laser",
            "zh": "躲闪激光"
          }
        ]
      },
      {
        "img": "images/block-battle/page-28.jpg",
        "en": "hammer - one swing of the giant legendary hammer!",
        "zh": "勇士挥舞着一把巨大的金色锤子。这就是传说中的锤子王——最强的武器！",
        "keys": [
          {
            "w": "hammer",
            "p": "/ˈhæmər/",
            "zh": "锤子"
          },
          {
            "w": "giant",
            "p": "/ˈdʒaɪənt/",
            "zh": "巨大的"
          },
          {
            "w": "legendary",
            "p": "/ˈledʒənderi/",
            "zh": "传说的"
          }
        ],
        "phrases": [
          {
            "en": "a giant golden hammer",
            "zh": "一把巨大的金色锤子"
          },
          {
            "en": "legendary hammer king",
            "zh": "传说中的锤子王"
          },
          {
            "en": "the strongest weapon",
            "zh": "最强的武器"
          }
        ]
      },
      {
        "img": "images/block-battle/page-29.jpg",
        "en": "swing - one mighty swing smashed everything tiny!",
        "zh": "激光炮塔被大锤一挥就砸成了碎片！",
        "keys": [
          {
            "w": "swing",
            "p": "/swɪŋ/",
            "zh": "挥舞"
          },
          {
            "w": "boom",
            "p": "/buːm/",
            "zh": "轰隆声"
          },
          {
            "w": "tiny",
            "p": "/ˈtaɪni/",
            "zh": "微小的"
          }
        ],
        "phrases": [
          {
            "en": "one swing",
            "zh": "一下挥舞"
          },
          {
            "en": "smashed into pieces",
            "zh": "砸成了碎片"
          },
          {
            "en": "with a boom",
            "zh": "伴随着轰隆声"
          }
        ]
      },
      {
        "img": "images/block-battle/page-30.jpg",
        "en": "fortress - a mechanical flying fortress, unbeatable!",
        "zh": "一个带着翅膀的巨大堡垒升上天空。看起来不可战胜！",
        "keys": [
          {
            "w": "fortress",
            "p": "/ˈfɔːrtrəs/",
            "zh": "堡垒"
          },
          {
            "w": "mechanical",
            "p": "/məˈkænɪkəl/",
            "zh": "机械的"
          },
          {
            "w": "unbeatable",
            "p": "/ʌnˈbiːtəbl/",
            "zh": "不可战胜的"
          }
        ],
        "phrases": [
          {
            "en": "a giant fortress",
            "zh": "一个巨大的堡垒"
          },
          {
            "en": "mechanical wings",
            "zh": "机械翅膀"
          },
          {
            "en": "looked unbeatable",
            "zh": "看起来不可战胜"
          }
        ]
      },
      {
        "img": "images/block-battle/page-31.jpg",
        "en": "weigh - the immense mechanical hand has great weight!",
        "zh": "这锤子有1500个方块那么重！堡垒在巨大的重量下颤抖，几乎飞不动了！",
        "keys": [
          {
            "w": "weigh",
            "p": "/weɪ/",
            "zh": "重（动词）"
          },
          {
            "w": "weight",
            "p": "/weɪt/",
            "zh": "重量（名词）"
          },
          {
            "w": "immense",
            "p": "/ɪˈmens/",
            "zh": "巨大的"
          }
        ],
        "phrases": [
          {
            "en": "weigh 1500 blocks",
            "zh": "重达1500个方块"
          },
          {
            "en": "immense weight",
            "zh": "巨大的重量"
          },
          {
            "en": "almost unable to fly",
            "zh": "几乎飞不动了"
          }
        ]
      },
      {
        "img": "images/block-battle/page-32.jpg",
        "en": "extend - reach out with incredible extendable arms!",
        "zh": "一只巨大的金属手臂从地面伸出，以惊人的力量向堡垒抓去。",
        "keys": [
          {
            "w": "extend",
            "p": "/ɪkˈstend/",
            "zh": "伸出"
          },
          {
            "w": "reach",
            "p": "/riːtʃ/",
            "zh": "伸向"
          },
          {
            "w": "incredible",
            "p": "/ɪnˈkredəbl/",
            "zh": "惊人的"
          }
        ],
        "phrases": [
          {
            "en": "extend from the ground",
            "zh": "从地面伸出"
          },
          {
            "en": "reach for the fortress",
            "zh": "伸向堡垒"
          },
          {
            "en": "incredible power",
            "zh": "惊人的力量"
          }
        ]
      },
      {
        "img": "images/block-battle/page-33.jpg",
        "en": "clever - a clever plan using sound wave to launch!",
        "zh": "勇士想到了一个聪明的计划！如果锤子砸到地面，声波把敌人弹飞到天上呢？",
        "keys": [
          {
            "w": "clever",
            "p": "/ˈklevər/",
            "zh": "聪明的"
          },
          {
            "w": "sound wave",
            "p": "/saʊnd weɪv/",
            "zh": "声波"
          },
          {
            "w": "launch",
            "p": "/lɔːntʃ/",
            "zh": "发射；弹飞"
          }
        ],
        "phrases": [
          {
            "en": "a clever plan",
            "zh": "一个聪明的计划"
          },
          {
            "en": "sound wave",
            "zh": "声波"
          },
          {
            "en": "launch the enemy into the sky",
            "zh": "把敌人弹飞到天上"
          }
        ]
      },
      {
        "img": "images/block-battle/page-34.jpg",
        "en": "strike - the hammer strike sends a huge shockwave!",
        "zh": "锤子以惊人的力量猛击地面！巨大的冲击波向四面八方扩散。",
        "keys": [
          {
            "w": "strike",
            "p": "/straɪk/",
            "zh": "击打"
          },
          {
            "w": "force",
            "p": "/fɔːrs/",
            "zh": "力量"
          },
          {
            "w": "shockwave",
            "p": "/ˈʃɑːkweɪv/",
            "zh": "冲击波"
          }
        ],
        "phrases": [
          {
            "en": "strike the ground",
            "zh": "击打地面"
          },
          {
            "en": "with incredible force",
            "zh": "以惊人的力量"
          },
          {
            "en": "a huge shockwave",
            "zh": "巨大的冲击波"
          }
        ]
      },
      {
        "img": "images/block-battle/page-35.jpg",
        "en": "cannonball - fly high over the arena like a cannonball!",
        "zh": "像一颗炮弹一样，敌人飞上了高高的天空！对战结束了！",
        "keys": [
          {
            "w": "cannonball",
            "p": "/ˈkænənbɔːl/",
            "zh": "炮弹"
          },
          {
            "w": "high",
            "p": "/haɪ/",
            "zh": "高高地"
          },
          {
            "w": "over",
            "p": "/ˈoʊvər/",
            "zh": "结束"
          }
        ],
        "phrases": [
          {
            "en": "like a cannonball",
            "zh": "像一颗炮弹一样"
          },
          {
            "en": "high in the sky",
            "zh": "高高的天空"
          },
          {
            "en": "the battle is over",
            "zh": "对战结束了"
          }
        ]
      },
      {
        "img": "images/block-battle/page-36.jpg",
        "en": "lazy - fall asleep comfortably after the big battle!",
        "zh": "为什么要放方块？让机械手帮我放！勇士舒服地躺下来，睡着了。",
        "keys": [
          {
            "w": "lazy",
            "p": "/ˈleɪzi/",
            "zh": "懒惰的"
          },
          {
            "w": "comfortably",
            "p": "/ˈkʌmftəbli/",
            "zh": "舒服地"
          },
          {
            "w": "fall asleep",
            "p": "/fɔːl əˈsliːp/",
            "zh": "入睡"
          }
        ],
        "phrases": [
          {
            "en": "let the robotic arm do it",
            "zh": "让机械手帮我放"
          },
          {
            "en": "lie down comfortably",
            "zh": "舒服地躺下来"
          },
          {
            "en": "fall asleep",
            "zh": "睡着了"
          }
        ]
      },
      {
        "img": "images/block-battle/page-37.jpg",
        "en": "The second round begins! A brave warrior returns to the arena.",
        "zh": "冒险永不止步！我们再来一场吧！",
        "keys": [
          {
            "w": "adventure",
            "p": "/ədˈventʃər/",
            "zh": "冒险"
          },
          {
            "w": "never",
            "p": "/ˈnevər/",
            "zh": "从不；永不"
          },
          {
            "w": "again",
            "p": "/əˈɡen/",
            "zh": "再次"
          }
        ],
        "phrases": [
          {
            "en": "The adventure never ends",
            "zh": "冒险永不止步"
          },
          {
            "en": "play again",
            "zh": "再来一场"
          }
        ]
      },
      {
        "img": "images/block-battle/page-38.jpg",
        "en": "stealth - disappear with stealth skill, very confused!",
        "zh": "一个阳光明媚的下午，两个最好的朋友——一个披着红披风的小勇士和一个聪明的建造师——在彩色的竞技场面对面站着。今天就是他们期待已久的日子：方块大战！每个人都要设计自己的武器，比比谁最强。",
        "keys": [
          {
            "w": "warrior",
            "p": "/ˈwɔːriər/",
            "zh": "勇士"
          },
          {
            "w": "arena",
            "p": "/əˈriːnə/",
            "zh": "竞技场"
          },
          {
            "w": "count down",
            "p": "/kaʊnt daʊn/",
            "zh": "倒数"
          }
        ],
        "phrases": [
          {
            "en": "a brave warrior",
            "zh": "一个勇敢的勇士"
          },
          {
            "en": "colorful arena",
            "zh": "彩色竞技场"
          },
          {
            "en": "count down",
            "zh": "倒数"
          }
        ]
      },
      {
        "img": "images/block-battle/page-39.jpg",
        "en": "obsidian - build a shield with super hard obsidian material!",
        "zh": "建造师笑着说：'我选一个带隐身技能的方块！'突然，他全身开始发出神秘的蓝色光芒。慢慢地，他消失在了空气中！'现在你看不到我了！'他的声音从四面八方传来。",
        "keys": [
          {
            "w": "stealth",
            "p": "/stelθ/",
            "zh": "隐身"
          },
          {
            "w": "disappear",
            "p": "/ˌdɪsəˈpɪr/",
            "zh": "消失"
          },
          {
            "w": "confused",
            "p": "/kənˈfjuːzd/",
            "zh": "困惑的"
          }
        ],
        "phrases": [
          {
            "en": "stealth skill",
            "zh": "隐身技能"
          },
          {
            "en": "disappear into thin air",
            "zh": "消失在空气中"
          },
          {
            "en": "feel confused",
            "zh": "感到困惑"
          }
        ]
      },
      {
        "img": "images/block-battle/page-40.jpg",
        "en": "evil - ride a sword with evil attack and purple lightning!",
        "zh": "建造师重新出现了，立刻开始工作。'我要造一个三层黑曜石盾牌！'他骄傲地宣布。一块一块地，一个巨大的黑色盾牌从地面升起。黑曜石是方块世界最坚硬的材料之一。'一般攻击根本打不破这个！'他笑着说。",
        "keys": [
          {
            "w": "obsidian",
            "p": "/əbˈsɪdiən/",
            "zh": "黑曜石"
          },
          {
            "w": "shield",
            "p": "/ʃiːld/",
            "zh": "盾牌"
          },
          {
            "w": "material",
            "p": "/məˈtɪriəl/",
            "zh": "材料"
          }
        ],
        "phrases": [
          {
            "en": "obsidian shield",
            "zh": "黑曜石盾牌"
          },
          {
            "en": "build a shield",
            "zh": "造一个盾牌"
          },
          {
            "en": "hard material",
            "zh": "坚硬的材料"
          }
        ]
      },
      {
        "img": "images/block-battle/page-41.jpg",
        "en": "impossible - the obsidian shield cannot be broken!",
        "zh": "勇士一点也不担心。'看我的！'他大喊，跳上了一把漂浮在空中的巨大暗紫色之剑。剑上覆盖着邪恶能量，闪着暗紫色的闪电。'有这个邪恶攻击力，你的盾牌什么都不算！'勇士全速飞向盾牌。",
        "keys": [
          {
            "w": "sword",
            "p": "/sɔːrd/",
            "zh": "剑"
          },
          {
            "w": "evil",
            "p": "/ˈiːvəl/",
            "zh": "邪恶的"
          },
          {
            "w": "lightning",
            "p": "/ˈlaɪtnɪŋ/",
            "zh": "闪电"
          }
        ],
        "phrases": [
          {
            "en": "giant sword",
            "zh": "巨大的剑"
          },
          {
            "en": "evil attack",
            "zh": "邪恶攻击"
          },
          {
            "en": "purple lightning",
            "zh": "紫色闪电"
          }
        ]
      },
      {
        "img": "images/block-battle/page-42.jpg",
        "en": "laser - a high-tech turret that shoots laser beams!",
        "zh": "哐当！邪恶之剑以惊人的力量撞上黑曜石盾牌。让所有人吃惊的是，传说中坚不可摧的盾牌被彻底砸扁了——像一张煎饼！黑曜石碎片像烟花一样四处飞溅。'不可能！'建造师惊呼，盯着被拍扁的盾牌残骸。",
        "keys": [
          {
            "w": "crush",
            "p": "/krʌʃ/",
            "zh": "压碎"
          },
          {
            "w": "shard",
            "p": "/ʃɑːrd/",
            "zh": "碎片"
          },
          {
            "w": "impossible",
            "p": "/ɪmˈpɑːsəbl/",
            "zh": "不可能的"
          }
        ],
        "phrases": [
          {
            "en": "crushed flat",
            "zh": "被砸扁"
          },
          {
            "en": "obsidian shards",
            "zh": "黑曜石碎片"
          },
          {
            "en": "That's impossible",
            "zh": "那不可能"
          }
        ]
      },
      {
        "img": "images/block-battle/page-43.jpg",
        "en": "enormous - the enormous hammer is the secret weapon!",
        "zh": "建造师不肯认输。'好，比就比！'他迅速组装了一个高科技激光炮塔。炮塔嗡嗡地启动了，充能着明亮的红色激光束，照亮了整个竞技场。'看你躲不躲得过这个！'他咧嘴笑着，直接瞄准了勇士。",
        "keys": [
          {
            "w": "laser",
            "p": "/ˈleɪzər/",
            "zh": "激光"
          },
          {
            "w": "turret",
            "p": "/ˈtɜːrət/",
            "zh": "炮塔"
          },
          {
            "w": "dodge",
            "p": "/dɑːdʒ/",
            "zh": "躲闪"
          }
        ],
        "phrases": [
          {
            "en": "laser turret",
            "zh": "激光炮塔"
          },
          {
            "en": "bright red laser beam",
            "zh": "明亮的红色激光束"
          },
          {
            "en": "dodge this",
            "zh": "躲过这个"
          }
        ]
      },
      {
        "img": "images/block-battle/page-44.jpg",
        "en": "fortress - a mechanical flying fortress, unbeatable!",
        "zh": "勇士大笑，掏出了他的秘密武器——一把巨大的金色锤子，叫做锤子王。这是任何人见过的最大的锤子，闪耀着金光。'你觉得一个小激光就能挡住我？'他说着，把锤子高高举过头顶。",
        "keys": [
          {
            "w": "hammer",
            "p": "/ˈhæmər/",
            "zh": "锤子"
          },
          {
            "w": "enormous",
            "p": "/ɪˈnɔːrməs/",
            "zh": "巨大的"
          },
          {
            "w": "secret weapon",
            "p": "/ˈsiːkrət ˈwepən/",
            "zh": "秘密武器"
          }
        ],
        "phrases": [
          {
            "en": "secret weapon",
            "zh": "秘密武器"
          },
          {
            "en": "enormous golden hammer",
            "zh": "巨大的金色锤子"
          },
          {
            "en": "raise the hammer high",
            "zh": "把锤子高高举起"
          }
        ]
      },
      {
        "img": "images/block-battle/page-45.jpg",
        "en": "swing - one mighty swing of the scrap hammer!",
        "zh": "只一挥，轰！金色锤子砸在激光炮塔上，把它砸成了碎片！齿轮、电线和金属零件四处飞溅。建造师震惊地盯着炮塔变成的那堆废铁。'这锤子也太太太强了！'他小声说。",
        "keys": [
          {
            "w": "swing",
            "p": "/swɪŋ/",
            "zh": "挥舞"
          },
          {
            "w": "scrap",
            "p": "/skræp/",
            "zh": "废铁"
          },
          {
            "w": "shock",
            "p": "/ʃɑːk/",
            "zh": "震惊"
          }
        ],
        "phrases": [
          [
            {
              "en": "one mighty swing",
              "zh": "有力的一挥"
            }
          ],
          [
            {
              "en": "a pile of scrap",
              "zh": "一堆废铁"
            }
          ],
          [
            {
              "en": "in shock",
              "zh": "震惊地"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-46.jpg",
        "en": "fortress - the mechanical fortress looks unbeatable!",
        "zh": "建造师还有一招。'我要造一个飞行的机械堡垒！'一个带着巨大翅膀的结构从地面升起，飞上了天空。它装着厚厚的金属板，看起来真的不可战胜。'你打不到会飞的东西！'建造师在空中大喊。",
        "keys": [
          {
            "w": "fortress",
            "p": "/ˈfɔːrtrəs/",
            "zh": "堡垒"
          },
          {
            "w": "mechanical",
            "p": "/məˈkænɪkəl/",
            "zh": "机械的"
          },
          {
            "w": "unbeatable",
            "p": "/ʌnˈbiːtəbl/",
            "zh": "不可战胜的"
          }
        ],
        "phrases": [
          [
            {
              "en": "mechanical fortress",
              "zh": "机械堡垒"
            }
          ],
          [
            {
              "en": "flying fortress",
              "zh": "飞行堡垒"
            }
          ],
          [
            {
              "en": "look unbeatable",
              "zh": "看起来不可战胜"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-47.jpg",
        "en": "weigh - the hammer weighs 1,500 blocks, immense!",
        "zh": "但勇士有一个更疯狂的主意。他拿出了最重的武器——一把重达1500个方块的锤子！当他举起它时，整个竞技场都在颤抖。飞行堡垒在巨大的重量下剧烈摇晃，几乎飞不动了。'这是我的超级武器！'勇士咧嘴笑道。",
        "keys": [
          {
            "w": "weigh",
            "p": "/weɪ/",
            "zh": "重（动词）"
          },
          {
            "w": "weight",
            "p": "/weɪt/",
            "zh": "重量"
          },
          {
            "w": "immense",
            "p": "/ɪˈmens/",
            "zh": "巨大的"
          }
        ],
        "phrases": [
          [
            {
              "en": "weigh 1500 blocks",
              "zh": "重达1500个方块"
            }
          ],
          [
            {
              "en": "the immense weight",
              "zh": "巨大的重量"
            }
          ],
          [
            {
              "en": "the heaviest weapon",
              "zh": "最重的武器"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-48.jpg",
        "en": "extend - extend and grab with incredible stretching arms!",
        "zh": "建造师快没招了，但他突然想起了一件事。'等等！我还有我的机械手！'一只巨大的金属手臂从地面伸出，伸向高空中的堡垒。它重700个方块，什么都能抓住。'这只手够强壮，能把你的堡垒抓碎！'他喊道。",
        "keys": [
          {
            "w": "extend",
            "p": "/ɪkˈstend/",
            "zh": "伸出"
          },
          {
            "w": "grab",
            "p": "/ɡræb/",
            "zh": "抓住"
          },
          {
            "w": "stretch",
            "p": "/stretʃ/",
            "zh": "伸展"
          }
        ],
        "phrases": [
          [
            {
              "en": "extend from the ground",
              "zh": "从地面伸出"
            }
          ],
          [
            {
              "en": "grab the fortress",
              "zh": "抓住堡垒"
            }
          ],
          [
            {
              "en": "stretch into the sky",
              "zh": "伸向高空"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-49.jpg",
        "en": "clever - a brilliant clever plan with a shockwave!",
        "zh": "勇士看着伸向自己的机械手，使劲思考。然后他的眼睛亮了。'我有一个聪明的计划！'他对自己说。'如果我用锤子砸地面，声波产生的冲击力就会把你弹飞到天上——我就赢了！'这是一个绝妙的主意。",
        "keys": [
          {
            "w": "clever",
            "p": "/ˈklevər/",
            "zh": "聪明的"
          },
          {
            "w": "shockwave",
            "p": "/ˈʃɑːkweɪv/",
            "zh": "冲击波"
          },
          {
            "w": "brilliant",
            "p": "/ˈbrɪliənt/",
            "zh": "绝妙的"
          }
        ],
        "phrases": [
          [
            {
              "en": "a clever plan",
              "zh": "一个聪明的计划"
            }
          ],
          [
            {
              "en": "shockwave from the ground",
              "zh": "来自地面的冲击波"
            }
          ],
          [
            {
              "en": "a brilliant idea",
              "zh": "一个绝妙的主意"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-50.jpg",
        "en": "strike - the hammer strike has incredible impact!",
        "zh": "勇士把巨大的锤子高高举起，猛砸向地面。哐当！撞击力太大了，整个竞技场像地震一样摇晃。巨大的冲击波向四面八方扩散，把灰尘和方块都吹上了天。声音回荡在整个大地上。",
        "keys": [
          {
            "w": "strike",
            "p": "/straɪk/",
            "zh": "击打"
          },
          {
            "w": "impact",
            "p": "/ˈɪmpækt/",
            "zh": "撞击"
          },
          {
            "w": "echo",
            "p": "/ˈekoʊ/",
            "zh": "回荡"
          }
        ],
        "phrases": [
          [
            {
              "en": "strike the ground",
              "zh": "击打地面"
            }
          ],
          [
            {
              "en": "the impact was huge",
              "zh": "撞击力巨大"
            }
          ],
          [
            {
              "en": "echo across the land",
              "zh": "回荡在整个大地上"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-51.jpg",
        "en": "cannonball - tumble through the sky like a cannonball, amazed!",
        "zh": "就像勇士计划的那样，建造师像一颗炮弹一样被弹飞上了天！他越飞越高，在云层中旋转翻滚。'我在飞！'他尖叫着，又害怕又惊讶。对战结束了——勇士用聪明的计谋赢了！",
        "keys": [
          {
            "w": "cannonball",
            "p": "/ˈkænənbɔːl/",
            "zh": "炮弹"
          },
          {
            "w": "tumble",
            "p": "/ˈtʌmbl/",
            "zh": "翻滚"
          },
          {
            "w": "amazed",
            "p": "/əˈmeɪzd/",
            "zh": "惊讶的"
          }
        ],
        "phrases": [
          [
            {
              "en": "like a cannonball",
              "zh": "像一颗炮弹一样"
            }
          ],
          [
            {
              "en": "spin and tumble",
              "zh": "旋转翻滚"
            }
          ],
          [
            {
              "en": "scared and amazed",
              "zh": "又害怕又惊讶"
            }
          ]
        ]
      },
      {
        "img": "images/block-battle/page-52.jpg",
        "en": "lazy - sleep comfortably and snore after the battle!",
        "zh": "大胜之后，勇士觉得很累。'我为什么还要继续放方块？'他打了个哈欠。'让机械手帮我干活吧！'他舒服地躺在一个柔软的方块上，闭上眼睛，很快就睡着了。机械手还在一块一块地放方块，勇士在一旁安静地打着呼噜。",
        "keys": [
          {
            "w": "lazy",
            "p": "/ˈleɪzi/",
            "zh": "懒惰的"
          },
          {
            "w": "comfortably",
            "p": "/ˈkʌmftəbli/",
            "zh": "舒服地"
          },
          {
            "w": "snore",
            "p": "/snɔːr/",
            "zh": "打呼噜"
          },
          {
            "w": "yawn",
            "p": "/jɔːn/",
            "zh": "打哈欠"
          },
          {
            "w": "block",
            "p": "/blɑːk/",
            "zh": "方块"
          }
        ],
        "phrases": [
          [
            {
              "en": "feel lazy",
              "zh": "觉得懒洋洋的"
            }
          ],
          [
            {
              "en": "lie comfortably",
              "zh": "舒服地躺着"
            }
          ],
          [
            {
              "en": "snore quietly",
              "zh": "安静地打呼噜"
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "star-wars",
    "title": "Star Wars",
    "titleZh": "星球大战",
    "category": "原创",
    "cover": "images/covers/cover-star-wars.jpg",
    "pages": [
      {
        "img": "images/star-wars/page-1.jpg",
        "en": "In a faraway galaxy, a brave little astronaut named Little Star flew his shiny blue spaceship through the stars. Today, he was about to have the greatest adventure of his life!",
        "zh": "在一个遥远的星系里，勇敢的小宇航员小星驾驶着他闪亮的蓝色飞船穿越星空。今天，他即将迎来人生中最伟大的冒险！",
        "keys": [
          {
            "w": "galaxy",
            "p": "/ˈɡæləksi/",
            "zh": "星系"
          },
          {
            "w": "astronaut",
            "p": "/ˈæstrənɔːt/",
            "zh": "宇航员"
          },
          {
            "w": "spaceship",
            "p": "/ˈspeɪsʃɪp/",
            "zh": "飞船"
          },
          {
            "w": "starry",
            "p": "/ˈstɑːri/",
            "zh": "布满星星的"
          },
          {
            "w": "adventure",
            "p": "/ədˈventʃər/",
            "zh": "冒险"
          }
        ],
        "phrases": [
          [
            {
              "en": "a distant galaxy",
              "zh": "遥远的星系"
            }
          ],
          [
            {
              "en": "a shiny blue spaceship",
              "zh": "闪亮的蓝色飞船"
            }
          ],
          [
            {
              "en": "the greatest adventure",
              "zh": "最伟大的冒险"
            }
          ]
        ]
      },
      {
        "img": "images/star-wars/page-2.jpg",
        "en": "Little Star flew past twinkling little stars. They sparkled like tiny diamonds scattered across the dark sky. He looked at the beautiful planets around him, wondering which way to go.",
        "zh": "小星飞过一闪一闪的小星星。它们像撒落在黑暗天空中的小钻石一样闪烁。他看着周围美丽的星球，想该往哪边走。",
        "keys": [
          {
            "w": "twinkle",
            "p": "/ˈtwɪŋkəl/",
            "zh": "闪烁"
          },
          {
            "w": "diamond",
            "p": "/ˈdaɪəmənd/",
            "zh": "钻石"
          },
          {
            "w": "darkness",
            "p": "/ˈdɑːrknəs/",
            "zh": "黑暗"
          },
          {
            "w": "planet",
            "p": "/ˈplænɪt/",
            "zh": "星球"
          },
          {
            "w": "surrounding",
            "p": "/səˈraʊndɪŋ/",
            "zh": "周围的"
          }
        ],
        "phrases": [
          [
            {
              "en": "twinkling stars",
              "zh": "一闪一闪的小星星"
            }
          ],
          [
            {
              "en": "like little diamonds",
              "zh": "像小钻石一样"
            }
          ],
          [
            {
              "en": "which way to go",
              "zh": "该往哪边走"
            }
          ]
        ]
      },
      {
        "img": "images/star-wars/page-3.jpg",
        "en": "Suddenly, a round little robot floated over! His name was Doudou, with glowing eyes and a bouncy body. He smiled and asked Little Star if he wanted to play Star Wars together.",
        "zh": "突然，一个圆滚滚的小机器人飘了过来！他叫豆豆，有着发光的眼睛和弹弹的身体。他微笑着问小星想不想一起玩星球大战。",
        "keys": [
          {
            "w": "suddenly",
            "p": "/ˈsʌdənli/",
            "zh": "突然地"
          },
          {
            "w": "robot",
            "p": "/ˈroʊbɑːt/",
            "zh": "机器人"
          },
          {
            "w": "glowing",
            "p": "/ˈɡloʊɪŋ/",
            "zh": "发光的"
          },
          {
            "w": "float",
            "p": "/floʊt/",
            "zh": "漂浮"
          },
          {
            "w": "smile",
            "p": "/smaɪl/",
            "zh": "微笑"
          }
        ],
        "phrases": [
          {
            "en": "a round little robot",
            "zh": "一个圆滚滚的小机器人"
          },
          {
            "en": "glowing eyes",
            "zh": "发光的眼睛"
          },
          {
            "en": "play a planet battle game",
            "zh": "一起玩星球大战"
          }
        ]
      },
      {
        "img": "images/star-wars/page-4.jpg",
        "en": "Sure! Let's play! said Little Star. Doudou started designing his own planet, and it would be the best planet ever! Little Star got his special weapons ready too. The big battle was about to begin!",
        "zh": "好呀！我们来玩！小星说。豆豆开始设计他自己的星球，这将是最棒的星球！小星也准备好了他的特殊武器。大战即将开始！",
        "keys": [
          {
            "w": "design",
            "p": "/dɪˈzaɪn/",
            "zh": "设计"
          },
          {
            "w": "planet",
            "p": "/ˈplænɪt/",
            "zh": "星球"
          },
          {
            "w": "special",
            "p": "/ˈspeʃəl/",
            "zh": "特殊的"
          },
          {
            "w": "weapon",
            "p": "/ˈwepən/",
            "zh": "武器"
          },
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "大战"
          }
        ],
        "phrases": [
          {
            "en": "design his own planet",
            "zh": "设计他自己的星球"
          },
          {
            "en": "the best planet ever",
            "zh": "最棒的星球"
          },
          {
            "en": "the battle is about to begin",
            "zh": "大战即将开始"
          }
        ]
      },
      {
        "img": "images/star-wars/page-5.jpg",
        "en": "Doudou created a magnificent crystal energy planet! Its shell was made of transparent crystal that could absorb star energy. He proudly said it was his Crystal Planet, and it could fire super laser beams!",
        "zh": "豆豆创造了一颗壮观的水晶能量星球！它的外壳是透明的水晶，能吸收恒星的能量。他骄傲地说这是他的水晶星球，能发射超强激光炮！",
        "keys": [
          {
            "w": "create",
            "p": "/kriˈeɪt/",
            "zh": "创造"
          },
          {
            "w": "crystal",
            "p": "/ˈkrɪstl/",
            "zh": "水晶"
          },
          {
            "w": "transparent",
            "p": "/trænsˈperənt/",
            "zh": "透明的"
          },
          {
            "w": "absorb",
            "p": "/əbˈzɔːrb/",
            "zh": "吸收"
          },
          {
            "w": "laser",
            "p": "/ˈleɪzər/",
            "zh": "激光"
          }
        ],
        "phrases": [
          {
            "en": "a magnificent crystal energy planet",
            "zh": "一颗壮观的水晶能量星球"
          },
          {
            "en": "a transparent crystal shell",
            "zh": "透明的水晶外壳"
          },
          {
            "en": "fire a super-powerful laser cannon",
            "zh": "发射超强激光炮"
          }
        ]
      },
      {
        "img": "images/star-wars/page-6.jpg",
        "en": "Whoosh! The Crystal Planet fired a bright laser beam! It was so powerful that it lit up the whole galaxy. Doudou laughed happily and told Little Star to try dodging it!",
        "zh": "嗖！水晶星球发射出一道明亮的激光！激光太强了，照亮了整个星系。豆豆开心地大笑，叫小星躲开试试！",
        "keys": [
          {
            "w": "bright",
            "p": "/braɪt/",
            "zh": "明亮的"
          },
          {
            "w": "laser",
            "p": "/ˈleɪzər/",
            "zh": "激光"
          },
          {
            "w": "powerful",
            "p": "/ˈpaʊərfəl/",
            "zh": "强大的"
          },
          {
            "w": "light up",
            "p": "/laɪt ʌp/",
            "zh": "照亮"
          },
          {
            "w": "dodge",
            "p": "/dɑːdʒ/",
            "zh": "躲开"
          }
        ],
        "phrases": [
          {
            "en": "a bright laser beam",
            "zh": "一道明亮的激光"
          },
          {
            "en": "light up the whole galaxy",
            "zh": "照亮整个星系"
          },
          {
            "en": "try to dodge it",
            "zh": "试着躲开它"
          }
        ]
      },
      {
        "img": "images/star-wars/page-7.jpg",
        "en": "But Little Star was very clever! He threw a tiny crystal bomb at the Crystal Planet. BOOM! The bomb hit the surface and cracked the crystal shell right open!",
        "zh": "但是小星非常聪明！他朝水晶星球扔出一颗小小的水晶炸弹。轰！炸弹击中了星球表面，在水晶外壳上炸出了一道大裂纹！",
        "keys": [
          {
            "w": "smart",
            "p": "/smɑːrt/",
            "zh": "聪明的"
          },
          {
            "w": "throw",
            "p": "/θroʊ/",
            "zh": "扔"
          },
          {
            "w": "bomb",
            "p": "/bɑːm/",
            "zh": "炸弹"
          },
          {
            "w": "surface",
            "p": "/ˈsɜːrfɪs/",
            "zh": "表面"
          },
          {
            "w": "crack",
            "p": "/kræk/",
            "zh": "裂纹"
          }
        ],
        "phrases": [
          {
            "en": "throw a tiny crystal bomb",
            "zh": "扔出一颗小小的水晶炸弹"
          },
          {
            "en": "hit the planet's surface",
            "zh": "击中星球表面"
          },
          {
            "en": "a huge crack in the crystal shell",
            "zh": "水晶外壳上的一道大裂纹"
          }
        ]
      },
      {
        "img": "images/star-wars/page-8.jpg",
        "en": "The crack spread across the Crystal Planet like a spider web. Doudou was shocked! He cried that his beautiful planet was breaking apart. The crystal shell began to shatter piece by piece.",
        "zh": "裂纹像蜘蛛网一样在水晶星球上蔓延。豆豆大吃一惊！他大喊他美丽的星球要碎了。水晶外壳一点一点地开始碎裂。",
        "keys": [
          {
            "w": "spread",
            "p": "/spred/",
            "zh": "蔓延"
          },
          {
            "w": "spiderweb",
            "p": "/ˈspaɪdərweb/",
            "zh": "蜘蛛网"
          },
          {
            "w": "shocked",
            "p": "/ʃɑːkt/",
            "zh": "震惊的"
          },
          {
            "w": "shatter",
            "p": "/ˈʃætər/",
            "zh": "碎裂"
          },
          {
            "w": "shell",
            "p": "/ʃel/",
            "zh": "外壳"
          }
        ],
        "phrases": [
          {
            "en": "spread like a spider web",
            "zh": "像蜘蛛网一样蔓延"
          },
          {
            "en": "be shocked",
            "zh": "大吃一惊"
          },
          {
            "en": "begin to shatter little by little",
            "zh": "一点一点地开始碎裂"
          }
        ]
      },
      {
        "img": "images/star-wars/page-9.jpg",
        "en": "But Doudou had a plan! He sent out hundreds of tiny repair drones. Bzzz! They flew to the cracks and started fixing the planet. Doudou proudly said his drones would fix everything!",
        "zh": "但是豆豆有办法！他派出成百上千个小小的修复无人机。嗡嗡嗡！它们飞到裂缝处开始修复星球。豆豆骄傲地说他的无人机会修好一切！",
        "keys": [
          {
            "w": "repair",
            "p": "/rɪˈper/",
            "zh": "修复"
          },
          {
            "w": "drone",
            "p": "/droʊn/",
            "zh": "无人机"
          },
          {
            "w": "thousands",
            "p": "/ˈθaʊzəndz/",
            "zh": "成千上万"
          },
          {
            "w": "crack",
            "p": "/kræk/",
            "zh": "裂缝"
          },
          {
            "w": "fix",
            "p": "/fɪks/",
            "zh": "修好"
          }
        ],
        "phrases": [
          {
            "en": "hundreds of tiny repair drones",
            "zh": "成百上千个小小的修复无人机"
          },
          {
            "en": "fly to the cracks",
            "zh": "飞到裂缝处"
          },
          {
            "en": "fix everything",
            "zh": "修好一切"
          }
        ]
      },
      {
        "img": "images/star-wars/page-10.jpg",
        "en": "Now Doudou had a super surprise! The Crystal Planet transformed into a giant Space Whale! It was huge and shiny, with crystal fins and an enormous mouth. Doudou laughed and said his planet could transform!",
        "zh": "现在豆豆有一个超级惊喜！水晶星球变形成为一只巨大的星际巨鲸！它又大又闪亮，有着水晶鱼鳍和巨大的嘴巴。豆豆大笑着说他的星球可以变形！",
        "keys": [
          {
            "w": "surprise",
            "p": "/sərˈpraɪz/",
            "zh": "惊喜"
          },
          {
            "w": "transform",
            "p": "/trænsˈfɔːrm/",
            "zh": "变形"
          },
          {
            "w": "gigantic",
            "p": "/dʒaɪˈɡæntɪk/",
            "zh": "巨大的"
          },
          {
            "w": "interstellar",
            "p": "/ˌɪntərˈstelər/",
            "zh": "星际的"
          },
          {
            "w": "whale",
            "p": "/weɪl/",
            "zh": "鲸鱼"
          }
        ],
        "phrases": [
          {
            "en": "a super surprise",
            "zh": "一个超级惊喜"
          },
          {
            "en": "transform into a giant space whale",
            "zh": "变形成为一只巨大的星际巨鲸"
          },
          {
            "en": "crystal fins and a huge mouth",
            "zh": "水晶鱼鳍和巨大的嘴巴"
          }
        ]
      },
      {
        "img": "images/star-wars/page-11.jpg",
        "en": "The Space Whale opened its super big mouth, trying to suck in Little Star's stars! Whoosh! The stars started flying toward the whale's mouth. Doudou cheered for the stars to enter his energy furnace!",
        "zh": "星际巨鲸张开超级大的嘴巴，要把小星的小星星吸进来！呼！星星们开始飞向巨鲸的嘴巴。豆豆喊着让星星进入他的能量熔炉！",
        "keys": [
          {
            "w": "mouth",
            "p": "/maʊθ/",
            "zh": "嘴巴"
          },
          {
            "w": "suck",
            "p": "/sʌk/",
            "zh": "吸入"
          },
          {
            "w": "star",
            "p": "/stɑːr/",
            "zh": "星星"
          },
          {
            "w": "energy",
            "p": "/ˈenərdʒi/",
            "zh": "能量"
          },
          {
            "w": "furnace",
            "p": "/ˈfɜːrnɪs/",
            "zh": "熔炉"
          }
        ],
        "phrases": [
          {
            "en": "open its enormous mouth",
            "zh": "张开超级大的嘴巴"
          },
          {
            "en": "suck in the little stars",
            "zh": "把小星星吸进来"
          },
          {
            "en": "an energy furnace",
            "zh": "能量熔炉"
          }
        ]
      },
      {
        "img": "images/star-wars/page-12.jpg",
        "en": "Little Star had the best idea ever! He grabbed a bottle of Galaxy Bubble Bath, stuffed it with explosives, and lit it with a mini lighter. He threw the bubbly bomb right at the Space Whale!",
        "zh": "小星有了最棒的主意！他抓起一瓶银河系沐浴露，塞进炸药，用一个迷你打火机点燃。他把满是泡泡的炸弹扔向星际巨鲸！",
        "keys": [
          {
            "w": "idea",
            "p": "/aɪˈdiːə/",
            "zh": "主意"
          },
          {
            "w": "galaxy",
            "p": "/ˈɡæləksi/",
            "zh": "银河系"
          },
          {
            "w": "lighter",
            "p": "/ˈlaɪtər/",
            "zh": "打火机"
          },
          {
            "w": "ignite",
            "p": "/ɪɡˈnaɪt/",
            "zh": "点燃"
          },
          {
            "w": "bomb",
            "p": "/bɑːm/",
            "zh": "炸弹"
          }
        ],
        "phrases": [
          {
            "en": "the best idea",
            "zh": "最棒的主意"
          },
          {
            "en": "a bottle of galaxy body wash",
            "zh": "一瓶银河系沐浴露"
          },
          {
            "en": "throw the bubbly bomb",
            "zh": "扔出满是泡泡的炸弹"
          }
        ]
      },
      {
        "img": "images/star-wars/page-13.jpg",
        "en": "BOOM! The Galaxy Bubble Bath bomb exploded! The Space Whale was covered in bubbles! Pop, pop, pop! Black smoke rose from its crystal body. Doudou cried that he was full of foam!",
        "zh": "轰！银河系沐浴露炸弹爆炸了！星际巨鲸现在满身都是泡泡！噗噗噗！黑烟从它的水晶身体上升起。豆豆大叫他全身都是泡沫！",
        "keys": [
          {
            "w": "explode",
            "p": "/ɪkˈsploʊd/",
            "zh": "爆炸"
          },
          {
            "w": "bubble",
            "p": "/ˈbʌbəl/",
            "zh": "泡泡"
          },
          {
            "w": "smoke",
            "p": "/smoʊk/",
            "zh": "黑烟"
          },
          {
            "w": "crystal",
            "p": "/ˈkrɪstl/",
            "zh": "水晶"
          },
          {
            "w": "foam",
            "p": "/foʊm/",
            "zh": "泡沫"
          }
        ],
        "phrases": [
          {
            "en": "galaxy bath bomb",
            "zh": "银河系沐浴露炸弹"
          },
          {
            "en": "covered in bubbles",
            "zh": "满身都是泡泡"
          },
          {
            "en": "black smoke rose up",
            "zh": "黑烟升起"
          }
        ]
      },
      {
        "img": "images/star-wars/page-14.jpg",
        "en": "Don't worry! Doudou had a secret weapon too — super tiny nano repair robots! They were so small you couldn't even see them. They zoomed around the Space Whale fixing it fast. Doudou said his nano robots would save it!",
        "zh": "别担心！豆豆也有秘密武器，超小的纳米修复机器人！它们小到根本看不见。它们在星际巨鲸周围飞速修复。豆豆说他的纳米机器人会救他！",
        "keys": [
          {
            "w": "secret",
            "p": "/ˈsiːkrət/",
            "zh": "秘密的"
          },
          {
            "w": "weapon",
            "p": "/ˈwepən/",
            "zh": "武器"
          },
          {
            "w": "nano",
            "p": "/ˈnænoʊ/",
            "zh": "纳米的"
          },
          {
            "w": "repair",
            "p": "/rɪˈper/",
            "zh": "修复"
          },
          {
            "w": "robot",
            "p": "/ˈroʊbɑːt/",
            "zh": "机器人"
          }
        ],
        "phrases": [
          {
            "en": "secret weapon",
            "zh": "秘密武器"
          },
          {
            "en": "tiny nano repair robots",
            "zh": "超小的纳米修复机器人"
          },
          {
            "en": "repair at high speed",
            "zh": "飞速修复"
          }
        ]
      },
      {
        "img": "images/star-wars/page-15.jpg",
        "en": "But Little Star didn't stop! He built the ultimate bomb — the biggest and strongest bomb in the whole universe! It glowed bright red and made all the nearby stars shake. He shouted it was his final strike!",
        "zh": "但是小星没有停下！他制作了终极炸弹，整个宇宙中最大最强的炸弹！它发出明亮的红光，连周围的星星都在震动。他喊着这是他的最后一击！",
        "keys": [
          {
            "w": "ultimate",
            "p": "/ˈʌltɪmət/",
            "zh": "终极的"
          },
          {
            "w": "universe",
            "p": "/ˈjuːnɪvɜːrs/",
            "zh": "宇宙"
          },
          {
            "w": "glow",
            "p": "/ɡloʊ/",
            "zh": "发光"
          },
          {
            "w": "bright",
            "p": "/braɪt/",
            "zh": "明亮的"
          },
          {
            "w": "final",
            "p": "/ˈfaɪnəl/",
            "zh": "最后的"
          }
        ],
        "phrases": [
          {
            "en": "ultimate bomb",
            "zh": "终极炸弹"
          },
          {
            "en": "the biggest and strongest bomb",
            "zh": "最大最强的炸弹"
          },
          {
            "en": "his final strike",
            "zh": "他的最后一击"
          }
        ]
      },
      {
        "img": "images/star-wars/page-16.jpg",
        "en": "KA-BOOM! The ultimate bomb hit the Space Whale. Poof! Nothing was left! Not even a tiny piece. Doudou's planet had completely vanished. Doudou whispered that it was incredible.",
        "zh": "轰隆！终极炸弹击中了星际巨鲸，噗！什么都不剩了！连一小块碎片都没有。豆豆的星球完全消失了。豆豆小声说太厉害了。",
        "keys": [
          {
            "w": "hit",
            "p": "/hɪt/",
            "zh": "击中"
          },
          {
            "w": "nothing",
            "p": "/ˈnʌθɪŋ/",
            "zh": "什么都没有"
          },
          {
            "w": "fragment",
            "p": "/ˈfræɡmənt/",
            "zh": "碎片"
          },
          {
            "w": "disappear",
            "p": "/ˌdɪsəˈpɪr/",
            "zh": "消失"
          },
          {
            "w": "amazing",
            "p": "/əˈmeɪzɪŋ/",
            "zh": "太厉害的"
          }
        ],
        "phrases": [
          {
            "en": "hit the space whale",
            "zh": "击中了星际巨鲸"
          },
          {
            "en": "nothing was left",
            "zh": "什么都不剩了"
          },
          {
            "en": "completely disappeared",
            "zh": "完全消失了"
          }
        ]
      },
      {
        "img": "images/star-wars/page-17.jpg",
        "en": "But Doudou was a tough little robot! He collected all the scrap metal floating in space and built a brand new planet! It wasn't as shiny as before, but it was built with love and determination.",
        "zh": "但是豆豆是个坚强的小机器人！他收集太空中漂浮的所有废铁，建造了一个全新的星球！虽然没有以前那么闪亮，但它是用爱和决心建造的。",
        "keys": [
          {
            "w": "strong",
            "p": "/strɔːŋ/",
            "zh": "坚强的"
          },
          {
            "w": "collect",
            "p": "/kəˈlekt/",
            "zh": "收集"
          },
          {
            "w": "floating",
            "p": "/ˈfloʊtɪŋ/",
            "zh": "漂浮的"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          },
          {
            "w": "determination",
            "p": "/dɪˌtɜːrmɪˈneɪʃən/",
            "zh": "决心"
          }
        ],
        "phrases": [
          {
            "en": "a tough little robot",
            "zh": "一个坚强的小机器人"
          },
          {
            "en": "floating scrap metal",
            "zh": "漂浮的废铁"
          },
          {
            "en": "built with love and determination",
            "zh": "用爱和决心建造的"
          }
        ]
      },
      {
        "img": "images/star-wars/page-18.jpg",
        "en": "Little Star picked up a shield to give to Doudou. But oh no! He threw it too hard, and the shield flew straight at Doudou! Then he quickly followed with another attack!",
        "zh": "小星拿起一个保护盾想送给豆豆。但是哎呀！他扔得太用力，盾牌直接飞向了豆豆！然后他赶紧又来了一个报废攻击！",
        "keys": [
          {
            "w": "shield",
            "p": "/ʃiːld/",
            "zh": "盾牌"
          },
          {
            "w": "protect",
            "p": "/prəˈtekt/",
            "zh": "保护"
          },
          {
            "w": "throw",
            "p": "/θroʊ/",
            "zh": "扔"
          },
          {
            "w": "directly",
            "p": "/dəˈrektli/",
            "zh": "直接地"
          },
          {
            "w": "attack",
            "p": "/əˈtæk/",
            "zh": "攻击"
          }
        ],
        "phrases": [
          {
            "en": "protective shield",
            "zh": "保护盾"
          },
          {
            "en": "threw it too hard",
            "zh": "扔得太用力"
          },
          {
            "en": "scrap attack",
            "zh": "报废攻击"
          }
        ]
      },
      {
        "img": "images/star-wars/page-19.jpg",
        "en": "CRACK! The shield shattered into pieces, and the new planet turned into a pile of scrap metal. Doudou raised his little robot arm and surrendered! He said Little Star's bombs were too powerful — he gave up!",
        "zh": "咔嚓！盾牌碎成碎片，新星球变成了一堆废铁。豆豆举起他的小机器人手臂投降了！他说小星的炸弹太厉害了，他认输！",
        "keys": [
          {
            "w": "shatter",
            "p": "/ˈʃætər/",
            "zh": "碎裂"
          },
          {
            "w": "piece",
            "p": "/piːs/",
            "zh": "碎片"
          },
          {
            "w": "scrap",
            "p": "/skræp/",
            "zh": "废铁"
          },
          {
            "w": "surrender",
            "p": "/səˈrendər/",
            "zh": "投降"
          },
          {
            "w": "defeat",
            "p": "/dɪˈfiːt/",
            "zh": "认输"
          }
        ],
        "phrases": [
          {
            "en": "shattered into pieces",
            "zh": "碎成碎片"
          },
          {
            "en": "a pile of scrap metal",
            "zh": "一堆废铁"
          },
          {
            "en": "give up",
            "zh": "认输"
          }
        ]
      },
      {
        "img": "images/star-wars/page-20.jpg",
        "en": "Even though they had an epic battle, Little Star and Doudou were still the best of friends! They high-fived, laughed together, and shouted that this was the most fun Star Wars game ever!",
        "zh": "虽然他们打了一场史诗级的大战，但小星和豆豆还是最好的朋友！他们互相击掌，一起大笑，喊着这是最好玩的星球大战游戏！",
        "keys": [
          {
            "w": "epic",
            "p": "/ˈepɪk/",
            "zh": "史诗般的"
          },
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "战斗"
          },
          {
            "w": "best friends",
            "p": "/best frendz/",
            "zh": "最好的朋友"
          },
          {
            "w": "high-five",
            "p": "/ˌhaɪ ˈfaɪv/",
            "zh": "击掌"
          },
          {
            "w": "planet",
            "p": "/ˈplænɪt/",
            "zh": "星球"
          }
        ],
        "phrases": [
          {
            "en": "an epic battle",
            "zh": "一场史诗级的大战"
          },
          {
            "en": "best friends",
            "zh": "最好的朋友"
          },
          {
            "en": "the most fun planet battle game",
            "zh": "最好玩的星球大战游戏"
          }
        ]
      },
      {
        "img": "images/star-wars/page-21.jpg",
        "en": "Little Star looked at the stars and had a new idea. He told Doudou they should go to Mars next time! Doudou's eyes lit up with excitement as he shouted — Mars, here we come!",
        "zh": "小星看着星星，有了新主意。他跟豆豆说下次去火星吧！豆豆的眼睛兴奋地发亮，喊着火星我们来了！",
        "keys": [
          {
            "w": "star",
            "p": "/stɑːr/",
            "zh": "星星"
          },
          {
            "w": "idea",
            "p": "/aɪˈdiːə/",
            "zh": "主意"
          },
          {
            "w": "Mars",
            "p": "/mɑːrz/",
            "zh": "火星"
          },
          {
            "w": "excited",
            "p": "/ɪkˈsaɪtɪd/",
            "zh": "兴奋的"
          },
          {
            "w": "glow",
            "p": "/ɡloʊ/",
            "zh": "发亮"
          }
        ],
        "phrases": [
          {
            "en": "a new idea",
            "zh": "新主意"
          },
          {
            "en": "next time, let's go to Mars",
            "zh": "下次去火星吧"
          },
          {
            "en": "Mars, here we come",
            "zh": "火星我们来了"
          }
        ]
      }
    ]
  },
  {
    "id": "robot-battle",
    "title": "Chore Robot Battle",
    "titleZh": "家务机器人大战",
    "category": "原创",
    "cover": "images/covers/cover-robot-battle.jpg",
    "pages": [
      {
        "img": "images/robot-battle/page-1.jpg",
        "en": "Doudou and Doubao's Great Chore Robot Battle",
        "zh": "豆豆和豆包的家务机器人大战 | Doudou and Doubao's Great Chore Robot Battle",
        "keys": [
          {
            "w": "chore",
            "p": "/tʃɔːr/",
            "zh": "家务"
          },
          {
            "w": "robot",
            "p": "/ˈroʊbɑːt/",
            "zh": "机器人"
          },
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "大战"
          },
          {
            "w": "great",
            "p": "/ɡreɪt/",
            "zh": "伟大的"
          },
          {
            "w": "home",
            "p": "/hoʊm/",
            "zh": "家"
          }
        ],
        "phrases": [
          {
            "en": "great chore robot battle",
            "zh": "家务机器人大战"
          },
          {
            "en": "Doudou and Doubao",
            "zh": "豆豆和豆包"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-2.jpg",
        "en": "This is the story of a little boy named Doudou and his round robot friend Doubao.",
        "zh": "这是关于小男孩豆豆和他的圆滚滚机器人朋友豆包的故事。",
        "keys": [
          {
            "w": "chore",
            "p": "/tʃɔːr/",
            "zh": "家务"
          },
          {
            "w": "robot",
            "p": "/ˈroʊbɑːt/",
            "zh": "机器人"
          },
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "大战"
          }
        ],
        "phrases": [
          {
            "en": "little boy named Doudou",
            "zh": "名叫豆豆的小男孩"
          },
          {
            "en": "round robot friend",
            "zh": "圆滚滚的机器人朋友"
          },
          {
            "en": "the story of",
            "zh": "关于……的故事"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-3.jpg",
        "en": "\"Today we're playing the Great Chore Battle!\" Doudou announced excitedly.",
        "zh": "\"今天我们来玩家务大战！\"豆豆兴奋地宣布。",
        "keys": [
          {
            "w": "announce",
            "p": "/əˈnaʊns/",
            "zh": "宣布"
          },
          {
            "w": "excitedly",
            "p": "/ɪkˈsaɪtɪdli/",
            "zh": "兴奋地"
          },
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "战斗"
          }
        ],
        "phrases": [
          {
            "en": "playing the Great Chore Battle",
            "zh": "玩家庭杂务大战"
          },
          {
            "en": "announced excitedly",
            "zh": "兴奋地宣布"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-4.jpg",
        "en": "\"Behold my Stinky Shield!\" Doudou raised a shield glowing with green light.",
        "zh": "\"看我的臭臭护盾！\"豆豆举起一面发着绿色光芒的盾牌。",
        "keys": [
          {
            "w": "shield",
            "p": "/ʃiːld/",
            "zh": "盾牌"
          },
          {
            "w": "behold",
            "p": "/bɪˈhoʊld/",
            "zh": "看，瞧"
          },
          {
            "w": "glow",
            "p": "/ɡloʊ/",
            "zh": "发光"
          }
        ],
        "phrases": [
          {
            "en": "Behold my Stinky Shield",
            "zh": "看我的臭臭护盾"
          },
          {
            "en": "glowing with green light",
            "zh": "发着绿色光芒"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-5.jpg",
        "en": "\"I choose the Bubble Gun! Bang bang bang!\" Countless colorful bubbles flew toward Doudou.",
        "zh": "\"我选泡泡枪！砰砰砰！\"无数彩色泡泡飞向豆豆。",
        "keys": [
          {
            "w": "bubble",
            "p": "/ˈbʌbl/",
            "zh": "泡泡"
          },
          {
            "w": "countless",
            "p": "/ˈkaʊntləs/",
            "zh": "无数的"
          },
          {
            "w": "colorful",
            "p": "/ˈkʌlərfl/",
            "zh": "彩色的"
          }
        ],
        "phrases": [
          {
            "en": "I choose the Bubble Gun",
            "zh": "我选泡泡枪"
          },
          {
            "en": "countless colorful bubbles",
            "zh": "无数彩色泡泡"
          },
          {
            "en": "flew toward Doudou",
            "zh": "飞向豆豆"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-6.jpg",
        "en": "\"My Stinky Bombs already turned you into a stinker!\" Doudou laughed triumphantly.",
        "zh": "\"我的臭臭炮弹早就把你打成臭臭了！\"豆豆得意地大笑。",
        "keys": [
          {
            "w": "bomb",
            "p": "/bɑːm/",
            "zh": "炸弹"
          },
          {
            "w": "triumphantly",
            "p": "/traɪˈʌmfəntli/",
            "zh": "得意地"
          },
          {
            "w": "stinker",
            "p": "/ˈstɪŋkər/",
            "zh": "臭家伙"
          }
        ],
        "phrases": [
          {
            "en": "My Stinky Bombs",
            "zh": "我的臭臭炮弹"
          },
          {
            "en": "turned you into a stinker",
            "zh": "把你变成臭臭鬼"
          },
          {
            "en": "laughed triumphantly",
            "zh": "得意地大笑"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-7.jpg",
        "en": "\"Soap Attack! Scrub scrub scrub! All clean!\" Doudou washed Doubao squeaky clean.",
        "zh": "\"肥皂武装！擦呀擦！洗完啦！\"豆豆用巨大的肥皂把豆包洗得干干净净。",
        "keys": [
          {
            "w": "scrub",
            "p": "/skrʌb/",
            "zh": "擦洗"
          },
          {
            "w": "squeaky",
            "p": "/ˈskwiːki/",
            "zh": "吱吱叫的"
          },
          {
            "w": "giant",
            "p": "/ˈdʒaɪənt/",
            "zh": "巨大的"
          }
        ],
        "phrases": [
          {
            "en": "Soap Attack",
            "zh": "肥皂攻击"
          },
          {
            "en": "scrub scrub scrub",
            "zh": "擦呀擦呀擦"
          },
          {
            "en": "squeaky clean",
            "zh": "干干净净"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-8.jpg",
        "en": "\"My Robot Vacuum Tank is here!\" Mechanical arms stretched out, sweeping everywhere.",
        "zh": "\"我的扫地机器人战车来啦！\"机械臂伸出，四处清扫。",
        "keys": [
          {
            "w": "vacuum",
            "p": "/ˈvækjuːm/",
            "zh": "吸尘器"
          },
          {
            "w": "mechanical",
            "p": "/məˈkænɪkl/",
            "zh": "机械的"
          },
          {
            "w": "stretch",
            "p": "/stretʃ/",
            "zh": "伸展"
          }
        ],
        "phrases": [
          {
            "en": "Robot Vacuum Tank",
            "zh": "扫地机器人战车"
          },
          {
            "en": "Mechanical arms stretched out",
            "zh": "机械臂伸展开来"
          },
          {
            "en": "sweeping everywhere",
            "zh": "四处清扫"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-9.jpg",
        "en": "\"Robot Vacuum enters Angry Mode!\" The battle grew more and more intense.",
        "zh": "\"扫地机器人进入愤怒模式！\"对战越来越激烈。",
        "keys": [
          {
            "w": "intense",
            "p": "/ɪnˈtens/",
            "zh": "激烈的"
          },
          {
            "w": "dodge",
            "p": "/dɑːdʒ/",
            "zh": "闪避"
          },
          {
            "w": "flexible",
            "p": "/ˈfleksəbl/",
            "zh": "灵活的"
          }
        ],
        "phrases": [
          {
            "en": "enters Angry Mode",
            "zh": "进入愤怒模式"
          },
          {
            "en": "grew more and more intense",
            "zh": "变得越来越激烈"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-10.jpg",
        "en": "\"Look at my Flying Shield! Tracking bullets, right through Doubao's tank!\"",
        "zh": "\"看我的飞翔盾牌！追踪子弹，穿过豆包的坦克！\"",
        "keys": [
          {
            "w": "ultimate",
            "p": "/ˈʌltɪmət/",
            "zh": "终极的"
          },
          {
            "w": "tracking",
            "p": "/ˈtrækɪŋ/",
            "zh": "追踪的"
          },
          {
            "w": "unleash",
            "p": "/ʌnˈliːʃ/",
            "zh": "释放"
          }
        ],
        "phrases": [
          {
            "en": "my Flying Shield",
            "zh": "我的飞翔盾牌"
          },
          {
            "en": "Tracking bullets",
            "zh": "追踪子弹"
          },
          {
            "en": "right through Doubao's tank",
            "zh": "直接穿过豆包的坦克"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-11.jpg",
        "en": "\"Okay okay, you win this time!\" Doubao laughed. \"Let's still be best friends!\"",
        "zh": "\"好吧好吧，这次算你厉害！\"豆包笑着说。\"那我们还是做好朋友吧！\"",
        "keys": [
          {
            "w": "sparkle",
            "p": "/ˈspɑːrkl/",
            "zh": "闪耀"
          },
          {
            "w": "victory",
            "p": "/ˈvɪktəri/",
            "zh": "胜利"
          }
        ],
        "phrases": [
          {
            "en": "you win this time",
            "zh": "这次你赢了"
          },
          {
            "en": "Let's still be best friends",
            "zh": "我们还是做好朋友吧"
          },
          {
            "en": "laughed",
            "zh": "笑着说"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-12.jpg",
        "en": "A loud crash came from the kitchen! \"Oh no! Mom said we need to bake a cake today!\"",
        "zh": "厨房传来一声巨响！\"完了完了，妈妈说今天要做蛋糕！\"",
        "keys": [
          {
            "w": "crash",
            "p": "/kræʃ/",
            "zh": "巨响，碰撞声"
          },
          {
            "w": "bake",
            "p": "/beɪk/",
            "zh": "烤，烘焙"
          },
          {
            "w": "kitchen",
            "p": "/ˈkɪtʃɪn/",
            "zh": "厨房"
          }
        ],
        "phrases": [
          {
            "en": "a loud crash",
            "zh": "一声巨响"
          },
          {
            "en": "bake a cake",
            "zh": "做蛋糕"
          },
          {
            "en": "came from the kitchen",
            "zh": "从厨房传来"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-13.jpg",
        "en": "\"Doubao, switch to Kitchen Agent Mode!\" Doudou put on a chef's hat and apron.",
        "zh": "\"豆包，变成厨房特工模式！\"豆豆戴上厨师帽，系上围裙。",
        "keys": [
          {
            "w": "chef",
            "p": "/ʃef/",
            "zh": "厨师"
          },
          {
            "w": "apron",
            "p": "/ˈeɪprɑːn/",
            "zh": "围裙"
          },
          {
            "w": "agent",
            "p": "/ˈeɪdʒənt/",
            "zh": "特工"
          }
        ],
        "phrases": [
          {
            "en": "Kitchen Agent Mode",
            "zh": "厨房特工模式"
          },
          {
            "en": "put on a chef's hat",
            "zh": "戴上厨师帽"
          },
          {
            "en": "put on an apron",
            "zh": "系上围裙"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-14.jpg",
        "en": "Doudou accidentally flung the entire bag of flour into the air, like a winter wonderland!",
        "zh": "豆豆不小心把整袋面粉甩到了空中，像冬天的童话世界！",
        "keys": [
          {
            "w": "flour",
            "p": "/ˈflaʊər/",
            "zh": "面粉"
          },
          {
            "w": "accidentally",
            "p": "/ˌæksɪˈdentəli/",
            "zh": "不小心地"
          },
          {
            "w": "fling",
            "p": "/flɪŋ/",
            "zh": "甩，抛"
          }
        ],
        "phrases": [
          {
            "en": "accidentally flung the entire bag of flour into the air",
            "zh": "不小心把整袋面粉甩到了空中"
          },
          {
            "en": "like a winter wonderland",
            "zh": "像冬天的童话世界"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-15.jpg",
        "en": "The mixer spun too fast, sending batter flying everywhere like a fountain!",
        "zh": "搅拌器转得太快了，面糊像喷泉一样飞溅得到处都是！",
        "keys": [
          {
            "w": "mixer",
            "p": "/ˈmɪksər/",
            "zh": "搅拌器"
          },
          {
            "w": "batter",
            "p": "/ˈbætər/",
            "zh": "面糊"
          },
          {
            "w": "fountain",
            "p": "/ˈfaʊntən/",
            "zh": "喷泉"
          }
        ],
        "phrases": [
          {
            "en": "spun too fast",
            "zh": "转得太快了"
          },
          {
            "en": "sending batter flying everywhere",
            "zh": "让面糊飞溅得到处都是"
          },
          {
            "en": "like a fountain",
            "zh": "像喷泉一样"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-16.jpg",
        "en": "Doubao secretly added laundry detergent to the batter — giant colorful bubbles started flooding the kitchen!",
        "zh": "豆包偷偷往面糊里加了洗衣液——巨大的彩色泡泡开始淹没厨房！",
        "keys": [
          {
            "w": "detergent",
            "p": "/dɪˈtɜːrdʒənt/",
            "zh": "洗涤剂"
          },
          {
            "w": "secretly",
            "p": "/ˈsiːkrətli/",
            "zh": "偷偷地"
          },
          {
            "w": "flood",
            "p": "/flʌd/",
            "zh": "淹没"
          }
        ],
        "phrases": [
          {
            "en": "secretly added laundry detergent to the batter",
            "zh": "偷偷往面糊里加了洗衣液"
          },
          {
            "en": "giant colorful bubbles",
            "zh": "巨大的彩色泡泡"
          },
          {
            "en": "flooding the kitchen",
            "zh": "淹没厨房"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-17.jpg",
        "en": "The giant bubbles lifted Doudou and Doubao all the way to the ceiling!",
        "zh": "巨大的泡泡把豆豆和豆包一直飘到了天花板上！",
        "keys": [
          {
            "w": "lift",
            "p": "/lɪft/",
            "zh": "举起，飘起"
          },
          {
            "w": "ceiling",
            "p": "/ˈsiːlɪŋ/",
            "zh": "天花板"
          },
          {
            "w": "translucent",
            "p": "/trænsˈluːsnt/",
            "zh": "半透明的"
          }
        ],
        "phrases": [
          {
            "en": "giant bubbles",
            "zh": "巨大的泡泡"
          },
          {
            "en": "lifted Doudou and Doubao",
            "zh": "把豆豆和豆包托了起来"
          },
          {
            "en": "all the way to the ceiling",
            "zh": "一直到天花板上"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-18.jpg",
        "en": "\"Activate Anti-Bubble System!\" Doubao popped the bubbles one by one for a safe landing.",
        "zh": "\"启动反泡泡系统！\"豆包一个个戳破了泡泡，安全着陆。",
        "keys": [
          {
            "w": "activate",
            "p": "/ˈæktɪveɪt/",
            "zh": "激活"
          },
          {
            "w": "pop",
            "p": "/pɑːp/",
            "zh": "戳破"
          },
          {
            "w": "landing",
            "p": "/ˈlændɪŋ/",
            "zh": "着陆"
          }
        ],
        "phrases": [
          {
            "en": "Activate Anti-Bubble System",
            "zh": "启动反泡泡系统"
          },
          {
            "en": "popped the bubbles one by one",
            "zh": "一个个戳破泡泡"
          },
          {
            "en": "for a safe landing",
            "zh": "为了安全着陆"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-19.jpg",
        "en": "\"MY KITCHEN!!!\" Mom stood at the door, flames shooting from her eyes!",
        "zh": "\"我的厨房！！！\"妈妈站在门口，眼睛里冒着火！",
        "keys": [
          {
            "w": "devastated",
            "p": "/ˈdevəsteɪtɪd/",
            "zh": "一片狼藉的"
          },
          {
            "w": "cower",
            "p": "/ˈkaʊər/",
            "zh": "瑟瑟发抖"
          },
          {
            "w": "dramatic",
            "p": "/drəˈmætɪk/",
            "zh": "戏剧性的"
          }
        ],
        "phrases": [
          {
            "en": "stood at the door",
            "zh": "站在门口"
          },
          {
            "en": "flames shooting from her eyes",
            "zh": "眼睛里冒着火"
          },
          {
            "en": "My kitchen",
            "zh": "我的厨房"
          }
        ]
      },
      {
        "img": "images/robot-battle/page-20.jpg",
        "en": "Doubao transformed into a Super Cleaning Robot and polished the kitchen sparkling clean!",
        "zh": "豆包变成了超级清洁机器人，把厨房打扫得闪闪发亮！",
        "keys": [
          {
            "w": "transform",
            "p": "/trænsˈfɔːrm/",
            "zh": "变形，转变"
          },
          {
            "w": "polish",
            "p": "/ˈpɑːlɪʃ/",
            "zh": "擦亮"
          },
          {
            "w": "lopsided",
            "p": "/ˌlɑːpˈsaɪdɪd/",
            "zh": "歪歪扭扭的"
          }
        ],
        "phrases": [
          {
            "en": "transformed into a Super Cleaning Robot",
            "zh": "变成了超级清洁机器人"
          },
          {
            "en": "polished the kitchen",
            "zh": "把厨房打扫干净"
          },
          {
            "en": "sparkling clean",
            "zh": "闪闪发亮"
          }
        ]
      }
    ]
  },
  {
    "id": "brave-tank",
    "title": "The Brave Little Tank",
    "titleZh": "勇敢的小坦克",
    "category": "原创",
    "cover": "images/covers/cover-brave-tank.jpg",
    "pages": [
      {
        "img": "images/brave-tank/page-1.jpg",
        "en": "In a beautiful valley, there lived a brave little tank named Little Steel.",
        "zh": "在一片美丽的山谷里，住着一辆勇敢的小坦克，名叫小钢。",
        "keys": [
          {
            "w": "beautiful",
            "p": "/ˈbjuːtɪfəl/",
            "zh": "美丽的"
          },
          {
            "w": "valley",
            "p": "/ˈvæli/",
            "zh": "山谷"
          },
          {
            "w": "brave",
            "p": "/breɪv/",
            "zh": "勇敢的"
          },
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          },
          {
            "w": "named",
            "p": "/neɪmd/",
            "zh": "名叫"
          }
        ],
        "phrases": [
          {
            "en": "in a beautiful valley",
            "zh": "在一片美丽的山谷里"
          },
          {
            "en": "a brave little tank",
            "zh": "一辆勇敢的小坦克"
          },
          {
            "en": "named Little Steel",
            "zh": "名叫小钢"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-2.jpg",
        "en": "Welcome to Tank Town, where all kinds of tanks live happily together!",
        "zh": "欢迎来到坦克小镇，各种各样的坦克快乐地生活在这里！",
        "keys": [
          {
            "w": "welcome",
            "p": "/ˈwelkəm/",
            "zh": "欢迎"
          },
          {
            "w": "town",
            "p": "/taʊn/",
            "zh": "小镇"
          },
          {
            "w": "kinds",
            "p": "/kaɪndz/",
            "zh": "种类"
          },
          {
            "w": "live",
            "p": "/lɪv/",
            "zh": "生活"
          },
          {
            "w": "together",
            "p": "/təˈɡeðər/",
            "zh": "一起"
          }
        ],
        "phrases": [
          {
            "en": "Welcome to Tank Town",
            "zh": "欢迎来到坦克小镇"
          },
          {
            "en": "all kinds of tanks",
            "zh": "各种各样的坦克"
          },
          {
            "en": "live happily together",
            "zh": "快乐地生活在一起"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-3.jpg",
        "en": "Little Steel was the smallest tank in town, with a tiny cannon and a big heart.",
        "zh": "小钢是镇上最小的坦克，炮管短短的，却有一颗大大的心。",
        "keys": [
          {
            "w": "smallest",
            "p": "/ˈsmɔːlɪst/",
            "zh": "最小的"
          },
          {
            "w": "tiny",
            "p": "/ˈtaɪni/",
            "zh": "极小的"
          },
          {
            "w": "cannon",
            "p": "/ˈkænən/",
            "zh": "炮管"
          },
          {
            "w": "heart",
            "p": "/hɑːrt/",
            "zh": "心"
          },
          {
            "w": "big",
            "p": "/bɪɡ/",
            "zh": "大的"
          }
        ],
        "phrases": [
          {
            "en": "the smallest tank in town",
            "zh": "镇上最小的坦克"
          },
          {
            "en": "a tiny cannon",
            "zh": "小小的炮管"
          },
          {
            "en": "a big heart",
            "zh": "一颗大大的心"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-4.jpg",
        "en": "“I want to be a hero!” Little Steel practiced his brave face in the mirror every day.",
        "zh": "“我要成为英雄！”小钢每天都对着镜子练习勇敢的表情。",
        "keys": [
          {
            "w": "hero",
            "p": "/ˈhɪroʊ/",
            "zh": "英雄"
          },
          {
            "w": "practice",
            "p": "/ˈpræktɪs/",
            "zh": "练习"
          },
          {
            "w": "mirror",
            "p": "/ˈmɪrər/",
            "zh": "镜子"
          },
          {
            "w": "every day",
            "p": "/ˈevri deɪ/",
            "zh": "每天"
          },
          {
            "w": "brave",
            "p": "/breɪv/",
            "zh": "勇敢的"
          }
        ],
        "phrases": [
          {
            "en": "I want to be a hero",
            "zh": "我要成为英雄"
          },
          {
            "en": "practiced his brave face",
            "zh": "练习勇敢的表情"
          },
          {
            "en": "in the mirror every day",
            "zh": "每天对着镜子"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-5.jpg",
        "en": "Every year, Tank Town held the Brave Contest — a big adventure race!",
        "zh": "坦克小镇每年都会举办勇士大赛——一场大型冒险比赛！",
        "keys": [
          {
            "w": "year",
            "p": "/jɪr/",
            "zh": "年"
          },
          {
            "w": "held",
            "p": "/held/",
            "zh": "举办"
          },
          {
            "w": "contest",
            "p": "/ˈkɑːntest/",
            "zh": "比赛"
          },
          {
            "w": "adventure",
            "p": "/ədˈventʃər/",
            "zh": "冒险"
          },
          {
            "w": "race",
            "p": "/reɪs/",
            "zh": "竞赛"
          }
        ],
        "phrases": [
          {
            "en": "Every year",
            "zh": "每年"
          },
          {
            "en": "held the Brave Contest",
            "zh": "举办勇士大赛"
          },
          {
            "en": "a big adventure race",
            "zh": "一场大型冒险比赛"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-6.jpg",
        "en": "“I’m joining!” said Little Steel. The big tanks all laughed. “You? Little you?”",
        "zh": "“我要参加！”小钢说。大坦克们都笑了。“你？小小的你？”",
        "keys": [
          {
            "w": "join",
            "p": "/dʒɔɪn/",
            "zh": "参加"
          },
          {
            "w": "laughed",
            "p": "/læft/",
            "zh": "笑了"
          },
          {
            "w": "big",
            "p": "/bɪɡ/",
            "zh": "大的"
          },
          {
            "w": "little",
            "p": "/ˈlɪtl/",
            "zh": "小的"
          }
        ],
        "phrases": [
          {
            "en": "I’m joining",
            "zh": "我要参加"
          },
          {
            "en": "The big tanks all laughed",
            "zh": "大坦克们都笑了"
          },
          {
            "en": "Little you",
            "zh": "小小的你"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-7.jpg",
        "en": "Grandpa Armor patted Little Steel gently. “A true hero is not the biggest, but the bravest.”",
        "zh": "铁甲爷爷轻轻拍了拍小钢。“真正的英雄不是最大的，而是最勇敢的。”",
        "keys": [
          {
            "w": "grandpa",
            "p": "/ˈɡrændpɑː/",
            "zh": "爷爷"
          },
          {
            "w": "gently",
            "p": "/ˈdʒentli/",
            "zh": "轻轻地"
          },
          {
            "w": "true",
            "p": "/truː/",
            "zh": "真正的"
          },
          {
            "w": "biggest",
            "p": "/ˈbɪɡɪst/",
            "zh": "最大的"
          },
          {
            "w": "bravest",
            "p": "/ˈbreɪvɪst/",
            "zh": "最勇敢的"
          }
        ],
        "phrases": [
          {
            "en": "patted Little Steel gently",
            "zh": "轻轻拍了拍小钢"
          },
          {
            "en": "A true hero",
            "zh": "真正的英雄"
          },
          {
            "en": "not the biggest, but the bravest",
            "zh": "不是最大的，而是最勇敢的"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-8.jpg",
        "en": "Little Steel teamed up with his best friends — steady Big Iron and fast Lightning!",
        "zh": "小钢找到了最好的朋友——稳重的大铁和快速的闪电，组成了一支队伍！",
        "keys": [
          {
            "w": "teamed up",
            "p": "/tiːmd ʌp/",
            "zh": "组队；合作"
          },
          {
            "w": "steady",
            "p": "/ˈstedi/",
            "zh": "稳重的；稳定的"
          },
          {
            "w": "lightning",
            "p": "/ˈlaɪtnɪŋ/",
            "zh": "闪电"
          },
          {
            "w": "best friend",
            "p": "/best frend/",
            "zh": "最好的朋友"
          }
        ],
        "phrases": [
          {
            "en": "teamed up with his best friends",
            "zh": "和他最好的朋友组队"
          },
          {
            "en": "steady Big Iron",
            "zh": "稳重的大铁"
          },
          {
            "en": "fast Lightning",
            "zh": "快速的闪电"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-9.jpg",
        "en": "The race was on! Teams had to cross the desert, the forest, and climb the mountain!",
        "zh": "比赛开始了！队伍要穿越沙漠、森林，还要爬上山顶！",
        "keys": [
          {
            "w": "race",
            "p": "/reɪs/",
            "zh": "比赛"
          },
          {
            "w": "cross",
            "p": "/krɔːs/",
            "zh": "穿越；横过"
          },
          {
            "w": "desert",
            "p": "/ˈdezərt/",
            "zh": "沙漠"
          },
          {
            "w": "mountain",
            "p": "/ˈmaʊntən/",
            "zh": "高山"
          }
        ],
        "phrases": [
          {
            "en": "The race was on",
            "zh": "比赛开始了"
          },
          {
            "en": "cross the desert",
            "zh": "穿越沙漠"
          },
          {
            "en": "climb the mountain",
            "zh": "爬上山顶"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-10.jpg",
        "en": "The desert was so hot! Big Iron got stuck in the sand. “Don’t worry, I’ll help!”",
        "zh": "沙漠好热！大铁陷进沙子里了。“别急，我来帮你！”",
        "keys": [
          {
            "w": "hot",
            "p": "/hɑːt/",
            "zh": "炎热的"
          },
          {
            "w": "stuck",
            "p": "/stʌk/",
            "zh": "卡住的；陷住的"
          },
          {
            "w": "sand",
            "p": "/sænd/",
            "zh": "沙子"
          },
          {
            "w": "worry",
            "p": "/ˈwɜːri/",
            "zh": "担心"
          }
        ],
        "phrases": [
          {
            "en": "so hot",
            "zh": "非常热"
          },
          {
            "en": "got stuck in the sand",
            "zh": "陷进沙子里"
          },
          {
            "en": "Don’t worry, I’ll help",
            "zh": "别急，我来帮你"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-11.jpg",
        "en": "The forest was full of big trees. “Follow me!” Lightning zipped through the narrow paths.",
        "zh": "森林里到处是大树。“跟我来！”闪电灵活地穿过小路。",
        "keys": [
          {
            "w": "forest",
            "p": "/ˈfɔːrɪst/",
            "zh": "森林"
          },
          {
            "w": "follow",
            "p": "/ˈfɑːloʊ/",
            "zh": "跟随"
          },
          {
            "w": "zipped",
            "p": "/zɪpt/",
            "zh": "快速移动"
          },
          {
            "w": "narrow",
            "p": "/ˈnæroʊ/",
            "zh": "狭窄的"
          },
          {
            "w": "path",
            "p": "/pæθ/",
            "zh": "小路"
          }
        ],
        "phrases": [
          {
            "en": "full of big trees",
            "zh": "到处是大树"
          },
          {
            "en": "Follow me",
            "zh": "跟我来"
          },
          {
            "en": "zipped through the narrow paths",
            "zh": "快速穿过狭窄的小路"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-12.jpg",
        "en": "A wide river blocked the way! There was no bridge. “How do we cross?” everyone worried.",
        "zh": "一条大河挡住了去路！没有桥。“怎么过去呢？”大家都愁了。",
        "keys": [
          {
            "w": "river",
            "p": "/ˈrɪvər/",
            "zh": "河流"
          },
          {
            "w": "blocked",
            "p": "/blɑːkt/",
            "zh": "堵住了"
          },
          {
            "w": "bridge",
            "p": "/brɪdʒ/",
            "zh": "桥"
          },
          {
            "w": "cross",
            "p": "/krɔːs/",
            "zh": "穿过"
          },
          {
            "w": "worried",
            "p": "/ˈwɜːrid/",
            "zh": "担心的"
          }
        ],
        "phrases": [
          {
            "en": "blocked the way",
            "zh": "挡住了去路"
          },
          {
            "en": "There was no bridge",
            "zh": "没有桥"
          },
          {
            "en": "How do we cross?",
            "zh": "怎么过去呢？"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-13.jpg",
        "en": "“I have an idea!” Little Steel pointed at a fallen tree. “We can make a bridge!”",
        "zh": "“我有办法！”小钢指着倒下的大树。“我们可以搭一座桥！”",
        "keys": [
          {
            "w": "idea",
            "p": "/aɪˈdiːə/",
            "zh": "主意；想法"
          },
          {
            "w": "pointed",
            "p": "/ˈpɔɪntɪd/",
            "zh": "指着"
          },
          {
            "w": "fallen",
            "p": "/ˈfɔːlən/",
            "zh": "倒下的"
          },
          {
            "w": "tree",
            "p": "/triː/",
            "zh": "树"
          },
          {
            "w": "make",
            "p": "/meɪk/",
            "zh": "制作；搭建"
          }
        ],
        "phrases": [
          {
            "en": "I have an idea",
            "zh": "我有办法"
          },
          {
            "en": "pointed at a fallen tree",
            "zh": "指着倒下的大树"
          },
          {
            "en": "make a bridge",
            "zh": "搭一座桥"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-14.jpg",
        "en": "The log bridge held! Big Iron went first, then Lightning zoomed across. Little Steel crossed carefully and safely.",
        "zh": "树桥很稳！大铁先过，闪电忮地跑过，小钢小心翼翼地安全过了河。",
        "keys": [
          {
            "w": "log",
            "p": "/lɔːɡ/",
            "zh": "原木；木头"
          },
          {
            "w": "held",
            "p": "/held/",
            "zh": "支撑住；稳固"
          },
          {
            "w": "zoomed",
            "p": "/zuːmd/",
            "zh": "飞快移动"
          },
          {
            "w": "carefully",
            "p": "/ˈkerfəli/",
            "zh": "小心地"
          },
          {
            "w": "safely",
            "p": "/ˈseɪfli/",
            "zh": "安全地"
          }
        ],
        "phrases": [
          {
            "en": "The log bridge held",
            "zh": "树桥很稳"
          },
          {
            "en": "went first",
            "zh": "先过"
          },
          {
            "en": "crossed carefully and safely",
            "zh": "小心翼翼地安全过了河"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-15.jpg",
        "en": "Near the top, Red Thunder’s team blocked the path with big rocks! “You can’t win now!”",
        "zh": "快到山顶了！红雷的队伍用大石头挡住了路！“你们赢不了啦！”",
        "keys": [
          {
            "w": "top",
            "p": "/tɑːp/",
            "zh": "顶部；山顶"
          },
          {
            "w": "blocked",
            "p": "/blɑːkt/",
            "zh": "阻挡"
          },
          {
            "w": "path",
            "p": "/pæθ/",
            "zh": "道路；小路"
          },
          {
            "w": "rocks",
            "p": "/rɑːks/",
            "zh": "岩石"
          },
          {
            "w": "win",
            "p": "/wɪn/",
            "zh": "获胜"
          }
        ],
        "phrases": [
          {
            "en": "blocked the path with big rocks",
            "zh": "用大石头挡住了路"
          },
          {
            "en": "Near the top",
            "zh": "快到山顶了"
          },
          {
            "en": "You can’t win now",
            "zh": "你们赢不了啦"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-16.jpg",
        "en": "“There’s a gap under the rocks! I’m the smallest — I can squeeze through!” said Little Steel.",
        "zh": "“石头下面有缝隙！我最小，我可以钻过去！”小钢说。",
        "keys": [
          {
            "w": "gap",
            "p": "/ɡæp/",
            "zh": "缝隙；空隙"
          },
          {
            "w": "smallest",
            "p": "/ˈsmɔːləst/",
            "zh": "最小的"
          },
          {
            "w": "squeeze through",
            "p": "/skwiːz θruː/",
            "zh": "挤过去"
          },
          {
            "w": "under",
            "p": "/ˈʌndər/",
            "zh": "在……下面"
          }
        ],
        "phrases": [
          {
            "en": "There’s a gap under the rocks",
            "zh": "石头下面有缝隙"
          },
          {
            "en": "I’m the smallest",
            "zh": "我最小"
          },
          {
            "en": "squeeze through",
            "zh": "钻过去"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-17.jpg",
        "en": "Little Steel reached the top first and grabbed the golden flag! “We won!”",
        "zh": "小钢第一个到达山顶，拿到了金色旗帜！“我们赢了！”",
        "keys": [
          {
            "w": "reached",
            "p": "/riːtʃt/",
            "zh": "到达"
          },
          {
            "w": "grabbed",
            "p": "/ɡræbd/",
            "zh": "抓住"
          },
          {
            "w": "golden",
            "p": "/ˈɡoʊldən/",
            "zh": "金色的"
          },
          {
            "w": "flag",
            "p": "/flæɡ/",
            "zh": "旗帜"
          },
          {
            "w": "won",
            "p": "/wʌn/",
            "zh": "赢了"
          }
        ],
        "phrases": [
          {
            "en": "reached the top first",
            "zh": "第一个到达山顶"
          },
          {
            "en": "grabbed the golden flag",
            "zh": "拿到了金色旗帜"
          },
          {
            "en": "We won",
            "zh": "我们赢了"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-18.jpg",
        "en": "On the way down, Red Thunder was trapped in a landslide! “Help me!” he cried.",
        "zh": "下山路上，红雷被困在滑坡里！“救命！”他喊道。",
        "keys": [
          {
            "w": "trapped",
            "p": "/træpt/",
            "zh": "被困住的"
          },
          {
            "w": "landslide",
            "p": "/ˈlændslaɪd/",
            "zh": "滑坡；山体滑坡"
          },
          {
            "w": "cried",
            "p": "/kraɪd/",
            "zh": "喊；哭喊"
          }
        ],
        "phrases": [
          {
            "en": "On the way down",
            "zh": "下山路上"
          },
          {
            "en": "was trapped in a landslide",
            "zh": "被困在滑坡里"
          },
          {
            "en": "Help me",
            "zh": "救命"
          }
        ]
      },
      {
        "img": "images/brave-tank/page-19.jpg",
        "en": "Big Iron pulled with a rope, Lightning moved rocks, and Little Steel pushed from below. Together, they saved Red Thunder!",
        "zh": "大铁用绳子拉，闪电搬石头，小钢从下面顶。大家一起救出了红雷！",
        "keys": [
          {
            "w": "rope",
            "p": "/roʊp/",
            "zh": "绳子"
          },
          {
            "w": "moved",
            "p": "/muːvd/",
            "zh": "搬动；移动"
          },
          {
            "w": "pushed",
            "p": "/pʊʃt/",
            "zh": "推"
          },
          {
            "w": "together",
            "p": "/təˈɡeðər/",
            "zh": "一起"
          },
          {
            "w": "saved",
            "p": "/seɪvd/",
            "zh": "救出；拯救"
          }
        ],
        "phrases": [
          {
            "en": "pulled with a rope",
            "zh": "用绳子拉"
          },
          {
            "en": "moved rocks",
            "zh": "搬石头"
          },
          {
            "en": "Together, they saved Red Thunder",
            "zh": "大家一起救出了红雷"
          }
        ]
      }
    ]
  },
  {
    "id": "tank-1",
    "title": "Tank Battles Book 1",
    "titleZh": "坦克大战·第一册",
    "category": "我的世界",
    "cover": "images/covers/cover-tank-1.jpg",
    "pages": [
      {
        "img": "images/tank-1/page-1.jpg",
        "en": "In the world of blocks, a player had a big dream — to build tanks!",
        "zh": "在方块的世界里，有一个玩家有一个大梦想——造坦克！",
        "keys": [
          {
            "w": "world",
            "p": "/wɝːld/",
            "zh": "世界"
          },
          {
            "w": "player",
            "p": "/ˈpleɪər/",
            "zh": "玩家"
          },
          {
            "w": "dream",
            "p": "/driːm/",
            "zh": "梦想"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          },
          {
            "w": "tanks",
            "p": "/tæŋks/",
            "zh": "坦克"
          }
        ],
        "phrases": [
          {
            "en": "In the world of blocks",
            "zh": "在方块的世界里"
          },
          {
            "en": "had a big dream",
            "zh": "有一个大梦想"
          },
          {
            "en": "to build tanks",
            "zh": "造坦克"
          }
        ]
      },
      {
        "img": "images/tank-1/page-2.jpg",
        "en": "He worked for days, placing blocks one by one. First, a heavy tank with thick iron armor!",
        "zh": "他捣鼓了好几天，一个方块一个方块地拼。第一辆，是皮糙肉厚的重型坦克！",
        "keys": [
          {
            "w": "placing",
            "p": "/ˈpleɪsɪŋ/",
            "zh": "放置"
          },
          {
            "w": "heavy",
            "p": "/ˈhevi/",
            "zh": "沉重的；重型的"
          },
          {
            "w": "thick",
            "p": "/θɪk/",
            "zh": "厚的"
          },
          {
            "w": "iron",
            "p": "/ˈaɪərn/",
            "zh": "铁"
          },
          {
            "w": "armor",
            "p": "/ˈɑːrmər/",
            "zh": "装甲；护甲"
          }
        ],
        "phrases": [
          {
            "en": "worked for days",
            "zh": "捣鼓了好几天"
          },
          {
            "en": "placing blocks one by one",
            "zh": "一个方块一个方块地拼"
          },
          {
            "en": "thick iron armor",
            "zh": "厚重的铁甲"
          }
        ]
      },
      {
        "img": "images/tank-1/page-3.jpg",
        "en": "Then a light tank that zooms across the plains super fast!",
        "zh": "然后是一辆轻型坦克，在平原上跑起来飞快！",
        "keys": [
          {
            "w": "light",
            "p": "/laɪt/",
            "zh": "轻的"
          },
          {
            "w": "zooms",
            "p": "/zuːmz/",
            "zh": "疾驰；飞速移动"
          },
          {
            "w": "across",
            "p": "/əˈkrɔːs/",
            "zh": "穿过"
          },
          {
            "w": "plains",
            "p": "/pleɪnz/",
            "zh": "平原"
          },
          {
            "w": "fast",
            "p": "/fæst/",
            "zh": "快速地；快的"
          }
        ],
        "phrases": [
          {
            "en": "zooms across the plains",
            "zh": "飞快地穿过平原"
          },
          {
            "en": "light tank",
            "zh": "轻型坦克"
          }
        ]
      },
      {
        "img": "images/tank-1/page-4.jpg",
        "en": "And finally, a missile tank! When it fires, the missiles fly high with fiery trails!",
        "zh": "最后还造了一辆导弹坦克！发射的时候导弹拖着火焰飞出去，超炫酷！",
        "keys": [
          {
            "w": "finally",
            "p": "/ˈfaɪnəli/",
            "zh": "最后"
          },
          {
            "w": "missile",
            "p": "/ˈmɪsəl/",
            "zh": "导弹"
          },
          {
            "w": "fires",
            "p": "/ˈfaɪərz/",
            "zh": "发射"
          },
          {
            "w": "fiery",
            "p": "/ˈfaɪəri/",
            "zh": "火焰般的"
          },
          {
            "w": "trails",
            "p": "/treɪlz/",
            "zh": "尾迹；痕迹"
          }
        ],
        "phrases": [
          {
            "en": "missile tank",
            "zh": "导弹坦克"
          },
          {
            "en": "fiery trails",
            "zh": "火焰轨迹"
          },
          {
            "en": "fly high",
            "zh": "高高飞起"
          }
        ]
      },
      {
        "img": "images/tank-1/page-5.jpg",
        "en": "All three tanks lined up in the garage. The player could not wait any longer!",
        "zh": "三辆坦克停在车库里整整齐齐。他迫不及待要开出去浪了！",
        "keys": [
          {
            "w": "lined up",
            "p": "/laɪnd ʌp/",
            "zh": "排成一排"
          },
          {
            "w": "garage",
            "p": "/ɡəˈrɑːʒ/",
            "zh": "车库"
          },
          {
            "w": "player",
            "p": "/ˈpleɪər/",
            "zh": "玩家"
          },
          {
            "w": "wait",
            "p": "/weɪt/",
            "zh": "等待"
          },
          {
            "w": "longer",
            "p": "/ˈlɔːŋɡər/",
            "zh": "更久"
          }
        ],
        "phrases": [
          {
            "en": "lined up in the garage",
            "zh": "整齐地停在车库里"
          },
          {
            "en": "could not wait any longer",
            "zh": "迫不及待了"
          }
        ]
      },
      {
        "img": "images/tank-1/page-6.jpg",
        "en": "He drove the heavy tank straight to the monster nest. Zombies and skeletons were everywhere!",
        "zh": "他开着重型坦克直接冲到怪物窝旁边。到处都是僵尸和骷髅！",
        "keys": [
          {
            "w": "drove",
            "p": "/droʊv/",
            "zh": "驾驶"
          },
          {
            "w": "straight",
            "p": "/streɪt/",
            "zh": "径直地"
          },
          {
            "w": "monster",
            "p": "/ˈmɑːnstər/",
            "zh": "怪物"
          },
          {
            "w": "nest",
            "p": "/nest/",
            "zh": "巢穴"
          },
          {
            "w": "skeletons",
            "p": "/ˈskelɪtənz/",
            "zh": "骷髅"
          }
        ],
        "phrases": [
          {
            "en": "drove the heavy tank straight to",
            "zh": "开着重型坦克直奔"
          },
          {
            "en": "monster nest",
            "zh": "怪物窝"
          },
          {
            "en": "were everywhere",
            "zh": "到处都是"
          }
        ]
      },
      {
        "img": "images/tank-1/page-7.jpg",
        "en": "BOOM! One shot from the cannon and monsters went flying everywhere! So satisfying!",
        "zh": "轰！一炮下去怪物直接炸飞一大片，太解压了！",
        "keys": [
          {
            "w": "shot",
            "p": "/ʃɑːt/",
            "zh": "射击；一炮"
          },
          {
            "w": "cannon",
            "p": "/ˈkænən/",
            "zh": "大炮"
          },
          {
            "w": "monsters",
            "p": "/ˈmɑːnstərz/",
            "zh": "怪物"
          },
          {
            "w": "flying",
            "p": "/ˈflaɪɪŋ/",
            "zh": "飞；飞散"
          },
          {
            "w": "satisfying",
            "p": "/ˈsætɪsfaɪɪŋ/",
            "zh": "令人满足的；解压的"
          }
        ],
        "phrases": [
          {
            "en": "One shot from the cannon",
            "zh": "大炮一发射击"
          },
          {
            "en": "went flying everywhere",
            "zh": "被炸得到处飞"
          },
          {
            "en": "So satisfying",
            "zh": "太解压了"
          }
        ]
      },
      {
        "img": "images/tank-1/page-8.jpg",
        "en": "The heavy tank charged right through! Monsters could not get anywhere near it!",
        "zh": "坦克横冲直撞！怪物根本近不了身！",
        "keys": [
          {
            "w": "charged",
            "p": "/tʃɑːrdʒd/",
            "zh": "冲锋；猛冲"
          },
          {
            "w": "through",
            "p": "/θruː/",
            "zh": "穿过"
          },
          {
            "w": "monsters",
            "p": "/ˈmɑːnstərz/",
            "zh": "怪物"
          },
          {
            "w": "anywhere",
            "p": "/ˈeniwer/",
            "zh": "任何地方"
          },
          {
            "w": "near",
            "p": "/nɪr/",
            "zh": "靠近"
          }
        ],
        "phrases": [
          {
            "en": "charged right through",
            "zh": "直接冲了过去"
          },
          {
            "en": "could not get anywhere near it",
            "zh": "根本近不了身"
          }
        ]
      },
      {
        "img": "images/tank-1/page-9.jpg",
        "en": "In no time, the whole monster nest was cleared. The player cheered inside the tank!",
        "zh": "几下就把整片怪物窝清干净了，他在坦克里开心地欢呼！",
        "keys": [
          {
            "w": "monster",
            "p": "/ˈmɒnstər/",
            "zh": "怪物"
          },
          {
            "w": "nest",
            "p": "/nest/",
            "zh": "窝；巢穴"
          },
          {
            "w": "cleared",
            "p": "/klɪrd/",
            "zh": "清理干净的"
          },
          {
            "w": "player",
            "p": "/ˈpleɪər/",
            "zh": "玩家"
          },
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          }
        ],
        "phrases": [
          {
            "en": "In no time",
            "zh": "没过多久"
          },
          {
            "en": "was cleared",
            "zh": "被清理干净了"
          },
          {
            "en": "cheered inside the tank",
            "zh": "在坦克里欢呼"
          }
        ]
      },
      {
        "img": "images/tank-1/page-10.jpg",
        "en": "No more hiding with a sword! Tanks make everything so much easier!",
        "zh": "再也不用拿剑躲躲藏藏了！有坦克就是不一样！",
        "keys": [
          {
            "w": "hiding",
            "p": "/ˈhaɪdɪŋ/",
            "zh": "躲藏"
          },
          {
            "w": "sword",
            "p": "/sɔːrd/",
            "zh": "剑"
          },
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          },
          {
            "w": "easier",
            "p": "/ˈiːziər/",
            "zh": "更容易的"
          }
        ],
        "phrases": [
          {
            "en": "No more hiding with a sword",
            "zh": "再也不用拿着剑躲躲藏藏了"
          },
          {
            "en": "make everything so much easier",
            "zh": "让一切都变得轻松多了"
          }
        ]
      },
      {
        "img": "images/tank-1/page-11.jpg",
        "en": "Achievement unlocked! The player felt so proud. But this was just the beginning...",
        "zh": "成就感直接拉满！但这只是开始...",
        "keys": [
          {
            "w": "achievement",
            "p": "/əˈtʃiːvmənt/",
            "zh": "成就"
          },
          {
            "w": "unlocked",
            "p": "/ʌnˈlɒkt/",
            "zh": "解锁的"
          },
          {
            "w": "proud",
            "p": "/praʊd/",
            "zh": "自豪的"
          },
          {
            "w": "beginning",
            "p": "/bɪˈɡɪnɪŋ/",
            "zh": "开始"
          }
        ],
        "phrases": [
          {
            "en": "Achievement unlocked",
            "zh": "成就解锁"
          },
          {
            "en": "felt so proud",
            "zh": "感到非常自豪"
          },
          {
            "en": "just the beginning",
            "zh": "才刚刚开始"
          }
        ]
      }
    ]
  },
  {
    "id": "tank-2",
    "title": "Tank Battles Book 2",
    "titleZh": "坦克大战·第二册",
    "category": "我的世界",
    "cover": "images/covers/cover-tank-2.jpg",
    "pages": [
      {
        "img": "images/tank-2/page-1.jpg",
        "en": "The player built a special tank base with walls, turrets, and redstone cannons!",
        "zh": "他专门建了一个坦克阵地，有围墙、炮台，还有红石大炮！",
        "keys": [
          {
            "w": "built",
            "p": "/bɪlt/",
            "zh": "建造了"
          },
          {
            "w": "special",
            "p": "/ˈspeʃəl/",
            "zh": "特别的"
          },
          {
            "w": "base",
            "p": "/beɪs/",
            "zh": "基地；阵地"
          },
          {
            "w": "turrets",
            "p": "/ˈtɜːrɪts/",
            "zh": "炮塔"
          },
          {
            "w": "cannons",
            "p": "/ˈkænənz/",
            "zh": "大炮"
          }
        ],
        "phrases": [
          {
            "en": "special tank base",
            "zh": "特殊的坦克基地"
          },
          {
            "en": "with walls, turrets, and redstone cannons",
            "zh": "有围墙、炮台和红石大炮"
          }
        ]
      },
      {
        "img": "images/tank-2/page-2.jpg",
        "en": "All the tanks were parked neatly. Heavy, light, and missile tanks ready for action!",
        "zh": "所有坦克整整齐齐停在里面。重型、轻型、导弹坦克随时待命！",
        "keys": [
          {
            "w": "parked",
            "p": "/pɑːrkt/",
            "zh": "停放的"
          },
          {
            "w": "neatly",
            "p": "/ˈniːtli/",
            "zh": "整齐地"
          },
          {
            "w": "heavy",
            "p": "/ˈhevi/",
            "zh": "重型的；沉重的"
          },
          {
            "w": "light",
            "p": "/laɪt/",
            "zh": "轻型的"
          },
          {
            "w": "missile",
            "p": "/ˈmɪsaɪl/",
            "zh": "导弹"
          }
        ],
        "phrases": [
          {
            "en": "parked neatly",
            "zh": "整整齐齐停放"
          },
          {
            "en": "ready for action",
            "zh": "随时待命"
          },
          {
            "en": "missile tanks",
            "zh": "导弹坦克"
          }
        ]
      },
      {
        "img": "images/tank-2/page-3.jpg",
        "en": "Redstone cannons surrounded the base to stop any monsters from sneaking in!",
        "zh": "阵地周围摆满了红石大炮，防止怪物偷袭！",
        "keys": [
          {
            "w": "surrounded",
            "p": "/səˈraʊndɪd/",
            "zh": "包围"
          },
          {
            "w": "base",
            "p": "/beɪs/",
            "zh": "基地；阵地"
          },
          {
            "w": "stop",
            "p": "/stɒp/",
            "zh": "阻止"
          },
          {
            "w": "monsters",
            "p": "/ˈmɒnstərz/",
            "zh": "怪物们"
          },
          {
            "w": "sneaking",
            "p": "/ˈsniːkɪŋ/",
            "zh": "偷偷潜入"
          }
        ],
        "phrases": [
          {
            "en": "surrounded the base",
            "zh": "包围了基地"
          },
          {
            "en": "stop any monsters from sneaking in",
            "zh": "防止怪物偷偷潜入"
          },
          {
            "en": "Redstone cannons",
            "zh": "红石大炮"
          }
        ]
      },
      {
        "img": "images/tank-2/page-4.jpg",
        "en": "Night fell. A huge wave of monsters appeared from the darkness!",
        "zh": "夜幕降临。一大群怪物从黑暗中涌了出来！",
        "keys": [
          {
            "w": "night",
            "p": "/naɪt/",
            "zh": "夜晚"
          },
          {
            "w": "huge",
            "p": "/hjuːdʒ/",
            "zh": "巨大的"
          },
          {
            "w": "wave",
            "p": "/weɪv/",
            "zh": "一大群；波浪"
          },
          {
            "w": "appeared",
            "p": "/əˈpɪrd/",
            "zh": "出现了"
          },
          {
            "w": "darkness",
            "p": "/ˈdɑːrknəs/",
            "zh": "黑暗"
          }
        ],
        "phrases": [
          {
            "en": "Night fell",
            "zh": "夜幕降临"
          },
          {
            "en": "a huge wave of monsters",
            "zh": "一大群怪物"
          },
          {
            "en": "appeared from the darkness",
            "zh": "从黑暗中出现"
          }
        ]
      },
      {
        "img": "images/tank-2/page-5.jpg",
        "en": "Among them were Warden Sentinels — big, tough, and super scary!",
        "zh": "怪物里面还有几只循声守卫，又大又凶，超可怕！",
        "keys": [
          {
            "w": "among",
            "p": "/əˈmʌŋ/",
            "zh": "在……中间"
          },
          {
            "w": "Warden",
            "p": "/ˈwɔːrdən/",
            "zh": "守卫者"
          },
          {
            "w": "Sentinels",
            "p": "/ˈsentɪnlz/",
            "zh": "哨兵；守卫"
          },
          {
            "w": "tough",
            "p": "/tʌf/",
            "zh": "强悍的"
          },
          {
            "w": "scary",
            "p": "/ˈskeri/",
            "zh": "可怕的"
          }
        ],
        "phrases": [
          {
            "en": "Among them were",
            "zh": "其中还有"
          },
          {
            "en": "big, tough, and super scary",
            "zh": "又大又强壮，还超级可怕"
          },
          {
            "en": "Warden Sentinels",
            "zh": "循声守卫"
          }
        ]
      },
      {
        "img": "images/tank-2/page-6.jpg",
        "en": "The player jumped into the nearest tank and started the engine!",
        "zh": "他赶紧跳进最近的坦克，发动引擎！",
        "keys": [
          {
            "w": "jumped",
            "p": "/dʒʌmpt/",
            "zh": "跳进"
          },
          {
            "w": "nearest",
            "p": "/ˈnɪrɪst/",
            "zh": "最近的"
          },
          {
            "w": "started",
            "p": "/ˈstɑːrtɪd/",
            "zh": "启动了"
          },
          {
            "w": "engine",
            "p": "/ˈendʒɪn/",
            "zh": "引擎"
          }
        ],
        "phrases": [
          {
            "en": "jumped into the nearest tank",
            "zh": "跳进最近的坦克"
          },
          {
            "en": "started the engine",
            "zh": "发动引擎"
          }
        ]
      },
      {
        "img": "images/tank-2/page-7.jpg",
        "en": "Luckily, Iron Golems were nearby and joined the battle!",
        "zh": "还好旁边有铁傀儡，马上加入战斗！",
        "keys": [
          {
            "w": "luckily",
            "p": "/ˈlʌkɪli/",
            "zh": "幸运地"
          },
          {
            "w": "Iron",
            "p": "/ˈaɪərn/",
            "zh": "铁"
          },
          {
            "w": "Golems",
            "p": "/ˈɡoʊləmz/",
            "zh": "傀儡"
          },
          {
            "w": "nearby",
            "p": "/ˌnɪrˈbaɪ/",
            "zh": "附近的"
          },
          {
            "w": "battle",
            "p": "/ˈbætl/",
            "zh": "战斗"
          }
        ],
        "phrases": [
          {
            "en": "Luckily",
            "zh": "幸运的是"
          },
          {
            "en": "were nearby",
            "zh": "就在附近"
          },
          {
            "en": "joined the battle",
            "zh": "加入战斗"
          }
        ]
      },
      {
        "img": "images/tank-2/page-8.jpg",
        "en": "Iron Golem blocked the front, taking all the hits. What a tough guy!",
        "zh": "铁傀儡在前面扛伤害，什么打过来都不怕。太硬了！",
        "keys": [
          {
            "w": "blocked",
            "p": "/blɒkt/",
            "zh": "阻挡"
          },
          {
            "w": "front",
            "p": "/frʌnt/",
            "zh": "前面"
          },
          {
            "w": "hits",
            "p": "/hɪts/",
            "zh": "攻击；打击"
          },
          {
            "w": "tough",
            "p": "/tʌf/",
            "zh": "坚硬的；强悍的"
          }
        ],
        "phrases": [
          {
            "en": "blocked the front",
            "zh": "挡在前面"
          },
          {
            "en": "taking all the hits",
            "zh": "扛下所有攻击"
          },
          {
            "en": "What a tough guy",
            "zh": "真是个硬汉"
          }
        ]
      },
      {
        "img": "images/tank-2/page-9.jpg",
        "en": "The Warden Sentinel had too much health! Normal cannonballs barely scratched it!",
        "zh": "循声守卫血太厚，普通炮弹根本打不动！",
        "keys": [
          {
            "w": "health",
            "p": "/helθ/",
            "zh": "生命值；健康"
          },
          {
            "w": "normal",
            "p": "/ˈnɔːr.məl/",
            "zh": "普通的"
          },
          {
            "w": "cannonballs",
            "p": "/ˈkæn.ən.bɔːlz/",
            "zh": "炮弹"
          },
          {
            "w": "scratched",
            "p": "/skrætʃt/",
            "zh": "刮伤；轻微伤到"
          }
        ],
        "phrases": [
          {
            "en": "too much health",
            "zh": "血量太厚"
          },
          {
            "en": "Normal cannonballs",
            "zh": "普通炮弹"
          },
          {
            "en": "barely scratched it",
            "zh": "几乎伤不到它"
          }
        ]
      },
      {
        "img": "images/tank-2/page-10.jpg",
        "en": "Quick, switch to the missile tank! One missile took away half its health!",
        "zh": "赶紧换导弹坦克！一发导弹下去直接打掉大半血！",
        "keys": [
          {
            "w": "switch",
            "p": "/swɪtʃ/",
            "zh": "切换"
          },
          {
            "w": "missile",
            "p": "/ˈmɪs.aɪl/",
            "zh": "导弹"
          },
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          },
          {
            "w": "half",
            "p": "/hæf/",
            "zh": "一半"
          }
        ],
        "phrases": [
          {
            "en": "switch to the missile tank",
            "zh": "换成导弹坦克"
          },
          {
            "en": "took away half its health",
            "zh": "打掉了它一半血量"
          },
          {
            "en": "One missile",
            "zh": "一发导弹"
          }
        ]
      },
      {
        "img": "images/tank-2/page-11.jpg",
        "en": "Monsters were surrounding them! Time to back up and keep shooting!",
        "zh": "差点被怪物包围！赶紧操控坦克边退边射击！",
        "keys": [
          {
            "w": "monsters",
            "p": "/ˈmɒn.stərz/",
            "zh": "怪物"
          },
          {
            "w": "surrounding",
            "p": "/səˈraʊn.dɪŋ/",
            "zh": "包围"
          },
          {
            "w": "back up",
            "p": "/bæk ʌp/",
            "zh": "后退"
          },
          {
            "w": "shooting",
            "p": "/ˈʃuː.tɪŋ/",
            "zh": "射击"
          }
        ],
        "phrases": [
          {
            "en": "were surrounding them",
            "zh": "正在包围他们"
          },
          {
            "en": "back up and keep shooting",
            "zh": "边后退边继续射击"
          },
          {
            "en": "Time to back up",
            "zh": "该后退了"
          }
        ]
      },
      {
        "img": "images/tank-2/page-12.jpg",
        "en": "Thanks to the tank's thick armor, it could handle the damage while fighting back!",
        "zh": "靠着坦克厚厚的装甲硬扛伤害，一边扛一边打回去！",
        "keys": [
          {
            "w": "thick",
            "p": "/θɪk/",
            "zh": "厚的"
          },
          {
            "w": "armor",
            "p": "/ˈɑːr.mər/",
            "zh": "装甲"
          },
          {
            "w": "handle",
            "p": "/ˈhæn.dəl/",
            "zh": "承受；应对"
          },
          {
            "w": "damage",
            "p": "/ˈdæm.ɪdʒ/",
            "zh": "伤害"
          }
        ],
        "phrases": [
          {
            "en": "thick armor",
            "zh": "厚厚的装甲"
          },
          {
            "en": "handle the damage",
            "zh": "扛住伤害"
          },
          {
            "en": "fight back",
            "zh": "打回去"
          }
        ]
      },
      {
        "img": "images/tank-2/page-13.jpg",
        "en": "The Iron Golem and tank worked together perfectly. The base was saved!",
        "zh": "铁傀儡和坦克完美配合，终于守住了阵地！",
        "keys": [
          {
            "w": "worked together",
            "p": "/wɜːrkt təˈɡeð.ər/",
            "zh": "合作"
          },
          {
            "w": "perfectly",
            "p": "/ˈpɜːr.fɪkt.li/",
            "zh": "完美地"
          },
          {
            "w": "base",
            "p": "/beɪs/",
            "zh": "基地；阵地"
          },
          {
            "w": "saved",
            "p": "/seɪvd/",
            "zh": "拯救；保住"
          }
        ],
        "phrases": [
          {
            "en": "worked together perfectly",
            "zh": "完美配合"
          },
          {
            "en": "The base was saved",
            "zh": "守住了阵地"
          }
        ]
      }
    ]
  },
  {
    "id": "tank-3",
    "title": "Tank Battles Book 3",
    "titleZh": "坦克大战·第三册",
    "category": "我的世界",
    "cover": "images/covers/cover-tank-3.jpg",
    "pages": [
      {
        "img": "images/tank-3/page-1.jpg",
        "en": "Regular monsters were too easy now. It was time for a real boss fight!",
        "zh": "普通怪物太简单了，是时候挑战真正的BOSS了！",
        "keys": [
          {
            "w": "regular",
            "p": "/ˈreɡ.jə.lər/",
            "zh": "普通的"
          },
          {
            "w": "easy",
            "p": "/ˈiː.zi/",
            "zh": "容易的"
          },
          {
            "w": "boss",
            "p": "/bɒs/",
            "zh": "BOSS；首领"
          },
          {
            "w": "fight",
            "p": "/faɪt/",
            "zh": "战斗"
          }
        ],
        "phrases": [
          {
            "en": "Regular monsters",
            "zh": "普通怪物"
          },
          {
            "en": "too easy now",
            "zh": "现在太简单了"
          },
          {
            "en": "a real boss fight",
            "zh": "真正的BOSS战"
          }
        ]
      },
      {
        "img": "images/tank-3/page-2.jpg",
        "en": "Soul sand and skulls arranged. The Wither was summoned! Three heads, super powerful!",
        "zh": "摆好灵魂沙和骷髅头，凋零被召唤出来了！三个脑袋，超级强大！",
        "keys": [
          {
            "w": "arranged",
            "p": "/əˈreɪndʒd/",
            "zh": "摆放好；排列好"
          },
          {
            "w": "summoned",
            "p": "/ˈsʌm.ənd/",
            "zh": "召唤"
          },
          {
            "w": "heads",
            "p": "/hedz/",
            "zh": "头；脑袋"
          },
          {
            "w": "powerful",
            "p": "/ˈpaʊ.ər.fəl/",
            "zh": "强大的"
          }
        ],
        "phrases": [
          {
            "en": "arranged soul sand and skulls",
            "zh": "摆好灵魂沙和骷髅头"
          },
          {
            "en": "The Wither was summoned",
            "zh": "凋零被召唤出来了"
          },
          {
            "en": "super powerful",
            "zh": "超级强大"
          }
        ]
      },
      {
        "img": "images/tank-3/page-3.jpg",
        "en": "One tank was not enough! The Wither's bombs were too powerful!",
        "zh": "一辆坦克根本不够！凋零的炸弹太猛了！",
        "keys": [
          {
            "w": "enough",
            "p": "/ɪˈnʌf/",
            "zh": "足够的"
          },
          {
            "w": "bombs",
            "p": "/bɒmz/",
            "zh": "炸弹"
          },
          {
            "w": "powerful",
            "p": "/ˈpaʊ.ər.fəl/",
            "zh": "强大的"
          },
          {
            "w": "Wither",
            "p": "/ˈwɪð.ər/",
            "zh": "凋零"
          }
        ],
        "phrases": [
          {
            "en": "not enough",
            "zh": "根本不够"
          },
          {
            "en": "The Wither's bombs",
            "zh": "凋零的炸弹"
          },
          {
            "en": "too powerful",
            "zh": "太猛了"
          }
        ]
      },
      {
        "img": "images/tank-3/page-4.jpg",
        "en": "The tank was losing health fast. Run back to the base!",
        "zh": "坦克掉血超快，差点被打爆！赶紧跑回阵地！",
        "keys": [
          {
            "w": "losing",
            "p": "/ˈluː.zɪŋ/",
            "zh": "失去；减少"
          },
          {
            "w": "health",
            "p": "/helθ/",
            "zh": "生命值；健康"
          },
          {
            "w": "fast",
            "p": "/fæst/",
            "zh": "快速地"
          },
          {
            "w": "base",
            "p": "/beɪs/",
            "zh": "基地；阵地"
          }
        ],
        "phrases": [
          {
            "en": "losing health fast",
            "zh": "掉血超快"
          },
          {
            "en": "Run back to the base",
            "zh": "赶紧跑回阵地"
          }
        ]
      },
      {
        "img": "images/tank-3/page-5.jpg",
        "en": "Time to bring out ALL the tanks! A tank army was forming!",
        "zh": "把所有造好的坦克都开出来，组成坦克大军！",
        "keys": [
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          },
          {
            "w": "army",
            "p": "/ˈɑːrmi/",
            "zh": "军队；大军"
          },
          {
            "w": "bring out",
            "p": "/brɪŋ aʊt/",
            "zh": "拿出；开出来"
          },
          {
            "w": "form",
            "p": "/fɔːrm/",
            "zh": "组成；形成"
          }
        ],
        "phrases": [
          {
            "en": "bring out ALL the tanks",
            "zh": "把所有坦克都开出来"
          },
          {
            "en": "A tank army was forming",
            "zh": "组成坦克大军"
          }
        ]
      },
      {
        "img": "images/tank-3/page-6.jpg",
        "en": "The tank army surrounded the Wither. Every tank aimed and fired!",
        "zh": "坦克大军把凋零围了起来，所有坦克一起开火！",
        "keys": [
          {
            "w": "surround",
            "p": "/səˈraʊnd/",
            "zh": "包围"
          },
          {
            "w": "aim",
            "p": "/eɪm/",
            "zh": "瞄准"
          },
          {
            "w": "fire",
            "p": "/ˈfaɪər/",
            "zh": "开火；发射"
          },
          {
            "w": "Wither",
            "p": "/ˈwɪðər/",
            "zh": "凋零"
          }
        ],
        "phrases": [
          {
            "en": "surrounded the Wither",
            "zh": "把凋零围了起来"
          },
          {
            "en": "aimed and fired",
            "zh": "瞄准并开火"
          },
          {
            "en": "Every tank",
            "zh": "所有坦克"
          }
        ]
      },
      {
        "img": "images/tank-3/page-7.jpg",
        "en": "Heavy tanks blocked the front, absorbing the Wither's devastating blows!",
        "zh": "重型坦克在正面扛伤害，挡住凋零的猛烈攻击！",
        "keys": [
          {
            "w": "heavy",
            "p": "/ˈhevi/",
            "zh": "重的；重型的"
          },
          {
            "w": "block",
            "p": "/blɑːk/",
            "zh": "阻挡"
          },
          {
            "w": "absorb",
            "p": "/əbˈzɔːrb/",
            "zh": "吸收；承受"
          },
          {
            "w": "devastating",
            "p": "/ˈdevəsteɪtɪŋ/",
            "zh": "毁灭性的"
          },
          {
            "w": "blow",
            "p": "/bloʊ/",
            "zh": "打击；攻击"
          }
        ],
        "phrases": [
          {
            "en": "Heavy tanks",
            "zh": "重型坦克"
          },
          {
            "en": "blocked the front",
            "zh": "挡在正面"
          },
          {
            "en": "absorbing devastating blows",
            "zh": "扛住猛烈攻击"
          }
        ]
      },
      {
        "img": "images/tank-3/page-8.jpg",
        "en": "Light tanks zoomed around the sides, hitting the Wither from every angle!",
        "zh": "轻型坦克绕到侧面，从各个角度攻击凋零！",
        "keys": [
          {
            "w": "light",
            "p": "/laɪt/",
            "zh": "轻的；轻型的"
          },
          {
            "w": "zoom",
            "p": "/zuːm/",
            "zh": "快速移动"
          },
          {
            "w": "side",
            "p": "/saɪd/",
            "zh": "侧面"
          },
          {
            "w": "angle",
            "p": "/ˈæŋɡəl/",
            "zh": "角度"
          },
          {
            "w": "hit",
            "p": "/hɪt/",
            "zh": "攻击；击中"
          }
        ],
        "phrases": [
          {
            "en": "Light tanks",
            "zh": "轻型坦克"
          },
          {
            "en": "zoomed around the sides",
            "zh": "绕到侧面快速移动"
          },
          {
            "en": "from every angle",
            "zh": "从各个角度"
          }
        ]
      },
      {
        "img": "images/tank-3/page-9.jpg",
        "en": "Missile tanks fired from far away. Each missile dealt massive damage!",
        "zh": "导弹坦克在远处发射，每发导弹都造成巨大伤害！",
        "keys": [
          {
            "w": "missile",
            "p": "/ˈmɪsəl/",
            "zh": "导弹"
          },
          {
            "w": "far away",
            "p": "/fɑːr əˈweɪ/",
            "zh": "远处"
          },
          {
            "w": "deal",
            "p": "/diːl/",
            "zh": "造成（伤害）"
          },
          {
            "w": "massive",
            "p": "/ˈmæsɪv/",
            "zh": "巨大的"
          },
          {
            "w": "damage",
            "p": "/ˈdæmɪdʒ/",
            "zh": "伤害"
          }
        ],
        "phrases": [
          {
            "en": "fired from far away",
            "zh": "在远处发射"
          },
          {
            "en": "massive damage",
            "zh": "巨大伤害"
          }
        ]
      },
      {
        "img": "images/tank-3/page-10.jpg",
        "en": "Even the redstone cannons joined in! Boom boom boom!",
        "zh": "连红石大炮也不停开火！轰轰轰！",
        "keys": [
          {
            "w": "redstone",
            "p": "/ˈredstoʊn/",
            "zh": "红石"
          },
          {
            "w": "cannon",
            "p": "/ˈkænən/",
            "zh": "大炮"
          },
          {
            "w": "join in",
            "p": "/dʒɔɪn ɪn/",
            "zh": "加入"
          },
          {
            "w": "boom",
            "p": "/buːm/",
            "zh": "轰响；爆炸声"
          }
        ],
        "phrases": [
          {
            "en": "joined in",
            "zh": "也加入进来"
          },
          {
            "en": "redstone cannons",
            "zh": "红石大炮"
          },
          {
            "en": "Boom boom boom",
            "zh": "轰轰轰"
          }
        ]
      },
      {
        "img": "images/tank-3/page-11.jpg",
        "en": "After a long hard fight, the Wither finally fell! Victory!",
        "zh": "打了好久好久，凋零终于被打败了！胜利！",
        "keys": [
          {
            "w": "fight",
            "p": "/faɪt/",
            "zh": "战斗"
          },
          {
            "w": "finally",
            "p": "/ˈfaɪnəli/",
            "zh": "终于"
          },
          {
            "w": "fall",
            "p": "/fɔːl/",
            "zh": "倒下；失败"
          },
          {
            "w": "victory",
            "p": "/ˈvɪktəri/",
            "zh": "胜利"
          }
        ],
        "phrases": [
          {
            "en": "a long hard fight",
            "zh": "漫长而艰难的战斗"
          },
          {
            "en": "finally fell",
            "zh": "终于倒下了"
          },
          {
            "en": "Victory",
            "zh": "胜利"
          }
        ]
      },
      {
        "img": "images/tank-3/page-12.jpg",
        "en": "A Nether Star dropped! Time to build something even more amazing!",
        "zh": "掉落了下界之星！是时候造更厉害的东西了！",
        "keys": [
          {
            "w": "Nether Star",
            "p": "/ˈneðər stɑːr/",
            "zh": "下界之星"
          },
          {
            "w": "drop",
            "p": "/drɑːp/",
            "zh": "掉落"
          },
          {
            "w": "build",
            "p": "/bɪld/",
            "zh": "建造"
          },
          {
            "w": "amazing",
            "p": "/əˈmeɪzɪŋ/",
            "zh": "令人惊叹的"
          }
        ],
        "phrases": [
          {
            "en": "Nether Star dropped",
            "zh": "掉落了下界之星"
          },
          {
            "en": "Time to build",
            "zh": "是时候建造了"
          },
          {
            "en": "even more amazing",
            "zh": "更厉害的"
          }
        ]
      },
      {
        "img": "images/tank-3/page-13.jpg",
        "en": "Next up: a super tank with triple-layer armor that nothing can destroy!",
        "zh": "下一步：造一辆三层加厚护甲的超级坦克，谁也打不动！",
        "keys": [
          {
            "w": "super",
            "p": "/ˈsuːpər/",
            "zh": "超级的"
          },
          {
            "w": "triple-layer",
            "p": "/ˌtrɪpəl ˈleɪər/",
            "zh": "三层的"
          },
          {
            "w": "armor",
            "p": "/ˈɑːrmər/",
            "zh": "护甲；装甲"
          },
          {
            "w": "destroy",
            "p": "/dɪˈstrɔɪ/",
            "zh": "摧毁"
          }
        ],
        "phrases": [
          {
            "en": "Next up",
            "zh": "下一步"
          },
          {
            "en": "super tank",
            "zh": "超级坦克"
          },
          {
            "en": "triple-layer armor",
            "zh": "三层护甲"
          }
        ]
      }
    ]
  },
  {
    "id": "sugarcane-tank",
    "title": "Sugarcane Tank Battle",
    "titleZh": "甘蔗坦克大作战",
    "category": "我的世界",
    "cover": "images/covers/cover-sugarcane-tank.jpg",
    "pages": [
      {
        "img": "images/sugarcane-tank/page-1.jpg",
        "en": "In a small village surrounded by green hills, there lived a brave little kid who loved building things.",
        "zh": "在一个被青山环绕的小村庄里，住着一个爱动手做东西的勇敢小孩。",
        "keys": [
          {
            "w": "village",
            "p": "/ˈvɪlɪdʒ/",
            "zh": "村庄，青山，勇敢，动手"
          }
        ],
        "phrases": [
          {
            "en": "surrounded by green hills",
            "zh": "被青山环绕"
          },
          {
            "en": "a brave little kid",
            "zh": "一个勇敢的小孩"
          },
          {
            "en": "loved building things",
            "zh": "喜欢动手做东西"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-2.jpg",
        "en": "Inside the workshop, the kid had been building something amazing — a tank made entirely of vegetables!",
        "zh": "工坊里，小孩一直在秘密制造一件了不起的东西——一辆全蔬菜做的坦克！",
        "keys": [
          {
            "w": "workshop",
            "p": "/ˈwɜːrkʃɑːp/",
            "zh": "工坊，秘密，坦克，蔬菜"
          }
        ],
        "phrases": [
          {
            "en": "Inside the workshop",
            "zh": "在工坊里"
          },
          {
            "en": "building something amazing",
            "zh": "在制造了不起的东西"
          },
          {
            "en": "made entirely of vegetables",
            "zh": "完全由蔬菜制成"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-3.jpg",
        "en": "The kid attached a hollow sugarcane tube as the cannon barrel. It smelled sweet like candy!",
        "zh": "小孩把一根空心甘蔗装上去当炮管，闻起来像糖果一样甜！",
        "keys": [
          {
            "w": "sugarcane",
            "p": "/ˈʃʊɡərkeɪn/",
            "zh": "甘蔗，炮管，甜，糖果"
          }
        ],
        "phrases": [
          {
            "en": "hollow sugarcane tube",
            "zh": "空心甘蔗管"
          },
          {
            "en": "cannon barrel",
            "zh": "炮管"
          },
          {
            "en": "smelled sweet like candy",
            "zh": "闻起来像糖果一样甜"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-4.jpg",
        "en": "Round brown potato mines were loaded into the back of the tank, each coated in sticky golden syrup.",
        "zh": "圆圆的棕色土豆雷被装进坦克后面的弹仓，每个都裹着黏糊糊的金色糖浆。",
        "keys": [
          {
            "w": "potato",
            "p": "/pəˈteɪtoʊ/",
            "zh": "土豆，地雷，糖浆，金色"
          }
        ],
        "phrases": [
          {
            "en": "potato mines",
            "zh": "土豆雷"
          },
          {
            "en": "loaded into the back of the tank",
            "zh": "装进坦克后部"
          },
          {
            "en": "coated in sticky golden syrup",
            "zh": "裹着黏糊糊的金色糖浆"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-5.jpg",
        "en": "Little Milk got a special tiny harness with pockets for smoke bombs. The puppy wagged its tail excitedly!",
        "zh": "小牛奶穿上了一件特别的小背心，口袋里装着烟雾弹，小狗兴奋地摇着尾巴！",
        "keys": [
          {
            "w": "puppy",
            "p": "/ˈpʌpi/",
            "zh": "小狗，背心，烟雾弹，兴奋"
          }
        ],
        "phrases": [
          {
            "en": "special tiny harness",
            "zh": "特别的小背心"
          },
          {
            "en": "pockets for smoke bombs",
            "zh": "装烟雾弹的口袋"
          },
          {
            "en": "wagged its tail excitedly",
            "zh": "兴奋地摇着尾巴"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-6.jpg",
        "en": "The biggest surprise — hollow pumpkin shells filled with magic growing seeds that could multiply forever!",
        "zh": "最大的秘密武器——掏空的南瓜壳里装着魔法生长种子，能无限分裂繁殖！",
        "keys": [
          {
            "w": "pumpkin",
            "p": "/ˈpʌmpkɪn/",
            "zh": "南瓜，炮弹，魔法种子，分裂"
          }
        ],
        "phrases": [
          {
            "en": "hollow pumpkin shells",
            "zh": "掏空的南瓜壳"
          },
          {
            "en": "magic growing seeds",
            "zh": "魔法生长种子"
          },
          {
            "en": "multiply forever",
            "zh": "无限分裂繁殖"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-7.jpg",
        "en": "The sugarcane tank was finally complete! It had a sugarcane cannon, potato mine launcher, and pumpkin bomb bay.",
        "zh": "甘蔗坦克终于完工了！它有甘蔗炮、土豆雷发射器和南瓜弹仓。",
        "keys": [
          {
            "w": "complete",
            "p": "/kəmˈpliːt/",
            "zh": "完工，准备，坦克，武器"
          }
        ],
        "phrases": [
          {
            "en": "sugarcane tank",
            "zh": "甘蔗坦克"
          },
          {
            "en": "sugarcane cannon",
            "zh": "甘蔗炮"
          },
          {
            "en": "pumpkin bomb bay",
            "zh": "南瓜弹仓"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-8.jpg",
        "en": "Suddenly, a loud alarm echoed through the village — enemy tanks were approaching from the east!",
        "zh": "突然，村庄响起了警报——敌人的坦克正从东边逼近！",
        "keys": [
          {
            "w": "alarm",
            "p": "/əˈlɑːrm/",
            "zh": "警报，敌人，坦克，逼近"
          }
        ],
        "phrases": [
          {
            "en": "a loud alarm echoed through the village",
            "zh": "警报声响彻整个村庄"
          },
          {
            "en": "enemy tanks were approaching",
            "zh": "敌人的坦克正在逼近"
          },
          {
            "en": "from the east",
            "zh": "从东边"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-9.jpg",
        "en": "Ten big steel tanks rolled into the village, crushing fences and scaring everyone away.",
        "zh": "十辆钢铁大坦克开进了村庄，压坏了栅栏，把大家都吓跑了。",
        "keys": [
          {
            "w": "enemy",
            "p": "/ˈɛnəmi/",
            "zh": "敌人，入侵，钢铁坦克，可怕"
          }
        ],
        "phrases": [
          {
            "en": "big steel tanks",
            "zh": "巨大的钢铁坦克"
          },
          {
            "en": "rolled into the village",
            "zh": "开进了村庄"
          },
          {
            "en": "scaring everyone away",
            "zh": "把大家都吓跑了"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-10.jpg",
        "en": "'It's time to protect our home!' The kid jumped into the sugarcane tank and started the engine.",
        "zh": "\"是时候保护我们的家了！\"小孩跳进甘蔗坦克，发动了引擎。",
        "keys": [
          {
            "w": "charge",
            "p": "/tʃɑːrdʒ/",
            "zh": "出击，保护，引擎，勇敢"
          }
        ],
        "phrases": [
          {
            "en": "protect our home",
            "zh": "保护我们的家"
          },
          {
            "en": "jumped into the sugarcane tank",
            "zh": "跳进甘蔗坦克"
          },
          {
            "en": "started the engine",
            "zh": "发动了引擎"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-11.jpg",
        "en": "BANG! The sugarcane cannon fired a sticky syrup bomb that splattered all over the first enemy tank's tracks!",
        "zh": "砰！甘蔗炮发射了一发黏糊糊的糖浆弹，糊住了第一辆敌人坦克的履带！",
        "keys": [
          {
            "w": "syrup",
            "p": "/ˈsɪrəp/",
            "zh": "糖浆，发射，黏糊糊，履带"
          }
        ],
        "phrases": [
          {
            "en": "sticky syrup bomb",
            "zh": "黏糊糊的糖浆弹"
          },
          {
            "en": "fired a sticky syrup bomb",
            "zh": "发射了一发黏糊糊的糖浆弹"
          },
          {
            "en": "enemy tank's tracks",
            "zh": "敌人坦克的履带"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-12.jpg",
        "en": "The kid pressed the rapid fire button and syrup bombs flew everywhere, gluing enemy tanks to the ground!",
        "zh": "小孩按下连射按钮，糖浆弹四处飞射，把敌人坦克全部粘在了地上！",
        "keys": [
          {
            "w": "rapid",
            "p": "/ˈræpɪd/",
            "zh": "快速的"
          },
          {
            "w": "syrup",
            "p": "/ˈsɪrəp/",
            "zh": "糖浆"
          },
          {
            "w": "bomb",
            "p": "/bɑːm/",
            "zh": "炸弹"
          },
          {
            "w": "button",
            "p": "/ˈbʌtn/",
            "zh": "按钮"
          },
          {
            "w": "glue",
            "p": "/ɡluː/",
            "zh": "粘住"
          }
        ],
        "phrases": [
          {
            "en": "rapid fire button",
            "zh": "连射按钮"
          },
          {
            "en": "syrup bombs flew everywhere",
            "zh": "糖浆弹四处飞射"
          },
          {
            "en": "gluing enemy tanks to the ground",
            "zh": "把敌人坦克粘在地上"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-13.jpg",
        "en": "Little Milk sneaked out with a pink smoke bomb in mouth, running between the enemy tanks' legs!",
        "zh": "小牛奶叼着粉色烟雾弹偷偷溜出去，在敌人坦克腿之间跑来跑去！",
        "keys": [
          {
            "w": "puppy",
            "p": "/ˈpʌpi/",
            "zh": "小狗，偷偷，烟雾弹，敌人"
          }
        ],
        "phrases": [
          {
            "en": "pink smoke bomb",
            "zh": "粉色烟雾弹"
          },
          {
            "en": "sneaked out",
            "zh": "偷偷溜出去"
          },
          {
            "en": "between the enemy tanks' legs",
            "zh": "在敌人坦克腿之间"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-14.jpg",
        "en": "BOOM! The smoke bomb exploded filling the battlefield with thick pink smoke. The enemies couldn't see anything!",
        "zh": "砰！烟雾弹炸开了，战场上到处都是粉色烟雾，敌人什么也看不见！",
        "keys": [
          {
            "w": "smoke",
            "p": "/smoʊk/",
            "zh": "烟雾，粉色，爆炸，看不见"
          }
        ],
        "phrases": [
          {
            "en": "thick pink smoke",
            "zh": "浓厚的粉色烟雾"
          },
          {
            "en": "filled the battlefield",
            "zh": "笼罩了整个战场"
          },
          {
            "en": "couldn't see anything",
            "zh": "什么也看不见"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-15.jpg",
        "en": "A huge enemy commander tank, three times bigger than the others, pushed through the smoke!",
        "zh": "一辆比其他坦克大三倍的敌人队长坦克冲破了烟雾！",
        "keys": [
          {
            "w": "commander",
            "p": "/commander/",
            "zh": "队长，巨型坦克，冲破，烟雾"
          }
        ],
        "phrases": [
          {
            "en": "enemy commander tank",
            "zh": "敌人队长坦克"
          },
          {
            "en": "three times bigger than the others",
            "zh": "比其他坦克大三倍"
          },
          {
            "en": "pushed through the smoke",
            "zh": "冲破了烟雾"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-16.jpg",
        "en": "'Time for the pumpkin bomb!' The kid pressed the big red button on the dashboard.",
        "zh": "\"该用南瓜弹了！\"小孩按下仪表盘上的大红色按钮。",
        "keys": [
          {
            "w": "pumpkin",
            "p": "/ˈpʌmpkɪn/",
            "zh": "南瓜，炮弹，红色按钮，终极"
          }
        ],
        "phrases": [
          {
            "en": "pumpkin bomb",
            "zh": "南瓜弹"
          },
          {
            "en": "pressed the big red button",
            "zh": "按下大红色按钮"
          },
          {
            "en": "on the dashboard",
            "zh": "在仪表盘上"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-17.jpg",
        "en": "WHOOSH! A giant glowing pumpkin bomb launched from the cannon, spinning through the sky!",
        "zh": "嗖——一颗发光的巨大南瓜炮弹从炮管飞出，旋转着飞向天空！",
        "keys": [
          {
            "w": "pumpkin",
            "p": "/ˈpʌmpkɪn/",
            "zh": "南瓜，发射，旋转，天空"
          }
        ],
        "phrases": [
          {
            "en": "giant glowing pumpkin bomb",
            "zh": "巨大发光的南瓜炮弹"
          },
          {
            "en": "launched from the cannon",
            "zh": "从炮管发射出去"
          },
          {
            "en": "spinning through the sky",
            "zh": "旋转着飞向天空"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-18.jpg",
        "en": "The pumpkin bomb hit the commander tank and exploded into a giant pumpkin shell, trapping it completely!",
        "zh": "南瓜弹命中了队长坦克，炸开变成巨大的南瓜壳，把敌人整个包住了！",
        "keys": [
          {
            "w": "pumpkin",
            "p": "/ˈpʌmpkɪn/",
            "zh": "南瓜"
          },
          {
            "w": "commander",
            "p": "/kəˈmændər/",
            "zh": "指挥官"
          },
          {
            "w": "explode",
            "p": "/ɪkˈsploʊd/",
            "zh": "爆炸"
          },
          {
            "w": "shell",
            "p": "/ʃel/",
            "zh": "壳"
          },
          {
            "w": "trap",
            "p": "/træp/",
            "zh": "困住"
          }
        ],
        "phrases": [
          {
            "en": "hit the commander tank",
            "zh": "命中了队长坦克"
          },
          {
            "en": "exploded into a giant pumpkin shell",
            "zh": "炸开变成巨大的南瓜壳"
          },
          {
            "en": "trapping it completely",
            "zh": "把它完全困住"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-19.jpg",
        "en": "Then something incredible happened — the magic seeds sprouted! One pumpkin became ten, then a hundred, then thousands!",
        "zh": "然后不可思议的事情发生了——魔法种子发芽了！一个南瓜变十个，再变一百个，再变几千个！",
        "keys": [
          {
            "w": "magic",
            "p": "/ˈmædʒɪk/",
            "zh": "魔法，发芽，分裂，成千上万"
          }
        ],
        "phrases": [
          {
            "en": "something incredible happened",
            "zh": "不可思议的事情发生了"
          },
          {
            "en": "magic seeds sprouted",
            "zh": "魔法种子发芽了"
          },
          {
            "en": "then thousands",
            "zh": "然后变成几千个"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-20.jpg",
        "en": "Thick green pumpkin vines grew faster than lightning, wrapping around every enemy tank, truck, and weapon!",
        "zh": "粗壮的绿色南瓜藤蔓长得比闪电还快，缠住了每一个敌人坦克、卡车和武器！",
        "keys": [
          {
            "w": "vines",
            "p": "/vaɪnz/",
            "zh": "藤蔓，缠绕，闪电，敌人"
          }
        ],
        "phrases": [
          {
            "en": "thick green pumpkin vines",
            "zh": "粗壮的绿色南瓜藤蔓"
          },
          {
            "en": "faster than lightning",
            "zh": "比闪电还快"
          },
          {
            "en": "wrapping around every enemy tank",
            "zh": "缠住每一辆敌人坦克"
          }
        ]
      },
      {
        "img": "images/sugarcane-tank/page-21.jpg",
        "en": "The enemy commander waved a white flag from inside the pumpkin. 'We give up! Your vegetables are too powerful!'",
        "zh": "敌人队长从南瓜壳里伸出白旗投降：\"我们认输了！你们的蔬菜太厉害了！\"",
        "keys": [
          {
            "w": "surrender",
            "p": "/səˈrɛndər/",
            "zh": "投降，白旗，蔬菜，厉害"
          }
        ],
        "phrases": [
          {
            "en": "waved a white flag",
            "zh": "挥舞白旗"
          },
          {
            "en": "We give up",
            "zh": "我们认输了"
          },
          {
            "en": "too powerful",
            "zh": "太厉害了"
          }
        ]
      }
    ]
  },
  {
    "id": "invisible-tank",
    "title": "Invisible Tank Mission",
    "titleZh": "隐身战车奇袭",
    "category": "我的世界",
    "cover": "images/covers/cover-invisible-tank.jpg",
    "pages": [
      {
        "img": "images/invisible-tank/page-1.jpg",
        "en": "A mysterious black tank that can turn invisible, ready for a secret mission.",
        "zh": "一辆神秘的黑色坦克，可以变得完全透明，准备执行秘密任务。",
        "keys": [
          {
            "w": "mysterious",
            "p": "/mɪˈstɪriəs/",
            "zh": "神秘的"
          },
          {
            "w": "black",
            "p": "/blæk/",
            "zh": "黑色的"
          },
          {
            "w": "invisible",
            "p": "/ɪnˈvɪzəbəl/",
            "zh": "隐形的；看不见的"
          },
          {
            "w": "secret",
            "p": "/ˈsiːkrət/",
            "zh": "秘密的"
          },
          {
            "w": "mission",
            "p": "/ˈmɪʃən/",
            "zh": "任务"
          }
        ],
        "phrases": [
          {
            "en": "mysterious black tank",
            "zh": "神秘的黑色坦克"
          },
          {
            "en": "turn invisible",
            "zh": "变得隐形"
          },
          {
            "en": "secret mission",
            "zh": "秘密任务"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-2.jpg",
        "en": "Sneaky enemy trucks steal the glowing energy crystals hidden on the mountain top.",
        "zh": "偷偷摸摸的敌人卡车把藏在山顶的发光能量水晶偷走了！",
        "keys": [
          {
            "w": "sneaky",
            "p": "/ˈsniːki/",
            "zh": "鬼鬼祟祟的"
          },
          {
            "w": "enemy",
            "p": "/ˈenəmi/",
            "zh": "敌人"
          },
          {
            "w": "glowing",
            "p": "/ˈɡloʊɪŋ/",
            "zh": "发光的"
          },
          {
            "w": "energy",
            "p": "/ˈenərdʒi/",
            "zh": "能量"
          },
          {
            "w": "crystal",
            "p": "/ˈkrɪstl/",
            "zh": "水晶"
          }
        ],
        "phrases": [
          {
            "en": "sneaky enemy trucks",
            "zh": "偷偷摸摸的敌人卡车"
          },
          {
            "en": "glowing energy crystals",
            "zh": "发光的能量水晶"
          },
          {
            "en": "hidden on the mountain top",
            "zh": "藏在山顶上"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-3.jpg",
        "en": "The kid presses the glowing blue button — whoosh! The tank becomes completely invisible!",
        "zh": "小孩按下发光的蓝色按钮——嗖！坦克变得完全透明了！",
        "keys": [
          {
            "w": "press",
            "p": "/pres/",
            "zh": "按下"
          },
          {
            "w": "button",
            "p": "/ˈbʌtn/",
            "zh": "按钮"
          },
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          },
          {
            "w": "completely",
            "p": "/kəmˈpliːtli/",
            "zh": "完全地"
          },
          {
            "w": "invisible",
            "p": "/ɪnˈvɪzəbl/",
            "zh": "隐形的"
          }
        ],
        "phrases": [
          {
            "en": "glowing blue button",
            "zh": "发光的蓝色按钮"
          },
          {
            "en": "becomes completely invisible",
            "zh": "变得完全透明"
          },
          {
            "en": "the kid presses",
            "zh": "小孩按下"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-4.jpg",
        "en": "The invisible tank follows the enemy convoy silently, not even the guard dogs notice it.",
        "zh": "隐身坦克悄悄跟在敌人车队后面，连敌人的侦查狗都没发现。",
        "keys": [
          {
            "w": "follows",
            "p": "/ˈfɑːloʊz/",
            "zh": "跟随"
          },
          {
            "w": "convoy",
            "p": "/ˈkɑːnvɔɪ/",
            "zh": "车队"
          },
          {
            "w": "silently",
            "p": "/ˈsaɪləntli/",
            "zh": "悄无声息地"
          },
          {
            "w": "guard",
            "p": "/ɡɑːrd/",
            "zh": "守卫"
          },
          {
            "w": "notice",
            "p": "/ˈnoʊtɪs/",
            "zh": "注意到"
          }
        ],
        "phrases": [
          {
            "en": "follows the enemy convoy silently",
            "zh": "悄悄跟着敌人车队"
          },
          {
            "en": "invisible tank",
            "zh": "隐身坦克"
          },
          {
            "en": "not even the guard dogs notice it",
            "zh": "连警戒狗都没发现它"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-5.jpg",
        "en": "The invisible tank reaches the enemy camp. There are guards everywhere and tall watchtowers!",
        "zh": "隐身坦克到达敌人营地。到处都是卫兵和高高的瞭望塔！",
        "keys": [
          {
            "w": "reaches",
            "p": "/ˈriːtʃɪz/",
            "zh": "到达"
          },
          {
            "w": "camp",
            "p": "/kæmp/",
            "zh": "营地"
          },
          {
            "w": "guards",
            "p": "/ɡɑːrdz/",
            "zh": "卫兵"
          },
          {
            "w": "everywhere",
            "p": "/ˈevriwer/",
            "zh": "到处"
          },
          {
            "w": "watchtower",
            "p": "/ˈwɑːtʃtaʊər/",
            "zh": "瞭望塔"
          }
        ],
        "phrases": [
          {
            "en": "reaches the enemy camp",
            "zh": "到达敌人营地"
          },
          {
            "en": "guards everywhere",
            "zh": "到处都是卫兵"
          },
          {
            "en": "tall watchtowers",
            "zh": "高高的瞭望塔"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-6.jpg",
        "en": "Twenty fake tanks appear around the enemy camp and the soldiers panic in confusion!",
        "zh": "敌人营地周围突然出现了二十辆一模一样的幻影坦克，士兵们吓得四处张望！",
        "keys": [
          {
            "w": "fake",
            "p": "/feɪk/",
            "zh": "假的"
          },
          {
            "w": "appear",
            "p": "/əˈpɪr/",
            "zh": "出现"
          },
          {
            "w": "soldier",
            "p": "/ˈsoʊldʒər/",
            "zh": "士兵"
          },
          {
            "w": "panic",
            "p": "/ˈpænɪk/",
            "zh": "惊慌"
          },
          {
            "w": "confusion",
            "p": "/kənˈfjuːʒn/",
            "zh": "混乱"
          }
        ],
        "phrases": [
          {
            "en": "appear around the enemy camp",
            "zh": "出现在敌人营地周围"
          },
          {
            "en": "panic in confusion",
            "zh": "惊慌失措，乱成一团"
          },
          {
            "en": "fake tanks",
            "zh": "幻影坦克"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-7.jpg",
        "en": "Tiny fly-sized cameras zip over to the enemy tanks and send back live video to the kid's screen.",
        "zh": "像苍蝇一样小的微型摄像头飞到敌人坦克上，把画面传回屏幕。",
        "keys": [
          {
            "w": "tiny",
            "p": "/ˈtaɪni/",
            "zh": "极小的"
          },
          {
            "w": "camera",
            "p": "/ˈkæmərə/",
            "zh": "摄像头"
          },
          {
            "w": "zip",
            "p": "/zɪp/",
            "zh": "飞速移动"
          },
          {
            "w": "enemy",
            "p": "/ˈenəmi/",
            "zh": "敌人"
          },
          {
            "w": "screen",
            "p": "/skriːn/",
            "zh": "屏幕"
          }
        ],
        "phrases": [
          {
            "en": "fly-sized cameras",
            "zh": "像苍蝇一样小的摄像头"
          },
          {
            "en": "send back live video",
            "zh": "传回实时画面"
          },
          {
            "en": "enemy tanks",
            "zh": "敌人坦克"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-8.jpg",
        "en": "The kid throws a special dart that flies straight into the enemy truck's energy core!",
        "zh": "小孩投出飞镖，精准命中敌人卡车的能量核心！",
        "keys": [
          {
            "w": "special",
            "p": "/ˈspeʃl/",
            "zh": "特殊的"
          },
          {
            "w": "dart",
            "p": "/dɑːrt/",
            "zh": "飞镖"
          },
          {
            "w": "straight",
            "p": "/streɪt/",
            "zh": "笔直地"
          },
          {
            "w": "truck",
            "p": "/trʌk/",
            "zh": "卡车"
          },
          {
            "w": "core",
            "p": "/kɔːr/",
            "zh": "核心"
          }
        ],
        "phrases": [
          {
            "en": "throws a special dart",
            "zh": "投出一枚特殊飞镖"
          },
          {
            "en": "flies straight into",
            "zh": "径直飞入"
          },
          {
            "en": "energy core",
            "zh": "能量核心"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-9.jpg",
        "en": "The dart hits the core — BOOM! The enemy truck's power shuts down completely!",
        "zh": "飞镖命中核心——轰！敌人卡车的动力彻底熄火了！",
        "keys": [
          {
            "w": "hits",
            "p": "/hɪts/",
            "zh": "击中"
          },
          {
            "w": "power",
            "p": "/ˈpaʊər/",
            "zh": "动力"
          },
          {
            "w": "shuts",
            "p": "/ʃʌts/",
            "zh": "关闭"
          },
          {
            "w": "down",
            "p": "/daʊn/",
            "zh": "停止"
          },
          {
            "w": "completely",
            "p": "/kəmˈpliːtli/",
            "zh": "彻底地"
          }
        ],
        "phrases": [
          {
            "en": "hits the core",
            "zh": "击中核心"
          },
          {
            "en": "power shuts down completely",
            "zh": "动力彻底关闭"
          },
          {
            "en": "enemy truck",
            "zh": "敌人卡车"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-10.jpg",
        "en": "A magnetic claw reaches out and zips the crystal boxes right into the invisible tank.",
        "zh": "磁力抓取爪伸出，嗖地一下把能量水晶吸了过来！",
        "keys": [
          {
            "w": "magnetic",
            "p": "/mæɡˈnetɪk/",
            "zh": "磁性的"
          },
          {
            "w": "claw",
            "p": "/klɔː/",
            "zh": "爪"
          },
          {
            "w": "reaches",
            "p": "/ˈriːtʃɪz/",
            "zh": "伸出"
          },
          {
            "w": "crystal",
            "p": "/ˈkrɪstl/",
            "zh": "水晶"
          },
          {
            "w": "boxes",
            "p": "/ˈbɑːksɪz/",
            "zh": "盒子"
          }
        ],
        "phrases": [
          {
            "en": "A magnetic claw reaches out",
            "zh": "一只磁力爪伸出来"
          },
          {
            "en": "zips the crystal boxes",
            "zh": "嗖地一下抓走水晶箱"
          },
          {
            "en": "invisible tank",
            "zh": "隐身坦克"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-11.jpg",
        "en": "The magnetic claw grabs the second crystal too! Two down, one to go!",
        "zh": "磁力爪又抓到了第二个水晶！两个到手，还差一个！",
        "keys": [
          {
            "w": "grabs",
            "p": "/ɡræbz/",
            "zh": "抓住"
          },
          {
            "w": "second",
            "p": "/ˈsekənd/",
            "zh": "第二的"
          },
          {
            "w": "crystal",
            "p": "/ˈkrɪstl/",
            "zh": "水晶"
          },
          {
            "w": "down",
            "p": "/daʊn/",
            "zh": "搞定"
          },
          {
            "w": "go",
            "p": "/ɡoʊ/",
            "zh": "剩下"
          }
        ],
        "phrases": [
          {
            "en": "grabs the second crystal",
            "zh": "抓住第二个水晶"
          },
          {
            "en": "Two down, one to go",
            "zh": "两个到手，还差一个"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-12.jpg",
        "en": "The last enemy truck spots the floating crystals and sounds the alarm! WHEE-OOH WHEE-OOH!",
        "zh": "最后一辆敌人卡车发现了飘浮的水晶，拉响了警报！呜——呜——！",
        "keys": [
          {
            "w": "enemy",
            "p": "/ˈenəmi/",
            "zh": "敌人"
          },
          {
            "w": "truck",
            "p": "/trʌk/",
            "zh": "卡车"
          },
          {
            "w": "spots",
            "p": "/spɒts/",
            "zh": "发现"
          },
          {
            "w": "floating",
            "p": "/ˈfləʊtɪŋ/",
            "zh": "漂浮的"
          },
          {
            "w": "alarm",
            "p": "/əˈlɑːm/",
            "zh": "警报"
          }
        ],
        "phrases": [
          {
            "en": "spots the floating crystals",
            "zh": "发现漂浮的水晶"
          },
          {
            "en": "sounds the alarm",
            "zh": "拉响警报"
          },
          {
            "en": "last enemy truck",
            "zh": "最后一辆敌人卡车"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-13.jpg",
        "en": "The enemy truck chases the invisible tank through the forest at full speed!",
        "zh": "敌人卡车全速追赶隐身坦克，在森林里疯狂穿梭！",
        "keys": [
          {
            "w": "chases",
            "p": "/ˈtʃeɪsɪz/",
            "zh": "追赶"
          },
          {
            "w": "invisible",
            "p": "/ɪnˈvɪzəbl/",
            "zh": "隐形的"
          },
          {
            "w": "tank",
            "p": "/tæŋk/",
            "zh": "坦克"
          },
          {
            "w": "forest",
            "p": "/ˈfɒrɪst/",
            "zh": "森林"
          },
          {
            "w": "speed",
            "p": "/spiːd/",
            "zh": "速度"
          }
        ],
        "phrases": [
          {
            "en": "chases the invisible tank",
            "zh": "追赶隐身坦克"
          },
          {
            "en": "through the forest",
            "zh": "穿过森林"
          },
          {
            "en": "at full speed",
            "zh": "全速地"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-14.jpg",
        "en": "An explosion sends Doubao the robot flying higher than the whole galaxy!",
        "zh": "一阵爆炸把豆包炸飞了，豆包飞得比银河系还高！",
        "keys": [
          {
            "w": "explosion",
            "p": "/ɪkˈspləʊʒən/",
            "zh": "爆炸"
          },
          {
            "w": "robot",
            "p": "/ˈrəʊbɒt/",
            "zh": "机器人"
          },
          {
            "w": "flying",
            "p": "/ˈflaɪɪŋ/",
            "zh": "飞行；飞起来"
          },
          {
            "w": "higher",
            "p": "/ˈhaɪə(r)/",
            "zh": "更高地"
          },
          {
            "w": "galaxy",
            "p": "/ˈɡæləksi/",
            "zh": "银河系；星系"
          }
        ],
        "phrases": [
          {
            "en": "An explosion sends Doubao flying",
            "zh": "一场爆炸把豆包炸飞了"
          },
          {
            "en": "higher than the whole galaxy",
            "zh": "比整个银河系还高"
          },
          {
            "en": "Doubao the robot",
            "zh": "机器人豆包"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-15.jpg",
        "en": "Doubao falls back down like a shooting star, yelling all the way!",
        "zh": "豆包像流星一样落下来，一路尖叫！",
        "keys": [
          {
            "w": "falls",
            "p": "/fɔːlz/",
            "zh": "掉落"
          },
          {
            "w": "shooting",
            "p": "/ˈʃuːtɪŋ/",
            "zh": "飞射的"
          },
          {
            "w": "star",
            "p": "/stɑː(r)/",
            "zh": "星星；流星"
          },
          {
            "w": "yelling",
            "p": "/ˈjelɪŋ/",
            "zh": "大叫"
          },
          {
            "w": "down",
            "p": "/daʊn/",
            "zh": "向下"
          }
        ],
        "phrases": [
          {
            "en": "falls back down like a shooting star",
            "zh": "像流星一样落下来"
          },
          {
            "en": "yelling all the way",
            "zh": "一路尖叫"
          },
          {
            "en": "like a shooting star",
            "zh": "像流星一样"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-16.jpg",
        "en": "Doubao lands on the ground with a big BUMP and says 'Ouch, my bottom hurts!'",
        "zh": "豆包砰地坐到地上，哎呀，屁股好疼啊，摔了个屁股蹲！",
        "keys": [
          {
            "w": "lands",
            "p": "/lændz/",
            "zh": "着地"
          },
          {
            "w": "ground",
            "p": "/ɡraʊnd/",
            "zh": "地面"
          },
          {
            "w": "bump",
            "p": "/bʌmp/",
            "zh": "砰的一声"
          },
          {
            "w": "ouch",
            "p": "/aʊtʃ/",
            "zh": "哎哟"
          },
          {
            "w": "bottom",
            "p": "/ˈbɒtəm/",
            "zh": "屁股；底部"
          }
        ],
        "phrases": [
          {
            "en": "lands on the ground with a big BUMP",
            "zh": "砰地坐到地上"
          },
          {
            "en": "my bottom hurts",
            "zh": "我的屁股好疼"
          },
          {
            "en": "falls on his bottom",
            "zh": "摔了个屁股蹲"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-17.jpg",
        "en": "Doubao accidentally falls right in front of the enemy truck! The truck screeches to a halt!",
        "zh": "豆包正好摔在敌人卡车前面！卡车急刹车停了下来！",
        "keys": [
          {
            "w": "accidentally",
            "p": "/ˌæksɪˈdentəli/",
            "zh": "意外地"
          },
          {
            "w": "front",
            "p": "/frʌnt/",
            "zh": "前面"
          },
          {
            "w": "screeches",
            "p": "/skriːtʃɪz/",
            "zh": "发出刺耳刹车声"
          },
          {
            "w": "halt",
            "p": "/hɔːlt/",
            "zh": "停止"
          },
          {
            "w": "enemy",
            "p": "/ˈenəmi/",
            "zh": "敌人"
          }
        ],
        "phrases": [
          {
            "en": "accidentally falls right in front of the enemy truck",
            "zh": "正好摔在敌人卡车前面"
          },
          {
            "en": "screeches to a halt",
            "zh": "急刹车停了下来"
          },
          {
            "en": "right in front of the enemy truck",
            "zh": "就在敌人卡车前面"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-18.jpg",
        "en": "While the truck is stopped, the magnetic claw quickly grabs the last crystal!",
        "zh": "趁卡车停下，磁力爪迅速抓走了最后一个水晶！",
        "keys": [
          {
            "w": "stopped",
            "p": "/stɒpt/",
            "zh": "停下的"
          },
          {
            "w": "magnetic",
            "p": "/mæɡˈnetɪk/",
            "zh": "磁性的"
          },
          {
            "w": "claw",
            "p": "/klɔː/",
            "zh": "爪子"
          },
          {
            "w": "quickly",
            "p": "/ˈkwɪkli/",
            "zh": "迅速地"
          },
          {
            "w": "crystal",
            "p": "/ˈkrɪstl/",
            "zh": "水晶"
          }
        ],
        "phrases": [
          {
            "en": "while the truck is stopped",
            "zh": "趁卡车停下"
          },
          {
            "en": "quickly grabs the last crystal",
            "zh": "迅速抓走了最后一个水晶"
          },
          {
            "en": "the magnetic claw",
            "zh": "磁力爪"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-19.jpg",
        "en": "Doubao has a bouncy bottom pad and springs right back up, ready to keep fighting!",
        "zh": "豆包有弹性缓冲垫，一下子就弹了起来，继续战斗！",
        "keys": [
          {
            "w": "bouncy",
            "p": "/ˈbaʊnsi/",
            "zh": "有弹性的"
          },
          {
            "w": "pad",
            "p": "/pæd/",
            "zh": "垫子"
          },
          {
            "w": "springs",
            "p": "/sprɪŋz/",
            "zh": "弹起"
          },
          {
            "w": "ready",
            "p": "/ˈredi/",
            "zh": "准备好的"
          },
          {
            "w": "fighting",
            "p": "/ˈfaɪtɪŋ/",
            "zh": "战斗"
          }
        ],
        "phrases": [
          {
            "en": "has a bouncy bottom pad",
            "zh": "有弹性缓冲垫"
          },
          {
            "en": "springs right back up",
            "zh": "一下子就弹了起来"
          },
          {
            "en": "ready to keep fighting",
            "zh": "准备继续战斗"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-20.jpg",
        "en": "The invisible tank activates full stealth and vanishes completely! The enemy trucks can't find it!",
        "zh": "隐身坦克开启全隐身模式，彻底消失！敌人卡车找不到它了！",
        "keys": [
          {
            "w": "activates",
            "p": "/ˈæktɪveɪts/",
            "zh": "启动"
          },
          {
            "w": "stealth",
            "p": "/stelθ/",
            "zh": "隐身；潜行"
          },
          {
            "w": "vanishes",
            "p": "/ˈvænɪʃɪz/",
            "zh": "消失"
          },
          {
            "w": "completely",
            "p": "/kəmˈpliːtli/",
            "zh": "完全地"
          },
          {
            "w": "find",
            "p": "/faɪnd/",
            "zh": "找到"
          }
        ],
        "phrases": [
          {
            "en": "activates full stealth",
            "zh": "开启全隐身模式"
          },
          {
            "en": "vanishes completely",
            "zh": "彻底消失"
          },
          {
            "en": "can't find it",
            "zh": "找不到它了"
          }
        ]
      },
      {
        "img": "images/invisible-tank/page-21.jpg",
        "en": "The invisible tank carries the crystals home safely, with Doubao riding on top as a lookout.",
        "zh": "隐身坦克带着水晶安全回到基地，豆包坐在坦克顶上当侦查员。",
        "keys": [
          {
            "w": "carries",
            "p": "/ˈkæriz/",
            "zh": "运送"
          },
          {
            "w": "safely",
            "p": "/ˈseɪfli/",
            "zh": "安全地"
          },
          {
            "w": "riding",
            "p": "/ˈraɪdɪŋ/",
            "zh": "乘坐"
          },
          {
            "w": "lookout",
            "p": "/ˈlʊkaʊt/",
            "zh": "侦查员；警戒者"
          },
          {
            "w": "home",
            "p": "/həʊm/",
            "zh": "家；基地"
          }
        ],
        "phrases": [
          {
            "en": "carries the crystals home safely",
            "zh": "安全地把水晶带回基地"
          },
          {
            "en": "riding on top as a lookout",
            "zh": "坐在上面当侦查员"
          },
          {
            "en": "the invisible tank",
            "zh": "隐身坦克"
          }
        ]
      }
    ]
  }
];

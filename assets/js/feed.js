// Modern Instagram-style Feed Data
const memoryFeedData = [
    {
        id: 1,
        media: [
            { type: 'image', url: 'assets/images/fav_us/IMG_2959.jpg' },
            { type: 'image', url: 'assets/images/fav_us/PXL_20241031_165415221.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/fav_us/IMG_9172.jpg' },
            { type: 'image', url: 'assets/images/fav_us/PXL_20240801_161610914.MP.jpg' },
            { type: 'image', url: 'assets/images/fav_us/PXL_20250808_143929878.jpg' },
            { type: 'image', url: 'assets/images/fav_us/PXL_20241031_165410840.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/fav_us/PXL_20241031_124848300.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/fav_us/PXL_20250220_065504178.MP.jpg' }
        ],
        caption: 'My Favoutires of US ✨',
        likes: 882750,
        user: 'Alison Roy',
        timestamp: 'Till the End'
    },
    {
        id: 2,
        media: [
            { type: 'image', url: 'assets/images/fav_niddiz/fav_pic.jpg' },
            { type: 'image', url: 'assets/images/fav_niddiz/IMG_9135.jpg' },
            { type: 'image', url: 'assets/images/fav_niddiz/IMG_9841.jpg' },
            { type: 'image', url: 'assets/images/fav_niddiz/IMG-20250506-WA0044.jpg' },
            { type: 'video', url: 'assets/videos/Snapchat-1856792952.mp4' },
            { type: 'image', url: 'assets/images/fav_niddiz/Screenshot_20260414-140909~2.png' },
        ],
        caption: 'My Favoutires of My Thangachiii ✨',
        likes: 1000000,
        user: 'Alison Roy',
        timestamp: 'Forever Beautiful'
    },
    {
        id: 3,
        media: [
            { type: 'video', url: 'assets/videos/Dad1.mp4' },
            { type: 'image', url: 'assets/images/Dad_&_Daughter/IMG-20250311-WA0024.jpg' }
        ],
        caption: 'Daddy and Daughter',
        likes: 910021,
        user: 'Alison Roy',
        timestamp: 'Since 27/04/2005'
    },
    {
        id: 4,
        media: [
            { type: 'video', url: 'assets/videos/niddiz_21st_bday_wish.mp4' },
        ],
        caption: 'Birthday Wish',
        likes: 125,
        user: 'Alison Roy',
        timestamp: '27 April 2026'
    },
    {
        id: 5,
        media: [
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_4311.PNG' },
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_5068.PNG' },
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_6016.PNG' },
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_6017.PNG' },
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_6600.JPG' },
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_6601.PNG' },
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_0475.jpg' },
        ],
        caption: 'Kutty Niddiz',
        likes: 75132,
        user: 'Alison Roy',
        timestamp: 'Childhood Days'
    },
    {
        id: 6,
        media: [
            { type: 'video', url: 'assets/videos/collage/Memories_together.mp4' },
            { type: 'image', url: 'assets/images/collage/IMG_6498-COLLAGE.jpg' },
            { type: 'image', url: 'assets/images/collage/IMG_8162-COLLAGE.jpg' },
            { type: 'image', url: 'assets/images/collage/PXL_20240608_043350849.PORTRAIT-COLLAGE.jpg' },
            { type: 'image', url: 'assets/images/collage/PXL_20240904_163002738.MP-COLLAGE.jpg' },
            { type: 'video', url: 'assets/videos/collage/Snapchat-2003755775.mp4' },
            { type: 'image', url: 'assets/images/collage/PXL_20250628_103532683.MP-COLLAGE.jpg' },
            { type: 'image', url: 'assets/images/collage/IMG_6215-COLLAGE.jpg' },
        ],
        caption: 'Collage of Memories',
        likes: 987612,
        user: 'Alison Roy',
        timestamp: 'Best Moments'
    },
    {
        id: 7,
        media: [
            { type: 'image', url: 'assets/images/cars/PXL_20251030_124126189.jpg' },
            { type: 'video', url: 'assets/videos/cars/PXL_20250628_094848443.mp4' },
            { type: 'image', url: 'assets/images/cars/PXL_20250722_154125810.MP.jpg' },
            { type: 'image', url: 'assets/images/cars/PXL_20250720_174923512.MP.jpg' },
            { type: 'video', url: 'assets/videos/cars/Snapchat-1107838294.mp4' },
        ],
        caption: 'Niddiz and Cars 🚗',
        likes: 75213,
        user: 'Alison Roy',
        timestamp: 'Busy Driving'
    },
    {
        id: 8,
        media: [
            { type: 'image', url: 'assets/images/disappointment/PXL_20250803_163530794.jpg' },
            { type: 'image', url: 'assets/images/disappointment/PXL_20250721_165021605.MP.jpg' },
            { type: 'image', url: 'assets/images/disappointment/PXL_20250716_164206722.MP.jpg' },
        ],
        caption: 'When life hits you 360',
        likes: 9812,
        user: 'Alison Roy',
        timestamp: 'Almost Everyday'
    },
    {
        id: 9,
        media: [
            { type: 'image', url: 'assets/images/noface/PXL_20241031_120704773.MP.jpg' },
            { type: 'image', url: 'assets/images/noface/PXL_20241130_143129972.MP.jpg' },
            { type: 'image', url: 'assets/images/noface/PXL_20251020_125206616.jpg' },
        ],
        caption: 'Sottai hitting her favourite pose',
        likes: 87612,
        user: 'Alison Roy',
        timestamp: 'Almost All the Photos'
    },
    {
        id: 10,
        media: [
            { type: 'image', url: 'assets/images/awkward/PXL_20241118_122935013.MP.jpg' },
            { type: 'image', url: 'assets/images/awkward/CA32D427-9237-416E-A26D-D16D6A4618A9.jpg' },
            { type: 'image', url: 'assets/images/awkward/PXL_20250628_085822469.MP.jpg' },
            { type: 'image', url: 'assets/images/awkward/PXL_20251218_145332569.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/awkward/IMG_2305.jpg' },
        ],
        caption: 'Awkward Faces ft. Niddiz',
        likes: 15412,
        user: 'Alison Roy',
        timestamp: 'Rare Times'
    },
    {
        id: 11,
        media: [
            { type: 'video', url: 'assets/videos/artist/IMG_8132.MOV' },
            { type: 'image', url: 'assets/images/artist/IMG_8134.JPG' },
            { type: 'video', url: 'assets/videos/artist/Snapchat-135794242.mp4' },
            { type: 'video', url: 'assets/videos/artist/Snapchat-1193356604.mp4' },
        ],
        caption: 'Nee oru Artistu lae',
        likes: 42312,
        user: 'Alison Roy',
        timestamp: 'When Bored'
    },
    {
        id: 12,
        media: [
            { type: 'image', url: 'assets/images/mirror/PXL_20250628_074858714.MP.jpg' },
            { type: 'video', url: 'assets/videos/mirror/0B5A1194-1161-48B6-9057-29A80A0D53C7.mp4' },
            { type: 'image', url: 'assets/images/mirror/Snapchat-2019994286.jpg' },
            { type: 'image', url: 'assets/images/mirror/Snapchat-1677891395.jpg' },
            { type: 'video', url: 'assets/videos/mirror/Snapchat-907781374.mp4' },
            { type: 'image', url: 'assets/images/mirror/Snapchat-668979380.jpg' },
            { type: 'image', url: 'assets/images/mirror/Screenshot_20240716-121123.png' },
            { type: 'video', url: 'assets/videos/mirror/Snapchat-901951518.mp4' },
            { type: 'image', url: 'assets/images/mirror/IMG_5924.JPG' },
            { type: 'image', url: 'assets/images/mirror/IMG_5510.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_4617.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_4051.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_2254.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_9931.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_8811.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_8743.PNG' },
            { type: 'image', url: 'assets/images/mirror/IMG_4649.PNG' },

        ],
        caption: 'Sottai Mirror Obsession!!!',
        likes: 6612,
        user: 'Alison Roy',
        timestamp: 'Most of the Stories or Snaps'
    },
    {
        id: 13,
        media: [
            { type: 'image', url: 'assets/images/formal/5d753c9c-3f5b-4989-b767-687f91e86931.jpg' },
            { type: 'image', url: 'assets/images/formal/IMG_4840.jpg' },

        ],
        caption: 'Finally straight Face Photos 😙',
        likes: 98,
        user: 'Alison Roy',
        timestamp: 'Once in a Blue Moon'
    },
    {
        id: 14,
        media: [
            { type: 'video', url: 'assets/videos/21bday/VID-20260427-WA0021.mp4' },
            { type: 'video', url: 'assets/videos/21bday/VID-20260427-WA0027.mp4' },
            { type: 'image', url: 'assets/images/21bday/IMG-20260427-WA0020.jpg' },
            { type: 'video', url: 'assets/videos/21bday/PXL_20260426_194807021.mp4' },
            { type: 'image', url: 'assets/images/21bday/PXL_20260426_200019884.jpg' },
            { type: 'video', url: 'assets/videos/21bday/PXL_20260426_201202891.mp4' },
        ],
        caption: "Thangachiii's 21st Birthday",
        likes: 909123,
        user: 'Alison Roy',
        timestamp: '27 April 2026'
    },
    {
        id: 15,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-1796366170.mp4' },
        ],
        caption: "Our First Movie Thaniya - Project Hail Mary",
        likes: 6571,
        user: 'Alison Roy',
        timestamp: '15 April 2026'
    },
    {
        id: 16,
        media: [
            { type: 'video', url: 'assets/videos/ECR/Snapchat-1332258719.mp4' },
            { type: 'video', url: 'assets/videos/ECR/Snapchat-320866666.mp4' },
            { type: 'image', url: 'assets/images/PXL_20260331_131946992.MP.jpg' },
        ],
        caption: "ECR Polamaaaa ?",
        likes: 42123,
        user: 'Alison Roy',
        timestamp: '15 April 2026'
    },
    {
        id: 17,
        media: [
            { type: 'video', url: 'assets/videos/Highway/PXL_20260305_125618294.mp4' },
            { type: 'video', url: 'assets/videos/Highway/PXL_20260305_152025871.mp4' },
            { type: 'video', url: 'assets/videos/Highway/Snapchat-5705355.mp4' },
            { type: 'video', url: 'assets/videos/Highway/Snapchat-726450220.mp4' },
            { type: 'video', url: 'assets/videos/Highway/Snapchat-2045489062.mp4' },
            { type: 'video', url: 'assets/videos/Highway/PXL_20260305_144202388.mp4' },
        ],
        caption: "Passenger Prince + Highway Ride + Reliance Smart = Great Day",
        likes: 58722,
        user: 'Alison Roy',
        timestamp: '5 March 2026'
    },
    {
        id: 18,
        media: [
            { type: 'image', url: 'assets/images/crab/Snapchat-352801905.jpg' },
            { type: 'image', url: 'assets/images/crab/Snapchat-413380019.jpg' },
        ],
        caption: "Rare days when our restaurant selection turn out great; That Crab 🥰",
        likes: 18771,
        user: 'Alison Roy',
        timestamp: '27 February 2026'
    },
    {
        id: 19,
        media: [
            { type: 'video', url: 'assets/videos/diet/PXL_20260128_132407758.mp4' },
            { type: 'video', url: 'assets/videos/diet/Snapchat-1109537230.mp4' },
        ],
        caption: "When we are on Diet",
        likes: 67162,
        user: 'Alison Roy',
        timestamp: '28 January 2026'
    },
    {
        id: 20,
        media: [
            { type: 'image', url: 'assets/images/flowers/PXL_20260125_053529804.jpg' },
            { type: 'image', url: 'assets/images/flowers/PXL_20260125_041225499.MP.jpg' },
        ],
        caption: "Flowers to cheer up Madommmm!",
        likes: 18771,
        user: 'Alison Roy',
        timestamp: '25 January 2026'
    },
    {
        id: 21,
        media: [
            { type: 'video', url: 'assets/videos/IMG_7717.MOV' },
            { type: 'image', url: 'assets/images/ooty/PXL_20260118_043451835.jpg' },
            { type: 'image', url: 'assets/images/ooty/IMG_7762.jpg' },
            { type: 'image', url: 'assets/images/ooty/IMG_7786.jpg' },
            { type: 'image', url: 'assets/images/ooty/IMG_9413.jpg' },
        ],
        caption: "Our Secoind Trip - Ooootyyyy !!",
        likes: 4191,
        user: 'Alison Roy',
        timestamp: '16 January 2026 - 18 January 2026'
    },
    {
        id: 22,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-2031408326.mp4' },
        ],
        caption: "The Singers could have been better",
        likes: 3198,
        user: 'Alison Roy',
        timestamp: '6 January 2026'
    },
    {
        id: 23,
        media: [
            { type: 'image', url: 'assets/images/PXL_20251223_142306063.jpg' },
            { type: 'video', url: 'assets/videos/Soru/PXL_20251223_144628821.mp4' },
            { type: 'video', url: 'assets/videos/Soru/Snapchat-1374675699.mp4' },
            { type: 'video', url: 'assets/videos/Soru/Snapchat-1690223919.mp4' },
        ],
        caption: "Eppo Pathalum Soru Soru Soru Nu",
        likes: 56712,
        user: 'Alison Roy',
        timestamp: '23 December 2025'
    },
    {
        id: 24,
        media: [
            { type: 'video', url: 'assets/videos/salary/PXL_20251218_155546394.mp4' },
            { type: 'video', url: 'assets/videos/salary/PXL_20251218_154417029.mp4' },
        ],
        caption: "Literally Every Sister After Brother's Salary Day",
        likes: 76512,
        user: 'Alison Roy',
        timestamp: '18 December 2025'
    },
    {
        id: 25,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-344289645.mp4' },
        ],
        caption: "Cold Coffee for the Win!!",
        likes: 65162,
        user: 'Alison Roy',
        timestamp: '13 November 2025'
    },
    {
        id: 26,
        media: [
            { type: 'image', url: 'assets/images/Snapchat-1224862077.jpg' },
            { type: 'video', url: 'assets/videos/Snapchat-1824797051.mp4' },
        ],
        caption: "Life Advices Ahem Ahem",
        likes: 48712,
        user: 'Alison Roy',
        timestamp: '6 November 2025'
    },
    {
        id: 27,
        media: [
            { type: 'image', url: 'assets/images/PXL_20251030_103259554.MP.jpg' },
            { type: 'video', url: 'assets/videos/Phoenix/PXL_20251030_112515071.mp4' },
            { type: 'video', url: 'assets/videos/Phoenix/Snapchat-1546428647.mp4' },
        ],
        caption: "Swear would never go to Rangis Again! Also perfume vaanga Phoenix Povom Naanga",
        likes: 34612,
        user: 'Alison Roy',
        timestamp: '30 October 2025'
    },
    {
        id: 28,
        media: [
            { type: 'image', url: 'assets/images/Diwali25/PXL_20251020_130840326.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/Diwali25/PXL_20251020_130545339.jpg' },
            { type: 'image', url: 'assets/images/Diwali25/PXL_20251020_170457841.jpg' },
            { type: 'image', url: 'assets/images/Diwali25/PXL_20251020_175011310.jpg' },
        ],
        caption: "Diwali 2k25",
        likes: 23127,
        user: 'Alison Roy',
        timestamp: '20 October 2025'
    },
    {
        id: 29,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-651489995.mp4' },
        ],
        caption: "Ranting is our Hobby",
        likes: 33167,
        user: 'Alison Roy',
        timestamp: '24 September 2025'
    },
    {
        id: 30,
        media: [
            { type: 'image', url: 'assets/images/PXL_20250918_155321897.jpg' },
        ],
        caption: "Malabar house is Underrated.",
        likes: 87123,
        user: 'Alison Roy',
        timestamp: '18 September 2025'
    },
    {
        id: 31,
        media: [
            { type: 'image', url: 'assets/images/PXL_20250918_155321897.jpg' },
        ],
        caption: "Malabar house is Underrated.",
        likes: 87123,
        user: 'Alison Roy',
        timestamp: '18 September 2025'
    },
    {
        id: 32,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-995614508.mp4' },
        ],
        caption: "Thanks for gifting Ray JR. This is by far the best gift I ever received",
        likes: 75180,
        user: 'Alison Roy',
        timestamp: '18 September 2025'
    },
    {
        id: 33,
        media: [
            { type: 'image', url: 'assets/images/PXL_20250808_143913613.jpg' },
            { type: 'video', url: 'assets/videos/rb/Snapchat-292304175.mp4' },
            { type: 'video', url: 'assets/videos/rb/Snapchat-1934381559.mp4' },
        ],
        caption: "RakshaBandhan 2025 and Anandha Vilas",
        likes: 46671,
        user: 'Alison Roy',
        timestamp: '8 September 2025'
    },
    {
        id: 34,
        media: [
            { type: 'image', url: 'assets/images/PXL_20250722_144732934.jpg' },
            { type: 'video', url: 'assets/videos/PXL_20250722_130856535.mp4' },
        ],
        caption: "Initial Driving Days and Nellai Vaira Maligai",
        likes: 31341,
        user: 'Alison Roy',
        timestamp: '22 July 2025'
    },
    {
        id: 35,
        media: [
            { type: 'image', url: 'assets/images/PXL_20250720_174754313.MP.jpg' },
            { type: 'video', url: 'assets/videos/city/PXL_20250720_174447852.mp4' },
            { type: 'video', url: 'assets/videos/city/Snapchat-1924612708.mp4' },
        ],
        caption: "First Time Driving our City",
        likes: 890123,
        user: 'Alison Roy',
        timestamp: '20 July 2025'
    },
    {
        id: 36,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-1888822038.mp4' },
        ],
        caption: "Got her proper Second Piercing",
        likes: 45186,
        user: 'Alison Roy',
        timestamp: '19 July 2025'
    },
    {
        id: 37,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-1263767268.mp4' },
            { type: 'image', url: 'assets/images/PXL_20250712_101950708.jpg' },
        ],
        caption: "Breakfast Sapda Polamaa ?",
        likes: 68132,
        user: 'Alison Roy',
        timestamp: '12 July 2025'
    },
    {
        id: 38,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-1192651669.mp4' },
        ],
        caption: "Unga Nermai enaku romba Pudichirukku",
        likes: 54123,
        user: 'Alison Roy',
        timestamp: '4 July 2025'
    },
    {
        id: 39,
        media: [
            { type: 'image', url: 'assets/images/dk/PXL_20250628_074858714.MP.jpg' },
            { type: 'image', url: 'assets/images/dk/PXL_20250628_102549502.jpg' },
            { type: 'image', url: 'assets/images/dk/PXL_20250628_105305058.jpg' },
            { type: 'video', url: 'assets/videos/IMG_9536.mov' },
        ],
        caption: "Dakshin Chitra  and Niddiz First Drive",
        likes: 54123,
        user: 'Alison Roy',
        timestamp: '28 June 2025'
    },
    {
        id: 40,
        media: [
            { type: 'image', url: 'assets/images/20bday/PXL_20250504_073417707.MP.jpg' },
            { type: 'image', url: 'assets/images/20bday/IMG_8191.JPG' },
            { type: 'image', url: 'assets/images/20bday/IMG-20250506-WA0042.jpg' },
            { type: 'image', url: 'assets/images/20bay/PXL_20250504_071658967.jpg' },
            { type: 'image', url: 'assets/images/20bday/IMG_8173.JPG' },
            { type: 'video', url: 'assets/videos/IMG_8131.MOV' },
        ],
        caption: "Sottai's 20th BDay Surprise",
        likes: 90813,
        user: 'Alison Roy',
        timestamp: '4 May 2025'
    },
    {
        id: 41,
        media: [
            { type: 'image', url: 'assets/images/PXL_20250422_101320077.MP.jpg' },
        ],
        caption: "Samadhanam Pesuvoma ??",
        likes: 43123,
        user: 'Alison Roy',
        timestamp: '22 April 2025'
    },
    {
        id: 42,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-877157050.mp4' },
        ],
        caption: "Nangalum Gym Povom",
        likes: 18912,
        user: 'Alison Roy',
        timestamp: '12 April 2025'
    },
    {
        id: 43,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-1014847222.mp4' },
        ],
        caption: "Fit Check",
        likes: 9018,
        user: 'Alison Roy',
        timestamp: '30 March 2025'
    },
    {
        id: 44,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-859024837.mp4' },
        ],
        caption: "Haircut Panlama !!",
        likes: 16872,
        user: 'Alison Roy',
        timestamp: '25 March 2025'
    },
    {
        id: 45,
        media: [
            { type: 'image', url: 'assets/images/eyes/PXL_20250315_125259893.jpg' },
            { type: 'image', url: 'assets/images/eyes/PXL_20250315_125422145.jpg' },
        ],
        caption: "The Brown Eyes I Failed to Notice",
        likes: 42213,
        user: 'Alison Roy',
        timestamp: '15 March 2025'
    },
    {
        id: 46,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-1067024078.mp4' },
        ],
        caption: "Get her a BOBA TEA if She's mad at Youuuu",
        likes: 76613,
        user: 'Alison Roy',
        timestamp: '12 March 2025'
    },
    {
        id: 47,
        media: [
            { type: 'image', url: 'assets/images/varkala/IMG_5872~2.JPG' },
            { type: 'image', url: 'assets/images/varkala/IMG_6140.JPG' },
            { type: 'image', url: 'assets/images/varkala/IMG_6170.JPG' },
            { type: 'image', url: 'assets/images/varkala/IMG_6248.JPG' },
            { type: 'image', url: 'assets/images/varkala/IMG_6322.JPG' },
            { type: 'image', url: 'assets/images/varkala/PXL_20250222_121546568.PORTRAIT.jpg' },
        ],
        caption: "Our First Trip Together - Kanthaloor and Varkala",
        likes: 76613,
        user: 'Alison Roy',
        timestamp: '20 February 2025 - 23 February 2025'
    },
    {
        id: 48,
        media: [
            { type: 'video', url: 'assets/videos/accept/Snapchat-1863453388.mp4' },
            { type: 'video', url: 'assets/videos/accept/Snapchat-2023795529.mp4' },
        ],
        caption: "I admire your Sense of Acceptance",
        likes: 6899,
        user: 'Alison Roy',
        timestamp: '29 January 2025'
    },
    {
        id: 49,
        media: [
            { type: 'image', url: 'assets/images/pp_bike/PXL_20241118_131436645.MP.jpg' },
            { type: 'image', url: 'assets/images/pp_bike/PXL_20241118_131440075.MP.jpg' },
            { type: 'video', url: 'assets/videos/Snapchat-476787581.mp4' },
        ],
        caption: "Passenger Prince but this time in Bike",
        likes: 9091,
        user: 'Alison Roy',
        timestamp: '18 November 2024'
    },
    {
        id: 50,
        media: [
            { type: 'image', url: 'assets/images/blood/Snapchat-113743156.jpg' },
            { type: 'image', url: 'assets/images/blood/Snapchat-456906382.jpg' },
            { type: 'image', url: 'assets/images/blood/PXL_20241116_121807356.MP.jpg' },
        ],
        caption: "Ticking off one from Bucket List - Blood Donation",
        likes: 98123,
        user: 'Alison Roy',
        timestamp: '16 November 2024'
    },
    {
        id: 51,
        media: [
            { type: 'image', url: 'assets/images/PXL_20241109_175312065.MP.jpg' },
        ],
        caption: "We could have posed better",
        likes: 7891,
        user: 'Alison Roy',
        timestamp: '9 November 2024'
    },
    {
        id: 52,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-306835966.mp4' },
        ],
        caption: "Things She does to Me",
        likes: 9013,
        user: 'Alison Roy',
        timestamp: '8 November 2024'
    },
    {
        id: 53,
        media: [
            { type: 'image', url: 'assets/images/Diwali24/PXL_20241031_124903060.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/Diwali24/PXL_20241031_123719579.jpg' },
            { type: 'image', url: 'assets/images/Diwali24/PXL_20241031_121701394.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/Diwali24/PXL_20241031_121539313.MP.jpg' },
            { type: 'image', url: 'assets/images/Diwali24/PXL_20241031_170701991.PORTRAIT.jpg' },
            { type: 'image', url: 'assets/images/Diwali24/PXL_20241031_120842485.MP.jpg' },
        ],
        caption: "Diwali 2k24 - My Favourite Diwali",
        likes: 7891,
        user: 'Alison Roy',
        timestamp: '31 October 2024'
    },
    {
        id: 54,
        media: [
            { type: 'video', url: 'assets/videos/jawa/Snapchat-1212095701.mp4' },
            { type: 'image', url: 'assets/images/jawa/PXL_20241030_151053942.MP.jpg' },
            { type: 'video', url: 'assets/videos/jawa/Snapchat-1648183275.mp4' },
            { type: 'image', url: 'assets/images/jawa/PXL_20241030_151125301.MP.jpg' },
        ],
        caption: "Our First Bike Ride Ft Our Jawa 42 FJ",
        likes: 98912,
        user: 'Alison Roy',
        timestamp: '30 October 2024'
    },
    {
        id: 55,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-7688577.mp4' },
            { type: 'image', url: 'assets/images/PXL_20241028_170030338.MP.jpg' },
        ],
        caption: "When Nidhiz becomes the Therapist",
        likes: 87134,
        user: 'Alison Roy',
        timestamp: '28 October 2024'
    },
    {
        id: 56,
        media: [
            { type: 'image', url: 'assets/images/IMG_2700.jpg' },
        ],
        caption: "Our First Concert - HHT",
        likes: 7780,
        user: 'Alison Roy',
        timestamp: '19 October 2024'
    },
    {
        id: 57,
        media: [
            { type: 'image', url: 'assets/images/happy/PXL_20241016_104757512.MP.jpg' },
            { type: 'image', url: 'assets/images/happy/PXL_20241016_104759759.MP.jpg' },
            { type: 'image', url: 'assets/images/happy/PXL_20241016_104754958.MP.jpg' },
            { type: 'image', url: 'assets/images/happy/PXL_20241016_104703206.MP.jpg' },
        ],
        caption: "Happy and Crazy US",
        likes: 100097,
        user: 'Alison Roy',
        timestamp: '16 October 2024'
    },
    {
        id: 58,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-449558827.mp4' },
        ],
        caption: "Obviously",
        likes: 7657,
        user: 'Alison Roy',
        timestamp: '2 October 2024'
    },
    {
        id: 59,
        media: [
            { type: 'image', url: 'assets/images/PXL_20240904_163002738.MP.jpg' },
        ],
        caption: "If Disappointment had a Face",
        likes: 87614,
        user: 'Alison Roy',
        timestamp: '4 September 2024'
    },
    {
        id: 60,
        media: [
            { type: 'image', url: 'assets/images/abday24/PXL_20240825_160822556.MP.jpg' },
            { type: 'video', url: 'assets/videos/Snapchat-827205716.mp4' },
            { type: 'image', url: 'assets/images/abday24/Snapchat-63235082.jpg' },
        ],
        caption: "My 23rd Birthday",
        likes: 8091,
        user: 'Alison Roy',
        timestamp: '25 August 2024'
    },
    {
        id: 61,
        media: [
            { type: 'image', url: 'assets/images/PXL_20240810_122120733.NIGHT.jpg' },
        ],
        caption: "Our Last Photo in Dzire",
        likes: 6671,
        user: 'Alison Roy',
        timestamp: '10 August 2024'
    },
    {
        id: 62,
        media: [
            { type: 'image', url: 'assets/images/PXL_20240802_134110484.MP.jpg' },
        ],
        caption: "Trusting her with my Life",
        likes: 98123,
        user: 'Alison Roy',
        timestamp: '2 August 2024'
    },
    {
        id: 63,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-2045038052.mp4' },
        ],
        caption: "Sottai Loves Rain",
        likes: 5131,
        user: 'Alison Roy',
        timestamp: '3 July 2024'
    },
    {
        id: 64,
        media: [
            { type: 'video', url: 'assets/videos/Snapchat-967195375.mp4' },
            { type: 'image', url: 'assets/images/PXL_20240616_122702161.PORTRAIT.jpg' },
        ],
        caption: "Smiles All Around 😊",
        likes: 6379,
        user: 'Alison Roy',
        timestamp: '16 June 2024'
    },
    {
        id: 65,
        media: [
            { type: 'image', url: 'assets/images/PXL_20240608_043350849.PORTRAIT.jpg' },
        ],
        caption: "Saranadaikiran Thaaye 🧎",
        likes: 8913,
        user: 'Alison Roy',
        timestamp: '8 June 2024'
    },
    {
        id: 66,
        media: [
            { type: 'image', url: 'assets/images/ap/IMG_3885.JPG' },
            { type: 'image', url: 'assets/images/ap/DSC_6185_Original.JPG' },
        ],
        caption: "Our First Amusement Park Trip",
        likes: 34698,
        user: 'Alison Roy',
        timestamp: '23 December 2023'
    },
    {
        id: 67,
        media: [
            { type: 'image', url: 'assets/images/IMG_2679.jpg' },
        ],
        caption: "Candid Aahn",
        likes: 34698,
        user: 'Alison Roy',
        timestamp: '17 October 2023'
    },
    {
        id: 68,
        media: [
            { type: 'image', url: 'assets/images/IMG_2016.jpg' },
        ],
        caption: "My 22nd Birthday",
        likes: 4583,
        user: 'Alison Roy',
        timestamp: '25 August 2023'
    },
    {
        id: 69,
        media: [
            { type: 'video', url: 'assets/videos/recorded-6414982890583.mp4' },
        ],
        caption: "Always Busy thaan Madam",
        likes: 1236,
        user: 'Alison Roy',
        timestamp: '19 August 2023'
    },
    {
        id: 70,
        media: [
            { type: 'video', url: 'assets/videos/sky/Snapchat-1588085299.mp4' },
            { type: 'image', url: 'assets/images/IMG_1523.jpg' },
            { type: 'video', url: 'assets/videos/sky/filtered-6E1BB02F-9043-440E-901B-F5B745703F80.mp4' },

        ],
        caption: "The day SKY came into our Lives",
        likes: 79541,
        user: 'Alison Roy',
        timestamp: '15 July 2023'
    },
    {
        id: 71,
        media: [
            { type: 'image', url: 'assets/images/IMG_0649.jpg' },
        ],
        caption: "Our First Lunch Thaniya",
        likes: 61853,
        user: 'Alison Roy',
        timestamp: '16 May 2023'
    },
    {
        id: 72,
        media: [
            { type: 'image', url: 'assets/images/IMG_9789.jpg' },
        ],
        caption: "Niddiz's 18th Birthday",
        likes: 86254,
        user: 'Alison Roy',
        timestamp: '28 April 2023'
    },
    {
        id: 73,
        media: [
            { type: 'image', url: 'assets/images/IMG_7067.jpg' },
        ],
        caption: "I am her Handbag",
        likes: 75523,
        user: 'Alison Roy',
        timestamp: '23 February 2023'
    },
    {
        id: 74,
        media: [
            { type: 'image', url: 'assets/images/IMG_6214.jpg' },
        ],
        caption: "Accidental Twinning",
        likes: 46181,
        user: 'Alison Roy',
        timestamp: '12 January 2023'
    },
    {
        id: 75,
        media: [
            { type: 'video', url: 'assets/videos/filtered-E2E644CC-7DE2-4959-982B-5947AC70127E.mp4' },
            { type: 'image', url: 'assets/images/IMG_5238.jpg' },
        ],
        caption: "Diwali 2k22",
        likes: 51681,
        user: 'Alison Roy',
        timestamp: '24 October 2022'
    },
    {
        id: 76,
        media: [
            { type: 'image', url: 'assets/images/first_movie/IMG_4744.jpg' },
            { type: 'image', url: 'assets/images/first_movie/IMG_4783.JPG' },
        ],
        caption: "Our First Movie Together",
        likes: 23654,
        user: 'Alison Roy',
        timestamp: '24 September 2022'
    },
    {
        id: 77,
        media: [
            { type: 'image', url: 'assets/images/IMG_4345.JPG' },
        ],
        caption: "Not so Fit US ",
        likes: 14862,
        user: 'Alison Roy',
        timestamp: '4 September 2022'
    },
    {
        id: 78,
        media: [
            { type: 'video', url: 'assets/videos/filtered-BE602066-8977-40F1-8412-418345808577.mp4' },
        ],
        caption: "A gift that has been passed on to Leah",
        likes: 56249,
        user: 'Alison Roy',
        timestamp: '27 August 2022'
    },
    {
        id: 79,
        media: [
            { type: 'image', url: 'assets/images/IMG_4121.jpg' },
        ],
        caption: "My 21st Birthday",
        likes: 78951,
        user: 'Alison Roy',
        timestamp: '25 August 2022'
    },
    {
        id: 80,
        media: [
            { type: 'video', url: 'assets/videos/E9926318-1D70-4D8F-844B-45C887E5FCDE.mp4' },
        ],
        caption: "Madam's Singing Skills aka Isai Mazhaiyil Nanaiya Thayaraa",
        likes: 8534,
        user: 'Alison Roy',
        timestamp: '7 August 2022'
    },
    {
        id: 81,
        media: [
            { type: 'video', url: 'assets/videos/recorded-364914089852.mp4' },
        ],
        caption: "Kadharalz",
        likes: 4561,
        user: 'Alison Roy',
        timestamp: '20 July 2022'
    },
    {
        id: 82,
        media: [
            { type: 'image', url: 'assets/images/IMG_1301.JPG' },
        ],
        caption: "Niddiz 17th Birthday",
        likes: 85412,
        user: 'Alison Roy',
        timestamp: '27 April 2022'
    },
    {
        id: 83,
        media: [
            { type: 'video', url: 'assets/videos/filtered-96F960FD-C557-4D73-A278-0B2AA3752CB8.mp4' },
        ],
        caption: "You are always Late",
        likes: 7989,
        user: 'Alison Roy',
        timestamp: '12 March 2022'
    },
    {
        id: 84,
        media: [
            { type: 'image', url: 'assets/images/IMG_8812.jpg' },
        ],
        caption: "Hope you liked the Hoodie",
        likes: 16632,
        user: 'Alison Roy',
        timestamp: '11 November 2021'
    },
    {
        id: 85,
        media: [
            { type: 'image', url: 'assets/images/IMG_8808.jpg' },
        ],
        caption: "Not for Me",
        likes: 25632,
        user: 'Alison Roy',
        timestamp: '10 November 2021'
    },
    {
        id: 86,
        media: [
            { type: 'image', url: 'assets/images/IMG_8165.jpg' },
        ],
        caption: "Photo After our First Fight",
        likes: 35641,
        user: 'Alison Roy',
        timestamp: '16 October 2021'
    },
    {
        id: 87,
        media: [
            { type: 'image', url: 'assets/images/IMG_7917.jpg' },
        ],
        caption: "Pathen Pathen",
        likes: 21563,
        user: 'Alison Roy',
        timestamp: '11 October 2021'
    },
    {
        id: 88,
        media: [
            { type: 'image', url: 'assets/images/joe/IMG_7205.JPG' },
            { type: 'image', url: 'assets/images/joe/IMG_7203.jpg' },
        ],
        caption: "Joe's Waffle - Our First Meeting Outside Flats",
        likes: 65812,
        user: 'Alison Roy',
        timestamp: '25 September 2021'
    },
    {
        id: 89,
        media: [
            { type: 'image', url: 'assets/images/IMG_6498.jpg' },
        ],
        caption: "Our First Photo Together; <br> You may ask why am I making a digital version, its because I figured out hard copies can either be thrown away or will be damaged.<br> Thanks Thangachiii for coming into my Life. <br> Thank you still choosing to stay with me.<br> Thank you for pointing out my flaws and helping me correct them.<br> Thank you for making me who I am today.<br> Thank you for teaching me what it means to be a Man for a Woman.<br> Thank you for listening to all my rants.<br> Thank you for being there when I needed you. <br> I will always be grateful for your presence in my Life. My Thangachiii has done a lot for me. All I can give back to you is by being by your side in hard times. I can't fix you but atleast I can be by your side and make sure you are trying to fix them. Eeverything will be alright madam. Don't Overthink and complicate thinngs. You have done nothing wrong, so don't worry. Anna will always be there for you. Hope we have this bond till the end. Anna is always just a call away. You can just be you with me, don't worry Anna wont leave because I know that option isn't available now 😂. Love you to the moon and back ✨. You will always be the 11th grade kid to me, you will always be my Kutty Thangachiii ❤️",
        likes: 33977515,
        user: 'Alison Roy',
        timestamp: '25 August 2021'
    },
    {
        id: 90,
        media: [
            { type: 'image', url: 'assets/images/IMG_6190.JPG' },
        ],
        caption: "Apdiyae Potuko",
        likes: 6521,
        user: 'Alison Roy',
        timestamp: '31 July 2021'
    },
    {
        id: 91,
        media: [
            { type: 'image', url: 'assets/images/IMG_6097.jpg' },
        ],
        caption: "Obviously Mallu maari thaan Iruka",
        likes: 9531,
        user: 'Alison Roy',
        timestamp: '25 July 2021'
    },
    {
        id: 92,
        media: [
            { type: 'video', url: 'assets/videos/brando/b0d752cda907432c94e939ce4a40cda4.mov' },
            { type: 'video', url: 'assets/videos/brando/c87aac875f554799a0244c0507434df0.mov' },

        ],
        caption: "How can we forget Brando !!",
        likes: 76123,
        user: 'Alison Roy',
        timestamp: '8 June 2021'
    },
    {
        id: 93,
        media: [
            { type: 'image', url: 'assets/images/16thbday/IMG_4978.PNG' },
            { type: 'image', url: 'assets/images/16thbday/IMG_4970.PNG' },

        ],
        caption: "Thangachiii's Birthday since we met",
        likes: 76123,
        user: 'Alison Roy',
        timestamp: '27 April 2021'
    },
];

// Track liked posts
let likedPosts = {};
let videoObserver;

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    loadLikesFromStorage();
    setupVideoPauseHandlers();
    initializeFeed();
    initializeSummary();
    setupParallax();
    setupEventListeners();
});

// Initialize Feed
function initializeFeed() {
    const feed = document.getElementById('instagramFeed');
    feed.innerHTML = '';

    memoryFeedData.forEach((memory, index) => {
        const post = createPost(memory);
        feed.appendChild(post);

        // Stagger animation
        setTimeout(() => {
            post.style.opacity = '0';
            post.offsetHeight; // trigger reflow
            post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            post.style.opacity = '1';
        }, index * 50);
    });
}

// Create Post Element
function createPost(memory) {
    const post = document.createElement('div');
    post.className = 'ig-post';
    post.setAttribute('data-id', memory.id);

    let mediaHtml = '';
    let dotsHtml = '';
    let hasMultiple = memory.media.length > 1;

    memory.media.forEach((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        if (item.type === 'video') {
            mediaHtml += `<video src="${item.url}" controls class="ig-post-media ${activeClass}" style="width: 100%; height: 100%; object-fit: cover;"></video>`;
        } else {
            mediaHtml += `<img src="${item.url}" alt="Memory" class="ig-post-media ${activeClass}" data-id="${memory.id}">`;
        }
        if (hasMultiple) {
            dotsHtml += `<span class="ig-carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`;
        }
    });

    const carouselControls = hasMultiple ? `
        <button class="ig-carousel-prev" data-id="${memory.id}"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="ig-carousel-next" data-id="${memory.id}"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="ig-carousel-dots">${dotsHtml}</div>
    ` : '';

    post.innerHTML = `
        <div class="ig-post-header">
            <div class="ig-post-user">
                <div class="ig-post-avatar">${memory.user.charAt(0)}</div>
                <div class="ig-post-user-info">
                    <h3>${memory.user}</h3>
                    <p>${memory.timestamp}</p>
                </div>
            </div>
            <button class="ig-post-options">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
        </div>

        <div class="ig-post-image-container" data-id="${memory.id}">
            ${mediaHtml}
            ${carouselControls}
        </div>

        <div class="ig-post-actions">
            <button class="ig-action-btn like-btn" data-id="${memory.id}" title="Like">
                <i class="fa-heart ${likedPosts[memory.id] ? 'fa-solid' : 'far'}"></i>
            </button>
            <button class="ig-action-btn" title="Comment">
                <i class="fa-regular fa-comment"></i>
            </button>
            <button class="ig-action-btn" title="Share">
                <i class="fa-regular fa-paper-plane"></i>
            </button>
            <button class="ig-action-btn" style="margin-left: auto;" title="Save">
                <i class="fa-regular fa-bookmark"></i>
            </button>
        </div>

        <div class="ig-like-count" data-id="${memory.id}">
            <strong>${memory.likes + (likedPosts[memory.id] ? 1 : 0)}</strong> likes
        </div>

        <div class="ig-post-caption">
            <span class="ig-caption-username">${memory.user}</span>
            <span class="ig-caption-text">${memory.caption}</span>
            <br>
            <span class="ig-see-more" data-id="${memory.id}">View all comments</span>
        </div>

        <div class="ig-comments-section">
            <div class="ig-comment">
                <span class="ig-comment-author">nithisha_rmk:</span>
                <span class="ig-comment-text">Cutayyy</span>
            </div>
        </div>
    `;

    // Event listeners
    const likeBtn = post.querySelector('.like-btn');
    const likeCountEl = post.querySelector(`[data-id="${memory.id}"].ig-like-count`);
    const mediaContainer = post.querySelector('.ig-post-image-container');
    let clickTimer = null;
    let lastTap = 0;

    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(memory, likeBtn, likeCountEl);
    });

    mediaContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('ig-post-media') && !target.closest('.ig-carousel-prev, .ig-carousel-next, .ig-carousel-dot')) {
            if (clickTimer) {
                return;
            }
            clickTimer = setTimeout(() => {
                openPostModal(memory);
                clickTimer = null;
            }, 250);
        }
    });

    mediaContainer.addEventListener('dblclick', (e) => {
        const target = e.target;
        if (!target.classList.contains('ig-post-media')) {
            return;
        }

        if (clickTimer) {
            clearTimeout(clickTimer);
            clickTimer = null;
        }

        toggleLike(memory, likeBtn, likeCountEl, target);
    });

    mediaContainer.addEventListener('touchend', (e) => {
        const target = e.target.closest('.ig-post-media');
        if (!target) {
            return;
        }

        const currentTime = Date.now();
        const tapLength = currentTime - lastTap;

        if (tapLength < 300 && tapLength > 0) {
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
            }
            toggleLike(memory, likeBtn, likeCountEl, target);
        }

        lastTap = currentTime;
    });

    // Carousel controls
    if (hasMultiple) {
        const prevBtn = post.querySelector('.ig-carousel-prev');
        const nextBtn = post.querySelector('.ig-carousel-next');
        const dots = post.querySelectorAll('.ig-carousel-dot');

        prevBtn.addEventListener('click', () => switchSlide(memory.id, -1));
        nextBtn.addEventListener('click', () => switchSlide(memory.id, 1));
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => switchSlide(memory.id, index - getCurrentSlideIndex(memory.id)));
        });

        // Add swipe support
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        mediaContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        mediaContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe(memory.id);
        }, { passive: true });

        function handleSwipe(postId) {
            const deltaX = touchStartX - touchEndX;
            const deltaY = touchStartY - touchEndY;
            const minSwipeDistance = 50;

            // Only handle horizontal swipes that are longer than vertical movement
            if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    // Swipe left - next slide
                    switchSlide(postId, 1);
                } else {
                    // Swipe right - previous slide
                    switchSlide(postId, -1);
                }
            }
        }
    }

    // Update like button styling
    if (likedPosts[memory.id]) {
        likeBtn.classList.add('liked');
    }

    post.querySelectorAll('video').forEach(observeVideoElement);

    return post;
}

function getCurrentSlideIndex(postId) {
    const container = document.querySelector(`.ig-post-image-container[data-id="${postId}"]`);
    const activeMedia = container.querySelector('.ig-post-media.active');
    return Array.from(container.querySelectorAll('.ig-post-media')).indexOf(activeMedia);
}

function switchSlide(postId, direction) {
    const container = document.querySelector(`.ig-post-image-container[data-id="${postId}"]`);
    const mediaItems = container.querySelectorAll('.ig-post-media');
    const dots = container.querySelectorAll('.ig-carousel-dot');
    let currentIndex = getCurrentSlideIndex(postId);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = mediaItems.length - 1;
    if (newIndex >= mediaItems.length) newIndex = 0;

    mediaItems.forEach((item) => {
        if (item.tagName === 'VIDEO') {
            item.pause();
        }
    });

    mediaItems.forEach((item, index) => {
        item.classList.toggle('active', index === newIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newIndex);
    });

    const activeVideo = container.querySelector('.ig-post-media.active');
    if (activeVideo && activeVideo.tagName === 'VIDEO') {
        activeVideo.play().catch(() => { });
    }
}

function initializeSummary() {
    const totalMemories = memoryFeedData.length;
    const totalLikes = memoryFeedData.reduce((sum, item) => sum + item.likes, 0);

    document.getElementById('summaryCount').textContent = totalMemories;
    document.getElementById('summaryLikes').textContent = totalLikes;
}

function setupParallax() {
    const layers = document.querySelectorAll('.ig-parallax-layer');
    window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        layers.forEach((layer) => {
            const speed = parseFloat(layer.dataset.speed);
            layer.style.transform = `translateY(${offset * speed}px)`;
        });
    });
}

function setupVideoPauseHandlers() {
    videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target;
            const isActive = video.classList.contains('active');
            if (!isActive) {
                return;
            }

            if (entry.intersectionRatio >= 0.5 && document.visibilityState === 'visible') {
                video.play().catch(() => { });
            } else {
                video.pause();
            }
        });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAllVideos();
        } else {
            playVisibleVideos();
        }
    });

    window.addEventListener('blur', pauseAllVideos);
    window.addEventListener('focus', playVisibleVideos);
    window.addEventListener('pagehide', pauseAllVideos);
}

function observeVideoElement(video) {
    if (!videoObserver || !(video instanceof HTMLVideoElement)) {
        return;
    }
    videoObserver.observe(video);
}

function pauseAllVideos() {
    document.querySelectorAll('video').forEach((video) => video.pause());
}

function playVisibleVideos() {
    document.querySelectorAll('video').forEach((video) => {
        if (!video.classList.contains('active')) {
            return;
        }

        const rect = video.getBoundingClientRect();
        const height = Math.max(rect.height, 1);
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight / height >= 0.5) {
            video.play().catch(() => { });
        }
    });
}

// Toggle Like
function toggleLike(memory, button, likeCountEl, animationTarget = button) {
    if (likedPosts[memory.id]) {
        // Unlike
        likedPosts[memory.id] = false;
        button.classList.remove('liked');
        button.querySelector('i').classList.remove('fa-solid');
        button.querySelector('i').classList.add('far');
    } else {
        // Like
        likedPosts[memory.id] = true;
        button.classList.add('liked');
        button.querySelector('i').classList.remove('far');
        button.querySelector('i').classList.add('fa-solid');
        createLikeAnimation(animationTarget, true);
    }

    const currentLikes = memory.likes + (likedPosts[memory.id] ? 1 : 0);
    likeCountEl.innerHTML = `<strong>${currentLikes}</strong> likes`;
    saveLikesToStorage();
    initializeSummary();
}

// Like Animation
function createLikeAnimation(target, centered = false) {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = centered ? '3rem' : '2rem';
    heart.style.zIndex = '999';

    const rect = target.getBoundingClientRect();
    if (centered) {
        heart.style.left = `${rect.left + rect.width / 2 - 24}px`;
        heart.style.top = `${rect.top + rect.height / 2 - 24}px`;
    } else {
        heart.style.left = rect.left + 'px';
        heart.style.top = rect.top + 'px';
    }

    document.body.appendChild(heart);

    let opacity = 1;
    let top = rect.top;
    let left = rect.left;

    const animate = setInterval(() => {
        top -= 5;
        opacity -= 0.05;
        heart.style.top = top + 'px';
        heart.style.left = left + 'px';
        heart.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(animate);
            heart.remove();
        }
    }, 30);
}

// Open Modal
function openPostModal(memory) {
    const modal = document.getElementById('postModal');
    const modalContent = document.getElementById('modalContent');
    const modalCaption = document.getElementById('modalCaption');
    const modalLikes = document.getElementById('modalLikes');

    let mediaHtml = '';
    let dotsHtml = '';
    let hasMultiple = memory.media.length > 1;

    memory.media.forEach((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        if (item.type === 'video') {
            mediaHtml += `<video src="${item.url}" controls class="modal-media ${activeClass}" style="max-width: 100%; max-height: 80vh;"></video>`;
        } else {
            mediaHtml += `<img src="${item.url}" alt="Memory" class="modal-media ${activeClass}">`;
        }
        if (hasMultiple) {
            dotsHtml += `<span class="modal-carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`;
        }
    });

    const carouselControls = hasMultiple ? `
        <button class="modal-carousel-prev"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="modal-carousel-next"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="modal-carousel-dots">${dotsHtml}</div>
    ` : '';

    modalContent.innerHTML = `
        ${mediaHtml}
        ${carouselControls}
    `;

    modalCaption.textContent = memory.caption;
    modalLikes.textContent = memory.likes + (likedPosts[memory.id] ? 1 : 0);
    modal.querySelectorAll('video').forEach(observeVideoElement);

    // Add carousel event listeners
    if (hasMultiple) {
        const prevBtn = modal.querySelector('.modal-carousel-prev');
        const nextBtn = modal.querySelector('.modal-carousel-next');
        const dots = modal.querySelectorAll('.modal-carousel-dot');

        prevBtn.addEventListener('click', () => switchModalSlide(-1));
        nextBtn.addEventListener('click', () => switchModalSlide(1));
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => switchModalSlide(index - getCurrentModalSlideIndex()));
        });

        // Add swipe support for modal
        let modalTouchStartX = 0;
        let modalTouchStartY = 0;
        let modalTouchEndX = 0;
        let modalTouchEndY = 0;

        modalContent.addEventListener('touchstart', (e) => {
            modalTouchStartX = e.changedTouches[0].screenX;
            modalTouchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        modalContent.addEventListener('touchend', (e) => {
            modalTouchEndX = e.changedTouches[0].screenX;
            modalTouchEndY = e.changedTouches[0].screenY;
            handleModalSwipe();
        }, { passive: true });

        function handleModalSwipe() {
            const deltaX = modalTouchStartX - modalTouchEndX;
            const deltaY = modalTouchStartY - modalTouchEndY;
            const minSwipeDistance = 50;

            // Only handle horizontal swipes that are longer than vertical movement
            if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    // Swipe left - next slide
                    switchModalSlide(1);
                } else {
                    // Swipe right - previous slide
                    switchModalSlide(-1);
                }
            }
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const activeVideo = modal.querySelector('.modal-media.active');
    if (activeVideo && activeVideo.tagName === 'VIDEO') {
        activeVideo.play().catch(() => { });
    }
}

function getCurrentModalSlideIndex() {
    const modal = document.getElementById('postModal');
    const activeMedia = modal.querySelector('.modal-media.active');
    return Array.from(modal.querySelectorAll('.modal-media')).indexOf(activeMedia);
}

function switchModalSlide(direction) {
    const modal = document.getElementById('postModal');
    const mediaItems = modal.querySelectorAll('.modal-media');
    const dots = modal.querySelectorAll('.modal-carousel-dot');
    let currentIndex = getCurrentModalSlideIndex();
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = mediaItems.length - 1;
    if (newIndex >= mediaItems.length) newIndex = 0;

    mediaItems.forEach((item) => {
        if (item.tagName === 'VIDEO') {
            item.pause();
        }
    });

    mediaItems.forEach((item, index) => {
        item.classList.toggle('active', index === newIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newIndex);
    });

    const activeVideo = modal.querySelector('.modal-media.active');
    if (activeVideo && activeVideo.tagName === 'VIDEO') {
        activeVideo.play().catch(() => { });
    }
}

// Close Modal
function closePostModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Setup Event Listeners
function setupEventListeners() {
    const modal = document.getElementById('postModal');
    const closeBtn = document.querySelector('.ig-modal-close');
    const themeToggle = document.getElementById('themeToggle');

    closeBtn.addEventListener('click', closePostModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePostModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePostModal();
        }
    });

    // Dark Mode Toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('feedDarkMode', isDark);
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    // Load dark mode preference, default to dark mode
    const storedTheme = localStorage.getItem('feedDarkMode');
    const useDarkMode = storedTheme !== 'false';

    if (useDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Save Likes to Storage
function saveLikesToStorage() {
    localStorage.setItem('memoryFeedLikes', JSON.stringify(likedPosts));
}

// Load Likes from Storage
function loadLikesFromStorage() {
    const stored = localStorage.getItem('memoryFeedLikes');
    if (stored) {
        likedPosts = JSON.parse(stored);
    }
}

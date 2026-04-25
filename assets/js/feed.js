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
            { type: 'image', url: 'assets/images/kutty_niddiz/IMG_4311.png' },
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
            { type: 'video', url: 'assets/videos/Snapchat-1796366170.mp4' }, 
        ],
        caption: "Our First Movie Thaniya - Project Hail Mary",
        likes: 6571,
        user: 'Alison Roy',
        timestamp: '15 April 2026'
    },
    {
        id: 15,
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
        id: 16,
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
        id: 17,
        media: [
            { type: 'image', url: 'assets/images/Crab/Snapchat-352801905.jpg' }, 
            { type: 'image', url: 'assets/images/Crab/Snapchat-413380019.jpg' }, 
        ],
        caption: "Rare days when our restaurant selection turn out great; That Crab 🥰",
        likes: 18771,
        user: 'Alison Roy',
        timestamp: '27 February 2026'
    },
    {
        id: 18,
        media: [
            { type: 'video', url: 'assets/videos/Diet/PXL_20260128_132407758.mp4' }, 
            { type: 'video', url: 'assets/videos/Diet/Snapchat-1109537230.mp4' }, 
        ],
        caption: "When we are on Diet",
        likes: 67162,
        user: 'Alison Roy',
        timestamp: '28 January 2026'
    },
    {
        id: 19,
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
        id: 20,
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
    
    // {
    //     id: 15,
    //     media: [
    //         { type: 'video', url: 'assets/videos/brando/b0d752cda907432c94e939ce4a40cda4.mov' },
    //         { type: 'video', url: 'assets/videos/brando/c87aac875f554799a0244c0507434df0.mov' },
 
    //     ],
    //     caption: "How can we forget Brando !!",
    //     likes: 76123,
    //     user: 'Alison Roy',
    //     timestamp: '8 June 2021'
    // },
    // {
    //     id: 15,
    //     media: [
    //         { type: 'image', url: 'assets/images/16thbday/IMG_4978.PNG' },
    //         { type: 'image', url: 'assets/images/16thbday/IMG_4970.PNG' },
 
    //     ],
    //     caption: "Thangachiii's Birthday since we met",
    //     likes: 76123,
    //     user: 'Alison Roy',
    //     timestamp: '27 April 2021'
    // },
];

// Track liked posts
let likedPosts = {};

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    loadLikesFromStorage();
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

    return post;
}

// Carousel Functions
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

    mediaItems.forEach((item, index) => {
        item.classList.toggle('active', index === newIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newIndex);
    });
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

    mediaItems.forEach((item, index) => {
        item.classList.toggle('active', index === newIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === newIndex);
    });
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

    // Load dark mode preference
    if (localStorage.getItem('feedDarkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
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

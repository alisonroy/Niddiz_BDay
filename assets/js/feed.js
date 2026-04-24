// Modern Instagram-style Feed Data
const memoryFeedData = [
    {
        id: 1,
        media: [
            {type: 'image', url: 'assets/images/fav_us/IMG_2959.jpg'},
            {type: 'image', url: 'assets/images/fav_us/PXL_20241031_165415221.PORTRAIT.jpg'},
            {type: 'image', url: 'assets/images/fav_us/IMG_9172.jpg'},
            {type: 'image', url: 'assets/images/fav_us/PXL_20240801_161610914.MP.jpg'},
            {type: 'image', url: 'assets/images/fav_us/PXL_20250808_143929878.jpg'},
            {type: 'image', url: 'assets/images/fav_us/PXL_20241031_165410840.PORTRAIT.jpg'},
            {type: 'image', url: 'assets/images/fav_us/PXL_20241031_124848300.PORTRAIT.jpg'},
            {type: 'image', url: 'assets/images/fav_us/PXL_20250220_065504178.MP.jpg' }
        ],
        caption: 'My Favoutires of US ✨',
        likes: 882750,
        user: 'Alison',
        timestamp: 'Till the End'
    },
    {
        id: 2,
        media: [
            {type: 'image', url: 'assets/images/fav_niddiz/fav_pic.jpg'},
            {type: 'image', url: 'assets/images/fav_niddiz/IMG_9135.jpg'},
            {type: 'image', url: 'assets/images/fav_niddiz/IMG_9841.jpg'},
            {type: 'image', url: 'assets/images/fav_niddiz/IMG-20250506-WA0044.jpg'},
            {type: 'image', url: 'assets/images/fav_niddiz/Screenshot_20260414-140909~2.png'},
        ],
        caption: 'My Favoutires of My Thangachiii ✨',
        likes: 1000000,
        user: 'Alison',
        timestamp: 'Forever Beautiful'
    },
    {
        id: 3,
        media: [
            {type: 'video', url: 'assets/videos/Dad1.mp4'},
            {type: 'image', url: 'assets/images/Dad_&_Daughter/IMG-20250311-WA0024.jpg' }
        ],
        caption: 'Daddy and Daughter',
        likes: 910021,
        user: 'Alison',
        timestamp: 'Since 27/04/2005'
    },
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
                <span class="ig-comment-text">Cuteyyy</span>
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

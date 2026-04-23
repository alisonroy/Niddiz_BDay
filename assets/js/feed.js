// Modern Instagram-style Feed Data
const memoryFeedData = [
    {
        id: 1,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&h=600&fit=crop',
        caption: 'Such beautiful memories with you! ✨',
        likes: 42,
        user: 'Birthday Admin',
        timestamp: '2 hours ago'
    },
    {
        id: 2,
        type: 'video',
        media: 'https://videos.pexels.com/video-files/3962285/3962285-sd_640_360_30fps.mp4',
        caption: 'Birthday vibes! So much fun today 🎉',
        likes: 38,
        user: 'Birthday Admin',
        timestamp: '3 hours ago'
    },
    {
        id: 3,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=600&fit=crop',
        caption: 'Cheers to amazing moments 💕',
        likes: 55,
        user: 'Birthday Admin',
        timestamp: '4 hours ago'
    },
    {
        id: 4,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1533138473509-d3b3ca3f56d9?w=600&h=600&fit=crop',
        caption: 'Best day ever! 🌟',
        likes: 72,
        user: 'Birthday Admin',
        timestamp: '5 hours ago'
    },
    {
        id: 5,
        type: 'video',
        media: 'https://videos.pexels.com/video-files/7512523/7512523-sd_640_360_25fps.mp4',
        caption: 'Dancing and celebration! 🎊',
        likes: 49,
        user: 'Birthday Admin',
        timestamp: '6 hours ago'
    },
    {
        id: 6,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop',
        caption: 'Surrounded by love today ❤️',
        likes: 88,
        user: 'Birthday Admin',
        timestamp: '1 day ago'
    },
    {
        id: 7,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1516634612042-717e6eb50e65?w=600&h=600&fit=crop',
        caption: 'Time for cake and celebration 🎂',
        likes: 65,
        user: 'Birthday Admin',
        timestamp: '1 day ago'
    },
    {
        id: 8,
        type: 'video',
        media: 'https://videos.pexels.com/video-files/2802119/2802119-sd_640_360_30fps.mp4',
        caption: 'Party never stops! 🎈',
        likes: 51,
        user: 'Birthday Admin',
        timestamp: '1 day ago'
    },
    {
        id: 9,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop',
        caption: 'Making memories that last forever ✨',
        likes: 76,
        user: 'Birthday Admin',
        timestamp: '2 days ago'
    },
    {
        id: 10,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1489749798305-ed7fe0d8f67b?w=600&h=600&fit=crop',
        caption: 'Beautiful moment captured 🌺',
        likes: 43,
        user: 'Birthday Admin',
        timestamp: '2 days ago'
    },
    {
        id: 11,
        type: 'video',
        media: 'https://videos.pexels.com/video-files/3722437/3722437-sd_640_360_30fps.mp4',
        caption: 'Music, friends, and fun! 🎵',
        likes: 67,
        user: 'Birthday Admin',
        timestamp: '2 days ago'
    },
    {
        id: 12,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1519720266566-44a6b0f3318f?w=600&h=600&fit=crop',
        caption: 'One year older, infinitely more fabulous 💫',
        likes: 92,
        user: 'Birthday Admin',
        timestamp: '3 days ago'
    }
];

// Track liked posts
let likedPosts = {};

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    loadLikesFromStorage();
    initializeStories();
    initializeFeed();
    setupEventListeners();
});

// Initialize Stories
function initializeStories() {
    const storiesContainer = document.getElementById('storiesContainer');
    storiesContainer.innerHTML = '';

    memoryFeedData.slice(0, 6).forEach((memory, index) => {
        const story = document.createElement('div');
        story.className = 'ig-story';
        story.style.backgroundImage = `url('${memory.media}')`;
        
        const label = document.createElement('div');
        label.className = 'ig-story-label';
        label.textContent = `Day ${index + 1}`;
        
        story.appendChild(label);
        story.addEventListener('click', () => openPostModal(memory));
        
        storiesContainer.appendChild(story);
    });
}

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

    const mediaHtml = memory.type === 'video'
        ? `<video src="${memory.media}" controls style="width: 100%; height: 100%; object-fit: cover;"></video>`
        : `<img src="${memory.media}" alt="Memory" class="ig-post-image" data-id="${memory.id}">`;

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

        <div class="ig-post-image-container">
            ${mediaHtml}
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
                <span class="ig-comment-author">loved_one:</span>
                <span class="ig-comment-text">So beautiful! 😍</span>
            </div>
        </div>
    `;

    // Event listeners
    const likeBtn = post.querySelector('.like-btn');
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(memory, likeBtn, post.querySelector(`[data-id="${memory.id}"].ig-like-count`));
    });

    post.querySelector('.ig-post-image-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('ig-post-image')) {
            openPostModal(memory);
        }
    });

    // Update like button styling
    if (likedPosts[memory.id]) {
        likeBtn.classList.add('liked');
    }

    return post;
}

// Toggle Like
function toggleLike(memory, button, likeCountEl) {
    if (likedPosts[memory.id]) {
        // Unlike
        likedPosts[memory.id] = false;
        button.classList.remove('liked');
        button.querySelector('i').classList.remove('fa-solid');
        button.querySelector('i').classList.add('far');
        memory.likes--;
    } else {
        // Like
        likedPosts[memory.id] = true;
        button.classList.add('liked');
        button.querySelector('i').classList.remove('far');
        button.querySelector('i').classList.add('fa-solid');
        memory.likes++;
        createLikeAnimation(button);
    }

    likeCountEl.innerHTML = `<strong>${memory.likes}</strong> likes`;
    saveLikesToStorage();
}

// Like Animation
function createLikeAnimation(button) {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '2rem';
    heart.style.zIndex = '999';

    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + 'px';
    heart.style.top = rect.top + 'px';

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
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalLikes = document.getElementById('modalLikes');

    if (memory.type === 'video') {
        const video = document.createElement('video');
        video.src = memory.media;
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '80vh';
        const parent = modalImage.parentElement;
        modalImage.replaceWith(video);
        video.id = 'modalImage';
    } else {
        if (modalImage.tagName !== 'IMG') {
            const img = document.createElement('img');
            img.id = 'modalImage';
            modalImage.parentElement.replaceChild(img, modalImage);
            modalImage = img;
        }
        document.getElementById('modalImage').src = memory.media;
    }

    modalCaption.textContent = memory.caption;
    modalLikes.textContent = memory.likes;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
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
        localStorage.setItem('feedDarkMode', document.body.classList.contains('dark-mode'));
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

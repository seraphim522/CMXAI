// ===== 文档加载完成后执行 =====
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initScrollToTop();
    initNavbarEffects();
    initLanguageSwitch();
    initCarousel();
    initSmoothScroll();
    initAnimations();
    initNewsUpdates();
    initMobileMenu();
    initAccessibility();
});

// ===== 返回顶部功能 =====
function initScrollToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== 导航栏效果 =====
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // 导航项激活状态
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// ===== 语言切换功能 =====
function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有激活状态
            langButtons.forEach(b => b.classList.remove('active'));
            
            // 添加当前激活状态
            this.classList.add('active');
            
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// 语言切换实现
function switchLanguage(lang) {
    const translations = {
        'zh': {
            'nav-home': '首页',
            'nav-about': '研究院概况',
            'nav-news': '新闻中心',
            'nav-faculty': '师资队伍',
            'nav-education': '研究生教育',
            'nav-cooperation': '产教融合',
            'nav-regulations': '规章制度',
            'nav-recruitment': '人才招聘'
        },
        'en': {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-news': 'News',
            'nav-faculty': 'Faculty',
            'nav-education': 'Education',
            'nav-cooperation': 'Cooperation',
            'nav-regulations': 'Regulations',
            'nav-recruitment': 'Recruitment'
        }
    };
    
    // 这里可以实现更复杂的多语言切换逻辑
    console.log(`Switching to ${lang} language`);
    
    // 保存语言设置到localStorage
    localStorage.setItem('preferred-language', lang);
}

// ===== 轮播图增强功能 =====
function initCarousel() {
    const carousel = document.getElementById('mainCarousel');
    
    if (!carousel) return;
    
    // 自动播放控制
    let isAutoplay = true;
    const autoplayInterval = 5000;
    
    // 鼠标悬停暂停自动播放
    carousel.addEventListener('mouseenter', function() {
        isAutoplay = false;
    });
    
    carousel.addEventListener('mouseleave', function() {
        isAutoplay = true;
    });
    
    // 键盘控制
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            bootstrap.Carousel.getInstance(carousel).prev();
        } else if (e.key === 'ArrowRight') {
            bootstrap.Carousel.getInstance(carousel).next();
        }
    });
    
    // 添加loading状态
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        const bg = item.querySelector('.carousel-bg');
        if (bg) {
            const img = new Image();
            const bgImage = bg.style.backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
            if (bgImage) {
                img.onload = function() {
                    bg.classList.add('loaded');
                };
                img.src = bgImage[1];
            }
        }
    });
}

// ===== 平滑滚动 =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 100; // 考虑固定导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 动画效果 =====
function initAnimations() {
    // 观察器用于触发滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // 延迟动画效果
                const children = entry.target.querySelectorAll('.research-card, .content-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedSections = document.querySelectorAll('.research-section, .main-content');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
}

// ===== 新闻更新功能 =====
function initNewsUpdates() {
    // 模拟实时新闻更新
    const newsItems = document.querySelectorAll('.news-item, .announcement-item');
    
    // 添加"新"标签给最新的项目
    if (newsItems.length > 0) {
        const latestItem = newsItems[0];
        const newBadge = document.createElement('span');
        newBadge.className = 'badge bg-danger ms-2';
        newBadge.textContent = 'NEW';
        newBadge.style.fontSize = '10px';
        
        const titleElement = latestItem.querySelector('.news-title, .announcement-title');
        if (titleElement) {
            titleElement.appendChild(newBadge);
        }
    }
    
    // 自动滚动公告
    const announcementList = document.querySelector('.announcement-list');
    if (announcementList) {
        let currentIndex = 0;
        const items = announcementList.querySelectorAll('.announcement-item');
        
        if (items.length > 3) {
            setInterval(() => {
                items.forEach(item => item.style.display = 'none');
                
                for (let i = 0; i < 3; i++) {
                    const index = (currentIndex + i) % items.length;
                    items[index].style.display = 'block';
                }
                
                currentIndex = (currentIndex + 1) % items.length;
            }, 3000);
        }
    }
}

// ===== 移动端菜单优化 =====
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbarToggler || !navbarCollapse) return;
    
    // 点击菜单项后自动收起菜单（移动端）
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // 点击外部区域收起菜单
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992 && 
            !navbarToggler.contains(e.target) && 
            !navbarCollapse.contains(e.target) &&
            navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
}

// ===== 无障碍功能 =====
function initAccessibility() {
    // 键盘导航支持
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    // Tab键循环导航
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
        
        // Escape键关闭下拉菜单
        if (e.key === 'Escape') {
            const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
            openDropdowns.forEach(dropdown => {
                const toggle = dropdown.previousElementSibling;
                if (toggle) {
                    bootstrap.Dropdown.getInstance(toggle).hide();
                }
            });
        }
    });
    
    // 为图片添加alt属性检查
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.alt) {
            console.warn('Image missing alt attribute:', img.src);
        }
    });
}

// ===== 工具函数 =====

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 获取元素相对于页面的位置
function getElementOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    };
}

// 检查元素是否在视口中
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== 性能优化 =====

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 预加载关键资源
function preloadCriticalResources() {
    const criticalImages = [
        'images/slide1.jpg',
        'images/slide2.jpg',
        'images/slide3.jpg',
        'images/logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== 错误处理 =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // 在生产环境中，可以发送错误报告到服务器
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.error.toString(),
            'fatal': false
        });
    }
});

// ===== 页面可见性API =====
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面不可见时暂停动画等
        console.log('Page is hidden');
    } else {
        // 页面可见时恢复动画等
        console.log('Page is visible');
    }
});

// ===== 导出供其他脚本使用的函数 =====
window.FudanInstitute = {
    switchLanguage,
    debounce,
    throttle,
    getElementOffset,
    isElementInViewport
};

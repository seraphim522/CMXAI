// 复旦大学计算力学与人工智能研究院 - 增强版JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能模块
    initScrollAnimations();
    initCounterAnimations();
    initBackToTop();
    initSmartSearch();
    initLazyLoading();
    initCarouselEnhancement();
    initNewsUpdates();
    initNavigationEffects();
    initParallaxEffects();
    initAccessibilityFeatures();
    initPerformanceOptimization();
    
    console.log('网站功能已完全加载');
});

// 滚动动画初始化
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 添加需要动画的元素
    const animatedElements = document.querySelectorAll('.stat-item, .highlight-card, .enhanced-card, .content-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// 数字计数动画
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function startCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2秒动画
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, duration / steps);
}

// 返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 智能搜索功能
function initSmartSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const query = e.target.value.trim();
                if (query.length > 2) {
                    showSearchSuggestions(query);
                } else {
                    hideSearchSuggestions();
                }
            }, 300);
        });

        searchBtn.addEventListener('click', () => {
            performSearch(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

function showSearchSuggestions(query) {
    // 模拟搜索建议
    const suggestions = [
        '计算力学研究方向',
        '人工智能应用',
        '师资队伍介绍',
        '招生信息',
        '学术报告'
    ].filter(item => item.includes(query));

    // 这里可以添加实际的搜索建议UI
    console.log('搜索建议:', suggestions);
}

function hideSearchSuggestions() {
    // 隐藏搜索建议
    console.log('隐藏搜索建议');
}

function performSearch(query) {
    if (query.trim()) {
        // 执行搜索
        console.log('执行搜索:', query);
        // 可以跳转到搜索结果页面
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// 轮播图增强
function initCarouselEnhancement() {
    const carousel = document.getElementById('mainCarousel');
    if (carousel) {
        // 添加自动暂停功能
        carousel.addEventListener('mouseenter', () => {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                carouselInstance.pause();
            }
        });

        carousel.addEventListener('mouseleave', () => {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                carouselInstance.cycle();
            }
        });

        // 添加键盘导航
        document.addEventListener('keydown', (e) => {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                if (e.key === 'ArrowLeft') {
                    carouselInstance.prev();
                } else if (e.key === 'ArrowRight') {
                    carouselInstance.next();
                }
            }
        });
    }
}

// 新闻动态更新
function initNewsUpdates() {
    // 定期检查新闻更新
    setInterval(checkForNewsUpdates, 5 * 60 * 1000); // 每5分钟检查一次
}

async function checkForNewsUpdates() {
    try {
        // 这里可以调用API检查新闻更新
        // const response = await fetch('/api/news/latest');
        // const latestNews = await response.json();
        // updateNewsDisplay(latestNews);
        
        console.log('检查新闻更新');
    } catch (error) {
        console.error('新闻更新检查失败:', error);
    }
}

// 工具函数
const utils = {
    // 节流函数
    throttle: function(func, limit) {
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
    },

    // 防抖函数
    debounce: function(func, delay) {
        let timeoutId;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        }
    },

    // 格式化日期
    formatDate: function(date) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(date).toLocaleDateString('zh-CN', options);
    },

    // 检测移动设备
    isMobile: function() {
        return window.innerWidth <= 768;
    },

    // 平滑滚动到元素
    scrollToElement: function(element, offset = 0) {
        const targetPosition = element.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以发送错误报告到服务器
});

// 性能监控
window.addEventListener('load', function() {
    // 记录页面加载时间
    const loadTime = performance.now();
    console.log(`页面加载时间: ${loadTime.toFixed(2)}ms`);
    
    // 检查关键渲染路径
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log(`LCP: ${entry.startTime.toFixed(2)}ms`);
                }
            });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
});

// 响应式处理
window.addEventListener('resize', utils.throttle(function() {
    // 处理窗口大小变化
    const isMobile = utils.isMobile();
    document.body.classList.toggle('mobile-view', isMobile);
    
    // 重新计算某些布局
    adjustLayoutForScreenSize();
}, 250));

function adjustLayoutForScreenSize() {
    const searchWrapper = document.querySelector('.smart-search');
    if (searchWrapper) {
        if (utils.isMobile()) {
            searchWrapper.style.display = 'none';
        } else {
            searchWrapper.style.display = 'block';
        }
    }
}

// 可访问性增强
function initAccessibility() {
    // 为所有交互元素添加focus样式
    const interactiveElements = document.querySelectorAll('a, button, input, [tabindex]');
    interactiveElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        el.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });

    // 键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('using-keyboard');
    });
}

// 数据分析
function trackUserInteraction(action, category, label) {
    // 这里可以集成Google Analytics或其他分析工具
    console.log('用户行为追踪:', { action, category, label });
    
    // 示例：Google Analytics事件追踪
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         event_category: category,
    //         event_label: label
    //     });
    // }
}

// 为重要按钮添加点击追踪
document.addEventListener('click', function(e) {
    const target = e.target;
    
    if (target.matches('.btn-primary')) {
        trackUserInteraction('click', 'button', target.textContent);
    }
    
    if (target.matches('.nav-link')) {
        trackUserInteraction('navigation', 'menu', target.textContent);
    }
    
    if (target.matches('.carousel-control-next, .carousel-control-prev')) {
        trackUserInteraction('carousel', 'navigation', target.className);
    }
});

// 导出工具函数供其他脚本使用
window.SiteUtils = utils;

// PWA支持准备
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // 这里可以注册Service Worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// 导航栏效果增强
function initNavigationEffects() {
    const navbar = document.querySelector('.enhanced-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', utils.throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 导航栏背景变化
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // 导航栏隐藏/显示
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 100));
    
    // 导航链接活跃状态
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    window.addEventListener('scroll', utils.throttle(() => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }, 100));
}

// 视差效果
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.carousel-bg');
    
    window.addEventListener('scroll', utils.throttle(() => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16)); // 约60fps
}

// 无障碍功能增强
function initAccessibilityFeatures() {
    // 键盘导航支持
    document.addEventListener('keydown', (e) => {
        // ESC键关闭模态框
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                const modal = bootstrap.Modal.getInstance(openModal);
                modal.hide();
            }
        }
        
        // Tab键焦点管理
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // 鼠标点击移除键盘导航样式
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // 为动态内容添加ARIA标签
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        counter.setAttribute('aria-live', 'polite');
        counter.setAttribute('aria-label', `统计数字: ${counter.textContent}`);
    });
    
    // 图片alt属性检查
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        console.warn('图片缺少alt属性:', img.src);
    });
}

// 性能优化
function initPerformanceOptimization() {
    // 预加载关键资源
    const criticalImages = [
        'images/hero-ai-simulation.jpg',
        'images/hero-lab-equipment.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // 延迟加载非关键资源
    setTimeout(() => {
        loadNonCriticalResources();
    }, 2000);
    
    // 监控核心Web性能指标
    if ('web-vital' in window) {
        // 这里可以集成web-vitals库
        console.log('Web Vitals监控已启用');
    }
}

function loadNonCriticalResources() {
    // 加载社交媒体组件
    const socialScripts = [
        // 'https://platform.twitter.com/widgets.js',
        // 'https://connect.facebook.net/zh_CN/sdk.js'
    ];
    
    socialScripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.head.appendChild(script);
    });
}

// 初始化可访问性功能
initAccessibility();

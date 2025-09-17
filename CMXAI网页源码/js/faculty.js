// 师资队伍页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    initFacultyFilter();
    initFacultySearch();
    initFacultyAnimation();
});

// 初始化师资筛选功能
function initFacultyFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const facultyItems = document.querySelectorAll('.faculty-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的活动状态
            filterBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的活动状态
            this.classList.add('active');
            
            const filterCategory = this.getAttribute('data-filter');
            filterFaculty(filterCategory, facultyItems);
        });
    });
}

// 筛选师资
function filterFaculty(category, items) {
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.classList.remove('hidden');
            
            // 添加动画延迟
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, visibleCount * 100);
            
            visibleCount++;
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.display = 'none';
                item.classList.add('hidden');
            }, 300);
        }
    });
    
    // 显示或隐藏"无结果"提示
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

// 初始化搜索功能
function initFacultySearch() {
    const searchInput = document.getElementById('facultySearch');
    const facultyItems = document.querySelectorAll('.faculty-item');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        searchFaculty(searchTerm, facultyItems);
    });
}

// 搜索师资
function searchFaculty(searchTerm, items) {
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    items.forEach(item => {
        const facultyName = item.querySelector('.faculty-name').textContent.toLowerCase();
        const facultyResearch = item.querySelector('.faculty-intro').textContent.toLowerCase();
        const researchTags = Array.from(item.querySelectorAll('.research-tag'))
            .map(tag => tag.textContent.toLowerCase()).join(' ');
        
        const searchContent = facultyName + ' ' + facultyResearch + ' ' + researchTags;
        
        if (searchTerm === '' || searchContent.includes(searchTerm)) {
            item.style.display = 'block';
            item.classList.remove('hidden');
            
            // 高亮搜索关键词
            if (searchTerm !== '') {
                highlightSearchTerm(item, searchTerm);
            } else {
                removeHighlight(item);
            }
            
            visibleCount++;
        } else {
            item.style.display = 'none';
            item.classList.add('hidden');
        }
    });
    
    // 显示或隐藏"无结果"提示
    if (visibleCount === 0 && searchTerm !== '') {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

// 高亮搜索关键词
function highlightSearchTerm(item, searchTerm) {
    const elements = item.querySelectorAll('.faculty-name, .faculty-intro');
    
    elements.forEach(element => {
        const originalText = element.textContent;
        const highlightedText = originalText.replace(
            new RegExp(searchTerm, 'gi'),
            match => `<mark class="search-highlight">${match}</mark>`
        );
        element.innerHTML = highlightedText;
    });
}

// 移除高亮
function removeHighlight(item) {
    const highlightedElements = item.querySelectorAll('.search-highlight');
    highlightedElements.forEach(element => {
        const parent = element.parentNode;
        parent.replaceChild(document.createTextNode(element.textContent), element);
        parent.normalize();
    });
}

// 初始化动画效果
function initFacultyAnimation() {
    // 为师资卡片添加入场动画
    const facultyCards = document.querySelectorAll('.faculty-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    facultyCards.forEach(card => {
        observer.observe(card);
    });
    
    // 鼠标悬停效果增强
    facultyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 统计数据动画
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        const increment = finalValue / 30; // 30帧动画
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 50);
    });
}

// 师资详情模态框（可扩展功能）
function showFacultyDetails(facultyData) {
    // 这里可以实现师资详情的模态框显示
    console.log('显示师资详情:', facultyData);
}

// 导出联系信息
function exportContact(facultyName, email) {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${facultyName}
EMAIL:${email}
ORG:复旦大学计算力学与人工智能研究院
END:VCARD`;
    
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${facultyName}.vcf`;
    link.click();
    
    window.URL.revokeObjectURL(url);
}

// 添加到CSS的样式
const additionalStyles = `
    .search-highlight {
        background-color: #ffeb3b;
        color: #333;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: 600;
    }
    
    .faculty-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .faculty-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .filter-btn {
        position: relative;
        overflow: hidden;
    }
    
    .filter-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .filter-btn:hover::before {
        left: 100%;
    }
    
    @media (max-width: 768px) {
        .faculty-stats {
            flex-direction: column;
            gap: 10px;
        }
        
        .stat-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        
        .stat-item:last-child {
            border-bottom: none;
        }
        
        .filter-buttons {
            justify-content: center;
        }
        
        .search-box {
            margin-top: 15px;
        }
    }
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

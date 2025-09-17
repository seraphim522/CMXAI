# 复旦大学计算力学与人工智能研究院官网

## 项目概述

这是为复旦大学计算力学与人工智能研究院设计的官方网站，采用现代化的响应式设计，突出学科交叉特色，体现学术严谨性与现代化并重的设计理念。

## 技术架构

### 前端技术栈
- **HTML5** - 语义化标记，支持无障碍访问
- **CSS3** - 现代化样式，使用CSS变量和Flexbox/Grid布局
- **JavaScript (ES6+)** - 原生JavaScript，无第三方依赖
- **Bootstrap 5.3** - 响应式框架，确保移动端兼容性
- **Font Awesome 6.0** - 图标库
- **Google Fonts** - 思源黑体中文字体

### 设计特色
- **复旦蓝主色调** - 体现复旦大学品牌形象
- **渐变与阴影** - 现代化视觉效果
- **响应式设计** - 完美支持桌面端、平板和移动设备
- **无障碍支持** - 符合WCAG 2.1标准
- **SEO优化** - 语义化HTML和meta标签优化

## 项目结构

```
fudan-ai-institute/
├── index.html              # 首页
├── css/
│   └── style.css           # 主样式文件
├── js/
│   ├── main.js            # 主要JavaScript功能
│   └── faculty.js         # 师资页面专用脚本
├── images/                # 图片资源目录
│   ├── logo.png          # 复旦大学logo
│   ├── slide1.jpg        # 轮播图1
│   ├── slide2.jpg        # 轮播图2
│   ├── slide3.jpg        # 轮播图3
│   ├── faculty/          # 师资照片
│   ├── partner1.png      # 合作伙伴logo
│   ├── partner2.png
│   ├── partner3.png
│   └── wechat-qr.png     # 微信二维码
└── pages/                # 子页面
    ├── about.html        # 研究院介绍
    ├── faculty.html      # 师资队伍
    ├── history.html      # 发展历程
    ├── organization.html # 组织架构
    ├── research-news.html # 科研进展
    ├── academic-reports.html # 学术报告
    ├── media-news.html   # 媒体动态
    ├── management.html   # 管理人员
    ├── postdoc.html      # 博士后
    ├── engineers.html    # 工程师
    ├── admission.html    # 招生信息
    ├── training.html     # 培养方案
    ├── degree.html       # 学位信息
    ├── downloads.html    # 文件下载
    ├── cooperation.html  # 产教融合
    ├── regulations.html  # 规章制度
    └── recruitment.html  # 人才招聘
```

## 功能特性

### 1. 首页功能
- **响应式轮播图** - 展示重要成果和活动
- **研究方向展示** - 卡片式布局突出学科特色
- **实时新闻动态** - 自动更新的新闻和公告
- **学术讲座预告** - 时间线式展示
- **多语言切换** - 中英文双语支持

### 2. 导航系统
- **固定顶部导航** - 滚动时保持可见
- **下拉菜单** - 支持多级导航
- **面包屑导航** - 清晰的页面层级
- **移动端优化** - 汉堡菜单和手势支持

### 3. 师资展示
- **筛选功能** - 按职称分类查看
- **搜索功能** - 关键词搜索和高亮显示
- **卡片式布局** - 悬停效果和社交链接
- **详细信息** - 研究方向、联系方式、统计数据

### 4. 交互效果
- **平滑滚动** - 页面内锚点跳转
- **动画效果** - 滚动触发的入场动画
- **悬停反馈** - 丰富的用户交互反馈
- **返回顶部** - 智能显示/隐藏

### 5. 用户体验
- **加载优化** - 图片懒加载和预加载
- **错误处理** - 优雅的错误提示
- **无障碍支持** - 键盘导航和屏幕阅读器支持
- **打印样式** - 专门的打印CSS

## 页面详情

### 首页 (index.html)
- 轮播横幅展示最新成果
- 研究方向三栏布局
- 新闻动态、通知公告、学术讲座三栏信息展示
- 完整的页眉页脚结构

### 研究院介绍 (pages/about.html)
- 研究院概况和使命愿景
- 主要研究方向详细介绍
- 核心优势数字化展示
- 发展目标时间轴
- 侧边栏快速导航和重要信息

### 师资队伍 (pages/faculty.html)
- 按职称筛选功能
- 实时搜索和关键词高亮
- 师资卡片式展示
- 个人信息、研究方向、联系方式
- 统计数据可视化

## 样式系统

### CSS变量定义
```css
:root {
    --fudan-blue: #1e4d8f;        /* 复旦主蓝色 */
    --fudan-light-blue: #4a90e2;  /* 浅蓝色 */
    --fudan-dark-blue: #0f2c5c;   /* 深蓝色 */
    --fudan-gray: #f8f9fa;        /* 背景灰色 */
    --fudan-text: #333333;        /* 主要文字色 */
    --shadow-light: 0 2px 10px rgba(0,0,0,0.1);
    --shadow-medium: 0 4px 20px rgba(0,0,0,0.15);
    --transition: all 0.3s ease;
}
```

### 组件化样式
- 卡片组件 (.research-card, .faculty-card, .content-card)
- 按钮组件 (.filter-btn, .back-to-top)
- 表单组件 (.search-box)
- 导航组件 (.navbar, .breadcrumb)

## JavaScript功能模块

### main.js - 核心功能
- 滚动事件处理 (返回顶部、导航栏效果)
- 语言切换功能
- 轮播图增强
- 平滑滚动
- 动画效果控制
- 移动端菜单优化
- 无障碍支持

### faculty.js - 师资页面专用
- 师资筛选和搜索
- 动画效果
- 搜索关键词高亮
- 统计数据动画

## 响应式设计

### 断点定义
- **大屏幕** (≥1200px) - 桌面端完整布局
- **中等屏幕** (768px-1199px) - 平板适配
- **小屏幕** (576px-767px) - 大手机适配
- **超小屏幕** (<576px) - 小手机适配

### 适配策略
- 导航菜单在移动端收缩为汉堡菜单
- 多栏布局在小屏幕上变为单栏
- 字体大小和间距按屏幕尺寸调整
- 触摸友好的按钮和链接尺寸

## 浏览器兼容性

### 支持的浏览器
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **移动端浏览器** iOS Safari 14+, Chrome Mobile 90+

### 优雅降级
- CSS Grid 降级到 Flexbox
- CSS变量降级到固定值
- ES6+ 语法兼容处理

## 部署说明

### 静态部署
此项目为纯静态网站，可直接部署到任何支持静态文件的服务器：

1. **Apache/Nginx** - 上传所有文件到网站根目录
2. **CDN部署** - 可配合CDN加速资源加载
3. **GitHub Pages** - 可直接托管在GitHub Pages

### 配置建议
```apache
# .htaccess 示例配置
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]

# 开启GZIP压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript text/xml
</IfModule>

# 设置缓存
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 内容管理建议

### 图片要求
- **Logo图片** - PNG格式，透明背景，建议尺寸50x50px
- **轮播图** - JPG格式，建议尺寸1920x600px
- **师资照片** - JPG格式，建议尺寸400x300px
- **合作伙伴Logo** - PNG格式，透明背景

### 内容更新
1. **新闻动态** - 修改index.html中的新闻列表部分
2. **师资信息** - 在faculty.html中添加新的师资卡片
3. **研究进展** - 更新相应页面的内容区域
4. **联系信息** - 修改页脚的联系方式

## 扩展功能建议

### 后端集成
- 内容管理系统 (CMS)
- 用户登录系统
- 新闻发布系统
- 文件下载管理
- 在线报名系统

### 第三方服务
- Google Analytics 统计
- 在线客服系统
- 邮件订阅功能
- 社交媒体集成
- 搜索引擎优化

## 维护说明

### 定期检查项目
- 链接有效性检查
- 图片资源完整性
- 浏览器兼容性测试
- 移动端显示效果
- 页面加载速度优化

### 更新建议
- 定期更新Bootstrap和Font Awesome版本
- 优化图片资源大小
- 检查并修复JavaScript错误
- 更新网站地图和元数据

## 技术支持

如有技术问题或功能扩展需求，请联系开发团队。

---

**版权所有 © 2024 复旦大学计算力学与人工智能研究院**

@echo off
chcp 65001 >nul
echo ====================================
echo    CMXAI网站本地预览启动器
echo    复旦大学计算力学与人工智能研究院
echo ====================================
echo.
echo 正在启动网站...
echo.

REM 切换到脚本所在目录
cd /d "%~dp0"

REM 启动默认浏览器打开主页
start "" "CMXAI主页2.0.html"

echo ✓ 网站已在浏览器中打开
echo.
echo 如需关闭此窗口，请按任意键...
pause >nul
export function initAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userSection = document.getElementById('userSection');
    
    // 检查是否已登录
    checkLoginStatus();
    
    loginBtn.addEventListener('click', showLoginForm);
    registerBtn.addEventListener('click', showRegisterForm);
}

function checkLoginStatus() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        updateUIForLoggedInUser(JSON.parse(user));
    }
}

function showLoginForm() {
    const loginForm = document.createElement('div');
    loginForm.className = 'auth-form';
    loginForm.innerHTML = `
        <div class="form-overlay">
            <div class="form-container">
                <h2>登录</h2>
                <form id="loginForm">
                    <input type="text" id="username" placeholder="用户名" required>
                    <input type="password" id="password" placeholder="密码" required>
                    <button type="submit">登录</button>
                    <button type="button" class="cancel-btn">取消</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(loginForm);
    
    const form = loginForm.querySelector('form');
    const cancelBtn = loginForm.querySelector('.cancel-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin(form);
    });
    
    cancelBtn.addEventListener('click', () => {
        loginForm.remove();
    });
}

function showRegisterForm() {
    const registerForm = document.createElement('div');
    registerForm.className = 'auth-form';
    registerForm.innerHTML = `
        <div class="form-overlay">
            <div class="form-container">
                <h2>注册</h2>
                <form id="registerForm">
                    <input type="text" id="username" placeholder="用户名" required>
                    <input type="password" id="password" placeholder="密码" required>
                    <input type="password" id="confirmPassword" placeholder="确认密码" required>
                    <button type="submit">注册</button>
                    <button type="button" class="cancel-btn">取消</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(registerForm);
    
    const form = registerForm.querySelector('form');
    const cancelBtn = registerForm.querySelector('.cancel-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleRegister(form);
    });
    
    cancelBtn.addEventListener('click', () => {
        registerForm.remove();
    });
}

async function handleLogin(form) {
    const username = form.username.value;
    const password = form.password.value;
    
    // 从 localStorage 获取用户数据
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            id: user.id
        }));
        updateUIForLoggedInUser(user);
        form.parentElement.parentElement.remove();
    } else {
        alert('用户名或密码错误');
    }
}

async function handleRegister(form) {
    const username = form.username.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }
    
    // 从 localStorage 获取用户数据
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // 检查用户名是否已存在
    if (users.some(u => u.username === username)) {
        alert('用户名已存在');
        return;
    }
    
    // 创建新用户
    const newUser = {
        id: Date.now().toString(),
        username,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // 自动登录
    localStorage.setItem('currentUser', JSON.stringify({
        username: newUser.username,
        id: newUser.id
    }));
    
    updateUIForLoggedInUser(newUser);
    form.parentElement.parentElement.remove();
}

function updateUIForLoggedInUser(user) {
    const userSection = document.getElementById('userSection');
    userSection.innerHTML = `
        <span>欢迎, ${user.username}</span>
        <button id="logoutBtn">退出</button>
    `;
    
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    const userSection = document.getElementById('userSection');
    userSection.innerHTML = `
        <button id="loginBtn">登录</button>
        <button id="registerBtn">注册</button>
    `;
    
    // 重新绑定登录注册按钮事件
    document.getElementById('loginBtn').addEventListener('click', showLoginForm);
    document.getElementById('registerBtn').addEventListener('click', showRegisterForm);
} 
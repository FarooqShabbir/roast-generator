// analytics.js
const OWNER_EMAIL = 'farooq.shabbir24@gmail.com';

// ===== LOGIN HANDLER =====
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const loginBtn = document.getElementById('login-btn');

    errorMsg.textContent = '';
    errorMsg.classList.remove('show');

    // Validation
    if (!email || !password) {
        errorMsg.textContent = '⚠️ Please enter both email and password';
        errorMsg.classList.add('show');
        return;
    }

    // Check if email matches owner email
    if (email.toLowerCase() !== OWNER_EMAIL.toLowerCase()) {
        errorMsg.textContent = '❌ Access denied. This account is not authorized.';
        errorMsg.classList.add('show');
        return;
    }

    // Show loading state
    loginBtn.classList.add('loading');
    loginBtn.textContent = 'Logging in...';

    try {
        // Sign in with Firebase
        await auth.signInWithEmailAndPassword(email, password);
        // Success - handled by onAuthStateChanged listener
    } catch (error) {
        console.error('Login error:', error.code);
        
        // Show specific error messages
        if (error.code === 'auth/user-not-found') {
            errorMsg.textContent = '❌ User not found. Please check your email.';
        } else if (error.code === 'auth/wrong-password') {
            errorMsg.textContent = '❌ Incorrect password.';
        } else if (error.code === 'auth/invalid-email') {
            errorMsg.textContent = '❌ Invalid email address.';
        } else {
            errorMsg.textContent = `❌ Login failed: ${error.message}`;
        }
        
        errorMsg.classList.add('show');
        loginBtn.classList.remove('loading');
        loginBtn.textContent = 'Login';
    }
});

// ===== FORGOT PASSWORD BUTTON =====
document.getElementById('forgot-password-btn').addEventListener('click', () => {
    // Hide login form, show reset form
    document.getElementById('login-form-section').style.display = 'none';
    document.getElementById('reset-form-section').style.display = 'block';
    
    // Clear reset form
    document.getElementById('reset-email').value = '';
    document.getElementById('reset-error-msg').textContent = '';
    document.getElementById('reset-error-msg').classList.remove('show');
    document.getElementById('reset-success-msg').textContent = '';
    document.getElementById('reset-success-msg').classList.remove('show');
});

// ===== BACK TO LOGIN BUTTON =====
document.getElementById('back-to-login-btn').addEventListener('click', () => {
    // Hide reset form, show login form
    document.getElementById('login-form-section').style.display = 'block';
    document.getElementById('reset-form-section').style.display = 'none';
    
    // Clear login form
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-msg').textContent = '';
    document.getElementById('error-msg').classList.remove('show');
});

// ===== SEND PASSWORD RESET EMAIL =====
document.getElementById('send-reset-btn').addEventListener('click', async () => {
    const resetEmail = document.getElementById('reset-email').value.trim();
    const resetErrorMsg = document.getElementById('reset-error-msg');
    const resetSuccessMsg = document.getElementById('reset-success-msg');
    const sendResetBtn = document.getElementById('send-reset-btn');

    // Clear previous messages
    resetErrorMsg.textContent = '';
    resetErrorMsg.classList.remove('show');
    resetSuccessMsg.textContent = '';
    resetSuccessMsg.classList.remove('show');

    // Validation
    if (!resetEmail) {
        resetErrorMsg.textContent = '⚠️ Please enter your email address';
        resetErrorMsg.classList.add('show');
        return;
    }

    // Check if email is owner email
    if (resetEmail.toLowerCase() !== OWNER_EMAIL.toLowerCase()) {
        resetErrorMsg.textContent = '❌ This email is not registered as an owner account.';
        resetErrorMsg.classList.add('show');
        return;
    }

    // Show loading state
    sendResetBtn.classList.add('loading');
    sendResetBtn.textContent = 'Sending...';

    try {
        // Send password reset email via Firebase
        await auth.sendPasswordResetEmail(resetEmail);
        
        // Show success message
        resetSuccessMsg.innerHTML = `
            ✅ Password reset email sent!<br><br>
            Check your inbox for a reset link.<br><br>
            <strong>Tip:</strong> Check spam folder if you don't see it in 5 minutes.
        `;
        resetSuccessMsg.classList.add('show');
        
        // Clear input
        document.getElementById('reset-email').value = '';
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
            document.getElementById('login-form-section').style.display = 'block';
            document.getElementById('reset-form-section').style.display = 'none';
        }, 3000);
        
    } catch (error) {
        console.error('Reset error:', error.code);
        
        // Show specific error messages
        if (error.code === 'auth/user-not-found') {
            resetErrorMsg.textContent = '❌ This email is not registered.';
        } else if (error.code === 'auth/invalid-email') {
            resetErrorMsg.textContent = '❌ Invalid email address.';
        } else {
            resetErrorMsg.textContent = `❌ Error: ${error.message}`;
        }
        
        resetErrorMsg.classList.add('show');
        sendResetBtn.classList.remove('loading');
        sendResetBtn.textContent = 'Send Reset Email';
    }
});

// ===== LOGOUT HANDLER =====
document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        await auth.signOut();
        // onAuthStateChanged listener will handle UI update
    } catch (error) {
        console.error('Logout error:', error);
    }
});

// ===== AUTH STATE LISTENER =====
// Runs whenever auth state changes (login, logout, page load)
auth.onAuthStateChanged(user => {
    if (user) {
        // User is logged in
        if (user.email.toLowerCase() === OWNER_EMAIL.toLowerCase()) {
            // Email matches owner - show analytics
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('analytics-container').classList.add('show');
            
            // Load and display analytics data
            loadAnalytics();
        } else {
            // User logged in but not owner - deny access
            document.getElementById('error-msg').textContent = '❌ You are not authorized to access this dashboard.';
            document.getElementById('error-msg').classList.add('show');
            auth.signOut();
        }
    } else {
        // User is NOT logged in - show login form
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('analytics-container').classList.remove('show');
        
        // Reset login form
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('error-msg').classList.remove('show');
        document.getElementById('login-btn').classList.remove('loading');
        document.getElementById('login-btn').textContent = 'Login';
    }
});

document.addEventListener('DOMContentLoaded', () => {

    if (typeof firebase === 'undefined' || !firebase.apps.length) {
        console.error('Firebase not initialized');
        return;
    }

    const db = firebase.firestore();

    const totalReviewsEl = document.getElementById('totalReviews');
    const brutalityEl = document.getElementById('brutalityScore');
    const accuracyEl = document.getElementById('accuracyScore');
    const funnyEl = document.getElementById('funnyScore');
    const overallEl = document.getElementById('overallScore');
    const reviewsList = document.getElementById('reviewsList');

    if (!totalReviewsEl || !reviewsList) {
        console.warn('Analytics elements missing');
        return;
    }

    function formatDate(ts) {
        if (!ts || !ts.toDate) return "Just now";
        return ts.toDate().toLocaleString();
    }


    function renderAnalytics(reviews) {
        if (reviews.length === 0) {
            totalReviewsEl.textContent = '0';
            brutalityEl.textContent = '0.0';
            accuracyEl.textContent = '0.0';
            funnyEl.textContent = '0.0';
            overallEl.textContent = '0.0';
            reviewsList.innerHTML = '<div class="no-reviews">No reviews yet.</div>';
            return;
        }

        const avg = key =>
            (
                reviews.reduce((s, r) => s + (Number(r[key]) || 0), 0) / reviews.length
            ).toFixed(1);

        const brutality = avg('brutality');
        const accuracy = avg('accuracy');
        const funny = avg('funny');
        const overall = ((+brutality + +accuracy + +funny) / 3).toFixed(1);

        totalReviewsEl.textContent = reviews.length;
        brutalityEl.textContent = brutality;
        accuracyEl.textContent = accuracy;
        funnyEl.textContent = funny;
        overallEl.textContent = overall;

        reviewsList.innerHTML = '';
        reviews.slice().reverse().forEach(r => {
            const div = document.createElement('div');
            div.className = 'review-card';
            div.innerHTML = `
                <strong>👤 ${r.name}</strong>
                <div>📅 ${formatDate(r.createdAt)}</div>
                <div>
                    <span class="rating-badge">🔥 ${r.brutality}</span>
                    <span class="rating-badge">🎯 ${r.accuracy}</span>
                    <span class="rating-badge">😂 ${r.funny}</span>
                </div>
                ${r.comment ? `<p>"${r.comment}"</p>` : ''}
            `;
            reviewsList.appendChild(div);
        });
    }

    // 🔥 REALTIME FIRESTORE LISTENER
    db.collection('reviews')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => {
            const reviews = snapshot.docs.map(doc => doc.data());
            renderAnalytics(reviews);
        });
});

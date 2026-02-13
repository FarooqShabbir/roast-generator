// analytics.js
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
            (reviews.reduce((s, r) => s + r[key], 0) / reviews.length).toFixed(1);

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
                <div>📅 ${r.timestamp}</div>
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

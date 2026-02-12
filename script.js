// Roast database - customize these to make them even funnier!
const roasts = {
    universal: [
        "Your existence is proof that even the laws of nature have a sense of humor.",
        "You're like a human version of autocorrect - nobody asked for you, but here you are anyway.",
        "I'd explain it to you, but I'm pretty sure you'd just forget by tomorrow.",
        "You're so forgettable, even your memory forgets you.",
        "I'm not saying you're boring, but even your shadow left you.",
        "If you were a vegetable, you'd be a couch potato.",
        "You're the human equivalent of a participation trophy.",
        "Your existence is like a browser notification - nobody wanted it and everyone wishes you'd go away.",
        "I'm trying to remember the last time you did something impressive... still waiting.",
        "You're like a WiFi signal in a basement - technically here, but useless to everyone.",
        "Your personality is like dial-up internet - slow, annoying, and it took forever to connect.",
        "If being average was an Olympic sport, you'd get the participation medal.",
        "You're proof that not everyone can be a main character in their own story.",
        "I'd insult your intelligence, but I'm not sure you have enough to notice.",
        "You're like a bad WiFi connection - sporadic, unreliable, and everyone avoids you.",
    ],
    age: {
        young: [
            "You're so young that your memory of good music is questionable.",
            "At your age, you should be changing the world, but you're still changing your mind.",
            "Your youth is wasted on you - you're doing absolutely nothing with it.",
            "Being young is no excuse for being this boring.",
        ],
        old: [
            "You're not old, you're just retro.",
            "You're so old, your birth certificate is written in Roman numerals.",
            "At your age, you should be wiser, but instead you're just creakier.",
            "You've got so many wrinkles, you could grow a forest.",
        ],
        middle: [
            "You're at that perfect age where you're too old to know what's cool, and too young to not care.",
            "The prime of your life called... it said it never knew you.",
        ]
    },
    hobby: {
        sleep: [
            "Ah, sleeping... the most productive thing you do all day.",
            "You're basically a mattress with delusions of grandeur.",
            "You sleep so much, I'm pretty sure you're a hibernating bear in human form.",
            "Your hobby is sleeping? Even your ambitions need a nap.",
        ],
        social_media: [
            "Scrolling TikTok isn't a hobby, it's a cry for help.",
            "You're so addicted to your phone, I bet you check it while using the bathroom.",
            "Your followers are probably bots. Your real followers? Zero.",
            "I love how you're glued to your screen - it's the most attention you've ever received.",
        ],
        gaming: [
            "Gaming is your hobby? Congratulations on your virtual achievements in your actual failure.",
            "You play video games? Let me guess - you're the person who says 'I'm good' after losing every round.",
            "Your gaming skill is about as impressive as your real-world skills.",
        ],
        sports: [
            "Playing sports? That's brave of you to let people see you that way.",
            "You play sports? Your athletic ability is... present.",
            "I'm sure everyone at the gym really appreciates your... effort.",
        ]
    },
    talent: {
        procrastinate: [
            "Procrastinating is not a talent, it's a lifestyle choice you're losing at.",
            "You're so good at procrastinating, you probably procrastinated at choosing this hobby.",
            "Your superpower is turning 5-minute tasks into 5-hour events.",
            "You procrastinate so much, I bet you're still thinking about yesterday's decisions.",
        ],
        complain: [
            "Complaining is your talent? Congratulations on mastering the art of being annoying.",
            "You're like a human version of constructive criticism, except without the constructive part.",
            "Your talent for complaining is exceeded only by your talent for doing absolutely nothing about it.",
        ],
        nothing: [
            "No talent? At least you're consistent.",
            "Your special talent is having no special talent. You excel at it.",
            "That's honest of you to admit. Usually people at least lie about this.",
        ]
    }
};

// Get the roast based on user input
function generateRoast(name, hobby, talent, age) {
    let roast = `Well, well, well, <strong>${name}</strong>... `;
    
    // Determine age category
    let ageRoast = '';
    if (age && age < 18) {
        ageRoast = roasts.age.young[Math.floor(Math.random() * roasts.age.young.length)];
    } else if (age && age > 60) {
        ageRoast = roasts.age.old[Math.floor(Math.random() * roasts.age.old.length)];
    } else if (age) {
        ageRoast = roasts.age.middle[Math.floor(Math.random() * roasts.age.middle.length)];
    }
    
    // Determine hobby roast
    let hobbyRoast = '';
    if (hobby) {
        const hobbyLower = hobby.toLowerCase();
        if (hobbyLower.includes('sleep')) {
            hobbyRoast = roasts.hobby.sleep[Math.floor(Math.random() * roasts.hobby.sleep.length)];
        } else if (hobbyLower.includes('tiktok') || hobbyLower.includes('instagram') || hobbyLower.includes('twitter') || hobbyLower.includes('snapchat') || hobbyLower.includes('scroll')) {
            hobbyRoast = roasts.hobby.social_media[Math.floor(Math.random() * roasts.hobby.social_media.length)];
        } else if (hobbyLower.includes('game') || hobbyLower.includes('gaming') || hobbyLower.includes('fortnite') || hobbyLower.includes('minecraft')) {
            hobbyRoast = roasts.hobby.gaming[Math.floor(Math.random() * roasts.hobby.gaming.length)];
        } else if (hobbyLower.includes('sport') || hobbyLower.includes('football') || hobbyLower.includes('basketball') || hobbyLower.includes('tennis')) {
            hobbyRoast = roasts.hobby.sports[Math.floor(Math.random() * roasts.hobby.sports.length)];
        } else {
            hobbyRoast = `Your hobby of "${hobby}" shows impressive dedication to... well, nothing particularly useful.`;
        }
    }
    
    // Determine talent roast
    let talentRoast = '';
    if (talent) {
        const talentLower = talent.toLowerCase();
        if (talentLower.includes('procrastin')) {
            talentRoast = roasts.talent.procrastinate[Math.floor(Math.random() * roasts.talent.procrastinate.length)];
        } else if (talentLower.includes('complain')) {
            talentRoast = roasts.talent.complain[Math.floor(Math.random() * roasts.talent.complain.length)];
        } else if (talentLower.includes('nothing') || talent === '') {
            talentRoast = roasts.talent.nothing[Math.floor(Math.random() * roasts.talent.nothing.length)];
        } else {
            talentRoast = `Your talent of "${talent}"? That's adorable. Really.`;
        }
    }
    
    // Combine all roasts
    if (ageRoast) roast += `${ageRoast} `;
    if (hobbyRoast) roast += `${hobbyRoast} `;
    if (talentRoast) roast += `${talentRoast} `;
    
    // Add a universal roast if we don't have enough
    if (!ageRoast && !hobbyRoast && !talentRoast) {
        roast += roasts.universal[Math.floor(Math.random() * roasts.universal.length)];
    }
    
    // Final insult
    roast += `<br><br><strong>But hey, at least you tried! That's something... I guess.</strong>`;
    
    return roast;
}

// Form handling
document.getElementById('roastForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value || 'Friend';
    const hobby = document.getElementById('hobby').value;
    const talent = document.getElementById('talent').value;
    const age = parseInt(document.getElementById('age').value) || null;
    
    const roast = generateRoast(name, hobby, talent, age);
    
    document.getElementById('roastContent').innerHTML = roast;
    document.getElementById('roastCard').classList.remove('hidden');
    
    // Scroll to roast
    document.getElementById('roastCard').scrollIntoView({ behavior: 'smooth' });
    
    // Animate floating emoji
    animateFloatingEmoji();
});

// Another roast button
document.getElementById('anotherBtn').addEventListener('click', function() {
    document.getElementById('roastForm').dispatchEvent(new Event('submit'));
});

// Fun emoji animation
function animateFloatingEmoji() {
    const emoji = document.getElementById('floatingEmoji');
    emoji.style.animation = 'none';
    setTimeout(() => {
        emoji.style.animation = 'float 3s ease-in-out infinite';
    }, 10);
}

// Easter egg - click the floating emoji for extra roast
document.getElementById('floatingEmoji').addEventListener('click', function() {
    alert("🔥 You tried to click the emoji? That's the most action you've taken all day! 🔥");
});

// Add some interactivity - make inputs bounce on focus
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
    });
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});

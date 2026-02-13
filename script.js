document.addEventListener('DOMContentLoaded', function() {

// Multi-language roast database - SAVAGE EDITION
const roasts = {
    english: {
        universal: [
            "You're not a person, you're a missed opportunity for natural selection.",
            "Your birth was the universe's way of apologizing for nothing.",
            "If you were a joke, you'd still be too dark to understand.",
            "You're proof that God has a sense of humor... and it's cruel.",
            "Your parents look at you and wonder what they did wrong in their past life.",
            "You're the human equivalent of a typo that nobody bothers to fix.",
            "If you died today, Facebook would probably think it's a scam.",
            "You're so unremarkable, even your existence is a draft.",
            "Your life is like a bad movie - everyone hopes it ends soon.",
            "You're the reason aliens don't visit Earth anymore.",
            "If you were a superpower, it would be disappointing everyone within a 10-mile radius.",
            "You're living proof that participation trophies were a mistake.",
            "Your personality is like unseasoned chicken - bland, forgettable, and nobody wanted it.",
            "You're the human equivalent of a loading screen that never loads.",
            "If stupidity was a currency, you'd still be broke.",
            "You make people question why they have free will.",
            "Your existence is like a typo in God's resume.",
            "You're what happens when nature runs out of ideas.",
            "If regret had a face, your parents would be looking at it right now.",
            "You're the reason why some people hate humanity.",
        ],
        age: {
            young: [
                "You're so young and you've already managed to waste it. That's actually impressive.",
                "At your age, you should be the future. Instead, you're proof the future is cancelled.",
                "You've got your whole life ahead of you and you're still messing it up. That's talent.",
                "Your youth is wasted on you. It's like giving a Ferrari to someone who can't drive.",
            ],
            old: [
                "You've had decades to get your act together and this is what you came up with?",
                "Your age shows - not wisdom, just that you've been getting older while staying the same.",
                "You've seen so much life and learned absolutely nothing. That's dedication to failure.",
                "Congratulations on surviving this long. Natural selection really dropped the ball with you.",
            ],
            middle: [
                "You're at the age where you should know better. The fact that you don't is just sad.",
                "You're old enough to know better and young enough to be cringe. Worst of both worlds.",
                "You've had enough time to become someone. The fact that you haven't is your real achievement.",
            ]
        },
        hobby: {
            sleep: [
                "Your hobby is sleeping? Even your pillow doesn't want to deal with you awake.",
                "Sleeping is your hobby? That's the most unproductive accomplishment of your life.",
                "You sleep so much, people think you're practicing for death.",
                "Your life is literally just waiting to fall asleep again. That's not a hobby, that's depression.",
            ],
            social_media: [
                "You're addicted to social media? That explains why you're so fake and empty inside.",
                "Scrolling through TikTok all day - the visual representation of your mental capacity.",
                "You're on your phone more than you're awake. Actually, that might be an improvement.",
                "Your social media presence is the only thing that got more attention than you deserve.",
                "You're so obsessed with likes that you forgot to like yourself.",
            ],
            gaming: [
                "Gaming is your hobby? At least in video games you can respawn. Unlike your real life.",
                "You'd rather live in a fake world - very on-brand for you.",
                "Your gaming achievements are the only place you've ever succeeded. Let that sink in.",
                "You spend more time in games than in reality. Reality made the right choice.",
            ],
            sports: [
                "You play sports? That's brave considering your athletic ability is... non-existent.",
                "Your sports career is the perfect metaphor for your life - lots of effort, zero results.",
                "You in sports is like putting a Ferrari engine in a shopping cart.",
            ],
            reading: [
                "You read? That's just you staring at dead trees hoping they'll teach you things your brain can't grasp.",
                "Reading won't help you - you'll just forget what you read because your memory is as reliable as a goldfish.",
                "Books are smarter than you. They know it. You should too.",
            ],
            music: [
                "Your music taste is a reflection of your personality - absolutely horrible and ignored by everyone.",
                "You listen to music to feel something because your actual life is that empty.",
                "Your playlist is like your life - random songs nobody asked for, all equally disappointing.",
            ],
            cooking: [
                "You cook? That's cute. Your food is like your personality - nobody wanted it and tastes like nothing.",
                "Cooking won't save you from being bland. Your food is just the physical manifestation of your soul.",
                "You think you can cook? The only thing you're good at burning is everyone's patience.",
            ],
            gym: [
                "The gym is the only place you go to feel like you're doing something productive. Spoiler: you're not.",
                "You go to the gym to take selfies, not to get fit. Your muscles know the difference.",
                "Lifting weights won't lift your self-esteem. You'll always be the same disappointment, just sweatier.",
            ],
            travel: [
                "You travel to escape your life, but you bring yourself with you everywhere. Good luck with that.",
                "You post pictures from trips to convince people you have a life. The pictures are the only proof.",
                "Traveling won't make you interesting. No amount of passport stamps can fix what's broken inside.",
            ],
            art: [
                "You do art? That's just you making tangible proof that you have no talent for anyone to see forever.",
                "Your art is like your personality - you think it's deep, but it's just confusing and nobody gets it.",
                "Drawing won't change the fact that you're a blank canvas with no substance.",
            ],
            writing: [
                "You write? You're just documenting your boring existence so nobody has to ask about it.",
                "Your writing is like your life - full of typos, grammatical errors, and nobody wants to read it.",
                "Even your words are disappointments. They're just you screaming into the void hoping someone listens.",
            ],
            movie: [
                "Watching movies is just you living through other people's lives because yours is too pathetic.",
                "You watch movies to escape reality, which tells me how unbearable you find your actual existence.",
                "Movies are better than you. Even the terrible ones have a purpose. What's yours?",
            ],
            partying: [
                "You party to convince people you're fun. Spoiler: they already know you're not.",
                "Partying is your escape from reality - a place where you can pretend to be someone worth knowing.",
                "You get drunk to tolerate yourself. That tells me everything I need to know.",
            ],
            shopping: [
                "You shop to fill the void inside you. Spoiler: money can't buy a personality.",
                "Shopping is your hobby? That's the most expensive way to admit you're empty inside.",
                "New clothes won't fix the real problem - you.",
            ],
            fitness: [
                "Fitness is your hobby? Your body and mind are both out of shape, so good luck with that.",
                "You talk about fitness like it's a hobby, but really you're just trying to repair damage that's permanent.",
                "No amount of running will help you escape yourself.",
            ]
        },
        talent: {
            procrastinate: [
                "Procrastination isn't your talent, it's your life's resume summary.",
                "You're so good at waiting that you waited too long to become someone.",
                "Your talent is turning would-be into never-was.",
                "You've mastered the art of doing nothing while wasting everyone's time.",
            ],
            complain: [
                "Your talent is complaining? At least you've found something you're naturally good at.",
                "You complain so much, your voice should come with a trigger warning.",
                "You're like a human complaints department that nobody called.",
                "You don't have problems, you ARE the problem.",
            ],
            nothing: [
                "No talent? Congrats, you're officially useless.",
                "No talent at all? At least you're honest about being worthless.",
                "Your only special skill is disappointing people - and you're really, REALLY good at it.",
                "You're the human equivalent of a blank page.",
            ],
            lying: [
                "Your talent for lying is impressive - except everyone knows you're lying, so it's actually pathetic.",
                "You lie so much you probably believe your own bullshit. That's sad.",
                "Your lies are like your personality - obvious, unconvincing, and nobody believes them anyway.",
            ],
            overthinking: [
                "Your talent for overthinking is just anxiety with a fancy name.",
                "You overthink everything because you know deep down you'll mess it up anyway.",
                "Your brain is a prison you built for yourself with your own incompetence.",
            ],
            making_excuses: [
                "You're talented at making excuses - the only thing you're good at besides disappointing people.",
                "Your excuses are like your life - nobody asked for them and nobody wants to hear them.",
                "If excuses were currency, you'd be the richest person alive. Instead, you're just broke.",
            ],
            being_late: [
                "Your talent for being late is the only consistent thing about you.",
                "You're late to everything because your life has no priorities, just like you.",
                "Being late is your brand - unreliable, disappointing, always behind.",
            ],
            being_toxic: [
                "Your talent for being toxic explains why people leave you.",
                "You're toxic because you know you're not enough, so you drag others down with you.",
                "Your negativity is so strong it could weaponize it. But you're too lazy.",
            ],
            losing_friends: [
                "Your talent for losing friends is remarkable - at least you're consistent at something.",
                "People leave you because you're not worth staying for. That's the real talent.",
                "Your friendship circle is smaller than your attention span.",
            ],
            failing: [
                "Failing is your natural talent - you don't even have to try, it just happens.",
                "Your talent for failure is so strong you fail at failing. Wait, you're still failing.",
                "You're a fail machine. That's the only thing you manufacture efficiently.",
            ],
            being_annoying: [
                "Your talent for being annoying is so refined, people have given up trying to like you.",
                "You're annoying because that's the only way you get attention. That's pathetic.",
                "Your presence is a natural repellent. You should be studied by scientists.",
            ],
            self_sabotage: [
                "Your talent for self-sabotage means you're your own worst enemy. Congratulations.",
                "You sabotage yourself because deep down you know you don't deserve success.",
                "You're so good at screwing yourself over, you should teach a masterclass.",
            ],
            giving_up: [
                "Your talent for giving up is legendary - you surrender faster than armies.",
                "You quit before you even start because you know the ending. That's cowardice.",
                "Your quitting speed is impressive - you hold a world record in disappointment.",
            ],
            gaslighting: [
                "Your talent for gaslighting is just you being delusional convincingly.",
                "You gaslight yourself more than others because your reality is already fictional.",
                "Your lies are so bad they gaslight yourself into believing them.",
            ]
        }
    },
    urdu: {
        universal: [
            "Tu insaan kam, system ka bug zyada lagta hai.",
            "Tera paida hona universe ka proper ‘oops’ tha.",
            "Agar tu joke hai na, to woh bhi bilkul flop show.",
            "Tu proof hai ke Allah bhi kabhi kabhi trolling kar deta hai.",
            "Teri ammi abbu aaj bhi sochte hain: ‘yeh hum se kaise ho gaya?’",
            "Tu zindagi ka woh typo hai jo sab dekh ke ignore kar dete hain.",
            "Tu mar bhi jaye na, log kahenge: ‘acha… khair hai.’",
            "Tu itna average hai ke background mein ghul jata hai.",
            "Teri life aisi movie hai jiska trailer bhi skip hota hai.",
            "Aliens isi liye Earth pe nahi aate ke kahin tu na mil jaye.",
            "Agar tu superpower hota, log pehle din hi refund maang lete.",
            "Tu living proof hai ke participation trophies ghalat idea tha.",
            "Teri personality ubli hui chicken jaisi hai — namak tak nahi.",
            "Tu loading screen hai jo bas ghoomta rehta hai, load kabhi nahi hota.",
            "Agar bewakoofi paisa hoti, tu phir bhi qarzi hota.",
            "Tu dekh ke lagta hai free will ek mistake hai.",
            "Teri existence rough draft jaisi hai — final kabhi bani hi nahi.",
            "Tu woh result hai jab nature bolta hai: ‘bas ho gaya’.",
            "Agar regret ka face hota, tera hota.",
            "Tu hi reason hai ke log ‘humanity’ pe doubt karte hain.",
        ],
        age: {
            young: [
                    "Itna young hai aur life pehle hi barbaad — strong start hai.",
                    "Is age mein future banna tha, tu warning sign ban gaya.",
                    "Poori zindagi pari hai aur tu abhi se hag raha hai.",
                    "Teri youth Ferrari hai aur tu usey rickshaw bana ke chala raha hai."
            ],
            old: [
                   "Itne saal milay aur yeh output nikla? Disappointing.",
                    "Age hai, wisdom missing.",
                    "Itni life dekh li phir bhi aqal nahi aayi?",
                    "Tu zinda is liye hai kyunke natural selection off-duty tha.",
            ],
            middle: [
                    "Is age mein aqal aa jani chahiye thi — par tu reh gaya.",
                    "Na proper jawan, na mature — dono worlds ka worst.",
                    "Itna time mila phir bhi kuch nahi bana? Wah yaar.",
            ]
        },
        hobby: {
            sleep: [
                    "Sona tera hobby hai? Bhai tu already half-dead lagta hai.",
                    "Itna sota hai ke lagta hai standby mode pe hai.",
                    "Teri life bas next nap ka wait hai.",
                    "Tu sirf sotay huay hi kam annoying hota hai.",
            ],
            social_media: [
                    "Social media ne tera dimagh bilkul khaali kar diya hai.",
                    "Din bhar scroll, dimagh full buffer.",
                    "Phone mein full active, real life mein ghost.",
                    "Likes ke liye marta hai, izzat ke liye nahi.",
                    "Online fake, offline bhi fake."
            ],
            gaming: [
                "Gaming tera hobby hai? Real life mein tu proper noob hai.",
                "Game mein respawn hota hai, asli zindagi mein nahi — yaad rakh.",
                "Teri sari achievements sirf screen tak hain.",
                "Reality ne tujhe reject kiya is liye tu game mein ghusa hua hai."
            ],
            sports: [
                "Sports? Bhai pehle seedha chalna seekh.",
                "Gym sirf selfie ke liye jata hai, exercise secondary hai."
            ],
            reading: [
                "Kitaabain padhta hai? Likhai hui baatein bhi tere akal mein nahi ghasti.",
                "Tu parta-likha hota par memory tere paas toh fish jaisa hai.",
                "Kitaab tujhe se smarter hain aur dono ko pata hai."
            ],
            music: [
                "Music sunta hai? Tera music taste tere personality ka mirror hai — bilkul kharab.",
                "Music sunu ta feel karne ke liye kyunke real life bilkul suni hai.",
                "Tera playlist tere jaisa — random, unwanted, aur sab equally disappointing."
            ],
            cooking: [
                "Khanah banata hai? Jo bhi banata hai woh tere personality jaisa lagta hai — bland aur beekaari.",
                "Cooking karke kya hoga, tu hi bland hai — food tere hands mein bhi boring ban jati hai.",
                "Teri cooking sirf ek cheez seekhati hai — tu itna crap hai ke food bhi kharab ho jati hai."
            ],
            gym: [
                "Gym jata hai? Selfie lene ke liye, biceps banana nahi.",
                "Gym mein jo mehnat karte ho na, apne aap ko fix karne mein lagao.",
                "Weights lift karna tere existence ke weight se nahi bachayega."
            ],
            travel: [
                "Travel karte ho taki real life se bhag sako? Problem toh tu hi ho, travel se kya farak padega?",
                "Passport pe stamps bhar lo, izzat toh phir bhi nahi mileghi.",
                "Jahan bhi jaata hai, apne aap ko le jata hai — that's the problem."
            ],
            art: [
                "Art banata hai? Teri art tere existence ki tarah ek failure aur confusion hai.",
                "Drawing mein jo teri talent dikhti hai na, woh sirf proof hai ke kuch nahi kar sakta.",
                "Art ne tujhe talented banane ki koshish ki, par tu talentless reh hi gaya."
            ],
            writing: [
                "Likhnay likhtay kya karega yaar — likha bhi tere paas kuch nahi hota jo likhn-o layaq ho.",
                "Teri writing bilkul tere personality jaisi — confusing, pointless, aur kisi ko nahi chahiye.",
                "Likhi hui baatain bhi tere tarah fail hun — nobody reads aur sab skip karte hain."
            ],
            movie: [
                "Movies dekhta hai kyunke apni life bilkul barbaad hai.",
                "Screen pe jo dekh raha hai na, woh real life se 1000 times better hai — that's sad.",
                "Movies tujhe se bhetr hain — dono ko sab pata hai."
            ],
            partying: [
                "Party karte ho taki logon ko pata chalaye ke tu 'fun' ho? Sab ko pata bhi chal gaya ke tu nahi.",
                "Sharaab pikar apne aap ko tolerate karte ho? That's mental illness.",
                "Party mein jo tu ban ne ki koshish karte ho, woh acting flop hoti hai."
            ],
            shopping: [
                "Shopping tera addiction hai kyunke internally tu khali hai.",
                "Kapre khareed lo, personality nahi khareed sakte — wo permanent missing hai tere.",
                "Shopping se tu nahi badhta, sirf teri credit card guilt badhti hai."
            ],
            fitness: [
                "Fitness tera hobby? Mind aur body dono se tu out of shape hai.",
                "Exercise kar kar bhi tu wahi rahega — barbaad.",
                "Running se apne aap nahi bhag sakta, tu kya bhagega?"
            ]
        },
        talent: {
            procrastinate: [
                    "Kal karna tera talent nahi, tera lifestyle hai.",
                    "Itna delay karta hai ke zindagi tujhe skip kar gayi.",
                    "Tu ‘would-be’ ka ‘never-hua’ version hai.",
                    "Tu wait karta reh gaya aur mauqa nikal gaya."
            ],
            complain: [
                "Shikayat karna tera full-time job hai.",
                "Tu itna rota hai ke log mute kar dete hain.",
                "Maslay kam hain, rona zyada.",
                "Tu problem nahi, complete package hai."
            ],
            nothing: [
                "Koi talent nahi? Shock nahi hua.",
                "Tu officially useless category mein aata hai.",
                "Tu blank page hai — kuch likha hi nahi.",
                "Teri special skill: logon ko disappoint karna."
            ],
            lying: [
                "Jhooth bolne mein tere jaisa koi nahi — lekin sab ko pata bhi chal jata hai ki jhooth bol rahe ho.",
                "Jhooth mein bhi tu average ho, lies bhi obvious hote hain tere.",
                "Apne aap ko bhi believe nahi karte jhooth, that's how bad tu ho."
            ],
            overthinking: [
                "Overthinking karti hai kyunke pata hai tu kharaab dega anyway.",
                "Tera brain aik prison hai jo tune apne incompetence se banaya hai.",
                "Sochne mein itna time lagata hai phir bhi galat decision leta hai."
            ],
            making_excuses: [
                "Excuse banane mein tere jaisa master nahi — ye teri aik talent bhi hai.",
                "Excuse mein tu World Cup jeet le aur real life mein fail ho jaata hai.",
                "Bahane banane mein jo energy lagati hai, actual work mein lagao na."
            ],
            being_late: [
                "Late aana tere brand identity hai — unreliable, disappointing, always behind.",
                "Time mein late aata hai kyunke tere liye kuch important nahi hai.",
                "Punctuality tere database mein exist nahi karta, bilkul tu jaisa."
            ],
            being_toxic: [
                "Toxic hone ka reason hai ke tu apne aap se hate karte ho.",
                "Teri negativity itni strong hai ke poison koi aur likha jaata.",
                "Logon ko neeche lana tere tariqon mein se aik hai — successful ho gaya."
            ],
            losing_friends: [
                "Friends chhod dete hain kyunke tu worth nahi hota.",
                "Tera friend circle jitna chhota hai, dimag utna hi chhota hai.",
                "Log jaate hain aur nahi aate — that's your biggest talent."
            ],
            failing: [
                "Fail hona tere liye natural hai — try bhi nahi karna padta, sirf exist karo.",
                "Failure tere second name hai aur tu bilkul comfortable ho us mein.",
                "Tu fail hote ho, fail hote ho, fail karte hi raho."
            ],
            being_annoying: [
                "Annoying hone mein tu aik master class level ho — sab tujhe se door bhagti hain.",
                "Tera presence aik repellent hai, scientifically proven.",
                "Log ko headache aata hai tab jaane ke 'ah, tu aa gaya'."
            ],
            self_sabotage: [
                "Apne aap ko barbaad karne ki bhi teri ek strategy hai.",
                "Success se pehle tu apne aap ko fail kar deta hai — cowardice.",
                "Sabotage karne mein tu apne aap par sabse zayada karta hai."
            ],
            giving_up: [
                "Surrender karne ka speed tere paas khud military se bhi zyada hai.",
                "Shuru karne se pehle chhod deta hai kyunke pata hai fail karega.",
                "Giving up is your Olympic gold medal — consistent winner."
            ],
            gaslighting: [
                "Apne aap ko gaslight karte ho kyunke reality bilkul unbearable hai tere liye.",
                "Jhooth bolne mein itna zyada mastery hai ke khud bhi confuse ho jata hai.",
                "Lies bolte bolte apne aap ko bhi trick kar deta hai — pathetic hai yaar."
            ]
        }
    }
};

// Opening lines
const openingLines = {
    english: [
        "Alright <strong>{name}</strong>, this is gonna sting...",
        "Listen <strong>{name}</strong>, I've got something to tell you...",
        "Okay <strong>{name}</strong>, buckle up because here we go...",
        "Dear <strong>{name}</strong>, prepare yourself...",
        "<strong>{name}</strong>, you ready for this? You're not, but here goes...",
        "So <strong>{name}</strong>, let's be real for a second...",
        "<strong>{name}</strong>, I've been thinking... and it's not good...",
        "Hey <strong>{name}</strong>, we need to talk about something...",
        "<strong>{name}</strong>, this is gonna hurt. A lot...",
        "Alright <strong>{name}</strong>, truth time...",
        "<strong>{name}</strong>, you asked for it, so here it is...",
        "Listen up <strong>{name}</strong>, because this is important...",
    ],
    urdu: [
        "{name}, seat belt baandh le, yeh thora zyada hi hurt karega...",
        "{name}, suno yaar, mujhe kuch kehna hai...",
        "{name}, ready ho jao kyunke ab scene set ho rahe hain...",
        "{name}, pyaar se bolun, par tayyar raho...",
        "{name}, tu ready nahi hai, par sun le ab...",
        "{name}, sach karhwa lg rha hai kya...",
        "{name}, main sochta tha... aur karaib hai...",
        "{name}, baat karni zaroori hai...",
        "{name}, yeh bohot dukhta hai...",
        "{name}, sach ka waqt hai ab...",
        "{name}, tu ne manga tha, toh le ab...",
        "{name}, dhyaan se suno kyunke zaruri hai...",
    ]
};

// Closing lines
const closingLines = {
    english: [
        "<br><br><strong>At 3AM you'll be thinking about this. Really thinking.</strong>",
        "<br><br><strong>Now you're gonna remember this. Whether you want to or not.</strong>",
        "<br><br><strong>Sleep well tonight knowing this is the truth.</strong>",
        "<br><br><strong>Congratulations. You've been officially roasted.</strong>",
        "<br><br><strong>That's gonna stick with you for a while. You're welcome.</strong>",
        "<br><br><strong>This is what we call 'emotional damage' in its purest form.</strong>",
        "<br><br><strong>Take a moment. Process this. Cry if you need to.</strong>",
        "<br><br><strong>Yeah, this is the moment you realize everything I said was true.</strong>",
        "<br><br><strong>Sweet dreams tonight, knowing none of this was wrong.</strong>",
        "<br><br><strong>You'll be playing this back in your head for months. Trust me.</strong>",
        "<br><br><strong>This is peak human roasting. You just experienced it.</strong>",
        "<br><br><strong>Bookmark this. Come back to it when you doubt yourself. Actually, don't. It'll hurt more.</strong>",
        "<br><br><strong>Now go think about why every single word was accurate.</strong>",
        "<br><br><strong>Call your therapist. They need to hear this.</strong>",
        "<br><br><strong>This is what happens when you ask for truth.</strong>",
    ],
    urdu: [
        "<br><br><strong>Ab 3 baje raat ko ceiling ghoor ke sochega: 'bhai itna sach kyun bola?'</strong>",
        "<br><br><strong>Ab tu isko bhoolne mein k kabil nahi rehy ga. Chahe bhaool jaye ya nahi.</strong>",
        "<br><br><strong>Aaj raat sote huay poora din yaad aayega.</strong>",
        "<br><br><strong>Mubarak ho. Tujhe official roast kar diya gaya.</strong>",
        "<br><br><strong>Yeh baat tere saath rahegi. Umr bhar.</strong>",
        "<br><br><strong>Yeh emotional damage iska ultimate form hai.</strong>",
        "<br><br><strong>Ek minute le aur soch. Ro bhi le agr zaroorat hai.</strong>",
        "<br><br><strong>Haan, ab samajh gaya tu ke sab sach tha jo main bola.</strong>",
        "<br><br><strong>Aaj raat ke sapne interesting honge, jaan le.</strong>",
        "<br><br><strong>Mahine bhar yeh sab tumare sar mein goomta rahega.</strong>",
        "<br><br><strong>Yeh human roasting ke peak par tha jo tu ne dekha.</strong>",
        "<br><br><strong>Isko bookmark kar le. Dubara suni jab apne pe doubt ho. Actually, nahi mat sun, aur hurt hoga.</strong>",
        "<br><br><strong>Ab ja aur soch ke dekh ke har baat kyu bilkul sach thi.</strong>",
        "<br><br><strong>Apne therapist ko call kar. Unhein sunana chahiye.</strong>",
        "<br><br><strong>Yeh hota hai jab sach sunna prhta hai.</strong>",
    ]
};

// Track used roasts to prevent duplicates
let usedRoastIndices = {
    universal: [],
    age: { young: [], old: [], middle: [] },
    hobby: {},
    talent: {}
};

// Get random item avoiding duplicates
function getRandomRoast(array, trackKey, subKey = null) {
    let availableIndices;
    
    if (subKey) {
        if (!usedRoastIndices[trackKey][subKey]) {
            usedRoastIndices[trackKey][subKey] = [];
        }
        availableIndices = Array.from({length: array.length}, (_, i) => i)
            .filter(i => !usedRoastIndices[trackKey][subKey].includes(i));
    } else {
        if (!usedRoastIndices[trackKey]) {
            usedRoastIndices[trackKey] = [];
        }
        availableIndices = Array.from({length: array.length}, (_, i) => i)
            .filter(i => !usedRoastIndices[trackKey].includes(i));
    }
    
    // If all roasts used, reset
    if (availableIndices.length === 0) {
        if (subKey) {
            usedRoastIndices[trackKey][subKey] = [];
        } else {
            usedRoastIndices[trackKey] = [];
        }
        availableIndices = Array.from({length: array.length}, (_, i) => i);
    }
    
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    
    if (subKey) {
        usedRoastIndices[trackKey][subKey].push(randomIndex);
    } else {
        usedRoastIndices[trackKey].push(randomIndex);
    }
    
    return array[randomIndex];
}

// Get the roast based on user input
function generateRoast(name, hobby, talent, age, language = 'english', includeOpening = true) {
    const lang = roasts[language] || roasts.english;
    const openings = openingLines[language] || openingLines.english;
    const closings = closingLines[language] || closingLines.english;
    
    // Random opening line (only if includeOpening is true)
    let roast = '';
    if (includeOpening) {
        const openingLine = openings[Math.floor(Math.random() * openings.length)]
            .replace('{name}', name);
        roast = openingLine + ' ';
    }
    
    // Determine age category
    let ageRoast = '';
    if (age && age < 18) {
        ageRoast = getRandomRoast(lang.age.young, 'age', 'young');
    } else if (age && age > 60) {
        ageRoast = getRandomRoast(lang.age.old, 'age', 'old');
    } else if (age) {
        ageRoast = getRandomRoast(lang.age.middle, 'age', 'middle');
    }
    
// Determine hobby roast
    let hobbyRoast = '';
    if (hobby) {
        const hobbyKey = hobby; // Direct mapping from dropdown value
        if (lang.hobby[hobbyKey]) {
            if (!usedRoastIndices.hobby[hobbyKey]) {
                usedRoastIndices.hobby[hobbyKey] = [];
            }
            hobbyRoast = getRandomRoast(lang.hobby[hobbyKey], 'hobby', hobbyKey);
        } else {
            if (language === 'urdu') {
                hobbyRoast = `"${hobby}" tera hobby hai? Sad baat hai.`;
            } else {
                hobbyRoast = `Your hobby is "${hobby}"? That explains a lot.`;
            }
        }
    }
    
    // Determine talent roast
    let talentRoast = '';
    if (talent) {
        const talentKey = talent; // Direct mapping from dropdown value
        if (lang.talent[talentKey]) {
            if (!usedRoastIndices.talent[talentKey]) {
                usedRoastIndices.talent[talentKey] = [];
            }
            talentRoast = getRandomRoast(lang.talent[talentKey], 'talent', talentKey);
        } else {
            if (language === 'urdu') {
                talentRoast = `"${talent}" tera talent hai? Cute.`;
            } else {
                talentRoast = `"${talent}" is what you tell yourself to feel better.`;
            }
        }
    }
    
    // Combine all roasts
    if (ageRoast) roast += `${ageRoast} `;
    if (hobbyRoast) roast += `${hobbyRoast} `;
    if (talentRoast) roast += `${talentRoast}`;
    
    // Add a universal roast if we don't have enough
    if (!ageRoast && !hobbyRoast && !talentRoast) {
        roast += getRandomRoast(lang.universal, 'universal');
    }
    
    // Random closing line
    const closingLine = closings[Math.floor(Math.random() * closings.length)];
    roast += closingLine;
    
    return roast;
}

// Form handling
document.getElementById('roastForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value || 'Friend';
    const hobby = document.getElementById('hobby').value;
    const talent = document.getElementById('talent').value;
    const age = parseInt(document.getElementById('age').value) || null;
    const language = document.getElementById('language').value;
    
    // First roast - include opening line
    const roast = generateRoast(name, hobby, talent, age, language, true);
    
    const roastCard = document.getElementById('roastCard');
    const roastContent = document.getElementById('roastContent');
    
    roastContent.innerHTML = roast;
    
    // Store values in data attributes for "Another One" button
    roastContent.setAttribute('data-name', name);
    roastContent.setAttribute('data-hobby', hobby);
    roastContent.setAttribute('data-talent', talent);
    roastContent.setAttribute('data-age', age);
    
    roastCard.classList.remove('hidden');
    
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('hobby').value = '';
    document.getElementById('talent').value = '';
    document.getElementById('age').value = '';
    
    // Scroll to roast
    roastCard.scrollIntoView({ behavior: 'smooth' });
    
    // Animate floating emoji
    animateFloatingEmoji();
});

// Another roast button - NO opening line, just roasts
document.getElementById('anotherBtn').addEventListener('click', function() {
    const roastContent = document.getElementById('roastContent');
    
    // Get stored values from data attributes
    const lastName = roastContent.getAttribute('data-name') || 'Friend';
    const lastHobby = roastContent.getAttribute('data-hobby') || '';
    const lastTalent = roastContent.getAttribute('data-talent') || '';
    const lastAge = parseInt(roastContent.getAttribute('data-age')) || null;
    const lastLanguage = document.getElementById('language').value;
    
    // Generate roast WITHOUT opening line (just pure roasts + closing)
    const roast = generateRoast(lastName, lastHobby, lastTalent, lastAge, lastLanguage, false);
    
    roastContent.innerHTML = roast;
    
    // Scroll to roast
    document.getElementById('roastCard').scrollIntoView({ behavior: 'smooth' });
    
    // Animate floating emoji
    animateFloatingEmoji();
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
    const language = document.getElementById('language').value;
    if (language === 'urdu') {
        alert("Emoji par click kiya? Emotional damage zyada chahiye?");
    } else {
        alert("You clicked the emoji? Want more emotional damage?");
    }
});

// Add some interactivity - make inputs bounce on focus
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
    });
    element.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});
// ===== REVIEW SYSTEM (FIXED) =====

  const reviewBtn = document.getElementById("reviewBtn");
  const reviewModal = document.getElementById("reviewModal");
  const closeReview = document.getElementById("closeReview");
  const reviewForm = document.getElementById("reviewForm");

  console.log({ reviewBtn, reviewModal, reviewForm });

  if (reviewBtn && reviewModal && reviewForm) {

    // OPEN MODAL
    reviewBtn.addEventListener("click", () => {
      reviewModal.classList.remove("hidden");
    });

    // CLOSE MODAL
    closeReview.addEventListener("click", () => {
      reviewModal.classList.add("hidden");
    });

    window.addEventListener("click", e => {
      if (e.target === reviewModal) {
        reviewModal.classList.add("hidden");
      }
    });

    // SUBMIT REVIEW
    reviewForm.addEventListener("submit", async e => {
      e.preventDefault();

      const review = {
        name: document.getElementById("reviewerName").value || "Anonymous",
        brutality: +document.getElementById("reviewRating").value,
        accuracy: +document.getElementById("reviewAccuracy").value,
        funny: +document.getElementById("reviewFunny").value,
        comment: document.getElementById("reviewComment").value,
        timestamp: new Date().toLocaleDateString()
      };

      // OPTIONAL Firebase support
      if (window.firebase?.apps?.length) {
        try {
          await firebase.firestore().collection("reviews").add({
            ...review,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        } catch (err) {
          console.error("Firebase error:", err);
        }
      }

      alert("Thanks for your review! 🔥");
      reviewForm.reset();
      reviewModal.classList.add("hidden");
    });

  } else {
    console.warn("⚠️ Review elements missing from HTML");
  }
}); // End of DOMContentLoaded
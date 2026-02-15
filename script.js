document.addEventListener('DOMContentLoaded', function() {

    // Multi-language roast database - SAVAGE EDITION
    const roasts = {
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
                "You're not the problem - you're the proof that problems can walk and talk.",
                "Your life is a masterclass in how to waste oxygen.",
                "You're so forgettable, even your own brain is trying to delete you.",
                "If you were erased from existence, the world wouldn't change - it would finally improve.",
                "You're the physical manifestation of a failed experiment.",
                "Your existence is nature's way of saying 'oops'.",
                "You're so irrelevant, even your shadow abandoned you.",
                "If potential had a face, you'd be the opposite of it.",
                "Your birth certificate is an apology letter from the universe.",
                "You're the kind of person who makes other people's problems seem manageable.",
                "If evolution could take a step back, you'd be it.",
                "You're so empty inside, you're basically a walking void.",
                "Your existence is like a subscription nobody signed up for.",
                "You're proof that rocks are more interesting than some humans.",
            ],
            age: {
                young: [
                    "You're so young and you've already managed to waste it. That's actually impressive.",
                    "At your age, you should be the future. Instead, you're proof the future is cancelled.",
                    "You've got your whole life ahead of you and you're still messing it up. That's talent.",
                    "Your youth is wasted on you. It's like giving a Ferrari to someone who can't drive.",
                    "You have your whole life ahead of you and you're already giving up. Bold strategy.",
                    "At your age, most people are building their future. You're building a disappointment.",
                    "Your potential was wasted the moment you were born.",
                    "You have so much time to become someone, and you're choosing to be nobody.",
                    "Youth is the time to make mistakes. Congratulations, you're nailing it.",
                    "You're at the prime of your life and you've never been less impressive.",
                    "If youth is wasted on the young, you're proof it's also useless on the incompetent.",
                    "You're young enough to change everything and dumb enough to change nothing.",
                    "Your youth is like a blank canvas - shame you're painting it with crayon.",
                    "At your age, you should have a plan. Instead, you have a pulse. Barely.",
                    "You're young, energetic, and completely pointless.",
                    "Your whole life is ahead of you, and somehow it's still looking backwards.",
                    "Being young with your personality is like having superpowers and choosing to be useless.",
                    "Your youth is the only investment that's guaranteed to fail with you.",
                ],
                old: [
                    "You've had decades to get your act together and this is what you came up with?",
                    "Your age shows - not wisdom, just that you've been getting older while staying the same.",
                    "You've seen so much life and learned absolutely nothing. That's dedication to failure.",
                    "Congratulations on surviving this long. Natural selection really dropped the ball with you.",
                    "You've been alive this long and haven't learned a single meaningful lesson? Incredible.",
                    "Your years of experience have taught you... absolutely nothing apparently.",
                    "You're old enough to know better and stupid enough to not care.",
                    "You've wasted decades being mediocre. That's commitment to failure.",
                    "Your age is the only interesting thing about you, and honestly it's just depressing.",
                    "You've been through so much and gained so little. That's a special kind of tragic.",
                    "Time hasn't made you wiser - it's just made you older and more bitter.",
                    "You've had a lifetime to become someone important. You chose to be nobody instead.",
                    "Your wrinkles are just a map of all the times you disappointed people.",
                    "You've had more time than most to figure life out, and you squandered every second.",
                    "Age is supposed to bring wisdom. You just got old. And not gracefully.",
                    "You're old enough that your bucket list is just regrets.",
                    "Time flies when you're wasting it, which explains your whole existence.",
                    "You've been given the gift of years and you turned it into a curse for everyone else.",
                ],
                middle: [
                    "You're at the age where you should know better. The fact that you don't is just sad.",
                    "You're old enough to know better and young enough to be cringe. Worst of both worlds.",
                    "You've had enough time to become someone. The fact that you haven't is your real achievement.",
                    "You're in your prime and you're wasting it on being mediocre.",
                    "You're at the age where you can't blame youth anymore. This is just who you are.",
                    "You're experienced enough to know you're failing, yet somehow keep doing it.",
                    "You're stuck in the middle of life with nothing to show except disappointment.",
                    "You're old enough to have priorities but dumb enough to have none.",
                    "You've had enough years to leave a mark. Instead, you're just a stain.",
                    "You're at the perfect age to realize you wasted all your potential.",
                    "Middle age on you looks like giving up became a lifestyle choice.",
                    "You're in the second half of life and you're already out of ideas.",
                    "You're not young enough to have excuses and not old enough for sympathy.",
                    "You're at that age where people stop asking 'what's your plan?' and just accept failure.",
                    "You're mature enough to know better and immature enough to keep messing up.",
                    "You're too old to be this lost and too lost to get older gracefully.",
                ]
            },
            hobby: {
                sleep: [
                    "Your hobby is sleeping? Even your pillow doesn't want to deal with you awake.",
                    "Sleeping is your hobby? That's the most unproductive accomplishment of your life.",
                    "You sleep so much, people think you're practicing for death.",
                    "Your life is literally just waiting to fall asleep again. That's not a hobby, that's depression.",
                    "Your hobby is sleeping because you're trying to escape reality. Understandable.",
                    "You're so lazy, sleeping is the only thing you're committed to.",
                    "Your mattress knows you better than anyone because you're there more than anywhere else.",
                    "You treat sleep like a career. Ironically, it's still more productive than your actual job.",
                    "Your pillow probably has better life plans than you do.",
                    "You love sleep because it's the only time you're not disappointed in yourself.",
                    "Sleeping is your hobby because being conscious is exhausting when you're this useless.",
                    "Your relationship with your bed is the most committed relationship you'll ever have.",
                    "You sleep to avoid your problems, which explains why you're always tired.",
                    "Your sleep schedule is the only structure in your chaotic excuse of a life.",
                    "You've turned sleeping into an art form because everything else you do is trash.",
                    "Your hobby is sleeping because it's the only way to escape being you.",
                    "You're so dedicated to sleep, your epitaph will be 'finally got some rest'.",
                ],
                social_media: [
                    "You're addicted to social media? That explains why you're so fake and empty inside.",
                    "Scrolling through TikTok all day - the visual representation of your mental capacity.",
                    "You're on your phone more than you're awake. Actually, that might be an improvement.",
                    "Your social media presence is the only thing that got more attention than you deserve.",
                    "You're so obsessed with likes that you forgot to like yourself.",
                    "Your social media persona is faker than your personality, and that's saying something.", "You scroll through social media looking for meaning, but all you find is emptiness.", "Your life is a highlight reel of sadness with good lighting.", "You post pictures of your food because nobody cares about your actual life.", "Social media knows you better than you know yourself - that's terrifying.", "Your phone addiction is the only relationship that's working out for you.", "You're so addicted to validation, you'd sell your soul for a blue checkmark.", "Your followers care about you more than your family does. Let that sink in.", "You check your phone every 2 seconds like it's going to change your miserable life.", "Social media is your diary because your actual life isn't worth remembering.", "You're creating memories for likes instead of actually living.", "Your selfie count is directly proportional to your lack of self-worth.", "Social media is the only place where you matter, which says everything about your real life.",
                ],
                gaming: [
                    "Gaming is your hobby? At least in video games you can respawn. Unlike your real life.",
                    "You'd rather live in a fake world - very on-brand for you.",
                    "Your gaming achievements are the only place you've ever succeeded. Let that sink in.",
                    "You spend more time in games than in reality. Reality made the right choice.",
                    "You're so bad at real life that even NPCs would outplay you.", "In games you can reset. In life, you're just permanently stuck on hard mode.", "Your gaming skills are the only talent you have - everything else is a disaster.", "You escape into games because reality rejected you.", "Your gaming profile has more substance than your actual personality.", "You're a legend in a fictional world and a nobody in the real one.", "Your gaming chair has seen more of you than the world ever will.", "In games you're powerful. In reality, you're powerless, which fits.", "You have unlimited lives in games and you still manage to fail at real life.", "Your only achievements are digital because reality can't support your incompetence.", "Gaming is an escape for you, but running away doesn't solve anything.", "You're so immersed in games you forgot real life exists, and honestly good choice.", "Your gaming addiction is proof that you'd rather be anyone else but you.", "In games you can be a hero. In reality, you're the villain of your own story.",
                ],
                sports: [
                    "You play sports? That's brave considering your athletic ability is... non-existent.",
                    "Your sports career is the perfect metaphor for your life - lots of effort, zero results.",
                    "You in sports is like putting a Ferrari engine in a shopping cart.",
                    "You play sports to stay fit? Clearly it's not working.", "Your sports skills are like your personality - disappointing to everyone.", "You play sports but still manage to lose at life.", "Your athletic ability is as fake as your confidence.", "You throw a ball around and call it an achievement. That's cute.", "Sports won't fix your actual problems, but I admire the distraction attempt.", "You're so bad at sports, even participation trophies feel sorry for you.", "You play sports because physical activity distracts from mental failure.", "Your sports jersey covers up the real trophy - your empty soul.", "You exercise to stay healthy while your personality rots.", "You try hard at sports because you've given up everywhere else.", "Your sports obsession is compensation for lacking everything else.", "You play sports but can't score in any area of life.", "Your athletic achievements are the only thing people tolerate about you.", "You're athletic by accident, competent by mistake, cool by delusion.",
                ],
                reading: ["You read? That's just you staring at dead trees hoping they'll teach you things your brain can't grasp.", "Reading won't help you - you'll just forget what you read because your memory is as reliable as a goldfish.", "Books are smarter than you. They know it. You should too.", "You read books to escape reality? That's the first smart thing you've done.", "Books are supposed to enlighten you, but somehow you're still in the dark.", "You reading a book is like a blind person watching a movie - technically doing it wrong.", "Books can't save you because knowledge requires understanding, and you lack both.", "You read self-help books because you're broken in ways books can't fix.", "Your reading comprehension is as bad as your life choices.", "Books inspire people. You just exist in their pages as a cautionary tale.", "You read fiction because your reality is too depressing.", "Your reading list is longer than your attention span.", "Books make people smarter. You're just reading pretty words you don't understand.", "You collect books like accomplishments, but neither actually stick with you.", "Reading gives you knowledge, but you lack the wisdom to use it.", "Your bookshelf is full of stories, but your life is a tragedy.", "You read books hoping to find yourself. Spoiler: you're still not there.", "Literature tries to teach you lessons. You're unteachable."],
                music: ["Your music taste is a reflection of your personality - absolutely horrible and ignored by everyone.", "You listen to music to feel something because your actual life is that empty.", "Your playlist is like your life - random songs nobody asked for, all equally disappointing.", "Music heals the soul? Your soul must be terminal then.", "Your music taste would make a demon turn the volume down.", "You play music so you don't have to hear the silence of your existence.", "Your ears have been damaged by years of listening to bad music and worse decisions.", "Music is supposed to inspire. You just listen to it on repeat like your life.", "Your favorite songs are probably the only thing that tolerates you.", "You connect to lyrics about heartbreak because you're broken in every way.", "Music speaks to your soul. Apparently, it has nothing nice to say.", "Your Spotify wrapped is a timeline of your emotional descent.", "You sing in the shower because that's the only audience you can trap.", "Your music taste is the audio equivalent of your personality - flat and uninspiring.", "Sound is measured in decibels. Your life success is measured in negatives.", "You listen to sad music because it's the only thing that understands you.", "Your karaoke performance is proof that some people shouldn't have a voice.", "Music connects millions. You just use it to disconnect from your failures."],
                cooking: ["You cook? That's cute. Your food is like your personality - nobody wanted it and tastes like nothing.", "Cooking won't save you from being bland. Your food is just the physical manifestation of your soul.", "You think you can cook? The only thing you're good at burning is everyone's patience.", "Your cooking is like your life - a disaster seasoned with bad decisions.", "You cook because you have to eat, but nobody has to eat your cooking.", "Your kitchen is a crime scene and your cooking is the motive.", "You follow recipes like you follow life - badly and with missing ingredients.", "Your food looks like it came from the dark web.", "Cooking should be an art. You're just creating biological hazards.", "Your meals are proof that not everyone belongs in the kitchen.", "You cook like you live - without direction or seasoning.", "Your cooking show would be called 'How to Disappoint Your Stomach'.", "You burned water once? That's impossible unless you're involved.", "Food poisoning has nothing on eating your cooking.", "Your recipes are missing one key ingredient - talent.", "You cook for others because you hate them.", "Your cooking kills bacteria because even germs won't survive it.", "Cooking is therapy for some people. For you, it's a crime."],
                gym: ["The gym is the only place you go to feel like you're doing something productive. Spoiler: you're not.", "You go to the gym to take selfies, not to get fit. Your muscles know the difference.", "Lifting weights won't lift your self-esteem. You'll always be the same disappointment, just sweatier.", "You work out so hard but still can't run away from yourself.", "Your gym membership costs more than your actual net worth.", "You go to the gym but the only thing getting bigger is your delusion.", "Sweat is just your body's tears for joining this gym.", "You workout to get healthy but your life choices keep poisoning you.", "Your gym results are like your life results - invisible.", "You lift to get strong but you're still weak in every way that matters.", "The gym is your second home because your actual home is tired of you.", "You flex muscles but have no backbone in real life.", "Your fitness journey is the only thing you've stuck with, and it shows.", "You burn calories at the gym and restore them with bad decisions.", "Your personal records are the only records you'll ever have.", "You go to the gym to fix your body but ignore your broken soul.", "Your gym mirror lies to you more than you lie to yourself.", "Physical strength won't fix internal weakness, which is your whole problem."],
                travel: ["You travel to escape your life, but you bring yourself with you everywhere. Good luck with that.", "You post pictures from trips to convince people you have a life. The pictures are the only proof.", "Traveling won't make you interesting. No amount of passport stamps can fix what's broken inside.", "You travel to find yourself but somehow get more lost with each trip.", "Your travel photos are better than your personality - low bar, still fails.", "You escape to exotic places to run from your mundane self.", "Travel broadens the mind. Yours is still the size of a pea.", "You visit new places hoping to become a new person. Spoiler: you're still you.", "Your passport has more stamps than you have accomplishments.", "You travel to Instagram, not to explore.", "No matter where you go, you're still there - and that's the problem.", "You've been to 50 countries and learned nothing.", "Your travel experiences are just backdrops for your mediocre existence.", "You take selfies in front of monuments while being a monument to failure.", "Travel is supposed to change perspective. Yours is permanently closed.", "You seek adventure because your real life is too boring to face.", "Your travel memories are better than your actual memories of being there.", "You spend money on travel instead of investing in becoming a better person."],
                art: ["You do art? That's just you making tangible proof that you have no talent for anyone to see forever.", "Your art is like your personality - you think it's deep, but it's just confusing and nobody gets it.", "Drawing won't change the fact that you're a blank canvas with no substance.", "Your art teacher probably cried - not tears of joy.", "Your paintings are better left in the dark.", "You create art because talking is too honest.", "Your artwork is proof that talent isn't distributed fairly, or at all to you.", "You express yourself through art? That's terrifying for everyone involved.", "Your art gallery would require trigger warnings.", "Picasso would weep seeing what you call art.", "Your creative vision is a creative delusion.", "You call it art. Doctors call it a cry for help.", "Your masterpiece is a masterpiece of mediocrity.", "Art is supposed to invoke emotion. Yours just invokes pity.", "You paint your feelings? That explains why everything looks like depression.", "Your art style is: 'I tried and failed spectacularly'.", "Museums rejected you faster than you reject reality.", "Your artistic expression is giving everyone headaches."],
                writing: ["You write? You're just documenting your boring existence so nobody has to ask about it.", "Your writing is like your life - full of typos, grammatical errors, and nobody wants to read it.", "Even your words are disappointments. They're just you screaming into the void hoping someone listens.", "Your writing has all the depth of a puddle.", "Your autobiography would be called 'Missed Opportunities: A Tragedy'.", "Your poetry reads like your life - uninspired and painfully mediocre.", "You write to express yourself? Silence would be better.", "Your words are like your thoughts - scattered, incomplete, and confusing.", "Your book would put insomniacs to sleep.", "Your narrative is as broken as your personality.", "You write fiction because your reality is too depressing.", "Your stories have no plot because your life has no direction.", "Your written word is a written off investment.", "You claim to be a writer but you can't write your way out of a paper bag.", "Your manuscripts should come with a suicide prevention hotline.", "You write to feel something. You just feel empty after.", "Your prose style: disappointment on paper.", "Publishers rejected you because quality control exists."],
                movie: ["Watching movies is just you living through other people's lives because yours is too pathetic.", "You watch movies to escape reality, which tells me how unbearable you find your actual existence.", "Movies are better than you. Even the terrible ones have a purpose. What's yours?", "You binge-watch shows because your real life is a season nobody wants to watch.", "Your movie taste matches your personality - all over the place and ultimately forgettable.", "You watch movies because characters have better developed personalities than you.", "Your movie nights are the highlight of your week. That's sad.", "You pause movies to relate to characters. That's embarrassing.", "You've memorized movie quotes but can't quote a single achievement.", "Movies inspire people. You just use them to avoid your problems.", "Your favorite movie probably starred someone more interesting than you.", "You watch romantic movies alone. The irony isn't lost on anyone.", "Movies are 2-3 hours long. Your life feels like a 10-hour arthouse film.", "You watch thrillers for excitement. Your real life should be enough.", "Your film opinions matter to nobody, like everything else about you.", "You live vicariously through movies because real life rejected you.", "Watching documentaries doesn't make you smart, just compensating.", "Your movie collection is longer than your attention span."],
                partying: ["You party to convince people you're fun. Spoiler: they already know you're not.", "Partying is your escape from reality - a place where you can pretend to be someone worth knowing.", "You get drunk to tolerate yourself. That tells me everything I need to know.", "Your party personality is faker than your sober one.", "You drink to feel brave, but you're just loudly disappointing.", "Your hangover is the only honest thing about you.", "Alcohol doesn't make you interesting, just louder.", "You party because you can't handle reality sober.", "Your reputation follows you harder than alcohol leaves your system.", "You black out partying. That's the only time people forget about you.", "Partying is your only skill and you're still failing at it.", "You're the person people want to leave at parties.", "Your club stories are sadder than your life story.", "You mistake loud for fun and drunk for happy.", "Parties are supposed to be fun. You just make them sad.", "Your party trick is being forgettable despite being loud.", "You drink to forget. That's ambitious, you're unforgettable.", "Your nightlife is more active than your daytime existence."],
                shopping: ["You shop to fill the void inside you. Spoiler: money can't buy a personality.", "Shopping is your hobby? That's the most expensive way to admit you're empty inside.", "New clothes won't fix the real problem - you.", "Your shopping addiction is proof of internal bankruptcy.", "You buy things to feel something. You just feel poor instead.", "Your closet is full but your life is empty.", "You shop more than you accomplish.", "Your credit card knows you better than your friends do.", "Retail therapy for you means destroying your finances with your depression.", "You own 100 outfits but no identity.", "Shopping is your only hobby because you can't fail at spending money.", "Your belongings have more purpose than you do.", "Material possessions won't fix immaterial problems.", "You're trying to buy happiness. The store ran out centuries ago.", "Your shopping bags contain more substance than your personality.", "You treat shopping like a career - terribly.", "Your online shopping history is a timeline of poor decisions.", "You collect things because you can't collect compliments."],
                fitness: ["Fitness is your hobby? Your body and mind are both out of shape, so good luck with that.", "You talk about fitness like it's a hobby, but really you're just trying to repair damage that's permanent.", "No amount of running will help you escape yourself.", "You work out to fix your body but your personality is beyond repair.", "Your fitness journey is the only thing you've committed to. Everything else fails.", "You stretch daily but can't stretch to touch success.", "Fitness goals are the only goals you set because others are too ambitious.", "You get in shape to look good. Personality is still trash.", "Your six-pack won't fix your zero-pack personality.", "You flex but have nothing to show for it.", "Fitness is your whole identity and it's still mediocre.", "You obsess over calories but ignore life choices.", "You build muscle while your character deteriorates.", "Fitness forums don't discuss what's actually broken about you.", "You're strong physically and weak everywhere else.", "Your fitness app tracks steps forward, but your life moves backward.", "You can run a marathon but can't run away from being you.", "Your fitness is your only accomplishment and it shows."],
            },
            talent: {
                procrastinate: ["Procrastination isn't your talent, it's your life's resume summary.", "You're so good at waiting that you waited too long to become someone.", "Your talent is turning would-be into never-was.", "You've mastered the art of doing nothing while wasting everyone's time.", "You procrastinate so much, you procrastinated on becoming a better person.", "Waiting is your talent and your life is the evidence.", "You delay decisions like you delay living.", "Procrastination with you isn't a habit, it's your entire personality.", "You're so good at postponing, you postponed your own success.", "Your procrastination is legendary among people who know you - all zero of them.", "You wait for the perfect moment that never comes, just like your achievements.", "Your life is a masterclass in how to do nothing productively.", "You've perfected the art of 'later' and it shows.", "Procrastination is your response to every opportunity.", "You wait so long, deadlines became history.", "Your talent for delay matches your talent for failure.", "You postpone life and wonder why it's passing you by.", "Your motto is 'I'll do it tomorrow' and you're 30 years old.", "Procrastination isn't a talent, it's a symptom of your worthlessness.", "You've turned waiting into a lifestyle and failure into a career."],
                complain: ["Your talent is complaining? At least you've found something you're naturally good at.", "You complain so much, your voice should come with a trigger warning.", "You're like a human complaints department that nobody called.", "You don't have problems, you ARE the problem.", "Your complaining is a full-time job and nobody's hiring.", "You're such an expert complainer, you should teach seminars on failure.", "Your voice is the audio equivalent of a bad decision.", "You complain about everything except yourself - the real issue.", "Your negativity is contagious and your complaining is the virus.", "You've turned complaining into an art form and it's your only achievement.", "Your mouth moves more for complaining than for anything productive.", "People listen to your complaints the way you listen to advice - not at all.", "Your complaining is proof that some people shouldn't have a voice.", "You could win an Olympic medal for complaining if disappointment was a sport.", "Your talent is complaining and you're a disappointment at everything else.", "You've mastered the art of negativity and nothing else.", "Your complaints are the only consistent thing about you.", "You complain so much, even your dreams file noise complaints.", "Your mouth is a complaint factory with unlimited production.", "You're talented at complaining and untalented at living."],
                nothing: ["No talent? Congrats, you're officially useless.", "No talent at all? At least you're honest about being worthless.", "Your only special skill is disappointing people - and you're really, REALLY good at it.", "You're the human equivalent of a blank page.", "Your talent pool is empty and so is your personality.", "Having no talent is impressive considering everything you try sucks worse.", "You're so untalented, you make mediocrity look good.", "Your lack of talent is your most consistent feature.", "No talent means you're like everyone else, except worse.", "Your resume is empty but your failure file is full.", "You've got nothing going for you and you're not even good at admitting it.", "No talent is shocking for someone who tries so hard at failing.", "Your talent is non-existent like your potential.", "You're untalented and unaware of how untalented you are.", "Having zero talent is the most honest thing about you.", "You're so untalented, even luck abandoned you.", "Your lack of ability is breathtaking in its completeness.", "You're a masterpiece of nothing.", "No talent, no charm, no redeeming qualities.", "You're proof that the universe has a cruel sense of humor."],
                lying: ["Your talent for lying is impressive - except everyone knows you're lying, so it's actually pathetic.", "You lie so much you probably believe your own bullshit. That's sad.", "Your lies are like your personality - obvious, unconvincing, and nobody believes them anyway.", "You're so bad at lying, truth would be easier.", "Your lies are transparent like your integrity.", "You lie worse than you live, which is saying something.", "Your dishonesty is the only consistent thing about you.", "You lie so badly, honesty would look good on you.", "Your lies trip over themselves faster than you do.", "You're so transparent that lying is pointless.", "Your talent for dishonesty is matched by your talent for getting caught.", "You lie like you live - poorly and pathetically.", "Your falseness is the only true thing about you.", "You're such a bad liar that your lies insult everyone's intelligence.", "Your deception skills match your deception - nonexistent.", "You lie so much, nobody believes you even when you're telling the truth.", "Your lies are as weak as your character.", "You're so dishonest, honesty would be a plot twist.", "Your talent for lying is overshadowed by your talent for getting caught.", "You lie more than you live and fail at both."],
                overthinking: ["Your talent for overthinking is just anxiety with a fancy name.", "You overthink everything because you know deep down you'll mess it up anyway.", "Your brain is a prison you built for yourself with your own incompetence.", "You think so much that you confuse it with actually doing something.", "Your overthinking is paralysis by analysis and it shows.", "You're so in your head, you forgot the outside world exists.", "Your talent for overthinking means under-performing.", "You analyze everything except your actual problems.", "Your brain is your enemy and you're losing badly.", "Thinking isn't doing and you prove it daily.", "You overthink excuses better than you execute plans.", "Your mind is a maze with no exit and you built it.", "You talk in your head more than out loud, which is still bad.", "Overthinking is your superpower and it's your downfall.", "Your internal dialogue is just criticism on repeat.", "You're so caught up in your head, reality left without you.", "Your thoughts are your worst enemy and you're losing.", "You're paralyzed by overthinking and awake from underthinking.", "Your brain works overtime and produces nothing.", "Thinking more doesn't make you smarter, just more tired."],
                making_excuses: ["You're talented at making excuses - the only thing you're good at besides disappointing people.", "Your excuses are like your life - nobody asked for them and nobody wants to hear them.", "If excuses were currency, you'd be the richest person alive. Instead, you're just broke.", "Your excuse-making skills are legendary among people who tolerate you.", "You've perfected the art of blame and it's pathetic.", "Your excuses have excuses.", "You're so good at making excuses, you should apply for a job - oh wait, you have excuses.", "Your talent is explaining away failure, which makes you expert at failing.", "You collect excuses like accomplishments - and you have neither.", "Your repertoire of reasons is the only thing consistent about you.", "Making excuses is your hobby and your life is the result.", "You've turned excuse-making into an art form and it's still terrible.", "Your excuses are thinner than your resume.", "You're talented at talking around the point which is your point.", "Your excuse list is longer than your actual accomplishments.", "You make excuses before the failure even happens.", "Your talent for rationalizing failure is matched by your talent for failing.", "You explain away responsibility better than you handle it.", "Your excuses are so practiced, they almost sound believable.", "Making excuses is the only thing you're consistent at."],
                being_late: ["Your talent for being late is the only consistent thing about you.", "You're late to everything because your life has no priorities, just like you.", "Being late is your brand - unreliable, disappointing, always behind.", "You're so late to life, you're still waiting at the station.", "Your timing is off in every aspect of existence.", "You're late because you're inefficient at everything.", "Your tardiness is a metaphor for your whole existence - always behind.", "Being on time would require effort and you're allergic to that.", "Your watch is broken just like your sense of responsibility.", "You arrive late to everything including your own success.", "Your lateness is consistent proof of your overall incompetence.", "Time management and you have a terrible relationship.", "You're so late, opportunity stopped waiting for you.", "Your inability to be on time defines your inability to do anything right.", "Being fashionably late is bad. Being you is worse.", "Your lateness is intentional because you're allergic to punctuality.", "You treat time like you treat responsibility - carelessly.", "Your clock is always behind just like your progress.", "Being late is your rebellion against getting anywhere.", "You're late because deadlines aren't real to you, just like your success."],
                being_toxic: ["Your talent for being toxic explains why people leave you.", "You're toxic because you know you're not enough, so you drag others down with you.", "Your negativity is so strong it could weaponize it. But you're too lazy.", "You're the human version of toxic waste.", "Your presence is a mental health hazard.", "You're so toxic, Hazmat suits should be required to talk to you.", "Your personality is a controlled substance.", "You're poison in human form.", "Your negativity is contagious and your attitude is terminal.", "You're so toxic, plants die when you walk by them.", "Your energy should come with a warning label.", "You contaminate everything you touch with your incompetence.", "Your vibes are a biohazard.", "You're so toxic, charcoal would refuse to filter you out.", "Your character is a waste product.", "You spread negativity like a disease and it's incurable.", "Your personality is the opposite of healing.", "You're a walking breakdown waiting to happen.", "Your toxicity is your only talent and it's destroying everything.", "You're poison and everyone knows it."],
                losing_friends: ["Your talent for losing friends is remarkable - at least you're consistent at something.", "People leave you because you're not worth staying for. That's the real talent.", "Your friendship circle is smaller than your attention span.", "You're so good at driving people away, it should be a sport.", "You lose friends like you lose at life - constantly.", "Your talent is making people regret knowing you.", "You're a friendship hurricane leaving destruction in your wake.", "People don't leave you, they escape you.", "Your contact list is shorter than your lifespan.", "You've mastered the art of being alone and here's why.", "Your isolation is self-inflicted through your personality.", "You're so good at alienating people, you should coach.", "Friends avoid you like you avoid responsibility.", "You're a talent for making people ghost you.", "Your loneliness is proof of your unworthiness.", "You drive people away faster than you can disappoint them.", "Your friends list has less substance than your personality.", "You're so talented at losing friends, you've lost count.", "People abandon you and here's why.", "Your talent for isolation is matched by your talent for deserving it."],
                failing: ["Failing is your natural talent - you don't even have to try, it just happens.", "Your talent for failure is so strong you fail at failing. Wait, you're still failing.", "You're a fail machine. That's the only thing you manufacture efficiently.", "You fail so consistently, it's your only reliable skill.", "Your failure rate is 100% which is impressive in the worst way.", "You fail at everything and you're still learning.", "Failure is your only constant relationship.", "You're talented at turning wins into losses.", "Your failure trajectory is straight down and accelerating.", "You could fail at failing if failing wasn't so easy for you.", "Your talent for disaster is unparalleled.", "You make failure look easy and everything else impossible.", "Your success rate is below zero.", "You fail with such dedication that it's almost admirable.", "Your failure is the only thing reliable about you.", "You're a walking example of how not to do anything.", "Your talent for collapse is matched by your talent for existing.", "You fail so much, you're an expert in it.", "Your downfall is your only achievement.", "You're talented at turning hope into disappointment."],
                being_annoying: ["Your talent for being annoying is so refined, people have given up trying to like you.", "You're annoying because that's the only way you get attention. That's pathetic.", "Your presence is a natural repellent. You should be studied by scientists.", "You're so annoying, silence sounds like a compliment.", "Your talent for irritating people is your only marketable skill.", "You're annoying by default and bearable by accident.", "Your existence is like nails on a chalkboard for everyone's sanity.", "You're so annoying, even your own reflection avoids you.", "Your talent is making people want to leave conversations, rooms, countries.", "You're annoying enough to be memorable and not in a good way.", "Your personality is an alarm clock nobody set.", "You're so good at being annoying, people throw compliments at you just to leave.", "Your voice is like a siren of disappointment.", "You're annoying so consistently, it's your brand.", "Your talent for getting on people's nerves is undefeated.", "You're the human equivalent of an ad you can't skip.", "Your annoying nature is the only thing about you that's strong.", "People tolerate you like a bad smell - not because they like it.", "Your talent for being unbearable is matched by your talent for not knowing it.", "You're annoying and unaware, which makes it worse."],
                self_sabotage: ["Your talent for self-sabotage means you're your own worst enemy. Congratulations.", "You sabotage yourself because deep down you know you don't deserve success.", "You're so good at screwing yourself over, you should teach a masterclass.", "You're talented at turning opportunities into catastrophes.", "Your self-destruction is your greatest achievement.", "You sabotage better than you succeed.", "Your talent for shooting yourself in the foot is legendary.", "You're so good at messing things up for yourself, it's your identity.", "Your self-sabotage is more consistent than your breathing.", "You're your own worst critic and your only enemy.", "Your talent for self-destruction is matched only by your talent for deserving it.", "You're so good at sabotaging, you should hire yourself as a competitor.", "Your self-directed failures are your only victories.", "You're talented at making bad decisions and worse ones.", "Your talent is turning winning situations into losing ones.", "You self-destruct so perfectly, it's almost beautiful.", "Your talent for messing up is directly proportional to your inability to stop.", "You sabotage yourself like you do everything else - expertly.", "Your self-destruction is the only project you complete.", "You're talented at being your own downfall."],
                giving_up: ["Your talent for giving up is legendary - you surrender faster than armies.", "You quit before you even start because you know the ending. That's cowardice.", "Your quitting speed is impressive - you hold a world record in disappointment.", "You're so good at giving up, you should teach surrender seminars.", "Your white flag is the only thing you finish.", "You quit more often than you try.", "Your talent is knowing when to lose and always choosing that moment.", "You give up like you live - quickly and with no regrets.", "Your quitting ability is matched only by your ability to fail.", "You're so good at surrendering, you could be a general of defeat.", "Your talent for abandonment extends to your own goals.", "You quit things you've never started.", "Your completion rate is zero because you don't.", "You're talented at running away from everything including yourself.", "Your quitting speed breaks the sound barrier.", "You give up like it's going out of style.", "Your talent is knowing when to lose and always choosing it.", "You surrender so fast, you're a liability.", "Your white flag is permanent.", "You're talented at being a quitter and nothing else."],
                gaslighting: ["Your talent for gaslighting is just you being delusional convincingly.", "You gaslight yourself more than others because your reality is already fictional.", "Your lies are so bad they gaslight yourself into believing them.", "You're talented at making people doubt reality and themselves.", "Your gaslighting is just creative lying wrapped in denial.", "You distort truth like you distort everything else.", "Your talent for making others doubt reality is matched by you doubting it.", "You gaslight so much, you've gaslighted yourself into being you.", "Your reality is so twisted, normal seems like delusion to you.", "You're talented at manipulation and that's your worst quality.", "Your gaslighting is so transparent, only you believe it.", "You make denial an art form and it's terrible.", "Your talent for deception extends to deceiving yourself.", "You're so good at lying, you believe your own bullshit.", "Your manipulation skills match your manipulation vulnerability.", "You gaslight people into thinking you're not awful.", "Your talent is making people question their own perception of your failure.", "You twist reality like you twist everything else - poorly.", "Your gaslighting is just advanced lying with extra steps.", "You're talented at making people wrong while you're obviously wrong."]
            }
    };

    // Opening lines
    const openingLines = [
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
    ];

    // Closing lines
    const closingLines = [
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
    ];

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
    function generateRoast(name, hobby, talent, age, includeOpening = true) {
        const lang = roasts;
        const openings = openingLines;
        const closings = closingLines;
        
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
                hobbyRoast = `Your hobby is "${hobby}"? That explains a lot.`;
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
                talentRoast = `"${talent}" is what you tell yourself to feel better.`;
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
        
        // First roast - include opening line
        const roast = generateRoast(name, hobby, talent, age, true);
        
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
        
        // Generate roast WITHOUT opening line (just pure roasts + closing)
        const roast = generateRoast(lastName, lastHobby, lastTalent, lastAge, false);
        
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
        alert("You clicked the emoji? Want more emotional damage?");
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

        if (!reviewBtn || !reviewModal || !reviewForm) {
            console.warn("⚠️ Review elements missing");
        } 
        else {

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

            // ===== SLIDER LIVE VALUE SYNC =====
            function bindSlider(sliderId, valueId) {
                const slider = document.getElementById(sliderId);
                const value = document.getElementById(valueId);

                if (!slider || !value) return;

                value.textContent = slider.value;

                slider.addEventListener("input", () => {
                    value.textContent = slider.value;
                });
            }

            bindSlider("reviewRating", "ratingValue");
            bindSlider("reviewAccuracy", "accuracyValue");
            bindSlider("reviewFunny", "funnyValue");


            // SUBMIT REVIEW → FIREBASE ONLY
            reviewForm.addEventListener("submit", async e => {
                e.preventDefault();

                if (!window.firebase || !firebase.apps.length) {
                alert("Review service unavailable. Please try again later.");
                return;
                }

                const review = {
                name: document.getElementById("reviewerName").value || "Anonymous",
                brutality: Number(document.getElementById("reviewRating").value),
                accuracy: Number(document.getElementById("reviewAccuracy").value),
                funny: Number(document.getElementById("reviewFunny").value),
                comment: document.getElementById("reviewComment").value || "",
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };

                try {
                const db = firebase.firestore();
                await db.collection("reviews").add(review);

                alert("🔥 Thanks for your review!");
                reviewForm.reset();
                reviewModal.classList.add("hidden");
                document.getElementById("roastCard").classList.add("hidden");
                document.getElementById("roastContent").innerHTML = "";

                } catch (error) {
                console.error("❌ Firebase error:", error);
                alert("Something went wrong. Please try again.");
                }
            });
        }
}); // End of DOMContentLoaded
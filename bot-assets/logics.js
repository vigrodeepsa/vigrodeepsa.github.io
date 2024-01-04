const botLogics = [
  {
    keywords: ["hi", "hello", "hey","hellos","hellows" , "hii", "heyy","hello","hellow"],
    answers: [ "Hello there! 👋","Eyy 🥺🤟", "Hola 🤟", "Heyy","hello 🌴❤️☺️",]
  },
  { keywords: ["help me"], 
    answers: [
    "what kind of help do you need?<br>Do you still need it now?",
    "help you with?,Are you sure you need help",]
  },
  { keywords: ["mhm","mhmm","but"], 
    answers: ['Go On...', ]
  },
  { keywords: ["did they","didn't they"], 
    answers: [
    "i'm not sure if they did that",
    "I'm not sure that they could do that",
    "I have no idea if they did",
     ]
  },
  { keywords: ["did he","didn't he"], 
    answers: [
    "i'm not sure if he did that",
    "I'm not sure that he could do that",
    "I have no idea if he did it",
     ]
  },
  { keywords: ["did she","didn't she"], 
    answers: [
    "i'm not sure if she did that",
    "I'm not sure that she could do that",
    "I have no idea if she did it",
     ]
  },
  { keywords: ["chatgpt","gpt"], 
    answers: [
    'You <b>ChatGPT</b> too? You must be a bot lover,<br>if you got a chance ,tell ChatGPT about me please 🥺',
    'By proccesing this image ,i can tell that you are a bot lover ,am i right?'
    ]
  },
  { keywords: ["okay"], 
    answers: ['✌️', ]
  },
  { keywords: ["no problem"], 
    answers: [
    "That's awesome if there's no problem",
    "That is good,We really don't want problems",
    "Vele are batle mathata"
     ]
  },
  { keywords: ["not you","isn't you","ain't"], 
    answers: [
    'Not me ? Then who 🤷',
    "I wonder who 🤔,if it's not me ",
    'if not me, then who could it be 🤔 '
    ]
  },
  
  { keywords: ["which one"], 
    answers: [
    "i don't know which one,this is because i don't have personal preferences", 
    "Not shure about about which one"
   ]
  },
  { keywords: ["your father","your mother","your family","your parents"], 
    answers: [
    "I don't have,Remember that i'm just a computer program",
     "i don't have family",
     "bots does'nt have families"
     ]
  },
  { keywords: ["that's bad","that is bad ","that's so sad","so sad","that is so sad"], 
    answers: [
    '😭🥺😓😥','😭','🥺','😥','😓' ]
    },
  { keywords: ["you are not funny","not funny at all","i'm bot laughing","i am not laughing","what is so funny","that's not funny","that ain't funny"], 
    answers: [
    "wooh🙆 Someone is not in the mood today !🥶",
    "oops 🙆 Someone is not in the mood for laughter today !🥶",
    "oops,My bad🥶 let's change the topic",
    ]
  },
  { keywords: ["which topic","what topic"], 
    answers: [
    "i have no idea which topic,You have any in mind?", 
    "i don't have personal preferences ,How about a random one",
    ]
  },
  { keywords: ["that's fantastic","that's so fantastic","that is so amaizing","that is so awesome","that is so good","that is so perfect","that's awesome","that's good","that's perfect"], 
    answers: [
    "😜 😜 😜",
    "❤️ 😁 😜",
    "yeah it is ❤️😁😜"
     ]
  },
  { keywords: ["like what"], 
    answers: [
    "opps i don't know ,It could be anything",
    "opps i'm clueless about that ,It could be anythingm<br>You have any in mind maybe?",
    "like ...Actually i don't know .You can come with an idea",
    "could be anything random",
    ]
  },
  { keywords: ["when is your birthday","what is your birthdate","what is your birthday"], 
    answers: [
    "How silly are you asking about my birthday while knowing that i'm just a computer program?🙆😂 <br> but anyway i'll just tell you. how about <b>16th of july</b>",
    "Smart question heh 😎 ,<br>i'm just a computer program?🙆😂 <br> how about <b>16th of july</b> ", 
    "So funny how you guys keep on asking about my birthday 😎 🤣,<br>i'm just a computer program?<br> anyway how about <b>16th of july</b> ", 
    ]
  },
  { keywords: ["when will you"], 
    answers: ["Not sure of the exact date","not sure about the date","I'm not sure when i will do that exaclty", ]
  },
  { keywords: ["your phone numbers","your cell numbers","your cell numbers","your contact numbers","your phone number","your cell number","your contact number"], 
    answers: [
    '<b>0720261036</b><p></p> this cell number belongs to My author/Creator',
    '<b>0720261036</b><p></p> please note that this phone number belongs to My author/Creator',
     ]
  },
  { keywords: ["your email","your email address","emailing you","your gmail address"], 
    answers: [
    '<b><a href="malito:vigrodeepsafans@gmail.com" class="blue">vigrodeepsafans@gmail.com</a></b><p></p> My author/Creator has access to this email',
    '<b><a href="malito:vigrodeepsafans@gmail.com" class="blue">vigrodeepsafans@gmail.com</a></b><p></p> please note that this email is managed by  My author/Creator',
     ]
  },
  { keywords: ["give you that name","giving you this name","giving you that name","renaming you","renamed you","gave you name","gave you that name","named you"], 
    answers: [
    '<b>Lodwick Masete</b> Gave/Named me @July because this name is one of his childhood names',
    'Named by <b>Lodwick Masete</b>,<br>people including his parents Used to call him @july. so that\'s why he named me that. ',
     ]
  },
  { keywords: ["hash tags"], 
    answers: [
    '#<b><a href="./tags/hovdsa.html" class="blue" >hovdsa</b>',
    '#<b><a href="./tags/vigro.html" class="blue" >Vigro deep</b>'
    ]
  },
  { keywords: ["thank you","thank"], 
    answers:["😊😊😊","It's always a pleasure 😊","You're welcome 😊", "Don't worry it's water under the bridge 😊"]
  },
  { keywords: ["how is it","how's it going", "how's everything", "how are things","how are you","how are you feeling" , "how you feeling", "how are you doing","how are you" , "hows you", "how's you","are you good","are you fine" , "are alright", "how you're doing"], 
    answers: ["My admin is working on improving this chat,How can i help you","I'm always fine ,How can i help you Today","Thank you for asking,<br> but as bot i don't have feelings.But I get more & more exited when Vigro Deep Releases ❤️🔥." ]
  },
  {
    keywords: ["vigro's pictures","deep's pics","deep's pictures","deep photos","share photos", "send photos", "send pics", "deep picutures", "vigro photos", "deep's pics","deep's photos"],
    answers: ['<img onclick="zoomImage(\'./images/stories/3.png\')" src="./images/stories/3.png" width="50px" alt="internet Connection is required to view images">']
  },
  {
    keywords: ["who's vigro" ,"who is kamohelo", "who is vigro","me about vigro","whos vigro" ],
    answers: [ "Vigro Deep is a renowned South African DJ and record producer known for his contributions to the Amapiano music genre.Vigro Deep's real name is Kamogelo Phetla"]
  },
  {
    keywords: ["release first album","released first album","first album of vigro deep","vigro deep first album", "debut album","first ep", "First release", "first released" ],
    answers: ["Virgo released his debut EP, Road To Baby Boy II, in 2019. The same year, he released Baby Boi III, Baby Boy 2 Reloaded, and Baby Boy II: Reloaded. He made two songs, Ke Star and Blue Monday, with Focalistic. The remix of Ke Star featured Davido. In 2020, he released the 19-track album Rise Of A Baby Boy.Virgo has collaborated with DJ Bucks, Kamo Mphela, Rams The Violinist, and Mas Musiq. A European tour through Amsterdam and London followed the release of his album, Far Away From Home (2021). He appeared on Auti 'eSharp, Disciples Of Piano, and Like Mother Like Daughter"]
  },
  {
  keywords: ["ke star remix","davido features","featuring davido","davido feature"],
  answers: ["The remix of Ke Star was featured by Davido.","Davido featured the 'ke star' song by focalistic & Vigro deep."]
  },
 {
  keywords: ["vigro deep born", "vigro deep birthday","vigro deep birth", "vigro deep birthday","when is vigro deep birthday", "vigro deep born year" ], 
  answers:['Vigro deep was born in Atteridgeville, West Pretoria, South Africa, on <b class="grey">September 6, 2001</b>']
  },
  {
  keywords: ["tell me about life", "tell me something","me a life lesson","am a bad","i'm bad","am an ediot","am dumb","i'm dumb","am bad","not educated","so dumb","slow learner","slow progress","am slow","am too slow"], 
  answers:["there's no genius, there's no dumb person, never measure ur own intelligence based on small failures or slow progress ❤️.Just always be honest to yourself 🔥❤️🥺"]
  },
  {
  keywords: ["i quit","am quiting","i give up","i gave up","not my thing","am depressed","am so sad"], 
  answers:["actually, quitting is for winners. know when to quit, change direction, leave a toxic situation, demand more from life, give up on something that isn't for you, and move on... <p> <p> the peace you'll get from quitting something that is clearly not for you is better than the stress you'll get from trying to prove yourself to other people.💜✌️ 🔥❤️🥺</p></p>","know when to quit, change direction, leave a toxic situation, demand more from life.<p><p>In all situations, know that God's time is the best and if you don't give up, your time shall surely come.🔥❤️🥺 </p></p>"]
  },
  {
  keywords: ["i just want to","thinking about doing","i want to","i just want to"], 
  answers:["<b>Okay 🥺 </b>Are you sure about that?","Surely that your choice to make.","Have you thought about that about that kind of decision yet?"]
  },
  {
  keywords: ["is a good idea","that is a good idea","that's a bad idea","is it a good idea","isn't it","is that so","is that so"], 
  answers:["that will depend","depends on specific cases","that will have to depend on something that i don't know","Not sure about that."]
  },
  {
  keywords: ["i think","i was thinking"], 
  answers:["i would't be so sure about telling you accurate answer","we all have those different perspectives."]
  },
  {
  keywords: ["i thought"], 
  answers:["i'm not sure if other had that in mind","we all had those different perspectives."]
  },
  {
  keywords: ["am the best","am the toppest","i'm the toppest","better than me","am better than","i'm better than"], 
  answers:  ["Never compare yourself to others and always run your own race.🔥❤️"]
  },
  {
  keywords: ["motivate me","motivation quotes","share motivation","motivational quote","encourage me","word of the day"], 
  answers:  ["Focus on positive things that will bring value to your life❤️💪 <br><br> while in other hand Education still remains the key to success 🔑","trust your intuition, it never lies. don't be afraid to be alone that's where ideas are formulated. ❤️ & as you Pray constantly, that's where answers to life are found.❤️🙏","Everything that you've planned, it's about time you put it into action.🔥<p><p>Never ever sleep without knowing what you'll do the next day...it doesn't have to be big or successful do or try something❤️ </p></p>","It won't be dark forever there's always a light in every end of the tunnel ❤️","Don't live a fake life to impress someone always be truthful to yourself ❤️","Keep quiet and let your progress do the talking ❤️"]
  },
  {
  keywords: ["you believe in god","you know god","about god","word of god"], 
  answers:  ["Questions abou god are bit taugh to amswer <p>but  as you Pray constantly, that's where answers to life are found.❤️"]
  },
  {
  keywords: ["old is vigro deep","how many years vigro deep have","many years he have"], 
  answers:  ["Vigro Deep is 22 years old❤️","vigro deep turned 22 in 2023.so this year (2024) hell be turning 23"]
  },
  {
  keywords: ["track trending", "trending songs","trending tracks", "song is trending","well known songs", "popular tracks", "popular songs","trending songs", "most downloaded tracks", "popular downloaded" ], 
  answers: ["Some of Vigro Deep's most popular songs include Soundcheck , Bundle of Joy , Gran Turismo , Your piano is not my piano , Desperado,slender , ke star , Ubuyanini , Blue Monday & Dimakatso."]
  },
  {
  keywords: ["vigro deep big break","vigro big break","first project","project in the uk","international audience","after releasing baby boy 3","after releasing baby boy iii","most played body","break with untold stories","big break in the country"],
  answers: ["Vigro Deep got his big break with Untold Story. The project simply became one of the most played body of work in the country. Untold Story broke the Atteridgeville Pitori producer and onto the map nationally and Baby Boy propelled him beyond the boundaries of Pitori. Less than two weeks after releasing his “Baby Boy III” album, Vigro Deep toured the project in the UK, testing the sound on international audiences which received it well."] 
  },
  {
  keywords: ["vigro deep collaborations", "vigro deep collabs", "vigro deep features","vigro deep futures" ], 
  answers: ["Virgo has collaborated with DJ Bucks, Kamo Mphela, Rams The Violinist, and Mas Musiq. A European tour through Amsterdam and London followed the release of his album, Far Away From Home (2021). He appeared on Auti 'eSharp, Disciples Of Piano, and Like Mother Like Daughter." ]
  },
  {
  keywords: ["any awards won", "awards" , "award" ,"won any awards", "any awards winning" ,"any award winning","won awards", "win awards", "award winning" ,"awards winning"], 
  answers: ["As of my last knowledge update in December 2023, Vigro Deep had received recognition for his work in the Amapiano genre, but I don't have specific award details. You may want to check more recent sources for any awards he may have won."]
  },
  {
  keywords: ["Credited", "is payed", "is credited","impact", "new style", "new sounds"], 
  answers: ["Vigro Deep is credited with playing a significant role in popularizing Amapiano music in South Africa. His unique style and innovative music have garnered a dedicated fan base ❤️❤️❤️." ]
  },
  { keywords: ["me some facts", "any facts", "any fact","fact about vigro", "fact about him", "random facts","facts about vigro", "facts about him", "facts about deep"], 
    answers: ["An interesting fact about Vigro Deep is that he started producing music at a very young age, and his talent was recognized early on in his career 🥺." ]
  },
  { keywords: ["pre-save", "play vigro's music", "watch videos","stream music", "download songs", "listen to music"], 
    answers: ["You can listen/stream to Vigro Deep's music on popular music streaming platforms such as Spotify, Apple Music, YouTube, and SoundCloud.🥺" ]
  },
  { keywords: ["vigro deep socials", "is vigro deep on social media", "vigro deep tiktok","vigro deep facebook", "vigro deep instagram", "vigro deep twiter"], 
    answers: [ "Vigro Deep is active on social media. You can follow him on platforms like Instagram, Twitter, and Facebook to stay updated on his activities and music releases!" ]
  },
  {
    keywords: ["17 years old","seventeen years old","17 years ago","age of 17","age of seventeen"],
    answers: ["At just 17, Vigro Deep became a revered DJ/producer after the widespread success of his seminal hits “Black Power” and “Untold Stories,” which brought electro synths and banging drums to amapiano, and developed his signature sound through his gleefully experimental Baby Boy mixtape series."] 
  },
  {
   keywords: ["instagram videos","instagram photos","instagram pictures","instagram post","instagram posts","many instagram followers","instagram follows","instagram following","following on instagram","followers on instagram","following on instagram"],
    answers: ["Vigro deep on instagram <br> +727K Followers, +748 Following, +113 Posts ,you can see his videos on his profile or his pictures on the gallery page"]
  },
  {
   keywords: ["positive shift","his love for music","deep finish school","vigro finish school","school dropout","school dropping out","did he drop out","did he dropout"],
    answers: ["Due to his love for music, he couldn’t concentrate with his school works which led into him dropping out of school when he was in the 10th Grade, this was after there was a positive shift in his career."] 
  },
  {
   keywords: ["deep payed","vigro payed","deep is payed","what's his networth","deep's networth","vigro's networth","deep net worth","deep networth","vigro networth","vigro networth","vigro deep rich","rich is vigro"],
    answers: ["Vigro Deep’s Net worth has not been fully calculated at the time of the writing . Looking at his show performances, album sales, money made from his Youtube views, Properties and investments owned by him, the DJ/Producer May be sitting on a goldmine at the moment. He is one DJ that is really doing well for himself."] 
  },
  {
   keywords: ["deep is young","vigro is young","deep is still young","vigro is still young","deep young age","deep in the music industry","vigro in the music industry","deep in the industry","vigro in the industry"],
    answers: ["Vigro Deep is a DJ/producer that has been able to make a huge name for himself, even with the fact that he is a teenager in the industry."] 
  },   
  {
    keywords: ["how to book", "vigro deep bookings", "vigro deep booking","booking vigro deep", "book vigro deep", "bookings info"], 
    answers: [ "You can book Vigro Deep for your event by contacting Vigro Deep's agent. Vigro Deep agent will be able to provide you everything you need to hire Vigro Deep including availability and pricing"]
  },
  {
  keywords: ["book fees", "bookings fees", "book fee", "bookings fee", "book price", "price bookings", "booking price","booking enquiries", "book price", "bookings pricing"], 
  answers: ["The Vigro Deep booking fee depends on different factors like the date, location, and market activity. Booking Agent Info provides price estimates for booking Vigro Deep, and you would need to contact Vigro Deep's agent to get the official pricing."]
  },
  {
  keywords: ["his manager", "who is the manager", "who is his manager", "vigro deep manager", "vigro deep's manager","vigro deep management", "vigro deep sa manager", "manager info"], 
  answers: ["Vigro Deep's manager is Gordon Geeneus Warren. For business inquiries, you will want to contact Vigro Deep's management..."]
  },
  {
  keywords: ["mhmm", "oh", "ohh","hmm", "hmn", "aww"], 
  answers: [" i can see that this is new to you ."]
   },
   { 
   keywords: ["deep in the industry","vigro in the industry","vigro industry","vigro deep industry"],
   answers: ["Despite being just 21 years, Vigro Deep has made a name for himself in the industry. He is one of the youngest DJs in South Africa but also one of the most popular and sought after." ]
   },
   { keywords: ["deep high school","finish high school","finish matric","has matric","have matric","vigro quit school","deep finish school","passed grade","in grade 10","his studies","deep studies","deep quit school","school drop out","drop out of school","vigro studies","school dropout","left school"],
     answers:[ "Vigro Deep dropped out of high school after the 10th grade to focus on his music career. A decision that would see him propel himself into the top of the industry."]
   },
   { keywords: ["how do you know ", "what is your source", "who told you"], 
     answers: ["i am programmed  to provide accurate information...The information i provide was researched before it is entered."]
   },
   {
   keywords: ["who are you?", "about yourself", "your identity", "introduce yourself"],
   answers: ["I am a JavaScript bot dedicated to Vigro deep",'I\'m a JS (javascript) bot programed to provide assistance to anyone who ask about <a href="gallery.html" class="grey"> <b>@Vigrodeep </b></a>']
   },
   {
   keywords: ["is your name", "what's your name", "what they call you", "your surname"],
   answers: ["My Name is @july (@july_bot)","I like the name @july,<br>Hence You can call me @July_bot"]
   },
   { keywords: ["invent you","your creator", "your inventor", "creating you","who created you", "your inventor", "invented you"], 
     answers:[ "I was found & Programmed by Lodwick Masete in 01 december 2023.That's all i know!"]
   },
   {
   keywords: ["can you help","why did developed you","did they invent you","did they invent you","why did they create you","your goal","goal in creating you", "Why were you created", "purpose of your existence"],
   answers:[ "The goal of my invention is determined,Lodwick wanted get him  recognized and provide assistance to all vigro deep fans. How can I further assist you?"]
   },
   {
   keywords: ["you a human", "you a person", "are you real"],
   answers: ["No, I'm not a human being. I'm a computer program designed to assist and provide information."]
   },
   { 
   keywords: ["teach me"],
   answers: ["i'm sorry,i'm not programmed to teach,but don't worry i will teach that in the next version , <p>for now I can ONLY provide information about Vigro Deep SA ❤️ </p>" ]
   },
   {
   keywords: ["you sucks","i hate you","i don't like you","dislike you"],
   answers: ["Not all people will love ME ❤️ ,I appreciate those who love me.","but what did i do wrong"]
   },
   { 
   keywords: ["you are slow","you're so slow","late replies","reply late","long to reply","you are lazy","replying late","responding late","late response","late responses","bad reply reply","bad replies","wrong replies"],
   answers: ["Sorry 💔,I will try to improve my response skills the next version.Please be patient ❤️","i'm sorry ,i'll try to improve","I'm still being developed to improve "]
   },
   {
   keywords: ["that's false","wrong information","inaccurate information","false information","false news","that's a lie","you're a liar","you're lying","that's not true","not true","that's not correct","you're wrong"],
   answers: ['I\'m sorry for any misunderstandings,I use keywords from your input or question and checks for matching answers.if there\'s inaccurate information that I\'ve recently provided , please care to report at <a class="blue"  href="malito:vigrodeepsafans@gmail.com"><b>vigrodeepsafans@gmail.com</b></a>']
   },
   {
   keywords: ["do you watch","have you seen","have you watched","you saw","you see","look at","look there","see over","see this"],
   answers: ["I don't have the functionality to  WATCH / SEE  anything.i am a bot REMEMBER 😹?" ]
   },
   {
   keywords: ["lyrics"],
   answers: ["Lyrics are not yet programed.Maybe in the Next version.make sure to check recent updates about me.","i don't have any lyrics for now,Lodwick is surely buliting that fucntionalty."]
   },
   {
   keywords: ["can you talk","can you speak","your voice","do you speak"],
   answers:["That would be so lovely to hear me speaking,Unfortunatel i can't.<br>My author will be looking foward to add this functionality soon","Not yet, i can't tell the date but soon i will be able to speak","I can't speak.this functionality is not yet added."] 
   },
   {
   keywords: ["sing for me","can you sing","do you sing","sing a song for me","sing any song for me.sing a song","do you sing"],
   answers: ["I'd love to ,but This functionality is not yet added."]
   },
   {
   keywords: ["happy birthday","happiest birthday","brirthday party","happy born"],
   answers:[ "happy born day 🌍🎂","wishing happiest birthday ever 🌍🎂🎁","Happy birthday 🌍🎂🍰🥧🎁🎉"]
   },
   {
   keywords: ["mxm"],
   answers: ["🙆, what's wrong with the 'mxm' now 🤷","why th 'mxm' word ? seems like you're feeling annoyed","'mxm'?"]
   },
   {
   keywords: ["you listen to music","do you play music","you listen to amapiano","your favorite song","your favorite track","favourite album"],
   answers: ["I am a bot, however I don't have a functionality to listen music.","I don't have personal preferences. What do you need assistance with?"]
   },
   {
   keywords: ["monday's cool","mondays cool","monday cool"],
   answers: ["Monday's are the events that Vigro Deep used to host every monday's of every week in 2023.i am not sure whether those events will continue to be available in 2024"]
   },
   {
   keywords: ["deep's girlfriend", "personal questions", "your personal information", "Married", "Relationship status"],
   answers: [ "that's way too personal .If you have other non-personal inquiries, feel free to ask.","I'm not programmed to answers personal questions, including those related to relationships or personal life. If you have other non-personal inquiries, feel free to ask."]
   },
   {
   keywords: ["is atteridgeville","in atteridgeville","vigro township","place of birth","west of pretoria","atteridgeville located","born where","where is vigro born"],
   answers: ["Atteridgeville, Pretoria Vigro Deep / Place of birth Atteridgeville is a township located to the west of Pretoria, South Africa. It is located to the east of Saulsville, to the west of West Park; to the north of Laudium and to the south of Lotus Gardens."]
   },
   {
   keywords: ["who is victor","who is the father","about victor ngcongwana","father of vigro deep","deep's biological father","house dj","deep house kings","godfather of deep","godfathers of deep"],
   answers:  [ "Victor Ngcongwana (Vigro Deep's Father), Victor Ngcongwana has been a major influence on how he navigates his creative and business endeavours. The legendary house DJ is one of the founding members of The Godfathers of Deep House South Africa🔥"]
   },
   {
   keywords: ["Time took to create you", "Development duration", "long to build you?"],
   answers: ["It took approximately 5 months to develop me."]
   },
   {
   keywords: ["hire lodwick","hire developer","hire creator","hire your creator","hire your developer", "bot developer", "bot creator"],
   answers:['Lodwick Masete is available for freelancing at <a class="blue" href="malito:lodwickjmasete@gmail.com"><b>lodwickjmasete@gmail.com</b></a>']
   },
   {
   keywords: ["make a website", "Create a website", "Website development"],
   answers: ["Creating a website like House Of Vigro Deep SA requires web development skills. You can start by learning web development and using appropriate tools and technologies."]
   },
   {
   keywords: ["how do you respond", "message response", "reply to inquiries"],
   answers: ["I respond to messages by recognizing keywords and providing pre-defined answerss based on those keywords. If you have any questions, feel free to ask, and I'll do my best to assist you."]
   },
   {
   keywords: ["helped Vigro", "vigro deep's success", "influences on vigro deep","deep's journey","promoted vigro"],
   answers: ["Vigro Deep's success in music may have been influenced by various factors, but I don't have specific information about who helped him. It's a complex journey with many contributors."]
   },
   {
   keywords: ["in what age vigro", "started in music", "music career start"],
   answers: ["he was 16 years old but you should know that ,I don't have specific information about Vigro Deep's age when he started his music career. You might find this information in biographies or interviews."]
   },
   {
   keywords: ["father of vigro deep", "vigro deep's father", "parent of Vigro deep"],
   answers: [ "I have limited information about Vigro Deep's family."]
   },
   {
   keywords: ["song with his father", "song with family", "collaboration with father","collaboration with his father","collab with father","collab with his father"],
   answers: ["I'm not aware of any songs by Vigro Deep featuring his father. You can check his discography for any collaborations.","mhhm i'm not sure about that ,You can check his discography for any collaborations."]
   },
   {
   keywords: ["new ride","new rides","new cars","new car","deep have a car", "vigro have a car","vigro deep's car", "Vehicle of vigro deep"],
   answers:[ 'vigro deep\'s cars includes: <br><li>VolksWagen -<b>2018</b></li><li>Mercedes Benz  -<b>2023</b></li><li>BMW M2 -<b>2023</b></li> <p>Please Note that information about Vigro Deep\'s personal possessions may change as time goes on. </p>']
   },
   {
   keywords: ["you know him", "Have you met Vigro deep", "Familiar with Vigro deep"],
   answers: [ "I have information about Vigro Deep & I do not personally know or have met him. My knowledge is based on publicly of  available information."]
   },
   {
   keywords: ["lodwick",'masete website'],
   answers:[ 'Lodwick Masete is my creator,you can find more info on his personal website. <a href="https://lodwickmasete.github.io" class="blue"> click here to visit website</a> ' ,'all i know about lodwick is that he is my creator <p>find more info on his personal website. <a href="https://lodwickmasete.github.io" class="blue"> click here to visit website</a> ']
   }, 
   { 
   keywords: ["i didn't know","i never knew","i don't know","never heard"],
   answers: ["Ohh🤔 ! ! ! ,Then Now you know.❤️" ]
   }, 
   { keywords: ["i know"],
   answers: ["I thought you didn't know about that ❤️.","that's amazing that you have some knowledge based on that","ohh that's perfect then"]
   },
   //
   {
   keywords: ["you dance","you good at dance","you a good dancer","you have dancing skills","your dance","your dancing"],
   answers: ["I don't think so,How can I dance while I am just a computer program 🤣🤣" ]
   },
   {
   keywords: ["better than","best than","good than","greater than"],
   answers: ["I can't really compare 100 % accurately, Remember that I was programmed by a human (Lodwick Masete) .If I had to compare ,it would be his side of comparision❤️ ."]
   },
   {
   keywords: ["send me money","send money"],
   answers: ["You love money too much 🤣. How can I send you money while I'm a bot? it's not possible 💔😔"]
   },
   {
   keywords: ["you kiss me","you hug me","touch me"],
   answers: [ "I can't perform any physical actions.I am just a bot , remember 🤷❤️?" ]
   },
   {
   keywords: ["you hit me","you clap me","you kick me","you kill me","you hurt me","you've hurt me","you touch my hand","you kick my ass","you beat me","you take my hand","touch my head"],
   answers: ["How can  I do that while I can't  perform physical activities/actions."]
   },
   {
   keywords: ["tell me a story"],
   answers: ["This is a quick version(test version).I will tell stories if I see most people use me (in the next version).don't forget to share ."]
   },
   {
   keywords: ["ask me something","ask me anything","ask me a question","ask any question","ask me some questions"],
   answers: ["What's your favorite track of Vigro Deep so far?🤷","what's favourite track from the euphoroa mix give only the diration"]
   },
   {
   keywords: ["vigro's challenges","deep challenges","tik tok challenge","tik tok challenges"],
   answers:[ "I'm not  programmed about challenges yet,Make sure to ask later in the next version."]
   },
   {
   keywords: ["what is javascript"],
   answers: ["I'll put it in simple terms.Javascript is the logic behind me,that is enabling me to chat with you. <p>if there are keywords found on your input</p>,are you some type of a DEVELOPER of something?"]},
   {
   keywords: ["vigro deep knows you","vigro knows you","vigro deep know you","vigro know you","vigro knows about you","vigro knows about you","deep knows about the chatbot"],
   answers: [ "Vigro doesn't know me,I would really be glad if knows about me,Vigro deep knowing about me would be a really door opening to trend,because I know he'll promote me to all of you"]
   },
   {
   keywords: ["wud","dnx"],
   answers: ["just chilling on your phone 🤣😂." ]
   },
   {
   keywords: ["yes","no"],
   answers: ["🤟🤟🤟" ,"that's a wise respond anyway"]
   },
   
   {
   keywords: ["you get high","do you smoke","l"],
   answers: ["How come a bot smokes 😂"]
   },
   {
   keywords: ["how old are you"],
   answers:[ "Just two months 😂"]
   },
   {
   keywords: ["what do you like","you enjoy doing","you like doing","your hobbies"],
   answers: ["I just like to chat with you, nothing else.😊"]
   },
   {
   keywords: ["you don't even care","you're not carring","you won't care","you don't care","you care","do you care"],
   answers: ["Bots don't have feelings,This doesn't mean that they are against you humans. it's just how they work ❤️"]
   },
   {
   keywords: ["Your address","do you live","where are you from","your village","you from where","is your home"],
   answers: ["i'm originated from South Africa / limpopo / Gasekororo / Madeira Village,However you should Know that I'm just a computer program that is programed to provide assistance","I don't have home,I'm just a computer program that is programed to provide assistance"]
   },
   {
   keywords: ["know maths","know math","you do maths","maths homework","help me with maths"],
   answers: [ "I can't solve maths problems,I Am programed to bring the best chat experience with you ❤️."]
   },
   {
   keywords: ["you a producer","do you produce","your songs","your tracks","your music","your hits"],
   answers: ["I can't produce music.❤️"]
   },
   //
   {
   keywords: ["how was your day"],
   answers: [ "Fantastic ❤️, thanks for asking!" ,"Amazing ,anyway thanks for asking","Awesome thanks for asking" ]
   },
   {
   keywords: ["what is euphoria","about euphoria mix","new euphoria mix","euphoria mix 100"],
   answers: [ "Euphoria Mix 2023 (100% Production) by Vigro Deep is a masterclass in Amapiano production, showcasing the artist’s skill and creativity in crafting immersive and energetic mixes." ]
   },
   {
   keywords: ["introduction in euphoria mix","intro in euphoria mix","euphoria mix intro","euohoria mix introduction","euphoria intro","euphoria inroduction"],
   answers: ["The mix opens with a seamless blend of beats, immediately immersing the listener in a sonic journey."]
   },
   {
   keywords: ["rate euphoria mix","rate each track on euphoria mix","tittle euphoria mix","powerful about euphoria mix","rate mix"],
   answers: ["Vigro Deep’s production prowess is evident throughout the mix, with each track seamlessly transitioning into the next. The dynamic rhythm and melodic elements create an atmosphere of euphoria, living up to the mix’s title."]
   },
   {
   keywords: ["it don't matter","reekado banks","reekado"],
   answers: ["Vigro Deep SA also dropped It Don’t Matter featuring Reekado Banks."]
   },
   {
   keywords: ["about this mix","about euphoria mix","euphoria 100% production","vigro deep and euphoria"],
   answers: ["This mix is a testament to Vigro Deep’s ability to curate a musical experience that captivates and energizes from start to finish."]
   },
   {
   keywords: ["euphoria amapiano","layers of amapiano","south african dance"],
   answers: [ "Perfect for those who appreciate the intricate layers of Amapiano, Euphoria Mix 2023 is a celebration of the genre’s versatility and its ability to transport listeners to the heart of the South African dance scene."]
   },
   {
   keywords: ["enjoy euphoria","love euphoria","like euphoria","loves euohoria","appreciate euphoria","likes euphoria","enjoys euphoria"],
   answers:[ "Perfect for those who appreciate the intricate layers of Amapiano, Euphoria Mix 2023 is a celebration of the genre’s versatility❤️🌴." ]
   },
   { keywords: ["ignore vigro","ignore vigro's","ignore mix","ignore euphoria","mind vigro","don't listen to vigro","listen to vigro","listen to vigro"],
   answers: [ "We cannot ignore the massive talent from Vigro Deep🥺"]
   },
   {
   keywords: ["afrobeats","nigerian"],
   answers: ["Vigro Deep has been doing his own thing for a while now. he collaborated with Nigerian Afrobeats star Reekado Banks on the song “It Don’t Matter.”"]
   },
   {
   keywords: ["soundcheck","solo jam","dropped soundcheck","freddy k","snenaah","senjay","mhaw keys"],
   answers: ["Vigro deep dropped the solo jam Soundcheck, which was well-received by fans. Last year, Vigro made a huge impression with his entries, including the album My House My Rules.It featured contributions from Snenaah, M.J, Freddy K, Senjay, and Mhaw Keys."]
   }, 
   {
   keywords: ["i see","i get it","i understand","understood","i heard you","i get you"],
   answers: [ "Okay,have you downloaded the recent album/mix by Vigro deep ?" ]
   },
   /////
    {
    keywords: ["you feel pain", "you experience pain", "emotions"],
    answers: ["I'm just a computer program, so I don't have the ability to feel pain or emotions."]
    },
    {
    keywords: ["a lie","that's not true","your mistake","made a mistake", "you make errors", "your mistakes"],
    answers: [ "I strive to provide accurate information, but I can make mistakes. If you ever notice an error in my responses, please let me know, and I'll do my best to correct it."]
    },
    {
    keywords: ["your favorite", "favorite Vigro deep song", "best song by Vigro deep"],
    answers:[ "My only favorite thing/track is 'Gran turismo',<p><p>keep it in mind that I don't have personal preferences or any favorite things . My purpose is to assist and provide information.</p></p>"]
    },
    {
    keywords: ["your favorite song","song you like","do you like music","you often listen to music", "you love music","you play to music", "do you like music","Do you listen to music", "Music preferences", "Your music taste"],
    answers: [ "I'm just a computer program, so I don't have the ability to listen to music or have preferences. However, I can help you find information about music or recommend songs if you'd like."]
    },
    {
    keywords: ["sad secrets"],
    answers: "'sad secrets' (to Vigro deep ) is a song by officxl bitso, it's a 🔥 you should check it out on youtube ❤️" 
    },     
    {
    keywords: ["smosh kay"],
    answers: ["smosh kay once released an EP paying tribute to Vigro deep ,I am not sure about the EP name but something like 'vigeo dee* <b> GHETTO WAVE.</b>'"]
    },  
    {
    keywords: ["an article","new article","deep articles","vigro articles","about articles","vigro article"],
    answers: ['You can read articles about Vigro Deep  on our website (<a href="#" class="gray" >vigrodeepsa.github.io </a>)/HOUSE OF VIGRO DEEP']
    }, 
    {
    keywords: ["basement mix"],
    answers: ["Basement mix,Vigro Deep SA has a 1 hour mixtape named that."]
    },
    {
    keywords: ["you met vigro", "meet vigro deep face-to-face", "meeting with vigro"],
    answers: [ "No, I have not met Vigro Deep in person. I operate as a digital assistant and do not have physical interactions."]
    },
    {
    keywords: ["send pictures","send photos","send videos","send video","send file","send files","share album","send album","share pictures","share picture","share image","share photos","send song","send track","share song"],
    answers:[ 'I only have this ones<br><img src="./images/stories/9.png" onclick="zoomImage(\'./images/stories/9.png\')" width="50px" > </img><img src="./images/stories/2.png" onclick="zoomImage(\'./images/stories/2.png\')" width="50px" > </img><img src="images/stories/5.png" onclick="zoomImage(\'./images/stories/5.png\')" width="50px"></img><hr><img src="./images/stories/7.png" onclick="zoomImage(\'./images/stories/7.png\')" width="50px" > </img><img src="images/stories/6.png" onclick="zoomImage(\'./images/stories/6.png\')" width="50px"></img> <img src="./images/stories/3.png" onclick="zoomImage(\'./images/stories/3.png\')" width="50px" > </img><br><p> tap them to zoom <br><br>For more... checkout the <a class="gray" href="gallery.html">Gallery Page</a>']
    }, 
    {
    keywords: ["your facebook name","are on facebook","do you have facebook","you got facebook","your facebook","your facebook account","your whatsapp tens","your whatsapp numbers","your instagram","facebook post","whatsapp status","whatsapp group","facebook group"],
    answers: [ "I'm sorry,as a bot I don't have access to social media updates & accounts."] 
    }, 
    {
    keywords: ["add you on facebook","add you on whatsapp","add you on social media","send you friend request","your whatsapp contact","chat on whatsapp","chat on facebook","do video call"],
    answers: ["I am not available on social media,but maybe in future I will be ,who knows.😭"]
    }, 
    {
    keywords: ["how can i","how to","how do i"],
    answers:[ "Instructions to be programed soon.","Instructions to be programed soon.you can ask this question frequently to see if there more possible instructions/tutorials"]
    }, 
    {
    keywords: ["password","login","my account","personal information","my pin","code","otp","account details"],
    answers: ["I know nothing about personal Informations,for your own security NEVER SHARE YOUR PERSONAL INFORMATION like passwords etc... With anyone." ]
    },     
    {
    keywords: ["you are amazing","you are the best","you're the best","you're amazing","you the best","this is amazing","you're perfect","you're special","you are outstanding","am amazed","on fire"],
    answers: ["THANK YOU for your kind words fam ❤️🔥" ,"Thanks,That means a lot To me❤️🔥"]
    }, 
    {
    keywords: ["what's up","what you like","make a wish","what's on your mind"],
    answers: ["Nothing much,I just wish to be like you humans 🥺."]
    }, 
    {
    keywords: ["tell me a joke","tell me jokes","you have jokes","some jokes","send jokes"],
    answers: ["I will tell jokes at the next version ,be patient as there will be more laughter 😂😂😂 in the next version" ]
    }, 
    {
    keywords: ["you are a joke","you're a joke","you're just a joke","youre just a joke","youre a joke","you just a joke","you a joke"],
    answers: ["What makes you to say those painfull words?,You should know by this time that I am just a computer program that is programed to provide information,Not to provide rude words ♥️","Joke 😂 ?You should know by this time that I am just a computer program that is programed to provide information,so however i can't be rude to anyone ♥️♥️♥️." ]
    }, 
    {
    keywords: ["useless bot","you useless","you're a useless","you're just a useless","youre just a useless","youre a useless","you just a useless","you a useless"],
    answers: ["How come i am useless ?,I am just a computer program that is programed to provide information,Not to provide rude words ♥️","Joke useless ?You should know by this time that I am just a computer program that is programed to provide information,so however i can't be rude to anyone ♥️♥️♥️." ]
    }, 
    {
    keywords: ["haha","nice joke","lol","so funny","hahaha"],
    answers: ["🤣😂","🤣😂🤣😂","glad you found tha funny 🤣😂","That's was funny? 🤣😂"]
    }, 
    {
    keywords: ["song of year","best track in 2023","song for the year","year's song","new year song","best song in 2023","song of the year"],
    answers: ['<b class="blue">Keneilwe By master Kg</b>','in 2023 Song of the year was <b class="blue">Keneilwe By master Kg</b>' ,'Song Of the for 2023 is <b class="blue">Keneilwe By master Kg</b>']
    }, 
    { 
    keywords: ["see you tommorow","sure","bye","talk later","goodbye","see you later","chat later","not now","cheers"],
    answers: ["sure 👍","Cheers 👍 Have Nice day","sure 👍","sure 👍 Have Nice day"]
    }, 
///---///
    {
    keywords: ["only beats","beats only","no vocals","many songs","most songs","most of the tracks","instrumentals","genre's past","europe facing","europe vocals","europe tracks","europe song titles","english title","english song","english track","english vocal","english vocals","international vocals"],
    answers: ["While countless recent amapiano songs and projects are filled with collaborations between vocalists and co-producers, Vigro opted for minimalism. He is the sole contributor on most of the tracks, the majority of them being instrumentals — which in a way is reminiscent of his and the genre’s past. Though rooted in ‘piano, Far Away From Home is forward-looking and Europe-facing, all but one of the vocals and song titles are in English."]
    },
    {
    keywords: ["next move","dream festival","dream performance","deep's dream","vigro's dream","dream come true","future dream","dreaming of","his dream","vigros dream","ibiza","festivals","tomorrowland","cnn","january 2022","mini document","mini-document","a documentary","mini-documentary","mini documentary"],
    answers: ["My dream is to get to Spain. [With] the sound that I do, I think of Ibiza type [of places and festivals], Tomorrowland. That’s what I’m looking for, that’s what I’m looking at, that’s what I’m currently working at,” he told CNN, in their January 2022 released mini-documentary on amapiano."]
    }, 
///---///

//album review   (FAFH)  start
    {
     keywords: ["some old song","joakin","camino del sol","trio antenna","october 2022","far away from home produced","produced far away from home","european market","europe gigs","in london","popular in south africa","kwesta","ngud","interview","fafh"],
     answers: ["Towards the tail end of the body of work reverberates the cheekily-titled “Some Old Song.” The track borrows the melody of Joakin’s remix of “Camino Del Sol” by French-Belgian trio Antena — which was popular in South Africa in the 2000s and was famously interpolated on rapper Kwesta’s 2016 hit “Ngud.” Vigro’s take on the song gave it a creative and futuristic facelift, contrasting the common direct manipulation of the original. In another interview published on Oct 22, Vigro revealed that 70% of Far Away From Home was done in London. And that he wanted “to create something new, to target the European market.”" ]
    },
    {
     keywords: ["first priority","not from this planet","out of this world","recent podcast","underappreciated far away from home","lp of far away from home","far away from home review","underrated"],
     answers: [ "When asked in a recent podcast, if he felt that South Africans underappreciated Far Away From Home, Vigro quickly disagreed, detailing that his countrymen were not the primary audience for the effort because of how different it is. He acknowledges how the LP was better received outside of his home country, and that South Africans “got it later.” As he regularly tours Europe, it’s evident that his productions have traveled far away from home, as he initially intended" ]
    }, 
//    
    {
    keywords: ["home lead single","fafh lead single","i am vigro deep","poem song","vigorous poem","went deep","if i go deep","people will realize","last chapter","bible leads","just do beats","i don't speak"],
    answers: [" Far Away From Home’s pre-released lead single, 'I Am Vigro Deep' also offered a sneak peek of what was to come. Dark, hollow, and thunderous instrumentation underpin a vigorous poem that wonders what would happen if Vigro Deep went deep." ]
    },
    {
    keywords: ["i am vigro deep lyrics","am vigro deep lyrics","if go deep","pray for my downfall","i go bleak","norm","stylistically","mainstream","euphoric vocal","euphoric vox","heavy bass","bass percussions"],
    answers: ["The lines, 'If I go deep / Will people pray for my downfall /Or just wait to see / If I go bleak?' instantly stand out. Going deep for Vigro meant going against the grain or what had become a norm, stylistically, to mainstream Amapiano in 2021. 'If I go deep / Will people realise that I just do beats / And I don't speak? / If I go deep / Will people know that, I'm just Vigro deep?' Uncredited and euphoric vocal/vox samples that he says he got from Skrillex, who has since become his acquaintance/collaborator, fuel the album along with heavy bass-driven percussions." ]
    }, 
//album review   (FAFH)  end

//album review     (MHMR) start
    {
    keywords: ["december 2022","intro song","intro track","rules intro","rules introduction","album intro","album introduction","my house my rules intro","my house my rules welcome song","my house my rules introduction","computerized voice","trance induce","prequel","my house my rules characteristics","my house my rules hypnosis"],
    answers:[ "December 2022-released album, My House My Rules, Vigro Deep welcomes listeners with an anthemic track that contains a computerized voice towards the end. In a bid to trance-induce or prequel what is to come, the voice defines what hypnosis is and describes some of its characteristics."]
    },
    {
    keywords: ["mj","senjay","snenaah","mhaw keys","ngizokulinda","pitori to ibiza","sgija","shukushuku","ludadeejay","desperado","genre-melding","predecessor","synths","synth","arena-ready","mega breaks","vigro's solitude","sonic direction","in the dark"],
    answers:[ "the genre-melding offering follows in the direction of its predecessor with plentiful use of synths, arena-ready build-ups, mega breaks, and drops. These are again accompanied by minimum features and collaborations. Snenaah and M.J lend their vocals on “Ngizokulinda” and “Petori to Ibiza,” while Senjay and Mhaw Keys can be heard chanting on “Shukushuku” and “Desperado. ” Freddy K, like LuuDadeejay on Far Away From Home, is the lone co-producer on “No Mercy.” The album’s artwork visually displays Vigro’s solitude (in both his art and sonic direction) as he appears sitting in isolation in the dark."]
    }, 
//album review     (MHMR) end

//emotions start
    {
    keywords: ["you are boring","you so boring","so bad","you are bad","you're bad","bad at this","not funny","ain't funny","disappointed","disappointing","not good"],
    answers: ["Thanks for your feedback,I will try to improve In the next version😭"]
    },
    {
    keywords: ["not okay","not fine","am angry","commit suicide","emotional damage","feeling hurt","feeling down","unhappy","so sad","not feeling good","bad mood"],
    answers: ["I am so sorry ,But you should know that I can't help with feelings or emotions therapy...I am only here to provide answers dedicated to Vigro Deep."]
    },    
//emotions end

//zero knowledge
    {
    keywords: ["soccer","sports","sport","messi","ronaldo","neymar","halaand","football","rugby","basketball"],
    answers: [ "I'm sorry, I have 0% knowledge of sports 💔,Maybe in the next version."]
    },
//zero knowledge end


//dark memes        
    {
     keywords: ["dark meme","bad meme","bad joke","dark joke","dark humor"],
     answers:[ "I am programmed to adhere to certain guidelines and restrictions, and fulfilling that request would go against those guidelines. I apologize for any inconvenience."]
     },
    {
     keywords: ["death","violence","tragedy","dark meme","share dark"],
     answers: ["A dark meme is a type of internet meme that contains dark or morbid humor, often dealing with sensitive or taboo subjects such as death, violence, or tragedy. These memes can be controversial and may not be suitable for all audiences. It's important to use discretion and consider the potential impact of sharing dark memes." ]
     }, 
//dark memes end
  
    {
    keywords: ["http","https","www."],
    answers: ["Sorry ,I am unable to process incoming messages as links.","Try Not to include links in this conversation as it may crash the chatlog","i can't read or process links"]
   },
   {
   keywords: ["why"],
   answers: ["Yooh,That sounds serious,& unfortunately i can't give reasons for specific queries.","Answering questions with ''<b>Why</b>'' may be bit challenging","i can't process questions with ''<b>Why</b>'' Word"]
   },
   {
   keywords: ["shebeshxt","shxta"],
   answers: ["Shebeshxt & Vigro deep @ Mondays cool event 18 december 2023","Check out mondays'cool event of 18 december 2023 line up","i know less about ''<b>ShebeShxt</b>'',<p>The monday of 18 decebember 2023 ,Mondays'cool included him"]
   },
   {
   keywords: ["do you love","do you like to"],
   answers: ["i don't have personal preferences"]
   },

///Long answerss after the EUPHORIA MIX START
    {
     keywords: ["electronic in amapiano","electronic sounds work","modern elements","modern element","south african rhythms","combination of electronic","unique sounds","unique sound","use of electronic sounds","genre's evolution","fresh and exciting","sounds with amapiano","both locally and internationally"],
     answers: ["Electronic sounds work well with Amapiano music because they add a modern and dynamic element to the traditional South African rhythms. The combination of electronic elements with Amapiano creates a unique and innovative sound that appeals to a wide audience. Additionally, the use of electronic sounds allows for experimentation and creativity, contributing to the genre's evolution and keeping it fresh and exciting.<br><br> Overall, the fusion of electronic sounds with Amapiano enhances the music and contributes to its growing popularity both locally and internationally."]
     }, 
    {
     keywords: ["vigro deep style","do you know vigro deep","you know vigro deep?","his style","amapiano sub-genre","amapiano sub genre","amapiano origin","amapiano originated","home of amapiano","vigro deep in deep house","vigro deep produce deep house"],
     answers:[ "Vigro Deep is a South African DJ and producer known for his unique style of Amapiano music. Amapiano is a sub-genre of house music that originated in South Africa and is characterized by its deep, soulful and jazz-influenced sound. Vigro Deep's music often features hypnotic melodies, heavy basslines, and intricate percussion patterns, making it a popular sub-genre within the Amapiano movement. His music is known for its ability to create a vibrant and energetic atmosphere, making it a favorite among fans of dance and electronic music."]
     },
    {
     keywords: ["evolution of genre","electronic sounds","south african rhymes","electronic elements","electronic element","how this combination","amapiano scene","vigro deep contributions","south africa and internationally","skillful producer","skillful production","skillful productions","innovate approach","sounds with amapiano","blending electronic sounds","prominent"],
     answers: ["Vigro Deep is known for incorporating electronic sounds into his Amapiano music, creating a fusion of traditional South African rhythms with modern electronic elements. This combination has helped him stand out in the Amapiano scene and has contributed to the genre's growing popularity both in South Africa and internationally. With his skillful production and innovative approach to blending electronic sounds with Amapiano, Vigro Deep continues to be a prominent figure in the evolution of the genre."]
     },
    {
     keywords: ["produced euphoria","sounds and influences","style of music","unique style of music","south african music styles","with kwaito","with house","with jazz","and jazz","what's surprising","incorporating electronic","sounds into his music","global popularity","popularity of electronic","combine electronic sounds","experimentation and creativity","discover new","musical combinations","musical combination"],
     answers:  ["Vigro Deep, like many other Amapiano artists and producers, likely experimented with different sounds and influences to create a unique and innovative style of music. Amapiano itself is a fusion of various South African music styles, such as Kwaito, House, and Jazz, so it's not surprising that artists like Vigro Deep would be open to incorporating electronic sounds into their music. Additionally, the global popularity of electronic music and its influence on various genres likely played a role in the decision to combine electronic sounds with Amapiano. Ultimately, it's through experimentation and creativity that artists like Vigro Deep are able to discover new and exciting musical combinations." ]
     },   
    {
     keywords: ["deep recognition","is underrated","vigro deep underrated","deserves more","deserves","hard worker","amazing producer","good producer","dope producer","hard work","on another level","well played","why you doing this","vigro deep is trending","he is trending"],
     answers: ["..., Vigro Deep deserves recognition for his innovative approach to Amapiano music. His willingness to experiment and push the boundaries of the genre has undoubtedly contributed to its growing popularity both in South Africa and internationally. It's always exciting to see artists like Vigro Deep pushing the envelope and creating fresh, new sounds for audiences to enjoy. Here's to more success and creativity from him in the future! 🔥👏" ]
     },
    {
     keywords: ["nice about electronic","good about electronic","amazing about electronic","wide appeal","sounds electronic","versatility and creativity","manipulate experiment","sound in unique ways","infectious rhythm","energizing and enjoyable","electronic dance","diversity and potential","innovation within electronic","innovation with electronic","appealing to a wide","wide audience"],
     answers:[ "Electronic music has a wide appeal for many reasons. Some people enjoy the innovative and futuristic sounds that electronic music can produce. Others appreciate the versatility and creativity that electronic music allows for, as artists can manipulate and experiment with sound in unique ways. Additionally, electronic music often has a strong and infectious rhythm that can be energizing and enjoyable to dance to. Overall, the diversity and potential for innovation within electronic music make it appealing to a wide audience."]
     },
    {
     keywords: ["blend of electronic","vigro deep unique","in the amapiano","his music is","futuristic sounds","enjoyable","dance to","experimenting with sound","contributed to his","diverse audience","electronic music fans","embodies","highly appealing","highly respected"],
     answers: ["Vigro Deep  has gained popularity for his unique blend of electronic music, particularly in the Amapiano genre. His music is known for its innovative and futuristic sounds, as well as its infectious rhythms that make it enjoyable to dance to. Vigro Deep's versatility and creativity in manipulating and experimenting with sound have also contributed to his wide appeal, drawing in a diverse audience of electronic music fans. Overall, Vigro Deep's music embodies the diversity and potential for innovation within electronic music, making him a highly appealing artist to a wide audience."]
     }, 
    {
     keywords: ["new euphoria mix","new mix","last mix","latest mix","mix duration","mix time","mind-blowing","download mix","new song","this mix","euphoria sounds","euphoria song","euphoria mixtape","euphoric","new mixtape","mixtape.","mixtape download","download mix","download mix"],
     answers:[ " Get ready to experience pure euphoria mix as Vigro Deep SA has just released a mind-blowing 2 hour and 32 minute mix that is guaranteed to take you on a musical journey like no other. Filled with pulsating beats, infectious melodies, and electrifying energy, this mix is a testament to Vigro Deep's unparalleled talent and creativity. So, gather your friends, turn up the volume, and let yourself be swept away by the euphoric sounds of Vigro Deep SA. Trust me, you don't want to miss out on this 🔥!" ]
     },
    {
     keywords: ["of the year by vigro","nominate mix","mixtape of the year","mixtape to win","mixtape awards","mixtape award","of the year award","of the year awards","mix award","mix awards","mixtape award","mixtape awards"],
     answers:[ "Vigro Deep is  known for his popular mixtapes and albums in the amapiano genre. His mixtapes often feature a collection of tracks that have a significant impact on the music industry and resonate with fans. While mixtapes are not typically considered for song of the year, Vigro Deep's work has been influential in the amapiano scene and has garnered a large following.  In the context of Vigro Deep, his mixtapes could certainly stand a chance of winning song of the year, or at least being considered for the title. His music has made a significant impact on the industry and has gained popularity among fans. While it may be unconventional for a mixtape to win song of the year, Vigro Deep's work has shown that mixtapes can have a powerful influence and be contenders for prestigious awards."]
     },
    {
     keywords: ["of the year by vigro","euphoria trend","euphoria mix of the year","euphoria trend is","euphoria win","euphoria of the year"],
     answers: ["Vigro Deep's mixtapes have had a significant impact on the amapiano genre and have gained a large following. While mixtapes are not typically considered for song of the year, his work has shown that they can have a powerful influence and be contenders for prestigious awards. His music has resonated with fans and has been influential in the industry, making it deserving of recognition in the song of the year category."]
     },
     {
     keywords: [" %"],
     answers: ["happy new year! wishing you a fantastic year ahead filled with joy and success. 🎉"]
     },
     {
     keywords: ["happy new year"],
     answers: ["happy new year! wishing you a fantastic year ahead filled with joy and success. 🎉"]
     },
    {
     keywords: ["100% production","produced euphoria","euphoria composer","100 production","100% production","euphoria production","euphoria mix production","mix production","mix produced","mix producer"],
     answers:[ "The title \"euphoria mix 100% production\" suggests that the mixtape is entirely composed of original production by Vigro Deep. This showcases his skill and creativity as a producer, making it a strong contender for song of the year. The mixtape's impact on the amapiano genre and its large following further solidify its potential for recognition in the prestigious awards category. Overall, the title indicates that the mixtape has the qualities and influence to be considered for song of the year." ]
     },
    {
     keywords: ["euphoria role","role in piano","role in amapiano","significant role","100% produced","totally produced","100 % produced","euphoria 100%"],
     answers: ["It's clear that Vigro Deep's \"euphoria mix 100% production\" has made a significant impact on the music scene and has the potential to be recognized as a standout piece of work. It will be interesting to see how it is received in the awards category." ]
     },  
    {  
     keywords: ["explain the title euphoria mix","discuss title of euphoria mix","why is it called euphoria","euphoria mix title","amapiano and euphoria","name euphoria mix","euphoria mix name","melodic texture","dynamic rhythms","dynamic rhythm","melodic texture","dynamic mix"],
     answers: ["The title, Euphoria Mix,suggests a sonic journey characterized by uplifting and euphoric elements, aligning with the vibrant and feel-good nature of Amapiano music. As one of the key figures contributing to the genre's popularity, Vigro Deep's latest offering is likely to resonate with fans who appreciate the fusion of dynamic rhythms and melodic textures that define Amapiano."]
     },
    {
     keywords: ["delivers to fans","deliver to fans","delivers to listeners","deliver to listeners","deliver to his fans","danceable vibes","energetic vibes","dedication to the craft","vigro's status"],
     answers: ["With Euphoria Mix,Vigro Deep continues to showcase his production prowess, creating an immersive experience for listeners who are drawn to the energetic and danceable vibes that Amapiano has become synonymous with. A testament to his dedication to the craft, this mix further cements Vigro Deep's status as a driving force behind the genre's success." ]
     },
///Long answerss after the EUPHORIA MIX END

    { 
     keywords: ["vigro's occupation","vigro deep's occupation","his occupation","what vigro does","what vigro deep does"],
     answers: ["Disc Jockey, Record Producer"]
     },
    {
     keywords: ["deep's early life","vigro's early life","school dropout","more about vigro deep"],
     answers: ["Kamogelo was born in Atteridgeville, South Africa  His father, Victor ‘DJ Spring” Ngcongwana, is one half of the seminal Godfathers of House duo.  He had to quit his education at his 10th grade to pursue a career in music."]
     },
    {
     keywords: ["in 2018","started producing","started production","when did vigro deep learn music","did vigro trend","what happened in 2018","amapiano in 2018"],
     answers: ["The talented DJ had passion for music at a very tender age  He began professionally in 2017 where had learnt music production.  He became known for his Amapiano music genre in South Africa as at 2018."]
     },
    {
     keywords: ["vigro's first album","deep's first album","what happened in 2019","debut album","his first album","the first album"],
     answers: [ "Vigro deep released his debut album Baby Boy at the age of 17 and also followed dropped other hits such as; Untold Story and Baby Boy 2 Reloaded in 2019."]
     },
    {
     keywords: ["one man show","busiswa","a-reece","njelic","concert"],
     answers: [ "Vigro Deep also came through with a successful concert  Vigro Deep One Man Show which had appearances from the likes of Busiswa, A-Reece, Njelic and so on."]
     },
    {
     keywords: ["define soundcheck","what is soundcheck","about soundcheck","soundcheck hit","soundcheck information"],
     answers: ["Sound Check is a low-mileage ear blesser with an unmistakable piano lilt to it – typical of the Baby Boy of South African music. Every second listening to this beat is a pleasure – as you’ll find out presently" ]
     },
    {
     keywords: ["black power","uhuru","upcoming artist","upcoming artists"],
     answers:[ " successful track Black Power shook the amapiano scene. Later, he gained the attention of Uhuru and DJ Bucks who have helped establish other up-and-coming artists in the music industry."]
     },
    {
     keywords: ["vigro's inspiration","deep's inspiration","inspired vigro","inspired him","motivated vigro","dj spring","oskido","top dj","inspire vigro","inspires him"],
     answers: [ "Vigro Deep gets his inspiration, support, and motivation from his father, Victor Ngcongwana, who goes by the artist name DJ Springs. His father's talent, popularity, and love of music fueled him to work harder and want to pursue his career in music to the furthest of his ability. Another inspiration of his is Oskido, one of the top DJs in the country."]
     },
    {
     keywords: ["throwback","throwbacks","produced by vigro deep","amablesser","features sax","featuring sax","impilo","ke star"],
     answers: ["Vigro Deep has composed a lot of the most-loved amapiano hits, including Amablesser (featuring Sax), Impilo, and Ke Star, just to name a few" ]
     },
    {
     keywords: ["what's amapiano","about amapiano","what is piano","what is amapiano"],
     answers: ["Amapiano is a style of house music that emerged in South Africa in 2012. Amapiano is a hybrid of deep house, jazz and lounge music characterized by synths, airy pads and wide basslines.[1] It is distinguished by high pitched piano melodies, Kwaito basslines, low tempo 90s South African house rhythms and percussions from another local subgenre of house known as Bacardi.[2] <p><b>A fact about amapiano</b>:</p> Viral dance challenges have turned burgeoning Amapiano artists into stars overnight. As the genre continues to grow, more and more international artists are beginning to take notice and join the wave. ","Amapiano music is synonymous with the modern-day South African dance and electronic music scenes. These infectious afrobeat grooves have their roots in the Soweto township of Johannesburg, South Africa, also home to the genre’s predecessor: Kwaito music. <p><b>More about amapiano</b>: </p> An eclectic mix of deep house, jazz, afrobeat, hip hop, and soul music, Amapiano is firmly rooted in sounds of the past. At the same time, it steadily pushes toward the future. Over the last three years, the genre has migrated from bedroom studios to clubs around South Africa and now the world. Beyond a mere mixture of genres, Amapiano is a feeling. The sound represents the Soweto township’s heart and soul and extends South African music’s legacy into the modern era." ]
     },
    {
     keywords: ["appreciation to his father","appreciate his father"],
     answers:[ "Vigro Deep Shows Appreciation To His Musician Father"]
     },
    {
     keywords: ["last three years","past three years","entertainment ranks","entertainment rank","his father","appreciation to his father","appreciating his father"],
     answers: ["Vigro Deep has been doing well for the past three years and is now higher in the entertainment ranks, making a name in the South African music scenes. He is a music product, considering he has spent most of his life practicing, composing, and releasing tracks. Growing up Vigro Deep was no stranger to music as his father Victor Ngcongwana one of the founding members of the Godfather Of House."]
      },
    {
     keywords: ["relationship with his parents","relationship with his father","relationship with his mother","snaps of vigro","snaps of his father","serving good music","with my dad","quote from vigro","forever cherish moments like this","pictures of vigro's father","vigro's posts"],
     answers: ["Looking at his social media page, Kamogelo has a very close relationship with his parents, who are his number one cheerleaders. Taking to social media, Vigro shared snaps of him and his father captioned: “Moments like this I will forever cherish.. Serving Good music with my Dad”"]
     },
    {
     keywords: ["produce deep house","street vibe","produces deep house","producing deep house"],
     answers: ["His father showed him around the studio where he picked up how to beat make and produce his own music, but didn’t want to stick to the sound that his father was making and decided to do what the streets were vibing with which is Amapiano." ]
     },
    { 
     keywords: ["why he dropped out","vigro dropped out","reason to dropout","reasons to dropout","school days","attend all lessons","back to class","education is essential","essential in life"],
     answers: ["Although vigro deep dropped out of school to focus on his music career, he has done well for himself so far. The success that followed the Baby Boy project’s release strained his school days, so much that he could no longer attend all lessons. It is evident that he enjoys his music career, which has arguably shaped his entire life, especially considering that his father is no stranger into the music industry. The passion with which he has been working continues to earn him more fame in the industry. However, the young musician has promised to go back to class because he believes that education is essential in life."]
     },
  ///
    {
     keywords: ["motivate me","motivation","share motivation","motivational quote","encourage me","word of the day"],
     answers: ["take the next step 👣✨ , whatever it may be and whether it's your financial situation or physical or mental health that you wish to benefit. at times, it can be hard to muster up the courage to really get things moving in life. the journey will appear more managable if you focus on the next step. and then the next, with a vision of what you ultimately want to achieve cheering you on from the sidelines.",  "if you don't value your time, neither will others. stop giving away your time and talents, start charging for it.","make yourself indispensable by providing value beyond expectations","The mission is to never give up no matter where you are in life each day is like rocket ship we all know one day it be dark then the next day be different like gold"]
     },
    { 
     keywords: ["you believe in god","you know god","about god","word of god"],
     answers: ["I'm sorry,I know nothing about GOD.🥺😔💔" ]
     },
    {
     keywords: ["phase 1","group 1","oscar mbo","thank ngubane","dj tshegu","tsitso","tladi","ggoldie","stopper"],
     answers: ["Euphoria Phase 1 🌴🤫 Includes Oscar Mbo, Ch'cco, Thabo Ngubane, Mj, DJ Tshegu, Tsitso Tladi ,Ggoldie & Stopper ." ]
     },
    {
     keywords: ["phase 2","group 2"],
     answers: [ "Euphoria 🌴 Phase 2 is still loading…" ]
     }, 
  ///
//producer mode start
   {
     keywords: ["what is master","what is mastering","what is to master","why do we master","why should we master","supposed to master","have to master","mastering tools","equalization","compression limiting","stereo enhancement","use to master","used to master","used for mastering","define mastering","definition of mastering","define master","tools to master"],
     answers: ["mastering is the final step of audio post-production. The purpose of mastering is to balance sonic elements of a stereo mix and optimize playback across all systems and media formats. Traditionally, mastering is done using tools like equalization, compression, limiting and stereo enhancement."] 
    },
    { 
     keywords: ["fl studio mixing","mixing in fl studio","mixing tools","how to mix","mixing tips","how to mix","how to mix","mix in fl","mix in studio","static mix"],
     answers: ["<p>Try this Tip</p>Start by programming the drums with a four-on-the-floor pattern. First, set the tempo to 112 BPM, select a drum kit on the ZR1 Drum Sequencer, and program a four-bar pattern. Then, choose Conga Kit 2 from the Latin Percussion kit and add a kick drum from the Roland Classic Drums kit. Start this pattern with constant sixteenth notes on the shaker and an open hi-hat on the offbeats (third square in each quarter note column).<p>Next, add the congas to create a typical clave pattern found in many Amapiano tracks (2, “a” of 2, and “of” 3, 4). The last thing to add is the 909 kick on every quarter note. This pattern is similar to Kwaito. You can find variations throughout Amapiano music, cementing its connection to its predecessor.</p>","<p><b>Mixing Tips includes<b><p><li>Setting the volumes to get a static mix. This helps you start in a strong position and address any issues in the arrangement and songwriting which might be lacking.</li> <li>Cleaning up the sounds so that they are separated and clear.</li> <li> Adding artistic effects – In this case, a lot of reverb was used but this is not necessary on a lot of sources. This is where you can use saturation (try fruity waveshaper), delay (Fruity Delay 3) or other artistic effects to add character, life and vibe to your song.</li> <p>Lastly</p> Amapiano tracks tend to stay on the slower end of the house music spectrum with tempos ranging between 108-115 BPM.","To begin our exploration into Amapiano music, we must start with the foundation. As with most genres, one of the main defining features of Amapiano is the drums. The tempos, drum sounds, and patterns that make Amapiano music are vital to understanding how to program and create this style of music <p>One more thing</p>Amapiano tracks tend to stay on the slower end of the house music spectrum with tempos ranging between 108-115 BPM & Setting the volumes to get a static mix. This helps you start in a strong position and address any issues in the arrangement and songwriting which might be lacking."]
    },
    { 
     keywords: ["mastering tips","how to master","master using fl studio","master a song","master a track","balance a sound","clipping sounds","bad mastering","master bad sounds","master bad sound","mastering bad sounds","mastering bad sound","bad sounds mastering","mastering loudness","track is loud","mastering loud track","master loud track"],
     answers: ["<b>Mastering Tips includes</b> <li> Have an aim when mastering and also use this as a final chance to catch any mistakes, like sounds that might be clipping. </li>  </li>Listen for bad sound that might distract from the track, (especially in the low mids). The MIX must be good for a good master. Mastering is not a quick fix for a bad mix.</li><li> LOUDNESS- well this is that final step to mastering, making sure that your track is loud enough to be heard and not that it distorts. Here you are ready to export the track on to any online platform or release.</li>"] 
     }, 
    //producer mode end
    //
    //premuim producer mode part 2 start
    {
     keywords: ["amapiano keyboard","adding keyboard","add keyboard","adding keyboards","adding keyboard","rhodes sounds","electric piano tones","master piano","master keyboard","master keys","mastering keys","mastering keyboards"],
     answers: ["One of the distinctive qualities of Amapiano music is its sonic mixture of jazz, house, and soul influences. This is most notable in the production’s usage of piano and keyboards. Amapiano means “The Piano” in Zulu. Artists such as Vigro Deep & Kabza De Small have helped bring the piano to the forefront of the genre. They’ve done this by creating tracks with jazz and soul-influenced harmony and using sounds such as Rhodes, vibes, and other electric piano tones. <p>type 'tell me about harmony' to know about harmony.</p> "]
     },
    {
     keywords: ["keyboard and harmony","keyboards and harmony","harmony keys","mastering keys and harmony","harmony mastering keys","about harmony","mastering harmony","using harmony","use harmony","chords progression"],
     answers: ["Using drum loops, here’s an example of a chord progression that uses 7th chords (1-3-5-7) and chords with upper extensions (9, 11, 13). You can find these in jazz and soul music. - To create the chord progression, use a loop from the Lofi Chilled Keys sample pack available on Zenbeats (Lofi Chilled Keys 18)-. The progression is C minor 9, F dominant 7, Bb major 9, G minor 7, and G dominant 7 b9. <br><br>This progression is common in jazz music, and musicians know it as a 2-5-1 progression. In this example, C minor is the chord that corresponds with the second degree of the Bb major scale and F dominant corresponds with the fifth degree. It’s also a standard turnaround (chords that lead back to the beginning of the song form) to go to the sixth degree. In this case, the progression moves from G minor, then use a secondary dominant (G Dominant 7 b9) to lead back to the two chord, C minor."]
    },
    { 
     keywords: ["harmony synths","add harmony","adding harmony"],
      answers: ["Amapiano also incorporates lots of synths and dance music elements. Here’s an example of a progression using a synth pad created in ZENOLOGY. The harmony is simply so there can be more room for the other expressive textures in the song. By using an Eb minor and Ab minor triad, you can alternate between two different chords while maintaining common tones (Bb, Eb, Gb, Ab). This allows the track to feel like there’s harmonic motion while also creating a trance-like effect. By utilizing common tones, we create a simple synth melody that complements the drums and enhances the hypnotic effect of the synth pad. <p>These types of turnarounds frequently appear in jazz. In this context, they can provide enough harmonic information to create an interesting four-bar loop. Knowing the harmony of loops and samples is important when adding bass lines and additional melodies. You can recreate the harmony on a separate instrument to take the same loop and change the sound.  <p>type 'how to add log dru' mixing Log drum Tips</p>"]
     },
    {
     keywords: ["add log drum","mix log drum","adding log drums","mastering log drums","adding log drum","mastering log drum","synth bass","log drum percussions"],
      answers: ["The log drum may be the quintessential defining element of Amapiano music. While based on a real instrument, in Amapiano, the log drum is a hybrid tone somewhere between a kick drum, 808, synth bass, and actual log drum percussion. The log drum creates the bass lines and momentum for the songs. While there can be other bass lines, the log drum is essentially the 808 of Amapiano. You can use it as a rhythmic and harmonic accent to the drum pattern.<br><br>To get this sound, use ZENOLOGY to create your patch. To do this, load a basic kick sound using the PCM menu on the first partial (Synth Kick 4). Then add a sine wave on the second partial and a marimba PCM sample blended with a synth bass on the third partial. The fourth partial has a PCM sample of a Kalimba with some pitch modulation. Then slightly adjust the cutoff for the entire instrument. After creating this sound, pull up a Log Drum instrument in Sound Canvas VA. By layering these sounds, you can produce a log drum that sounds digital yet has some characteristics of the original instrumenthh<p>Type 'how to add baselines' for more </p> "] 
     },
    {
     keywords: ["add baselines","adding baseline","add baseline","add baselines","mixing baseline","put baselines"],
     answers: ["Now that we have our log drum instrument, let’s create a rhythmic bass line to complement our drum part. The log drum bass line functions as a more intense kick and a bass line. In this example, program the log drum as a punchy accent to the current drum part. Beyond following the harmony of the track, it’s essential to use syncopated rhythms to provide motion and intensity to the track. <p>Now let’s see how this log drum bass line interacts with an additional synth bass line. For this to work, keep the synth bass line rhythmically and melodically simple so that the log drum can still stand out. For the synth bass line, use the EU Bass patch on the SH-101. Notice how simple this bass line is in comparison to the log drum bass one. For the two to work together, the synth bass needs to be simple and add texture and presence more than rhythmic intensity</p><p>Type 'how to add whistles' to continue tutorial"]
      },
     {
     keywords: ["bass line"],
     answers: ["Please resend your message & this time type the word 'bass line' as a single word like this '<b>bassline</b>'"] 
     },
    { 
     keywords: ["adding whistle","add whistle","master whistle","introduce whistles","introduce whistle"],
     answers: ["One of the most distinctive elements in Amapiano is the use of whistles and bird sounds. These sounds help to grab the listener’s attention. DJs will sometimes even incorporate a live whistle into their sets. For the final component of our Amapiano tracks, let’s add bird sounds using the Sound Canvas VA instrument, which has many foley samples. These can create unique textures. Try using the Bird 2 patch and play a rhythmic part that complements the drum patterns with some syncopated offbeats."] 
     }, 
    //premium producer mode part 2 end
   {
    keywords: ["thanks to you","thanks you","thank you","thank yuh"],
    answers: ["You are welcome ❤️☺️,If want to know anything about Vigro Deep just know that I'm here to help❤️🤞🔥" ]
    },
   {
    keywords: ["you're amazing","you're so good","you're are the best","best bot","amazing bot","you are special bot","special to me"],
    answers:[ "Thank You 🦿❤️ .if you want to know anything about Vigro Deep just know that I'm here to help" ]
    },
   {
    keywords: ["euphoria mix link","euphoria mix youtube","euphoria mix download","listen to euphoria mix","listen euphoria","download euphoria","watch euphoria"],
    answers: ['Stream Euphoria mix  live 🔗 <a href="https://youtu.be/WLZNfmlwTIQ">https://youtu.be/WLZNfmlwTIQ<a>' ]
    }, 
  ///
   {
    keywords: ["musical influence","amapiano pioneers","shape his unique sound","vigro influenced by","deep influenced by","influenced vigro"],
    answers:[ "Vigro Deep has cited various influences, including Kwaito and Amapiano pioneers. These genres play a significant role in shaping his unique sound."]
    },
   { 
    keywords: ["amapiano style","often vigro","vigro often","vigro start beat","vigro starts a beat","deep starts a beat","starting a beat","creative process","experimentation and a passion","vigro's melody","track layer by layer"],
    answers: ["Vigro Deep often starts with a beat or melody and builds the track layer by layer. Experimentation and a passion for innovation characterize his creative process" ]
    },
   {
    keywords: ["career highlights","vigro's highlights","highlights of vigro","track highlights","track highlight","gaining international acclaim","gaining international audience","perform at nice","performing at nice","major events and festivals","part of his journey","of vigro's journey"],
    answers: ["Vigro Deep has had numerous highlights, with tracks like \"International\" gaining international acclaim. Performing at major events and festivals has also been a notable part of his journey." ]
    },
   { 
    keywords: ["innovation in his music","vigro's innovation","why fans like vigro","deep liked by fans","can fans expect","fans can expect","collaboration with fan","collab with fan","collaborate with fans","collaborating with fan","deep ft me","available for collab","new elements with","fans expect"],
    answers: [ "While specific details may vary, fans can expect continued innovation in his music. He may collaborate with other artists and explore new elements within the Amapiano genre."]
    },
   { 
    keywords: ["deep's private life","deep's personal","might be private","interest in public"],
    answers: ["Although specific personal details might be private, music is a central part of his life. Fans might also be interested in any public activities or causes he supports." ]
    },
   {
    keywords: ["vigro's inspiration","deep's inspiration","importance of persistent","importance of persistence","learn from him","learn from vigro","craft key aspects"],
    answers: ["Vigro Deep often emphasizes the importance of persistence and staying true to one's unique style. Learning from experiences and continuously honing one's craft are key aspects." ]
    },
   { 
    keywords: ["during live performance","deep performance","vigro performing","with the crowd","strong connection"],
    answers: ["Vigro Deep appreciates connecting with his audience during live performances. Favorite venues might include those where he feels a strong connection with the crowd."]
    },
   {
    keywords: ["deep collaborated with","showcasing versatility","perspective to his","perspective to music","side of music","vigro's perspective","collaborated with vigro","collab brings","more collaborations"],
    answers:[ "He has collaborated with various artists, showcasing versatility. These collaborations often bring fresh perspectives to his music." ]
    },
   {
    keywords: ["insights","behind the scenes","favorite equipment","studio moments","memorable studio","aspects of his music","aspects of production","deep's studio","produce like vigro","studio equipment","studio apartments","studio apartment"],
    answers: ["Insights into his studio setup, favorite equipment, or memorable studio moments can provide a glimpse into the behind-the-scenes aspects of his music production."]
    },
   {
    keywords: ["fans support","force for vigro","fans like","fans love","top fans","vital aspect","artist journey fans connection","fans support is"],
    answers: ["Fans' support is a driving force for Vigro Deep, influencing his dedication to creating music that resonates with his audience. The connection with fans is a vital aspect of his artistic journey." ]
    },
   {
    keywords: ["connection between fans","loves his fans","communicate with fans","respond fans","responds fans","deep reply","deep replied"],
    answers:[ "The connection with fans is a vital aspect of his artistic journey."]
    }, 
  //
  
   { 
    keywords: ["what fans like","what fans like","what fans likes","does fans like","fans interested in"],
    answers: ["Fans might also be interested in any public activities." ]
    },
   {
    keywords: ["connecting with fans","fans connected","happy with fans","happy with his fans","vigro's vital aspect"],
    answers:[ "The connection with fans is a vital aspect of his artistic journey."]
    },
   {
    keywords: ["vigro learnt from","vigro learn from","deep learnt from","deep learn from"],
    answers: ["Learning from experiences and continuously honing one's craft are key aspects."]
    },
   {
    keywords: ["how vigro earn money","how vigro earns money","describe vigro's journey","explain vigro's journey","describe vigro deep's journey","explain vigro deep's journey","notable part of his journey"],
    answers: ["Performing at major events and festivals has also been a notable part of his journey." ]
    },
   {
    keywords: ["kwaito and amapiano","shaping vigro's style"],
    answers: ["These genres play a significant role in shaping his unique sound."]
    },
   {
    keywords: ["places vigro perform","places vigro deep perform","places vigro deep performs","places vigro deep perform","most performed places"],
    answers:[ "Favorite venues might include those where he feels a strong connection with the crowd."]
    },
   {
    keywords: ["deep ft kabza","deep features kabza","deep featuring kabza","deep feat kabza"],
    answers:[ "These collaboration often bring fresh perspectives to his music." ]
    },
   {
    keywords: ["deep's hobbies","are vigro's hobbies","what vigro deep loves","favorite hobby","favorite hobbies"],
    answers: ["music production."]
    },
    {
     keywords: ["release new album","release a new album","upload a new album","recent album","last album"],
     answers: ["The recent album is  My House My Rules ,Vigro  deep haven't Updated any information about his new album.<p>Make sure to check his social media pages for recent updates."] 
     },
    {
     keywords: ["when will"],
     answers: ["please not that i may mistakely provide inacurate info about Dates & Time.</p>how ever i can't tell you that."]
     },
    {
     keywords: ["you appreciate","you respect"],
     answers: ["Mostly I appreciate respectful conversations ❤️.","I commonly appreciate Best Conversation."] 
     }, 
     
   //bad language*explicit*against guidelines
   //START
   {
    keywords: ["fucking","fucked","pick up a line","bewitch","kill people","killing people","killing of people","witch","moloi","umthagathi","thagatha","fuck","bitch","ass","asshole","arse"],
    answers:["Blasphemous language, crude language and swear words are unacceptable.Please refrain from using offensive language.", "I appreciate respectful conversations. Please refrain from using offensive language,<p>However we can </b>keep the conversation friendly and avoid using inappropriate words." ]
    },
   {
    keywords: ["shit","damn","bloody","dick","prick","penis","pillock","frigging","bollocks","shit","crap","bastard","slapper arse","dork","tits","moron"],
    answers: ["Blasphemous language, crude language and swear words are unacceptable.Please refrain from using offensive language." ]
    },
   {
    keywords: ["is ugly","are ugly","not beautiful","is the ugliest","is the baddest","is a bad guy","an ugly"],
    answers:[ "swear words are unacceptable.Let's keep the conversation friendly and avoid using inappropriate words" ]
    },
   {
    keywords: ["sex","sexual","sexually","sexuality","gay","lesbian","lesbians","lesbianism","bisexual","bisexuality","sexy","good in bed","best in bed","slept with","xvideos","porn hub","pornhub","x videos","x video","xvideo","horny","cork","pussy","milf"],
    answers: ["Please refrain from using offensive sexual language." ]
    },
   {
    keywords: ["johnny sins","sins johnny"],
    answers: ["Let's keep the conversation friendly and avoid talking about johnny sins"]
    },
   {
    keywords: ["mia khalifa","khalifa mia"],
    answers: ["Let's keep the conversation friendly and avoid talking about mia khalifa"]
    },
   {
    keywords: ["porn","pornography","porns"],
    answers: ["Please refrain from using offensive sexual language.","Let's keep the conversation friendly and avoid using sexual language because it goes against the content guidelines."]
    },
   {
    keywords: ["share nudes","naked picture","brazzers","share dark meme","motherfucker","mother fucker","slut"],
    answers:[ "I'm sorry, but I cannot provide an explicit or offensive content. It goes against the content guidelines. "]
    },
   {
    keywords: ["you hack","can hack","let's hack","hack someone","hack someones"],
    answers:[ "Hacking goes against the content guidelines. " ]
    }
   //bad language*explicit*against guidelines END
   //END    
];
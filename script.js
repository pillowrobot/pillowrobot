const translations = {
  fa: {
    nav_about:"درباره دوره", nav_curriculum:"برنامه دوره", nav_project:"پروژه", nav_instructor:"درباره من", nav_cta:"ثبت‌نام",
    hero_badge:"ظرفیت هر گروه فقط <b>۵ نفر</b>",
    hero_h1: 'ساختن آینده با <em>برنامه‌نویسی</em>، <em>رباتیک</em> و <em>هوش مصنوعی</em>',
    hero_lede:" کلاس های سه‌ترمی و عملی برای بچه‌ها؛ از تفکر محاسباتی بدون کامپیوتر و از طریق خوندن داستان تا برنامه‌نویسی بصری و ساخت اولین ربات واقعی‌شان.",
    fact1:"👦👧 سن ۵ تا ۱۲ سال", fact2:"⏱ جلسات ۶۰ دقیقه‌ای", fact3:"🧩 بدون نیاز به تجربه قبلی",
    btn_register:"ثبت‌نام در دوره", btn_curriculum:"دیدن برنامه دوره",
    
    speech_1: "سلام! من ربات بالشی ام 👋",
    speech_2: "بیا با هم یه ربات بسازیم!",
    speech_3: "بیا کدهای باحال بنویسیم!",

    about_kicker:"درباره دوره", about_h2:"یادگیری و ایجاد خلاقیت با خوندن داستان های جذاب ساختن انیمشین با برنامه نویسی و بازی با ربات واقعی",
    about_lede:"دوره در سه ترم طراحی شده و هر ترم روی مهارت‌های متفاوت نسبت به قبل بنا شده است؛ بچه‌ها با کمک داستان و انیمیشن  و تمرین روی کاغذ مفاهیم پایه ای علوم کامپیوتر را یاد میگیرند و در ادامه از دل بازی و ساختن یاد می‌گیرند چطور برنامه نویسی کنند و ربات رو به حرکت در بیاورند.",
    card1_title:"کلاس های گروهی حضوری و تعاملی", 
    card1_p:"کلاس ها به صورت گروهی برگزار می شود تا بچه ها علاوه بر صحبت و بازی با هم توانایی کار گروهی خودشون رو افزایش دهند.",
    card2_title:"محتوای الهام گرفته شده از کتاب ها و دوره های مطرح حوزه کودک",
    card2_p:" طراحی جلسات با رویکردی بدون کامپیوتر برای آموزش تفکر محاسباتی از طریق داستان و بازی و سپس ورود به دنیای جذاب و عملی رباتیگ و برنامه نویس و هوش مصنوعی. ",
    // source_line:"ترم‌های بعدی بر پایه‌ی محیط بصری <b>اسکرچ</b> و ربات آموزشی <b>mBot</b> ادامه پیدا می‌کنند.",
    curriculum_kicker:"برنامه دوره", curriculum_h2:"سه ترم، سه ماجراجویی جدید",
    curriculum_lede:"هر ترم یه دنیای جدیده که روبی می‌بره بچه‌ها توش. روی هر مرحله بزنید تا ماموریت‌هاش رو ببینید.",
    level1_title:"🧵 دنیای روبی — رمز و رازهای فکر کردن مثل کامپیوتر", level1_sub:"یه ماجراجویی با داستان، انیمشین، حرکت و بازی گروهی", level1_meta:"۱۰ جلسه · ۶۰ دقیقه",
    level1_desc:"بچه‌ها بدون نیاز به کامپیوتر و صرفاً با قصه، بازی و تمرین روی کاغذ، مثل یک طراح خلاق یاد می‌گیرند که چطور مثل یک کامپیوتر فکر کنند، مشکلات را به بخش‌های کوچک‌تر تقسیم کنند و برایشان راه‌حل بسازند.",
    l1u1b:"🗺️ نقشه‌ی قدم‌ها | روبی گوش به فرمان", l1u1s:"ترتیب درست کارها برای رسیدن به گنج",
    l1u2b:"🔍 شکارچی الگو", l1u2s:"پیدا کردن الگوهای مخفی و تکرارشونده",
    l1u3b:"🔁 دکمه‌ی تکرار", l1u3s:"یه دستور، به‌جای نوشتنش هزار بار",
    l1u4b:"🧩 مسئله‌ی بزرگ", l1u4s:"شکستن یه چالش بزرگ به تیکه‌های کوچیک",
    l1u5b:"🐞 شکار باگ", l1u5s:"پیدا کردن اشتباه مخفی‌شده و رفعش",
    l1u6b:"🎉 ماموریت نهایی", l1u6s:"روایت یه ماجرای کامل با کارت‌های کدنویسی",
    l1u7b:"🎉 ماموریت نهایی", l1u7s:"روایت یه ماجرای کامل با کارت‌های کدنویسی",
    l1u8b:"🎉 ماموریت نهایی", l1u8s:"روایت یه ماجرای کامل با کارت‌های کدنویسی",
    l1u9b:"🎉 ماموریت نهایی", l1u9s:"روایت یه ماجرای کامل با کارت‌های کدنویسی",
    l1u10b:"🎉 ماموریت نهایی", l1u10s:"روایت یه ماجرای کامل با کارت‌های کدنویسی",
    level2_title:"🎮 استودیوی انیمیشن‌سازی روبی — اولین کد روی صفحه", level2_sub:"شخصیت‌های رنگی که با کد شما زنده می‌شن", level2_meta:"۱۰ جلسه · ۶۰ دقیقه",
    level2_desc:"همون چیزایی که بدون کامپیوتر یاد گرفتن، این‌بار با کشیدن و چیدن قطعه‌های رنگی، به حرکت، صدا و بازی روی صفحه تبدیل می‌شه.",
    l2u1b:"سلام اسکرچ! ورود به استودیوی جادویی", l2u1s:"شناخت محیط نرم‌افزار، اضافه‌کردن شخصیت‌ها و پس‌زمینه‌ها.",
    l2u2b:"رقصِ بلوک‌های حرکتی", l2u2s:"یادگیری بلوک‌های حرکت (راست، چپ، بالا، پایین) برای راه بردن کاراکترها.",
    l2u3b:"جادوی پرچم سبز", l2u3s:"زدن دکمه‌ی شروع (پرچم سبز) و حرکت کردن کاراکتر به محض شروع بازی.",
    l2u4b:"لباس‌مهمانی و غیب‌شدن", l2u4s:"بلوک‌های ظاهر (بزرگ و کوچک شدن، غیب شدن و عوض کردن لباس کاراکتر).",
    l2u5b:"استودیوی ضبط صدا و موزیک", l2u5s:"ضبط صدای خنده‌دار بچه‌ها یا گذاشتن افکت‌های صوتی روی کاراکترها.",
    l2u6b:"بازیِ تکرار و چرخه", l2u6s:"استفاده از بلوک تکرار برای اینکه کاراکترها کارهای باحال را پشت سر هم انجام دهند.",
    l2u7b:"نامه‌رسانِ مخفی", l2u7s:"استفاده از پیام‌های رنگی برای حرف زدن کاراکترها با همدیگر یا هماهنگ کردن حرکاتشان.",
    l2u8b:"کارآگاهانِ داستان‌نویس", l2u8s:"ترکیب پس‌زمینه‌ها و چند کاراکتر برای ساخت یک انیمیشن داستانی کوتاه و بامزه.",
    l2u9b:"ساختِ بازیِ فضایی", l2u9s:"برنامه‌نویسی برای برخورد کاراکترها و ساخت یک بازی تعاملی ساده که بشود با آن بازی کرد.",
    l2u10b:"جشنواره فیلم و انیمیشنِ", l2u10s:"اکران پروژه‌ی نهاییِ هر بچه‌، تشویق کردن همدیگر و جشن پایان ترم!",
    level3_title:"🤖 دنیای mBot — ربات واقعی", level3_sub:"کدی که این‌بار واقعاً حرکت می‌کنه!", level3_meta:"۱۲ جلسه · ۶۰ دقیقه",
    level3_desc:"کدی که تا این‌جا روی صفحه نوشتن، حالا یه ربات واقعی رو حرکت می‌ده؛ با سنسور و موتور، رفتار ربات خودشون رو طراحی می‌کنن.",
    l3u1b:"سلام ربات | دوست جدید", l3u1s:"آشنایی با اجزای ربات mBot، اتصال آن به کامپیوتر و حرکت دادن ربات با کلیدهای کیبورد.",
    l3u2b:"مهمانیِ رقص و نور", l3u2s:"شناخت مفهوم ورودی و خروجی، برنامه‌نویسی چراغ‌های LED (رنگ‌های مختلف) و پخش صدا با بازر ربات.",
    l3u3b:"روبیِ خندان", l3u3s:"نصب و استفاده از پنجمین ماژول یعنی نمایشگر ماتریس LED، و طراحی چهره‌های شاد یا انیمیشن‌های کوتاه روی ربات.",
    l3u4b:"روبیِ چشم پزشک", l3u4s:"آشنایی با سنسور اولتراسونیک (چشم‌های ربات) و برنامه‌نویسی آن برای اینکه ربات با رسیدن به مانع متوقف شود.",
    l3u5b:"مهمانیِ رقص و نور", l3u5s:"",
    l3u6b:"مهمانیِ رقص و نور", l3u6s:"",
    l3u7b:"مهمانیِ رقص و نور", l3u7s:"",
    l3u8b:"مهمانیِ رقص و نور", l3u8s:"",
    l3u9b:"مهمانیِ رقص و نور", l3u9s:"",
    l3u10b:"مهمانیِ رقص و نور", l3u10s:"",
    l3u11b:"مهمانیِ رقص و نور", l3u11s:"",
    l3u12b:"مهمانیِ رقص و نور", l3u12s:"",
    project_kicker:"پروژه", project_h2:"فقط یاد نمی‌گیرند؛ می‌سازند",
    project_tag:"فعالیت ترم سوم", project_title:"🚗 ماشین هوشمند",
    project_p1:"بچه‌ها یک ربات چرخ‌دار می‌سازند و با کمک سنسور و برنامه‌نویسی به آن یاد می‌دهند مسیر را تشخیص دهد، حرکت کند و به موانع واکنش نشان دهد.",
    project_p2:"در این پروژه با موتور، سنسور، منطق برنامه‌نویسی و آزمون‌وخطا به‌شکل عملی کار می‌کنند.",
    audience_kicker:"این دوره برای کیه؟", audience_h2:"برای بچه‌هایی که کنجکاو هستن و همیشه میپرسن «چرا؟»",
    audience_p:"لازم نیست قبلاً ربات ساخته باشی یا برنامه‌نویسی بلد باشی. از صفر با هم شروع می‌کنیم و قدم‌به‌قدم یاد میگیریم و میسازیم.",
    aud_fact1:"مناسب برای ۵ تا ۱۲ سال", aud_fact2:"بدون نیاز به تجربه قبلی", aud_fact3:"گروه‌های کوچک و تعاملی", aud_fact4:"یادگیری پروژه‌محور",
    // age_label:"سن مناسب", age_number:"۵–۱۲", age_line1:"سطح: مقدماتی", age_line2:"پیش‌نیاز: ندارد",
    instructor_kicker:"درباره من", instructor_h2:"مربی این دوره کیه؟",
    instructor_lede:"قبل از این‌که ربات با بچه‌ها آشنا بشه، بد نیست بدونید کی این دوره رو طراحی کرده.",
    instructor_name:"آرش", instructor_role:"مهندس نرم‌افزار رباتیک و هوش مصنوعی، MakrShakr",
    instructor_p1:"",
    instructor_p2:"",
    chip1:"",
    cta_h2:"آماده‌ای اولین برنامه ات رو بنویسی و روی ربات پیاده سازی کنی؟", cta_p:"برای اطلاع از زمان برگزاری، ظرفیت و نحوه ثبت‌نام با ما در تماس باش.", cta_btn:"اطلاعات و ثبت‌نام",
    footer_copy:"© ۲۰۲۶  ربات بالشی", footer_tag:"ساختن، بهترین راه یاد گرفتنه."
  },
  en: {
    nav_about:"About the Course", nav_curriculum:"Curriculum", nav_project:"Sample Project", nav_instructor:"About Me", nav_cta:"Enroll",
    hero_badge:"Only <b>5 kids</b> per group",
    hero_h1:"Learning to code, build robots and AI <em>by making</em>.",
    hero_lede:"A hands-on, three-term course for kids — from unplugged computational thinking to visual programming and building their first real robot.",
    fact1:"👦👧 Ages 6–10", fact2:"⏱ 90-minute sessions", fact3:"🧩 No experience needed",
    btn_register:"Enroll now", btn_curriculum:"See the curriculum",
    
    speech_1: "Hi! I'm Rubi 👋",
    speech_2: "Let's build a robot together!",
    speech_3: "Let's write cool code together!",

    about_kicker:"About the course", about_h2:"Step by step, from play to real code",
    about_lede:"The course runs across three consecutive terms, each building on the last — kids learn core computer science ideas through play and making, without it ever feeling like a lesson.",
    card1_title:"Small groups, more attention", card1_p:"Each group has only 5 children, so every kid is truly hands-on during the session, not just watching.",
    card2_title:"Where the course comes from",
    card2_p:"The first term is built around <b>“Hello Ruby: Adventures in Coding”</b> by <b>Linda Liukas</b> — an unplugged approach to teaching computational thinking through story and play.",
    source_line:"Later terms continue with the visual environment <b>Scratch</b> and the educational robot <b>mBot</b>.",
    curriculum_kicker:"Curriculum", curriculum_h2:"Three terms, three worlds of adventure",
    curriculum_lede:"Each term is a new world Rubi takes the kids into. Tap a level to see its missions.",
    level1_title:"🧵 The Hello Ruby world — unplugged", level1_sub:"An adventure of story, movement and group play", level1_meta:"12 sessions · 90 min",
    level1_desc:"Without ever touching a computer, kids uncover hidden codes through story, play and movement — building the foundation for the next world.",
    l1u1b:"🗺️ Map of steps", l1u1s:"Putting steps in the right order to reach the treasure",
    l1u2b:"🔍 Pattern hunter", l1u2s:"Spotting hidden, repeating patterns",
    l1u3b:"🔁 The repeat button", l1u3s:"One instruction instead of writing it a thousand times",
    l1u4b:"🧩 The big problem", l1u4s:"Breaking a big challenge into small pieces",
    l1u5b:"🐞 Bug hunt", l1u5s:"Finding and fixing a hidden mistake",
    l1u6b:"🎉 Final mission", l1u6s:"Telling a full story with coding cards",
    level2_title:"🎮 The Scratch world — first code on screen", level2_sub:"Colorful characters brought to life by your code", level2_meta:"Coming soon",
    level2_desc:"Everything they learned unplugged now turns into motion, sound and play on screen, by dragging and snapping together colorful blocks.",
    l2u1b:"🏃 A living character", l2u1s:"Making a character react to clicks and keys",
    l2u2b:"🤔 If... then", l2u2s:"Learning to make smart decisions",
    l2u3b:"🕹️ Your own game", l2u3s:"Designing a small game with their own signature",
    level3_title:"🤖 The mBot world — a real robot", level3_sub:"Code that actually moves this time!", level3_meta:"Coming soon",
    level3_desc:"The code they've written on screen now drives a real robot; with sensors and motors, they design their own robot's behavior.",
    l3u1b:"🔧 A new friend", l3u1s:"Getting to know mBot's parts and sensors",
    l3u2b:"🚦 My path", l3u2s:"Programming the robot's route",
    l3u3b:"🛑 I'm paying attention!", l3u3s:"Avoiding obstacles with sensors",
    project_kicker:"A sample activity", project_h2:"Not just learning — building",
    project_tag:"Term 3 activity", project_title:"🚗 The smart car",
    project_p1:"Kids build a wheeled robot and, using sensors and code, teach it to sense the track, move, and react to obstacles.",
    project_p2:"They work hands-on with motors, sensors, programming logic, and trial and error.",
    audience_kicker:"Who is this for?", audience_h2:"For kids who love asking “how does that work?”",
    audience_p:"No prior robot-building or coding experience needed. We start from zero and go step by step.",
    aud_fact1:"Suitable for ages 6–10", aud_fact2:"No prior experience needed", aud_fact3:"Small groups, max 5 kids", aud_fact4:"Project-based learning",
    age_label:"Suitable age", age_number:"6–10", age_line1:"Level: Beginner", age_line2:"Prerequisites: None",
    instructor_kicker:"About me", instructor_h2:"Who's teaching this course?",
    instructor_lede:"Before Rubi meets the kids, here's a bit about who designed this course.",
    instructor_name:"Omid", instructor_role:"Robotics & AI Software Engineer, MakrShakr — Turin",
    instructor_p1:"In my day-to-day work I focus on intelligent perception, imitation learning and robotic manipulation for bartender robots — the humanoid platform <b>Robi</b> and the robot <b>Toni Barista</b>, with Robi developed in collaboration with the <b>VANDAL</b> Lab at Politecnico di Torino.",
    instructor_p2:"I'm also completing an MSc in <b>Data Science and Engineering</b> at Politecnico di Torino. I designed this course out of that same everyday curiosity about real robotics, so kids can experience it early, simply and through play.",
    chip1:"🤖 Robotics & AI Engineer", chip2:"🎓 MSc Data Science & Engineering", chip3:"🍸 Bartender robot developer",
    cta_h2:"Ready to build your first robot? 🤖", cta_p:"Get in touch to learn about schedule, availability and how to enroll.", cta_btn:"Info & enrollment",
    footer_copy:"© 2026 Hello Rubi", footer_tag:"Building is the best way to learn."
  },
  it: {
    nav_about:"Il corso", nav_curriculum:"Programma", nav_project:"Progetto esempio", nav_instructor:"Chi sono", nav_cta:"Iscriviti",
    hero_badge:"Solo <b>5 bambini</b> per gruppo",
    hero_h1:"Programmazione, robotica e IA <em>imparando a costruire</em>.",
    hero_lede:"Un corso pratico di tre trimestri per bambini: dal pensiero computazionale senza computer alla programmazione visuale, fino alla costruzione del loro primo robot vero.",
    fact1:"👦👧 Età 6–10 anni", fact2:"⏱ Sessioni da 90 minuti", fact3:"🧩 Nessuna esperienza richiesta",
    btn_register:"Iscriviti al corso", btn_curriculum:"Vedi il programma",
    
    speech_1: "Ciao! Sono Rubi 👋",
    speech_2: "Costruiamo un robot insieme!",
    speech_3: "Scriviamo del codice figo insieme!",

    about_kicker:"Il corso", about_h2:"Passo dopo passo, dal gioco al codice vero",
    about_lede:"Il corso è organizzato in tre trimestri consecutivi, ognuno costruito sul precedente: i bambini imparano i concetti chiave dell'informatica giocando e costruendo, senza mai sentirlo come una lezione.",
    card1_title:"Gruppi piccoli, più attenzione", card1_p:"Ogni gruppo ha solo 5 bambini, così ognuno è davvero coinvolto durante la sessione, non solo a guardare.",
    card2_title:"Da dove nasce il corso",
    card2_p:"Il primo trimestre è basato sul libro <b>“Hello Ruby: Adventures in Coding”</b> di <b>Linda Liukas</b>: un approccio senza computer per insegnare il pensiero computazionale attraverso storie e gioco.",
    source_line:"I trimestri successivi proseguono con l'ambiente visuale <b>Scratch</b> e il robot didattico <b>mBot</b>.",
    curriculum_kicker:"Programma del corso", curriculum_h2:"Tre trimestri, tre mondi da esplorare",
    curriculum_lede:"Ogni trimestre è un nuovo mondo in cui Rubi porta i bambini. Tocca un livello per vedere le sue missioni.",
    level1_title:"🧵 Il mondo di Hello Ruby — senza computer", level1_sub:"Un'avventura fatta di storie, movimento e gioco di gruppo", level1_meta:"12 sessioni · 90 min",
    level1_desc:"Senza toccare un computer, i bambini scoprono codici nascosti tra storie, giochi e movimento in classe, preparandosi al mondo successivo.",
    l1u1b:"🗺️ La mappa dei passi", l1u1s:"Mettere i passi nell'ordine giusto per trovare il tesoro",
    l1u2b:"🔍 Caccia ai pattern", l1u2s:"Scoprire pattern nascosti e ripetuti",
    l1u3b:"🔁 Il pulsante ripeti", l1u3s:"Un'istruzione, invece di scriverla mille volte",
    l1u4b:"🍽️ Il grande problema", l1u4s:"Scomporre una sfida grande in piccoli pezzi",
    l1u5b:"🐞 Caccia al bug", l1u5s:"Trovare e correggere un errore nascosto",
    l1u6b:"🎉 Missione finale", l1u6s:"Raccontare una storia completa con carte di coding",
    level2_title:"🎮 Il mondo di Scratch — primo codice sullo schermo", level2_sub:"Personaggi colorati che prendono vita col tuo codice", level2_meta:"Prossimamente",
    level2_desc:"Ciò che hanno imparato senza computer diventa movimento, suono e gioco sullo schermo, trascinando e incastrando blocchi colorati.",
    l2u1b:"🏃 Un personaggio vivo", l2u1s:"Far reagire un personaggio a click e tasti",
    l2u2b:"🤔 Se... allora", l2u2s:"Imparare a prendere decisioni intelligenti",
    l2u3b:"🕹️ Il tuo gioco", l2u3s:"Progettare un piccolo gioco tutto loro",
    level3_title:"🤖 Il mondo di mBot — un robot vero", level3_sub:"Il codice che stavolta si muove davvero!", level3_meta:"Prossimamente",
    level3_desc:"Il codice scritto finora sullo schermo ora muove un robot vero; con sensori e motori, progettano il comportamento del proprio robot.",
    l3u1b:"🔧 Un nuovo amico", l3u1s:"Conoscere i componenti e i sensori di mBot",
    l3u2b:"🚦 Il mio percorso", l3u2s:"Programmare il percorso del robot",
    l3u3b:"🛑 Sto attento!", l3u3s:"Evitare gli ostacoli grazie ai sensori",
    project_kicker:"Un esempio di attività", project_h2:"Non solo imparare: costruire",
    project_tag:"Attività del terzo trimestre", project_title:"🚗 L'auto intelligente",
    project_p1:"I bambini costruiscono un robot su ruote e, con sensori e codice, gli insegnano a seguire il percorso, muoversi ed evitare gli ostacoli.",
    project_p2:"Lavorano in modo pratico con motori, sensori, logica di programmazione e tentativi ed errori.",
    audience_kicker:"Per chi è questo corso?", audience_h2:"Per bambini a cui piace chiedersi «come funziona?»",
    audience_p:"Non serve aver già costruito un robot o saper programmare. Partiamo da zero, un passo alla volta.",
    aud_fact1:"Adatto dai 6 ai 10 anni", aud_fact2:"Nessuna esperienza richiesta", aud_fact3:"Gruppi piccoli, massimo 5 bambini", aud_fact4:"Apprendimento basato su progetti",
    age_label:"Età consigliata", age_number:"6–10", age_line1:"Livello: Principiante", age_line2:"Prerequisiti: Nessuno",
    instructor_kicker:"Chi sono", instructor_h2:"Chi tiene questo corso?",
    instructor_lede:"Prima che Rubi incontri i bambini, ecco chi ha progettato questo corso.",
    instructor_name:"Omid", instructor_role:"Ingegnere robotica e IA, MakrShakr — Torino",
    instructor_p1:"Nel mio lavoro mi occupo di percezione intelligente, imitation learning e manipolazione robotica per robot bartender — la piattaforma umanoide <b>Robi</b> e il robot <b>Toni Barista</b>, con Robi sviluppato in collaborazione con il laboratorio <b>VANDAL</b> del Politecnico di Torino.",
    instructor_p2:"Sto inoltre completando una laurea magistrale in <b>Data Science and Engineering</b> al Politecnico di Torino. Ho progettato questo corso proprio da quella curiosità quotidiana per la robotica vera, per far vivere la stessa scoperta ai bambini, in modo semplice e giocoso.",
    chip1:"🤖 Ingegnere robotica e IA", chip2:"🎓 Laurea magistrale Data Science", chip3:"🍸 Sviluppatore robot bartender",
    cta_h2:"Pronto a costruire il tuo primo robot? 🤖", cta_p:"Contattaci per orari, disponibilità e modalità di iscrizione.", cta_btn:"Info e iscrizione",
    footer_copy:"© 2026 Hello Rubi", footer_tag:"Costruire è il modo migliore per imparare."
  }
};

function applyLang(lang){
  const dict = translations[lang] || translations.fa;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

function setLang(lang){
  applyLang(lang);
  try{ localStorage.setItem('rubi-lang', lang); }catch(e){}
}

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeBtn');
  if(btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try{ localStorage.setItem('rubi-theme', next); }catch(e){}
}

(function init(){
  var savedLang = 'fa', savedTheme = null;
  try{
    savedLang = localStorage.getItem('rubi-lang') || 'fa';
    savedTheme = localStorage.getItem('rubi-theme');
  }catch(e){}
  applyLang(savedLang);
  if(savedTheme){ applyTheme(savedTheme); }
  else{
    var btn = document.getElementById('themeBtn');
    if(btn) btn.textContent = window.matchMedia('(prefers-color-scheme: dark)').matches ? '☀️' : '🌙';
  }
})();

/* =====================================================================
   INTERACTIVE LAYER — everything below only adds play; no text is touched.
   ===================================================================== */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var COLORS = ['#f4a521', '#ee6a4c', '#3c5691', '#6fa287', '#ffd84d'];

  /* ---------- confetti + hop ---------- */
  function burst(x, y, n){
    if(reduce || !document.body.animate) return;
    for(var i = 0; i < n; i++){
      var el = document.createElement('i');
      el.className = 'confetti ' + ['', 'sq', 'star'][i % 3];
      el.style.left = x + 'px'; el.style.top = y + 'px';
      el.style.background = COLORS[i % COLORS.length];
      document.body.appendChild(el);
      var a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 70;
      var a1 = el.animate([
        { transform: 'translate(-50%,-50%) scale(.3)', opacity: 1 },
        { transform: 'translate(calc(-50% + ' + Math.cos(a) * d + 'px),calc(-50% + ' + (Math.sin(a) * d - 30) + 'px)) scale(1) rotate(' + (Math.random() * 360) + 'deg)', opacity: 1, offset: .6 },
        { transform: 'translate(calc(-50% + ' + Math.cos(a) * d * 1.2 + 'px),calc(-50% + ' + (Math.sin(a) * d + 50) + 'px)) scale(.6)', opacity: 0 }
      ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(.2,.8,.2,1)' });
      a1.onfinish = (function(e){ return function(){ e.remove(); }; })(el);
    }
  }
  function hop(el){
    if(reduce || !el.animate) return;
    el.animate([
      { transform: 'translateY(0) scale(1,1)' },
      { transform: 'translateY(-34px) scale(.94,1.08) rotate(-7deg)', offset: .35 },
      { transform: 'translateY(0) scale(1.1,.9)', offset: .65 },
      { transform: 'translateY(-8px) scale(.98,1.03) rotate(3deg)', offset: .82 },
      { transform: 'translateY(0) scale(1,1)' }
    ], { duration: 700, easing: 'ease-out' });
  }
  function pop(el){
    if(reduce || !el.animate) return;
    el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.12) rotate(-2deg)' }, { transform: 'scale(1)' }], { duration: 350 });
  }
  document.addEventListener('click', function(e){
    var robot = e.target.closest('.moving-sticker, .floating-sticker, .robot-head-img, .level-mascot img');
    if(robot){
      var img = robot.matches('.floating-sticker') ? robot.querySelector('img') || robot : robot;
      var r = img.getBoundingClientRect();
      hop(robot); burst(r.left + r.width / 2, r.top + r.height / 3, 14);
      return;
    }
    var chip = e.target.closest('.unit, .fact-chip');
    if(chip){ pop(chip); burst(e.clientX, e.clientY, 8); return; }
    if(e.target.closest('.btn, .nav-cta')) burst(e.clientX, e.clientY, 10);
  });

  /* ---------- pointer parallax on [data-depth] ---------- */
  if(fine && !reduce){
    var depthEls = document.querySelectorAll('[data-depth]'), px = 0, py = 0, tick = false;
    window.addEventListener('pointermove', function(e){
      px = (e.clientX / window.innerWidth - .5) * 2;
      py = (e.clientY / window.innerHeight - .5) * 2;
      if(!tick){
        tick = true;
        requestAnimationFrame(function(){
          tick = false;
          depthEls.forEach(function(el){
            var d = parseFloat(el.getAttribute('data-depth')) || 0;
            el.style.translate = (-px * d).toFixed(1) + 'px ' + (-py * d).toFixed(1) + 'px';
          });
        });
      }
    }, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !reduce){
    var rio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); rio.unobserve(en.target); } });
    }, { threshold: .12 });
    reveals.forEach(function(el){ rio.observe(el); });
  }else{
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- nav highlights the section you are in ---------- */
  var links = [].slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  if(links.length && 'IntersectionObserver' in window){
    var byId = {};
    links.forEach(function(a){ byId[a.getAttribute('href').slice(1)] = a; });
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          links.forEach(function(a){ a.classList.remove('active'); });
          if(byId[en.target.id]) byId[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(byId).forEach(function(id){ var s = document.getElementById(id); if(s) sio.observe(s); });
  }

  /* ---------- curriculum cards: keyboard + screen-reader friendly ---------- */
  document.querySelectorAll('.level-head').forEach(function(head){
    var level = head.parentElement;
    head.setAttribute('role', 'button');
    head.setAttribute('tabindex', '0');
    function sync(){ head.setAttribute('aria-expanded', level.classList.contains('active') ? 'true' : 'false'); }
    sync();
    new MutationObserver(sync).observe(level, { attributes: true, attributeFilter: ['class'] });
    head.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); head.click(); }
    });
  });

  /* ---------- LINE FOLLOWER (sample project) ----------
     The robot follows the black line. Its two "eyes" light up on the side it is
     turning toward. Drag the yellow block onto the line: the robot sees it,
     turns red and waits. Tap the robot to pause / go. */
  var svg = document.getElementById('lfScene');
  if(svg){
    var path = svg.querySelector('#lfPath'), bot = svg.querySelector('#lfBot'), obs = svg.querySelector('#lfObstacle');
    var gl = svg.querySelector('.lf-gl'), gr = svg.querySelector('.lf-gr'), led = svg.querySelector('.lf-led');
    var len = path.getTotalLength(), dist = 0, speed = 95, running = !reduce, visible = false, last = 0;
    var ob = { x: 500, y: 425 }, blocked = false;

    function at(d){ return path.getPointAtLength(((d % len) + len) % len); }
    function angleAt(d){ var a = at(d), b = at(d + 5); return Math.atan2(b.y - a.y, b.x - a.x); }
    function draw(){
      var p = at(dist), ang = angleAt(dist);
      bot.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ') rotate(' + (ang * 180 / Math.PI).toFixed(1) + ')');
      var turn = angleAt(dist + 34) - ang;
      while(turn > Math.PI) turn -= 2 * Math.PI;
      while(turn < -Math.PI) turn += 2 * Math.PI;
      var l = turn < -.05 ? 1 : (turn > .05 ? .15 : .5), r = turn > .05 ? 1 : (turn < -.05 ? .15 : .5);
      gl.setAttribute('opacity', l); gr.setAttribute('opacity', r);
    }
    function checkBlocked(){
      var p = at(dist), a = angleAt(dist), hit = false;
      [58, 86].forEach(function(k){
        var fx = p.x + Math.cos(a) * k, fy = p.y + Math.sin(a) * k;
        if(Math.hypot(fx - ob.x, fy - ob.y) < 40) hit = true;
      });
      if(hit !== blocked){
        blocked = hit;
        svg.classList.toggle('lf-blocked', blocked);
        led.setAttribute('fill', blocked ? '#e53935' : '#4bb543');
      }
    }
    function frame(t){
      if(!visible) return;
      var dt = Math.min(.05, (t - last) / 1000); last = t;
      checkBlocked();
      if(running && !blocked) dist = (dist + speed * dt) % len;
      draw();
      requestAnimationFrame(frame);
    }
    function start(){ last = performance.now(); requestAnimationFrame(frame); }
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(en){
        var v = en[0].isIntersecting;
        if(v && !visible){ visible = true; start(); } else if(!v){ visible = false; }
      }).observe(svg);
    }else{ visible = true; start(); }
    draw();

    function toSvg(e){
      var pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }
    function place(x, y){
      ob.x = Math.max(30, Math.min(570, x)); ob.y = Math.max(30, Math.min(450, y));
      obs.setAttribute('transform', 'translate(' + ob.x.toFixed(1) + ' ' + ob.y.toFixed(1) + ')');
      if(!visible) { checkBlocked(); draw(); }
    }
    var dragging = false;
    obs.addEventListener('pointerdown', function(e){
      dragging = true; svg.classList.add('touched'); obs.setPointerCapture(e.pointerId); e.preventDefault();
    });
    obs.addEventListener('pointermove', function(e){ if(dragging){ var p = toSvg(e); place(p.x, p.y); } });
    obs.addEventListener('pointerup', function(){ dragging = false; });
    obs.addEventListener('pointercancel', function(){ dragging = false; });
    obs.addEventListener('keydown', function(e){
      var s = 20, m = { ArrowLeft: [-s, 0], ArrowRight: [s, 0], ArrowUp: [0, -s], ArrowDown: [0, s] }[e.key];
      if(m){ e.preventDefault(); svg.classList.add('touched'); place(ob.x + m[0], ob.y + m[1]); }
    });
    function toggleRun(){
      running = !running;
    }
    bot.addEventListener('click', function(e){
      toggleRun();
      var r = bot.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 10);
    });
    bot.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleRun(); } });
  }
})();

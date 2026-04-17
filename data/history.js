window.LESSONS_DATA = window.LESSONS_DATA || [];
window.LESSONS_DATA.push({
    id: 'history',
    title: '歷史背景',
    subtitle: '但以理書歷史時間線',
    ref: '歷史背景',
    description: '從亞述帝國到波斯帝國——但以理書的歷史背景互動時間線',
    comingSoon: false,
    isHistory: true,
    chapterTitle: '但以理書歷史背景與時間線',
    cardIcon: '🗺️',
    cardColor: '#4e342e',

    categories: {
        king:    { label: '猶大君王', color: '#1a237e', bg: '#e8eaf6', icon: '👑' },
        exile:   { label: '被擄事件', color: '#b71c1c', bg: '#ffebee', icon: '🔴' },
        empire:  { label: '帝國大事', color: '#4e342e', bg: '#efebe9', icon: '⚔️' },
        prophet: { label: '先知事奉', color: '#00695c', bg: '#e0f2f1', icon: '📢' },
        temple:  { label: '聖殿相關', color: '#e65100', bg: '#fff3e0', icon: '🏛️' }
    },

    prophets: [
        { name: '那鴻',     nameEn: 'Nahum',     start: 663, end: 612, book: '那鴻書' },
        { name: '西番雅',   nameEn: 'Zephaniah', start: 622, end: 612, book: '西番雅書' },
        { name: '耶利米',   nameEn: 'Jeremiah',  start: 627, end: 562, book: '耶利米書' },
        { name: '哈巴谷',   nameEn: 'Habakkuk',  start: 608, end: 605, book: '哈巴谷書' },
        { name: '但以理',   nameEn: 'Daniel',    start: 605, end: 536, book: '但以理書', highlight: true },
        { name: '以西結',   nameEn: 'Ezekiel',   start: 593, end: 571, book: '以西結書' },
        { name: '俄巴底亞', nameEn: 'Obadiah',   start: 586, end: 553, book: '俄巴底亞書' }
    ],

    events: [
        {
            year: 697, endYear: 642,
            title: '瑪拿西作猶大王',
            titleEn: 'Manasseh, King of Judah',
            category: 'king',
            description: '瑪拿西是猶大國在位最久的君王（共55年）。起初與父親希西家共同攝政（主前 697–686），十二歲開始獨立執政。他行耶和華眼中看為惡的事，在聖殿中設立偶像。',
            keyFigures: ['瑪拿西 (Manasseh)', '希西家 (Hezekiah)'],
            references: ['王下 21:1', '代下 33:11–17'],
            detail: '瑪拿西在主前 648 年被亞述人擄到巴比倫，在苦難中悔改歸向神，得以歸回耶路撒冷。這是猶大君王首次與巴比倫產生直接關聯。'
        },
        {
            year: 642, endYear: 640,
            title: '亞們作猶大王',
            titleEn: 'Amon, King of Judah',
            category: 'king',
            description: '亞們是瑪拿西的兒子，在位僅兩年。他效法父親早年的惡行，拜偶像，不肯在耶和華面前謙卑。',
            keyFigures: ['亞們 (Amon)'],
            references: ['王下 21:19–24', '代下 33:24'],
            detail: '亞們被自己的臣僕謀殺。國民隨後擊殺了那些背叛的臣僕，立他的兒子約西亞接續他作王。'
        },
        {
            year: 640, endYear: 609,
            title: '約西亞作猶大王',
            titleEn: 'Josiah, King of Judah',
            category: 'king',
            description: '約西亞是猶大末期最敬虔的君王，八歲登基，在位三十一年。他在十六歲開始尋求神，二十歲開始潔淨猶大地。',
            keyFigures: ['約西亞 (Josiah)'],
            references: ['王下 22:1', '代上 3:15'],
            detail: '約西亞有四個兒子：約哈南、約哈斯（沙龍）、約雅敬、西底家。他在主前 622 年修理聖殿時發現律法書，引發了猶大國最後一次大規模的屬靈復興。'
        },
        {
            year: 627,
            title: '耶利米蒙召',
            titleEn: 'Jeremiah\'s Call',
            category: 'prophet',
            description: '耶利米在約西亞在位第十三年蒙召為先知，事奉時間長達四十年以上（約主前 627–562），橫跨猶大國最後五位君王的統治。',
            keyFigures: ['耶利米 (Jeremiah)'],
            references: ['耶 1:1–2'],
            detail: '耶利米被稱為「流淚的先知」，他不斷警告猶大國將因罪被巴比倫所滅，卻屢遭逼迫。他的預言包括七十年被擄的期限（耶 25:11–12），這正是但以理後來禱告的依據（但 9:2）。'
        },
        {
            year: 626,
            title: '新巴比倫帝國建立',
            titleEn: 'Neo-Babylonian Empire Established',
            category: 'empire',
            description: '拿布波拉撒（Nabopolassar）在巴比倫建立迦勒底王朝，脫離亞述帝國的控制，開創新巴比倫帝國。',
            keyFigures: ['拿布波拉撒 (Nabopolassar)'],
            references: [],
            detail: '拿布波拉撒是尼布甲尼撒的父親。新巴比倫帝國的崛起標誌著古代近東權力格局的重大轉變，亞述帝國開始走向衰亡。'
        },
        {
            year: 622,
            title: '約西亞宗教改革',
            titleEn: 'Josiah\'s Reform',
            category: 'temple',
            description: '約西亞修理聖殿時發現了「律法書」（很可能是申命記），隨即展開大規模的宗教改革，拆毀偶像、潔淨聖殿、守逾越節。',
            keyFigures: ['約西亞 (Josiah)', '大祭司希勒家 (Hilkiah)', '女先知戶勒大 (Huldah)'],
            references: ['王下 22:8–23:25', '代下 34:14–35:19'],
            detail: '這是猶大國歷史上最後一次大規模的屬靈復興。西番雅的預言活動也在此時期。然而，改革未能從根本上改變百姓的心，約西亞死後國家迅速墮落。'
        },
        {
            year: 612,
            title: '尼尼微城陷落',
            titleEn: 'Fall of Nineveh',
            category: 'empire',
            description: '亞述帝國的首都尼尼微被巴比倫與瑪代的聯軍攻陷，標誌著亞述帝國的終結。先知那鴻曾預言此事。',
            keyFigures: ['拿布波拉撒 (Nabopolassar)', '基亞薩雷斯 (Cyaxares，瑪代王)'],
            references: ['鴻 3:7', '番 2:13–15'],
            detail: '亞述帝國曾統治近東長達數百年，在主前 722 年滅了北國以色列。尼尼微的陷落驗證了先知那鴻的預言，也改變了整個近東的政治格局。'
        },
        {
            year: 609,
            title: '約西亞戰死；約哈斯繼位三個月',
            titleEn: 'Josiah Killed; Jehoahaz\'s Brief Reign',
            category: 'king',
            description: '約西亞在米吉多戰役中試圖攔截北上的埃及法老尼哥，不幸陣亡。百姓立他的兒子約哈斯（又名沙龍）為王，但約哈斯僅在位三個月便被法老尼哥廢黜，被帶到埃及。',
            keyFigures: ['約西亞 (Josiah)', '約哈斯／沙龍 (Jehoahaz / Shallum)', '法老尼哥 (Pharaoh Neco)'],
            references: ['王下 23:29–34', '代下 35:20–36:4'],
            detail: '約西亞之死是猶大國命運的轉折點。此後猶大再無獨立自主的君王，先後成為埃及和巴比倫的附庸。法老尼哥廢約哈斯後，立約雅敬為傀儡王。'
        },
        {
            year: 609, endYear: 598,
            title: '約雅敬作猶大王',
            titleEn: 'Jehoiakim, King of Judah',
            category: 'king',
            description: '約雅敬是約西亞的兒子，由法老尼哥所立，起初為埃及的附庸（主前 609–605）。卡基米施戰役後轉而臣服巴比倫，後又反叛，最終在尼布甲尼撒圍城期間死亡。',
            keyFigures: ['約雅敬 (Jehoiakim)', '法老尼哥 (Pharaoh Neco)', '尼布甲尼撒 (Nebuchadnezzar)'],
            references: ['王下 23:34–36', '耶 22:18–19'],
            detail: '約雅敬是一個不敬畏神的君王。耶利米書記載他將先知的書卷割破燒毀（耶 36:23）。但以理書 1:1 提到「猶大王約雅敬在位第三年」，正是在他統治期間，但以理被擄到巴比倫。'
        },
        {
            year: 605,
            title: '卡基米施戰役',
            titleEn: 'Battle of Carchemish',
            category: 'empire',
            description: '巴比倫王子尼布甲尼撒在卡基米施（幼發拉底河畔）大敗埃及軍隊，確立巴比倫為近東霸主。同年拿布波拉撒去世，尼布甲尼撒匆匆返回巴比倫即位。',
            keyFigures: ['尼布甲尼撒 (Nebuchadnezzar)', '法老尼哥 (Pharaoh Neco)'],
            references: ['耶 46:2'],
            detail: '這是古代近東歷史上最重要的戰役之一。巴比倫的勝利直接導致了猶大從埃及的附庸轉為巴比倫的附庸，也為第一次被擄鋪平了道路。'
        },
        {
            year: 605,
            title: '第一次被擄',
            titleEn: 'First Exile (Deportation)',
            category: 'exile',
            description: '尼布甲尼撒首次進入耶路撒冷，擄走王室貴族中的青年精英以及部分聖殿器皿。但以理、哈拿尼雅、米沙利、亞撒利雅在此時被擄到巴比倫。',
            keyFigures: ['尼布甲尼撒 (Nebuchadnezzar)', '約雅敬 (Jehoiakim)', '但以理 (Daniel)', '哈拿尼雅 (Hananiah)', '米沙利 (Mishael)', '亞撒利雅 (Azariah)'],
            references: ['但 1:1–6', '耶 25:9–12', '代下 36:6–7'],
            detail: '這開啟了耶利米所預言的七十年被擄期（耶 25:11–12）。但以理書的故事正是從這裡開始。聖殿器皿被帶到巴比倫神廟中，表面上象徵巴比倫的神戰勝了耶和華，但但以理書 1:2 揭示真相：「主將猶大王……交付他手。」'
        },
        {
            year: 604, endYear: 562,
            title: '尼布甲尼撒二世統治巴比倫',
            titleEn: 'Nebuchadnezzar II\'s Reign',
            category: 'empire',
            description: '尼布甲尼撒二世是新巴比倫帝國最偉大的君王，在位四十三年。他建造了著名的巴比倫城牆、伊什塔爾門和空中花園。',
            keyFigures: ['尼布甲尼撒二世 (Nebuchadnezzar II)'],
            references: ['但 1–4 章'],
            detail: '但以理書前四章的故事都發生在尼布甲尼撒統治期間：第 2 章的巨像之夢、第 3 章的火窯事件、第 4 章尼布甲尼撒的瘋狂與悔改。但以理成為他宮廷中最受信任的智者之一。'
        },
        {
            year: 598, endYear: 597,
            title: '約雅斤作猶大王',
            titleEn: 'Jehoiachin, King of Judah',
            category: 'king',
            description: '約雅斤（又名耶哥尼雅／哥尼雅）是約雅敬的兒子，在位僅三個月又十天。他在尼布甲尼撒圍城時投降，連同王室成員、官員和大批百姓被擄到巴比倫。',
            keyFigures: ['約雅斤 (Jehoiachin)', '尼布甲尼撒 (Nebuchadnezzar)'],
            references: ['王下 24:8–16'],
            detail: '約雅斤被擄後在巴比倫度過了三十七年。巴比倫的考古發現（「約雅斤口糧泥板」）證實了他在巴比倫的存在，這是聖經歷史性的重要考古證據。'
        },
        {
            year: 597,
            title: '第二次被擄',
            titleEn: 'Second Exile (Deportation)',
            category: 'exile',
            description: '尼布甲尼撒第二次進攻耶路撒冷，擄走約雅斤和約一萬人，包括王室成員、軍事首領、工匠和鐵匠。先知以西結也在此次被擄之列。',
            keyFigures: ['約雅斤 (Jehoiachin)', '尼布甲尼撒 (Nebuchadnezzar)', '以西結 (Ezekiel)'],
            references: ['王下 24:10–16', '結 1:1–3'],
            detail: '此次被擄後，「除了國中最窮的人以外，沒有剩下的」（王下 24:14）。尼布甲尼撒立約雅斤的叔叔西底家為傀儡王。以西結在被擄第五年開始蒙召為先知。'
        },
        {
            year: 597, endYear: 586,
            title: '西底家作猶大王（末代君王）',
            titleEn: 'Zedekiah, Last King of Judah',
            category: 'king',
            description: '西底家是約西亞的兒子，由尼布甲尼撒所立為猶大最後一位君王。他最終反叛巴比倫，導致耶路撒冷被毀。',
            keyFigures: ['西底家 (Zedekiah)', '尼布甲尼撒 (Nebuchadnezzar)'],
            references: ['王下 24:17–18', '耶 52:1–11'],
            detail: '西底家不聽耶利米的警告，試圖聯合埃及反抗巴比倫。城破時他出逃，被巴比倫軍隊在耶利哥平原追上。尼布甲尼撒在他眼前殺了他的眾子，然後剜了他的眼睛，用銅鏈鎖著帶到巴比倫。大衛的王朝至此中斷。'
        },
        {
            year: 593,
            title: '以西結蒙召',
            titleEn: 'Ezekiel\'s Call',
            category: 'prophet',
            description: '以西結在巴比倫的迦巴魯河邊蒙召為先知，時為約雅斤被擄後第五年。他的事奉年期約為主前 593–571 年。',
            keyFigures: ['以西結 (Ezekiel)'],
            references: ['結 1:1–3', '結 14:14, 20', '結 28:3'],
            detail: '以西結書三次提到但以理（結 14:14, 20; 28:3），將他與挪亞、約伯並列為義人與智者。這是支持但以理為歷史人物的重要經文證據。以西結在巴比倫的事奉與但以理在宮廷中的事奉同時進行。'
        },
        {
            year: 586,
            title: '第三次被擄：耶路撒冷與聖殿被毀',
            titleEn: 'Third Exile: Destruction of Jerusalem and Temple',
            category: 'exile',
            description: '尼布甲尼撒的軍隊攻破耶路撒冷，焚燒聖殿和王宮，拆毀城牆。所羅門聖殿在經歷約四百年後化為灰燼。大批百姓被擄到巴比倫。',
            keyFigures: ['尼布甲尼撒 (Nebuchadnezzar)', '護衛長尼布撒拉旦 (Nebuzaradan)'],
            references: ['王下 25:1–21', '代下 36:17–21', '耶 52:12–30'],
            detail: '聖殿被毀是以色列歷史上最慘痛的事件之一。對被擄的以色列人來說，這意味著信仰「四大支柱」的全面崩塌：約、地、王、殿皆失。詩篇 137 篇記錄了被擄者的哀歌：「我們怎能在外邦唱耶和華的歌呢？」但以理書要回答的正是這個絕望中的問題。'
        },
        {
            year: 562,
            title: '尼布甲尼撒去世',
            titleEn: 'Death of Nebuchadnezzar',
            category: 'empire',
            description: '尼布甲尼撒二世去世，巴比倫帝國開始走向衰落。此後約二十年間，巴比倫經歷了多次宮廷政變和權力更迭。',
            keyFigures: ['尼布甲尼撒 (Nebuchadnezzar)', '以未米羅達 (Evil-merodach / Amel-Marduk)'],
            references: ['王下 25:27–30', '但 4:34–37'],
            detail: '繼任者以未米羅達釋放了被囚三十七年的約雅斤王，賜他座位在巴比倫諸王之上（王下 25:27–30）。但以理書第 4 章記載尼布甲尼撒在臨終前的悔改認信：「我便稱頌至高者，讚美尊敬活到永遠的上帝。」'
        },
        {
            year: 556, endYear: 539,
            title: '拿波尼度與伯沙撒',
            titleEn: 'Nabonidus and Belshazzar',
            category: 'empire',
            description: '拿波尼度（Nabonidus）成為巴比倫末代君王。他長期旅居阿拉伯的提瑪（Tema），將巴比倫的實際治理權交給兒子伯沙撒作為攝政王。',
            keyFigures: ['拿波尼度 (Nabonidus)', '伯沙撒 (Belshazzar)'],
            references: ['但 5:1–2', '但 7:1', '但 8:1'],
            detail: '伯沙撒的歷史存在曾被批判學者質疑，後來通過「拿波尼度圓柱」等考古發現得到證實。但以理書第 5 章記載伯沙撒的最後夜宴，第 7 章和第 8 章的異象也發生在伯沙撒統治期間。伯沙撒許諾但以理「在國中位列第三」（但 5:16），這與他作為攝政王（第二位）的身分完全吻合。'
        },
        {
            year: 539,
            title: '巴比倫帝國覆滅',
            titleEn: 'Fall of Babylon',
            category: 'empire',
            description: '波斯王居魯士的軍隊攻陷巴比倫城。根據古代文獻，波斯軍隊改變了幼發拉底河的河道，從河床下潛入城中。伯沙撒在當夜被殺。',
            keyFigures: ['居魯士 (Cyrus the Great)', '伯沙撒 (Belshazzar)', '瑪代人大利烏 (Darius the Mede)'],
            references: ['但 5:30–31', '賽 45:1–4'],
            detail: '但以理書第 5 章記載了巴比倫覆滅的那一夜：伯沙撒用聖殿器皿飲酒作樂，牆上出現了神秘的手寫字「彌尼彌尼提客勒烏法珥新」。以賽亞在約一百五十年前已預言居魯士的名字和他的征服（賽 44:28–45:4）。'
        },
        {
            year: 539,
            title: '但以理在獅子坑中',
            titleEn: 'Daniel in the Lions\' Den',
            category: 'prophet',
            description: '在瑪代人大利烏治下，但以理因持守向神禱告而被投入獅子坑，但神差遣天使封住了獅子的口。此時但以理已年約八十歲。',
            keyFigures: ['但以理 (Daniel)', '瑪代人大利烏 (Darius the Mede)'],
            references: ['但 6:1–28'],
            detail: '獅子坑的故事是但以理書敘事部分（1–6 章）的最後一個故事，與第 3 章的火窯事件形成交叉結構的配對（B / B\'），都展示忠心的猶太人面對死亡威脅卻蒙神拯救的主題。'
        },
        {
            year: 538,
            title: '居魯士頒布歸回令',
            titleEn: 'Decree of Cyrus',
            category: 'empire',
            description: '波斯王居魯士頒布詔書，允許被擄的猶太人返回耶路撒冷重建聖殿。這標誌著七十年被擄期的結束。',
            keyFigures: ['居魯士 (Cyrus)', '設巴薩 (Sheshbazzar)', '所羅巴伯 (Zerubbabel)'],
            references: ['拉 1:1–4', '代下 36:22–23', '賽 44:28'],
            detail: '「居魯士圓柱」記載了居魯士允許被擄民族返回家園的政策。耶利米預言的七十年期限（耶 25:11–12）至此應驗。但以理書 9:1–2 記載但以理正是根據耶利米的預言，在禱告中祈求神成就歸回的應許。'
        },
        {
            year: 536,
            title: '但以理的最後異象',
            titleEn: 'Daniel\'s Final Vision',
            category: 'prophet',
            description: '但以理在居魯士第三年（約主前 536 年）得到最後的啟示異象。但以理書 1:21 記載「到居魯士王元年，但以理還健在」，10:1 表明他至少活到居魯士第三年。',
            keyFigures: ['但以理 (Daniel)', '居魯士 (Cyrus)'],
            references: ['但 1:21', '但 10:1', '但 10–12 章'],
            detail: '但以理書的最後異象（第 10–12 章）涵蓋了從波斯帝國到末世的廣闊歷史。此時但以理已年邁約八十五歲，從主前 605 年被擄至今已在異邦生活了近七十年，橫跨了整個巴比倫帝國的興衰。他的一生就是「神在異邦中仍然掌權」的最佳見證。'
        }
    ],

    // Placeholder — 日後加入圖片時在此擴展
    images: []
});

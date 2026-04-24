// ==========================================
// stubs.js — 課程結構 (依照 OT366 建議安排)
// 已有完整內容的課由各自的 lessonXX.js 載入
// 此檔案只建立尚未有完整內容的課堂 stub
// ==========================================

// --- 第二課：但以理書 2 ---
(function() {
    // 跳過已由 lesson02.js 載入的課
    if(window.LESSONS_DATA.some(l => l.id === 'lesson02')) return;
    window.LESSONS_DATA.push({
        id: 'lesson02',
        title: '第二課',
        subtitle: '外邦君王與至高神的國度',
        ref: '但以理書 2:1-49',
        date: '4月26日',
        description: '尼布甲尼撒的巨像夢——四個帝國與神永遠國度的框架。參考 OT366 Unit 3。',
        chapterTitle: '但以理書第二章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 自修閱讀 1：但以理書 3-4 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'selfstudy1')) return;
    window.LESSONS_DATA.push({
        id: 'selfstudy1',
        title: '📚 自修閱讀 1',
        subtitle: '火窰與驕傲的樹',
        ref: '但以理書 第3-4章',
        date: '4月27日 – 5月10日',
        description: '自修閱讀第3-4章。注意「重複句型」及「君王的驕傲與降卑」主題（OT366 Unit 4-5）。',
        chapterTitle: '但以理書第三至四章',
        isSelfStudy: true,
        comingSoon: true,
        verses: [],
        chapters: [],
        questions: null,
        quiz: []
    });
})();

// --- 自修閱讀 2：但以理書 5-6 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'selfstudy2')) return;
    window.LESSONS_DATA.push({
        id: 'selfstudy2',
        title: '📚 自修閱讀 2',
        subtitle: '伯沙撒之夜與獅子坑',
        ref: '但以理書 第5-6章',
        date: '5月11日 – 5月23日',
        description: '自修閱讀第5-6章。注意驕傲君王的結局（第5章）及忠信者面臨死亡的第二個故事（第6章），對應 OT366 Unit 6-7。',
        chapterTitle: '但以理書第五至六章',
        isSelfStudy: true,
        comingSoon: true,
        verses: [],
        chapters: [],
        questions: null,
        quiz: []
    });
})();

// --- 第三課：但以理書 7 & 8 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson03')) return;
    window.LESSONS_DATA.push({
        id: 'lesson03',
        title: '第三課',
        subtitle: '屬天視角的歷史——四獸與公綿羊/公山羊',
        ref: '但以理書 7:1-28, 8:1-27',
        date: '5月24日',
        description: '進入啟示文學。將第7章與第8章合併講解，連結回第2章的巨像（The Big Picture）。參考 OT366 Unit 8 & 9。',
        chapterTitle: '但以理書第七至八章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 第四課：但以理書 9 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson04')) return;
    window.LESSONS_DATA.push({
        id: 'lesson04',
        title: '第四課',
        subtitle: '但以理的祈禱與七十個七',
        ref: '但以理書 9:1-27',
        date: '5月31日',
        description: '探討耶利米書的70年、但以理的認罪禱告，以及「七十個七」的末世論與歷史性詮釋。參考 OT366 Unit 10。',
        chapterTitle: '但以理書第九章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 第五課：但以理書 10 & 11 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson05')) return;
    window.LESSONS_DATA.push({
        id: 'lesson05',
        title: '第五課',
        subtitle: '屬靈爭戰與南北朝的衝突',
        ref: '但以理書 10:1-11:45',
        date: '6月21日',
        description: '屬靈爭戰的背景以及南方王與北方王的詳細歷史預言。參考 OT366 Unit 11 前半。',
        chapterTitle: '但以理書第十至十一章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 第六課：但以理書 12 & 全書總結 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson06')) return;
    window.LESSONS_DATA.push({
        id: 'lesson06',
        title: '第六課',
        subtitle: '末世的結局與全書總結',
        ref: '但以理書 12:1-13',
        date: '6月28日',
        description: '復活的神學以及全書總結——將第1-6章的敘事與第7-12章的預言結合，帶出對今日信徒的意義。參考 OT366 Unit 11 後半 & Conclusion。',
        chapterTitle: '但以理書第十二章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

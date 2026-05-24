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

// --- 第五課：但以理書 7 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson05')) return;
    window.LESSONS_DATA.push({
        id: 'lesson05',
        title: '第三課',
        subtitle: '四獸的異象與人子',
        ref: '但以理書 7:1-28',
    date: '5月24日',
        description: '進入啟示文學（Apocalyptic Literature）。但以理書第7章是整卷書的「樞紐」（Hinge），完成亞蘭文交叉結構（Chiasm），同時開啟後半部的啟示異象。以天上的視角揭示四獸、天上法庭與「像人子的」。參考 OT366 Unit 8。',
    chapterTitle: '但以理書第七章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 第六課：但以理書 8 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson06')) return;
    window.LESSONS_DATA.push({
        id: 'lesson06',
        title: '第六課',
        subtitle: '公綿羊與公山羊',
        ref: '但以理書 8:1-27',
        date: '5月31日',
        description: '但以理的第二個異象。語言從亞蘭文轉回希伯來文，焦點從世界帝國的興衰轉向神子民、聖殿與聖地的命運。天使加百列明確指出公綿羊是瑪代波斯、公山羊是希臘，小角則是褻瀆聖殿的暴君。對應 OT366 Unit 9。',
        chapterTitle: '但以理書第八章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 第七課：但以理書 9 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson07')) return;
    window.LESSONS_DATA.push({
        id: 'lesson07',
        title: '第七課',
        subtitle: '禱告與七十個七',
        ref: '但以理書 9:1-27',
        date: '6月21日',
        description: '但以理書中最獨特的一章——從異象轉向禱告。但以理研讀耶利米書後發出長篇認罪代求，神的回應卻超越他的預期：不僅七十年，而是「七十個七」。本章後半段被稱為舊約學術界的「泥沼」(The Dismal Swamp)。對應 OT366 Unit 10。',
        chapterTitle: '但以理書第九章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

// --- 第八課：但以理書 10-12 & 全書總結 ---
(function() {
    if(window.LESSONS_DATA.some(l => l.id === 'lesson08')) return;
    window.LESSONS_DATA.push({
        id: 'lesson08',
    title: '第八課',
    subtitle: '末後的爭戰與復活',
    ref: '但以理書 10:1-12:13',
    date: '6月28日',
    description: '但以理書的最後三章——全書最長的異象單元。第 10 章揭開靈界爭戰的帷幕，第 11 章以極精細的「歷史劇本」描述南方王與北方王的角力，第 12 章則以舊約中最清晰的復活應許作為全書終結。對應 OT366 Unit 11 (Segments 77-82)。',
    chapterTitle: '但以理書第十至十二章',
        comingSoon: true,
        verses: [],
        questions: null,
        quiz: []
    });
})();

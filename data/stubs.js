// ==========================================
// 未開放課程的佔位符 (Coming Soon Stubs)
// 當新的課程 .js 檔被載入後，這裡的同 ID 佔位會自動被跳過
// ==========================================
(function() {
    var stubs = [
        { id:'lesson2', title:'第二課', subtitle:'尼布甲尼撒的夢', ref:'但以理書 第2章', description:'巨像之夢的解釋與預言的意義', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson3', title:'第三課', subtitle:'火窯的考驗', ref:'但以理書 第3章', description:'沙得拉、米煞、亞伯尼歌的信心', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson4', title:'第四課', subtitle:'尼布甲尼撒的教訓', ref:'但以理書 第4章', description:'驕傲的代價與悔改的恩典', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson5', title:'第五課', subtitle:'伯沙撒的筵席', ref:'但以理書 第5章', description:'牆上的文字與巴比倫的終結', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson6', title:'第六課', subtitle:'獅子坑', ref:'但以理書 第6章', description:'但以理的忠誠與神的保護', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson7', title:'第七課', subtitle:'四獸的異象', ref:'但以理書 第7章', description:'歷史的走向與神國的降臨', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson8', title:'第八課', subtitle:'公綿羊與公山羊', ref:'但以理書 第8章', description:'波斯與希臘帝國的預言', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson9', title:'第九課', subtitle:'但以理的禱告', ref:'但以理書 第9章', description:'七十個七的預言與認罪禱告', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson10', title:'第十課', subtitle:'大爭戰的異象（上）', ref:'但以理書 第10章', description:'靈界的爭戰與神的啟示', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson11', title:'第十一課', subtitle:'大爭戰的異象（下）', ref:'但以理書 第11章', description:'南北王的爭戰與歷史的詳細預言', comingSoon:true, verses:[], questions:null, quiz:[] },
        { id:'lesson12', title:'第十二課', subtitle:'末後的盼望', ref:'但以理書 第12章', description:'復活的應許與忠信的獎賞', comingSoon:true, verses:[], questions:null, quiz:[] }
    ];
    window.LESSONS_DATA = window.LESSONS_DATA || [];
    stubs.forEach(function(stub) {
        var exists = false;
        for (var i = 0; i < window.LESSONS_DATA.length; i++) {
            if (window.LESSONS_DATA[i].id === stub.id) { exists = true; break; }
        }
        if (!exists) {
            window.LESSONS_DATA.push(stub);
        }
    });
})();
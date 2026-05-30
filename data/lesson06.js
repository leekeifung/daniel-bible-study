// ==========================================
// lesson06.js — 第六課：公綿羊與公山羊
// 但以理書 8:1-27
// 對應 OT366 Unit 9 (Segments 58-61)
// ==========================================

window.LESSONS_DATA = window.LESSONS_DATA || [];
window.LESSONS_DATA.push({
    id: 'lesson06',
    title: '第六課',
    subtitle: '公綿羊與公山羊',
    ref: '但以理書 8:1-27',
    date: '5月31日',
    description: '但以理的第二個異象。語言從亞蘭文轉回希伯來文，焦點從世界帝國的興衰轉向神子民、聖殿與聖地的命運。天使加百列明確指出公綿羊是瑪代波斯、公山羊是希臘，小角則是褻瀆聖殿的暴君。對應 OT366 Unit 9。',
    chapterTitle: '但以理書第八章',
    isSelfStudy: false,
    comingSoon: false,

    // ============================================================
    //  經文：但以理書 8:1-27（和合本修訂版 RCUV）
    // ============================================================
    verses: [
        /* 1  */ '伯沙撒王在位第三年，有異象向我－但以理顯現，是在先前所見的異象之後。',
        /* 2  */ '我在異象中觀看，見自己在以攔省書珊的城堡中；我在異象中又見自己在烏萊河邊。',
        /* 3  */ '我舉目觀看，看哪，有一隻公綿羊站在河邊，牠有兩隻角，這兩角都高，一角高過另一角，後長出來的比較高。',
        /* 4  */ '我見那公綿羊向西、向北、向南牴撞，沒有任何獸在牠面前站立得住，沒有能逃脫牠手的；牠任意而行，自高自大。',
        /* 5  */ '我正思想的時候，看哪，有一隻公山羊從西而來，遍行全地，腳不著地。這山羊兩眼當中有一隻顯眼的角。',
        /* 6  */ '牠往我先前所見、站在河邊、有雙角的公綿羊那裏，以猛烈的怒氣向牠直闖。',
        /* 7  */ '我見公山羊靠近公綿羊，向牠發怒，攻擊牠，折斷牠的兩角。公綿羊在公山羊面前站立不住；牠把公綿羊撞倒在地，用腳踐踏，沒有能救公綿羊脫離牠手的。',
        /* 8  */ '這公山羊長得極其高大，正強壯的時候，那大角折斷了，從角的下面向天的四方長出四隻顯眼的角來。',
        /* 9  */ '從四角中的一角又長出另一隻小角，向南、向東、向佳美之地，日漸壯大。',
        /* 10 */ '牠漸壯大，高及諸天萬象，把一些天象和星辰摔落在地，用腳踐踏。',
        /* 11 */ '牠自高自大，自以為高及萬象之君，牠除掉經常獻給君的祭，毀壞君的聖所。',
        /* 12 */ '因罪過的緣故，有軍隊和經常獻的祭交給牠。牠把真理拋在地上，任意而行，無往不利。',
        /* 13 */ '我聽見有一位聖者說話，又有一位聖者向那說話的聖者說：「這經常獻的祭、帶來荒涼的罪過、聖所與軍隊被踐踏的異象，要持續到幾時呢？」',
        /* 14 */ '他對我說：「要到二千三百日，聖所就必潔淨。」',
        /* 15 */ '我－但以理見了這異象，想要明白其中的意思。看哪，有一位形狀像人的站在我面前。',
        /* 16 */ '我聽見烏萊河中有人聲呼叫說：「加百列啊，要使這人明白這異象。」',
        /* 17 */ '他就來到我所站的地方。他一來，我就驚慌，臉伏於地。他對我說：「人子啊，你要明白，因為這是關乎末後時期的異象。」',
        /* 18 */ '他對我說話的時候，我正沉睡，臉伏於地。他就摸我，扶我站起來。',
        /* 19 */ '他說：「看哪，我要指示你惱怒結束的時候必成的事，因為這是關乎末後指定的時期。',
        /* 20 */ '你所看見那有雙角的公綿羊就是瑪代王和波斯王。',
        /* 21 */ '那公山羊就是希臘王；兩眼當中的大角就是第一個王。',
        /* 22 */ '至於角折斷了，又從角的下面長出四隻角，意思就是有四個國要從這國興起，只是權勢都不及它。',
        /* 23 */ '這四國末期，惡貫滿盈的時候，必有一王興起，面貌兇惡，詭計多端。',
        /* 24 */ '他的權柄極大，卻不是因自己的能力；他要施行驚人的毀滅，無往不利，任意而行，又要毀滅強有力的人和眾聖民。',
        /* 25 */ '他用權術使手中的詭計成功；他的心自高自大，趁人無備的時候毀滅多人。他又起來攻擊萬君之君，至終卻非因人的手而遭毀滅。',
        /* 26 */ '所說二千三百日的異象是真的，但你要將這異象封住，因為它關乎未來許多的日子。」',
        /* 27 */ '於是我－但以理昏倒，病了數日，然後起來辦理王的事務。我因這異象驚駭不已，但還是不能了解。'
    ],

    // ============================================================
    //  📖 課程內容 (Study Content)
    // ============================================================
    studyContent: [
        {
            title: '📋 第八章閱讀指南',
            icon: '📖',
            defaultOpen: false,
            html: '<p style="margin:0 0 10px;color:#555;font-size:14px;">在閱讀經文時，請留意以下五個要點：</p>' +
'<ol style="padding-left:20px;line-height:1.8;">' +
'<li><strong>留意語文與焦點的轉變：</strong>本章結束了 2-7 章的亞蘭文交叉對稱結構，重新回到「希伯來文」。異象的焦點也從前一章宏觀的「世界帝國更迭」，縮小並聚焦於「猶太人與聖所」回歸故土後將面臨的具體逼迫。</li>' +
'<li><strong>注意時間與空間的設定：</strong>時間來到「伯沙撒王在位第三年」（約主前 550 年），此時瑪代波斯逐漸崛起，巴比倫氣數將盡。但以理在異象中被帶到波斯帝國的「書珊城」，預示了接下來的歷史舞台將不再是巴比倫，而是由波斯與希臘主導。</li>' +
'<li><strong>天使明確的歷史解釋（公綿羊與公山羊）：</strong>不同於第七章的隱晦，天使在此直接點名：公綿羊代表「瑪代和波斯」，公山羊代表「希臘」（大角為亞歷山大帝）。隨後從四角中長出的「小角」（歷史上公認為殘暴的安提阿古四世），將成為逼迫聖民、褻瀆聖所的核心人物。</li>' +
'<li><strong>對比第七章與第八章的「小角」與結局：</strong>第七章的異象雖然可怕，但最終給予了「人子得國」的榮耀盼望；第八章則充滿了恐怖的蹂躪（除掉日常獻的祭、毀壞聖所），僅保證了罪惡有其「指定的期限」（二千三百日）。這解釋了為何但以理看完後會「驚駭不已、昏倒病了數日」(v.27)。</li>' +
'<li><strong>在奧秘中抓住「神掌權」的核心信息：</strong>經文中有些細節（如「天象」、「萬象之君」的具體指涉）充滿奧秘與解釋上的困難。講義提醒我們不要迷失在細節中，最重要的是天使的宣告：「這是關乎末後指定的時期」(v.19)。無論地上的暴君多麼猖狂，神已經為邪惡定下了界限（Evil is on a leash），時候到了，逼迫必被終結。</li>' +
'</ol>'
        },
        {
            title: '異象的背景與轉變',
            icon: '🔄',
            defaultOpen: false,
            html: '<h4 style="color:#00897b;margin:0 0 8px;">1. 語言與焦點的轉移</h4>' +
'<p>進入第 8 章，書卷發生了顯著的變化：</p>' +
'<ul>' +
'<li><strong>語言：</strong>從亞蘭文（2-7 章）轉回<strong>希伯來文</strong>（8-12 章）。這標誌著焦點從外邦列國的歷史，轉向神子民（猶太人）、聖殿與聖地的命運。</li>' +
'<li><strong>時間與地點：</strong>時間是伯沙撒王第三年（約主前 551/550 年），比第 7 章晚兩年。地點在異象中從巴比倫轉移到了<strong>書珊城</strong>（波斯帝國未來的首都）。這暗示巴比倫的日子屈指可數，焦點轉向波斯與希臘。</li>' +
'<li><strong>範圍收窄：</strong>第 7 章看見四獸（四帝國）；第 8 章只看見兩獸（波斯與希臘）。從宏觀的世界歷史轉向猶太人回歸後的聖殿命運。</li>' +
'</ul>' +
'<h4 style="color:#00897b;margin:16px 0 8px;">2. 伯沙撒作為「原型」(Prototype)</h4>' +
'<p>雖然異象是關於未來的帝國，但發生在伯沙撒年間具有深意。OT366 指出：伯沙撒是第一位向神揮舞拳頭、褻瀆聖殿器皿的狂傲君王。但他只是一個蒼白的預兆（a pale foreshadowing），預示著將來會有更邪惡、更褻瀆神的君王出現。</p>'
        },
        {
            title: '異象內容與解釋',
            icon: '🐏',
            defaultOpen: false,
            html: '<h4 style="color:#00897b;margin:0 0 8px;">1. 公綿羊與公山羊：明確的身份</h4>' +
'<p>不同於第 7 章的四獸需要推測，第 8 章的天使加百列<strong>明確指出</strong>了動物的身份：</p>' +
'<div class="highlight-box">' +
'<p><strong>🔍 動物與帝國的對應</strong></p>' +
'<ul>' +
'<li><strong>雙角的公綿羊 (The Ram)：</strong>天使明確指出這是<strong>瑪代與波斯</strong> (v.20)。兩角一高一低，後長的（波斯）比先長的（瑪代）更高，反映了波斯後來居上主導了帝國。</li>' +
'<li><strong>公山羊 (The Goat)：</strong>天使指出這是<strong>希臘</strong> (v.21)。那顯眼的大角是第一位王，即<strong>亞歷山大大帝</strong>。</li>' +
'<li><strong>四個角：</strong>大角折斷後長出四角，指亞歷山大死後帝國分裂為四個希臘化王國（卡山德-馬其頓、呂西馬古-小亞細亞、塞琉古-美索不達米亞、托勒密-埃及）。</li>' +
'</ul>' +
'</div>' +
'<h4 style="color:#00897b;margin:16px 0 8px;">2. 小角的身份：安提阿古四世 (Antiochus IV Epiphanes)</h4>' +
'<p>從四角中的一角長出了一個「小角」。這是本章的核心人物。</p>' +
'<ul>' +
'<li><strong>特徵：</strong>面貌兇惡、擅長詭詐、自高自大。</li>' +
'<li><strong>行動：</strong>攻擊「榮美之地」（以色列），將星宿拋在地上，自稱為「萬軍之君」，除掉常獻的燔祭，毀壞聖所，將真理拋在地上。</li>' +
'<li><strong>歷史應驗：</strong>學術界幾乎一致公認這指向塞琉古王朝的<strong>安提阿古四世</strong>（主前 175-163 年）。他在主前 167 年褻瀆耶路撒冷聖殿，引發了馬加比革命，最終於主前 164 年聖殿得以潔淨（修殿節 Hanukkah 的由來）。</li>' +
'</ul>' +
'<h4 style="color:#00897b;margin:16px 0 8px;">3. 「二千三百日」與受苦的期限</h4>' +
'<p>聖者問：「要持續到幾時呢？」回答是「到二千三百日（原文：早晨晚上），聖所就必潔淨。」</p>' +
'<ul>' +
'<li>許多學者認為這指 1150 天（每天早晚兩次獻祭，2300÷2=1150），約三年半。</li>' +
'<li><strong>神學意義：</strong>邪惡是有期限的。神設定了「受苦的邊界」，惡者不能無限期地肆虐。</li>' +
'</ul>'
        },
        {
            title: '兩個小角與大圖畫',
            icon: '📊',
            defaultOpen: false,
            html: '<h4 style="color:#00897b;margin:0 0 8px;">1. 兩個「小角」的比較 (第 7 章 vs 第 8 章)</h4>' +
'<div class="highlight-box">' +
'<p><strong>💡 希臘觀點 vs. 羅馬觀點</strong></p>' +
'<ul>' +
'<li><strong>羅馬觀點：</strong>認為第 7 章第四獸是羅馬，故第 7 章小角出自羅馬（可能是敵基督）；第 8 章小角出自希臘（安提阿古四世）。兩者是<strong>不同人</strong>。</li>' +
'<li><strong>希臘觀點 (OT366 傾向)：</strong>認為第 7 章第四獸是希臘，故兩章的小角<strong>都指向安提阿古四世</strong>。</li>' +
'</ul>' +
'</div>' +
'<h4 style="color:#00897b;margin:16px 0 8px;">2. OT366 的結論：「惡的升級」模式</h4>' +
'<p>OT366 (Segment 61) 提出但以理書展示了一種「惡的升級」模式：</p>' +
'<ul>' +
'<li><strong>伯沙撒</strong>（第 5 章）→ 褻瀆聖殿器皿</li>' +
'<li><strong>安提阿古四世</strong>（第 7-8 章小角）→ 禁止獻祭、毀壞聖所</li>' +
'<li><strong>終末的敵擋者</strong>（第 10-12 章）→ 更可怕的逼迫</li>' +
'</ul>' +
'<p>但對應的模式是：<strong>神始終掌權</strong>。邪惡被拴住了。祂必摧毀邪惡、建立祂的國度、與祂的聖民永遠一同掌權。</p>' +
'<div class="highlight-box">' +
'<p><strong>📘 但以理書的核心信息 (OT366 Segment 61)</strong></p>' +
'<p>「這卷書的大能在此：無論這世界變得多麼險惡——而它確實會變糟——我們的神依然坐著為王。我們能忍受所面臨的任何苦難——而我們也注定會經歷苦難。苦難終有結束的一天……要放心壯膽，要努力向前，要至死忠心。這正是《但以理書》的核心要旨。」</p>' +
'</div>'
        },
        // ── 加在 studyContent 陣列最後（第 5 項）──
{
    title: '互動練習：但以理書 2、7、8 章對照表',
    icon: '🎯',
    defaultOpen: false,
    type: 'four-empires-drag',
    html:
        '<p style="margin:0 0 6px;color:#555;font-size:14px;">' +
        '<strong>第一階段：</strong>將選項<strong>點選</strong>放入「羅馬觀」與「希臘觀」欄位（選項可重複使用）。<br>' +
        '<strong>第二階段：</strong>確認後，加入第八章的動物象徵對應。</p>' +
        '<p style="margin:0;font-size:13px;color:#888;">💡 點選上方選項（高亮），再點空格放入 ｜ 點已填空格可清除</p>',
    fourEmpiresData: {
        rows: [
            { dan2: '金頭',   dan2Emoji: '👑', dan7: '獅子',   dan7Emoji: '🦁' },
            { dan2: '銀胸臂', dan2Emoji: '🪙', dan7: '熊',     dan7Emoji: '🐻' },
            { dan2: '銅腹腰', dan2Emoji: '🥉', dan7: '豹',     dan7Emoji: '🐆' },
            { dan2: '鐵與泥', dan2Emoji: '⚔️', dan7: '第四獸', dan7Emoji: '🐉' },
            { dan2: '',       dan2Emoji: '',   dan7: '小角',   dan7Emoji: '📍' }
        ],
        stage1Options: [
            { id: 'babylon',      label: '巴比倫' },
            { id: 'medo-persia',  label: '瑪代波斯' },
            { id: 'media',        label: '瑪代' },
            { id: 'persia',       label: '波斯' },
            { id: 'greece',       label: '希臘' },
            { id: 'rome',         label: '羅馬' },
            { id: 'out-of-rome',  label: '出自羅馬' },
            { id: 'out-of-greece',label: '出自希臘' }
        ],
        stage1Answers: {
            roman: ['babylon', 'medo-persia', 'greece', 'rome', 'out-of-rome'],
            greek: ['babylon', 'media', 'persia', 'greece', 'out-of-greece']
        },
        stage2Options: [
            { id: 'ram',         label: '🐏 公綿羊 [ram]' },
            { id: 'ram-horns',   label: '🐏 兩角/公綿羊 [ram/two horns]' },
            { id: 'goat',        label: '🐐 公山羊 [goat]' },
            { id: 'ant-iv',      label: '👹 安提阿古四世 [Ant. IV Epi.]' },
            { id: 'out-of-goat', label: '🐐 出自公山羊 [out of the goat]' }
        ],
        stage2Slots: [
            { col: 'dan7',  row: 4 },
            { col: 'roman', row: 1 },
            { col: 'roman', row: 2 },
            { col: 'roman', row: 4 },
            { col: 'greek', row: 1 },
            { col: 'greek', row: 2 },
            { col: 'greek', row: 3 },
            { col: 'greek', row: 4 }
        ],
        stage2Answers: {
            'dan7-4':  'ant-iv',
            'roman-1': 'ram',
            'roman-2': 'goat',
            'roman-4': 'out-of-goat',
            'greek-1': 'ram-horns',
            'greek-2': 'ram-horns',
            'greek-3': 'goat',
            'greek-4': 'out-of-goat'
        },
        note: '💡 <strong>OT366 核心提醒 (Segment 61)：</strong>無論採取哪種觀點，重點不在辨認第二至第四國是誰，而在<strong>第五個國度——神永恆的國度</strong>。但以理書的力量是：「Take heart. Press on. Be faithful.」'
    }
}
    ],

    // ============================================================
    //  小組查經問題
    // ============================================================
    questions: {
        /* ---------- 觀察題 ---------- */
        observation: [
            {
                id: 'obs1',
                text: '根據天使加百列的解釋 (v.20-22)，公綿羊和公山羊分別代表哪個國家？那「大角」和後來長出的「四角」又代表什麼歷史演變？',
                hint: '直接從經文 v.20-22 找答案。注意公綿羊的兩角「一高一低」代表什麼？公山羊「腳不著地」又暗示什麼？',
                reference: '<b>【公綿羊】</b>v.20 明確指出：「有雙角的公綿羊就是瑪代王和波斯王。」兩角一高一低，後長的比先長的更高——反映波斯後來居上，主導了聯合帝國。公綿羊向西、向北、向南牴撞，「任意而行」——反映波斯帝國的擴張。<br><br><b>【公山羊】</b>v.21 明確指出：「那公山羊就是希臘王；兩眼當中的大角就是第一個王。」學術界一致認為這是亞歷山大大帝。「腳不著地」形容其征服的極速——亞歷山大在短短十年間征服了從希臘到印度的廣大領土。<br><br><b>【四角】</b>v.22：大角折斷（亞歷山大英年早逝，33歲），長出四角——指帝國分裂為四個希臘化王國：卡山德（馬其頓）、呂西馬古（小亞細亞）、塞琉古（美索不達米亞/敘利亞）、托勒密（埃及/巴勒斯坦）。OT366 (Segment 60) 指出塞琉古和托勒密對我們最重要，因為他們控制了以色列周圍的地區。'
            },
            {
                id: 'obs2',
                text: '請仔細閱讀 v.9-12 和 v.23-25，列出關於「小角」的行為描述。他攻擊的對象包括哪些？（提示：注意「榮美之地」、「天象」、「萬象之君」、「常獻的祭」、「真理」）',
                hint: '分兩層觀察：(1) 異象中的象徵描述 (v.9-12)；(2) 天使的解釋 (v.23-25)。列出他做了什麼、攻擊了誰。',
                reference: '<b>【異象中的描述 (v.9-12)】</b><br>• 向南、向東、向「佳美之地」（以色列）日漸壯大<br>• 高及諸天萬象，把天象和星辰摔落在地，用腳踐踏<br>• 自高自大，自以為高及「萬象之君」<br>• 除掉經常獻給君的祭<br>• 毀壞君的聖所<br>• 把真理拋在地上<br>• 任意而行，無往不利<br><br><b>【天使的解釋 (v.23-25)】</b><br>• 面貌兇惡，詭計多端<br>• 權柄極大，卻不是因自己的能力<br>• 施行驚人的毀滅<br>• 毀滅強有力的人和眾聖民<br>• 用權術使詭計成功<br>• 心自高自大<br>• 趁人無備毀滅多人<br>• 起來攻擊「萬君之君」<br><br><b>攻擊對象：</b>聖地（佳美之地）、天上的星辰（可能指忠信者或天使）、神自己（萬象之君/萬君之君）、祭祀制度（常獻的祭）、聖所、真理、聖民。OT366 (Segment 59) 指出這些象徵的確切指涉仍有爭議，但整體圖畫是清晰的：全面性的對神和神子民的攻擊。'
            },
            {
                id: 'obs3',
                text: '在 v.13-14 中，聖者們的對話焦點是什麼問題？這個問題的答案是什麼？這顯示了在苦難中，信徒最關心的通常是什麼？',
                hint: '注意「到幾時呢？」這個問題在詩篇哀歌中也常出現。答案「二千三百日」意味著什麼？',
                reference: '<b>【焦點問題】</b>v.13：「這經常獻的祭、帶來荒涼的罪過、聖所與軍隊被踐踏的異象，<b>要持續到幾時呢？</b>」——聖者關心的核心問題是：苦難有多長？什麼時候結束？<br><br><b>【答案】</b>v.14：「要到二千三百日（原文：早晨晚上），聖所就必潔淨。」OT366 (Segment 59) 指出許多學者將此理解為 1150 天（每天早晚各一次獻祭，2300÷2），約三年半。<br><br><b>【神學意義】</b>OT366 提到，「how long」的語言讓人想起哀歌詩篇，它是「something of a call for mercy」（求憐憫的呼喊）。在苦難中，信徒最關心的不是「為什麼」而是「到幾時」——受苦有沒有盡頭？答案是：<b>有</b>。神設定了期限，邪惡不能無限期肆虐。'
            }
        ],

        /* ---------- 解釋題 ---------- */
        interpretation: [
            {
                id: 'int1',
                text: 'OT366 提到，從伯沙撒王到安提阿古四世，再到終末的敵擋者，邪惡似乎在不斷升級（伯沙撒只是拿聖殿器皿喝酒，安提阿古四世卻直接禁止獻祭並毀壞聖所）。\n(a) 這種「越來越糟」的歷史觀，與我們常聽到的「社會不斷進步」觀點有何衝突？\n(b) 這如何調整我們對世界局勢的期待？',
                hint: '但以理書不是悲觀主義——它是現實主義加上終末盼望。邪惡會升級，但神的掌權也從未動搖。',
                reference: '<b>(a)【與「進步史觀」的衝突】</b><br>現代社會傾向相信人類在不斷進步、世界會越來越好。但但以理書展示的是一種「惡的升級」模式：反神的權勢不是在消退，而是在加劇。OT366 (Segment 61) 描述這個模式：「The pattern in Daniel is one of growing evil and a growing threat against God\'s people.」<br><br>伯沙撒 → 安提阿古四世 → 終末敵擋者，一個比一個更可怕。<br><br><b>(b)【調整期待】</b><br>這不是悲觀主義，而是聖經的現實主義。但以理書同時展示了另一個對應模式：「But a corresponding pattern is that God is always in control. Evil is on a leash.」<br><br>我們不應天真地期待世界會自動變好，但也不應絕望——因為邪惡有期限（2300日），而神的國度是永恆的。正確的期待是：事情可能會更糟，但結局已經確定——神必得勝。'
            },
            {
                id: 'int2',
                text: '經文 v.12 提到「因罪過的緣故」，真理被拋在地上，軍隊和祭祀被交給小角。這似乎暗示小角的肆虐某種程度上是神對百姓罪惡的管教。\n(a) 這是什麼意思？神為何「允許」聖所被踐踏？\n(b) 當教會或信徒群體遭遇困難時，我們應如何平衡「外在的壓迫」與「內在的反省」？',
                hint: 'OT366 (Segment 59) 提到這句話「seems to be saying that the little horn\'s tyrannical rule over God\'s people was divine retribution for something.」參考以色列被擄的原因。',
                reference: '<b>(a)【「因罪過的緣故」】</b><br>OT366 (Segment 59) 指出這句話暗示小角的暴政「was divine retribution for something」——某種意義上是神對百姓罪的審判工具。這與舊約一貫的模式相符：神允許外邦壓迫者作為管教祂子民的工具（如亞述、巴比倫）。<br><br>這不是說被害者「活該」，而是說：(1) 神仍然掌權——連敵人的肆虐都在祂的許可之下；(2) 苦難有時包含管教的成分。<br><br><b>(b)【平衡外壓與內省】</b><br>不應走極端：既不應把所有苦難都歸咎於自己的罪（約伯的朋友的錯誤），也不應完全排除反省的可能。健康的態度是：<br>• 面對外在壓迫時，首先確認神仍掌權；<br>• 同時謙卑地省察：我們的信仰群體是否有需要悔改之處？<br>• 但最終，審判惡人的責任在神，不在我們。'
            },
            {
                id: 'int3',
                text: '小角的結局是「非因人手而滅亡」(v.25)。\n(a) 這句話對當時受苦的猶太人有什麼安慰？\n(b) 第 8 章與第 7 章提供的盼望有何不同？為什麼 OT366 說第 8 章「只帶來負面的結束，沒有正面的展望」？',
                hint: '第 7 章有「人子得國」的榮耀畫面；第 8 章只有「邪惡被終止」但沒有描述之後的美好。想想這對讀者的情感衝擊。',
                reference: '<b>(a)【「非因人手」的安慰】</b><br>這意味著：(1) 無論敵人多強大（甚至自比神），他的滅亡不由人類的軍事力量決定，而是神親自干預——保證了審判的<b>必然性</b>；(2) 受苦的百姓不需要靠自己的力量去推翻暴君——神會在祂的時間表中親自處理。<br><br>歷史應驗：安提阿古四世確實不是在戰場上被人殺死，而是在主前 163 年因疾病（據記載是精神錯亂加上內臟疾病）去世。<br><br><b>(b)【第 8 章 vs 第 7 章的盼望】</b><br>OT366 (Segment 60) 精確指出：「Unlike chapter 7, which consoled the people with the hope of a future reign with the \'one like a son of man,\' chapter 8 <b>only offers the hope that evil won\'t last forever</b>. God will bring it to an end.」<br><br>第 7 章：邪惡結束 + 聖民與人子一同得國（正面展望）<br>第 8 章：邪惡結束……然後呢？沒有說。<br><br>這使得第 7 章作為書卷「樞紐」的角色更加重要——它是整卷書唯一提供全面正面盼望的章節。'
            },
            {
                id: 'int4',
                text: '許多人喜歡用但以理書的異象來繪製「末世時間表」，但 OT366 (Segment 61) 卻說：「我所摒棄的，是從但以理書衍生出來的詳細末世圖表 (detailed end-times chart)」。\n(a) 為什麼講義作者認為但以理書的目的不是為了讓我們預測未來的精確時間？\n(b) 如果不是為了畫時間表，這些異象真正的「力量 (power)」在哪裡？',
                hint: '回顧講義最後一段的結論。預言的重點是「誰掌權」，而不是「精確的日期」。',
                reference: '<b>(a)【為何不是為了末世圖表】</b><br>講義指出，但以理的異象主要聚焦於主前二世紀安提阿古四世的恐怖統治。雖然它建立了「惡的升級」模式（指向最終的敵基督），但其目的並非提供一份讓我們去拼湊、猜測具體日期的時間表。歷史上無數次「更新圖表」的失敗，證明了這並非神賜下預言的原意。<br><br><b>(b)【異象真正的力量】</b><br>OT366 總結道：「這卷書的力量不在於讓我們去追蹤詳細的預測...而在於：無論這個世界變得多麼像地獄——而且它確實會——我們的神仍坐在寶座上。(our God is on the throne)」預言的力量在於賦予我們在苦難中忍耐的確據，呼召我們：「放心、繼續前進、保持忠心 (Take heart. Press on. Be faithful.)」。'
            }
        ],

        /* ---------- 應用題 ---------- */
        
        application: [
    {
        id: 'app1',
        text: '小角的特徵之一是將「真理拋在地上」(v.12) 且「任意而行」卻「無往不利」。在現代社會中，我們是否也常看到謊言得勢、真理被踐踏，而作惡者似乎一帆風順？這是否讓你感到灰心？但以理書如何幫助你面對這種現實？',
        hint: '「無往不利」是暫時的——記住「二千三百日」的期限。神沒有應許真理在今世總是「贏」，但祂應許了終極的清算。',
        reference: '<b>引導方向：</b><br>OT366 (Segment 61) 提醒我們：但以理書的力量不在於提供精確的預測圖表，而在於宣告——「no matter how hellish the world may get—and it will—our God is on the throne.」<br><br><b>具體應用：</b><br>當你在職場或生活中看到不義得勢、誠實反而吃虧時，記住：<br>• 小角「無往不利」，但有期限（2300日）。<br>• 他的結局是「非因人手而滅」——神必清算。<br>• 你堅持真理的代價，在永恆中會得到補償。<br><br>不要因為短期的「吃虧」而放棄真理。真理暫時被「拋在地上」，但最終聖所「必潔淨」。'
    },
    {
        id: 'app2',
        text: '「到二千三百日，聖所就必潔淨」——這表明苦難有邊界，神手中有計時器。如果你正處於一段長期的困難中（疾病、家庭問題、職場霸凌），這段經文如何給你盼望？',
        hint: '神不只知道你在受苦——祂已經設定了受苦的終點。「How long?」的答案是一個數字，不是「永遠」。',
        reference: '<b>引導方向：</b><br>OT366 (Segment 59) 指出，聖者的問題「How long?」與哀歌詩篇的呼喊相同，是「a call for mercy」。而答案的重點不在於精確計算日期（我們不需要去算自己的2300日是哪一天），而在於：<b>受苦有終點</b>。<br><br><b>具體應用：</b><br>在禱告中，你可以這樣宣告：<br>• 「主啊，我的受苦不是無限期的。你已經設定了終點。」<br>• 「即使我現在不知道還要多久，但我知道你知道。」<br>• 「你必潔淨與恢復——不只是聖殿，也是我的生命。」<br><br>這不是否認痛苦，而是在痛苦中錨定於盼望。'
    },
    {
        id: 'app3',
        text: '但以理雖然因異象而「昏倒，病了數日」，但他後來「起來辦理王的事務」(v.27)。知道未來會有艱難（甚至更糟），不代表我們要逃避現實或陷入絕望。本週，你如何在知道大環境不樂觀的情況下，依然在你的崗位上忠心服事神？',
        hint: 'OT366 的結語是「Take heart. Press on. Be faithful.」——這正是但以理的示範。',
        reference: '<b>引導方向：</b><br>但以理的反應有兩個階段：(1) 昏倒、病了數日——真實地面對異象帶來的情感衝擊；(2) 起來辦理王的事務——回到崗位忠心職守。<br><br>OT366 (Segment 60) 解釋但以理為何如此震驚：「The exile was the worst thing that had happened to God\'s people. But... Daniel\'s vision reveals that God\'s people really hadn\'t seen the worst yet after all.」知道最壞的還沒來到，卻仍然回到崗位——這就是信心。<br><br><b>具體應用：</b><br>• 允許自己為世界的狀況感到哀傷（但以理也病了數日）。<br>• 但不要停留在哀傷中——「起來辦理王的事務」。<br>• 你的「王的事務」是什麼？就是你日常的責任——工作、家庭、教會、學業。<br>• OT366 (Segment 61) 的結語：「Take heart. Press on. Be faithful. That\'s what the book of Daniel is about.」'
    }
]
    },

    // ============================================================
    //  測驗
    // ============================================================
    quiz: [
        // ── 選擇題 (MC) ── 5 題
        {
            type: 'mc',
            q: '但以理書第 8 章與第 7 章相比，最顯著的變化是什麼？',
            opts: [
                '從希伯來文轉為亞蘭文',
                '從亞蘭文轉回希伯來文，焦點從世界帝國轉向猶太人和聖殿的命運',
                '從異象轉為敘事體裁',
                '從第一人稱轉為第三人稱'
            ],
            ans: 1
        },
        {
            type: 'mc',
            q: '根據天使加百列的解釋 (v.20-21)，公綿羊和公山羊分別代表什麼？',
            opts: [
                '巴比倫和瑪代波斯',
                '瑪代波斯和希臘',
                '希臘和羅馬',
                '亞述和巴比倫'
            ],
            ans: 1
        },
        {
            type: 'mc',
            q: '公山羊的「大角折斷，長出四角」在歷史上指什麼事件？',
            opts: [
                '波斯帝國分裂為四省',
                '亞歷山大大帝英年早逝，帝國被四位將軍瓜分',
                '巴比倫城被四國圍攻',
                '羅馬帝國分為東西兩部分再各自分裂'
            ],
            ans: 1
        },
        {
            type: 'mc',
            q: '根據 OT366，第 8 章的「小角」學術界幾乎一致認為是指誰？',
            opts: [
                '尼布甲尼撒',
                '古列大帝',
                '塞琉古王朝的安提阿古四世 (Antiochus IV Epiphanes)',
                '羅馬皇帝尼祿'
            ],
            ans: 2
        },
        {
            type: 'mc',
            q: '小角的結局是「非因人的手而遭毀滅」(v.25)，這句話的神學意義是什麼？',
            opts: [
                '暴君會死於自然老化',
                '無論敵人多強大，神會親自干預審判，不需依靠人類軍事力量',
                '人類永遠無法推翻暴政',
                '這個暴君會主動悔改'
            ],
            ans: 1
        },

        // ── 填充題 (Fill) ── 3 題
        {
            type: 'fill',
            q: '天使加百列告訴但以理：「你所看見那有雙角的公綿羊就是______王和波斯王。」(v.20)',
            ans: '瑪代',
            accept: ['瑪代', '玛代']
        },
        {
            type: 'fill',
            q: '「到______日，聖所就必潔淨。」(v.14)',
            ans: '二千三百',
            accept: ['二千三百', '2300', '兩千三百']
        },
        {
            type: 'fill',
            q: '但以理聽完異象後的反應是：「昏倒，病了數日，然後起來辦理王的______。」(v.27)',
            ans: '事務',
            accept: ['事務', '事']
        },

        // ── 配對題 (Match) ── 3 題
        {
            type: 'match',
            q: '請將第 8 章異象中的象徵與天使的解釋配對：',
            pairs: [
                { left: '雙角的公綿羊', right: '瑪代與波斯 (v.20)' },
                { left: '公山羊', right: '希臘 (v.21)' },
                { left: '山羊兩眼間的大角', right: '第一位王（亞歷山大大帝）' },
                { left: '大角折斷後的四角', right: '四個希臘化王國' },
                { left: '從一角長出的小角', right: '面貌兇惡的王（安提阿古四世）' }
            ]
        },
        {
    type: 'mc',
    q: '以下哪一項「不是」第 7 章小角與第 8 章小角的共同特徵？',
    opts: [
        '都從小開始，漸漸壯大',
        '都說誇大的話 / 自高自大',
        '都逼迫神的聖民',
        '都在興起前拔出三隻角'
    ],
    ans: 3
},
{
    type: 'mc',
    q: '關於第 7 章與第 8 章小角的「不同處」，以下哪項描述最準確？',
    opts: [
        '第 7 章的小角自高自大，第 8 章的小角則不是',
        '第 7 章的焦點在聖民受逼迫，第 8 章的焦點在聖所被踐踏',
        '第 7 章的小角從山羊長出，第 8 章的小角從第四獸長出',
        '第 7 章的小角有明確歷史對象，第 8 章的則完全沒有'
    ],
    ans: 1
},
        {
            type: 'match',
            q: '請將但以理書的「惡的升級」模式按順序配對：',
            pairs: [
                { left: '第一層原型（第 5 章）', right: '伯沙撒——褻瀆聖殿器皿' },
                { left: '第二層升級（第 7-8 章小角）', right: '安提阿古四世——禁止獻祭、毀壞聖所' },
                { left: '第三層升級（第 10-12 章）', right: '終末的敵擋者——更可怕的逼迫' },
                { left: '最終結局', right: '神的國度永遠得勝' }
            ]
        }
    ]
});
/* =====================================================
   renderFourEmpiresDrag — 但以理書 2/7/8 章對照表互動
   由主程式在偵測到 section.type === 'four-empires-drag' 時呼叫：
     window.renderFourEmpiresDrag(containerEl, section.fourEmpiresData);
   ===================================================== */
window.renderFourEmpiresDrag = window.renderFourEmpiresDrag || function (container, data) {
    var rows = data.rows;
    var s1Opts = data.stage1Options;
    var s1Ans = data.stage1Answers;
    var s2Opts = data.stage2Options;
    var s2Slots = data.stage2Slots;
    var s2Ans = data.stage2Answers;

    /* ── state ── */
    var stage = 1;
    var s1Roman = new Array(5).fill(null);
    var s1Greek = new Array(5).fill(null);
    var s2Filled = {}; // key: 'col-row', value: option id
    var selected = null; // currently selected option id
    var s1Result = null; // null | {romanOk, greekOk}
    var s2Result = null;

    /* ── inject scoped styles ── */
    if (!document.getElementById('fe-styles')) {
        var s = document.createElement('style');
        s.id = 'fe-styles';
        s.textContent =
            '.fe-wrap{margin-top:10px}' +
            '.fe-stage-title{font-size:15px;font-weight:700;color:#1a237e;margin:12px 0 8px;display:flex;align-items:center;gap:6px}' +
            '.fe-stage-title.s2{color:#0d47a1}' +
            '.fe-opts{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;padding:10px;background:#f9fafb;border-radius:10px}' +
            '.fe-opts.s2{background:#e3f2fd}' +
            '.fe-chip{padding:7px 14px;border-radius:20px;background:#fff;border:1.5px solid #ddd;cursor:pointer;font-weight:600;font-size:12px;transition:all .15s;user-select:none}' +
            '.fe-chip:hover{box-shadow:0 2px 8px rgba(0,0,0,.08);border-color:#aaa}' +
            '.fe-chip.sel{border:2px solid #1a237e;background:#e8eaf6;box-shadow:0 0 0 3px rgba(26,35,126,.15)}' +
            '.fe-chip.s2{border-color:#1565c0;background:#e3f2fd}' +
            '.fe-chip.s2.sel{border:2px solid #0d47a1;background:#bbdefb;box-shadow:0 0 0 3px rgba(13,71,161,.15)}' +
            '.fe-tbl{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:12px}' +
            '.fe-tbl th{padding:8px 6px;background:#f1f3f5;border:1px solid #dee2e6;font-weight:700;text-align:center;font-size:12px;color:#555}' +
            '.fe-tbl td{padding:6px;border:1px solid #dee2e6;text-align:center;vertical-align:middle}' +
            '.fe-tbl td.given{background:#fafafa;font-weight:600;color:#333;font-size:12px}' +
            '.fe-slot{min-height:36px;padding:6px 10px;border-radius:8px;border:2px dashed #ced4da;background:#f8f9fa;cursor:pointer;transition:all .2s;font-size:12px;color:#adb5bd;display:flex;align-items:center;justify-content:center;gap:4px}' +
            '.fe-slot.filled{border:2px solid #74b9ff;background:#eaf4fd;color:#2d3436;font-weight:600;border-style:solid}' +
            '.fe-slot.locked{border:1px solid #dee2e6;background:#f1f3f5;color:#333;cursor:default;font-weight:600}' +
            '.fe-tag-slot{display:inline-flex;align-items:center;padding:3px 8px;border-radius:12px;border:1.5px dashed #64b5f6;background:#e3f2fd;cursor:pointer;font-size:11px;color:#90a4ae;margin-top:4px;min-width:50px;justify-content:center;transition:all .15s}' +
            '.fe-tag-slot.filled{border:1.5px solid #1565c0;background:#bbdefb;color:#0d47a1;font-weight:600;border-style:solid}' +
            '.fe-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}' +
            '.fe-btn{padding:8px 16px;border-radius:10px;border:1px solid #ddd;background:#fff;font-weight:700;cursor:pointer;font-size:13px;transition:background .15s}' +
            '.fe-btn:hover{background:#f1f3f5}' +
            '.fe-btn-p{background:#1a237e;color:#fff;border-color:#1a237e}' +
            '.fe-btn-p:hover{background:#283593}' +
            '.fe-btn-s2{background:#0d47a1;color:#fff;border-color:#0d47a1}' +
            '.fe-btn-s2:hover{background:#0a3d91}' +
            '.fe-result{margin-top:12px;padding:14px;border-radius:12px;border:1px solid #dee2e6;background:#f8f9fa;line-height:1.7;font-size:13px}' +
            '.fe-note{margin-top:10px;padding:10px 12px;border-radius:8px;background:#fff9db;border:1px solid #ffe066;font-size:13px;color:#6c5200;line-height:1.6}' +
            '.fe-ok{color:#2e7d32}' +
            '.fe-no{color:#c62828}' +
            '@media(max-width:640px){' +
                '.fe-tbl{font-size:11px}' +
                '.fe-tbl th,.fe-tbl td{padding:4px 3px}' +
                '.fe-slot{font-size:11px;min-height:30px;padding:4px 6px}' +
                '.fe-chip{font-size:11px;padding:5px 10px}' +
                '.fe-tag-slot{font-size:10px;padding:2px 6px}' +
            '}';
        document.head.appendChild(s);
    }

    /* ── helpers ── */
    function getS1Label(id) {
        for (var i = 0; i < s1Opts.length; i++) { if (s1Opts[i].id === id) return s1Opts[i].label; }
        return '';
    }
    function getS2Label(id) {
        for (var i = 0; i < s2Opts.length; i++) { if (s2Opts[i].id === id) return s2Opts[i].label; }
        return '';
    }

    /* ── render ── */
    function render() {
        container.innerHTML = '';
        var wrap = document.createElement('div');
        wrap.className = 'fe-wrap';

        if (stage === 1) renderStage1(wrap);
        else renderStage2(wrap);

        container.appendChild(wrap);
    }

    /* ══════════ STAGE 1 ══════════ */
    function renderStage1(wrap) {
        // title
        var title = document.createElement('div');
        title.className = 'fe-stage-title';
        title.innerHTML = '📊 第一階段：填入帝國名稱（選項可重複使用）';
        wrap.appendChild(title);

        // options
        var optsDiv = document.createElement('div');
        optsDiv.className = 'fe-opts';
        s1Opts.forEach(function (opt) {
            var chip = document.createElement('span');
            chip.className = 'fe-chip' + (selected === opt.id ? ' sel' : '');
            chip.textContent = opt.label;
            chip.onclick = function () {
                selected = (selected === opt.id) ? null : opt.id;
                render();
            };
            optsDiv.appendChild(chip);
        });
        wrap.appendChild(optsDiv);

        // table
        var tbl = document.createElement('table');
        tbl.className = 'fe-tbl';
        tbl.innerHTML = '<thead><tr><th>但以理書 2 章</th><th>但以理書 7 章</th><th>羅馬觀 (Roman View)</th><th>希臘觀 (Greek View)</th></tr></thead>';
        var tbody = document.createElement('tbody');

        rows.forEach(function (row, i) {
            var tr = document.createElement('tr');

            // Dan 2
            var td1 = document.createElement('td');
            td1.className = 'given';
            td1.textContent = (row.dan2Emoji ? row.dan2Emoji + ' ' : '') + row.dan2;
            tr.appendChild(td1);

            // Dan 7
            var td2 = document.createElement('td');
            td2.className = 'given';
            td2.textContent = (row.dan7Emoji ? row.dan7Emoji + ' ' : '') + row.dan7;
            tr.appendChild(td2);

            // Roman slot
            var td3 = document.createElement('td');
            var slot3 = document.createElement('div');
            slot3.className = 'fe-slot' + (s1Roman[i] ? ' filled' : '');
            slot3.textContent = s1Roman[i] ? getS1Label(s1Roman[i]) : '點選放入';
            slot3.onclick = function () {
                if (selected && !s1Roman[i]) { s1Roman[i] = selected; selected = null; s1Result = null; render(); }
                else if (s1Roman[i]) { s1Roman[i] = null; s1Result = null; render(); }
                else if (selected) { s1Roman[i] = selected; selected = null; s1Result = null; render(); }
            };
            td3.appendChild(slot3);
            tr.appendChild(td3);

            // Greek slot
            var td4 = document.createElement('td');
            var slot4 = document.createElement('div');
            slot4.className = 'fe-slot' + (s1Greek[i] ? ' filled' : '');
            slot4.textContent = s1Greek[i] ? getS1Label(s1Greek[i]) : '點選放入';
            slot4.onclick = function () {
                if (selected && !s1Greek[i]) { s1Greek[i] = selected; selected = null; s1Result = null; render(); }
                else if (s1Greek[i]) { s1Greek[i] = null; s1Result = null; render(); }
                else if (selected) { s1Greek[i] = selected; selected = null; s1Result = null; render(); }
            };
            td4.appendChild(slot4);
            tr.appendChild(td4);

            tbody.appendChild(tr);
        });
        tbl.appendChild(tbody);
        wrap.appendChild(tbl);

        // actions
        var actions = document.createElement('div');
        actions.className = 'fe-actions';

        var resetBtn = document.createElement('button');
        resetBtn.className = 'fe-btn';
        resetBtn.textContent = '🔄 重置';
        resetBtn.onclick = function () { s1Roman.fill(null); s1Greek.fill(null); selected = null; s1Result = null; render(); };
        actions.appendChild(resetBtn);

        var confirmBtn = document.createElement('button');
        confirmBtn.className = 'fe-btn fe-btn-p';
        confirmBtn.textContent = '✅ 確認第一階段';
        confirmBtn.onclick = evaluateStage1;
        actions.appendChild(confirmBtn);
        wrap.appendChild(actions);

        // result
        if (s1Result) {
            var rd = document.createElement('div');
            rd.className = 'fe-result';
            rd.innerHTML = s1Result;
            wrap.appendChild(rd);
        }
    }

    function evaluateStage1() {
        var empty = s1Roman.some(function (v) { return !v; }) || s1Greek.some(function (v) { return !v; });
        if (empty) {
            s1Result = '<p style="color:#d63031;font-weight:600;">⚠️ 請先填滿所有空格再確認！</p>';
            render(); return;
        }

        var rOk = 0, gOk = 0;
        for (var i = 0; i < 5; i++) {
            if (s1Roman[i] === s1Ans.roman[i]) rOk++;
            if (s1Greek[i] === s1Ans.greek[i]) gOk++;
        }

        var h = '<h4 style="margin:0 0 8px;">第一階段結果</h4>';
        h += '<p><strong>羅馬觀：</strong>' + rOk + '/5 ' + (rOk === 5 ? '<span class="fe-ok">✅ 完全正確</span>' : '<span class="fe-no">需要調整</span>') + '</p>';
        h += '<p><strong>希臘觀：</strong>' + gOk + '/5 ' + (gOk === 5 ? '<span class="fe-ok">✅ 完全正確</span>' : '<span class="fe-no">需要調整</span>') + '</p>';

        if (rOk === 5 && gOk === 5) {
            h += '<p style="color:#2e7d32;font-weight:700;margin-top:8px;">🎉 兩個觀點都正確！進入第二階段 →</p>';
            s1Result = h;
            render();
            setTimeout(function () { stage = 2; selected = null; render(); }, 1200);
        } else {
            h += '<table class="fe-tbl" style="margin-top:8px"><tr><th></th><th>你的答案</th><th>正確（羅馬觀）</th><th>正確（希臘觀）</th></tr>';
            for (var i = 0; i < 5; i++) {
                h += '<tr>';
                h += '<td class="given">' + rows[i].dan7Emoji + ' ' + rows[i].dan7 + '</td>';
                h += '<td>' + getS1Label(s1Roman[i]) + (s1Roman[i] === s1Ans.roman[i] ? ' ✅' : ' ❌') + ' / ' + getS1Label(s1Greek[i]) + (s1Greek[i] === s1Ans.greek[i] ? ' ✅' : ' ❌') + '</td>';
                h += '<td>' + getS1Label(s1Ans.roman[i]) + '</td>';
                h += '<td>' + getS1Label(s1Ans.greek[i]) + '</td>';
                h += '</tr>';
            }
            h += '</table>';
            h += '<p style="margin-top:8px;font-size:12px;color:#888;">修正後再次確認，或直接繼續：</p>';
            h += '<button class="fe-btn fe-btn-p" onclick="this.parentElement.parentElement.querySelector(\'[data-force-s2]\').click()" style="margin-top:4px;font-size:12px;padding:6px 12px;">跳至第二階段 →</button>';
            // hidden button to force stage 2
            s1Result = h;
            render();
            // add force button listener
            var forceEl = container.querySelector('[data-force-s2]');
            if (!forceEl) {
                var hidden = document.createElement('button');
                hidden.setAttribute('data-force-s2', '1');
                hidden.style.display = 'none';
                hidden.onclick = function () {
                    // use correct answers for display
                    s1Roman = s1Ans.roman.slice();
                    s1Greek = s1Ans.greek.slice();
                    stage = 2; selected = null; render();
                };
                container.appendChild(hidden);
            }
        }
    }

    /* ══════════ STAGE 2 ══════════ */
    function renderStage2(wrap) {
        // title
        var title = document.createElement('div');
        title.className = 'fe-stage-title s2';
        title.innerHTML = '📖 第二階段：加入第八章的對應（點選藍色選項，再點表中的藍色空格）';
        wrap.appendChild(title);

        // options
        var optsDiv = document.createElement('div');
        optsDiv.className = 'fe-opts s2';
        s2Opts.forEach(function (opt) {
            var chip = document.createElement('span');
            chip.className = 'fe-chip s2' + (selected === opt.id ? ' sel' : '');
            chip.textContent = opt.label;
            chip.onclick = function () {
                selected = (selected === opt.id) ? null : opt.id;
                render();
            };
            optsDiv.appendChild(chip);
        });
        wrap.appendChild(optsDiv);

        // table
        var tbl = document.createElement('table');
        tbl.className = 'fe-tbl';
        tbl.innerHTML = '<thead><tr><th>但以理書 2 章</th><th>但以理書 7 章</th><th>羅馬觀 (Roman View)</th><th>希臘觀 (Greek View)</th></tr></thead>';
        var tbody = document.createElement('tbody');

        rows.forEach(function (row, i) {
            var tr = document.createElement('tr');

            // Dan 2
            var td1 = document.createElement('td');
            td1.className = 'given';
            td1.textContent = (row.dan2Emoji ? row.dan2Emoji + ' ' : '') + row.dan2;
            tr.appendChild(td1);

            // Dan 7 (may have stage2 slot)
            var td2 = document.createElement('td');
            td2.className = 'given';
            var dan7Html = (row.dan7Emoji ? row.dan7Emoji + ' ' : '') + row.dan7;
            td2.innerHTML = dan7Html;
            var s2key_d7 = 'dan7-' + i;
            if (s2Ans[s2key_d7] !== undefined) {
                var tag = createS2Tag(s2key_d7);
                td2.appendChild(tag);
            }
            tr.appendChild(td2);

            // Roman (locked with possible stage2 tag)
            var td3 = document.createElement('td');
            var lockDiv3 = document.createElement('div');
            lockDiv3.className = 'fe-slot locked';
            lockDiv3.textContent = getS1Label(s1Roman[i]);
            td3.appendChild(lockDiv3);
            var s2key_r = 'roman-' + i;
            if (s2Ans[s2key_r] !== undefined) {
                var tag2 = createS2Tag(s2key_r);
                td3.appendChild(tag2);
            }
            tr.appendChild(td3);

            // Greek (locked with possible stage2 tag)
            var td4 = document.createElement('td');
            var lockDiv4 = document.createElement('div');
            lockDiv4.className = 'fe-slot locked';
            lockDiv4.textContent = getS1Label(s1Greek[i]);
            td4.appendChild(lockDiv4);
            var s2key_g = 'greek-' + i;
            if (s2Ans[s2key_g] !== undefined) {
                var tag3 = createS2Tag(s2key_g);
                td4.appendChild(tag3);
            }
            tr.appendChild(td4);

            tbody.appendChild(tr);
        });
        tbl.appendChild(tbody);
        wrap.appendChild(tbl);

        // actions
        var actions = document.createElement('div');
        actions.className = 'fe-actions';

        var resetBtn = document.createElement('button');
        resetBtn.className = 'fe-btn';
        resetBtn.textContent = '🔄 重置第二階段';
        resetBtn.onclick = function () { s2Filled = {}; selected = null; s2Result = null; render(); };
        actions.appendChild(resetBtn);

        var backBtn = document.createElement('button');
        backBtn.className = 'fe-btn';
        backBtn.textContent = '← 回到第一階段';
        backBtn.onclick = function () { stage = 1; selected = null; s1Result = null; s2Result = null; s2Filled = {}; render(); };
        actions.appendChild(backBtn);

        var confirmBtn = document.createElement('button');
        confirmBtn.className = 'fe-btn fe-btn-s2';
        confirmBtn.textContent = '✅ 確認第二階段';
        confirmBtn.onclick = evaluateStage2;
        actions.appendChild(confirmBtn);
        wrap.appendChild(actions);

        // result
        if (s2Result) {
            var rd = document.createElement('div');
            rd.className = 'fe-result';
            rd.innerHTML = s2Result;
            wrap.appendChild(rd);
        }
    }

    function createS2Tag(key) {
        var tag = document.createElement('div');
        tag.className = 'fe-tag-slot' + (s2Filled[key] ? ' filled' : '');
        tag.textContent = s2Filled[key] ? getS2Label(s2Filled[key]) : '第八章?';
        tag.onclick = function (e) {
            e.stopPropagation();
            if (selected && !s2Filled[key]) { s2Filled[key] = selected; selected = null; s2Result = null; render(); }
            else if (s2Filled[key]) { s2Filled[key] = null; s2Result = null; render(); }
            else if (selected) { s2Filled[key] = selected; selected = null; s2Result = null; render(); }
        };
        return tag;
    }

    function evaluateStage2() {
        var keys = Object.keys(s2Ans);
        var empty = keys.some(function (k) { return !s2Filled[k]; });
        if (empty) {
            s2Result = '<p style="color:#d63031;font-weight:600;">⚠️ 請先填滿所有藍色空格再確認！</p>';
            render(); return;
        }

        var ok = 0;
        keys.forEach(function (k) { if (s2Filled[k] === s2Ans[k]) ok++; });
        var total = keys.length;

        var h = '<h4 style="margin:0 0 8px;">第二階段結果：' + ok + '/' + total + '</h4>';
        if (ok === total) {
            h += '<p class="fe-ok" style="font-weight:700;">🎉 全部正確！你已完整理解但以理書 2、7、8 章的對照關係。</p>';
        } else {
            h += '<table class="fe-tbl" style="margin-top:8px"><tr><th>位置</th><th>你的答案</th><th>正確答案</th><th></th></tr>';
            keys.forEach(function (k) {
                var isOk = s2Filled[k] === s2Ans[k];
                var parts = k.split('-');
                var colName = parts[0] === 'dan7' ? '但 7 小角' : (parts[0] === 'roman' ? '羅馬觀 第' + (parseInt(parts[1]) + 1) + '列' : '希臘觀 第' + (parseInt(parts[1]) + 1) + '列');
                h += '<tr><td>' + colName + '</td><td>' + getS2Label(s2Filled[k]) + '</td><td>' + getS2Label(s2Ans[k]) + '</td><td>' + (isOk ? '✅' : '❌') + '</td></tr>';
            });
            h += '</table>';
        }
        h += '<div class="fe-note">' + data.note + '</div>';
        s2Result = h;
        render();
    }

    /* ── init ── */
    render();
};

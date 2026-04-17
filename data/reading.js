window.LESSONS_DATA = window.LESSONS_DATA || [];
window.LESSONS_DATA.push({
    id: 'reading',
    title: '課餘閱讀',
    subtitle: '延伸閱讀與學術資源',
    ref: '延伸閱讀',
    description: '但以理書相關的學術引文、書目推薦與購書連結',
    comingSoon: false,
    isReading: true,
    chapterTitle: '但以理書課餘閱讀',
    cardIcon: '📚',
    cardColor: '#1b5e20',

    /* ──────────────────────────────
       書目資料庫 (Bibliography)
       每本書用一個唯一 key 識別
       ────────────────────────────── */
    bibliography: {
        tully2022: {
            id: 'tully2022',
            author: 'Eric J. Tully',
            title: 'Reading the Prophets as Christian Scripture: A Literary, Canonical, and Theological Introduction',
            series: 'Reading Christian Scripture',
            publisher: 'Baker Academic',
            address: 'Grand Rapids, MI',
            year: 2022,
            isbn: '9781493435128',
            image: 'https://files.logoscdn.com/v1/assets/13723266/optimized?w=500&m=limit&h=508',
            link: 'https://www.logos.com/product/210608/reading-the-prophets-as-christian-scripture-a-literary-canonical-and-theological-introduction',
            bibtex: '@book{Tully_2022,\n  address={Grand Rapids, MI},\n  series={Reading Christian Scripture},\n  title={Reading the Prophets as Christian Scripture: A Literary, Canonical, and Theological Introduction},\n  publisher={Baker Academic: A Division of Baker Publishing Group},\n  author={Tully, Eric J.},\n  year={2022},\n  collection={Reading Christian Scripture}\n}'
        }
        // ↑ 日後可在此處添加更多書目，例如 widder2023: { ... }, tanner2020: { ... }
    },

    /* ──────────────────────────────
       閱讀文章 (Articles)
       每篇文章可含多個腳註，各腳註指向 bibliography 中的一本書
       ────────────────────────────── */
    articles: [
        {
            id: 'art1',
            lessonRef: '但以理書第二章',
            title: '正典關聯：耶穌是那「石頭」',
            icon: '✝️',
            category: 'canonical',
            categoryLabel: '正典關聯 Canonical Connection',
            /* ── 文章正文（HTML）──
               腳註使用 <sup class="fn-mark" data-fn="1">1</sup>
               data-fn 的數字對應下面 footnotes 陣列的 index+1 */
            html:
                '<p>在路加福音第 20 章，耶穌講了一個關於<b>惡園戶</b>的比喻：惡園戶（猶太領袖）殺害了葡萄園主人的繼承人（耶穌），企圖奪取葡萄園。葡萄園的主人（神）回應說要除滅那些園戶，將葡萄園轉給別人。</p>' +
                '<p>耶穌用兩段舊約經文中的「石頭」意象來總結這個比喻，指向自己——神的彌賽亞。</p>' +
                '<p>首先，祂引用<strong>詩篇 118:22</strong>：</p>' +
                '<blockquote>「匠人所棄的石頭，已作了房角的頭塊石頭。」（路 20:17）</blockquote>' +
                '<p>然後，祂暗引<strong>但以理書 2:34 和 44–45</strong>，說：</p>' +
                '<blockquote>「凡掉在那石頭上的，必要跌碎；那石頭掉在誰的身上，就要把誰砸得稀爛。」（路 20:18）</blockquote>' +
                '<p>耶穌使用這些舊約中的石頭意象，<strong>描述拒絕祂作為彌賽亞的可怕後果</strong>。但以理書第 2 章中，那塊「非人手鑿出來的石頭」打碎巨像的異象，在耶穌的教導中得到了全新的應用——那塊石頭就是基督自己，祂的國度將取代一切人間帝國。<sup class="fn-mark" data-fn="1">1</sup></p>',

            /* ── 腳註 (Footnotes) ──
               每條腳註指定 bookKey（對應 bibliography）和 page */
            footnotes: [
                {
                    num: 1,
                    bookKey: 'tully2022',
                    page: '231',
                    text: 'Eric J. Tully, <em>Reading the Prophets as Christian Scripture: A Literary, Canonical, and Theological Introduction</em>, Reading Christian Scripture (Grand Rapids, MI: Baker Academic, 2022), 231.'
                }
            ]
        };
        {
            id: 'art2',
            lessonRef: '但以理書第七章',
            title: '正典關聯：人子耶穌',
            icon: '✝️',
            category: 'canonical',
            categoryLabel: '正典關聯 Canonical Connection',
            html:
                '<p>耶穌在福音書中經常自稱「<strong>人子</strong>」。在某些語境中，這個稱呼強調祂的為人（如先知以西結的用法），但在幾處關鍵經文裡，祂用這個稱呼<strong>直接指向但以理書中的那位神聖統治者</strong>——駕著天雲而來、領受權柄並建立神永恆國度的「人子」。</p>' +
                '<p>在馬太福音 24:30，耶穌宣告：</p>' +
                '<blockquote>「那時，人子的兆頭要顯在天上，地上的萬族都要哀哭，他們要看見人子，有能力，有大榮耀，駕著天上的雲降臨。」（馬太福音 24:30，和合本修訂版）</blockquote>' +
                '<p>耶穌藉此表明，祂就是但以理書第七章所預言、從神領受國度與榮耀的那位「人子」。拒絕或敵對祂，就等於拒絕神所設立的統治；而接受並跟隨祂，便是進入那永不敗壞的國度。<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p>可再參：<strong>馬太福音 26:64；馬可福音 13:24–27；14:61–62；啟示錄 1:7</strong>，這些經文同樣將「人子」與駕雲降臨、施行審判與得著榮耀連結起來。</p>',
            footnotes: [
                {
                    num: 1,
                    bookKey: 'tully2022',
                    page: '236',
                    text: 'Eric J. Tully, <em>Reading the Prophets as Christian Scripture: A Literary, Canonical, and Theological Introduction</em>, Reading Christian Scripture (Grand Rapids, MI: Baker Academic, 2022), 236.'
                }
            ]
        }   
        // ↑ 日後可在此處添加更多文章
        // { id: 'art2', lessonRef: '但以理書第七章', title: '...', ... }
    ]
});

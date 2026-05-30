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
        },
        tanner2020: {
            id: 'tanner2020',
            author: 'J. Paul Tanner',
            title: 'Daniel',
            series: 'Evangelical Exegetical Commentary',
            publisher: 'Lexham Press',
            address: 'Bellingham, WA',
            year: 2020,
            isbn: '9781683593096',
            image: 'https://files.logoscdn.com/v1/assets/10505745/optimized?w=500&m=limit&h=508',
            link: 'https://www.logos.com/product/183942/daniel-evangelical-exegetical-commentary',
            bibtex: '@book{Tanner_2020,\n  address={Bellingham, WA},\n  series={Evangelical Exegetical Commentary},\n  title={Daniel},\n  publisher={Lexham Press},\n  author={Tanner, J. Paul},\n  year={2020},\n  collection={Evangelical Exegetical Commentary}\n}'
        },
        widder2016: {
            id: 'widder2016',
            author: 'Wendy L. Widder',
            title: 'Daniel',
            series: 'The Story of God Bible Commentary',
            publisher: 'Zondervan',
            address: 'Grand Rapids, MI',
            year: 2016,
            isbn: '9780310491323',
            image: 'https://files.logoscdn.com/v1/assets/16688771/optimized?w=500&m=limit&h=508',
            link: 'https://www.logos.com/product/156782/daniel',
            bibtex: '@book{Widder_2016,\n  address={Grand Rapids, MI},\n  series={The Story of God Bible Commentary},\n  title={Daniel},\n  publisher={Zondervan},\n  author={Widder, Wendy L.},\n  editor={Longman, Tremper, III},\n  year={2016},\n  collection={The Story of God Bible Commentary}\n}'
        },
        busterWalton2025: {
            id: 'busterWalton2025',
            author: 'Aubrey E. Buster and John H. Walton',
            title: 'The Book of Daniel, Chapters 1–6',
            series: 'New International Commentary on the Old and New Testament',
            publisher: 'William B. Eerdmans Publishing Company',
            address: 'Grand Rapids, MI',
            year: 2025,
            isbn: '9780802875990',
            image: 'https://files.amberfile.com/v1/assets/16822628/optimized?w=500&m=limit&h=508',
            link: 'https://www.logos.com/product/389476/the-book-of-daniel-chapters-1-6',
            bibtex: '@book{Buster_Walton_2025,\n  address={Grand Rapids, MI},\n  series={New International Commentary on the Old and New Testament},\n  title={The Book of Daniel, Chapters 1–6},\n  publisher={William B. Eerdmans Publishing Company},\n  author={Buster, Aubrey E. and Walton, John H.},\n  editor={Young, E. J. and Harrison, R. K. and Hubbard, Robert L., Jr. and Arnold, Bill T.},\n  year={2025},\n  collection={New International Commentary on the Old and New Testament}\n}'
        },
        widder2023: {
            id: 'widder2023',
            author: 'Wendy Widder',
            title: 'Daniel: God’s Kingdom Will Endure',
            series: 'Zondervan Exegetical Commentary on the Old Testament',
            publisher: 'Zondervan Academic',
            address: 'Grand Rapids, MI',
            year: 2023,
            isbn: '',
            image: 'https://files.logoscdn.com/v1/assets/14563960/optimized?w=500&m=limit&h=508',
            link: 'https://www.logos.com/product/246891/daniel-a-discourse-analysis-of-the-hebrew-bible',
            bibtex: '@book{Widder_2023,\n  address={Grand Rapids, MI},\n  series={Zondervan Exegetical Commentary on the Old Testament},\n  title={Daniel: God’s Kingdom Will Endure},\n  publisher={Zondervan Academic},\n  author={Widder, Wendy},\n  editor={Block, Daniel I.},\n  year={2023},\n  collection={Zondervan Exegetical Commentary on the Old Testament}\n}'
        },
        widder2026: {
            id: 'widder2026',
            author: 'Wendy L. Widder',
            title: 'Old Testament Prophets: The Covenant Conscience of God’s People',
            series: 'Scripture Connections',
            publisher: 'B&H Academic',
            address: 'Brentwood, TN',
            year: 2026,
            isbn: '9781087747408',
            image: 'https://files.amberfile.com/v1/assets/16987465/optimized?w=500&m=limit&h=508',
            link: 'https://www.logos.com/product/396406/old-testament-prophets-the-covenant-conscience-of-gods-people',
            bibtex: '@book{Widder_2026,\n  address={Brentwood, TN},\n  series={Scripture Connections},\n  title={Old Testament Prophets: The Covenant Conscience of God’s People},\n  publisher={B&H Academic},\n  author={Widder, Wendy},\n  editor={Schnittjer, Gary Edward and Strauss, Mark L.},\n  year={2026},\n  collection={Scripture Connections}\n}'
        },
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
                '<blockquote>「匠人所丟棄的石頭，已作了房角的頭塊石頭。」（路 20:17）</blockquote>' +
                '<p>然後，祂暗引<strong>但以理書 2:34 和 44–45</strong>，說：</p>' +
                '<blockquote>「凡跌在那石頭上的，一定會跌得粉碎；那石頭掉在誰的身上，就要把誰壓得稀爛。」（路 20:18）</blockquote>' +
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
        },
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
                '<blockquote>「那時，人子的預兆要顯在天上，地上的萬族都要哀哭。他們要看見人子帶著能力和大榮耀，駕著天上的雲來臨。 」（馬太福音 24:30，和合本修訂版）</blockquote>' +
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
        },
        {
            id: 'art3',
            lessonRef: '但以理書全書',
            title: '結構與目的：外邦權勢、以色列受管教與彌賽亞國度',
            icon: '🎯',
            category: 'theology',
            categoryLabel: '神學主題 Theological Theme',
            html:
                '<p>要理解這一觀點對《但以理書》信息與目的的意涵，需先把握全書的兩大段落及其重疊之處。第 2–7 章以亞蘭文寫成，聚焦<strong>以色列在外邦權勢之下所受的管教</strong>；這些外邦國（巴比倫起首，至第四國度）在神主權之下暫時掌握世界政權，直到基督再臨、敵基督被敗、彌賽亞國度正式建立為止（參 2:44；4:3, 34–35；5:21；6:26；7:14, 27）。這段表明，外邦諸國的統治權是受託的、暫時的，無人能成功抵擋神的計畫。<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p>第 7–12 章轉回希伯來文，特別指向<strong>以色列的未來與逼迫</strong>。但以理四個異象皆凸顯末後那位敵擋以色列、逼迫聖民的「敵基督」（在第 8 章以安提阿古四世為預表）。以色列起初將錯信他（9:26–27），卻終將深受其害，苦難成為這段經文的底色。</p>' +
                '<p>第七章成為全書的「樞紐」：它一方面重述第 2–6 章的主題（外邦國度在神主權下的興衰），另一方面預示後文的「小角／敵基督」將如何登場。章中異象也最美地展現了神對全地的終極美意：</p>' +
                '<blockquote>「13 我在夜間的異象中觀看， 看哪，有一位像人子的， 駕著天上的雲而來， 被領到亙古常在者面前。 14 他得了權柄、榮耀、國度， 使各方、各國、各族的人都事奉他。 他的權柄是永遠的，不能廢去， 他的國度必不敗壞。 」（但以理書 7:13–14，和合本修訂版）</blockquote>' +
                '<p>縱然全書帶著被擄與管教的陰霾，但盼望在於末後賜給基督的國度；人若要得著這安慰，必須歸信那位君王，成為其國度的子民。正如尼布甲尼撒所承認的：</p>' +
                '<blockquote>「他的神蹟何其大！ 他的奇事何其盛！ 他的國度存到永遠； 他的權柄存到萬代！ 」（但以理書 4:3，和合本修訂版）</blockquote>' +
                '<p><strong>因此，《但以理書》的目的可表述為：</strong>「要顯明神主權地掌管那些管教以色列的列國，直到祂帶來彌賽亞的國度；以色列在經歷敵基督所加的患難與苦楚之後，終必在這國度中被恢復並蒙福。」<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p>本註釋書採取的立場是：先知但以理在主前 536/535 年後不久，<strong>親自寫成全書</strong>。<sup class="fn-mark" data-fn="2">2</sup></p>',
            footnotes: [
                {
                    num: 1,
                    bookKey: 'tanner2020',
                    page: '34–35',
                    text: 'J. Paul Tanner, <em>Daniel</em>, Evangelical Exegetical Commentary (Bellingham, WA: Lexham Press, 2020), 34–35.'
                },
                {
                    num: 2,
                    bookKey: 'tanner2020',
                    page: '39',
                    text: 'J. Paul Tanner, <em>Daniel</em>, Evangelical Exegetical Commentary (Bellingham, WA: Lexham Press, 2020), 39.'
                }
            ]
        },
        {
            id: 'art4',
            lessonRef: '但以理書第一章與第七章',
            title: '主權與永恆：亙古常在者與流亡中的盼望',
            icon: '👑',
            category: 'theology',
            categoryLabel: '神學主題 Theological Theme',
            html:
                '<p>第七章異象的核心，是那位白髮皓然、衣袍光輝的「亙古常在者」（Ancient of Days）。這稱謂在聖經中僅此出現，但舊約多處稱神為「榮耀的王」（詩篇 24:7–9）、「永在的父」（以賽亞書 9:6）、「永在的神」（以賽亞書 40:28）。祂永恆的本性與國度，正與諸獸及其短暫的政權形成鮮明對比。<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p>第一章則以歷史敘事顯出神「隱而不顯」的主權：從約雅敬被敗、聖殿器皿被擄、到但以理與同伴在巴比倫受訓蒙恩，「神把......交在他手中」的反覆語句，解構了軍事、政治與人類智慧的權勢神話。即使器皿被收進示拿（巴比倫）神廟庫，神仍在掌舵，預備在後續章節向狂妄的人顯明誰是真神。<sup class="fn-mark" data-fn="2">2</sup></p>' +
                '<p>本卷自開篇便傳遞一條穩固的信息：<strong>以色列的神掌管歷史，且最終發聲</strong>。祂的介入多半細微而含蓄，卻足以穩定信徒的心，使人在顛簸中仍能忠心而活。詩篇 46 的呼聲正與此同調：</p>' +
                '<blockquote>「 上帝是我們的避難所，是我們的力量， 是我們在患難中隨時的幫助。 <br/>所以，地雖改變， 山雖搖動到海心，<br/>其中的水雖澎湃翻騰，山雖因海漲而戰抖， <br/>我們也不害怕。（細拉）」（詩篇 46:1–3，和合本修訂版）</blockquote>' +
                '<blockquote>「你們要休息，要知道我是上帝！ <br/>我必在列國中受尊崇，在全地也受尊崇。<br/>萬軍之耶和華與我們同在，<br/>雅各的上帝是我們的避難所！」（詩篇 46:10–11，和合本修訂版）</blockquote>' +
                '<p>當世界崩塌、原因暫且不明之際，最重要的不是立刻給出「一切都會好」的陳詞，而是安靜提醒：<strong>神仍在場，仍掌權</strong>。祂的國度終將超越並取代所有人間國度，祂的子民得以在風暴中站立得穩。</p>',
            footnotes: [
                {
                    num: 1,
                    bookKey: 'widder2016',
                    page: '155',
                    text: 'Wendy L. Widder, <em>Daniel</em>, The Story of God Bible Commentary, ed. Tremper Longman III (Grand Rapids, MI: Zondervan, 2016), 155.'
                },
                {
                    num: 2,
                    bookKey: 'widder2016',
                    page: '32–33',
                    text: 'Wendy L. Widder, <em>Daniel</em>, The Story of God Bible Commentary, ed. Tremper Longman III (Grand Rapids, MI: Zondervan, 2016), 32–33.'
                }
            ]
        },
        {
            id: 'art5',
            lessonRef: '但以理書第一章',
            title: '拒絕御膳與身分抹除：流亡中的抗衡',
            icon: '🛡️',
            category: 'theology',
            categoryLabel: '神學主題 Theological Theme',
            html:
                '<p>Aubrey E. Buster 及 John H. Walton 認為，但以理拒絕王膳的核心並非飲食律法、偶像祭肉或「健康素食」，而是兩個獨特的社會政治面向：其一，<strong>拒絕帝國庇蔭</strong>——享用御膳是帝國綁定忠誠的手段；其二，<strong>「圍城口糧」的象徵性團餐</strong>——以「種子／雜糧」（<em>zērōʿîm</em>）自我節制，刻意與流亡同胞的苦難站在一起，拒吃巴比倫菁英的餐桌，成為政治性的抵抗行動。<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p><blockquote>「但以理卻立志，不以王的膳和王所飲的酒玷污自己，於是懇求太監長容他不使自己玷污。 」（但以理書 1:8，和合本修訂版）</blockquote></p>' +
                '<p>作者進一步以社會學概念「<strong>族譜隔離</strong>」解讀太監體制：巴比倫透過閹官系統切斷青年與家族、後代的聯繫，使忠誠只向王室傾斜；改名與省略家譜皆凸顯這種強制的文化抹除。敘事描寫的，是一位被去勢於身分、卻仍在體制內以智慧抗衡帝國全然占有的故事。<sup class="fn-mark" data-fn="2">2</sup></p>' +
                '<p>第一章因此呈現雙重抗衡：在餐桌上拒絕成為帝國附庸，在身分上拒絕被切斷族裔記憶。即便權力結構企圖重塑其生存與忠誠，但以理選擇以節制與信仰來重新界定自己的歸屬與盼望。</p>',
            footnotes: [
                {
                    num: 1,
                    bookKey: 'busterWalton2025',
                    page: '205–212',
                    text: 'Aubrey E. Buster and John H. Walton, <em>The Book of Daniel, Chapters 1–6</em>, ed. E. J. Young et al., New International Commentary on the Old and New Testament (Grand Rapids, MI: William B. Eerdmans Publishing Company, 2025), 205–212.'
                },
                {
                    num: 2,
                    bookKey: 'busterWalton2025',
                    page: '176–178',
                    text: 'Aubrey E. Buster and John H. Walton, <em>The Book of Daniel, Chapters 1–6</em>, ed. E. J. Young et al., New International Commentary on the Old and New Testament (Grand Rapids, MI: William B. Eerdmans Publishing Company, 2025), 176–178.'
                }
            ]
        },
        {
            id: 'art6',
            lessonRef: '但以理書第八章',
            title: '深入解讀：「早晚」異象中的歷史',
            icon: '🕊️',
            category: 'theology',
            categoryLabel: '神學主題 Theological Theme',
            html:
                '<p>加百列的解釋聚焦於異象中最重要的核心——讀者也應如此。本章已在註釋中先行處理。不像第七章被 Goldingay 比作「可開放多重詮釋的印象派畫作」，第八章的異象更像「在畫面上直接寫了名字的政治漫畫」，用來確保讀者明白。也正如政治漫畫，異象喚起許多畫面之外的意象與聯想。以下的解讀以歷史記錄對應加百列的說明而展開。<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p>雙角的公綿羊代表居魯士。其崛起始於米底帝國之下相對渺小的附庸——波斯。後來他反叛並擊敗米底王亞斯提亞吉（Astyages），把強盛的米底併入米底—波斯聯合帝國（主前 550 年）。此後，這隻公羊向西（巴比倫、敘利亞、小亞細亞）、向北（亞美尼亞、斯基泰、裏海區域）、向南（埃及、古實）擴張。米波也向東進入印度，但異象未提及東向的圖像——或許因為猶太流亡者未及印度，或因對猶太人而言波斯本是「東方」（參以賽亞書 41:2），故東向擴張對讀者並不重要。</p>' +
                '<p>單角的公山羊代表馬其頓王亞歷山大大帝（生於主前 356 年），其父腓力二世曾征服臨近的希臘城邦，使馬其頓由邊陲強化為霸權。腓力夢想擊敗波斯、稱霸天下，但在主前 336 年遇刺，其二十歲的兒子繼位。短短五年內，亞歷山大征服波斯，版圖從希臘直抵印度。主前 323 年他病逝，年僅三十二歲。無繼承人的帝國遂被四位將領瓜分——「那折斷的角，另有四角興起代替……只是權勢不及它」（但 8:22）。這些「繼業者」（Diadochi）各有建樹，但異象略過他們與其後約一百五十年的歷史，聚焦於塞琉古王朝第八任統治者：那「較小的角」，幾乎一致被認定為安提阿古四世以比法尼斯（在位主前 175–164 年）。他自稱「顯現神」，甚至在應印宙斯的錢幣上刻自己的像。</p>' +
                '<p>安提阿古機巧上位，取代侄子底米丟。即位後，他向南（埃及，參《馬加比一》1:16–20）、向東（帕提亞，參《馬加比一》3:27–37；6:1–4）、以及「榮美之地」進軍，後者在其晚期承受極大敵意。他迫害猶太人與其生活方式、攻擊耶路撒冷聖殿，動機至少有三：其一，他繼承了龐大國債，遂尋求聖殿庫銀、稅收與賄賂以減債；其二，猶大本就是火藥庫，一派盼採納希化，另一派堅持維持信仰與文化特色。安提阿古鼓吹希化，改革派容易被其花言巧語與恩惠吸引；而保守派拒絕任何威脅身分的「改革」。其三，主前 168 年他在埃及受辱，遂把怒火轉向能勝過的對象——猶太教與猶太人。此前他曾殺害猶太人、掠奪聖殿；但在埃及受挫後，主前 167 年他直接將猶太教定為犯罪，將聖殿改為異教神廟，大肆屠城與縱火。外邦祭司向宙斯獻上豬與不潔之物；節期、安息日、割禮被禁；妥拉卷軸被焚，持有者被殺（參《馬加比一》1:20–57）。許多猶太人寧死不拜宙斯（如《馬加比二》7 章）。</p>' +
                '<p>若「二千三百個『早晚』」（但 8:14 下）指具體時程，常見兩種理解：其一，二千三百日約等於六年，自大祭司俄尼亞三世於主前 170 年遇害起，至主前 164 年馬加比起義後聖殿重新奉獻止；其二，若計二千三百為日夜各算一次，則約一千一百五十天，迫害起點可定於主前 167 年安提阿古在埃及受挫之後。歷史層面看，「非因人手」的滅亡（8:25；參 NIV「不是因人力」）指安提阿古死於意外或疾病，而非戰死；神學層面則強調：他的日子在神手中，神一命定，壓迫者必被粉碎。</p>',
            footnotes: [
                {
                    num: 1,
                    bookKey: 'widder2023',
                    page: '434–437',
                    text: 'Wendy Widder, <em>Daniel: God’s Kingdom Will Endure</em>, ed. Daniel I. Block, Zondervan Exegetical Commentary on the Old Testament (Grand Rapids, MI: Zondervan Academic, 2023), 434–437.'
                }
            ]
        },
        {
            id: 'art7',
            lessonRef: '但以理書第二章與全書',
            title: '聖經貫串：但以理與整本敘事的連結',
            icon: '🔗',
            category: 'theology',
            categoryLabel: '神學主題 Theological Theme',
            html:
                '<p>但以理書與整本聖經故事的連結，體現在對類似人物的呼應、敘事空檔的補足，以及君王範式的塑造。<sup class="fn-mark" data-fn="1">1</sup></p>' +
                '<p><strong>其一，人物與情節的呼應：</strong>第二章的但以理，刻意呼應創世記 41 章約瑟在法老前的故事。兩位外邦君王都因神所賜的夢而煩惱；埃及與巴比倫的術士都無法解夢，卻有被擄的希伯來人能解。約瑟與但以理都將智慧歸於神，並因此受高位賞賜。更重要的是，兩個故事都展現以色列的神超越列國諸神的主權：在創世記，神掌管埃及的天候與農作（創 41:25–32）；在但以理書，神掌管列國興衰（但 2:20–23；2:36–45）。</p>' +
                '<p><strong>其二，填補舊約敘事的空白：</strong>列王紀與歷代志結尾，猶大君王與百姓被擄；以斯拉、尼希米記述主前 539 年居魯士詔令後歸回之事。但以理書就處在這兩大事件之間，如同以西結，讓讀者窺見被擄歲月。書中特別追蹤耶和華聖殿器皿的命運（但 1:1–2；5:1–4, 22–24；王下 24–25；代下 36:15–21；拉 1:7–10）。這些器皿「承載著百姓盼望神記念並恢復他們」（耶 27:16–22），而這期待隨居魯士的詔令應驗。</p>' +
                '<p><strong>其三，塑造王權的範式：</strong>耶和華是萬王之王，卻將大權託付給人間君王，期望他們公正照管子民，也要求他們承認權柄的來源。在但以理書 2–4 章，神如此教導尼布甲尼撒，他最終承認：「現在我尼布甲尼撒讚美、尊崇、榮耀天上的王，因為他一切作為都是真實，他的道路也公平，行事驕傲的人他能降卑。」（但以理書 4:37，和合本修訂版）尼布甲尼撒成為「外邦君王應當成為的範式」。相反地，伯沙撒飲用聖器、褻瀆以色列的神，成為敵對與褻慢神的外邦王典型。在但以理書中，伯沙撒最壞的後繼者是安提阿古四世以比法尼斯；在聖經宏大敘事裡，最終的對應者則是敵基督（如帖撒羅尼迦後書 2:3）。</p>',
            footnotes: [
                {
                    num: 1,
                    bookKey: 'widder2026',
                    page: '104–105',
                    text: 'Wendy Widder, <em>Old Testament Prophets: The Covenant Conscience of God’s People</em>, ed. Gary Edward Schnittjer and Mark L. Strauss, Scripture Connections (Brentwood, TN: B&H Academic, 2026), 104–105.'
                }
            ]
        },
        {
            id: 'art-map-daniel',
            lessonRef: '但以理書地圖',
            title: '但以理書時期地圖（小先知書中以色列地之外各地）',
            icon: '🗺️',
            category: 'map',
            categoryLabel: '地圖 Map',
            html:
                '<figure style="margin:0; padding:0; text-align:center;">' +
                    '<img src="https://biblegeography.holylight.org.tw/images/index/condensedbible/map/104.GIF" ' +
                         'alt="但圖一 (104) 小先知書中以色列地之外各地 — 但以理書 (605–530 BC)" ' +
                         'style="max-width:100%; height:auto; border:1px solid #e5e7eb; border-radius:4px;" />' +
                    '<figcaption style="font-size:0.95rem; color:#374151; margin-top:0.35rem;">' +
                        '但圖一 (104) 小先知書中以色列地之外各地｜但以理書 (主前 605–530 年)' +
                    '</figcaption>' +
                '</figure>' +
                '<p style="margin-top:0.75rem;">' +
                '但以理於主前 605 年被擄到巴比倫，因學問才能過人，受巴比倫王重用，' +
                '並在巴比倫滅亡後仍被波斯王信任，仕途超過七十五年。在外邦環境中，' +
                '他信仰面臨異教壓力，仍不惜性命堅守律法：專心祈禱、素食自守、拒拜偶像、' +
                '避免任何玷污，成為生活在外邦的信徒典範。雖書中未詳述，他對被擄猶大人' +
                '想必多所照顧；古列王釋放猶大人歸國，他也盡了一份力。' +
                '</p>',
            footnotes: []
        },
        // ↑ 日後可在此處添加更多文章
        // { id: 'art2', lessonRef: '但以理書第七章', title: '...', ... }
    ]
});

const topics = [
  // ── 基础概念 ──────────────────────────────────────────────
  {
    id: "vibe-definition",
    tag: "基础概念",
    title: "什么是 vibe coding？",
    keywords: ["vibe", "是什么", "概念", "定义", "编程", "ai辅助", "ai 辅助"],
    answer: "Vibe coding 是用自然语言和 AI 一起做软件。你负责意图、约束、验收和反馈；AI 负责生成和修改大量代码。重点不是“不思考”，而是把思考的重心从“怎么写”转向“要做什么、做到什么程度”。",
    analogy: "像和设计师一起装修：你不必亲手砌墙，但必须说清房间用途、预算、风格和验收标准。装修师傅再厉害，也没办法替你决定你想住什么样的家。",
    constraint: "不要只说“做个好看的东西”。至少给出：目标用户、核心功能、范围边界、不要做什么、怎么判断完成。",
    prompt: "如果朋友问你 vibe coding 是不是“不会代码也能乱做”，你怎么用一段话纠正他？",
    check: ["自然语言", "ai", "约束", "反馈", "验收", "意图"]
  },
  {
    id: "tool-roles",
    tag: "工具关系",
    title: "Codex、VS Code、PowerShell 是什么关系？",
    keywords: ["codex", "vscode", "vs code", "power", "powershell", "工具", "区别", "关系", "cursor", "claude"],
    answer: "三者分工不同：VS Code 是你看代码的工作台；PowerShell（或终端）是启动项目、看报错的命令遥控器；Codex / Claude Code / Cursor 是能听你描述并帮你改代码的 AI 搭档。它们互相配合，不是替代关系。",
    analogy: "像开餐厅：VS Code 是厨房台面，PowerShell 是开火和计时器，AI 工具是能听你描述并帮你做菜的搭档。三样缺一就会手忙脚乱。",
    constraint: "新手不要同时学太多按钮。先记住一个最小流程：说目标 → 让 AI 改 → 跑起来 → 看结果 → 反馈。工具细节在需要时再查。",
    prompt: "请用 3 句话讲清 AI 编程工具、代码编辑器、命令行终端的区别和配合方式。",
    check: ["ai", "编辑器", "终端", "运行", "配合"]
  },
  {
    id: "html-css-js",
    tag: "网页基础",
    title: "HTML、CSS、JavaScript 分别做什么？",
    keywords: ["html", "css", "javascript", "js", "网页", "前端", "结构", "样式", "行为"],
    answer: "HTML 管结构（内容在哪里），CSS 管样式（长什么样），JavaScript 管行为（点了之后发生什么）。一个按钮在页面上出现是 HTML，它是绿色圆角是 CSS，点击后弹出提示是 JavaScript。",
    analogy: "像一个人：HTML 是骨架，CSS 是衣服和妆容，JavaScript 是动作和反应。骨架没了就塌，衣服没了就丑，动作没了就是摆设。",
    constraint: "遇到问题时先判断它属于哪一层：内容缺失是 HTML 问题，显示错乱是 CSS 问题，功能不响应是 JS 问题。告诉 AI 时要说清是哪层。",
    prompt: "请用“一个登录按钮”为例，说明 HTML、CSS、JavaScript 各自负责这个按钮的哪个部分。",
    check: ["结构", "样式", "行为", "按钮", "点击"]
  },
  {
    id: "files",
    tag: "文件",
    title: "index.html、styles.css、app.js 是什么关系？",
    keywords: ["index", "styles", "app.js", "文件", "目录", "引用", "路径"],
    answer: "index.html 是网页入口，浏览器最先打开它；styles.css 是视觉样式，由 HTML 的 link 标签引入；app.js 是交互逻辑，由 HTML 的 script 标签引入。三个文件必须在同一文件夹，路径写对才能互相找到。",
    analogy: "像一本互动书：HTML 是目录和正文，CSS 是排版装帧，JS 是书里的机关和弹出页。书本身（HTML）会在开头注明“样式见第X页、机关见附录”，缺一就不完整。",
    constraint: "分享或部署网页时，这三个文件必须一起上传，并且引用路径不能包含本地绝对路径（如 C:/Users/...）。用相对路径：./styles.css、./app.js。",
    prompt: "如果朋友问为什么单独发 app.js 给他，网页打不开，你怎么解释？",
    check: ["html", "css", "js", "引用", "浏览器", "路径"]
  },

  // ── 核心方法论：Loop ──────────────────────────────────────
  {
    id: "vibe-loop",
    tag: "Loop 核心",
    title: "什么是 vibe coding 的 Loop（循环）？",
    keywords: ["loop", "循环", "迭代", "流程", "核心", "一轮", "反复"],
    answer: "Loop 是 vibe coding 的核心节奏：意图 → 生成 → 运行 → 观察 → 反馈 → 再生成。每一轮只改一件事，每一轮都要跑起来看结果。不跑就反馈，等于蒙眼开车。",
    analogy: "像雕塑：每一刀只削一点，然后退后看整体。不是一次刻完，而是无数轮“刻一下、看一下、再刻”。循环越快，成品越接近你想要的。",
    constraint: "每轮 loop 只做一件可验证的事。改完必须运行，看到结果后才能进入下一轮。不要积累 5 个需求再一起改，那会让你不知道哪里出了问题。",
    prompt: "请描述一次完整的 vibe coding loop，从“我想加一个按钮”到“这个按钮工作了”，中间经历了哪些步骤？",
    check: ["生成", "运行", "观察", "反馈", "一轮", "迭代"]
  },
  {
    id: "loop-speed",
    tag: "Loop 核心",
    title: "为什么 loop 越快越好？",
    keywords: ["快", "速度", "loop", "迭代", "慢", "卡住", "效率"],
    answer: "loop 越快，你越早发现方向错了，代价越小。一次写 200 行再发现逻辑不对，比写 10 行就发现要损失多 10 倍时间。快 loop 的关键是：小步、立刻跑、立刻给反馈。",
    analogy: "像学投篮：每投一次就看有没有进，马上调整姿势，比投 50 次再听一次点评要进步快得多。反馈延迟越短，学习越快。",
    constraint: "如果一次改动超过 30 分钟还没能运行验证，就说明任务拆得太大了。把它切成更小的一步，先让第一步跑起来。",
    prompt: "为什么“先把所有功能都写完再测试”在 vibe coding 里是危险的？请用一个具体例子解释。",
    check: ["小步", "运行", "反馈", "发现", "方向", "代价"]
  },
  {
    id: "loop-broken",
    tag: "Loop 核心",
    title: "loop 卡住了怎么办？",
    keywords: ["卡住", "loop", "死循环", "不动", "没进展", "反复", "改不好"],
    answer: "loop 卡住通常有三种原因：任务太模糊（AI 不知道要什么）、任务太大（一步跨太多）、反馈太笼统（“不好看”这种反馈没用）。解法：拆小、说具体、换角度描述目标。",
    analogy: "像拧瓶盖拧不开：不是使更大的力，而是先检查——方向对不对？瓶盖有没有卡槽？换个角度拿？力气不是关键，方法是关键。",
    constraint: "卡了 3 轮还没进展，停下来，把问题重新用一句话描述：我现在有什么，我想得到什么，它们之间差了什么。重写这句话比继续硬改更有用。",
    prompt: "你让 AI 改了 3 次，页面还是不对。现在你会怎么做？请说出你的思路，不要只说“重新问一次”。",
    check: ["拆小", "具体", "目标", "差距", "重新描述", "角度"]
  },
  {
    id: "loop-context",
    tag: "Loop 核心",
    title: "对话越来越长，AI 开始“忘事”怎么办？",
    keywords: ["上下文", "context", "忘记", "长对话", "记忆", "窗口", "session"],
    answer: "AI 的记忆是有限的（叫做上下文窗口）。对话太长后，AI 会忘掉早期的约束和决定，开始乱改。解法：开新对话时把核心约束重新说一遍；或者把关键决定写进文件，每次贴给 AI 看。",
    analogy: "像换了一个新同事来接手项目：你不能假设他知道上周的讨论。你需要给他一份“项目说明书”，把核心规则、不能改的地方、已决定的事写清楚。",
    constraint: "长项目一定要维护一个“约束文件”（哪怕就是一段备注）：核心功能是什么、不能改哪些、当前进度。每次开新 session 先把这段发给 AI。",
    prompt: "你的项目做了 2 周，现在要继续。你会在新对话开头说什么，让 AI 快速理解现有状态？请写出那段话的框架。",
    check: ["约束", "文件", "新对话", "说明", "上下文", "记忆"]
  },
  {
    id: "loop-checkpoint",
    tag: "Loop 核心",
    title: "什么时候该保存一个版本（checkpoint）？",
    keywords: ["保存", "checkpoint", "版本", "git", "存档", "回退", "commit"],
    answer: "每次你觉得“现在的状态是好的”就立刻保存。不需要等功能全做完——哪怕只是“这一个按钮终于好了”，也值得存一版。因为下一步改错了，你还能退回来。",
    analogy: "像玩游戏：每过一关存一次档，不是打完最终 boss 才存。如果你从不存档，被打死了就全重来——在 vibe coding 里，“被打死”就是 AI 把整个页面改乱了。",
    constraint: "重要改动前先存一版。可以用 Git commit，也可以把文件复制一份改个名字（如 index_v2.html）。至少做其中一种，不要裸奔开发。",
    prompt: "你做了一个闪卡网页，现在基础功能刚好了。下一步你想加搜索功能。你会在加之前做什么？为什么？",
    check: ["保存", "存档", "好的状态", "改动前", "回退", "git"]
  },

  // ── 提示词与约束 ─────────────────────────────────────────
  {
    id: "constraint",
    tag: "核心能力",
    title: "约束到底是什么，为什么重要？",
    keywords: ["约束", "限制", "边界", "验收", "范围", "不要"],
    answer: "约束是任务的边界。它告诉 AI 什么要做、什么不要做、做到什么程度算完成。没有约束，AI 会用它自己的默认值填空——那些默认值不一定是你要的。约束越清楚，结果越可预测。",
    analogy: "像点外卖备注：不要香菜、少辣、米饭分开装。没有备注也能送来，但不一定是你要的。备注越具体，越接近你的期望——AI 也一样。",
    constraint: "每次至少想 3 类约束：范围约束（只做这个，不做那个）、体验约束（给谁用、在什么场景）、验收约束（怎么判断完成了）。",
    prompt: "请给“做一个 vibe coding 学习闪卡网页”写出 3 个具体约束，覆盖范围、用户和验收标准。",
    check: ["范围", "验收", "不要", "用户", "边界"]
  },
  {
    id: "prompting",
    tag: "提示词",
    title: "一个好提示词应该包含什么？",
    keywords: ["提示词", "prompt", "怎么问", "提问", "需求", "写法"],
    answer: "好提示词通常包含：目标（要做什么）、背景（现在是什么状态）、输出形式（给我代码/给我解释/给我方案）、约束（不要改什么、用什么技术）、验收标准（怎么算完成）。新手最常漏的是约束和验收。",
    analogy: "像给人派活：只说“帮我弄一下”很难成功；说清“给谁用、做成什么样、别碰哪里、怎么算好”才可执行。你的描述越清晰，对方（或 AI）越不需要猜。",
    constraint: "第一次提示词只包含一个小功能。一次只让 AI 解决一个可检查的问题。如果提示词超过 5 件事，先拆开。",
    prompt: "把“帮我做个好看的网页”改写成一个包含目标、约束和验收标准的完整提示词。",
    check: ["目标", "背景", "输出", "约束", "验收"]
  },
  {
    id: "feedback",
    tag: "反馈",
    title: "怎么给 AI 反馈才有效？",
    keywords: ["反馈", "修改", "不好", "不满意", "优化", "怎么说"],
    answer: "有效反馈包含三部分：观察到的问题（是什么）+ 希望的变化（变成什么）+ 保留的部分（别动什么）。比如“移动端按钮太挤，请把按钮改成上下排列，但保留当前颜色和文字”。",
    analogy: "像给理发师反馈：不要只说“不对”，要说“刘海短一点、两边别动、整体保持自然”。说得越具体，他越知道从哪里下剪刀。",
    constraint: "一次反馈只改一个主要变量。同时说“颜色不对、字体太小、布局要变”，AI 改的时候你不知道哪个改了、哪个没改。",
    prompt: "把“页面不好看，重新做”改成一条有效反馈，包含问题、希望的变化和保留部分。",
    check: ["问题", "变化", "保留", "具体", "一个"]
  },

  // ── 调试与排错 ───────────────────────────────────────────
  {
    id: "debug",
    tag: "调试",
    title: "遇到报错怎么办？",
    keywords: ["报错", "bug", "错误", "debug", "打不开", "失败", "控制台"],
    answer: "先复制完整报错，再说明：你做了什么操作、期待发生什么、实际发生了什么。把这三件事一起发给 AI，比只发报错信息要有效 10 倍。报错是线索，不是失败——它在告诉你哪里出了问题。",
    analogy: "像看病：医生需要症状、发生时间、你最近吃了什么，而不只是“我难受”。给的信息越具体，诊断越快越准。",
    constraint: "调试提示词必须包含四件事：我做了什么操作、完整报错内容、相关文件或代码、我希望保持不变的功能。缺一件都会让 AI 瞎猜。",
    prompt: "请写一段你遇到“网页打开后空白”时，会发给 AI 的完整调试说明。包含操作、报错、文件、期望。",
    check: ["操作", "报错", "期待", "实际", "文件"]
  },
  {
    id: "browser",
    tag: "调试",
    title: "为什么改了代码，浏览器没有变化？",
    keywords: ["浏览器", "缓存", "刷新", "显示", "不一致", "没变", "没更新"],
    answer: "最常见的 5 个原因：文件没保存、浏览器缓存了旧版本、改了错误文件、服务没重启、引用路径写错。按顺序排查：强制刷新（Ctrl+Shift+R）→ 检查文件有没有保存 → 打开浏览器控制台看报错。",
    analogy: "像你改了菜单，但顾客手里还是旧菜单——要么是印刷厂还没换，要么是服务员发错了版本。找问题要从源头查，不要只盯着菜单本身。",
    constraint: "反馈给 AI 时要写清：我改了哪个文件、用什么方式运行的、浏览器看到什么、控制台有没有报错。不要说“没用，还是不对”。",
    prompt: "你改了 styles.css，保存了，刷新后页面没变化。请按顺序说出你会检查的 4 件事。",
    check: ["保存", "刷新", "缓存", "路径", "控制台"]
  },

  // ── 项目管理 ─────────────────────────────────────────────
  {
    id: "scope",
    tag: "范围",
    title: "为什么要把任务拆小？",
    keywords: ["拆", "任务", "范围", "太大", "一步", "小步"],
    answer: "任务越大，AI 越容易猜错方向，你也越难验收。拆小后，每一步都有清楚结果，反馈更准，出错更容易找到原因。10 个小步骤比 1 个大步骤更容易成功。",
    analogy: "像学做饭：先煎一个蛋，再做一桌菜。直接做满汉全席，哪里出了问题都搞不清楚。每个小成功都是信心和校准机会。",
    constraint: "每个请求最好只改变一个功能或一个页面区域。如果一个请求里有“还有、另外、同时”这些词，先停下来拆开。",
    prompt: "请把“做一个完整学习平台”拆成 5 个按顺序完成的小任务，每个都能独立验收。",
    check: ["小", "阶段", "页面", "功能", "验收"]
  },
  {
    id: "mvp",
    tag: "产品",
    title: "MVP 是什么？怎么定义我的第一版？",
    keywords: ["mvp", "最小", "产品", "版本", "第一版", "够用"],
    answer: "MVP（最小可用版本）不是粗糙版本，而是只保留验证核心需求所需的最少功能。它的目的是尽快知道“这个方向对不对”，而不是做出完整产品。功能越少越好，只要能验证核心假设。",
    analogy: "想验证奶茶口味受不受欢迎，先摆摊卖 3 款手摇，不必先开 50 家连锁店。MVP 是最快的验证工具，不是最终产品。",
    constraint: "定义 MVP 时要写清：只做哪些功能、暂时不做哪些功能、用什么指标判断有没有用。如果你列的功能超过 3 个，再砍一半。",
    prompt: "给“一个帮新手学 vibe coding 的工具”定义一个 MVP。列出你会做的功能和不会做的功能，各 3 条。",
    check: ["最少", "可用", "核心", "不做", "验证"]
  },
  {
    id: "git",
    tag: "版本",
    title: "Git 和 GitHub 是什么，新手要马上学吗？",
    keywords: ["git", "github", "版本", "提交", "仓库", "commit", "push"],
    answer: "Git 是版本管理工具，记录每次改动，让你能回退。GitHub 是存 Git 项目的云平台，也可以用来部署网页。新手不必精通，但要会 3 件事：commit（保存版本）、push（推到云端）、clone（下载已有项目）。",
    analogy: "Git 像游戏存档：每过一关存一次，走错了能回到之前。GitHub 是存档云同步：你的存档别人也能看，甚至一起玩。",
    constraint: "重要改动前先 commit。多人协作或部署到 GitHub Pages 时必须用 Git。AI 可以帮你写 Git 命令，但要理解你在做什么，不要盲目执行。",
    prompt: "请用游戏存档解释 Git commit 和 Git push 的区别，以及什么时候该做这两个操作。",
    check: ["版本", "保存", "回退", "commit", "push", "github"]
  },

  // ── AI 协作边界 ───────────────────────────────────────────
  {
    id: "ai-limits",
    tag: "AI 边界",
    title: "AI 会犯什么错？怎么防？",
    keywords: ["ai", "错误", "幻觉", "限制", "不可靠", "犯错", "防"],
    answer: "AI 常犯三类错：理解错目标（把“简单”理解成不同的简单）、漏掉边界情况（只考虑正常流程，忘了错误情况）、写出看似合理但不可运行的代码（语法对、逻辑错）。所以每次都要运行验证，不能只读代码就信。",
    analogy: "像很聪明但从没去过你家的朋友帮你搬家：能力强，但需要地址、楼层、哪些东西易碎、哪些不能搬走。能力不能替代信息。",
    constraint: "不要把 AI 输出当最终真相。必须运行、检查、反馈。如果 AI 说“这样应该可以”，你的下一步是：跑起来看看是不是真的可以。",
    prompt: "请说出 AI 写代码时 3 个常见风险，以及你会用什么方式发现并修正每一个。",
    check: ["理解", "边界", "运行", "验收", "反馈"]
  },
  {
    id: "when-ask-human",
    tag: "AI 边界",
    title: "什么时候该问真人，而不是继续问 AI？",
    keywords: ["问人", "卡住", "需求", "用户", "选择", "真人", "不能问ai"],
    answer: "当问题涉及真实用户偏好、业务取舍、隐私风险、付费决定、目标用户的真实反馈时，要去问人。AI 可以给你选项和分析，但不能替你做价值判断——它不知道你真正在乎什么。",
    analogy: "导航能给路线，但去哪座城市要你决定。AI 是地图，不是司机。",
    constraint: "涉及价值选择时，让 AI 列方案、风险和成本，再由人拍板。不要让 AI 帮你决定“哪个版本更好”，那个问题要去问你的目标用户。",
    prompt: "请举 3 个 vibe coding 项目中，AI 无法替你做决定、必须去问真人的场景。",
    check: ["偏好", "用户", "价值", "决定", "判断"]
  },
  {
    id: "security",
    tag: "安全",
    title: "新手必须注意的安全底线是什么？",
    keywords: ["安全", "密码", "隐私", "api key", "密钥", "泄露", "公开"],
    answer: "最重要的一条：不要把密码、API key、私人数据写进前端代码或公开仓库。任何人能打开你的网页，就可能看到你的前端代码。把密钥写进网页，就等于把家门钥匙贴在门口。",
    analogy: "把密钥写进网页，就像把家门钥匙贴在门口的告示牌上，还写上“这是钥匙”。",
    constraint: "涉及密钥、登录、付款、隐私数据时，先问清楚安全边界，再动手。新手最常见的错误就是把 API key 直接写进 JavaScript 文件然后推到 GitHub。",
    prompt: "为什么不能把 API key 放在网页的 JavaScript 文件里？如果必须要用，正确做法的方向是什么？",
    check: ["密钥", "前端", "看到", "公开", "后端"]
  },

  // ── 数据与状态 ───────────────────────────────────────────
  {
    id: "state",
    tag: "交互",
    title: "网页里的“状态”是什么？",
    keywords: ["状态", "state", "数据", "保存", "交互", "记住"],
    answer: "状态就是页面当前记住的信息，比如第几关、选了哪些卡、输入了什么文字。交互网页的核心循环是：用户动作改变状态，状态改变界面显示。明白这个，就能更清楚地告诉 AI 你要改的是“什么时候状态变化”还是“状态变化后界面怎么变”。",
    analogy: "像棋盘：棋子的位置就是状态。你走一步，棋盘画面跟着变。棋盘不动不是因为画面问题，而是状态没变。",
    constraint: "做交互功能时，要告诉 AI 三件事：状态有哪些（存什么）、什么时候变化（触发条件）、刷新后要不要保留（是否用 localStorage）。",
    prompt: "请用闪卡网页举例：用户点“下一张”时，状态是什么，它如何变化，界面又如何跟着变？",
    check: ["状态", "变化", "触发", "界面", "记住"]
  },
  {
    id: "data",
    tag: "数据",
    title: "数据从哪里来？新手该用哪种存储？",
    keywords: ["数据", "数据库", "保存", "localstorage", "后端", "存储"],
    answer: "小网页的数据可以直接写在 JS 文件里（硬编码）；需要本机保存可用 localStorage（浏览器自带，免费，刷新不丢）；多人共享或账号同步才需要后端和数据库。新手先从最简单的开始，不要一上来就搭数据库。",
    analogy: "像记事：便签写在桌上（JS 硬编码），笔记本能长期保存（localStorage），云文档能多人同步（后端数据库）。工具越复杂，维护成本越高。",
    constraint: "选存储方式之前先问自己三个问题：数据要不要跨设备？要不要多人看到？刷新后要不要保留？三个都“不”就用 JS 硬编码，后两个有“要”才考虑 localStorage，第一个有“要”才考虑后端。",
    prompt: "你在做一个本地使用的学习工具，需要记住用户学到了哪些卡片。你会选哪种存储方式？说明理由和权衡。",
    check: ["硬编码", "localstorage", "后端", "多人", "保存"]
  },

  // ── 学习方法 ─────────────────────────────────────────────
  {
    id: "testing",
    tag: "验收",
    title: "不懂代码怎么验收结果？",
    keywords: ["验收", "测试", "检查", "不会代码", "标准", "怎么判断"],
    answer: "不懂代码也能验收用户体验：按钮能不能点、手机上能不能正常显示、输入错误的内容会怎样、刷新后数据是否丢失、让一个没用过的朋友来用5分钟看看他卡在哪里。",
    analogy: "你不懂发动机，也能试驾：能启动、能刹车、方向盘正常、坐着舒服。这就是用户体验验收，和代码懂不懂无关。",
    constraint: "每个需求后面加一句验收标准：我能点击什么 / 看到什么 / 不能出现什么。没有验收标准的需求，AI 无法知道“做到什么程度算完成”。",
    prompt: "请为“闪卡网页”写 4 条不需要懂代码、用普通人视角就能检查的验收标准。",
    check: ["点击", "输入", "手机", "刷新", "朋友"]
  },
  {
    id: "learning",
    tag: "学习法",
    title: "费曼学习法怎么用在 vibe coding？",
    keywords: ["费曼", "学习", "闪卡", "复习", "理解", "讲给别人"],
    answer: "费曼法就是用简单语言把概念讲给完全不懂的人听。用在 vibe coding 里：每学一个概念，都要能解释它是什么、举一个生活例子、说出一个错误用法、写出一个实际约束。能讲出来才算真的懂，不是只会复制提示词。",
    analogy: "你能讲给完全不懂的朋友听，才说明你真的内化了——不是靠记忆，是靠理解。费曼法就是用“讲出来”倒逼自己真的弄懂。",
    constraint: "每张卡都用四步：AI 讲一遍 → 你用自己的话复述 → AI 评估哪里模糊 → 你修正复述。不做第三步，学习效果减半。",
    prompt: "请用费曼法向一个完全不懂编程的朋友解释“约束”这个概念。要有例子、有错误用法、有一条实际的约束。",
    check: ["简单", "例子", "错误用法", "约束", "复述"]
  },
  {
    id: "design",
    tag: "设计",
    title: "怎么说“好看”才让 AI 理解？",
    keywords: ["好看", "设计", "ui", "风格", "视觉", "美观", "界面"],
    answer: "“好看”太抽象，AI 无法执行。要换成可执行描述：给谁用（用户画像）、在什么场景（手机还是桌面）、密度（内容多还是留白多）、颜色倾向（冷色/暖色/单色）、参考风格（像哪个 App）、不要什么（不要渐变、不要圆角太大）。",
    analogy: "买衣服时说“好看”不够用，说“通勤、黑白灰、不要紧身、预算 500”才能挑。越具体越容易找到你要的。",
    constraint: "设计反馈至少包含：用途（给谁用）、情绪（轻松/严肃/专业）、布局密度（信息量）、必须保留的元素。",
    prompt: "把“把这个页面做得高级一点”改写成一个 AI 能执行的 UI 约束描述。",
    check: ["用户", "场景", "颜色", "布局", "不要"]
  },
  {
    id: "close",
    tag: "深入",
    title: "什么是“深入 10 轮 close”？",
    keywords: ["10轮", "close", "深入", "追问", "闭环", "轮次"],
    answer: "Close 指围绕同一问题连续闭环：回答 → AI 评估 → 追问下一个角度 → 再回答。10 轮不是聊 10 次天，而是逐步补齐定义、例子、边界、反例、迁移应用。每轮只深入一个角度，理解会越来越扎实。",
    analogy: "像把一颗螺丝拧紧：每一圈都更贴合，不是换一颗新螺丝。浅尝 10 个概念，不如把一个概念真的搞透。",
    constraint: "每一轮只深入一个角度，不要跳题。顺序建议：定义 → 例子 → 类比 → 约束 → 反例 → 边界 → 迁移 → 压缩 → 教别人 → 闭环总结。",
    prompt: "请解释为什么“围绕同一概念深入追问 10 轮”比“一次性看完一篇长文”对新手更有效。",
    check: ["闭环", "追问", "反馈", "角度", "理解"]
  },
  {
    id: "workflow",
    tag: "流程",
    title: "一次完整 vibe coding 流程是什么样的？",
    keywords: ["流程", "步骤", "怎么开始", "完整", "全流程"],
    answer: "完整流程：① 定目标（要做什么、给谁用）→ ② 写约束（不做什么、怎么算完成）→ ③ 生成第一版 → ④ 跑起来看 → ⑤ 指出偏差（有效反馈）→ ⑥ 一次只改一点 → ⑦ 验收 → ⑧ 保存版本 → 回到 ④ 开始下一轮。",
    analogy: "像做陶器：先定形状，再拉坯，观察哪里歪了，一点点修，满意后烧制，下一件再来。每一轮都是完整的小循环。",
    constraint: "不要在没有运行第一版之前连续加 10 个需求。第一步是“跑起来”，哪怕很丑、很简单，跑起来才有反馈。",
    prompt: "请按顺序说出一次完整 vibe coding 从想法到最终验收的 8 个步骤，并解释其中最容易跳过但最重要的一步是哪个。",
    check: ["目标", "约束", "生成", "运行", "反馈", "验收"]
  },
  {
    id: "confidence",
    tag: "心态",
    title: "没有编程背景会学不会 vibe coding 吗？",
    keywords: ["不会编程", "零基础", "焦虑", "学不会", "背景", "入门"],
    answer: "不会编程也能开始，但要换目标：不是马上成为传统程序员，而是先学会描述问题、设置约束、运行检查、反馈修正。这些能力本质上是“清晰思考和沟通”，不依赖代码背景。",
    analogy: "不会修车也能学开车——但你要学会看仪表盘、遵守规则、知道什么时候该去修理厂。Vibe coding 也一样：你不必懂所有原理，但要学会“驾驶”AI 这辆车。",
    constraint: "前 2 周不要追求技术名词全懂，先完成 3 个小作品的完整 loop（想法到能分享链接）。完整跑通一次比看懂 100 个概念更值钱。",
    prompt: "请给一个零编程背景的朋友写一个 2 周入门 vibe coding 的计划，重点是能力而不是知识点。",
    check: ["小作品", "约束", "运行", "反馈", "loop"]
  },
  {
    id: "run-share",
    tag: "运行分享",
    title: "本地、局域网、公网有什么区别？怎么分享？",
    keywords: ["分享", "网址", "公网", "局域网", "wifi", "运行", "部署", "github pages", "netlify"],
    answer: "本地打开（file:// 或 localhost）只有你自己能看；局域网地址（192.168.x.x）只有同一 Wi-Fi 下的人能看；公网链接（GitHub Pages / Netlify）任何地方的人都能访问。想让异地朋友体验，必须部署到公网。",
    analogy: "本地是自己的房间，局域网是家里人能进，公网是给任何地方的朋友一个永久门牌号。",
    constraint: "给别人长期体验，用 GitHub Pages 或 Netlify 部署，不要依赖临时隧道（电脑关了链接就失效）。部署静态网页是免费的，三个文件上传就能搞定。",
    prompt: "请解释为什么你在同一个 Wi-Fi 下跑起来的网址，发给异地朋友后他打不开。",
    check: ["本地", "局域网", "公网", "部署", "github pages"]
  },
  {
    id: "svg",
    tag: "素材",
    title: "SVG 文件是什么？能直接用吗？",
    keywords: ["svg", "图片", "矢量", "图标", "格式"],
    answer: "SVG 是矢量图格式，用文字描述形状（而不是像素）。浏览器可以直接打开 SVG，也可以把 SVG 代码嵌进 HTML 里。优点：无论放多大都不模糊。适合做图标、logo、简单插图。AI 可以帮你生成 SVG 代码。",
    analogy: "SVG 像一张用文字写成的图纸：'画一个半径50的圆，填红色'。浏览器读了这张图纸，就能画出来。改大小就像改图纸上的数字，不会失真。",
    constraint: "如果 SVG 里有 script 标签，要小心安全问题。如果只是简单图形，直接嵌进 HTML 没问题。路径要注意相对路径是否正确。",
    prompt: "请解释 SVG 和普通 PNG/JPG 图片有什么不同，分别适合什么场景。",
    check: ["矢量", "浏览器", "html", "文字描述", "无失真"]
  }
];

const closePrompts = [
  "用一句话解释这个概念，不许用术语。",
  "给一个生活类比，让完全不懂编程的人也能听懂。",
  "说出一个新手常见的错误做法，以及它会怎样让 AI 跑偏。",
  "给出 3 条具体约束，让这个概念能落到你自己的项目里。",
  "如果按照这个方法做了，结果还是不符合预期，你会怎么给 AI 反馈？",
  "这个概念和你之前学过的哪个概念有关联？说出它们的区别。",
  "举一个你自己想做的项目场景，把这个概念套进去。",
  "说出一个边界情况：什么时候这个建议不适用或需要调整？",
  "把你的解释压缩成一句 20 字以内的提示词模板。",
  "最后用 5 步复述整个概念：是什么 → 为什么重要 → 怎么用 → 怎么检查 → 什么时候不适用。"
];

const els = {
  question: document.querySelector("#userQuestion"),
  answer: document.querySelector("#coachAnswer"),
  prompt: document.querySelector("#coachPrompt"),
  learner: document.querySelector("#learnerAnswer"),
  evaluation: document.querySelector("#evaluation"),
  ask: document.querySelector("#askBtn"),
  clear: document.querySelector("#clearBtn"),
  random: document.querySelector("#randomBtn"),
  grade: document.querySelector("#gradeBtn"),
  next: document.querySelector("#nextCloseBtn"),
  round: document.querySelector("#roundBadge"),
  topicGrid: document.querySelector("#topicGrid"),
  faqList: document.querySelector("#faqList"),
  mastery: document.querySelector("#masteryScore"),
  clarity: document.querySelector("#clarityScore"),
  constraint: document.querySelector("#constraintScore"),
  depth: document.querySelector("#depthScore"),
  canvas: document.querySelector("#scoreCanvas")
};

const ctx = els.canvas.getContext("2d");
let currentTopic = topics[0];
let closeRound = 0;
let scores = { clarity: 0, constraint: 0, depth: 0, mastery: 0 };

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, " ");
}

function matchTopic(text) {
  const normalized = normalize(text);
  let best = topics[0];
  let bestScore = -1;

  topics.forEach((topic) => {
    const score = topic.keywords.reduce((sum, word) => (
      normalized.includes(word.toLowerCase()) ? sum + 2 : sum
    ), 0) + (normalized.includes(topic.title.slice(0, 4).toLowerCase()) ? 1 : 0);

    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  });

  return bestScore <= 0 ? topics[Math.floor(Math.random() * 4)] : best;
}

function renderAnswer(topic) {
  els.answer.innerHTML = `
    <h3>${topic.title}</h3>
    <p>${topic.answer}</p>
    <ul>
      <li><strong>费曼类比：</strong>${topic.analogy}</li>
      <li><strong>关键约束：</strong>${topic.constraint}</li>
      <li><strong>下一步：</strong>现在请你用自己的话讲一遍，我会按清晰度、例子、约束意识来评估。</li>
    </ul>
    <div class="pill-row">
      <span class="pill">${topic.tag}</span>
      <span class="pill">主动回忆</span>
      <span class="pill">即时反馈</span>
    </div>
  `;
}

function setTopic(topic, question = "") {
  currentTopic = topic;
  closeRound = 1;
  if (question) els.question.value = question;
  renderAnswer(topic);
  els.prompt.textContent = topic.prompt;
  els.learner.value = "";
  els.evaluation.textContent = "轮到你了。不要复制我的原话，试着讲给一个完全不懂编程的朋友听。";
  highlightTopic(topic.id);
  updateRound();
  updateScores({ clarity: 12, constraint: 12, depth: 8 });
}

function gradeAnswer() {
  const text = els.learner.value.trim();
  if (!text) {
    els.evaluation.textContent = "先写一点你的理解。哪怕很短也可以，费曼法就是从不完整的解释开始修。";
    return;
  }

  const normalized = normalize(text);
  const lengthScore = Math.min(30, Math.floor(text.length / 6));
  const exampleScore = /(比如|例如|像|举例|场景|朋友|假设|想象)/.test(text) ? 20 : 0;
  const constraintScore = /(约束|边界|范围|验收|不要|标准|限制|注意|条件)/.test(text) ? 25 : 0;
  const keywordHits = currentTopic.check.filter((word) => normalized.includes(word.toLowerCase())).length;
  const keywordScore = Math.min(25, keywordHits * 7);
  const total = Math.min(100, lengthScore + exampleScore + constraintScore + keywordScore);

  const missing = [];
  if (!exampleScore) missing.push("加一个生活例子或类比");
  if (!constraintScore) missing.push("补一句约束或注意事项");
  if (keywordHits < 2) missing.push(`点出关键词（提示：${currentTopic.check.slice(0, 3).join("、")}）`);
  if (text.length < 80) missing.push("再讲具体一点，至少 80 个字");

  const next = closePrompts[Math.min(closeRound, closePrompts.length - 1)];
  els.evaluation.innerHTML = `
    <strong>本轮评分：${total} / 100</strong>
    <p>${total >= 80
      ? "很扎实。你的解释已经接近能教别人了。继续深入，把它迁移到真实项目里。"
      : total >= 50
        ? "方向对了，但还可以更像“教朋友”——少一点口号，多一点例子和边界。"
        : "解释还比较笼统。试着从“举一个例子”开始，把抽象概念变成具体场景。"
    }</p>
    <p><strong>建议改进：</strong>${missing.length ? missing.join("；") : "进入下一轮，把它迁移到你自己的项目里。"}</p>
    <p><strong>下一轮 close：</strong>${next}</p>
  `;

  updateScores({
    clarity: Math.max(scores.clarity, Math.min(100, total)),
    constraint: Math.max(scores.constraint, Math.min(100, constraintScore * 3 + keywordHits * 8)),
    depth: Math.min(100, closeRound * 10)
  });
}

function nextClose() {
  if (!currentTopic) return;
  closeRound = Math.min(10, closeRound + 1);
  els.prompt.textContent = closePrompts[closeRound - 1];
  els.learner.value = "";
  els.evaluation.textContent = closeRound === 10
    ? "最后一轮了。把整个问题压缩成一个可执行流程，能做到就算完成一次完整 close。"
    : `第 ${closeRound} 轮。继续深入同一个问题。每轮只补一个角度，理解会越来越稳。`;
  updateRound();
  updateScores({ depth: closeRound * 10 });
}

function updateRound() {
  els.round.textContent = `${closeRound} / 10 close`;
}

function updateScores(next) {
  scores = { ...scores, ...next };
  scores.mastery = Math.round((scores.clarity * 0.45) + (scores.constraint * 0.35) + (scores.depth * 0.2));
  els.clarity.textContent = scores.clarity;
  els.constraint.textContent = scores.constraint;
  els.depth.textContent = closeRound;
  els.mastery.textContent = scores.mastery;
  drawScore();
}

function drawScore() {
  const width = els.canvas.width;
  const height = els.canvas.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = 86;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#101917";
  ctx.fillRect(0, 0, width, height);

  ctx.lineWidth = 18;
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  const angle = (scores.mastery / 100) * Math.PI * 2;
  const gradient = ctx.createLinearGradient(40, 40, 220, 220);
  gradient.addColorStop(0, "#f28f79");
  gradient.addColorStop(0.5, "#f2c95f");
  gradient.addColorStop(1, "#8bd8bd");
  ctx.strokeStyle = gradient;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + angle);
  ctx.stroke();

  ctx.fillStyle = "rgba(139,216,189,0.16)";
  for (let i = 0; i < 18; i += 1) {
    const x = 28 + ((i * 47) % 210);
    const y = 28 + ((i * 31) % 210);
    ctx.beginPath();
    ctx.arc(x, y, 2 + (i % 4), 0, Math.PI * 2);
    ctx.fill();
  }
}

const TAG_ORDER = [
  "Loop 核心", "基础概念", "核心能力", "提示词", "反馈",
  "调试", "版本", "AI 边界", "范围", "产品", "数据", "交互",
  "验收", "学习法", "流程", "深入", "心态", "运行分享",
  "工具关系", "网页基础", "文件", "设计", "素材", "安全"
];

function renderTopics() {
  els.topicGrid.innerHTML = "";
  const seen = new Set();

  TAG_ORDER.forEach(tag => {
    const group = topics.filter(t => t.tag === tag);
    if (group.length === 0) return;

    const label = document.createElement("div");
    label.className = "topic-group-label";
    label.textContent = tag;
    els.topicGrid.appendChild(label);

    group.forEach((topic) => {
      seen.add(topic.id);
      els.topicGrid.appendChild(makeTopicCard(topic));
    });
  });

  topics.filter(t => !seen.has(t.id)).forEach(topic => {
    els.topicGrid.appendChild(makeTopicCard(topic));
  });
}

function makeTopicCard(topic) {
  const button = document.createElement("button");
  button.className = "topic-card";
  button.type = "button";
  button.dataset.id = topic.id;
  button.innerHTML = `<span>${topic.tag}</span><h3>${topic.title}</h3><p>${topic.answer.slice(0, 80)}…</p>`;
  button.addEventListener("click", () => setTopic(topic, topic.title));
  return button;
}

function renderFaq() {
  els.faqList.innerHTML = "";
  topics.forEach((topic, index) => {
    const item = document.createElement("details");
    item.open = index < 3;
    item.innerHTML = `<summary>${topic.title}</summary><p>${topic.answer}</p><p class="faq-constraint">关键约束：${topic.constraint}</p>`;
    els.faqList.appendChild(item);
  });
}

function highlightTopic(id) {
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.id === id);
  });
}

els.ask.addEventListener("click", () => {
  const text = els.question.value.trim();
  const topic = matchTopic(text);
  setTopic(topic, text || topic.title);
});

els.question.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    els.ask.click();
  }
});

els.clear.addEventListener("click", () => {
  els.question.value = "";
  els.learner.value = "";
  els.answer.textContent = "你可以直接输入自然语言。系统会匹配最接近的闪卡主题，给出新手版解释，再进入反问训练。";
  els.prompt.textContent = "等你先提问后，我会给你一个小白也能听懂的反问。";
  els.evaluation.textContent = "评分会看四件事：是否简单、是否有例子、是否提到约束、是否知道下一步怎么做。";
  closeRound = 0;
  scores = { clarity: 0, constraint: 0, depth: 0, mastery: 0 };
  updateRound();
  updateScores(scores);
  highlightTopic("");
});

els.random.addEventListener("click", () => {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  setTopic(topic, topic.title);
});

els.grade.addEventListener("click", gradeAnswer);
els.next.addEventListener("click", nextClose);

renderTopics();
renderFaq();
updateRound();
drawScore();

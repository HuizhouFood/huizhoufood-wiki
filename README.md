# 汇舟本草木果 Wiki

汇舟食品旗下本草知识库，整理《本草纲目》相关资料与常见药食同源食材介绍，供学习与文化阅读使用。

本仓库为**资料合集**（Wiki），不是医疗产品，不提供诊断、处方或治疗服务。

---

## 内容概览

| 模块 | 说明 |
|------|------|
| 本草纲目 | 全书简介、十六部类、五十二卷目录 |
| 部类目录 | 各部名称数量与索引说明 |
| 药食同源 | 常见食材功效摘要（可搜索） |
| 精选食材 | **枸杞**、**莲子**、**酸枣** 的功效与烹饪方法详解 |

资料来源基于公开整理的本草文献与学习用 PDF，侧重文化科普与饮食参考。

---

## 重要声明

**本站内容仅供学习、知识整理与文化阅读，不构成医疗、用药或诊疗建议。**

- 本站不替代专业医师、药师或其他医疗人员的意见
- 如有身体不适、疾病或用药需求，**请前往正规医疗机构，咨询专业医生**
- 请勿仅凭本站内容进行自我诊断或自行用药
- 特殊人群（孕妇、儿童、慢性病患者等）在使用任何食材或食疗前，应事先咨询医生

---

## 本地开发

环境要求：Node.js 20+

```bash
git clone https://github.com/HuizhouFood/huizhoufood-wiki.git
cd huizhoufood-wiki
npm install
npm run dev
```

浏览器访问：`http://localhost:5173`

构建生产版本：

```bash
npm run build
npm run preview
```

---

## 部署（Render）

本项目为 Vue 3 + Vite 静态站点，已包含 `render.yaml` 配置。

1. 在 [Render](https://render.com) 创建 **Static Site**，连接本仓库
2. 确认配置：
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
3. 部署完成后，静态资源路径为 `/static/*`，SPA 路由由 `_redirects` 与 rewrite 规则处理
4. 部署路径为：[Huizhoufood-wiki](https://huizhoufood-wiki.onrender.com/)
---

## 技术栈

- Vue 3 + Vue Router
- Vite 5
- Tailwind CSS
- Headless UI / Heroicons

---

## 仓库结构

```
├── src/
│   ├── data/          # 本草与食材数据
│   ├── views/         # 页面
│   └── components/    # 布局与公共组件
├── public/
├── render.yaml        # Render 部署配置
└── scripts/           # 构建校验脚本
```

---

## 版权与联系

© 2026 遵义汇舟食品零售有限公司

如有内容纠错或合作意向，请通过 GitHub Issues 反馈。

---

> **再次提醒：** 本 Wiki 是本草与食材的**学习资料合集**。有健康问题，请去看专业医生。

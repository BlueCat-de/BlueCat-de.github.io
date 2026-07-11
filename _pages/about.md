---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I am a second-year master's student in Department of Automation, Tsinghua University.

My research interest includes end-to-end autonomous driving, reinforcement learning and agentic llm.



# 🔥 News
- *2026.06*: One Paper (World-in-Loop) is accepted by ECCV 2026!
- *2026.01*: One Paper (ELF-VLA) is accepted by CVPR 2026!
- *2026.01*: One Paper (AdaThinkDrive) is accepted by ICRA 2026!
- *2025.12*: One Paper (xTED) is accepted by AAMAS 2026!
- *2025.08*: One Paper (VILTA) is accepted by AAAI 2026!
- *2023.10*: One Paper (SDM) is accepted by NeurIPS 2023 Symposium on ML4AD and ALOE Workshop!

# 📝 Publications and Preprints

<div class="publication-list">
  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/drive_reward_main.jpg" alt="DriveReward main figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue publication-venue--preprint">Preprint</div>
      <h3>DriveReward: A Comprehensive Dataset and Generative Vision-Language Reward Model for Autonomous Driving</h3>
      <p class="publication-authors"><strong>Qimao Chen</strong><sup>*</sup>, Fang Li<sup>*</sup>, Yuechen Luo, Zehan Zhang, Haiyang Sun, Fangzhen Li, Bing Wang, Yang Ji, Jiong Deng, Hongwei Xie, Hangjun Ye, Long Chen, Yi Zhang</p>
      <p class="publication-status">Preprint.</p>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2606.08525">arXiv</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/vilta_main.png" alt="VILTA main figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue">AAAI 2026</div>
      <h3>VILTA: A VLM-in-the-Loop Adversary for Enhancing Driving Policy Robustness</h3>
      <p class="publication-authors"><strong>Qimao Chen</strong><sup>*</sup>, Fang Li<sup>*</sup>, Shaoqing Xu<sup>*</sup>, Zhiyi Lai, Zixun Xie, Yuechen Luo, Shengyin Jiang, Hanbing Li, Long Chen, Bing Wang, Yi Zhang, Zhi-Xin Yang</p>
      <p class="publication-status">Accepted by AAAI 2026.</p>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2601.12672">arXiv</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/elf_vla_main.png" alt="ELF-VLA main figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue">CVPR 2026</div>
      <h3>Unleashing VLA Potentials in Autonomous Driving via Explicit Learning from Failures</h3>
      <p class="publication-authors">Yuechen Luo<sup>*</sup>, <strong>Qimao Chen</strong><sup>*</sup>, Fang Li<sup>*</sup>, Shaoqing Xu, Jiaxin Liu, Ziying Song, Zhi-Xin Yang, Fuxi Wen</p>
      <p class="publication-status">Accepted by CVPR 2026.</p>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2603.01063">arXiv</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/xted_main.png" alt="xTED main figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue">AAMAS 2026</div>
      <h3>xTED: Cross-Domain Adaptation via Diffusion-Based Trajectory Editing</h3>
      <p class="publication-authors">Haoyi Niu<sup>*</sup>, <strong>Qimao Chen</strong><sup>*</sup>, Tenglong Liu, Jianxiong Li, Guyue Zhou, Yi Zhang, Jianming Hu, Xianyuan Zhan</p>
      <p class="publication-status">Accepted by AAMAS 2026.</p>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2409.08687">arXiv</a>
        <a href="https://github.com/t6-thu/xTED">GitHub</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/sdm_stackelberg_main.png" alt="Stackelberg autonomous-background vehicle modeling main figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue">NeurIPS 2023 ML4AD Workshop</div>
      <h3>Stackelberg Autonomous-Background Vehicle Modeling for Continual Policy Improvement</h3>
      <p class="publication-authors">Haoyi Niu<sup>*</sup>, <strong>Qimao Chen</strong><sup>*</sup>, Yingyue Li and Jianming Hu</p>
      <p class="publication-status">Accepted by NeurIPS 2023 ML4AD Workshop.</p>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2309.14235">arXiv</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/adathinkdrive_main.jpg" alt="AdaThinkDrive main figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue">ICRA 2026</div>
      <h3>AdaThinkDrive: Adaptive Thinking via Reinforcement Learning for Autonomous Driving</h3>
      <p class="publication-authors">Yuechen Luo, Fang Li, Shaoqing Xu, Zhiyi Lai, Lei Yang, <strong>Qimao Chen</strong>, Ziang Luo, Zixun Xie, Shengyin Jiang, Jiaxin Liu, Long Chen, Bing Wang, Zhi-xin Yang</p>
      <p class="publication-status">Accepted by ICRA 2026.</p>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2509.13769">arXiv</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <img class="publication-thumb" src="/images/publications/world_in_loop_main.svg" alt="World-in-Loop overview figure" loading="lazy">
    <div class="publication-info">
      <div class="publication-venue">ECCV 2026</div>
      <h3>World-in-Loop: Online Correction via Event-Triggered World Models for Robust VLA Policies</h3>
      <p class="publication-authors">Shaoqing Xu, Fang Li, Yuechen Luo, <strong>Qimao Chen</strong>, Zhixiang Duan, Yifan Yang, Long Chen, Zhi-Xin Yang</p>
      <p class="publication-status">Accepted by ECCV 2026.</p>
    </div>
  </article>
</div>

<!-- ## Preprints and Codebases -->







# 📖 Educations
- *2024.09 - present*, Master's Student, Department of Automation, Tsinghua University, Beijing, China.
- *2020.09 - 2024.07*, Undergraduate, Department of Automation, Tsinghua Univeristy, Beijing, China.


# 💻 Internships
- *2024.12 - 2026.04*, [Xiaomi EV](https://www.xiaomiev.com/), China.
- *2026.04 - present*, [ByteDance](https://www.bytedance.com/en/), China.

export type SupportedLanguage = "en" | "ne" | "hi" | "zh";

export const languageOptions = [
  { value: "en", label: "English" },
  { value: "ne", label: "नेपाली" },
  { value: "hi", label: "हिन्दी" },
  { value: "zh", label: "中文" },
] as const;

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      services: "Services",
      contact: "Contact",
      letsTalk: "Let's Talk",
      theme: "Theme",
      language: "Language",
    },
    hero: {
      eyebrow: "Web Designer & Creative Developer",
      title: "Gunin Singh",
      subtitle:
        "Crafting digital experiences that feel cinematic, intentional, and human.",
      primaryButton: "View My Work",
      secondaryButton: "Get In Touch",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About Me",
      heading: "Designing digital experiences",
      paragraphOne:
        "I'm Gunin Singh, a designer and builder focused on creating meaningful digital experiences that balance clarity, emotion, and function.",
      paragraphTwo:
        "I bring together thoughtful UI direction, front-end craftsmanship, and a process grounded in audience needs, narrative, and polish.",
      stats: [
        { number: "5+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "30+", label: "Happy Clients" },
        { number: "100%", label: "Dedication" },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      heading: "Featured projects",
      button: "View All Projects",
      items: [
        {
          title: "Lumina E-Commerce",
          category: "Web Design & Development",
          description:
            "A luxury fashion storefront designed to feel immersive, premium, and conversion-focused.",
          year: "2024",
        },
        {
          title: "Horizon Dashboard",
          category: "UI/UX Design",
          description:
            "A modern analytics dashboard focused on clarity, speed, and confident decision-making.",
          year: "2024",
        },
        {
          title: "Artisan Portfolio",
          category: "Creative Direction",
          description:
            "A minimal portfolio concept shaped around refined storytelling and elegant visual rhythm.",
          year: "2023",
        },
        {
          title: "Nova Finance App",
          category: "Mobile Design",
          description:
            "An intuitive finance app concept designed for trust, simplicity, and everyday momentum.",
          year: "2023",
        },
      ],
    },
    services: {
      eyebrow: "What I Do",
      heading: "Services & expertise",
      description:
        "Design and development support focused on thoughtful interfaces, measurable clarity, and memorable brand experiences.",
      items: [
        {
          title: "UI/UX Design",
          description:
            "Design systems, wireframes, and interactive interfaces that help audiences understand and act with ease.",
          features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
        },
        {
          title: "Web Development",
          description:
            "Performance-minded front-end experiences built to feel smooth, responsive, and intentional across devices.",
          features: ["React & Next.js", "Responsive Design", "Animation", "Performance"],
        },
        {
          title: "Mobile Design",
          description:
            "Touch-first experiences shaped for clarity, motion, and a natural sense of flow on small screens.",
          features: ["iOS & Android", "App Design", "Cross-platform", "Gestures"],
        },
        {
          title: "Brand Identity",
          description:
            "Visual systems and brand direction that create recognition, consistency, and trust across every touchpoint.",
          features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Assets"],
        },
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      heading: "Let’s create together",
      description:
        "Have a project in mind? I’d love to hear about it and explore the right way to bring your vision to life.",
      emailLabel: "Email Address",
      emailPlaceholder: "rockstarjaynin@gmail.com",
      locationText: "Available Worldwide",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      messageLabel: "Your Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      social: ["Twitter", "LinkedIn", "Dribbble", "Behance"],
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please tell me about your project.",
      },
    },
    terminal: {
      title: "Portfolio Terminal",
      prompt: "guest@amazingpro:~$",
      welcome: "Welcome to the portfolio shell. Type 'help' to view commands.",
      help: [
        "Available commands:",
        "  help",
        "  about",
        "  projects",
        "  skills",
        "  contact",
        "  clear",
        "  ./start-portfolio",
      ],
      about: [
        "Gunin Singh — designer and creative developer.",
        "Focused on tactile interfaces, thoughtful systems, and elegant storytelling.",
      ],
      projects: [
        "Selected work includes e-commerce, dashboards, portfolios, and finance product design.",
        "Use the portfolio to explore each project and the process behind them.",
      ],
      skills: [
        "Core strengths:",
        "  UI/UX Design",
        "  Front-end Development",
        "  Motion & Interaction",
        "  Brand Systems",
      ],
      contact: [
        "Email: rockstarjaynin@gmail.com",
        "Location: Available Worldwide",
      ],
      clear: "Terminal cleared.",
      unknown: "Command not found. Type 'help' to see the available commands.",
      start: [
        "Launching cinematic portfolio...",
        "Welcome in.",
      ],
      skip: "Skip intro",
      startButton: "Start portfolio",
    },
    footer: {
      copyright: "© {year} Gunin Singh. Crafted with passion & precision.",
      backToTop: "Back to Top",
      credit: "Made by Gunin Singh",
    },
  },
  ne: {
    nav: {
      home: "होम",
      about: "मेरो बारे",
      work: "कार्य",
      services: "सेवाहरू",
      contact: "सम्पर्क",
      letsTalk: "बोल्नुहोस्",
      theme: "थिम",
      language: "भाषा",
    },
    hero: {
      eyebrow: "वेब डिजाइनर र क्रिएटिभ डेभलपर",
      title: "गुणिन सिंह",
      subtitle: "सिनेमैटिक, उद्देश्यपूर्ण र मानवीय डिजिटल अनुभवहरू सिर्जना गर्दै।",
      primaryButton: "मेरो काम हेर्नुहोस्",
      secondaryButton: "सम्पर्क गर्नुहोस्",
      scroll: "स्क्रोल",
    },
    about: {
      eyebrow: "मेरो बारे",
      heading: "डिजिटल अनुभवहरू बनाउनुहोस्",
      paragraphOne:
        "म गुणिन सिंह हुँ, एक डिजाइनर र बिल्डर जसले स्पष्टता, भावना र कार्यक्षमता मिलाउने अर्थपूर्ण डिजिटल अनुभवहरू सिर्जना गर्छ।",
      paragraphTwo:
        "म सोचपूर्ण UI दिशा, फ्रन्ट-एन्ड कारीगरी र दर्शकको आवश्यकतामा आधारित प्रक्रियालाई एकसाथ ल्याउँछु।",
      stats: [
        { number: "5+", label: "वर्ष अनुभव" },
        { number: "50+", label: "काम सम्पन्न" },
        { number: "30+", label: "सन्तुष्ट ग्राहक" },
        { number: "100%", label: "समर्पण" },
      ],
    },
    work: {
      eyebrow: "चयनित काम",
      heading: "विशेष परियोजनाहरू",
      button: "सबै परियोजनाहरू हेर्नुहोस्",
      items: [
        {
          title: "लुमिना ई-कमर्स",
          category: "वेब डिजाइन र विकास",
          description: "लक्जरी फेशन स्टोरफ्रन्ट जसले प्रिमियम र कन्वर्जन-केन्द्रित अनुभव दिन्छ।",
          year: "2024",
        },
        {
          title: "होरिजन ड्यास्बोर्ड",
          category: "UI/UX डिजाइन",
          description: "स्पष्टता, गति र निर्णय लिन सजिलो आधुनिक एनालिटिक्स ड्यास्बोर्ड।",
          year: "2024",
        },
        {
          title: "आर्टिसन पोर्टफोलियो",
          category: "क्रिएटिभ डाइरेक्शन",
          description: "सजिलो कहानी कथन र सुरुचिपूर्ण दृश्य लयमा आधारित न्यूनतम पोर्टफोलियो।",
          year: "2023",
        },
        {
          title: "नोवा फाइनान्स एप",
          category: "मोबाइल डिजाइन",
          description: "विश्वास, सरलता र दैनिक प्रगतिको लागि डिजाइन गरिएको सहज फाइनान्स ऐप।",
          year: "2023",
        },
      ],
    },
    services: {
      eyebrow: "म के गर्छु",
      heading: "सेवाहरू र विशेषज्ञता",
      description:
        "स्पष्ट, याद रहन सक्ने र उपयोगकर्ता-केंद्रित डिजिटल अनुभवहरूको लागि डिजाइन र विकास सेवा।",
      items: [
        {
          title: "UI/UX डिजाइन",
          description: "सिस्टम र इंटरफेस जसले प्रयोगकर्तालाई सजिलो बुभन र काम गर्न मद्दत गर्छ।",
          features: ["प्रयोगकर्ता अनुसन्धान", "वायरफ्रेमिङ", "प्रोटोटाइपिङ", "डिजाइन सिस्टम"],
        },
        {
          title: "वेब डेभलपमेन्ट",
          description: "मोटरमा र स्पर्धात्मक अनुभवहरू जुन उपकरणहरूमा सहज र गतिशील हुन्छन्।",
          features: ["React & Next.js", "रिस्पन्सिभ डिजाइन", "एनीमेशन", "परफॉरमन्स"],
        },
        {
          title: "मोबाइल डिजाइन",
          description: "स्पर्श-केन्द्रित अनुभव जुन छोटो स्क्रिनमा सहजता र प्रवाह बनाउँछ।",
          features: ["iOS & Android", "एप डिजाइन", "क्रस-प्ल्याटफर्म", "जेस्चर"],
        },
        {
          title: "ब्रान्ड आइडेन्टिटी",
          description: "ध्यान खस्ने दृश्य प्रणाली र ब्रान्ड दिशा जसले सबै स्पर्श बिन्दुहरूमा पहिचान बनाउन सहयोग गर्छ।",
          features: ["लोगो डिजाइन", "दृश्य पहिचान", "ब्रान्ड दिशा", "एसेट्स"],
        },
      ],
    },
    contact: {
      eyebrow: "सम्पर्क गर्नुहोस्",
      heading: "एकसाथ打造 गरौं",
      description:
        "कुनै परियोजना मनमा छ? म तपाईंको विचार सुन्न तयार छु र सही तरिकाले साकार गर्न सहयोग गर्छु।",
      emailLabel: "इमेल ठेगाना",
      emailPlaceholder: "rockstarjaynin@gmail.com",
      locationText: "संसारभरि उपलब्ध",
      nameLabel: "तपाईंको नाम",
      namePlaceholder: "जॉन डो",
      messageLabel: "तपाईंको सन्देश",
      messagePlaceholder: "तपाईंको परियोजनाको बारे बताउनुहोस्...",
      submit: "सन्देश पठाउनुहोस्",
      social: ["Twitter", "LinkedIn", "Dribbble", "Behance"],
      validation: {
        name: "कृपया तपाईंको नाम लेख्नुहोस्।",
        email: "कृपया मान्य इमेल लेख्नुहोस्।",
        message: "कृपया परियोजना बारे बताउनुहोस्।",
      },
    },
    terminal: {
      title: "पोर्टफोलियो टर्मिनल",
      prompt: "guest@amazingpro:~$",
      welcome: "पोर्टफोलियो शेलमा स्वागत छ। कमाण्डहरू हेर्न 'help' लेख्नुहोस्।",
      help: ["उपलब्ध कमाण्डहरू:", "  help", "  about", "  projects", "  skills", "  contact", "  clear", "  ./start-portfolio"],
      about: ["गुणिन सिंह — डिजाइनर र क्रिएटिभ डेभलपर।", "सुगम, सोचपूर्ण र सुरुचिपूर्ण इन्टरफेसमा फोकस।"],
      projects: ["चयनित काममा ई-कमर्स, ड्यास्बोर्ड, पोर्टफोलियो र फाइनान्स डिजाईन समावेश छ।", "प्रत्येक परियोजनाको पृष्ठमा विस्तार हेर्न सक्नुहुन्छ।"],
      skills: ["मुख्य क्षमता:", "  UI/UX डिजाइन", "  फ्रन्ट-एन्ड डेभलपमेन्ट", "  मोशन र इन्टरएक्शन", "  ब्रान्ड सिस्टम"],
      contact: ["इमेल: rockstarjaynin@gmail.com", "स्थान: संसारभरि उपलब्ध"],
      clear: "टर्मिनल खाली गरियो।",
      unknown: "कमाण्ड फेला परेन। 'help' लेखेर उपलब्ध कमाण्डहरू हेर्नुहोस्।",
      start: ["पोर्टफोलियो सुरु हुँदैछ...", "स्वागत छ।"],
      skip: "इण्ट्रो छोड्नुहोस्",
      startButton: "पोर्टफोलियो सुरु गर्नुहोस्",
    },
    footer: {
      copyright: "© {year} गुणिन सिंह। प्रेम र दक्षतासहित सिर्जना गरियो।",
      backToTop: "माथि जाँउ",
      credit: "गुणिन सिंह द्वारा बनाइएको",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "मेरे बारे में",
      work: "काम",
      services: "सेवाएँ",
      contact: "संपर्क",
      letsTalk: "बात करें",
      theme: "थीम",
      language: "भाषा",
    },
    hero: {
      eyebrow: "वेब डिजाइनर और क्रिएटिव डिवेलपर",
      title: "गुनीन सिंह",
      subtitle: "सिनेमैटिक, उद्देश्यपूर्ण और मानवीय डिजिटल अनुभव बनाकर।",
      primaryButton: "मेरे काम देखें",
      secondaryButton: "संपर्क करें",
      scroll: "स्क्रॉल",
    },
    about: {
      eyebrow: "मेरे बारे में",
      heading: "डिजिटल अनुभव बनाना",
      paragraphOne:
        "मैं गुनीन सिंह हूँ, एक डिज़ाइनर और बिल्डर जो स्पष्टता, भावना और उपयोगिता को संतुलित करने वाले अर्थपूर्ण डिजिटल अनुभव बनाता हूँ।",
      paragraphTwo:
        "मैं सोच-समझकर UI दिशा, फ्रंट-एंड शिल्प और दर्शक की ज़रूरतों के आधार पर एक सुव्यवस्थित प्रक्रिया को मिलाता हूँ।",
      stats: [
        { number: "5+", label: "वर्ष का अनुभव" },
        { number: "50+", label: "काम पूर्ण" },
        { number: "30+", label: "संतुष्ट ग्राहक" },
        { number: "100%", label: "समर्पण" },
      ],
    },
    work: {
      eyebrow: "चयनित काम",
      heading: "विशेष परियोजनाएँ",
      button: "सभी परियोजनाएँ देखें",
      items: [
        {
          title: "ल्यूमिना ई-कॉमर्स",
          category: "वेब डिज़ाइन और विकास",
          description: "एक लक्ज़री फैशन स्टोरफ्रंट जो प्रीमियम और परिवर्तन-केंद्रित अनुभव देता है।",
          year: "2024",
        },
        {
          title: "होरिज़न डैशबोर्ड",
          category: "UI/UX डिज़ाइन",
          description: "स्पष्टता, गति और सही निर्णय के लिए एक आधुनिक एनालिटिक्स डैशबोर्ड।",
          year: "2024",
        },
        {
          title: "आर्टिसन पोर्टफोलियो",
          category: "क्रिएटिव डायरेक्शन",
          description: "सुव्यवस्थित कहानी और सुंदर दृश्य लय पर आधारित न्यूनतम पोर्टफोलियो।",
          year: "2023",
        },
        {
          title: "नोवा फाइनेंस ऐप",
          category: "मोबाइल डिज़ाइन",
          description: "विश्वास, सरलता और दैनिक प्रगति के लिए डिज़ाइन किया गया एक सहज वित्त ऐप।",
          year: "2023",
        },
      ],
    },
    services: {
      eyebrow: "मैं क्या करता हूँ",
      heading: "सेवाएँ और विशेषज्ञता",
      description:
        "स्पष्ट, यादगार और उपयोगकर्ता-केंद्रित डिजिटल अनुभवों के लिए डिज़ाइन और डेवलपमेंट सहायता।",
      items: [
        {
          title: "UI/UX डिज़ाइन",
          description: "ऐसे इंटरफेस बनाना जो उपयोगकर्ताओं को समझने और सही काम करने में मदद करें।",
          features: ["यूज़र रिसर्च", "वायरफ्रेमिंग", "प्रोटोटाइपिंग", "डिज़ाइन सिस्टम"],
        },
        {
          title: "वेब डिवेलपमेंट",
          description: "स्मूद, रेस्पॉन्सिव और इंटेंट-फोकस्ड वेब अनुभव बनाना।",
          features: ["React & Next.js", "रिस्पॉन्सिव डिज़ाइन", "एनीमेशन", "परफॉरमेंस"],
        },
        {
          title: "मोबाइल डिज़ाइन",
          description: "छोटे स्क्रीन पर सहजता और प्रवाह को प्राथमिकता देने वाला टच-फर्स्ट अनुभव।",
          features: ["iOS & Android", "ऐप डिज़ाइन", "क्रॉस-प्लेटफ़ॉर्म", "गेस्तर"],
        },
        {
          title: "ब्रांड आइडेंटिटी",
          description: "ऐसी विज़ुअल सिस्टम बनाना जो पहचान, स्थिरता और भरोसा बढ़ाए।",
          features: ["लोगो डिज़ाइन", "विज़ुअल आइडेंटिटी", "ब्रांड गाइडलाइंस", "एसेट्स"],
        },
      ],
    },
    contact: {
      eyebrow: "संपर्क करें",
      heading: "एक साथ बनाते हैं",
      description:
        "कोई प्रोजेक्ट दिमाग में है? मैं सुनना चाहूँगा और सही तरीके से उसे जीवन में लाने का रास्ता तलाशूँगा।",
      emailLabel: "ईमेल पता",
      emailPlaceholder: "rockstarjaynin@gmail.com",
      locationText: "दुनिया भर में उपलब्ध",
      nameLabel: "आपका नाम",
      namePlaceholder: "जॉन डो",
      messageLabel: "आपका संदेश",
      messagePlaceholder: "अपने प्रोजेक्ट के बारे में बताइए...",
      submit: "संदेश भेजें",
      social: ["Twitter", "LinkedIn", "Dribbble", "Behance"],
      validation: {
        name: "कृपया अपना नाम लिखें।",
        email: "कृपया सही ईमेल दर्ज करें।",
        message: "कृपया अपने प्रोजेक्ट के बारे में बताएं।",
      },
    },
    terminal: {
      title: "पोर्टफोलियो टर्मिनल",
      prompt: "guest@amazingpro:~$",
      welcome: "पोर्टफोलियो शेल में आपका स्वागत है। कमांड देखने के लिए 'help' टाइप करें।",
      help: ["उपलब्ध कमांड:", "  help", "  about", "  projects", "  skills", "  contact", "  clear", "  ./start-portfolio"],
      about: ["गुनीन सिंह — डिज़ाइनर और क्रिएटिव डेवलपर।", "सुगम, सोचपूर्ण और सुंदर इंटरफेस पर फोकस।"],
      projects: ["चयनित काम में ई-कॉमर्स, डैशबोर्ड, पोर्टफोलियो और फाइनेंस डिज़ाइन शामिल हैं।", "प्रत्येक परियोजना का विवरण ब्राउज़ करें।"],
      skills: ["मुख्य ताकतें:", "  UI/UX डिज़ाइन", "  फ्रंट-एंड डिवेलपमेंट", "  मोशन और इंटरैक्शन", "  ब्रांड सिस्टम"],
      contact: ["ईमेल: rockstarjaynin@gmail.com", "स्थान: दुनिया भर में उपलब्ध"],
      clear: "टर्मिनल साफ़ कर दिया गया।",
      unknown: "कमांड नहीं मिला। उपलब्ध कमांड देखने के लिए 'help' टाइप करें।",
      start: ["सिनेमैटिक पोर्टफोलियो शुरू किया जा रहा है...", "आपका स्वागत है।"],
      skip: "इंट्रो छोड़ें",
      startButton: "पोर्टफोलियो शुरू करें",
    },
    footer: {
      copyright: "© {year} गुनीन सिंह। प्रेम और परिश्रम से निर्मित।",
      backToTop: "ऊपर जाएँ",
      credit: "गुनीन सिंह द्वारा निर्मित",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      work: "作品",
      services: "服务",
      contact: "联系",
      letsTalk: "联系我们",
      theme: "主题",
      language: "语言",
    },
    hero: {
      eyebrow: "网页设计师 / 创意开发者",
      title: "古宁·辛格",
      subtitle: "打造电影感、明确性与人性化的数字体验。",
      primaryButton: "查看作品",
      secondaryButton: "联系我",
      scroll: "滚动",
    },
    about: {
      eyebrow: "关于我",
      heading: "设计数字体验",
      paragraphOne:
        "我叫古宁·辛格，是一名设计师和开发者，专注于创造兼顾清晰度、情感和功能的有意义数字体验。",
      paragraphTwo:
        "我将细致的 UI 方向、前端工艺和以受众需求为核心的流程结合在一起，打造更有层次的作品。",
      stats: [
        { number: "5+", label: "年经验" },
        { number: "50+", label: "完成项目" },
        { number: "30+", label: "满意客户" },
        { number: "100%", label: "专注投入" },
      ],
    },
    work: {
      eyebrow: "精选作品",
      heading: "代表项目",
      button: "查看全部项目",
      items: [
        {
          title: "Lumina 电商",
          category: "网页设计与开发",
          description: "奢华时尚商城，注重沉浸感、品牌调性和转化效率。",
          year: "2024",
        },
        {
          title: "Horizon 仪表盘",
          category: "UI/UX 设计",
          description: "现代数据分析仪表盘，强调清晰度、速度和决策信心。",
          year: "2024",
        },
        {
          title: "Artisan 作品集",
          category: "创意指导",
          description: "极简风格作品集，围绕精致叙事和优雅节奏展开。",
          year: "2023",
        },
        {
          title: "Nova 金融应用",
          category: "移动端设计",
          description: "直观且易用的金融应用，帮助用户建立信任和日常行动力。",
          year: "2023",
        },
      ],
    },
    services: {
      eyebrow: "我能做什么",
      heading: "服务与专长",
      description:
        "专注于清晰、可记忆且具用户中心思维的设计和开发支持服务。",
      items: [
        {
          title: "UI/UX 设计",
          description: "通过信息架构、界面流程和交互设计，让产品更易理解、更自然使用。",
          features: ["用户研究", "线框图", "原型设计", "设计系统"],
        },
        {
          title: "网页开发",
          description: "构建高性能、响应式且富有节奏感的前端体验。",
          features: ["React & Next.js", "响应式设计", "动效", "性能优化"],
        },
        {
          title: "移动端设计",
          description: "以触控体验为核心，打造更自然、更顺畅的小屏互动。",
          features: ["iOS & Android", "应用设计", "跨平台", "手势交互"],
        },
        {
          title: "品牌识别",
          description: "建立可持续扩展的视觉系统，增强信任感与品牌辨识度。",
          features: ["Logo 设计", "视觉识别", "品牌规范", "资产管理"],
        },
      ],
    },
    contact: {
      eyebrow: "联系我",
      heading: "一起创造",
      description:
        "有项目想法吗？我很乐意倾听，并一起探索将愿景变为现实的最佳方式。",
      emailLabel: "电子邮箱",
      emailPlaceholder: "rockstarjaynin@gmail.com",
      locationText: "全球可用",
      nameLabel: "您的名字",
      namePlaceholder: "John Doe",
      messageLabel: "您的留言",
      messagePlaceholder: "告诉我您的项目想法...",
      submit: "发送消息",
      social: ["Twitter", "LinkedIn", "Dribbble", "Behance"],
      validation: {
        name: "请输入您的名字。",
        email: "请输入有效的电子邮箱。",
        message: "请告诉我您的项目需求。",
      },
    },
    terminal: {
      title: "作品集终端",
      prompt: "guest@amazingpro:~$",
      welcome: "欢迎来到作品集终端。输入 'help' 查看可用命令。",
      help: ["可用命令：", "  help", "  about", "  projects", "  skills", "  contact", "  clear", "  ./start-portfolio"],
      about: ["古宁·辛格 —— 设计师与创意开发者。", "专注于舒适、清晰且有情绪表达的界面设计。"],
      projects: ["精选作品包含电商、仪表盘、作品集和金融产品设计。", "使用界面浏览每个项目背后的设计思路。"],
      skills: ["核心能力：", "  UI/UX 设计", "  前端开发", "  动效与交互", "  品牌系统"],
      contact: ["邮箱: rockstarjaynin@gmail.com", "位置: 全球可用"],
      clear: "终端已清空。",
      unknown: "命令不存在。输入 'help' 查看可用命令。",
      start: ["正在启动电影感作品集...", "欢迎进入。"],
      skip: "跳过介绍",
      startButton: "启动作品集",
    },
    footer: {
      copyright: "© {year} 古宁·辛格。用热爱与细节创造。",
      backToTop: "返回顶部",
      credit: "由古宁·辛格制作",
    },
  },
} as const;

export type TranslationKey = (typeof translations)[SupportedLanguage];

export type PricingOption = {
  id: string;
  label: string;
  price: string;
  priceValue: number;
  detail?: string;
  save?: string;
  recommended?: boolean;
  /** Stripe Price ID goes here when payments are wired up. */
  stripePriceId?: string;
};

export type Offer = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  fromPrice: string;
  commitment?: string;
  locationNote?: string;
  delivery: "online" | "in-person";
  features: string[];
  extrasTitle?: string;
  pricing: PricingOption[];
  recommendedNote?: string;
  image: string;
};

export const offers: Offer[] = [
  {
    id: "online",
    name: "Online Coaching",
    eyebrow: "Total Body & Mind Reset",
    summary:
      "A personalised training + nutrition system with full support — built to create lasting change, not just short-term results.",
    fromPrice: "£210/month",
    commitment: "Minimum 3-month commitment",
    delivery: "online",
    image: "/paul/paul-wall.webp",
    features: [
      "MFF App for training, tracking, and progress",
      "Custom training plan tailored to your goals",
      "Personalised nutrition — no generic plans",
      "Weekly voice note check-ins",
      "Direct WhatsApp access to your coach",
      "Mindset & lifestyle coaching",
      "Private support group",
      "Learn the “why” behind what you’re doing",
    ],
    pricing: [
      { id: "online-monthly", label: "Monthly", price: "£250/month", priceValue: 250 },
      {
        id: "online-6m",
        label: "6-Month Plan",
        price: "£225/month",
        priceValue: 225,
        detail: "£1,350 total",
        save: "Save £150",
        recommended: true,
      },
      {
        id: "online-12m",
        label: "12-Month Plan",
        price: "£210/month",
        priceValue: 210,
        detail: "£2,520 total",
        save: "Save £480",
      },
    ],
    recommendedNote: "Recommended: 6-month plan for the best results and savings",
  },
  {
    id: "elite",
    name: "Elite Coaching",
    eyebrow: "Maximum Support. Guaranteed Results.",
    summary:
      "For high achievers who want the fastest transformation possible — with premium-level accountability, structure, and personalisation.",
    fromPrice: "£500/month",
    commitment: "Minimum 4-month commitment",
    delivery: "online",
    image: "/paul/paul-conditioning.webp",
    extrasTitle: "Everything from Online Coaching, plus:",
    features: [
      "Weekly 1:1 video calls (30 mins)",
      "Bi-weekly plan updates based on progress",
      "Priority response (under 2 hours)",
      "Custom supplement protocol",
      "Monthly body composition analysis (Leicester only)",
      "Advanced tracking (measurements, photos, wearable integration)",
      "Sleep & stress optimisation",
      "Dining out strategies + weekly meal updates",
      "Form check videos via WhatsApp",
      "Injury prevention & advanced training methods",
      "Monthly mindset coaching + goal setting",
    ],
    pricing: [
      { id: "elite-monthly", label: "Monthly", price: "£600/month", priceValue: 600 },
      {
        id: "elite-6m",
        label: "6-Month Plan",
        price: "£550/month",
        priceValue: 550,
        detail: "£3,300 total",
        save: "Save £300",
      },
      {
        id: "elite-12m",
        label: "12-Month Plan",
        price: "£500/month",
        priceValue: 500,
        detail: "£6,000 total",
        save: "Save £1,200",
        recommended: true,
      },
    ],
    recommendedNote: "Recommended: 12-month plan for maximum support and savings",
  },
  {
    id: "ultimate",
    name: "The Ultimate Experience",
    eyebrow: "Built Around Your Life. In Your Life.",
    summary:
      "Hands-on, in-person, and built to transform your entire lifestyle. Most coaching stops at the screen. This one steps into your kitchen, your schedule, and your real-world habits.",
    fromPrice: "£1,000/month",
    locationNote: "Limited to 10 clients only",
    delivery: "in-person",
    image: "/paul/paul-training.webp",
    extrasTitle: "Need support beyond the gym?",
    features: [
      "Monthly home visits to optimise your routine, kitchen, and cooking habits",
      "Kitchen setup support — streamline meals and make healthy eating easy",
      "1:1 real-time coaching, in person and online",
      "Lifestyle deep dive: habits, stress, sleep, and daily routines",
      "Full integration of training, nutrition, mindset, and home life",
      "Exclusive access — limited to 10 clients for maximum attention",
    ],
    pricing: [
      { id: "ultimate-monthly", label: "Monthly", price: "£1,000/month", priceValue: 1000 },
      {
        id: "ultimate-quarterly",
        label: "Quarterly",
        price: "£2,850",
        priceValue: 2850,
        detail: "every 3 months",
        save: "Save £150",
      },
      {
        id: "ultimate-12m",
        label: "12 Months Upfront",
        price: "£9,999",
        priceValue: 9999,
        save: "Save £2,001",
        recommended: true,
      },
    ],
    recommendedNote:
      "Limited to 10 clients only — includes monthly home visits, kitchen optimisation, and hands-on home cooking guidance.",
  },
  {
    id: "hybrid",
    name: "Hybrid Coaching",
    eyebrow: "In-Person Training + Full Online Support",
    summary:
      "Live in Leicester and want the best of both worlds? Face-to-face sessions plus the structure, nutrition, and mindset support of full online coaching.",
    fromPrice: "£360/month",
    locationNote: "Leicester only",
    delivery: "in-person",
    image: "/paul/paul-gym.jpg",
    features: [
      "Weekly in-person training sessions",
      "Full access to the MFF app & custom training plan",
      "Personalised nutrition coaching",
      "WhatsApp access to your coach",
      "Mindset & lifestyle support",
      "Full online coaching included free",
    ],
    pricing: [
      { id: "hybrid-8", label: "8 sessions/month", price: "£360", priceValue: 360, detail: "£45 per session" },
      { id: "hybrid-12", label: "12 sessions/month", price: "£510", priceValue: 510, detail: "£42.50 per session" },
      { id: "hybrid-16", label: "16 sessions/month", price: "£640", priceValue: 640, detail: "£40 per session" },
      {
        id: "hybrid-20",
        label: "20 sessions/month",
        price: "£750",
        priceValue: 750,
        detail: "£37.50 per session",
        recommended: true,
      },
    ],
    recommendedNote:
      "The more you train, the more you save — and full online coaching is included free.",
  },
  {
    id: "in-person",
    name: "In-Person Personal Training",
    eyebrow: "1:1 Coaching in Leicester",
    summary:
      "Prefer training face-to-face? Expert guidance, real-time feedback, and sessions tailored to your goals — all in person.",
    fromPrice: "£360",
    locationNote: "Leicester only",
    delivery: "in-person",
    image: "/paul/paul-gym-lean.webp",
    features: [
      "One-on-one personal training in Leicester",
      "Strength, fat loss, and fitness-focused coaching",
      "Form correction, motivation, and accountability",
      "Flexible session packages to match your schedule",
      "Full focus. No distractions. Real results.",
    ],
    pricing: [
      { id: "pt-8", label: "8 sessions", price: "£360", priceValue: 360, detail: "£45 per session" },
      { id: "pt-12", label: "12 sessions", price: "£510", priceValue: 510, detail: "£42.50 per session" },
      { id: "pt-16", label: "16 sessions", price: "£660", priceValue: 660, detail: "£41.25 per session" },
      { id: "pt-20", label: "20 sessions", price: "£800", priceValue: 800, detail: "£40.00 per session" },
    ],
    recommendedNote:
      "Ideal for those who want focused, in-person training without the online coaching.",
  },
];

export const planGuide = [
  {
    name: "Online Coaching",
    bestFor: "Self-motivated clients who want full guidance & flexibility.",
    points: [
      "Custom workouts & meal plans",
      "Weekly check-ins + WhatsApp",
      "Full app access",
    ],
    href: "/coaching#online",
  },
  {
    name: "Elite Coaching",
    bestFor: "High achievers ready to commit to rapid transformation.",
    points: [
      "1:1 video calls + priority support",
      "Advanced tracking & strategy",
      "Full lifestyle & supplement guidance",
    ],
    href: "/coaching#elite",
  },
  {
    name: "Ultimate Experience",
    bestFor: "Those who want maximum support — in and out of the gym.",
    points: [
      "Monthly home visits",
      "Kitchen/lifestyle optimisation",
      "Total hands-on coaching",
    ],
    href: "/coaching#ultimate",
  },
  {
    name: "Hybrid / In-Person",
    bestFor: "Leicester-based clients wanting face-to-face sessions.",
    points: [
      "8–20 personal sessions/month",
      "Weekly check-ins + WhatsApp",
      "Hybrid includes full online coaching & app access",
    ],
    href: "/coaching#hybrid",
  },
];

export const faqs = [
  {
    q: "Do I need experience to start coaching?",
    a: "No — all plans are built for your level, beginner or advanced.",
  },
  {
    q: "What if I have an injury or health condition?",
    a: "Your plan will be fully adapted to work around it safely.",
  },
  {
    q: "Is nutrition included in all coaching plans?",
    a: "Yes — every coaching level includes personalised nutrition support.",
  },
  {
    q: "Do I get access to Paul directly?",
    a: "Absolutely — you’ll speak directly with Paul, not an assistant or bot.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes — if your needs change, your plan can be upgraded.",
  },
  {
    q: "What if I’m not in Leicester?",
    a: "Online and Elite coaching are fully remote — you don’t need to be local.",
  },
  {
    q: "What’s the difference between Elite and Ultimate coaching?",
    a: "Elite is premium online support; Ultimate includes in-person home visits and full lifestyle optimisation.",
  },
  {
    q: "How do I get started?",
    a: "Pick the plan that fits, then send an enquiry or message Paul on WhatsApp. He’ll confirm the details before you commit.",
  },
];

/** Verified Google reviews for Mindfull Food Fitness. */
export const reviews = [
  {
    name: "Adam Bhaiyat",
    meta: "Local Guide · 2 months ago",
    quote:
      "Not only has Paul helped me achieve my goals in the gym, he has also helped with my meniscus injury. This has saved me from any injections or a key hole surgery. Paul is an absolutely amazing Personal Trainer who is positive and really supportive. He is always ready to answer questions you have. His training programme and diet plan has made an absolute difference to my body and my mindset. I highly recommend Paul. He is not your average PT. If you want to see real change make that move and contact Paul.",
  },
  {
    name: "Martin Willerton",
    meta: "9 months ago",
    quote:
      "Paul and I have been working together for the last 4 months. After a consultation Paul developed a personalised plan for me that helped me loose 28lb in the first 13 weeks. All this was done online. I trusted Paul and followed his nutrition and training plan to the dot. He has helped and supported every step of the way providing information on what we’re doing, why we’re doing it and what the changes in my body mean with regards to digestion, energy levels etc. I would 100% recommend Paul to anyone looking for a personal trainer.",
  },
  {
    name: "swati mistry",
    meta: "9 months ago",
    quote:
      "Paul is a great coach. Even as a fussy vegetarian, he’s managed to create a great menu that supports my goals. His tips make nutrition easy to understand, and his training sessions are fun and engaging. I highly recommend him!",
  },
  {
    name: "Rahim Adat",
    meta: "Local Guide · a year ago",
    quote:
      "Paul is an incredible trainer, coach and advisor to help you achieve your personal goals. I have been working with Paul for 4 months and he has completely transformed my mindset and approach to training and nutrition, by setting a delicious meal plan and full training schedule that is aimed at my personal goals. I would never have been able to do this without Paul, and with the guidance he had provided, he will be the last trainer I need to achieve my goals. If you are ready to make a real change, then contact Paul, he will help you make it happen!",
  },
  {
    name: "Hinal Karia",
    meta: "Local Guide · a year ago",
    quote:
      "Paul is a brilliant fitness coach, he understood my challenges as a vegetarian, my lifestyle and he is currently working with me to help me achieve my goals. He has given me truly life changing nutritional advice and he trains and coaches me in a way that is most beneficial for my fitness goals. I personally have benefitted as I have made some big life style changes, learned a lot about nutrition and also I have lost a lot of weight too. I think Paul is a top fitness coach. He knows his stuff and leads by example!",
  },
  {
    name: "James Atkinson",
    meta: "a year ago",
    quote:
      "After being overweight and unfit for a number of years I knew I had to sort myself out before it was too late. I had never stepped into a gym in my life and I’ll admit, the thought was intimidating. After a lot of looking around for a personal trainer I decided to contact Paul and I’m so pleased I did. To find a PT who knows nutrition as much as training is rare but Paul is an expert in both, he also lives what he teaches. After our first meet up and assessment he was able to create a bespoke meal and workout plan that fitted my busy schedule and pescatarian diet. So far I have lost over 2 stone, but more importantly I feel fitter and healthier. There is no one better in the area I can guarantee.",
  },
  {
    name: "Alf Richardson",
    meta: "a year ago",
    quote:
      "Paul is a highly professional, knowledgeable trainer. His passion to help you attain your goals shine through when you meet him. Whatever you want to achieve, weight loss, tone up, build muscle, diet, nutrition, he’ll be more than able to help you as he’s helped me. I can’t recommend him enough.",
  },
  {
    name: "Rizwan & Selina Ladak",
    meta: "Local Guide · 2 years ago",
    quote:
      "Paul is a genuine guy. The transformation I have seen in just 1 and a half month has been incredible. The meal plans are achievable, realistic and “easy”, and you see results. The training program pushes you, but they’re fantastic. They’re so individual for you and they help you achieve your goal. Would recommend Paul any day.",
  },
  {
    name: "Siddhi",
    meta: "Google review",
    quote:
      "Definitely the best personal trainer and online coach out there. Since working with him I’ve seen amazing results. His personal training sessions are amazing — he encourages me to push my hardest each session whilst also being there as a friend. The app he’s created is great and includes personalised plans, workout advice, and many amazing recipes.",
  },
  {
    name: "Priya Parmar",
    meta: "Google review",
    quote:
      "Paul is an amazing coach. I have struggled with my mental health for a while and this in turn affects my motivation and appetite. Through Paul’s continuous encouragement and coaching, I have been able to see weight loss, eating tasty nutritious food, and having a focus with the personalised workouts. Definitely recommend!",
  },
  {
    name: "Scott Ingamells",
    meta: "Google review",
    quote:
      "I thought I was doing well. Then I met Paul. He took me to the next level. His approach to each session is fantastic. He treats every client like a friend. His attention to detail and determination to make you the best possible version of yourself. The feeling after every session is awesome.",
  },
  {
    name: "S Kaur",
    meta: "Google review",
    quote:
      "Paul is undoubtedly a top-tier coach, offering a comprehensive approach to health, fitness, and mindset. His personalised plans cater to each individual’s needs, ensuring tangible results and lasting success! From nutrition guidance to training strategies and mindset cultivation, Paul always goes above and beyond.",
  },
];

/** Genuine MFF client before/after graphics. */
export const transformations = [
  { src: "/transformations/client-95-68.webp", label: "95kg → 68kg", note: "Online coaching" },
  { src: "/transformations/client-102-70.webp", label: "102kg → 70kg", note: "Online coaching" },
  { src: "/transformations/client-104-88.webp", label: "104kg → 88kg", note: "Online coaching" },
  { src: "/transformations/client-84-67.webp", label: "84kg → 67kg", note: "Online coaching" },
  { src: "/transformations/client-80-68.webp", label: "80kg → 68kg", note: "Online coaching" },
  { src: "/transformations/client-71-56.webp", label: "71kg → 56kg", note: "Online coaching" },
  { src: "/transformations/client-72-587.webp", label: "72kg → 58.7kg", note: "Online coaching" },
  { src: "/transformations/client-645-586.webp", label: "64.5kg → 58.6kg", note: "Online coaching" },
  { src: "/transformations/client-705-669.webp", label: "70.5kg → 66.9kg", note: "Online coaching" },
  { src: "/transformations/client-68-84.webp", label: "68kg → 84kg", note: "Muscle gain" },
  { src: "/transformations/client-96-recomp.webp", label: "96kg → 96kg", note: "Full body recomposition" },
  { src: "/transformations/client-male-lean.webp", label: "Leaned out", note: "Strength & conditioning" },
  { src: "/transformations/client-side-female.webp", label: "Body recomposition", note: "Online coaching" },
  { src: "/transformations/client-female-side.webp", label: "Body recomposition", note: "Online coaching" },
];

/** Paul competing and training — used across the site. */
export const paulGallery = [
  { src: "/paul/paul-stage-abs.webp", alt: "Paul McGann competing at the PCA" },
  { src: "/paul/paul-stage-front.webp", alt: "Paul McGann, PCA Physical Culture stage" },
  { src: "/paul/paul-stage-side.webp", alt: "Paul McGann side pose on stage" },
  { src: "/paul/paul-stage-most-muscular.webp", alt: "Paul McGann most muscular pose" },
  { src: "/paul/paul-training.webp", alt: "Paul McGann training in the gym" },
  { src: "/paul/paul-conditioning.webp", alt: "Paul McGann conditioning" },
];

export const problems = [
  {
    title: "Ghosted after week one",
    body: "You signed up, got a PDF, and then the messages dried up.",
  },
  {
    title: "A generic meal plan",
    body: "Someone else’s template that ignores your job, family, and food you actually like.",
  },
  {
    title: "Stuck and frustrated",
    body: "You tried hard, did the work, and still had nothing to show for it.",
  },
];

export const pillars = [
  {
    title: "Mindset",
    body: "Rewire the thoughts holding you back and finally believe in yourself.",
  },
  {
    title: "Nutrition",
    body: "Learn how to fuel your body without confusion, guilt, or restriction.",
  },
  {
    title: "Exercise",
    body: "Build strength, confidence, and consistency — no matter your starting point.",
  },
];

export const appFeatures = [
  "Training plans and workouts on demand",
  "Nutrition targets and recipes in one place",
  "Progress, measurements, and photo tracking",
  "Message Paul directly between sessions",
  "Syncs with Apple Health, Fitbit and MyFitnessPal",
];

export const story = {
  short:
    "I’ve lived both extremes — from Michelin-star kitchens to sleeping rough. It wasn’t until I took full ownership of my life that everything changed. That journey became Mindfull Food Fitness. Now I help others do the same — rebuild from the inside out through mindset, nutrition, and real coaching.",
  long: [
    "I’ve experienced both extremes of life — from Michelin-starred kitchens to sleeping rough on the streets. I battled depression, survived suicide attempts, and spent years trying to fix myself through therapy, hypnosis, and reiki. Nothing worked… until I accepted that no one was coming to save me and it was only me that could change my life.",
    "At 30, I left the kitchen, started training, cleaned up my nutrition, and reconnected with myself. That decision saved my life — and gave it purpose.",
    "That’s why I created Mindfull Food Fitness. Not to give you just another meal plan — but to help you take back control of your body, your mind, and your life.",
    "You’re not lazy. You’re not broken. You’re just stuck — like I was.",
  ],
  closer:
    "This isn’t about chasing a six-pack. It’s about becoming the strongest, most fulfilled version of yourself. Coaching isn’t a cost. It’s the investment that changes everything.",
  credentials: [
    "Level 3 qualified personal trainer",
    "17 years as a professional chef, including Michelin-starred kitchens",
    "Qualified in nutrition — food is the core of the coaching",
    "PCA Physical Culture competitor",
    "Coaching since 2018",
  ],
};

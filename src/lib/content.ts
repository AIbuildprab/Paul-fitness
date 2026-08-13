export type PricingOption = {
  label: string;
  price: string;
  detail?: string;
  save?: string;
  recommended?: boolean;
};

export type Offer = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  fromPrice: string;
  commitment?: string;
  locationNote?: string;
  features: string[];
  extrasTitle?: string;
  extras?: string[];
  pricing: PricingOption[];
  recommendedNote?: string;
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
      { label: "Monthly", price: "£250/month" },
      {
        label: "6-Month Plan",
        price: "£225/month",
        detail: "£1,350 total",
        save: "Save £150",
        recommended: true,
      },
      {
        label: "12-Month Plan",
        price: "£210/month",
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
      { label: "Monthly", price: "£600/month" },
      {
        label: "6-Month Plan",
        price: "£550/month",
        detail: "£3,300 total",
        save: "Save £300",
      },
      {
        label: "12-Month Plan",
        price: "£500/month",
        detail: "£6,000 total",
        save: "Save £1,200",
        recommended: true,
      },
    ],
    recommendedNote:
      "Recommended: 12-month plan for maximum support and savings",
  },
  {
    id: "ultimate",
    name: "The Ultimate Experience",
    eyebrow: "Built Around Your Life. In Your Life.",
    summary:
      "Hands-on, in-person, and built to transform your entire lifestyle. Most coaching stops at the screen. This one steps into your kitchen, your schedule, and your real-world habits.",
    fromPrice: "£1,000/month",
    locationNote: "Limited to 10 clients only",
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
      { label: "Monthly", price: "£1,000/month" },
      {
        label: "Quarterly",
        price: "£2,850 every 3 months",
        save: "Save £150",
      },
      {
        label: "12 Months Upfront",
        price: "£9,999",
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
    features: [
      "Weekly in-person training sessions",
      "Full access to the MFF app & custom training plan",
      "Personalised nutrition coaching",
      "WhatsApp access to your coach",
      "Mindset & lifestyle support",
      "Train with Paul in person. Stay supported between sessions.",
    ],
    pricing: [
      { label: "8 sessions/month", price: "£360", detail: "£45 per session" },
      { label: "12 sessions/month", price: "£510", detail: "£42.50 per session" },
      { label: "16 sessions/month", price: "£640", detail: "£40 per session" },
      {
        label: "20 sessions/month",
        price: "£750",
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
    features: [
      "One-on-one personal training in Leicester",
      "Strength, fat loss, and fitness-focused coaching",
      "Form correction, motivation, and accountability",
      "Flexible session packages to match your schedule",
      "Full focus. No distractions. Real results.",
    ],
    pricing: [
      { label: "8 sessions", price: "£360", detail: "£45 per session" },
      { label: "12 sessions", price: "£510", detail: "£42.50 per session" },
      { label: "16 sessions", price: "£660", detail: "£41.25 per session" },
      { label: "20 sessions", price: "£800", detail: "£40.00 per session" },
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
    a: "Book a free strategy call — we’ll go over your goals and the best plan for you. You can also message Paul on WhatsApp.",
  },
];

export const reviews = [
  {
    name: "James Atkinson",
    quote:
      "After being overweight and unfit for a number of years I knew I had to sort myself out before it was too late. I had never stepped into a gym in my life and I’ll admit, the thought was intimidating. After a lot of looking around for a personal trainer I decided to contact Paul and I’m so pleased I did. To find a PT who knows nutrition as much as training is rare but Paul is an expert in both, he also lives what he teaches. After our first meet up and assessment he was able to create a bespoke meal and workout plan that fitted my busy schedule and pescatarian diet. He has been on hand the entire time for all my queries and worries and I wouldn’t hesitate to recommend him. So far I have lost over 2 stone, but more importantly I feel fitter and healthier and it’s all down to Paul and his consistency with me.",
  },
  {
    name: "Hinal Karia",
    quote:
      "Paul is a brilliant fitness coach, he understood my challenges as a vegetarian, my lifestyle and he is currently working with me to help me achieve my goals. He has given me truly life changing nutritional advice and he trains and coaches me in a way that is most beneficial for my fitness goals. I personally have benefitted as I have made some big lifestyle changes, learned a lot about nutrition and also I have lost a lot of weight too. I think Paul is a top fitness coach. He knows his stuff and leads by example.",
  },
  {
    name: "Rahim Adat",
    quote:
      "Paul is an incredible trainer, coach and advisor to help you achieve your personal goals. I have been working with Paul for 4 months and he has completely transformed my mindset and approach to training and nutrition, by setting a delicious meal plan and full training schedule that is aimed at my personal goals. I would never have been able to do this without Paul. If you are ready to make a real change, then contact Paul, he will help you make it happen.",
  },
  {
    name: "Da Da",
    quote:
      "Absolutely a pleasure to go for a gym session. Knows exactly what exercises to emphasise for your individual body and adjusts all the session so that you hit what you need to hit. Diet is also taken care of and it is anything but boring food. Could not recommend more.",
  },
  {
    name: "Alf Richardson",
    quote:
      "Paul is a highly professional, knowledgeable trainer. His passion to help you attain your goals shines through when you meet him. Whatever you want to achieve — weight loss, tone up, build muscle, diet, nutrition — he’ll be more than able to help you as he’s helped me. I can’t recommend him enough.",
  },
  {
    name: "Rizwan & Selina Ladak",
    quote:
      "Paul is a genuine guy. The transformation I have seen in just 1 and a half month has been incredible. The meal plans are achievable, realistic and “easy”, and you see results. The training program pushes you, but they’re fantastic. They’re so individual for you and they help you achieve your goal. Would recommend Paul any day.",
  },
  {
    name: "Siddhi",
    quote:
      "Definitely the best personal trainer and online coach out there. Since working with him I’ve seen amazing results. His personal training sessions are amazing — he encourages me to push my hardest each session whilst also being there as a friend. The app he’s created is great and includes personalised plans, workout advice, and many amazing recipes. Always there if you ever need advice, especially with nutrition.",
  },
  {
    name: "Priya Parmar",
    quote:
      "Paul is an amazing coach. I have struggled with my mental health for a while and this in turn affects my motivation and appetite. Through Paul’s continuous encouragement and coaching, I have been able to see weight loss, eating tasty nutritious food, and having a focus with the personalised workouts. Definitely recommend.",
  },
  {
    name: "Scott Ingamells",
    quote:
      "I thought I was doing well. Then I met Paul. He took me to the next level. His approach to each session is fantastic. He treats every client like a friend. His attention to detail and determination to make you the best possible version of yourself. The feeling after every session is awesome.",
  },
  {
    name: "S Kaur",
    quote:
      "Paul is undoubtedly a top-tier coach, offering a comprehensive approach to health, fitness, and mindset. His personalised plans cater to each individual’s needs, ensuring tangible results and lasting success. From nutrition guidance to training strategies and mindset cultivation, Paul always goes above and beyond. Highly recommended for anyone committed to reaching their full potential.",
  },
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
  help: [
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
  ],
  closer:
    "This isn’t about chasing a six-pack. It’s about becoming the strongest, most fulfilled version of yourself. Coaching isn’t a cost. It’s the investment that changes everything.",
};

export const problems = [
  "Ever been ghosted by a coach after week one?",
  "Told to follow a generic meal plan that doesn’t fit your life?",
  "Tried your best but still felt stuck and frustrated?",
];

export const gallery = [
  { src: "/clients/1000037071.jpg", alt: "Paul McGann coaching in the gym" },
  { src: "/clients/DSC02363.jpg", alt: "Paul training with a jump rope" },
  { src: "/clients/DSC02207.webp", alt: "Paul McGann during a training session" },
  { src: "/clients/DSC02159.webp", alt: "Strength training with Paul" },
  { src: "/clients/DSC02469.webp", alt: "In-person personal training" },
  { src: "/clients/DSC02191.webp", alt: "Paul coaching a client" },
  { src: "/clients/portrait-1.webp", alt: "Paul McGann, Mindfull Food Fitness" },
  { src: "/clients/portrait-2.webp", alt: "Coach Paul McGann" },
  { src: "/clients/PCAUNIDAY1-80_3.webp", alt: "Training session with MFF" },
  { src: "/clients/1000077712.webp", alt: "Client training results" },
  { src: "/clients/1000072208.webp", alt: "Client progress with Paul" },
  { src: "/clients/1000037069.webp", alt: "Personal training in Leicester" },
  { src: "/clients/1000089191.webp", alt: "Mindfull Food Fitness client" },
  { src: "/clients/1000088900.webp", alt: "Client working with Paul" },
  { src: "/clients/1000088899.webp", alt: "Coaching session results" },
  { src: "/clients/1000075431.webp", alt: "Fitness transformation journey" },
  { src: "/clients/a38i0401.webp", alt: "Paul McGann personal trainer" },
  { src: "/clients/1576-copy.webp", alt: "Mindfull Food Fitness coaching" },
];

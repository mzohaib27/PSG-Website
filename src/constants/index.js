import logo from "../assets/logo.png";
import CardImage1 from "../assets/1creditcard.webp";
import CardImage2 from "../assets/2ndimage.jpeg";
import CardImage3 from "../assets/3rdimage.jpg";
import CardImage4 from "../assets/4thimage.avif";
import globemaillogo from "../assets/globeandmail.png";
import gobanklogo from "../assets/gobank.png";
import yahoologo from "../assets/yahoo.jpg";
import aoilogo from "../assets/aoi.jpeg";
import offerCard from "../assets/offercard2.jpg";
import percentagelogo from "../assets/percentagelogo.png";
import coinbag from "../assets/coinbag.webp";
import coinjar from "../assets/coinjar.webp";
import heroImage from "../assets/heroimage.webp";
import blackcard from "../assets/blackcard.jpg";
import bluecard from "../assets/bluecard2.jpg";
import graycard from "../assets/graycard2.jpg";
import bluebackground from "../assets/bluebg.jpeg";

export const NavbarSec = {
  logo: logo,
};

export const HeroSec = {
  heroImage: heroImage,
  smalltext: "Trusted by ",
  text: "Effortlessly manage credit cards,maximize rewards, and grow your savings - all in one place",
  btn1: "Explore Card",
  btn2: "Discover Rebates",
  logos: [
    {
      logo: globemaillogo,
    },
    {
      logo: gobanklogo,
    },
    {
      logo: yahoologo,
    },
    {
      logo: aoilogo,
    },
  ],
};

export const OfferSec = {
  heading: "Credit Cards With Best Offers.",
  text: "PSG analyzes your spending habits and recommends credit cards with the best rewards and benefits that fit your lifestyle. Stop sifting, start swiping smarter.",
  button: "Explore Credit Card",
  offerImage: offerCard,
};

export const CardSec = [
  {
    image: blackcard,
    heading: "American Express Cobalt Card",
    cardinfo: [
      {
        title: "Net Annual Rewards",
        status: "$860.82",
      },
      {
        title: "Welcome Bonus",
        status: "$315",
      },
      {
        title: "Credit Score",
        status: "Excellent",
      },
    ],
    title2: "Annual fee is deducted",
    title3: "Amex rewards",
    button1: "Apply Now",
    button2: "Details & Rewards",
  },
  {
    image: graycard,
    heading: "American Express Cobalt Card",
    cardinfo: [
      {
        title: "Net Annual Rewards",
        status: "$860.82",
      },
      {
        title: "Welcome Bonus",
        status: "$315",
      },
      {
        title: "Credit Score",
        status: "Excellent",
      },
    ],
    title2: "Annual fee is deducted",
    title3: "Amex rewards",
    button1: "Apply Now",
    button2: "Details & Rewards",
  },
  {
    image: bluecard,
    heading: "American Express Cobalt Card",
    cardinfo: [
      {
        title: "Net Annual Rewards",
        status: "$860.82",
      },
      {
        title: "Welcome Bonus",
        status: "$315",
      },
      {
        title: "Credit Score",
        status: "Excellent",
      },
    ],
    title2: "Annual fee is deducted",
    title3: "Amex rewards",
    button1: "Apply Now",
    button2: "Details & Rewards",
  },
];

export const PercentageSection = {
  heading: "Nearly Added Rebates & Rewards",
  text: "We constantly hunts down the hottest new rebates and rewards programs. From everyday purchases to travel hacks, maximize your savings with PSG by your side.",
  button: "Unlock New Rebates & Rewards",
  image: percentagelogo,
  cards: [
    {
      iamge: coinbag,
      offer: "60",
      button1: "Neo Financial",
      button2: "I Want This Offer",
      text: "Subject to Approval. Read more on Neo's Website. For new card holders only",
    },
    {
      iamge: coinjar,
      offer: "80",
      button1: "Neo Financial",
      button2: "I Want This Offer",
      text: "Subject to Approval. Read more on Neo's Website. For new card holders only",
    },
    {
      iamge: coinbag,
      offer: "120",
      button1: "Neo Financial",
      button2: "I Want This Offer",
      text: "Subject to Approval. Read more on Neo's Website. For new card holders only",
    },
    {
      iamge: coinjar,
      offer: "90",
      button1: "Neo Financial",
      button2: "I Want This Offer",
      text: "Subject to Approval. Read more on Neo's Website. For new card holders only",
    },
  ],
};

export const Extenstion = {
  backgroundImage: bluebackground,
  smallText: "PSG Web Extension",
  heading: "PSG On The Go: Manage Finances Effortlessly, Anywhere",
  text: "The PSG extension brings your financial dashboard right to your browser. Track spending, discover rewards, and stay on top of your finances - all without ever leaving your favourite websites.",
  button: "Install PSG Extension",
};

export const ReviewSec = {
  heading: "PSG User Review",
  cards: [
    {
      headingText:
        "This card is a game - changer for me! Earning 5x points at restaurant is amazing...",
      review:
        "and the statement credits practically pay for my Netflix and Spotify subscriptions. Plus, the travel insurance gives me peace of mind when I'm dining abroad.",
      name: "Sarah M.",
      city: "TORONTO",
    },
    {
      headingText:
        "As a foodie, I love the flexibility of earning points on groceries and restaurants.",
      review:
        "The Cobalt Card has helped me rack up rewards quickly, and the perks like Marriott Bonvoy Gold Status are a welcome bonus.",
      name: "David L.",
      city: "VANCOUVER",
    },
    {
      headingText:
        "This card is a game - changer for me! Earning 5x points at restaurant is amazing...",
      review:
        "and the statement credits practically pay for my Netflix and Spotify subscriptions. Plus, the travel insurance gives me peace of mind when I'm dining abroad.",
      name: "Jessica K.",
      city: "MONTREAL",
    },
  ],
};

export const LatestContent = {
  heading: "Latest Contents",
  cards: [
    {
      icontext: "PSG Reviews",
      image: CardImage1,
      name: "Mirza Shahid",
      time: "8 min read",
      title: "Best Credit Cards for Recurring Transactions and ...",
    },
    {
      icontext: "PSG Reviews",
      image: CardImage2,
      name: "Tanzeel Ashfaq",
      time: "6 min read",
      title: "Best Credit Cards for Recurring Transactions and ...",
    },
    {
      icontext: "PSG Reviews",
      image: CardImage3,
      name: "Mustafa Butt",
      time: "12 min read",
      title: "Best Credit Cards for Recurring Transactions and ...",
    },
  ],
};

export const FooterLinks = [
  {
    heading: "Quicklinks",
    linkss: [
      {
        link: "Start Saving Today",
      },
      {
        link: "About PSG",
      },
      {
        link: "Blog",
      },
      {
        link: "Why Us?",
      },
      {
        link: "Credit Calculator",
      },
    ],
  },
  {
    heading: "Legal",
    linkss: [
      {
        link: "Terms of Service",
      },
      {
        link: "Privacy Policy",
      },
      {
        link: "Disclosure",
      },
      {
        link: "Credit Cards",
      },
    ],
  },
  {
    heading: "Contacts",
    email: "support@PSGwealty.com",
    phone: "+971507869189",
  },
];

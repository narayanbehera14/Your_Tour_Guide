import juhu from "../assets/juhu.jpg";
import taj from "../assets/taj hotel.jpg";
import vadapav from "../assets/vadpav.jpg";
import wankhede from "../assets/wankhede stadium.jpg";
import Aska from "../assets/Aska.jpg";
import cricket from "../assets/cricket.jpg";
import dy from "../assets/dy patil.jpg";
import Hyatt from "../assets/Hyatt hotel.jpg";
import jw from "../assets/jw.jpg";
import pav from "../assets/pav bhaji.jpg";
import poha from "../assets/poha.jpg";
import versova from "../assets/versova.jpg";

import oberoi from "../assets/oberoi.jpg";
import trident from "../assets/trident.jpg";
import itc from "../assets/itc.jpg";
import fourseasons from "../assets/fourseasons.jpg";
import leela from "../assets/leela.jpg";

import alibaug from "../assets/alibaug.jpg";
import girgaon from "../assets/girgaon.jpg";
import madh from "../assets/madh.jpg";
import marine from "../assets/marine_drive.jpg";

import dosa from "../assets/dosa.png";
import misal from "../assets/misal.jpg";
import bhel from "../assets/bhel.jpg";
import paniPuri from "../assets/pani_puri.jpg";
import biryani from "../assets/biryani.png";

const places = [
  {
    id: 1,
    name: "Juhu Beach",
    category: "beach",
    city: "Mumbai",
    rating: 4.6,
    description: "Popular beach known for sunsets and street food.",
    image: juhu
  },
  {
    id: 2,
    name: "Versova Beach",
    category: "beach",
    city: "Mumbai",
    rating: 4.4,
    description: "Cleaner and calmer beach with a local vibe.",
    image: versova
  },
  {
    id: 3,
    name: "Aska Beach",
    category: "beach",
    city: "Odisha",
    rating: 4.3,
    description: "Peaceful beach away from city crowd.",
    image: Aska
  },
  {
    id: 4,
    name: "Alibaug Beach",
    category: "beach",
    city: "Alibaug",
    rating: 4.5,
    description: "Popular weekend beach near Mumbai.",
    image: alibaug
  },
  {
    id: 5,
    name: "Girgaon Chowpatty",
    category: "beach",
    city: "Mumbai",
    rating: 4.3,
    description: "Famous city beach near Marine Drive.",
    image: girgaon
  },
  {
    id: 6,
    name: "Madh Island Beach",
    category: "beach",
    city: "Mumbai",
    rating: 4.4,
    description: "Scenic and peaceful beach.",
    image: madh
  },

  {
    id: 7,
    name: "Taj Hotel",
    category: "hotel",
    city: "Mumbai",
    rating: 4.9,
    description: "Iconic luxury hotel near Gateway of India.",
    image: taj
  },
  {
    id: 8,
    name: "Hyatt Hotel",
    category: "hotel",
    city: "Mumbai",
    rating: 4.7,
    description: "Premium stay with world-class hospitality.",
    image: Hyatt
  },
  {
    id: 9,
    name: "JW Marriott",
    category: "hotel",
    city: "Mumbai",
    rating: 4.8,
    description: "Beachside luxury hotel at Juhu.",
    image: jw
  },
  {
    id: 10,
    name: "The Oberoi",
    category: "hotel",
    city: "Mumbai",
    rating: 4.9,
    description: "Luxury hotel with sea-facing rooms.",
    image: oberoi
  },
  {
    id: 11,
    name: "Trident Nariman Point",
    category: "hotel",
    city: "Mumbai",
    rating: 4.8,
    description: "Business luxury hotel near Marine Drive.",
    image: trident
  },
  {
    id: 12,
    name: "ITC Grand Central",
    category: "hotel",
    city: "Mumbai",
    rating: 4.7,
    description: "Premium hotel with Indian heritage design.",
    image: itc
  },
  {
    id: 13,
    name: "Four Seasons Hotel",
    category: "hotel",
    city: "Mumbai",
    rating: 4.8,
    description: "Ultra-luxury hotel with skyline views.",
    image: fourseasons
  },
  {
    id: 14,
    name: "The Leela Mumbai",
    category: "hotel",
    city: "Mumbai",
    rating: 4.7,
    description: "Luxury hotel close to the airport.",
    image: leela
  },

  {
    id: 15,
    name: "Vadapav",
    category: "food",
    city: "Mumbai",
    rating: 4.9,
    description: "Mumbai’s most loved street food.",
    image: vadapav
  },
  {
    id: 16,
    name: "Pav Bhaji",
    category: "food",
    city: "Mumbai",
    rating: 4.8,
    description: "Rich buttery bhaji served with pav.",
    image: pav
  },
  {
    id: 17,
    name: "Poha",
    category: "food",
    city: "Mumbai",
    rating: 4.5,
    description: "Light and healthy breakfast dish.",
    image: poha
  },
  {
    id: 18,
    name: "Masala Dosa",
    category: "food",
    city: "Mumbai",
    rating: 4.7,
    description: "Crispy dosa filled with spicy potato masala.",
    image: dosa
  },
  {
    id: 19,
    name: "Misal Pav",
    category: "food",
    city: "Mumbai",
    rating: 4.8,
    description: "Spicy Maharashtrian curry served with pav.",
    image: misal
  },
  {
    id: 20,
    name: "Bhel Puri",
    category: "food",
    city: "Mumbai",
    rating: 4.6,
    description: "Tangy street snack made with puffed rice.",
    image: bhel
  },
  {
    id: 21,
    name: "Pani Puri",
    category: "food",
    city: "Mumbai",
    rating: 4.9,
    description: "Crispy puris filled with spicy water.",
    image: paniPuri
  },
  {
    id: 22,
    name: "Mumbai Biryani",
    category: "food",
    city: "Mumbai",
    rating: 4.8,
    description: "Aromatic rice dish with rich spices.",
    image: biryani
  },

  {
    id: 23,
    name: "Wankhede Stadium",
    category: "stadium",
    city: "Mumbai",
    rating: 4.7,
    description: "Historic cricket stadium of Mumbai.",
    image: wankhede
  },
  {
    id: 24,
    name: "DY Patil Stadium",
    category: "stadium",
    city: "Mumbai",
    rating: 4.6,
    description: "Modern stadium hosting big events.",
    image: dy
  },
  {
    id: 25,
    name: "Local Cricket Ground",
    category: "stadium",
    city: "Mumbai",
    rating: 4.4,
    description: "Local ground for cricket lovers.",
    image: cricket
  }
];

export default places;

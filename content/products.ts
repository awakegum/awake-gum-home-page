export interface Product {
  id: string
  name: string
  flavor: string
  description: string
  longDescription?: string
  caffeine: string
  pieces: number
  image: string
}

export const products: Product[] = [
  {
    id: "mint-blast",
    name: "Mint Blast",
    flavor: "Peppermint",
    description:
      "Classic peppermint flavor with a refreshing cool finish that delivers steady energy throughout your day",
    longDescription:
      "Experience the invigorating power of pure peppermint combined with 80mg of caffeine in every piece. Mint Blast delivers a crisp, clean taste that awakens your senses while providing a steady, reliable energy boost that lasts for hours. The caffeine is absorbed through the oral mucosa, giving you noticeable effects within 5-10 minutes, keeping you focused and alert throughout your busiest days. Perfect for morning meetings, afternoon slumps, or anytime you need a refreshing pick-me-up that keeps you performing at your best. The long-lasting peppermint flavor keeps your breath fresh for hours while helping you maintain consistent focus and alertness.",
    caffeine: "80mg per piece",
    pieces: 12,
    image: "/mint-green-gum-pack-modern-design.jpg",
  },
  {
    id: "citrus-surge",
    name: "Citrus Surge",
    flavor: "Orange & Lemon",
    description: "Zesty citrus blend that energizes and refreshes with every chew",
    longDescription:
      "Brighten your day with the vibrant combination of sun-ripened orange and zesty lemon, enhanced with 80mg of caffeine for smooth, sustained energy. The natural citrus oils provide an authentic taste that transports you to a Mediterranean grove with every chew. Whether you're hitting the gym, tackling a challenging project, or need a midday boost, Citrus Surge provides clean, consistent energy that helps you stay productive. The refreshing citrus taste also helps combat dry mouth and keeps you feeling revitalized, while ensuring you remain sharp and attentive for hours.",
    caffeine: "80mg per piece",
    pieces: 12,
    image: "/orange-citrus-gum-pack-modern-design.jpg",
  },
  {
    id: "berry-boost",
    name: "Berry Boost",
    flavor: "Mixed Berry",
    description: "Sweet berry medley that keeps you focused and energized all day long",
    longDescription:
      "Indulge in a delicious blend of strawberries, blueberries, and raspberries while enjoying sustained energy from 80mg of caffeine. Each piece provides hours of steady alertness, making it the tastiest and most reliable way to power through your day. The complex flavor profile evolves as you chew, revealing different berry notes that keep your taste buds engaged. Perfect for students during long study sessions, professionals tackling complex projects, athletes training for endurance, or anyone who needs reliable, sustained energy in a convenient, portable format. The natural berry sweetness means no artificial aftertaste, just pure fruity goodness and hours of maintained alertness.",
    caffeine: "80mg per piece",
    pieces: 12,
    image: "/purple-berry-gum-pack-modern-design.jpg",
  },
  {
    id: "cinnamon-fire",
    name: "Cinnamon Fire",
    flavor: "Spicy Cinnamon",
    description: "Bold cinnamon with a spicy kick for those who like their energy intense",
    longDescription:
      "Turn up the heat with our boldest flavor yet. Cinnamon Fire delivers an intense cinnamon kick paired with 80mg of caffeine for sustained alertness. Not for the faint of heart, this flavor is designed for those who like their energy with a spicy edge. The warming sensation of real cinnamon oil creates a unique sensory experience that stimulates your senses while sharpening your mind. This powerful combination makes Cinnamon Fire ideal for early mornings, late-night study sessions, long drives, or any time you need maximum alertness. The bold spice also helps clear sinuses and provides a throat-soothing effect, making it a favorite among singers, speakers, and anyone who uses their voice professionally.",
    caffeine: "80mg per piece",
    pieces: 12,
    image: "/red-cinnamon-gum-pack-modern-design.jpg",
  },
  {
    id: "tropical-wave",
    name: "Tropical Wave",
    flavor: "Mango & Pineapple",
    description: "Exotic tropical fusion that transports you to paradise with smooth energy",
    longDescription:
      "Escape to paradise with every piece. Tropical Wave combines the sweet, exotic flavors of ripe mango and juicy pineapple with 80mg of caffeine for smooth, long-lasting energy. It's like a mini vacation that also happens to keep you performing at your best throughout your entire day. The authentic tropical fruit flavors are derived from natural sources, creating a taste experience that rivals fresh fruit while delivering powerful energy benefits. The natural sweetness and tropical aroma create a mood-boosting effect that complements the steady physical and mental energy. Whether you're dreaming of beach vacations during a long workday or need a pick-me-up that feels like a treat, Tropical Wave transforms your energy routine into something you'll look forward to.",
    caffeine: "80mg per piece",
    pieces: 12,
    image: "/yellow-tropical-gum-pack-modern-design.jpg",
  },
  {
    id: "arctic-freeze",
    name: "Arctic Freeze",
    flavor: "Wintergreen",
    description: "Intense wintergreen with an icy blast that keeps you alert and refreshed",
    longDescription:
      "Experience the ultimate in cool refreshment and sustained energy. Arctic Freeze delivers an icy blast of wintergreen flavor combined with 80mg of caffeine for hours of steady alertness. The intense cooling sensation and long-lasting freshness make this the perfect choice for staying sharp and refreshed all day long. The wintergreen oil provides a penetrating coolness that opens airways and creates an invigorating sensory experience. This flavor is especially popular among athletes, outdoor enthusiasts, long-distance drivers, and anyone who needs to maintain peak performance in challenging conditions. The extreme freshness helps combat fatigue-related bad breath and keeps your mouth feeling clean for hours.",
    caffeine: "80mg per piece",
    pieces: 12,
    image: "/ice-blue-wintergreen-gum-pack-modern-design.jpg",
  },
]

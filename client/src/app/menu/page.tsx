"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";
import { Coffee, Leaf, Cake, Package } from "lucide-react";

const categories = [
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "tea", name: "Tea", icon: Leaf },
  { id: "cake", name: "Cake", icon: Cake },
  { id: "combo", name: "Combo", icon: Package },
];

const products = [
  // Coffee
  {
    id: 1,
    name: "Americano",
    description: "Bold espresso with hot water for a smooth, rich flavor",
    price: "$4.50",
    image: "/images/americano.jpg",
    category: "coffee",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and velvety foam",
    price: "$5.00",
    image: "/images/cappuccino.jpg",
    category: "coffee",
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk and delicate art",
    price: "$5.50",
    image: "/images/latte.jpg",
    category: "coffee",
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Mocha",
    description: "Rich espresso blended with chocolate and topped with cream",
    price: "$6.00",
    image: "/images/mocha.jpg",
    category: "coffee",
  },
  {
    id: 5,
    name: "Espresso",
    description: "Intense, concentrated coffee with a perfect crema layer",
    price: "$3.50",
    image: "/images/espresso.jpg",
    category: "coffee",
  },
  {
    id: 6,
    name: "Cold Brew",
    description: "Slow-steeped for 20 hours, smooth and naturally sweet",
    price: "$5.50",
    image: "/images/cold-brew.jpg",
    category: "coffee",
    badge: "Refreshing",
  },
  // Tea
  {
    id: 7,
    name: "Green Tea",
    description: "Premium Japanese green tea with a delicate, earthy flavor",
    price: "$4.00",
    image: "/images/green-tea.jpg",
    category: "tea",
  },
  {
    id: 8,
    name: "Matcha Latte",
    description: "Ceremonial grade matcha with creamy steamed milk",
    price: "$6.00",
    image: "/images/matcha-latte.jpg",
    category: "tea",
    badge: "Healthy",
  },
  // Milk Tea
  {
    id: 9,
    name: "Brown Sugar Milk Tea",
    description: "Classic milk tea with rich brown sugar and chewy pearls",
    price: "$5.50",
    image: "/images/milk-tea.jpg",
    category: "milk-tea",
    badge: "Fan Favorite",
  },
  {
    id: 10,
    name: "Taro Milk Tea",
    description: "Creamy taro-flavored milk tea with a hint of sweetness",
    price: "$5.50",
    image: "/images/milk-tea.jpg",
    category: "milk-tea",
  },
  // Cake
  {
    id: 11,
    name: "Chocolate Cake",
    description: "Decadent layers of rich chocolate with ganache frosting",
    price: "$7.00",
    image: "/images/chocolate-cake.jpg",
    category: "cake",
    badge: "Indulgent",
  },
  {
    id: 12,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers",
    price: "$8.00",
    image: "/images/chocolate-cake.jpg",
    category: "cake",
  },
  // Snacks
  {
    id: 13,
    name: "Butter Croissant",
    description: "Flaky, buttery French pastry baked fresh daily",
    price: "$4.50",
    image: "/images/croissant.jpg",
    category: "snacks",
    badge: "Fresh",
  },
  {
    id: 14,
    name: "Almond Croissant",
    description: "Classic croissant filled with almond cream and sliced almonds",
    price: "$5.00",
    image: "/images/croissant.jpg",
    category: "snacks",
  },
  // Combo
  {
    id: 15,
    name: "Coffee & Cake Combo",
    description: "Any regular coffee paired with a slice of cake of your choice",
    price: "$10.00",
    image: "/images/latte.jpg",
    category: "combo",
    badge: "Value",
  },
  {
    id: 16,
    name: "Breakfast Set",
    description: "Americano or Latte with a butter croissant and fresh fruit",
    price: "$12.00",
    image: "/images/americano.jpg",
    category: "combo",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Our Menu
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our handcrafted beverages and delicious treats
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 rounded-2xl bg-secondary/50 p-2 md:inline-flex md:mx-auto md:gap-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-out",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                  )}
                >
                  <Icon className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    isActive && "scale-110"
                  )} />
                  <span>{category.name}</span>
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div 
          key={activeCategory}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in zoom-in-95 duration-300"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                badge={product.badge}
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

import { ProductCard } from "@/components/product-card";

const products = [
  {
    name: "Signature Latte",
    description: "Smooth espresso with steamed milk and a touch of sweetness",
    price: "$5.50",
    image: "/images/latte.jpg",
    badge: "Popular",
  },
  {
    name: "Classic Espresso",
    description: "Rich and bold single-origin espresso shot",
    price: "$3.50",
    image: "/images/espresso.jpg",
  },
  {
    name: "Creamy Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: "$4.75",
    image: "/images/cappuccino.jpg",
  },
  {
    name: "Cold Brew",
    description: "Smooth, refreshing cold-steeped coffee served over ice",
    price: "$4.50",
    image: "/images/cold-brew.jpg",
    badge: "New",
  },
];

export function FeaturedProducts() {
  return (
    <section id="menu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Featured Drinks
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Discover our handcrafted selection of premium coffee drinks, 
            made with the finest beans from around the world.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const bestSellers = [
  {
    name: "Caramel Macchiato",
    description: "Vanilla-flavored espresso with steamed milk and caramel drizzle",
    price: "$5.95",
    rating: 4.9,
    reviews: 324,
    image: "/images/latte.jpg",
  },
  {
    name: "Mocha Delight",
    description: "Rich espresso with chocolate and steamed milk, topped with whipped cream",
    price: "$5.75",
    rating: 4.8,
    reviews: 256,
    image: "/images/mocha.jpg",
  },
];

export function BestSellers() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent">
              Customer Favorites
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Best Sellers
            </h2>
          </div>
          <Button variant="outline" className="gap-2 border-foreground/20 hover:bg-foreground/5">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {bestSellers.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col gap-6 overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row sm:items-center"
            >
              {/* Image */}
              <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-foreground">
                      {item.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({item.reviews} reviews)
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-foreground">
                    {item.price}
                  </span>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

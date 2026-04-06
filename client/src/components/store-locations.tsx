import Image from 'next/image';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
    {
        name: 'Downtown Central',
        address: '123 Main Street, Downtown',
        hours: 'Mon-Fri: 6AM-9PM, Sat-Sun: 7AM-8PM',
        phone: '(555) 123-4567',
    },
    {
        name: 'Riverside Plaza',
        address: '456 River Road, Riverside',
        hours: 'Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM',
        phone: '(555) 234-5678',
    },
    {
        name: 'University District',
        address: '789 College Ave, Campus Area',
        hours: 'Mon-Sun: 6AM-11PM',
        phone: '(555) 345-6789',
    },
];

export function StoreLocations() {
    return (
        <section id="about" className="bg-background py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="/images/store.jpg"
                                alt="TheZooCoffee store interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative card */}
                        <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl md:block">
                            <p className="font-serif text-3xl font-bold">3</p>
                            <p className="text-sm opacity-90">Địa điểm phục vụ bạn</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent">
                            Thăm Chúng Tôi
                        </span>
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                            Các Địa Điểm Của Chúng Tôi
                        </h2>
                        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                            Tìm địa điểm TheZooCoffee gần nhất của bạn và trải nghiệm không gian ấm áp, chào đón của
                            chúng tôi. Mỗi địa điểm đều mang đến cùng chất lượng cà phê và dịch vụ đặc biệt mà bạn yêu
                            thích.
                        </p>

                        {/* Locations List */}
                        <div className="mt-8 space-y-6">
                            {locations.map((location) => (
                                <div
                                    key={location.name}
                                    className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:shadow-md"
                                >
                                    <h3 className="font-serif text-lg font-semibold text-card-foreground">
                                        {location.name}
                                    </h3>
                                    <div className="mt-3 space-y-2">
                                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                            <span>{location.address}</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                            <span>{location.hours}</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                            <span>{location.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                            Chỉ Đường
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

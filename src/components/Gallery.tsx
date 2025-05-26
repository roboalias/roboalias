
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/03297fbb-75e3-4a12-b890-6682fbc2de36.png",
      alt: "Ali Ahmed with Robomart self-driving store at exhibition"
    },
    {
      src: "/lovable-uploads/558fe4d4-afa7-4c35-87ce-1a04d2a6a553.png",
      alt: "Ali Ahmed speaking at conference"
    },
    {
      src: "/lovable-uploads/70f066ee-b896-4505-89f7-e841488d269e.png",
      alt: "Robomart team with autonomous vehicle at museum display"
    },
    {
      src: "/lovable-uploads/eb13e1e9-3c65-4828-9235-3ceadeeb21c7.png",
      alt: "Award ceremony with $5,000 prize check for Robomart"
    },
    {
      src: "/lovable-uploads/242b7aba-aaef-47e8-a894-fe99fb2edfb7.png",
      alt: "Ali Ahmed presenting at Groceryshop conference"
    },
    {
      src: "/lovable-uploads/9e9ca5fa-b4a5-4cdf-9dc2-81614db203d6.png",
      alt: "Interview with Ali Ahmed and Robomart demonstration"
    },
    {
      src: "/lovable-uploads/9acbab21-1fb3-4e13-b25c-f3ba12dc26ad.png",
      alt: "Robomart founders team photo with autonomous store"
    },
    {
      src: "/lovable-uploads/d92605b7-0ffa-477b-8f41-7ca5c9e28557.png",
      alt: "Ali Ahmed keynote presentation at Groceryshop"
    },
    {
      src: "/lovable-uploads/03fe70c1-326f-433a-a2f5-c9846cac6c79.png",
      alt: "Ali Ahmed speaking at technology conference"
    },
    {
      src: "/lovable-uploads/4b3c078b-f8c1-4def-83bb-f4efe9edb811.png",
      alt: "Ali Ahmed headshot at Robomart event"
    },
    {
      src: "/lovable-uploads/77bb9c11-f9f7-41eb-9ce1-aff256a31767.png",
      alt: "Ali Ahmed demonstrating Robomart technology outdoors"
    },
    {
      src: "/lovable-uploads/4d7fd031-280d-4d73-93c9-3b3aa361a64b.png",
      alt: "TV interview featuring Robomart autonomous store"
    },
    {
      src: "/lovable-uploads/5c3bbea4-de15-4706-88c0-80226c9983bb.png",
      alt: "Robomart team photo with autonomous vehicle"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Grid layout for larger screens */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <AspectRatio ratio={4/3}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </Card>
        ))}
      </div>

      {/* Carousel for mobile screens */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;

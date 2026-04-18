import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/images/f463beb9-ef1f-4417-a29a-eb7bb14d870c.png",
      alt: "Ali Ahmed being interviewed on KTLA5 Morning News with Robomart vehicle"
    },
    {
      src: "/images/e93f2f4e-83d0-4d7d-af0a-75e7bfe2d20e.png",
      alt: "Ali Ahmed demonstrating Robomart technology at tech exhibition"
    },
    {
      src: "/images/9fe206ce-e91e-4edf-a48a-601d284f8e7b.png",
      alt: "Ali Ahmed portrait with American flag"
    },
    {
      src: "/images/242b7aba-aaef-47e8-a894-fe99fb2edfb7.png",
      alt: "Ali Ahmed presenting at Groceryshop conference"
    },
    {
      src: "/images/9e9ca5fa-b4a5-4cdf-9dc2-81614db203d6.png",
      alt: "Interview with Ali Ahmed and Robomart demonstration"
    },
    {
      src: "/images/9acbab21-1fb3-4e13-b25c-f3ba12dc26ad.png",
      alt: "Robomart founders team photo with autonomous store"
    },
    {
      src: "/images/d92605b7-0ffa-477b-8f41-7ca5c9e28557.png",
      alt: "Ali Ahmed keynote presentation at Groceryshop"
    },
    {
      src: "/images/03fe70c1-326f-433a-a2f5-c9846cac6c79.png",
      alt: "Ali Ahmed speaking at technology conference"
    },
    {
      src: "/images/4b3c078b-f8c1-4def-83bb-f4efe9edb811.png",
      alt: "Ali Ahmed headshot at Robomart event"
    },
    {
      src: "/images/77bb9c11-f9f7-41eb-9ce1-aff256a31767.png",
      alt: "Ali Ahmed demonstrating Robomart technology outdoors"
    },
    {
      src: "/images/4d7fd031-280d-4d73-93c9-3b3aa361a64b.png",
      alt: "TV interview featuring Robomart autonomous store"
    },
    {
      src: "/images/5c3bbea4-de15-4706-88c0-80226c9983bb.png",
      alt: "Robomart team photo with autonomous vehicle"
    },
    {
      src: "/images/03297fbb-75e3-4a12-b890-6682fbc2de36.png",
      alt: "Ali Ahmed with Robomart self-driving store at exhibition"
    },
    {
      src: "/images/70f066ee-b896-4505-89f7-e841488d269e.png",
      alt: "Robomart team with autonomous vehicle at museum display"
    },
    {
      src: "/images/eb13e1e9-3c65-4828-9235-3ceadeeb21c7.png",
      alt: "Award ceremony with $5,000 prize check for Robomart"
    }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Responsive grid: single column on mobile, three columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <Dialog key={index} open={selectedImageIndex === index} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleImageClick(index)}>
                <AspectRatio ratio={4/3}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full hover:opacity-70 transition-opacity duration-500"
                  />
                </AspectRatio>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full">
              <div className="relative">
                <img
                  src={currentImage?.src}
                  alt={currentImage?.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Navigation buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex !== null ? selectedImageIndex + 1 : 0} / {images.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

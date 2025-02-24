"use client";

import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  videoUrl: string;
}

export function VideoCard({
  id,
  title,
  description,
  thumbnail,
  category,
  duration,
  videoUrl,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = videoUrl.split('v=')[1];

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div 
              className="relative cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnail}
                alt={title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-primary/90">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </AspectRatio>
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs md:text-sm"
        >
          <Clock className="mr-1 h-3 w-3" />
          {duration}
        </Badge>
      </div>
      <div className="p-4 md:p-6">
        <Badge variant="outline" className="mb-2 md:mb-3 text-xs md:text-sm">
          {category}
        </Badge>
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground line-clamp-2 md:line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalTitle,
} from "@/components/ui/responsive-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

interface ImageModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Function to close the modal
   */
  onClose: () => void;
  /**
   * Array of image URLs to display in the carousel
   */
  images: string[];
  /**
   * Initial image index to display
   */
  initialIndex?: number;
  /**
   * Project name for accessibility
   */
  projectName: string;
}

/**
 * ImageModal component that displays project images in a carousel within a modal
 * Supports vertical scrolling for long screenshots and keyboard navigation
 */
const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  projectName,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const locale = useLocale();
  const t = useTranslations();
  // Reset current index when modal opens with different initial index
  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          event.preventDefault();
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
          break;
        case "ArrowRight":
          event.preventDefault();
          setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, images.length]);

  if (!isOpen || images.length === 0) return null;

  return (
    <ResponsiveModal open={isOpen} onOpenChange={onClose}>
      <ResponsiveModalContent
        side="bottom"
        className="max-w-7xl w-[95vw] max-h-[95svh] h-[95svh] p-0 bg-black/95 border-gray-800"
      >
        <ResponsiveModalTitle className="sr-only">
          {projectName} - {t("Image Gallery")}
        </ResponsiveModalTitle>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 z-50 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        <div className="w-full h-full flex items-center justify-center p-4">
          {images.length === 1 ? (
            // Single image display with vertical scrolling
            <div className="w-full max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl">
              <div className="relative max-w-full">
                <Image
                  src={images[0]}
                  alt={`${projectName} screenshot`}
                  width={1920}
                  height={1080}
                  className="max-w-full h-full"
                  priority
                />
              </div>
            </div>
          ) : (
            // Carousel for multiple images
            <Carousel
              className="w-full h-full"
              opts={{
                align: "center",
                loop: true,
                direction: locale === "ar" ? "rtl" : "ltr",
              }}
            >
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="w-full max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl">
                      <div className="relative max-w-full">
                        <Image
                          src={image}
                          alt={`${projectName} screenshot ${index + 1}`}
                          width={1920}
                          height={1080}
                          className="max-w-full h-full"
                          priority={index === currentIndex}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons */}
              <CarouselPrevious
                className="start-4 bg-black/50 hover:bg-black/70 text-white border-gray-600"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev > 0 ? prev - 1 : images.length - 1
                  )
                }
              />
              <CarouselNext
                className="end-4 bg-black/50 hover:bg-black/70 text-white border-gray-600"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev < images.length - 1 ? prev + 1 : 0
                  )
                }
              />
            </Carousel>
          )}
        </div>

        {/* Image navigation dots for multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/70"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default ImageModal;

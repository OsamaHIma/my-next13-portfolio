"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
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
  const locale = useLocale();
  const t = useTranslations();

  if (!isOpen || images.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-gray-800 overflow-x-hidden"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <DialogTitle className="sr-only">
          {projectName} - {t("Image Gallery")}
        </DialogTitle>

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
            plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
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
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons */}
              <CarouselPrevious className=" bg-black/50 hover:bg-black/70 text-white border-gray-600" />
              <CarouselNext className=" bg-black/50 hover:bg-black/70 text-white border-gray-600" />
            </Carousel>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;

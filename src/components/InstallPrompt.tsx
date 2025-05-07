"use client";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Download, Share2 } from "lucide-react";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI to show the install button
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt && !isIOS) return;
    
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      // We've used the prompt, and can't use it again, throw it away
      setDeferredPrompt(null);
      // Hide the install button
      setIsInstallable(false);
    }
  };

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <Card className="w-full mt-3 max-w-md mx-auto bg-white/80 dark:bg-black-100/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      <CardHeader className="flex gap-3 pb-0">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Install App</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Get the best experience</p>
        </div>
      </CardHeader>
      <CardBody className="py-4">
        <Button 
          className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-md hover:shadow-lg transition-all duration-300 font-medium" 
          startContent={<Download className="size-4" />}
          size="lg"
          radius="md"
          fullWidth
          onClick={handleInstallClick}
          disableRipple
          disableAnimation={isIOS}
        >
          Add to Home Screen
        </Button>
      </CardBody>
      {isIOS && (
        <CardFooter className="bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 gap-2">
          <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-wrap">
            <span>To install on iOS, tap</span>
            <Share2 className="mx-1 size-4 inline-block text-gray-600 dark:text-gray-300" />
            <span>and then</span>
            <span className="font-medium">"Add to Home Screen"</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

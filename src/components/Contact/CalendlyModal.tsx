// components/CalendlyModal.tsx
"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { FaCalendar } from "react-icons/fa";

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById("__next"); // fallback is body
    if (root) {
      setRootElement(root);
    } else {
      setRootElement(document.body);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        <FaCalendar className="h-5 w-5" />
        Schedule a Meeting
      </button>

      {isOpen && rootElement && (
        <PopupModal
          url="https://calendly.com/queenstechbros/30min"
          onModalClose={() => setIsOpen(false)}
          open={true}
          rootElement={rootElement}
        />
      )}
    </>
  );
}

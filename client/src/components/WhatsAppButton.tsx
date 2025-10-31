import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923022360007"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp-float"
      style={{
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }}
    >
      <SiWhatsapp className="h-7 w-7" />
      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  );
}

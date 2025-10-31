export function MapSection() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.601460750391!2d72.99520317549927!3d33.66748707330426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97fc97615577%3A0xd7f57ccd75b4287f!2sOrange%20Sign%20PanaFlex!5e0!3m2!1sen!2s!4v1761889648578!5m2!1sen!2s" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Orange Sign Location"
          />
        </div>
      </div>
    </section>
  );
}

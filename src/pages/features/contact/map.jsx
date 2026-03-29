export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
      <iframe
        title="SBN Movers Location"
        src="https://www.google.com/maps?q=lekki+epe+expressway+oral+estate&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  );
}
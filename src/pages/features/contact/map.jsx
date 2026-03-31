// export default function Map() {
//   return (
//     <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
//       <iframe
//         title="SBN Movers Location"
//         src="https://www.google.com/maps?q=lekki+epe+expressway+oral+estate&output=embed"
//         className="w-full h-full border-0"
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// }


export default function Map() {
  return (
    <section className="relative overflow-hidden py-30 text-center bg-secondary text-white">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      {/* Moving Light Streaks */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      {/* Radial Glow (Depth Effect) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Subtle Grid Texture (Optional Premium Feel) */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      {/* <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"> */}
        <div className="mx-10 h-[400px] rounded-xl overflow-hidden shadow">

          <iframe
            title="SBN Movers Location"
            src="https://www.google.com/maps?q=lekki+epe+expressway+oral+estate&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      {/* </div> */}
    </section>
  );
}

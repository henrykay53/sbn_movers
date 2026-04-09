// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import { useState } from "react";

// export default function ContactForm() {
//   const { register, handleSubmit, reset } = useForm();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true);

//     try {
//       await emailjs.send(
//         "service_gj1ar8s",     
//         "template_yud8qgg",    
//         data,
//         "zZ0DD7NvjzVzP0ubs"   
//       );

//       alert("Request submitted successfully!");
//       reset();
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="
//         bg-white/10 backdrop-blur-md 
//         border border-white/10
//         shadow-xl 
//         rounded-2xl 
//         p-6 sm:p-8 
//         space-y-5
//       "
//     >
//       <h2 className="text-xl font-semibold mb-2 text-white">
//         Request a Quote
//       </h2>

//       <p className="text-gray-200 text-sm mb-4">
//         Fill in your details and we’ll get back to you quickly
//       </p>

//       {/* Inputs */}
//       <input
//         {...register("name", { required: true })}
//         placeholder="Full Name"
//         className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
//       />

//       <input
//         {...register("phone", { required: true })}
//         placeholder="Phone Number"
//         className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
//       />

//       <input
//         {...register("email")}
//         placeholder="Email Address"
//         className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <input
//           {...register("from")}
//           placeholder="Moving From"
//           className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
//         />

//         <input
//           {...register("to")}
//           placeholder="Moving To"
//           className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
//         />
//       </div>

//       <textarea
//         {...register("message")}
//         placeholder="Additional Details"
//         rows={4}
//         className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
//       />

//       {/* Button */}
//       <button
//         disabled={loading}
//         className="
//           w-full 
//           bg-white text-secondary 
//           py-3 rounded-full 
//           font-semibold
//           transition-all duration-300
//           hover:scale-105 hover:shadow-xl
//           active:scale-95
//           disabled:opacity-50 disabled:cursor-not-allowed
//         "
//       >
//         {loading ? "Sending..." : "Submit Request →"}
//       </button>
//     </form>
//   );
// }




import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // 1. Send to YOU (admin)
      await emailjs.send(
        "service_gj1ar8s",
        "template_yud8qgg",
        data,
        "zZ0DD7NvjzVzP0ubs"
      );

      // 2. Send AUTO-REPLY to CLIENT
      await emailjs.send(
        "service_gj1ar8s",
        "template_jduloyg", 
        data,
        "zZ0DD7NvjzVzP0ubs"
      );

      toast.success("Request sent successfully 🚚");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        bg-white/10 backdrop-blur-md 
        border border-white/10
        shadow-xl 
        rounded-2xl 
        p-6 sm:p-8 
        space-y-5
      "
    >
      <h2 className="text-xl font-semibold mb-2 text-white">
        Request a Quote
      </h2>

      <p className="text-gray-200 text-sm mb-4">
        Fill in your details and we’ll get back to you quickly
      </p>

      <input
        {...register("name", { required: true })}
        placeholder="Full Name"
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
      />

      <input
        {...register("phone", { required: true })}
        placeholder="Phone Number"
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
      />

      <input
        {...register("email", {required: true})}
        placeholder="Email Address"
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          {...register("from")}
          placeholder="Moving From"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
        />

        <input
          {...register("to")}
          placeholder="Moving To"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <textarea
        {...register("message")}
        placeholder="Additional Details"
        rows={4}
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
      />

      <button
        disabled={loading}
        className="
          w-full 
          bg-white text-secondary 
          py-3 rounded-full 
          font-semibold
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Sending..." : "Submit Request →"}
      </button>
    </form>
  );
}
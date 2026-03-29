import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Later: send to backend / email service
    alert("Request submitted successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

      <input
        {...register("name", { required: true })}
        placeholder="Full Name"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("phone", { required: true })}
        placeholder="Phone Number"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("email")}
        placeholder="Email Address"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("from")}
        placeholder="Moving From"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("to")}
        placeholder="Moving To"
        className="w-full border p-3 rounded"
      />

      <textarea
        {...register("message")}
        placeholder="Additional Details"
        className="w-full border p-3 rounded"
      />

      <button className="w-full bg-primary text-white py-3 rounded hover:opacity-90 transition">
        Submit Request
      </button>
    </form>
  );
}
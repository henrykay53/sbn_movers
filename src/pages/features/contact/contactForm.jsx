import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 max-w-md"
    >
      <input {...register("name")} placeholder="Name" className="border p-2" />
      <input {...register("phone")} placeholder="Phone" className="border p-2" />
      <input {...register("email")} placeholder="Email" className="border p-2" />

      <textarea
        {...register("message")}
        placeholder="Message"
        className="border p-2"
      />

      <button className="bg-primary text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
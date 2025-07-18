import { useForm } from "react-hook-form";

export default function ContactForm() {
  // Handle form input errors
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-[#7c8c7d] text-xl font-semibold mb-4">Contact Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
       
       {/*Name input field*/}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
        
        {/*Email input field*/}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span className="text-red-500">Email is required</span>}
        
        {/*Message input field*/}
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-[#7c8c7d]"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <span className="text-red-500 text-center">Message is required</span>}
        <button
          type="submit"
          className="bg-[#7c8c7d]  text-white px-5 py-2 rounded hover:bg-white hover:text-[#7c8c7d] transition duration-300 border border-[#7c8c7d] hover:border-[#7c8c7d] font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

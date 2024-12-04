import { useState } from "react";
import emailjs from "emailjs-com";
import useGlobalStore from "../../store";
import { BiSend } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { toast } from "react-toastify";

const ContactMe = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ji3ie5n", // Replace with your service ID
        "template_gg49zv7", // Replace with your template ID
        formData,
        "zE-pfdl1qiyU3sWqk" // Replace with your user ID
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("contact")
          ? "h-[600px] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col overflow-hidden gap-y-8 z-10 items-center transition-all duration-1000 flex-shrink-0 ease-in-out`}
    >
      <h1 className="text-start w-full text-4xl">Contact Me</h1>
      <div className="flex w-full h-fit">
        {/* For quick mail or whatsapp message */}
        <div className="flex w-2/5 h-96  p-2 flex-col items-center justify-evenly">
          <div className="h-fit w-full rounded-md bg-black flex flex-col items-center justify-center gap-y-2 p-4 border border-white border-solid">
            <MdEmail
              className="text-white bg-primary-500 p-2 rounded-md"
              size={48}
            />
            <p className="text-white">Send me a Mail:</p>
            <a
              className="cursor-pointer text-primary-500 hover:underline hover:underline-offset-4"
              href="mailto:revanthmbontha@gmail.com"
              target="_blank"
            >
              Click Here
            </a>
          </div>
          <div className="h-fit w-full rounded-md bg-black flex flex-col items-center justify-center gap-y-2 p-4 border border-white border-solid">
            <FaWhatsapp
              className="text-white bg-primary-500 p-2 rounded-md"
              size={48}
            />
            <p className="text-white">Connect on Whatsapp:</p>
            <a
              className="cursor-pointer text-primary-500 hover:underline hover:underline-offset-4"
              href="https://api.whatsapp.com/send?phone=918309805502&text=Hello!"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </div>

        {/* To send a message for a contract */}
        <form
          onSubmit={handleSubmit}
          className="flex relative w-3/5  p-2 h-96  flex-col justify-evenly gap-y-4"
        >
          <div className="relative w-full">
            <label
              className="absolute bg-black px-3 -top-3 left-5 text-white"
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="h-16 w-full focus:border-primary-500 rounded-md outline-none bg-black p-4 text-white border-white border border-solid"
            />
          </div>
          <div className=" relative w-full">
            <label
              className="absolute bg-black px-3 -top-3 left-5 text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="h-16 w-full rounded-md focus:border-primary-500 outline-none bg-black p-4 text-white border-white border border-solid"
            />
          </div>
          <div className=" relative w-full">
            <label
              className="absolute bg-black px-3 -top-3 left-5 text-white"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Detail your project idea here!"
              value={formData.message}
              onChange={handleChange}
              className="bg-black border w-full border-white border-solid outline-none focus:border-primary-500 text-white rounded-md p-4"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-300 p-4 px-8 text-lg mx-auto w-fit h-fit rounded-md flex items-center gap-x-4"
          >
            Send Message <BiSend className="inline-block" size={32} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

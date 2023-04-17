import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { IContact } from "@/types";

// type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
interface IPropTypes {
  contacts: {
    items: IContact[];
  };
}

function ContactMe({ contacts }: IPropTypes) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:follow.timothy@gmail.com?subject=${formData.subject}`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-3 md:space-y-7 items-center pt-16">
        <h4 className="text-1xl md:text-3xl px-6 md:px-0 font-semibold text-center">
          I can bring solutions to your projects. <br />
          <span className="decoration-[#f7ab0a] underline">
            {" "}
            Let&apos;s Talk
          </span>
        </h4>
        <div className="space-y-1 md:space-y-3">
          <a href={`tel:${+contacts.items[0].attributes.phone}`}>
            <div className="flex items-center space-x-3 md:space-x-5 justify-center w-max mx-auto">
              <PhoneIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
              <p className="text-1xl md:text-2xl">
                {contacts.items[0].attributes.phone}
              </p>
            </div>
          </a>
          <a href={`mailto:${contacts.items[0].attributes.email}`}>
            <div className="flex items-center space-x-3 md:space-x-5 md:mt-2 justify-center w-max mx-auto">
              <EnvelopeIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
              <p className="text-1xl md:text-2xl">
                {contacts.items[0].attributes.email}
              </p>
            </div>
          </a>
          <div className="flex items-center space-x-3 md:space-x-5 justify-center w-max mx-auto">
            <MapPinIcon className="text-[#f7ab0a] h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">
              {contacts.items[0].attributes.address}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-2 w-[400px] md:w-full ">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput "
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="contactInput "
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

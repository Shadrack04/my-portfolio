import { Mail, MapPin, Smartphone } from "lucide-react";
import React from "react";

export default function Info() {
  return (
    <div>
      <div className=" flex flex-col mb-4">
        <h2 className=" text-2xl font-bold text-primary-text mb-4">Contact</h2>

        <p className=" text-content-text text-lg/relaxed">
          Reach out for collaboration
        </p>
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex gap-4 ">
          <Mail className=" text-primary-color size-8" />
          <div>
            <p className=" text-primary-text text-lg">Email</p>
            <p className=" text-content-text">shadrackjames04@gmail.com</p>
          </div>
        </div>
        <div className=" flex gap-4 ">
          <Smartphone className=" text-primary-color size-8" />
          <div>
            <p className=" text-primary-text text-lg">Phone</p>
            <p className=" text-content-text">+234 706 4350 081</p>
          </div>
        </div>
        <div className=" flex gap-4 ">
          <MapPin className=" text-primary-color size-8" />
          <div>
            <p className=" text-primary-text text-lg">Location</p>
            <p className=" text-content-text">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

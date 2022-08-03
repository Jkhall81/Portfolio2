import React from "react";

// import services data
import { services } from "../data";

const Services = () => {
  return (
    <section className="section bg-tertiary" id="services">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            aliquam sequi ratione incidunt reprehenderit ea odit ipsam
            doloremque dicta harum consectetur quos mollitia, ducimus tempora
            earum tempore natus delectus quis eligendi aperiam autem laboriosam.
            Reprehenderit tempora minima doloremque modi corporis.
          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                {/* icon */}
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { Clock, Wallet, ShieldCheck, BookOpen } from "lucide-react";

const AdvantageCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-4 p-4">
    <div className="bg-white rounded-full p-6 shadow-md">
      <Icon className="h-10 w-10 text-teal-600" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-white/80 text-sm max-w-xs">{description}</p>
  </div>
);

const Advantages = () => {
  const cards = [
    {
      icon: Clock,
      title: "Save Time",
      description: "No More Switching For Packages Or Plans.",
    },
    {
      icon: Wallet,
      title: "Save Money",
      description: "Compare, Negotiate, And Choose The Best.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Network",
      description: "A Trusted Network Of 7000+ Travel Agents",
    },
    {
      icon: BookOpen,
      title: "Multiple Options",
      description: "Itineraries & Travel Tips From Trusted Agents",
    },
  ];

  return (
    <section className="bg-teal-400 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Our Advantages</h2>
        <p className="text-white/90 mt-2 text-sm">
          You can rely on our experience and the quality of services we provide. <br />
          Here are other reasons to book tours at Treat Holidays
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16">
        {cards.map((card, index) => (
          <AdvantageCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;

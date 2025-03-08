"use client";

import Image from "next/image";
import { ArrowRight, Award, Globe2, Target, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-white/90">
              We are a team of passionate individuals dedicated to creating innovative solutions that empower businesses
              and organizations to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Our mission is to revolutionize how organizations connect with their audience through cutting-edge
                technology and exceptional service. We believe in creating solutions that not only meet todays needs but
                anticipate tomorrows challenges.
              </p>
              <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Globe2, label: "Countries Served", value: "30+" },
              { icon: Target, label: "Projects Completed", value: "1000+" },
              { icon: Award, label: "Awards Won", value: "50+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jamil Jim",
                role: "Frontend Developer",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s",
              },
              {
                name: "Md Al Amin",
                role: "Lead Developer",
                image:
                  "https://yt3.googleusercontent.com/LgcG9LQgt_u0t-Ev4QxfHs7UgzYc-vKscV_UaQahcgFyD2WcivpwKxS29Aa5NtepZTJB6CbHyA=s160-c-k-c0x00ffffff-no-rj",
              },
              {
                name: "Harique Rahman",
                role: "Backend Developer",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdy8Z3_PPVd4dm9kMHnDCsy0CCTIH1EOtuQ&s",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from customer service to product development.",
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of integrity and transparency in all our interactions.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

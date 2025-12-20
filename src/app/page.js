import HeroSection from "@/pages/Home/HeroSection";
import Categories from "@/pages/Home/Categories";
import Features from "@/pages/Home/Features";
import Testimonials from "@/pages/Home/Testimonials";
import WhyChooseUs from "@/pages/Home/Why Choose Us";
import Blog from "@/pages/Home/Blog";
import  Download from "@/pages/Home/Download";
import React from 'react';

const page = () => {
  return (
    <div>
        <HeroSection/>
        <Categories/>
        <Features/>
        <Testimonials/>
        <WhyChooseUs/>
        <Blog/>
        <Download/>
    </div>
     )
}

export default page

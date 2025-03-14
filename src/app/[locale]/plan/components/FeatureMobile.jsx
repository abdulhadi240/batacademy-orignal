"use client";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Feature_Mobile from "./Feature_Mobile";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default class ExternalControlledCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0, // Initialize the current slide index
      autoPlay: true,  // Set autoplay state
    };
  }

  // Function to move to the next slide dynamically using the length of data
  next = () => {
    const totalSlides = this.props.data?.length || 0;
    this.setState((state) => ({
      currentSlide: totalSlides ? (state.currentSlide + 1) % totalSlides : 0,
    }));
  };

  // Function to move to the previous slide dynamically
  prev = () => {
    const totalSlides = this.props.data?.length || 0;
    this.setState((state) => ({
      currentSlide: totalSlides
        ? state.currentSlide === 0
          ? totalSlides - 1
          : state.currentSlide - 1
        : 0,
    }));
  };

  // Toggle autoplay on and off
  changeAutoPlay = () => {
    this.setState((state) => ({
      autoPlay: !state.autoPlay,
    }));
  };

  // Update current slide based on external input
  updateCurrentSlide = (index) => {
    if (this.state.currentSlide !== index) {
      this.setState({ currentSlide: index });
    }
  };

  render() {
    const buttonStyle = {
      fontSize: 20,
      padding: "5px 20px",
      margin: "5px 0px",
    };

    const containerStyle = { margin: "5px 0 20px" };

    return (
      <div className="flex flex-col gap-4 mt-32">
        {/* Carousel Component */}
        <Carousel
          autoPlay={this.state.autoPlay}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          swipeable={false}
        >
          {this.props.data &&
            this.props.data.map((item, index) => (
              <Feature_Mobile
                key={item.slug || index}
                image={item.image}
                icon={"/icon1.png"}
                heading={item.name}
                number={item.index}
                right={index % 2 === 0} // Even index: true, Odd index: false
                slug={item.slug}
                text={item.summary}
                locale={this.props.locale}
              />
            ))}
        </Carousel>
        <div style={containerStyle} className="flex justify-center gap-3 mt-16">
          {/* Prev Button */}
          <button
            onClick={this.prev}
            style={buttonStyle}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          {/* Next Button */}
          <button
            onClick={this.next}
            style={buttonStyle}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    );
  }
}

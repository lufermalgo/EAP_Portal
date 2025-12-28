import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InitiativeCard, Initiative } from './InitiativeCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface InitiativesCarouselProps {
  initiatives: Initiative[];
  onSelectInitiative: (id: string) => void;
}

export function InitiativesCarousel({ initiatives, onSelectInitiative }: InitiativesCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="relative max-w-[1000px] w-full">
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden lg:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden lg:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="px-3">
              <InitiativeCard
                initiative={initiative}
                onClick={() => onSelectInitiative(initiative.id)}
              />
            </div>
          ))}
        </Slider>

        {/* Custom Dots Styling */}
        <style dangerouslySetInnerHTML={{__html: `
          .slick-dots {
            bottom: -50px;
          }
          
          .slick-dots li button:before {
            font-size: 12px;
            color: #CBD5E1;
            opacity: 1;
          }
          
          .slick-dots li.slick-active button:before {
            color: #4285F4;
            opacity: 1;
          }
          
          .slick-slide > div {
            margin: 0;
          }
          
          .slick-track {
            display: flex;
            gap: 0;
          }
        `}} />
      </div>
    </div>
  );
}
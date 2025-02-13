import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        {/* I&apos;m Modupe, but people call me &quot;Goke.&quot; I&apos;m a frontend developer, and I specialize in efficient React apps and CSS & HTML that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible.

        My professional life has been 100% driven by my passion for design and structure. I&apos;ve had the opportunity to intern at a talent development agency &quot;Zuri&quot;, where I was able to utilise skills learnt to collaborate with developers, provide solutions to problems and work on projects. After that, I was a front-end developer at Techaton, where I worked on projects weekly that involved bringing beautiful modern UI/UX designs to life.

        Right now, I&apos;m excited about the still very complicated Web3, and working towards becoming a React senior. In the following years, I also plan to explore the &quot;server-side&quot; more and become a better-rounded full-stack dev. */}
        I am Feneri Alias.
        I am a full-stack developer with practical and strong experience and has mastered various complete skills in providing high quality code services over the past 6 years.
        My strengths are mostly front-end and back-end development using React/Next with relational/non-relational databases.
        My main experience in Web development is to provide unlimited support, a smart user interface, and clear functionality.
      </SectionText>
    <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
      <>
      {TimeLineData.map((item, index) => (
        <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
          <CarouselItem index={index} id={`carousel__item-${index}`} active={activeItem} onClick={(e) => handleClick(e, index)}>
            <CarouselItemTitle>
              {item.year}
              <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    style={{marginTop: "1rem"}}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
            </CarouselItemTitle>
            <CarouselItemText>{item.text}</CarouselItemText>
          </CarouselItem>
        </CarouselMobileScrollNode>
      ))}
      </>
    </CarouselContainer>
    <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { FaGithub } from 'react-icons/fa';

import Friensphere from '../../assets/friensphereinsomnia.png';
import JSCodeQuiz from '../../assets/JSCodeQuiz.png';
import TechTales from '../../assets/TechTales-Blogging.png';
import Texterra from '../../assets/Texterra-PWA.png';
import './portfolio.css';

const items = [
  {
    src: Friensphere,
    altText: 'Friendsphere',
    caption: 'Friendsphere',
    key: 1,
    githubLink: 'https://github.com/rlobz/FriendSphere-API'
  },
  {
    src: JSCodeQuiz,
    altText: 'JS Code Quiz',
    caption: 'JS Code Quiz',
    key: 2,
    githubLink: 'https://github.com/rlobz/JSCodeQuiz'
  },
  {
    src: TechTales,
    altText: 'Tech Tales',
    caption: 'Tech Tales',
    key: 3,
    githubLink: 'https://github.com/rlobz/TechTales-Blogging'
  },
  {
    src: Texterra,
    altText: 'Texterra',
    caption: 'Texterra',
    key: 4,
    githubLink: 'https://github.com/rlobz/Texterra-PWA'
  },
];

function Portfolio(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="portfolio-image" />
        <CarouselCaption
    captionText={
      item.githubLink ? (
        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub size={34} /> View on GitHub
        </a>
      ) : null
    }
    captionHeader={item.caption}

  />
</CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      className="portfolio-carousel"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Portfolio;

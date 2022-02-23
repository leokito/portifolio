import React, {useState} from 'react';
import { SliderSection, ArrowCircleLeft, ArrowCircleRight, Img } from './style';
import { imgData } from './imgData';

const SliderComp = ()=> {

  const [current, setCurrent] = useState(0);
  const length = imgData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current +1)
  };

  console.log(current)

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current -1)
  }

  if(!Array.isArray(imgData) || length <=0) {
    return null;
  }

  return (
    <SliderSection>
      <ArrowCircleLeft onClick={prevSlide}/>
      <ArrowCircleRight onClick={nextSlide} />
        {
          imgData.map((slide, index) => {
            return (
              <div className={index=== current ? 'slide active' : 'slide'} key="index">
                {index === current && (
                  <Img src={slide.image} alt="img"/>)
                }
            </div>
            )
          })
        }
    </SliderSection>
  )
}

export default SliderComp
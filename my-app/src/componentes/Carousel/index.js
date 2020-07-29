import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title} from './styles';
import VideoCard from './components/VideoCard';
import Slider,{SliderItem} from './components/Slider'

function Carousel({
  ignoreFirstVideo,
  category, urlExtra,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  //const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  
  return (
    <VideoCardGroupContainer as="a" href={urlExtra} target="_blank">
      {categoryTitle && (
        <>
          <Title target="_blank" style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;

import React, {FC, useEffect, useState} from 'react';
import type {MandatoryImageProps} from 'types/global';
import Image from "../../components/atoms/SafeImage/SafeImage";

export interface ImageGalleryProps {
  images: MandatoryImageProps[];
}

const ImageProduct: FC<ImageGalleryProps> = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState<MandatoryImageProps | undefined>(undefined);
  useEffect(() => {
    if (images?.length) {
      setCurrentSlide(images[0])
    }
  }, [images])
  return (
    <div className='w-max max-[580px]:w-full flex max-[580px]:flex-col-reverse max-[580px]:items-center'>
      <div>
        <div
          className='flex flex-wrap gap-3 max-[580px]:flex max-[580px]:justify-center max-[580px]:mb-4'>
          {images
            ?.slice(0, 6)
            ?.map((item) => (
              <div
                className={`p-2 bg-tr cursor-pointer max-[980px]:w-12 max-[980px]:h-12 border border-black transition-opacity hover:opacity-100 disabled:hover:opacity-50
              ${currentSlide?.src === item.src ? 'opacity-100 disabled:hover:opacity-100'
                  : 'opacity-50'}`}
                key={`${item.src}`} onClick={() => item.src !== currentSlide?.src ? setCurrentSlide(item) : null}>
                <Image
                  src={item.src}
                  width='44px'
                  height='44px'
                  alt={item.alt}
                />
              </div>
            ))}
        </div>
      </div>


      {currentSlide &&
        <div
          className='w-[300px] h-[300px] min-w-[300px] min-h-[300px] mx-5 max-[980px]:w-[200px] max-[980px]:h-[200px] max-[980px]:min-w-[200px] max-[980px]:min-h-[200px]'>
          <Image
            className='flex w-[300px] h-[300px] max-[980px]:w-[200px] max-[980px]:h-[200px] p-4'
            src={currentSlide.src}
            width='600px'
            height='600px'
            alt={currentSlide.alt}
          />

        </div>
      }
    </div>
  );
};

export default ImageProduct;
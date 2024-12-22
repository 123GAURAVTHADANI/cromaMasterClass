import { Carousel } from "react-responsive-carousel";

function CarouselComponent() {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1734693156/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Heart%20sale/Dec/Revised%20HPnLP/HP%20Rotating/HP_AddToHeartSale_20Dec2024_pflhyj.png" />
      </div>
      <div>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1734788049/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/22122024/Desktop/HP_Rotating_Pixel_22Dec2024_a187g1.jpg" />
      </div>
      <div>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1734788044/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/22122024/Desktop/HP_Rotating_Laptop_22Dec2024_dx9w4x.jpg" />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;

import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectData {
  name: string;
  description: string;
  stack: string[];
  image: StaticImageData;
  id: number;
}

interface CarouselProps {
  data: ProjectData;
}

const Card: React.FC<CarouselProps> = ({ data }) => {
  return (
    <div>
      <h5>{data.name}</h5>
    </div>
  );
};

export default Card;

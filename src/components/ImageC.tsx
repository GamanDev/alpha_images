import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IProps {
  i: string;
  k: number;
}

const ImageC = ({ i, k }: IProps) => {
  return (
    <div className="flex justify-center">
      <Card key={i}>
        <CardHeader>
          <div>
            <CardTitle>Lorem, ipsum.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet. mins to cook.
            </CardDescription>
            <Image
              src={`/img/${k}.jpg`}
              width={500}
              height={500}
              className="w-80 h-52 object-cover"
              alt="Picture of the author"
            />
          </div>
        </CardHeader>
        <CardFooter>
          <Button>Button</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ImageC;

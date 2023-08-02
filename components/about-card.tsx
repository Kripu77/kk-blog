import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AboutCardProps {}

const AboutCard = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center max-w-screen-sm mx-auto mt-12 space-x-10 space-y-10">
      <Card className="w-[350px] h-[250px] flex flex-col items-center justify-center">
        <CardContent>
          <p>
            {" "}
            <span className="font-bold">🎓BIT</span> @Kent Institute Australia
          </p>
        </CardContent>
        <CardContent>
          <p>
            {" "}
            <span className="font-bold">📍 Currently</span> @Sydney, Australia
          </p>
        </CardContent>
        <CardContent>
          <p>
            {" "}
            <span className="font-bold">💻Work</span> @Evie Networks
          </p>
        </CardContent>
        <CardContent>
          <p>
            {" "}
            <span className="font-bold">🌎Fluency</span> English, and Nepali
          </p>
        </CardContent>
      </Card>
      <section>
        <Image
          src="https://res.cloudinary.com/kripukhadka-com/image/upload/v1672618115/7f15458a-ba9f-46fd-8fb2-d52055afeadf_tmffjt.avif"
          width={288}
          height={278}
          alt="body image undraw"
        ></Image>
      </section>
    </section>
  );
};

export default AboutCard;

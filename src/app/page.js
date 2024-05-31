import Image from "next/image";
import Link from "next/link";
import grumpy from "../../public/grumpy.png";
import text from "../../public/grumptext.png";
import roadmap from "../../public/roadmap.png";
import twitter from "../../public/twitterlogo.jpg";
import pump from "../../public/pumplogo.jpg";
import telegram from "../../public/telegramlogo.jpg";

export default function Home() {
  return (
    <div className="">
      <header className="sticky top-0 bg-[#df3535] z-10">
        <div className="container p-8 font-lilita text-lg sm:text-3xl lg:text-6xl text-white mx-auto flex w-3/4 gap-8 md:gap-0 justify-around items-center">
          <div>
            <Link href="#about">About</Link>
          </div>
          <div>
            <Link href="#tokenomics">Tokenomics</Link>
          </div>
          <div>
            <Link href="#roadmap">Roadmap</Link>
          </div>
        </div>
      </header>
      <hero className="relative" id="hero">
        <div className="parallax mx-auto pt-10 container grid grid-flow-col items-center ">
          <div>
            <Image
              width={450}
              src={text}
              alt="Grumpy Trump"
              className="mx-auto animate-wiggle"
            ></Image>
          </div>
          <div>
            <Image
              width={600}
              src={grumpy}
              alt="Grumpy Trump"
              className="mx-auto "
            ></Image>
          </div>
          <div>
            <Image
              width={450}
              src={text}
              alt="Grumpy Trump"
              className="mx-auto animate-wiggle"
            ></Image>
          </div>
        </div>
      </hero>
      {/* ca */}
      <div className="w-full h-24 sm:h-32 md:h-48 bg-hero-pattern bg-repeat-x bg-contain"></div>
      <div id="about">
        <div className="container mx-auto text-center pt-40 mb-16">
          <p className="inline p-2 rounded-lg font-orbitron font-bold text-white bg-[#df3535] text-md md:text-3xl  lg:text-5xl">
            CA: XXXXXXXXXXXXXXXXXXXXXXX
          </p>
        </div>
      </div>
      {/* ABOUT */}
      <div className="container mx-auto items-center grid grid-flow-col grid-cols-2 mt-10">
        <div className="text-center font-lilita text-xl md:text-3xl flex gap-8 flex-col">
          <p>
            Suport{" "}
            <span className="text-[#df3535] text-2xl md:text-5xl">$GRUMP</span>{" "}
            become{" "}
            <span className="text-blue-800  text-2xl md:text-5xl">
              PRESIDENT
            </span>
            .
          </p>
          <p>
            <span className="text-blue-800  text-2xl md:text-5xl">$GRUMP</span>{" "}
            will win after the bonding curve hits <span>100%</span>.
          </p>
          <p>
            Don’t fade{" "}
            <span className="text-[#df3535]  text-2xl md:text-5xl">$GRUMP</span>
            .
          </p>
        </div>
        <div className="mx-auto">
          <Image
            src={grumpy}
            alt="trump"
            className="scale-x-[-1] w-full md:w-3/4"
          ></Image>
        </div>
      </div>
      {/* TOKENOMICS */}
      <div className="pt-24 md:pt-40" id="tokenomics">
        <h2 className="text-5xl md:text-9xl text-center font-lilita text-[#df3535]">
          T<span className="text-blue-800">o</span>ken
          <span className="text-blue-800">o</span>mics
        </h2>
        <div className="container mx-auto grid grid-flow-row md:grid-flow-col grid-rows-3 md:grid-rows-1 md:grid-cols-3 m-20 gap-4">
          <div className="rounded-2xl border-black border-4 p-4 mx-4 md:mx-0 text-center font-lilita">
            <h3 className="text-5xl pb-12">LP Burned</h3>
            <p className="text-3xl">100%</p>
          </div>
          <div className="rounded-2xl border-black border-4 p-4 mx-4 md:mx-0 text-center font-lilita">
            <h3 className="text-5xl pb-12">Total Supply</h3>
            <p className="text-3xl">1 Billion</p>
          </div>
          <div className="rounded-2xl border-black border-4 p-4 mx-4 md:mx-0 text-center font-lilita">
            <h3 className="text-5xl pb-12">Tax</h3>
            <p className="text-5xl">0%</p>
          </div>
        </div>
      </div>
      {/* ROADMAP */}
      <div id="roadmap" className="pt-10 md:pt-40">
        <h2 className=" text-5xl md:text-9xl text-center font-lilita text-[#df3535]">
          R<span className="text-blue-800">o</span>adm
          <span className="text-blue-800">a</span>p
        </h2>
        <div className="container mx-auto m-20">
          <Image
            src={roadmap}
            alt="roadmap"
            className="w-full md:w-3/4 mx-auto"
          />
        </div>
      </div>
      <footer className="mb-20">
        <div className=" grid grid-cols-2 items-center justify-center">
          <div className="grid grid-flow-col grid-cols-3">
            <Link href={""} className="hover:scale-110 transition-transform">
              <Image className="w-3/4 mx-auto" src={telegram} alt="telegram" />
            </Link>
            <Link href={""} className="hover:scale-110 transition-transform">
              <Image className="w-3/4 mx-auto" src={pump} alt="pump" />
            </Link>
            <Link
              href={"https://x.com/solanagrump"}
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Image className="w-3/4 mx-auto" src={twitter} alt="twitter" />
            </Link>
          </div>
          <div className="">
            <Image src={grumpy} alt="grumpy" className="w-2/5 mx-auto" />
            <Image src={text} alt="grump" className="w-2/5 mx-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
}

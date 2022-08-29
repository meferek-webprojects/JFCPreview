import Image from "next/image";
import aboutImage from '../../public/images/globe.jpg';

const About = () => {

    return (
        <>
            <div className="block lg:grid lg:grid-cols-2">
                <div className="xl:min-h-[40rem] min-h-[35rem] h-full w-full relative">
                    <Image alt="image" src={ aboutImage } layout="fill" objectFit="cover" objectPosition="center" quality="60" loading="eager"/>
                </div>
                <div className="w-full flex bg-blue-100">
                    <p className="p-12 my-auto font-proxima text-xl xl:text-2xl xl:leading-loose leading-loose">
                        JFC jest miedzynarodową firmą projektującą i wdrażażającą
                        innowacyjne rozwiązania w zakresie branży budowlanej, rolniczej, przeładunkowej i morskiej.<br/><br/>
                        Dzięki 35-letniemu doświadczeniu nasze rozwiązania wywodzą się ze zrozumienia klienta, innowacyjnego projektu i specjalistycznej inżynierii.
                    </p>
                </div>
            </div>
            <div className="w-full aspect-video mx-auto border-[10px] border-blue-700 bg-blue-700 mt-5 md:mt-10 xl:mt-20">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8Rv0H818-cA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    );

}
export default About;
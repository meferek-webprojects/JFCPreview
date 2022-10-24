import CountUp from 'react-countup';

const Counter = () => {

    return (
        <div className="bg-blue-500 mt-16 md:mt-32" id="counter">
            <div className="py-20">
                <h5 className="xl:text-2xl xl:leading-10 leading-5 md:text-xl text-l font-proximabold  text-blue-100/[.60] text-center uppercase">Budujemy zaufanie</h5>
                <h2 className="xl:text-5xl xl:leading-7 leading-6 md:text-4xl text-3xl font-prometobold  text-white text-center uppercase">Liczby mówią same za siebie</h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 pb-24">
                <div className="text-center text-white xl:mt-20">
                    <i className="bi bi-bag-fill text-7xl md:text-8xl"></i>
                    <h3 className="font-proximabold mt-8 text-4xl"><CountUp end={289} duration={20} enableScrollSpy={true}/></h3>
                    <h3 className="font-proximabold uppercase mt-8 text-2xl text-white/[.75]">Różnych <br/> produktów</h3>
                </div>
                <div className="text-center text-white mt-20">
                    <i className="bi bi-fuel-pump-fill text-7xl md:text-8xl"></i>
                    <h3 className="font-proximabold mt-8 text-4xl"><CountUp end={144} duration={20} enableScrollSpy={true}/> MLN</h3>
                    <h3 className="font-proximabold uppercase mt-8 text-2xl text-white/[.75]">Litrów paliwa wydanych <br/> przez nasze zbiorniki</h3>
                </div>
                <div className="text-center text-white mt-20">
                    <i className="bi bi-people-fill text-7xl md:text-8xl"></i>
                    <h3 className="font-proximabold mt-8 text-4xl"><CountUp end={4549} duration={20} enableScrollSpy={true}/> </h3>
                    <h3 className="font-proximabold uppercase mt-8 text-2xl text-white/[.75]">Zadowolonych <br/> klientów</h3>
                </div>
            </div>
        </div>
    );
}

export default Counter;
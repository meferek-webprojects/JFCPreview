type Props = {
    main: string,
    secondary?: string,
    id?: string,
    className?: string,
}


const Title = ({ main, secondary, id, className }: Props ) => {
    return (
        <div className={`py-16 xl:py-32 px-5 text-center${ className ? ` ${className}` : "" }`} id={ id ? id : undefined }>
            { secondary ?
                <h5 className="xl:text-2xl xl:leading-10 leading-5 md:text-xl text-l font-proximabold text-blue-500/[.40] uppercase">{ secondary }</h5>
            : null }
            <h2 className="xl:text-5xl xl:leading-9 leading-7 md:text-4xl text-3xl font-prometobold text-blue-700 uppercase">{ main }</h2>
        </div>
    );
}

export default Title;
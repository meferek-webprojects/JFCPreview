type Props = {
    children: JSX.Element | JSX.Element[] | string,
    className?: string,
    id?: string,
}

export const SmContainer = ({ children, className, id }: Props) => {

    return (
        <div className={"mx-4 sm:mx-4 lg:mx-8 xl:mx-16" + (className ? " " + className : "")} id={ id ? id : undefined } >
            { children }
        </div>
    );
}

export const MdContainer = ({ children, className, id  }: Props) => {

    return (
        <div className={"mx-4 sm:mx-8 lg:mx-16 xl:mx-32" + (className ? " " + className : "")} id={ id ? id : undefined } >
            { children }
        </div>
    );
}

export const LgContainer = ({ children, className, id  }: Props) => {

    return (
        <div className={"mx-4 sm:mx-16 lg:mx-32 xl:mx-64" + (className ? " " + className : "")} id={ id ? id : undefined } >
            { children }
        </div>
    );
}

export const XlContainer = ({ children, className, id  }: Props) => {

    return (
        <div className={"mx-4 sm:mx-32 lg:mx-64 xl:mx-96" + (className ? " " + className : "")} id={ id ? id : undefined } >
            { children }
        </div>
    );
}
const Button = ({ btnUrl, btnColor, btnText }) => {
    return (
        <>
            <div className="w-full text-center mt-4">
                <a className={`w-3/4 py-2 px-4 mt-2 mx-auto my-0 inline-block text-white hover:text-white hover:!bg-dark-gray uppercase font-black drop-shadow-lg ${btnColor ? btnColor : 'bg-mid-gray'}`} href={btnUrl} title={btnText} rel="noreferrer" target="_blank">{btnText}</a>                   
            </div>
        </>
    )
}

export default Button;
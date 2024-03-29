interface estilosTailwind{
    flexCenter: string,
    paddingX: string,
    paddingY: string,
    padding: string,
    marginX: string,
    marginY: string,
    hoverBox:string,
    BoxBorder:string,
    heading2:string,
    paragraph:string,
    estilosnone:string,
}

const estilos : estilosTailwind =  
    {
    flexCenter: "flex justify-center items-center",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-38 py-6",

    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    hoverBox:"hover:shadow-md hover:scale-105 hover:duration-500 hover:rounded-lg ",
    BoxBorder:"shadow-md scale-105 duration-500 rounded-lg shadow-sky-50",
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] sm:text-xl",
    estilosnone:"bg-inherit  outline-none appearance-none"
    
}


export default estilos
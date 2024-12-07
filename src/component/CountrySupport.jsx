

const CountrySupport = () => {
    const country=[
        {
            name:'EngLand',
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-5.png'
        },
        {
            name:'India',
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-6.png'
        },
        {
            name:'Australia',
            img:'https://bracketweb.com/treckwp/wp-content/uploads/2023/04/countries-2-1.jpg'
        },
        {
            name:'Germany',
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-2.png'
        },
        {
            name:'Brazil',
            img:'https://media.istockphoto.com/id/176430982/vector/flag-of-the-brazil.jpg?s=612x612&w=0&k=20&c=dAwPAmV91dkqzDxyN35GHMwvHZvJjVykV5O-SdGlnE4='
        },

        {
            name:'Russia',
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-4.png'
        }
    ]
   
    return (
     <div>
        <div className="sm:w-6/12 mx-auto mt-5 text-center">
        <h1 className="uppercase">country you can visit</h1>
        <h1 className="sm:text-5xl text-3xl font-bold">Coutries we're supporting for the <span className="text-[#FA8714]">immigration</span></h1>
        </div>
         <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
        {
            country?.map((data,idx)=><div key={idx} className="flex justify-center mt-9 hover:border *:hover:text-white  p-4 rounded-md hover:bg-black">
                <div className="">
                 <img src={data.img} alt="" className="w-24 h-24 rounded-full"/>
                    <h1 className="mt-5 text-center transform transition-transform duration-500 group-hover:rotate-360  text-lg font-bold">{data.name}</h1>
                </div>
            </div>
            )
        }
      </div>
     </div>
       
    );
};

export default CountrySupport;
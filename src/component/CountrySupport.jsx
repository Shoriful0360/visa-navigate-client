

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
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-2.png'
        },
        {
            name:'Germany',
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-2.png'
        },
        {
            name:'Brazil',
            img:'https://html.kodesolution.com/2024/immigro-php/images/resource/flag-4.png'
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
         <div className="grid grid-cols-6">
        {
            country?.map((data,idx)=><div key={idx} className="flex justify-center mt-9 hover:border *:hover:text-white w-96 p-4 rounded-md hover:bg-black">
                <div className="">
                 <img src={data.img} alt="" />
                    <h1 className="mt-5 text-center  text-lg font-bold">{data.name}</h1>
                </div>
            </div>
            )
        }
      </div>
     </div>
       
    );
};

export default CountrySupport;
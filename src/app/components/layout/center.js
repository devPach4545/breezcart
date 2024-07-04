import Image from "next/image";
export default function Center() {
    return (
        <section className="center pt-2" >
            <div className="py-8">
                <h1 className="text-4xl font-semibold text-green-600 py-8 leading-normal" >
                    Can't start without <span className="text-green-800">BreezeCart</span>
                </h1>
                <p className="my-4 text-green-500 pb-6">From your favorite place to your cozy space,
                Delicious delights come straight to your gate.</p>
                <div>
                <button className="bg-green-800 px-4 py-2 rounded-full text-green-300 
                transform transition-transform duration-300 hover:scale-125">
                    Order Now
                </button>
            </div>
            </div>
            <div className="relative">
            <Image src={"/cart.png"} alt={'cart_icon'} layout={'fill'} objectFit="contain"/>
            </div>
        </section>
    );
}
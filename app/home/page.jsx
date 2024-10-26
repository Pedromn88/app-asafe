
"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { CardDashboard } from "../components/CardDashboard"

const Home = () => {
    const { data: session } = useSession();
    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="container-home flex justify-center items-center flex-wrap mt-8" >
            <CardDashboard href="/dashboardData" title="Red Electrica Española" img={"/redee.webp"} />
            <CardDashboard href="/PokemonList" title="Listado de Pokemon" img={"1254x800-Thunderbolt-Drawing-Pikachu-Wallpaper-Pokemon-imagen-1024x653.png"} loader={true} />
        </div >
    );
};

export default Home; 
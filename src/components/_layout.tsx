import Header from "./templates/header";
import Footer from "./templates/footer";
import Mobile from "./templates/mobile";
import Loading from "./templates/loading";

// Основной Layout
export default function Layout({ children }: any) {
    
    return (
    <>
        <Header />
        <Mobile />
        {/* <Loading /> */}
        <main className='_main'> 
            <div className="_wrapper">
                { children }
            </div>
        </main>
        <Footer />
    </>
    )
}


import Header from "./templates/header";
import Footer from "./templates/footer";
import Mobile from "./templates/mobile";
import Fade from "./templates/fade";
import Loading from "./templates/loading";
import Head from "next/head";
import PopupContact from "./templates/popupContact";
import Symbol from "./templates/symbol";

// Основной Layout
export default function Layout({ children }: any) {


    return (
    <>
        <Head>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=PT+Sans:regular,italic,700,700italic" rel="stylesheet" />
        </Head>
        <Header />
        <Fade />
        <Loading />
        <Mobile />
        {/* <Symbol /> */}
        {/* <PopupContact  /> */}

        {/* <Loading /> */}
        <div className="_wrapper">
            <main className='_main'> 
                { children }
            </main>
        </div>

        <Footer />
    </>
    )
}


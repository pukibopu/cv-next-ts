import type { AppProps } from 'next/app'
import "@/scss/index.scss"
import  {Raleway,Fira_Code} from "next/font/google"
const ralway=Raleway({subsets:["latin"]})
const firaCode=Fira_Code({subsets:["latin"],
weight:["300","400","500","600","700"]})
export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <style jsx global>{`
        :root{
          --raleway: ${ralway.style.fontFamily};
          --fira-code: ${firaCode.style.fontFamily}; 
        }
      `}</style>
     <Component {...pageProps} />
    </>
  )
  
 
}

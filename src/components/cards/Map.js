import React from 'react';
import { useEffect } from 'react';

export default function Map(props) {



    // useEffect (() => {
    //     const script = document.createElement("script");
    //     script.src = "https://public.flourish.studio/resources/embed.js";
    //     script.async = true;
    //     document.getElementsByClassName("overview__map")[0].appendChild(script);
    //     return () => {
    //         document.getElementsByClassName("overview__map")[0].removeChild(script);
    //       }
    //     }, []);

    return ( 
        <div className='overview__map' style={{display:'flex', alignItems: 'center', justifyContent: 'center'}} >
            <p >When I grow up, I am going to be a cool map </p>
            {/* <iframe 
                src = "https://covid19.biglocalnews.org/world-map/?embed=world&l=de#/"
                frameBorder="0" 
                scrolling="no"
                loading = "lazy"
                width="400px" height="600px" 
            > </iframe>  */}

            {/* <div className="flourish-embed flourish-map" data-src="story/225979"><script src="https://public.flourish.studio/resources/embed.js"></script></div> */}


        </div>
    )
}



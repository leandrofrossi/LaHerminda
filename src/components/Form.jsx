export const Form = () => {

    return (
                
        <form className="flex flex-col justify-center items-center gap-2 p-5 w-full md:w-1/2">

          <h2 className="text-3xl p-4 font-bold italic">Contactanos</h2>          
          
          <label for="name" className="block mt-2 text-base font-medium dark:text-text-header">Tu Nombre:</label>
          <div className="flex w-full">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <input type="text" id="name" required className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-base p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-text-header dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan Perez"/>
          </div>          

          <label for="email-address-icon" className="block mt-2 text-base font-medium dark:text-text-header">Tu Email:</label>
          <div className="flex w-full">            
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg className="w-4 h-11 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </span>            
            <input type="email" id="email-address-icon" required className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-base p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-text-header dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="juanperez@email.com"/>
          </div>     

          
          <label for="message" className="block mt-2 text-base font-medium dark:text-text-header">Tu Mensaje:</label>
          <textarea id="message" rows="4" required className="resize-none block p-2.5 w-full text-base bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-text-header dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba aquí su mensaje..."/>   

              
          <button type="button" className="px-5 py-2.5 text-base font-medium text-text-header inline-flex items-center rounded-lg text-center m-3 bg-text-principal shadow-2xl hover:brightness-125 focus:ring-4 focus:outline-none focus:ring-text-header">
            <svg className="w-4 h-4 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
            Enviar Mensaje
          </button>

          <div>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone inline-block m-1" width="24" height="24" viewBox="0 0 24 28" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
              03544-15-579880 Jorge Rossi (solo whatsapp/videollamadas)</p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-2 inline-block m-1" width="24" height="24" viewBox="0 0 24 28" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
                <path d="M19 18v.01"></path>
              </svg>
              Calle de la Pirca s/n - Alto del Monte, Nono, Valle de Traslasierra (Córdoba-Argentina)
            </p>
          </div>

        </form>
        
    )
}

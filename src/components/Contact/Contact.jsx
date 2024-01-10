import React from 'react'

const Contact = () => {
  return (
    <div className="container px-6 mx-auto">
      {/* Section: Design Block */}
      <section className="text-gray-800">
        <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-80 contact123"> </div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 relative -top-52 sm:-top-32"
            style={{
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)"
            }}
          >
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                <form action="https://formspree.io/f/mpzvwark" method="POST">
                  <div className="form-group mb-6">
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Name" name='email' />
                  </div>
                  
                  <div className="form-group mb-6">
                    <textarea className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="message" rows={3} placeholder="Message" defaultValue={""} name='message' />
                  </div>
                  <div className="form-group form-check text-center mb-6">
                    {/* <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked: checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="exampleCheck87"
                      defaultChecked=""
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87"> Send me a copy of this message </label> */}
                  </div>
                  <button type="submit" className=" contactButton w-full px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Send </button>
                </form>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className=" rounded-md shadow-md w-14 h-14 flex items-center justify-center contactButton">
                         <ion-icon name="logo-linkedin" id='5' classname="contactFormIcons" size="large" style={{ color: 'white' }}/>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Linkedin</p>
                        <a href="https://www.linkedin.com/in/danila-giselle-muller-41635a174/" className='text-gray-500' Target='_blank'>Danila Giselle Muller</a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className=" rounded-md shadow-md w-14 h-14 flex items-center justify-center contactButton">
                         <ion-icon name="logo-whatsapp" id='2' classname="contactFormIcons" size="large" style={{ color: 'white' }}/>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Whatsapp</p>
                        <a href="https://wa.me/+5492923659077?text=¡Hola%20Danila!,%20vengo%20de%20la%20web%20para%20consultarte%20por%20" className='text-gray-500' Target='_blank'>+54 9 (2923)659077</a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className=" rounded-md shadow-md w-14 h-14 flex items-center justify-center contactButton">
                         <ion-icon name="logo-tiktok" id='3' classname="contactFormIcons" size="large" style={{ color: 'white' }}/>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">TikTok</p>
                        <a href="https://www.tiktok.com/@soydanilanodaniela" className='text-gray-500' Target='_blank'>@soydanilanodaniela</a>
                      </div>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className=" rounded-md shadow-md w-14 h-14 flex items-center justify-center contactButton">
                         <ion-icon name="logo-instagram" id='4' classname="contactFormIcons" size="large" style={{ color: 'white' }}/>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Instagram</p>
                        <a href="https://www.instagram.com/soydanilanodaniela/" className='text-gray-500' Target='_blank'>@soydanilanodaniela</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>

  )
}

export default Contact
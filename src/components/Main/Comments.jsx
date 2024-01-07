import React from 'react'

const Comments = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full bg-gray-200 border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              Qué dicen de mí
            </h2>
            <h3 className="text-xl mb-5 font-light">
              Experiencias de mis clientes.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-sdnd-main-color ml-1" />
              <span className="inline-block w-3 h-1 rounded-full bg-sdnd-main-color ml-1" />
              <span className="inline-block w-40 h-1 rounded-full bg-sdnd-main-color mx-1" />
              <span className="inline-block w-3 h-1 rounded-full bg-sdnd-main-color ml-1" />
              <span className="inline-block w-1 h-1 rounded-full bg-sdnd-main-color ml-1" />
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="./img/freya.jpg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      <a href="https://www.instagram.com/freyacaviahue/" Target='_blank'>freyacaviahue</a>
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Muy buena. Me ayudó mucho ya que hay herramientas que no manejo. Pienso que esta muy bueno sobretodo porque hay alguien experto que se encarga de hacer las redes. A veces estamos tan atareados que no podemos.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Stevie Tifft.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                    Dolore quod necessitatibus, labore sapiente, est, dignissimos
                    ullam error ipsam sint quam tempora vel.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="./img/fyf.jpeg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                    <a href="https://www.instagram.com/fyfserviciodeparrillas/" Target='_blank'>fyfserviciodeparrillas</a>
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    10 puntos, Excelente Dani!!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Charlie Howse.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto inventore voluptatum nostrum atque, corrupti, vitae
                    esse id accusamus dignissimos neque reprehenderit natus, hic
                    sequi itaque dicta nisi voluptatem! Culpa, iusto.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="./img/bqp.jpeg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                    <a href="https://www.instagram.com/serviciosanitario.pigue/" Target='_blank'>serviciosanitario.pigue</a>
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    La verdad que exelente! Nada para agregar que no sea felicitaciones por el trabajo realizado!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Kris Stanton.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem iusto, explicabo, cupiditate quas totam!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
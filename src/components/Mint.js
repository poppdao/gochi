import { countScore } from '../helpers/score';

const Mint = ({scores}) => {
  const poppScore = countScore(scores)
  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-6 py-6 px-6 lg:pl-12 lg:pr-6 bg-gray-50 rounded-xl">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-4 lg:mb-0">
              <div className="max-w-xl lg:pt-6">
                <div className="max-w-md mb-10">
                  <h2 className="text-3xl md:text-4xl font-semibold font-heading">
                    Get Certificate
                  </h2>
                </div>
                <p className="mb-10 text-xl text-gray-500">
                  POPP Certificate issues a decentralized collactable (NFT) that can
                  be used to prove skill and capability
                </p>
                <ul className="flex flex-wrap text-left text-base lg:text-lg">
                  <li className="w-full lg:w-1/2 mb-6 flex items-center">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Show Evidence</p>
                  </li>
                  <li className="w-full lg:w-1/2 mb-6 flex items-center">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Decentralized</p>
                  </li>
                  <li className="w-full lg:w-1/2 mb-6 flex items-center">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Collactable</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-white p-12 h-full rounded-xl text-center">
                <span className="inline-block mb-4 px-3 py-1 bg-red-50 rounded">
                  <h3 className="text-xs font-semibold text-red-500">
                    0xaabb....ccdd
                  </h3>
                </span>
                <p className="mb-6 lg:mb-12 text-gray-500">POPP Score</p>
                <div className="flex justify-center mb-12">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-500">
                  🍿
                  </span>
                  <p className="self-end text-5xl font-semibold font-heading">{poppScore}</p>
                </div>
                <a
                  className="block mb-4 py-4 text-sm text-center font-medium leading-normal text-white bg-red-400 hover:bg-red-300 rounded transition duration-200"
                  href="#"
                >
                  Mint POPP
                </a>
                <p className="text-gray-500">On Polygon Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mint

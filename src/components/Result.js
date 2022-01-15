import Report from './Report'

const Result = ({scores}) => {
  // console.log(scores)
  const poppScore = Object.values(scores).reduce((prev, cur) => typeof cur === 'string' ? prev : prev + cur, 0)
  return (
    <section className="relative py-20">
      <img
        className="hidden lg:block absolute top-0 left-0 mt-16"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt
      />
      <img
        className="hidden lg:block absolute top-0 right-0 mt-40"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          {/*span class="text-xs text-blue-400 font-semibold">What's new at Shuffle</span*/}
          <h2 className="mt-8 text-4xl font-semibold font-heading">
            🍿 POPP Score:
          </h2>
          <h1 className="mt-8 text-4xl font-semibold font-heading">{poppScore} ({scores.rank})</h1>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 lg:w-1/5 mb-6 lg:mb-0 px-4">
              <button className="w-full py-6 rounded-xl bg-red-400">
                <svg
                  className="mx-auto mb-5"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65991 17.7087L11.6508 12.5218L16.203 16.0977L20.1084 11.0573"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="24.6606"
                    cy="3.60028"
                    r="2.56293"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8994 2.16016H8.20906C4.1938 2.16016 1.7041 5.00379 1.7041 9.01904V19.7956C1.7041 23.8108 4.14499 26.6422 8.20906 26.6422H19.6812C23.6965 26.6422 26.1862 23.8108 26.1862 19.7956V10.4103"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-lg text-white font-semibold font-heading">
                  Report
                </p>
              </button>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5 mb-6 lg:mb-0 px-4">
              <button className="w-full py-6 rounded-xl bg-gray-50 hover:bg-gray-100">
              <svg
                className="mx-auto mb-5"
                width={28}
                height={26}
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8521 16.1943H21.4543C19.4724 16.1931 17.866 14.5879 17.8647 12.6059C17.8647 10.624 19.4724 9.01879 21.4543 9.01758H26.8521"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.0649 12.5238H21.6493"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33038 1H19.855C23.7192 1 26.8518 4.13268 26.8518 7.99689V17.5663C26.8518 21.4305 23.7192 24.5631 19.855 24.5631H8.33038C4.46618 24.5631 1.3335 21.4305 1.3335 17.5663V7.99689C1.3335 4.13268 4.46618 1 8.33038 1Z"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.38086 7.05094H14.5795"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
                <p className="text-lg text-gray-500 font-semibold font-heading">
                  Get POPP
                </p>
              </button>
            </div>
          </div>
        </div>
        <Report scores={scores} />
      </div>
    </section>
  )
}

export default Result

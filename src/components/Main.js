import ReactLoading from 'react-loading';

const Main = ({onChangeAddress, onSubmit, loading}) => {
  return (
    <section className="relative py-20">
      <img className="hidden lg:block absolute top-0 left-0 mt-16" src="zeus-assets/icons/dots/blue-dot-left-bars.svg" alt="" />
      <img className="hidden lg:block absolute bottom-0 right-0 mb-20" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="" />
      <div className="container px-4 mx-auto text-center">
        <span className="flex items-center justify-center mx-auto mb-10 w-16 h-16 bg-red-400 rounded-full">
          <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9024 6.85107L12.4591 10.4641C11.6196 11.1301 10.4384 11.1301 9.59895 10.4641L5.11816 6.85107" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="max-w-2xl mx-auto">
          <span className="inline-block mb-10 etxt-sm text-blue-400 font-semibold">Prove of Play Protocol (a.k.a 🍿 POPP)</span>
          <h2 className="mb-10 text-4xl font-semibold font-heading">🍿 POPP Score</h2>
          <p className="mb-16 text-lg text-gray-500">Given accountable score base on your 👻 <a className="text-purple-500" href="https://polygonscan.com/address/0x86935f11c86623dec8a25696e1c19a8659cbf95d" target="_blank" rel="noreferrer">Aavegochi</a> on-chain activities</p>
          <form action="#">
            <div className="flex flex-wrap items-center md:flex-nowrap">
              <div className="relative w-full lg:w-2/2 pb-4 flex flex-wrap mb-6 md:mb-0 md:mr-4">
                <input className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded" type="text" placeholder="e.g 0x1234... or demo.eth" onChange={onChangeAddress} />
                <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">Address</span>
              </div>
            </div>
            <button className="w-full lg:w-1/5 py-4 px-6 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200" onClick={onSubmit} disabled={loading}>{loading ? <ReactLoading type={'spinningBubbles'} color={'white'} height={'20%'} width={'20%'} /> : 'Get Score'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Main

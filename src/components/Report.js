const DATA = {
  votes: {
    "title": "Vote in DAO",
    "description": "Rank via vote numbers in Aavegochi snapshot",
  },
  gochi: {
    "title": "Gochi",
    "description": "Rank via gochi numbers",
  },
  avg_xp: {
    "title": "Average XP",
    "description": "Rank via gochi's average XP",
  },
  avg_kinship: {
    "title": "Average kinship",
    "description": "Rank via gochi's average kinship",
  },
  parcels: {
    "title": "Parcels",
    "description": "Rank via owned parcels",
  },
  GHST: {
    "title": "GHST",
    "description": "Rank via owned GHST token",
  },
  rank: {
    "title": "Ranking",
    "description": "Verdit the certificate",
  }
}

const Report = ({scores}) => {
  delete scores.hash
  delete scores.rank
  return (
    <div className="max-w-4xl mx-auto">
      <ul className="space-y-4">
        {Object.keys(scores).map((key) => (
          <li className="p-12 border rounded-lg">
            <button className="w-full flex justify-between items-center text-left font-semibold font-heading">
              <span className="text-2xl font-semibold font-heading">
                {DATA[key].title}: {scores[key]}
              </span>
              <svg
                className="flex-shrink-0"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.25 10C19.25 4.892 15.109 0.75 10 0.75C4.892 0.75 0.75 4.892 0.75 10C0.75 15.108 4.892 19.25 10 19.25C15.109 19.25 19.25 15.108 19.25 10Z"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.4712 11.4423L10.0002 7.95626L6.52919 11.4423"
                  stroke="#45C1FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="mt-4 max-w-2xl text-gray-500 leading-loose">
              {DATA[key].description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Report;

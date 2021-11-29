import React from 'react'

const Homesection4header = () => {
  return (
    <div>
      <div class="header-section4-maindiv">
        <div class="header-row1-content">
          <div class="round-heading-div">
            <h2 color="text" class="round-heading">
              Round
            </h2>
            <input
              pattern="^[0-9]+$"
              inputmode="numeric"
              id="round-id"
              name="round-id"
              scale="lg"
              class="input-field"
              value="291"
            />
          </div>
          <div class="round-heading-div">
            <button class="Arrow-button" scale="sm">
              <svg
                viewBox="0 0 24 24"
                color="text"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-svg"
              >
                <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path>
              </svg>
            </button>
            <button class="Arrow-button" scale="sm">
              <svg
                viewBox="0 0 24 24"
                color="text"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-svg"
              >
                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
              </svg>
            </button>
            <button
              class="sc-hKFxyN jYLfuR sc-eCApnc sc-kNnZrs fAYovO bDWgHi"
              scale="sm"
            >
              <svg
                viewBox="0 0 24 24"
                color="text"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-svg"
              >
                <path d="M3 13.1835H14.17L9.29 18.0635C8.9 18.4535 8.9 19.0935 9.29 19.4835C9.68 19.8735 10.31 19.8735 10.7 19.4835L17.29 12.8935C17.68 12.5035 17.68 11.8735 17.29 11.4835L10.71 4.88347C10.32 4.49347 9.69 4.49347 9.3 4.88347C8.91 5.27347 8.91 5.90347 9.3 6.29347L14.17 11.1835H3C2.45 11.1835 2 11.6335 2 12.1835C2 12.7335 2.45 13.1835 3 13.1835Z"></path>
                <path d="M20 5.18347C20.5523 5.18347 21 5.63119 21 6.18347V18.1835C21 18.7358 20.5523 19.1835 20 19.1835C19.4477 19.1835 19 18.7358 19 18.1835V6.18347C19 5.63119 19.4477 5.18347 20 5.18347Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="date-div">
          <div font-size="14px" color="text" class="date-heading4">
            Drawn Nov 25, 2021, 5:00 PM
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homesection4header

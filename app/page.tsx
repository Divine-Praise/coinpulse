import React from 'react'

const page = () => {
  return (
    <main className='main-container'>
      <section className='home-grid'>
        <div className='coin-overview'>
            <div className='header'>
                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcoin" />
            </div>
        </div>

        <p>Trending Coins</p>
      </section>

      <section className='w-full mt-7 space-y-4'>
        <p>Categories</p>
      </section>
    </main>
  )
}

export default page

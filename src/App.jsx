import './App.css';
function App() {
  const data = [
    {
      "category": "Reaction",
      "score": 80,
      "color": "hsl(0,100%,67%)",
      "icon": "./images/icon-reaction.svg",
      "alt": "Lighting Bolt"
    },
    {
      "category": "Memory",
      "score": 92,
      "color": "hsl(39,100%,56%)",
      "icon": "./images/icon-memory.svg",
      "alt": "Brain"
    },
    {
      "category": "Verbal",
      "score": 61,
      "color": "hsl(166,100%,37%)",
      "icon": "./images/icon-verbal.svg",
      "alt": "message"
    },
    {
      "category": "Visual",
      "score": 72,
      "color": "hsl(234,85%,45%)",
      "icon": "./images/icon-visual.svg",
      "alt": "eyes"
    }
  ]
  

  return (
    <main>
      <p className='text-[hsl(0,100%,67%)]  text-[hsl(39,100%,56%)] text-[hsl(166,100%,37%)] text-[hsl(234,85%,45%)] bg-[hsl(0,100%,67%)]  bg-[hsl(39,100%,56%)] bg-[hsl(166,100%,37%)] bg-[hsl(234,85%,45%)]'></p>
      <div className='md:h-screen md:flex md:items-center md:justify-center'>
        <div className='flex flex-col sm:flex-row justify-center text-lg '>
          <div  className='sm:basis-5/12 md:basis-4/12 p-10 flex items-center justify-center sm:p-4 rounded-b-[3rem] sm:rounded-t-[3rem] text-white w-full bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]'>
            <div className='text-center flex flex-wrap flex-col  gap-8'>
              <h1>Your Result</h1>

              <div className='w-40 md:w-52 h-40 animate-pulse md:h-52 flex flex-col items-center justify-center gap-2 m-auto rounded-full p-4 bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)]'>
                <span className='text-4xl hover:text-5xl   md:text-5xl font-bold an hover:animate-bounces md:hover:text-6xl transition-all duration-300'>75</span>
                <span className='text-slate-400'>of 100</span>
              </div>

              <div>
                <h2 className='font-bold text-3xl mb-4'>Great</h2>
                <p className='font-extralight w-10/12 m-auto '>You scored higher than 65% of the people who have taken these tests.</p>
              </div>
            </div>
          </div>

          <div  className='sm:basis-5/12 md:basis-4/12 rounded-t-[3rem] p-5 sm:p-3'>
            <h2 className='font-bold text-lg'>Summary</h2>

            <div className='flex flex-wrap gap-4 mt-4'>
              {data.map((item, idx)=>[
                <div key={idx} className={`px-8 py-5 bg-[${item.color}]  bg-opacity-5 hover:bg-opacity-20 cursor-pointer basis-full flex justify-between rounded-xl`}>
                  <div className={`text-[${item.color}] font-medium flex gap-3 `}>
                    <img src={item.icon} alt={item.alt} />
                    {item.category}</div>
                  <div className='text-black font-medium'>{item.score} <span className='text-slate-400'>/ 100</span></div>
                </div>
              ])}
            </div>

            <button className='text-slate-300 font-bold bg-slate-800 p-4 w-full rounded-3xl mt-10 hover:bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]'>Continue</button>

          </div>
        </div>
      </div>
    </main>
  )
}

export default App

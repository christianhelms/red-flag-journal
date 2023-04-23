export default function Home() {
  return (
    <main className="bg-white">
      <div>
        <h1 className="m-5 text-red-500 text-center text-7xl font-bold">The Red Flag Journal</h1>
      </div>
      <div className="flex flex-col container p-5 content-center justify-center text-center w-96 h-24 bg-red-400 rounded">
        <h2 className="font-bold text-2xl">⚠️ Tip:</h2>
        <p>Don't forget to touch on your client's pain point in your proposal!</p>
      </div>
      <div>
        <form className="flex flex-col w-full h-screen bg-white flex justify-center items-center" action="/send-data-here" method="post">
          <div className="flex">
            <div className="flex flex-col m-5">
              <label className="m-5 font-bold text-black" for="first">Client First Name:</label>
              <input className="bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" type="text" id="first" name="first" />
              <label className="m-5 font-bold text-black" for="last">Client Last Name:</label>
              <input className="bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" type="text" id="last" name="last" />
              <label className="m-5 font-bold text-black" for="phone">Client Phone:</label>
              <input className="bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" type="text" id="phone" name="phone" />
              <label className="m-5 font-bold text-black" for="email">Client Email Address:</label>
              <input className="bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" type="text" id="email" name="email" />
            </div>
            <div className="flex flex-col m-5">
              <label className="m-5 font-bold text-black" for="first">What is the client looking to achieve?</label>
              <input className="bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" type="text" id="achievement" name="achievement" />
              <label className="m-5 font-bold text-black" for="last">What is getting in their way?</label>
              <input className="bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" type="text" id="obstruction" name="obstruction" />
            </div>
          </div>
          <div className="m-5">
            <button className="w-64 h-12 px-6 m-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
            <button className="w-64 h-12 px-6 m-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Save & Create Proposal</button>
          </div>
        </form>
      </div>
    </main>
  )
}

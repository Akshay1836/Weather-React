import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    temperature: 27,
    name: "Kochi",
    country: "india",
    description: "clear-sky",
    humidity: 34,
    max: 37,
    min: 30,
    wind: 2,
    visibility: 1000,
  });
  const [place, setPlace] = useState("Kochi");
  async function search() {
    // const url = `https://open-weather13.p.rapidapi.com/city/${place}`;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     // "X-RapidAPI-Key": "014914a917msh8d9672dd5d973dfp174d26jsn6b7817f22c5a",
    //     "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    //   },

    // };

    // const Api='694fa586a643605dcb00fb3cfdc1a938';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${Api}&units=metric`;

    try {
      const response = await fetch(url);
      console.log("response:",response);
      const result = await response.json();
      console.log(result);
      setData({
        ...data,
        temperature:result.main.temp,
        name: result.name,
        country: result.sys.country,
        description: result.weather[0].description,
        humidity: result.main.humidity,
        wind: result.wind.speed,
        visibility: result.visibility,
        max: result.main.temp_max,
        min: result.main.temp_min,
      });
      console.log("data",data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    search();
  }, []);

  return (
    <>
    <div className="h-screen w-full relative">
    <img
      className="h-full w-full bg-cover bg-center opacity-90 "
      src="https://images.pexels.com/photos/7084222/pexels-photo-7084222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="nature image"
    />
    <div className=" w-full flex items-center justify-center flex-col absolute top-12">

    <div className="p-2 m-4 sm:w-1/2 md:w-1/3 2xl:w-1/4 inline-flex bg-white/10 rounded-md">
    <input className="h-10 sm:w-1/2 md:w-full rounded-md border text-white border-black/30 bg-transparent px-3 py-2 text-sm"
          placeholder="Search Your location"
          type="search"
          onChange={(e) => setPlace(e.target.value)}
        />
        <button className="rounded-full bg-cyan-800 px-6 py-2 text-md font-semibold text-white shadow-sm hover:text-cyan-800/80 hover:bg-white mx-6" onClick={search}>Search</button>
    </div>
      <div class="sm:w-1/2 md:w-1/3 flex items-center justify-center mt-4">
        <div class="flex flex-col bg-white/40 rounded-lg p-4 w-full max-w-xs">
          <div class=" text-xl text-black">Location: {data.name}</div>
          {/* <div class="text-sm text-gray-500">{date}</div> */}
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-black/90 h-24 w-24 opacity-40">
            <svg
              class="w-32 h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-5xl">
              {data.temperature}°c
            </div>
            <div class="flex flex-col items-center ml-6">
              <div className="font-bold">Cloudy</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light text-black">
                  Max : {data.max}°c
                </span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light text-black">
                  Min : {data.min}°c
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm text-bold">Wind</div>
              <div class="text-sm text-black">{data.wind}k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm text-black">
                {data.humidity - 32}%
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm text-black">
                {data.visibility / 1000}Km
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;

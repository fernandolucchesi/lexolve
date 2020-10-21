import { useState } from "react";

export default function Giphy({}) {
  const [giphyUrl, setGiphyUrl] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    let searchFor = e.target.search.value || "cats";

    fetch("/api/giphy?search=" + searchFor)
      .then((response) => response.json())
      .then((data) => {
        let index = Math.floor(Math.random() * 50);
        let url = data.data[index].images.fixed_height.url;
        setGiphyUrl(url);
      });
  }
  return (
    <>
      <form
        className="px-8 mt-8 w-full flex flex-column flex-wrap md:flex-row  place-content-center"
        onSubmit={onSubmit}
      >
        <input
          className="px-2 shadow appearance-none border w-full md:w-1/3 lg:w-1/5 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="search"
          name="search"
          placeholder="Cat... Or something else..."
        />
        <button
          className="btn primary w-full md:w-1/6 lg:w-1/12 mt-4 md:mt-0 md:ml-4"
          type="submit"
          value="Submit"
        >
          Magic
        </button>
      </form>
      <div className="mt-8 w-full flex place-content-center">
        <img className="rounded-3xl shadow-2xl" src={giphyUrl} />
      </div>
    </>
  );
}

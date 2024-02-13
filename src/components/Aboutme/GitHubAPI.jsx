import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 2000 });

    fetch('https://api.github.com/users/digoarthur/repos?sort=created&per_page=999')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))
  }, []);



  const [data, setData] = useState([])



  return (
    <div id="aboutme" className="flex flex-col   w-full ">
      <h1 className=" pt-28 text-5xl text-[#FC4C54]  mb-16">
        Utilizando GitHub API
        <hr className=" border-[#FC4C54] mt-3 border-2 w-28" />
      </h1>
      <ul className="grid grid-cols-2 gap-16 max-md:grid-cols-2  max-sm:grid-cols-1 ">
        {data.map((item, index) => {
          return (
            <div
            key={index}
              data-aos={"fade-up"}
              className="h-80 w-96 relative  drop-shadow-2xl bg-[#262337] p-10 max-sm:w-full"

            >
              <li className="grid  " key={item.id}>
                {/*html Url*/}

                {/*Name Project*/}
                <h1 className="text-2xl font-bold mb-4">{item.name}</h1>

                {/*Description*/}
                {
                  item.description? ( <p className="">{item.description.slice(0, 170) + " [...]"}</p>):('fill description in GitHub')
                }
               

                {/*Homepage*/}
                <div className="flex items-center">
                  <a className=" flex gap-2" href={item.homepage}>
                    <h3 className="font-bold  ">🌐 Site </h3>

                  </a>

                  <a href={item.html_url}>🔗 Código</a>
                </div>


                {/*Stacks Icon*/}
                <div className=" flex flex-col absolute left-[-50px] gap-2">
                  {item.topics.map((icon,index) => (


                    <span key={index} className="text-xs">{icon}</span>

                  ))}
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
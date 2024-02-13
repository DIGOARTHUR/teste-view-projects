import { useEffect, useState, React } from "react";
import {
  useGitHubAutomatedRepos,
  ProjectIcons,
  StackIcons,
  IGithubRepos,
  
} from "github-automated-repos";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Projects() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

 

  const data = useGitHubAutomatedRepos("digoarthur", "deploy");
  console.log(data)

  return (
    <div id="projects" className="flex flex-col   w-full ">
      <h1 className=" pt-28 text-5xl text-[#FC4C54]  mb-16">
        github-automated-repos
        <hr className=" border-[#FC4C54] mt-3 border-2 w-28" />
      </h1>
      <div className="flex justify-center mb-5">

<img className="w-[900px] mb-10" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/304559720-ca47a9e9-a216-425d-babf-a20b0b79bad4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T215840Z&X-Amz-Expires=300&X-Amz-Signature=0773dc915b95dff12196999b08c5dd44f92c91462a0b7e6250dd0a79cc99fddc&X-Amz-SignedHeaders=host&actor_id=59892368&key_id=0&repo_id=723035297 "></img>
</div>
      <ul className="grid grid-cols-3 gap-16 max-md:grid-cols-2  max-sm:grid-cols-1 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              data-aos={"fade-up"}
              className=" w-72 relative  drop-shadow-2xl bg-[#262337] p-10 max-sm:w-full"

            >
              <li className="" key={item.id}>
              

               
                {/*html Url*/}
              {  <img className="w-[500px]" src={item.banner}/>?(<img className="w-[500px]" src={item.banner}/>):(<div></div>)}
      
                {/*Name Project*/}
                <h1 className="text-2xl font-bold mb-4">{item.name}</h1>

                {/*Description*/}
                <p className="">{item.description.slice(0, 170) + " [...]"}</p>

                {/*Homepage*/}
                <div className="flex items-center mt-4">
                  <a className=" flex gap-2" href={item.homepage}>
                    <h3 className="font-bold  ">🌐 Site </h3>

                  </a>

                  <a href={item.html_url}>🔗 Código</a>
                </div>
                {/*Stacks Icon*/}
                <div className=" flex absolute top-[-15px] right-10 gap-1">
                  {item.topics.map((icon, index) => {
                    return (

                      <StackIcons
                        className=" h-8 "
                        key={index}
                        itemTopics={icon}
                      />

                    );
                  })}
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

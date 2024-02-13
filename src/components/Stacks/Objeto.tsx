import { AiOutlineLink } from "react-icons/ai";
import { useEffect, useState, React } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
export default function Stacks() {

    const data = [{
        id:2525,
        html_url:'',
        banner:'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/300213078-68f59bce-0d8f-4cea-81c9-01596d97f47e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T144459Z&X-Amz-Expires=300&X-Amz-Signature=010c7db54f7ad7470fd7885e7c1a7ebbf43643b8c9c3710397a2938a3199e19e&X-Amz-SignedHeaders=host&actor_id=59892368&key_id=0&repo_id=585693873',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
        name:'Projeto1',
        homepage:'',
        topics:['https://user-images.githubusercontent.com/59892368/163742043-d6c47b38-187c-47d5-8d09-b1870b86b612.png','https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg','https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg','https://user-images.githubusercontent.com/59892368/223381109-88617798-75ae-4f3a-bc4a-1210637f818c.svg']
    },
    {
        id:25252,
        html_url:'',
        banner:'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/300213332-bfcd0785-ce8a-4327-8b8b-5de495528c3f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T150033Z&X-Amz-Expires=300&X-Amz-Signature=d048fb21b88275a08ffa66c5dd7df366ac30971e47c4a3f12555a302a7980f05&X-Amz-SignedHeaders=host&actor_id=59892368&key_id=0&repo_id=585693873',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
        name:'Projeto 2',
        homepage:'',
        topics:['https://user-images.githubusercontent.com/59892368/163742043-d6c47b38-187c-47d5-8d09-b1870b86b612.png','https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg','https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg','https://user-images.githubusercontent.com/59892368/223381109-88617798-75ae-4f3a-bc4a-1210637f818c.svg']
    }
]
    
console.log(data)
        return (
            <div id="stacks" className="flex flex-col   w-full ">
              <h1 className=" pt-28 text-5xl text-[#FC4C54]  mb-16">
                Utilizando Objeto
               
                <hr className=" border-[#FC4C54] mt-3 border-2 w-28" />
              </h1>

              <div className="flex justify-center mb-5">

<img className="w-[900px] mb-12" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/304562410-dbd21ea2-b78b-4b03-9929-1bcc6d809398.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T221129Z&X-Amz-Expires=300&X-Amz-Signature=11e5131e150f1b0ca1bec78774da7f77f437e0ca1f356cb474fd46bc0b25c9d8&X-Amz-SignedHeaders=host&actor_id=59892368&key_id=0&repo_id=723035297"></img>
</div>
              <ul className="grid grid-cols-3 gap-16 max-md:grid-cols-2  max-sm:grid-cols-1 ">
                {data.map((item, index) => {
                  return (
                    <div
                    key={index}
                      data-aos={"fade-up"}
                      className=" h-92 w-72 relative  drop-shadow-2xl bg-[#262337] p-10 max-sm:w-full"
                     
                    >
                      <li className="" key={item.id}>

                        <img className="w-[500px]" src={item.banner}></img>

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
                        <div className=" flex absolute top-[-15px] right-10 ">
                          {item.topics.map((icon,index) => {
                            return (
                                <img className="h-7" src={icon}></img>
                         
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
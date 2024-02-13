import { AiOutlineLink } from "react-icons/ai";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
export default function Stacks() {

    const data = [{
        id:2525,
        html_url:'',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
        name:'Projeto1',
        homepage:'',
        topics:['https://user-images.githubusercontent.com/59892368/163742043-d6c47b38-187c-47d5-8d09-b1870b86b612.png','https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg','https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg','https://user-images.githubusercontent.com/59892368/223381109-88617798-75ae-4f3a-bc4a-1210637f818c.svg']
    },
    {
        id:25252,
        html_url:'',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
        name:'Projeto 2',
        homepage:'',
        topics:['https://user-images.githubusercontent.com/59892368/163742043-d6c47b38-187c-47d5-8d09-b1870b86b612.png','https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg','https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg','https://user-images.githubusercontent.com/59892368/223381109-88617798-75ae-4f3a-bc4a-1210637f818c.svg']
    }
]
    
        return (
            <div id="stacks" className="flex flex-col   w-full ">
              <h1 className=" pt-28 text-5xl text-[#FC4C54]  mb-16">
                Utilizando Objeto
               
                <hr className=" border-[#FC4C54] mt-3 border-2 w-28" />
              </h1>
              <ul className="grid grid-cols-3 gap-16 max-md:grid-cols-2  max-sm:grid-cols-1 ">
                {data.map((item, index) => {
                  return (
                    <div
                    key={index}
                      data-aos={"fade-up"}
                      className=" h-80 w-72 relative  drop-shadow-2xl bg-[#262337] p-10 max-sm:w-full"
                     
                    >
                      <li className="" key={item.id}>
                        {/*html Url*/}
     
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
import { button } from "@components/types/interfaces"

 export const LitUpBtn = ({text, onClick}:button) => {
  return (
    <button className="p-[3px] relative my-3">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-10 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    {text}
  </div>
</button>
  )
}

export const NormalBtn = ()=>{
  return(
    <button>hello</button>
  )
}

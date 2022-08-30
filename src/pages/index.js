import axios from "axios"
import User from "@/components/user";


export default function Home({data}) {
  return (
    <> 
      {/* <User data={data} /> */}
    </>
  )
}

export async function getServerSideProps(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = res.data

  return {
    props:{
      data
    }
  }
}
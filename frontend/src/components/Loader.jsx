import Logo from '../assets/igloo.png'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <img src={Logo} className='w-10 animate-pulse' alt="" />
    </div>
  )
}

export default Loader
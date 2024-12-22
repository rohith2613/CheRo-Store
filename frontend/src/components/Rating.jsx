import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';



const Rating = ({value,text}) => {
  return (
    <div className='flex items-center'>
  <span className='text-yellow-500'>{value >= 1? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar /> }</span>
  <span className='text-yellow-500'>{value >= 2? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar /> }</span>
  <span className='text-yellow-500'>{value >= 3? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar /> }</span>
  <span className='text-yellow-500'>{value >= 4? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar /> }</span>
  <span className='text-yellow-500'>{value >= 5? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar /> }</span>
  <span className='font-semibold text-sm'>{text && text} reviews</span>
    </div>
  )
}

export default Rating
import { XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const OrderCard = ({product, handleDelete}) => {
  const { id, title, image, price } = product
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='w-6 h-6 text-black cursor-pointer' />
  }
  
  return (
    <div className="flex items-center justify-between mb-3 border-b border-gray-300">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <Image className='object-cover w-full h-full rounded-lg' width={100} height={100} src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard
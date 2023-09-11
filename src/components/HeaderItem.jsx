import PropTypes from 'prop-types';

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline hover:text-slate-400 underline-offset-8 mb-3'>
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  )
}

HeaderItem.propTypes = {
  name: PropTypes.string,
  Icon: PropTypes.func
}

export default HeaderItem;
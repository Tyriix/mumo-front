import './wrapper.scss';
type WrapperProps = {
    children: React.ReactNode;
}
const Wrapper = (props: WrapperProps) => {
  return (
    <div className='wrapper'>
        {props.children}
    </div>
  )
}

export default Wrapper;
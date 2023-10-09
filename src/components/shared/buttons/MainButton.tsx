import { FC } from 'react'
import './button-components.scss'
import classNames from 'classnames'

interface Props {
  content: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MainButton: FC<Props> = ({ content, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('main-button', className)}
    >
      {content}
    </button>
  )
}

export default MainButton

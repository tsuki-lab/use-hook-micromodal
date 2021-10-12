import { createPortal } from 'react-dom'
import styled from 'styled-components'

type Element = JSX.IntrinsicElements['div']
type Modal = {
  id: string
}
type Props = Element & Modal

export const Modal: React.FC<Props> = ({ children, id }) => {
  return createPortal(
    <Wrap id={id} aria-hidden="true">
      <Overlay className="overlay" tabIndex={-1} data-micromodal-close>
        <div role="dialog" aria-modal="true">
          {children}
        </div>
      </Overlay>
    </Wrap>,
    document.body
  )
}

const Wrap = styled.div`
  display: none;
  &.is-open {
    display: block;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

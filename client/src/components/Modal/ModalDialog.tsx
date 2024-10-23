import { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import { createPortal } from 'react-dom';

interface ModalDialogProps {
  title: string,
  children: ReactNode,
  onClose: () => void,
}

export function ModalDialog({ title, children, onClose }: ModalDialogProps) {
  const errorEl = document.getElementById('error-modal');
  if (!errorEl) return (<>Error: element not found!</>);
  return createPortal(
  <>
    <div>{title}</div>
    <div>
      {children}
    </div>
    <div><Button variant='danger' onClick={onClose}>Close</Button></div>
  </>, errorEl
)
}

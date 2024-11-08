import classNames from 'classnames';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import {useMountTransition} from '../../../hooks';
import './index.scss'
import { Flex } from '../flex';
import { Title } from '../title';
import { Button } from '../button';
import { SvgIcon } from '../svg-icon';

type DrawerProps = {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  width?: string | number;
  position?: 'left' | 'right' | 'top' | 'bottom';
  title?: ReactNode;
  footer?: ReactNode;
  onClose: VoidFunction;
};

function createPortalRoot() {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');

  return drawerRoot;
};

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  children,
  className,
  width = '40vw',
  position = 'right',
  title,
  footer,
  onClose,
}) => {
  const isTransitioning = useMountTransition(isOpen, 300);
  
  const bodyRef = useRef<any>(document.querySelector('body'));
  const portalRootRef = useRef<any>(document.getElementById('drawer-root') || createPortalRoot());

  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;

    return () => {
      portal.remove();
      bodyEl.style.overflow = '';
    }
  }, []);

  useEffect(() => {
    const onKeyPress = (e: any) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress);
    }
  }, [isOpen, onClose]);

  if (!isTransitioning && !isOpen) {
    return null;
  }

  return createPortal(
    <div
      aria-hidden={isOpen ? 'false' : 'true'}
      className={classNames('drawer-container', {
        open: isOpen,
        in: isTransitioning,
        className,
      })}
    >
      <div
        className={classNames('drawer', position)}
        style={{ width }}
        role={'dialog'}
      >
        <div className={classNames('drawer-header', {noTitle: !title})}>
          <Flex align={'center'} justify={!!title ?'space-between' : 'end'}>
            {!!title && <Title level={3}>{title ?? 'some title'}</Title>}

            <Button
              icon={<SvgIcon type={'close'} />}
              onClick={onClose}
            />
          </Flex>
        </div >
        <div className={'drawer-body'}>
          <div className={'drawer-content'}>
            {children}
          </div>
          <div className={'drawer-footer'}>
            {footer}
          </div>
        </div>
        </div>
      <div className={'backdrop'} onClick={onClose} />
    </div>,
    portalRootRef.current,
  );
}
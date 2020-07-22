import React, { useEffect } from 'react';
import { TransitionablePortal, Segment } from 'semantic-ui-react';
import { setInterval } from 'timers';

type Props = {
    isOpen: boolean,
    text: string,
    setOpenNotification(open: boolean): void,
}

export const Notification = ({ isOpen, text, setOpenNotification }: Props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('LOG: timer -> false');
            setOpenNotification(false)
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <TransitionablePortal
            onClose={() => setOpenNotification(false)}
            onOpen={() => setOpenNotification(true)}
            open={isOpen} transition={{ animation: 'drop' }}>
            <Segment
                style={{ left: '40%', position: 'fixed', top: 0, zIndex: 1000 }}
            >
                <p>{text}</p>
            </Segment>
        </TransitionablePortal>
    )
};

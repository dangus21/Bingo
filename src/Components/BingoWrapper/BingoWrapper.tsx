import React from 'react';
import { Card } from 'semantic-ui-react';

type Props = {
    children: any,
}

export const BingoWrapper = ({ children }: Props) => {
    return (
        <Card.Group>
            {children}
        </Card.Group>
    )
};

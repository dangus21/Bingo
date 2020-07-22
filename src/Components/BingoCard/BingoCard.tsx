import React from 'react';
import { BingoTemplate, BingoCardEditOptions } from 'declarations/BingoCard';
import copy from 'copy-to-clipboard';

import { Card, Input } from 'semantic-ui-react'

interface Props extends BingoTemplate {
    setEdit(options: BingoCardEditOptions): void,
    setText(id: string, value: string): void
    setOpenNotification(open: boolean): void
    setNotificationText(open: string): void
}

export const BingoCard = ({
    text,
    placeholder,
    id,
    isEditing,
    uuid,
    setEdit,
    setText,
    setOpenNotification,
    setNotificationText
}: Props) => {
    const copyUuidOpenNotification = () => {
        copy(uuid);
        setNotificationText('Bingo card ID copied to clipboard');
        setOpenNotification(true);
    }
    return (
        <Card
            onClick={() => !isEditing && setEdit({ id })}>
            <Card.Content>
                <Card.Meta>
                    <small onClick={copyUuidOpenNotification}><span>{uuid}</span></small>
                </Card.Meta>
            </Card.Content>
            <Card.Content>
                {isEditing ?
                    <Input
                        placeholder={placeholder}
                        value={text}
                        onChange={(e: any) => setText(id, e.target.value)}
                        onKeyDown={(e: any) => e.keyCode === 13 && setEdit({ id })} />
                    :
                    <span>{text || placeholder}</span>
                }
            </Card.Content>
        </Card >

    )
}
import React from 'react';
import { BingoTemplate, BingoCardEditParams } from 'interfaces/BingoCard';
import copy from 'copy-to-clipboard';

import { Card, Input } from 'semantic-ui-react'

import styles from './styles.module.scss'

interface Props extends BingoTemplate {
    setEdit(id: string, options?: BingoCardEditParams): void,
    setNotification(open: string): void
}

export const BingoCard = ({
    text,
    placeholder,
    id,
    isEditing,
    uuid,
    setEdit,
    setNotification,
}: Props) => {
    const copyUuidOpenNotification = () => {
        copy(uuid);
        setNotification('Bingo card ID copied to clipboard');
    }

    const cardContentClick = () => {
        !isEditing && setEdit(id);
    }

    return (
        <Card>
            <Card.Content onClick={copyUuidOpenNotification} className={styles.cursorCopy}>
                <Card.Meta>
                    <small><span>{uuid}</span></small>
                </Card.Meta>
            </Card.Content>
            <Card.Content onClick={cardContentClick} className={styles.bingoCardSizing}>
                {isEditing ?
                    <Input
                        placeholder={placeholder}
                        value={text}
                        onChange={(e: any) => setEdit(id, { text: e.target.value, isEditing: true })}
                        onKeyDown={(e: any) => e.keyCode === 13 && setEdit(id)} />
                    :
                    <span>{text || placeholder}</span>
                }
            </Card.Content>
        </Card >

    )
}
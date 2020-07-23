import React from 'react';
import { BingoTemplate, BingoCardEditOptions } from 'interfaces/BingoCard';
import copy from 'copy-to-clipboard';

import { Card, Input } from 'semantic-ui-react'

import styles from './styles.module.scss'

interface Props extends BingoTemplate {
    setEdit(options: BingoCardEditOptions): void,
    setText(id: string, value: string): void
    setNotification(open: string): void
}

export const BingoCard = ({
    text,
    placeholder,
    id,
    isEditing,
    uuid,
    setEdit,
    setText,
    setNotification,
}: Props) => {
    const copyUuidOpenNotification = () => {
        copy(uuid);
        setNotification('Bingo card ID copied to clipboard');
    }
    return (
        <Card>
            <Card.Content onClick={copyUuidOpenNotification} className={styles.cursorCopy}>
                <Card.Meta>
                    <small><span>{uuid}</span></small>
                </Card.Meta>
            </Card.Content>
            <Card.Content onClick={() => !isEditing && setEdit({ id })} className={styles.bingoCardSizing}>
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
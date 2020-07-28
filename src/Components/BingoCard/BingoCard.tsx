import React from 'react';
import { BingoTemplate, BingoCardEditParams } from 'interfaces/BingoCard';
import copy from 'copy-to-clipboard';
import c from 'classnames';

import { Card, Input, Icon } from 'semantic-ui-react'

import styles from './styles.module.scss'

interface Props extends BingoTemplate {
    setEdit(id: string, options?: BingoCardEditParams): void,
    setNotification(open: string): void
}

export const BingoCard = ({
    text,
    placeholder,
    id,
    allowEditing,
    isEditing,
    isChecked,
    uuid,
    setEdit,
    setNotification,
}: Props) => {
    const copyUuidOpenNotification = () => {
        copy(uuid);
        setNotification('Bingo card ID copied to clipboard');
    }

    const cardContentClick = () => {
        allowEditing && !isEditing && setEdit(id, { isEditing: true, allowEditing: true });
    }

    return (
        <Card>
            <Card.Content >
                <Card.Meta className={styles.bingoCardMeta}>
                    <small onClick={copyUuidOpenNotification} className={styles.cursorCopy}><span>{uuid}</span></small>
                    {!isChecked ?
                        <span
                            onClick={() =>
                                setEdit(id, {
                                    isChecked: true,
                                    isEditing: false,
                                    allowEditing: false
                                })}>
                            <Icon name="check" color="green"/>
                        </span> :
                        <span
                            onClick={() =>
                                setEdit(id, {
                                    isChecked: false,
                                    allowEditing: true,
                                })}>
                            <Icon name="close" color="red"/>
                        </span>
                    }
                </Card.Meta>
            </Card.Content>
            <Card.Content
                onClick={cardContentClick}>
                <div className={c(styles.bingoCardContentSizing, { [styles.checked]: isChecked })}>
                    {isEditing ?
                        <Input
                            placeholder={placeholder}
                            value={text}
                            onChange={(e: any) => setEdit(id, { text: e.target.value, isEditing: true })}
                            onKeyDown={(e: any) => e.keyCode === 13 && setEdit(id, { isEditing: false })} />
                        :
                        <span className={c({[styles.editingTextPrevent]: !allowEditing})}>{text || placeholder}</span>
                    }
                </div>
            </Card.Content>
        </Card >

    )
}
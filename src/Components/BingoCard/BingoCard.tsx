import React from 'react';
import styles from './styles.module.scss';
import c from 'classnames';

import { BingoTemplate, BingoCardEditOptions } from 'declarations/BingoCard';
import Grid from '@material-ui/core/Grid';

interface Props extends BingoTemplate {
    setEdit(options: BingoCardEditOptions): void,
    setText(id: string, value: string): void
}

export const BingoCard = ({ text, placeholder, id, setEdit, setText, isEditing, uuid }: Props) => {
    // document.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     event.stopImmediatePropagation();

    //     (event.srcElement as HTMLElement)?.id !== `bingoCard-${uuid}` && setEdit({closeAll: true})
    // })
    return (
        <Grid
            item
            xs={12}
            md={2}
            id={`bingoCard-${uuid}`}
            className={c(styles.wrapper, { [styles.editing]: isEditing })}
            onClick={() => !isEditing && setEdit({ id })}>
            {isEditing ?
                <input
                    placeholder={placeholder}
                    value={text}
                    onChange={(e) => setText(id, e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 && setEdit({ id })} /> :
                <span style={{ pointerEvents: 'none' }}>
                    {text || placeholder}
                </span>}
        </Grid>
    )
};

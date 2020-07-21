import React from 'react';
import styles from './styles.module.scss';
import Grid from '@material-ui/core/Grid';

type Props = {
    children: any,
}

export const BingoWrapper = ({ children }: Props) => {
    return (
        <Grid container className={styles.wrapper} spacing={2}>
            <Grid item xs={12} md={9}>
                <Grid container justify="center" spacing={2}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
};

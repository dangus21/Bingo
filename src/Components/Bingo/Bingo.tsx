import React, { useState } from "react";
import "./Bingo.css";
import { v4 as uuidv4 } from 'uuid';
import { BingoTemplate, BingoCardEditOptions } from "interfaces/BingoCard";

import BingoCard from "Components/BingoCard";
import BingoWrapper from "Components/BingoWrapper";

import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, Grid, Rail } from "semantic-ui-react";

import 'react-toastify/dist/ReactToastify.css';

export const Bingo = () => {
    const [counter, setCounter] = useState<number>(0)
    const notify = (text: string) => toast(text);

    const bingoPreset: BingoTemplate = {
        text: '',
        placeholder: 'Edit Me',
        id: counter.toString(),
        isEditing: false,
        uuid: uuidv4(),
    }

    const debugBingos = Array(8).fill({}).map(b => ({ ...bingoPreset, ...b, uuid: uuidv4() }))

    const [bingos, setBingos] = useState<BingoTemplate[]>(process.env.NODE_ENV === "development" ? debugBingos : [])


    const addAndIncrement = (): void => {
        setBingos([...bingos, bingoPreset]);
        setCounter(counter + 1);
    }

    const setEdit = ({ id, closeAll }: BingoCardEditOptions): void => {
        if (closeAll) {
            setBingos(
                bingos.map(bingo =>
                    bingo.id === id ?
                        {
                            ...bingo,
                            isEditing: false
                        } : bingo
                )
            )
        } else {
            setBingos(
                bingos.map(bingo =>
                    bingo.id === id ?
                        {
                            ...bingo,
                            isEditing: !bingo.isEditing
                        } : bingo
                )
            )
        }
    }

    const setText = (id: string, text: string): void => {
        setBingos(
            bingos.map(bingo =>
                bingo.id === id ?
                    {
                        ...bingo,
                        text,
                    } : bingo
            )
        )
    }

    return (
        <Container fluid style={{ padding: "15px 0"}}>
            <ToastContainer autoClose={2500} hideProgressBar closeOnClick />
            <Grid stackable centered columns="2">
                <Grid.Column>
                    <BingoWrapper>
                        {bingos.map(bingo =>
                            <BingoCard
                                key={bingo.id.toString()}
                                setEdit={setEdit}
                                setText={setText}
                                setNotification={notify}
                                {...bingo} />
                        )}
                    </BingoWrapper>
                    <Rail style={{marginTop: 13}} close position="right">
                        <Button primary onClick={addAndIncrement}>Add Bingo Card</Button>
                    </Rail>
                </Grid.Column>
            </Grid>
        </Container>
    )
}
